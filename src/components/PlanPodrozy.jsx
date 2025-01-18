import React, { useState, useContext, useRef, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { ItineraryContext } from '../contexts/ItineraryContext';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { 
  FaPlus, 
  FaMinus, 
  FaPrint, 
  FaFilePdf, 
  FaClock, 
  FaDollarSign, 
  FaMapMarkerAlt, 
  FaCar, 
  FaWalking, 
  FaGripVertical, 
  FaTrash,
  FaMapMarkedAlt,
  FaExclamationTriangle } from 'react-icons/fa';

const PlanPodrozy = () => {
  const { 
    itineraryItems, 
    removeFromItinerary, 
    calculateTravelTimes,
    getAttractionCoordinates,
    formatTravelTime,
    kmToMiles
  } = useContext(ItineraryContext);
  const [numberOfDays, setNumberOfDays] = useState(5);
  const [suggestedDays, setSuggestedDays] = useState(5);
  const planRef = useRef(null);
  const [days, setDays] = useState({
    1: [],
    2: [],
    3: [],
    4: [],
    5: []
  });
  const [showDayWarning, setShowDayWarning] = useState(false);
  const [dayTimes, setDayTimes] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  });

  const MAX_MINUTES_PER_DAY = 480; // 8 hours
  const WARN_MINUTES_PER_DAY = 420; // 7 hours

  // Calculate total time for a sequence of attractions including travel time
  const calculateDayTime = (attractions) => {
    if (!attractions || attractions.length === 0) return 0;
    
    let totalTime = 0;
    
    // Add visiting times
    attractions.forEach(attraction => {
      totalTime += attraction.duration || 120; // default 2 hours if not specified
    });
    
    // Add travel times
    for (let i = 0; i < attractions.length - 1; i++) {
      const travelData = calculateTravelTimes(attractions[i].name, attractions[i + 1].name);
      if (travelData) {
        totalTime += travelData.driving;
      }
    }
    
    return totalTime;
  };

  // Calculate suggested number of days based on total time
  const calculateSuggestedDays = (items) => {
    if (!items || items.length === 0) return 1;

    let totalTime = 0;
    let maxAttractionTime = 0;

    // Calculate total time including travel
    for (let i = 0; i < items.length; i++) {
      const attractionTime = items[i].duration || 120;
      totalTime += attractionTime;
      maxAttractionTime = Math.max(maxAttractionTime, attractionTime);

      if (i < items.length - 1) {
        const travelData = calculateTravelTimes(items[i].name, items[i + 1].name);
        if (travelData) {
          totalTime += travelData.driving;
        }
      }
    }

    // Calculate minimum days needed based on different criteria
    const daysBasedOnTime = Math.ceil(totalTime / MAX_MINUTES_PER_DAY);
    const daysBasedOnCount = Math.ceil(items.length / 3); // Max 3 attractions per day
    const daysBasedOnMaxAttraction = Math.ceil(maxAttractionTime / (MAX_MINUTES_PER_DAY * 0.7));

    return Math.min(Math.max(daysBasedOnTime, daysBasedOnCount, daysBasedOnMaxAttraction), 10);
  };

  // Try to distribute items across days
  const tryDistribution = (items, numDays) => {
    const distribution = {};
    for (let i = 1; i <= numDays; i++) {
      distribution[i] = [];
    }

    // Sort items by duration (longest first)
    const sortedItems = [...items].sort((a, b) => 
      ((b.duration || 120) + 30) - ((a.duration || 120) + 30)
    );

    // First pass: try to fit items while respecting time limits
    let currentDay = 1;
    const remainingItems = [...sortedItems];

    while (remainingItems.length > 0) {
      const item = remainingItems[0];
      const dayItems = distribution[currentDay];
      const potentialTime = calculateDayTime([...dayItems, item]);

      if (potentialTime <= MAX_MINUTES_PER_DAY || currentDay === numDays) {
        distribution[currentDay].push(item);
        remainingItems.shift();
      } else {
        currentDay = currentDay < numDays ? currentDay + 1 : 1;
      }
    }

    return distribution;
  };

  // Evaluate how good a distribution is (lower is better)
  const evaluateDistribution = (distribution) => {
    let score = 0;
    let prevDayTime = 0;

    Object.values(distribution).forEach(dayItems => {
      const dayTime = calculateDayTime(dayItems);
      
      // Penalize days that are too long
      if (dayTime > MAX_MINUTES_PER_DAY) {
        score += (dayTime - MAX_MINUTES_PER_DAY) * 2;
      }
      
      // Penalize big differences between consecutive days
      if (prevDayTime > 0) {
        score += Math.abs(dayTime - prevDayTime);
      }
      
      prevDayTime = dayTime;
    });

    return score;
  };

  // Distribute attractions across days with optimization
  const distributeAttractions = (items, numDays) => {
    if (!items || items.length === 0) {
      const emptyDays = {};
      for (let i = 1; i <= numDays; i++) {
        emptyDays[i] = [];
      }
      return emptyDays;
    }

    // Try different distributions and pick the best one
    let bestDistribution = tryDistribution(items, numDays);
    let bestScore = evaluateDistribution(bestDistribution);

    // Try a few more times with different starting points
    for (let i = 0; i < 3; i++) {
      const shuffledItems = [...items].sort(() => Math.random() - 0.5);
      const newDistribution = tryDistribution(shuffledItems, numDays);
      const newScore = evaluateDistribution(newDistribution);
      
      if (newScore < bestScore) {
        bestScore = newScore;
        bestDistribution = newDistribution;
      }
    }

    return bestDistribution;
  };

  // Update distribution when items change
  useEffect(() => {
    if (itineraryItems.length === 0) {
      setDays({1: []});
      setNumberOfDays(1);
      setSuggestedDays(1);
      setShowDayWarning(false);
      setDayTimes({});
      return;
    }

    const suggested = calculateSuggestedDays(itineraryItems);
    setSuggestedDays(suggested);

    // Show warning if current days are not enough
    setShowDayWarning(suggested > numberOfDays);

    // Distribute attractions
    const daysToUse = Math.max(numberOfDays, 1);
    const newDistribution = distributeAttractions(itineraryItems, daysToUse);
    
    // Calculate times for each day
    const newDayTimes = {};
    Object.entries(newDistribution).forEach(([day, attractions]) => {
      newDayTimes[day] = calculateDayTime(attractions);
    });
    setDayTimes(newDayTimes);

    setDays(newDistribution);
  }, [itineraryItems, numberOfDays]);

  // Format day time for display
  const formatDayTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours} godz ${mins} min`;
  };

  // Get time warning for a day
  const getDayTimeWarning = (dayNumber) => {
    const time = dayTimes[dayNumber];
    if (!time) return null;

    if (time > MAX_MINUTES_PER_DAY) {
      return {
        type: 'error',
        message: `Ten dzień jest przepełniony (${formatDayTime(time)}). Zalecane maksimum to ${formatDayTime(MAX_MINUTES_PER_DAY)}.`
      };
    } else if (time > WARN_MINUTES_PER_DAY) {
      return {
        type: 'warning',
        message: `Ten dzień jest bardzo intensywny (${formatDayTime(time)}).`
      };
    }
    return null;
  };

  // Handle manual day changes
  const handleDaysChange = (change) => {
    const newDays = numberOfDays + change;
    if (newDays >= 1 && newDays <= 10) {
      setNumberOfDays(newDays);
      const newDistribution = distributeAttractions(itineraryItems, newDays);
      setDays(newDistribution);
      
      // Update warning if needed
      setShowDayWarning(suggestedDays > newDays);
    }
  };

  // Handle drag end
  const handleDragEnd = (result) => {
    if (!result.destination) return;
    
    const { source, destination } = result;
    const sourceDay = parseInt(source.droppableId.split('-')[1]);
    const destDay = parseInt(destination.droppableId.split('-')[1]);
    
    const newDays = { ...days };
    const [removed] = newDays[sourceDay].splice(source.index, 1);
    newDays[destDay].splice(destination.index, 0, removed);
    
    setDays(newDays);
  };

  // Handle remove from day
  const handleRemoveFromDay = (dayNumber, index) => {
    const newDays = { ...days };
    const [removedItem] = newDays[dayNumber].splice(index, 1);
    
    // Remove empty days
    const nonEmptyDays = Object.entries(newDays)
      .filter(([_, items]) => items.length > 0)
      .reduce((acc, [day, items]) => ({ ...acc, [day]: items }), {});
    
    setDays(nonEmptyDays);
    removeFromItinerary(removedItem.id);
  };

  // Handle print
  const handlePrint = () => {
    window.print();
  };

  // Handle save PDF
  const handleSavePDF = async () => {
    if (planRef.current) {
      const canvas = await html2canvas(planRef.current);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('plan-podrozy-dubaj.pdf');
    }
  };

  // Calculate travel info between attractions
  const calculateDayTravelInfo = (dayAttractions) => {
    let totalTime = 0;
    let totalDistance = 0;
    
    for (let i = 0; i < dayAttractions.length - 1; i++) {
      const currentAttraction = dayAttractions[i];
      const nextAttraction = dayAttractions[i + 1];
      
      const travelData = calculateTravelTimes(currentAttraction.name, nextAttraction.name);
      if (travelData) {
        totalTime += travelData.driving || 0;
        totalDistance += travelData.distance || 0;
      }
    }
    
    return {
      time: totalTime,
      distance: totalDistance
    };
  };

  // Calculate total time including attractions and travel
  const calculateDayTotalTime = (dayAttractions) => {
    const attractionsTime = dayAttractions.reduce((acc, attraction) => acc + attraction.duration, 0);
    const { time: travelTime } = calculateDayTravelInfo(dayAttractions);
    return attractionsTime + travelTime;
  };

  // Calculate total time and cost for a day
  const getDayStats = (dayItems) => {
    return dayItems.reduce((acc, item) => ({
      duration: acc.duration + item.duration,
      cost: acc.cost + (item.price || 0)
    }), { duration: 0, cost: 0 });
  };

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Plan Podróży do Dubaju</h1>
        
        {/* Controls section */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleDaysChange(-1)}
                disabled={numberOfDays <= 1}
                className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50"
              >
                <FaMinus className="w-4 h-4" />
              </button>
              <span className="text-lg font-medium">{numberOfDays} dni</span>
              <button
                onClick={() => handleDaysChange(1)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <FaPlus className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex space-x-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <FaPrint className="mr-2" />
                Drukuj
              </button>
              <button
                onClick={handleSavePDF}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <FaFilePdf className="mr-2" />
                PDF
              </button>
            </div>
          </div>
          
          {showDayWarning && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <FaExclamationTriangle className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    Sugerowana liczba dni dla wybranych atrakcji to {suggestedDays}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Itinerary section */}
        <div ref={planRef} className="space-y-8">
          <DragDropContext onDragEnd={handleDragEnd}>
            {Object.keys(days).slice(0, numberOfDays).map((day) => (
              <div key={day} className="bg-white rounded-lg shadow">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Dzień {day}</h2>
                  
                  {dayTimes[day] > WARN_MINUTES_PER_DAY && (
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <FaExclamationTriangle className="h-5 w-5 text-yellow-400" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-yellow-700">
                            Ten dzień może być zbyt intensywny. Rozważ przeniesienie niektórych atrakcji na inny dzień.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <Droppable droppableId={day.toString()}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="space-y-4"
                      >
                        {days[day].map((item, index) => (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                className="bg-gray-50 rounded-lg p-4"
                              >
                                <div className="flex items-start gap-4">
                                  <div {...provided.dragHandleProps}>
                                    <FaGripVertical className="text-gray-400" />
                                  </div>
                                  <div className="flex-grow">
                                    <h3 className="font-medium">{item.name}</h3>
                                    <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-500">
                                      {item.duration && (
                                        <span className="flex items-center">
                                          <FaClock className="mr-1" />
                                          {item.duration} min
                                        </span>
                                      )}
                                      {item.price && (
                                        <span className="flex items-center">
                                          <FaDollarSign className="mr-1" />
                                          {item.price}
                                        </span>
                                      )}
                                      {item.location && (
                                        <span className="flex items-center">
                                          <FaMapMarkerAlt className="mr-1" />
                                          {item.location}
                                        </span>
                                      )}
                                    </div>
                                    {index < days[day].length - 1 && item.travelTime && (
                                      <div className="mt-2 flex items-center text-sm text-gray-500">
                                        <FaCar className="mr-1" />
                                        <span>Do następnej atrakcji: {formatTravelTime(item.travelTime)}</span>
                                      </div>
                                    )}
                                  </div>
                                  <button
                                    onClick={() => removeFromItinerary(item.id)}
                                    className="text-red-500 hover:text-red-700"
                                  >
                                    <FaTrash />
                                  </button>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>
              </div>
            ))}
          </DragDropContext>
        </div>
      </div>
    </div>
  );
};

export default PlanPodrozy;
