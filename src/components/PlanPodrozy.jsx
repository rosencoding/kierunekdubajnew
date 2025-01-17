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
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Plan Podróży
            </h1>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-yellow-400/30">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <span className="text-lg font-medium">Liczba dni:</span>
                  <div className="flex items-center bg-white/20 rounded-xl p-2 backdrop-blur-sm">
                    <button
                      onClick={() => handleDaysChange(-1)}
                      disabled={numberOfDays <= 1}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        numberOfDays <= 1
                          ? 'bg-white/10 text-white/40'
                          : 'bg-white/20 text-white hover:bg-yellow-400/30'
                      }`}
                    >
                      <FaMinus size={14} />
                    </button>
                    
                    <span className="w-16 text-center font-semibold text-2xl">
                      {numberOfDays}
                    </span>
                    
                    <button
                      onClick={() => handleDaysChange(1)}
                      disabled={numberOfDays >= 10}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        numberOfDays >= 10
                          ? 'bg-white/10 text-white/40'
                          : 'bg-white/20 text-white hover:bg-yellow-400/30'
                      }`}
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-yellow-400/30 transition-colors rounded-xl backdrop-blur-sm"
                  >
                    <FaPrint /> Drukuj plan
                  </button>
                  <button
                    onClick={handleSavePDF}
                    className="flex items-center gap-2 px-6 py-3 bg-white text-yellow-700 hover:bg-yellow-50 transition-colors rounded-xl shadow-md"
                  >
                    <FaFilePdf /> Zapisz jako PDF
                  </button>
                </div>
              </div>
              {showDayWarning && (
                <div className="mt-4 flex items-center gap-2 text-amber-300 bg-amber-900/50 px-4 py-2 rounded-lg border border-amber-500/30">
                  <FaExclamationTriangle />
                  <span>
                    Sugerowana liczba dni: {suggestedDays}. Obecny plan może być zbyt intensywny.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-4">
        {itineraryItems.length === 0 ? (
          <div className="text-center py-12">
            <FaMapMarkedAlt className="mx-auto text-4xl text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Twój plan jest pusty
            </h3>
            <p className="text-gray-500">
              Dodaj atrakcje ze strony głównej lub z listy atrakcji, aby rozpocząć planowanie.
            </p>
          </div>
        ) : (
          <>
            {/* Beta Warning */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded-r-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">
                    Planer w wersji beta
                  </h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>
                      Planer jest nadal w fazie testów i rozwoju. Automatyczne rozplanowanie atrakcji może nie być optymalne dla każdego. Zalecamy:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Sprawdzenie czasu potrzebnego na zwiedzanie każdej atrakcji</li>
                      <li>Dostosowanie planu do własnych preferencji i tempa zwiedzania</li>
                      <li>Weryfikację odległości między atrakcjami</li>
                      <li>Uwzględnienie godzin otwarcia (dostępne w szczegółach atrakcji)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-6 mb-8 border border-yellow-100">
              <h2 className="text-xl font-semibold text-yellow-800 mb-4">
                Jak korzystać z planera?
              </h2>
              <div className="space-y-3 text-yellow-700">
                <p className="flex items-center gap-2">
                  <span className="bg-yellow-200 text-yellow-700 w-6 h-6 rounded-full flex items-center justify-center font-semibold">1</span>
                  <span>Wybierz liczbę dni swojej podróży w sekcji powyżej</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="bg-yellow-200 text-yellow-700 w-6 h-6 rounded-full flex items-center justify-center font-semibold">2</span>
                  <span>Przeciągaj atrakcje między dniami, aby dostosować plan do swoich preferencji</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="bg-yellow-200 text-yellow-700 w-6 h-6 rounded-full flex items-center justify-center font-semibold">3</span>
                  <span>Zwracaj uwagę na szacowany czas zwiedzania i przejazdu między atrakcjami</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="bg-yellow-200 text-yellow-700 w-6 h-6 rounded-full flex items-center justify-center font-semibold">4</span>
                  <span>Kliknij "Szczegóły" przy atrakcji, aby zobaczyć więcej informacji</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="bg-yellow-200 text-yellow-700 w-6 h-6 rounded-full flex items-center justify-center font-semibold">5</span>
                  <span>Użyj przycisków "Drukuj" lub "Zapisz PDF" aby zachować swój plan</span>
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-lg border border-gray-200 shadow-sm transition-colors"
              >
                <FaPrint />
                <span>Drukuj</span>
              </button>
              <button
                onClick={handleSavePDF}
                className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-lg border border-gray-200 shadow-sm transition-colors"
              >
                <FaFilePdf />
                <span>Zapisz PDF</span>
              </button>
            </div>

            {/* Plan Content */}
            <div className="space-y-8" ref={planRef}>
              {/* Days control */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDaysChange(-1)}
                    disabled={numberOfDays <= 1}
                    className={`p-2 rounded-lg ${
                      numberOfDays <= 1
                        ? 'bg-gray-100 text-gray-400'
                        : 'bg-yellow-50 text-yellow-500 hover:bg-yellow-500 hover:text-white'
                    } transition-colors`}
                    title="Zmniejsz liczbę dni"
                  >
                    <FaMinus />
                  </button>
                  <span className="text-lg font-medium text-gray-700">
                    {numberOfDays} {numberOfDays === 1 ? 'dzień' : 'dni'}
                  </span>
                  <button
                    onClick={() => handleDaysChange(1)}
                    disabled={numberOfDays >= 10}
                    className={`p-2 rounded-lg ${
                      numberOfDays >= 10
                        ? 'bg-gray-100 text-gray-400'
                        : 'bg-yellow-50 text-yellow-500 hover:bg-yellow-500 hover:text-white'
                    } transition-colors`}
                    title="Zwiększ liczbę dni"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>

              {/* Days list */}
              <DragDropContext onDragEnd={handleDragEnd}>
                <div className="space-y-8">
                  {Object.entries(days).map(([dayNumber, dayItems]) => (
                    <Droppable key={dayNumber} droppableId={`day-${dayNumber}`}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          className={`bg-white rounded-xl shadow-md overflow-hidden ${
                            snapshot.isDraggingOver ? 'border-yellow-300 bg-yellow-50' : ''
                          }`}
                        >
                          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 px-6 py-4">
                            <div className="flex items-center justify-between">
                              <h2 className="text-2xl font-bold text-white">Dzień {dayNumber}</h2>
                              {getDayTimeWarning(dayNumber) && (
                                <div className={`px-4 py-2 rounded-lg text-sm ${
                                  getDayTimeWarning(dayNumber).type === 'error' 
                                    ? 'bg-red-500/20 text-white border border-red-500/30'
                                    : 'bg-yellow-500/20 text-white border border-yellow-400/30'
                                }`}>
                                  {getDayTimeWarning(dayNumber).message}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="p-4 space-y-4">
                            {dayItems.map((item, index) => (
                              <Draggable
                                key={item.id}
                                draggableId={item.id.toString()}
                                index={index}
                              >
                                {(provided) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    className="bg-gray-50 rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-all duration-200 border border-yellow-100 group"
                                  >
                                    <div {...provided.dragHandleProps} className="text-gray-400 hover:text-yellow-500">
                                      <FaGripVertical />
                                    </div>
                                    <div className="h-24 w-32 flex-shrink-0 overflow-hidden rounded-lg">
                                      <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-full w-full object-cover"
                                      />
                                    </div>
                                    <div className="flex-grow min-w-0">
                                      <div className="flex justify-between items-start">
                                        <h3 className="font-semibold text-lg text-gray-900">{item.name}</h3>
                                        <div className="flex gap-2">
                                          <Link
                                            to={item.location === 'Abu Dhabi' ? `/abu-dhabi/${item.id}` : `/atrakcje/${item.id}`}
                                            className="flex items-center gap-2 px-3 py-2 bg-blue-50 text-blue-500 hover:text-white hover:bg-blue-500 rounded-lg transition-all duration-200 border border-blue-200 hover:border-blue-500 group-hover:opacity-100 opacity-70"
                                            title="Zobacz szczegóły atrakcji"
                                          >
                                            <span className="text-sm font-medium">Szczegóły</span>
                                          </Link>
                                          <button
                                            onClick={() => handleRemoveFromDay(dayNumber, index)}
                                            className="flex items-center gap-2 px-3 py-2 bg-red-50 text-red-500 hover:text-white hover:bg-red-500 rounded-lg transition-all duration-200 border border-red-200 hover:border-red-500 group-hover:opacity-100 opacity-70"
                                            title="Usuń z planu"
                                          >
                                            <FaTrash size={14} />
                                            <span className="text-sm font-medium">Usuń</span>
                                          </button>
                                        </div>
                                      </div>
                                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mt-2">
                                        <span className="flex items-center gap-1">
                                          <FaClock className="text-yellow-500" />
                                          {Math.floor(item.duration / 60)}h {item.duration % 60}min
                                        </span>
                                        {item.price > 0 && (
                                          <span className="flex items-center gap-1">
                                            <FaDollarSign className="text-yellow-600" />
                                            {item.price} AED
                                          </span>
                                        )}
                                        <span className="flex items-center gap-1">
                                          <FaMapMarkerAlt className="text-yellow-500" />
                                          {item.location}
                                        </span>
                                      </div>
                                      {item.opisPL && (
                                        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                                          {item.opisPL}
                                        </p>
                                      )}
                                      {index < dayItems.length - 1 && (
                                        <div className="mt-4 border-t border-gray-100 pt-4">
                                          <div className="flex items-center gap-2 mb-3">
                                            <div className="h-1.5 w-1.5 bg-yellow-500 rounded-full"></div>
                                            <span className="text-sm font-medium text-gray-900">Do następnej atrakcji:</span>
                                            <span className="text-sm text-gray-500">
                                              ({dayItems[index + 1].name})
                                            </span>
                                          </div>
                                          <div className="grid grid-cols-2 gap-3 text-sm">
                                            {(() => {
                                              const nextAttraction = dayItems[index + 1];
                                              const travelData = calculateTravelTimes(item.name, nextAttraction.name);
                                              if (travelData) {
                                                const { driving, walking, drivingDistance, walkingDistance } = travelData;
                                                return (
                                                  <>
                                                    <div className="flex flex-col gap-1.5 p-3 bg-white rounded-lg border border-gray-100 hover:border-yellow-300 transition-colors">
                                                      <div className="flex items-center gap-2 text-yellow-600">
                                                        <FaCar />
                                                        <span className="font-medium">Samochodem</span>
                                                      </div>
                                                      <div className="space-y-1 ml-6">
                                                        <div className="flex items-center gap-2">
                                                          <FaClock className="text-yellow-500 w-4 h-4" />
                                                          <span>Czas: {formatTravelTime(driving)}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                          <FaMapMarkerAlt className="text-yellow-500 w-4 h-4" />
                                                          <span>Dystans: {Math.round(drivingDistance * 10) / 10} km</span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="flex flex-col gap-1.5 p-3 bg-white rounded-lg border border-gray-100 hover:border-yellow-300 transition-colors">
                                                      <div className="flex items-center gap-2 text-yellow-600">
                                                        <FaWalking />
                                                        <span className="font-medium">Pieszo</span>
                                                      </div>
                                                      <div className="space-y-1 ml-6">
                                                        <div className="flex items-center gap-2">
                                                          <FaClock className="text-yellow-500 w-4 h-4" />
                                                          <span>Czas: {formatTravelTime(walking)}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                          <FaMapMarkerAlt className="text-yellow-500 w-4 h-4" />
                                                          <span>Dystans: {Math.round(walkingDistance * 10) / 10} km</span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </>
                                                );
                                              }
                                              return (
                                                <div className="col-span-2 text-center py-3 text-gray-500">
                                                  Obliczanie czasu przejazdu...
                                                </div>
                                              );
                                            })()}
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                )}
                              </Draggable>
                            ))}
                            {dayItems.length === 0 && (
                              <div className="text-center py-8 text-gray-500 border-2 border-dashed border-yellow-200 rounded-xl">
                                Przeciągnij tutaj atrakcje aby zaplanować dzień
                              </div>
                            )}
                            {provided.placeholder}
                          </div>
                        </div>
                      )}
                    </Droppable>
                  ))}
                </div>
              </DragDropContext>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PlanPodrozy;
