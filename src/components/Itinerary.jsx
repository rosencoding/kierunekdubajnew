import React, { useState, useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaClock, 
  FaDollarSign, 
  FaMapMarkerAlt, 
  FaRoute, 
  FaTrash, 
  FaCalendarAlt, 
  FaSun, 
  FaPrint, 
  FaShare,
  FaMap,
  FaInfoCircle, 
  FaGripVertical, 
  FaCar, 
  FaWalking, 
  FaExternalLinkAlt, 
  FaExclamationTriangle,
  FaCalendarDay,
  FaCalendarTimes,
  FaBuilding,
  FaMapMarkedAlt,
  FaDownload,
  FaSave
} from 'react-icons/fa';
import { ItineraryContext } from '../contexts/ItineraryContext';
import { Helmet } from 'react-helmet';
import Html2Canvas from 'html2canvas/dist/html2canvas.min.js';
import { jsPDF } from 'jspdf/dist/jspdf.umd.min.js';

const Itinerary = () => {
  const { 
    itineraryItems, 
    removeFromItinerary, 
    clearItinerary,
    reorderItinerary,
    calculateDistance,
    calculateTravelTimes,
    getTotalItineraryTime,
    numberOfDays,
    updateNumberOfDays,
    getAttractionAddress,
    getCityFromAddress,
    getAttractionCoordinates,
    kmToMiles,
    formatTravelTime
  } = useContext(ItineraryContext);

  const [showTip, setShowTip] = useState(true);
  const [cityStats, setCityStats] = useState({ dubai: 0, abuDhabi: 0 });
  const [totalCost, setTotalCost] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);
  const itineraryRef = useRef(null);

  // Update city stats whenever itinerary changes
  useEffect(() => {
    const stats = itineraryItems.reduce((acc, item) => {
      const city = getCityFromAddress(getAttractionAddress(item.name));
      if (city === 'Dubai') acc.dubai++;
      else if (city === 'Abu Dhabi') acc.abuDhabi++;
      return acc;
    }, { dubai: 0, abuDhabi: 0 });
    
    setCityStats(stats);
  }, [itineraryItems, getCityFromAddress, getAttractionAddress]);

  // Update total cost whenever itinerary changes
  useEffect(() => {
    const total = itineraryItems.reduce((sum, item) => sum + (item.price || 0), 0);
    setTotalCost(total);
  }, [itineraryItems]);

  // Function to organize items by days
  const organizeByDays = () => {
    if (itineraryItems.length === 0) return Array(numberOfDays).fill([]);

    // Group attractions by city
    const dubaiAttractions = itineraryItems.filter(item => 
      getCityFromAddress(getAttractionAddress(item.name)) === 'Dubai'
    );
    const abuDhabiAttractions = itineraryItems.filter(item => 
      getCityFromAddress(getAttractionAddress(item.name)) === 'Abu Dhabi'
    );

    // Initialize days array
    const days = Array(numberOfDays).fill().map(() => []);
    
    // Helper function to add attractions to days
    const addAttractionsToDay = (attractions, startDay, maxTimePerDay) => {
      let currentDay = startDay;
      let currentDayTime = 0;
      
      attractions.forEach((attraction) => {
        // If adding this attraction would exceed the day's limit, move to next day
        if (currentDayTime + (attraction.duration || 0) > maxTimePerDay && currentDay < numberOfDays - 1) {
          currentDay++;
          currentDayTime = 0;
        }
        
        if (currentDay < days.length) {
          days[currentDay] = [...days[currentDay], attraction];
          currentDayTime += attraction.duration || 0;
          
          // Add travel time if there's a next attraction in the same day
          if (days[currentDay].length > 1) {
            const prevAttraction = days[currentDay][days[currentDay].length - 2];
            const nextAttraction = days[currentDay][days[currentDay].length - 1];
            
            if (prevAttraction?.name && nextAttraction?.name) {
              const travelData = calculateTravelTimes(prevAttraction.name, nextAttraction.name);
              if (travelData?.driving) {
                currentDayTime += travelData.driving;
              }
            }
          }
        }
      });
      
      return currentDay + 1;
    };

    // Distribute attractions across days
    const MAX_HOURS_PER_DAY = 10; // Maximum hours per day
    const MAX_TIME_PER_DAY = MAX_HOURS_PER_DAY * 60; // Convert to minutes

    let nextAvailableDay = addAttractionsToDay(dubaiAttractions, 0, MAX_TIME_PER_DAY);
    addAttractionsToDay(abuDhabiAttractions, nextAvailableDay, MAX_TIME_PER_DAY);

    return days;
  };

  useEffect(() => {
    // Calculate city statistics and total cost
    const stats = itineraryItems.reduce((acc, item) => {
      const city = getCityFromAddress(getAttractionAddress(item.name));
      if (city === 'Dubai') acc.dubai++;
      else if (city === 'Abu Dhabi') acc.abuDhabi++;
      return acc;
    }, { dubai: 0, abuDhabi: 0 });

    const cost = itineraryItems.reduce((sum, item) => sum + (item.price || 0), 0);

    setCityStats(stats);
    setTotalCost(cost);
  }, [itineraryItems, getCityFromAddress, getAttractionAddress]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    reorderItinerary(result.source.index, result.destination.index);
  };

  const handlePrint = () => {
    setIsPrinting(true);
    window.print();
    setIsPrinting(false);
  };

  const handleSave = async () => {
    if (!itineraryRef.current) return;
    
    setIsSaving(true);
    try {
      const canvas = await Html2Canvas(itineraryRef.current, {
        scale: 2,
        useCORS: true,
        logging: false
      });
      
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width, canvas.height]
      });
      
      pdf.addImage(imgData, 'JPEG', 0, 0, canvas.width, canvas.height);
      pdf.save('dubai-abu-dhabi-itinerary.pdf');
    } catch (error) {
      console.error('Error saving itinerary:', error);
    }
    setIsSaving(false);
  };

  const handleShare = () => {
    // Implementation for sharing functionality
    // This could be expanded to include social media sharing, email, etc.
    if (navigator.share) {
      navigator.share({
        title: 'My Dubai & Abu Dhabi Itinerary',
        text: 'Check out my travel itinerary for Dubai and Abu Dhabi!',
        url: window.location.href
      }).catch(console.error);
    }
  };

  if (itineraryItems.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 bg-gray-50">
        <div className="text-center">
          <FaMapMarkedAlt className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No attractions added</h3>
          <p className="mt-1 text-sm text-gray-500">Start adding attractions to plan your trip.</p>
        </div>
      </div>
    );
  }

  return (
    <div ref={itineraryRef} className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-black">
        <div className="absolute inset-0">
          <img
            src="/images/background-hero.jpg"
            alt="Dubai Skyline"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40" />
        </div>

        <div className="relative container mx-auto px-4 py-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-center mb-6 text-white"
          >
            My Trip Planner
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-center text-gray-200 max-w-3xl mx-auto mb-8"
          >
            Plan your perfect Dubai and Abu Dhabi adventure
          </motion.p>

          <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSave}
              disabled={isSaving}
              className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-50 transition-all shadow-md hover:shadow-lg disabled:opacity-50 text-sm font-medium"
            >
              {isSaving ? (
                <>
                  <FaSave className="animate-spin mr-2" />
                  Saving...
                </>
              ) : (
                <>
                  <FaDownload className="mr-2" />
                  Save PDF
                </>
              )}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handlePrint}
              disabled={isPrinting}
              className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-50 transition-all shadow-md hover:shadow-lg disabled:opacity-50 text-sm font-medium"
            >
              <FaPrint className="mr-2" />
              Print
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleShare}
              className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-50 transition-all shadow-md hover:shadow-lg text-sm font-medium"
            >
              <FaShare className="mr-2" />
              Share
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-12 relative z-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="bg-gold-500/10 rounded-full p-2">
                <FaClock className="w-5 h-5 text-gold-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Duration</p>
                <p className="text-xl font-semibold text-gray-900">
                  {(() => {
                    const { totalTime } = getTotalItineraryTime();
                    return formatTravelTime(totalTime);
                  })()}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="bg-gold-500/10 rounded-full p-2">
                <FaMap className="w-5 h-5 text-gold-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Attractions</p>
                <p className="text-xl font-semibold text-gray-900">{itineraryItems.length} Places</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="bg-gold-500/10 rounded-full p-2">
                <FaBuilding className="w-5 h-5 text-gold-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-600">Cities</p>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${cityStats.dubai > 0 ? 'bg-blue-400' : 'bg-gray-400'}`} />
                    <p className="text-lg font-semibold text-gray-900">
                      Dubai <span className="text-gray-500">{cityStats.dubai}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${cityStats.abuDhabi > 0 ? 'bg-green-400' : 'bg-gray-400'}`} />
                    <p className="text-lg font-semibold text-gray-900">
                      Abu Dhabi <span className="text-gray-500">{cityStats.abuDhabi}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="bg-gold-500/10 rounded-full p-2">
                <FaDollarSign className="w-5 h-5 text-gold-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Cost</p>
                <p className="text-xl font-semibold text-gray-900">AED {totalCost}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trip Duration Selector */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-sm mb-8"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 rounded-full p-3">
                <FaCalendarAlt className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-1 text-gray-900">Trip Duration</h2>
                <p className="text-gray-600">How many days are you planning to stay?</p>
              </div>
            </div>

            <div className="w-full lg:w-auto">
              <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 sm:gap-3">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <motion.button
                    key={num}
                    onClick={() => updateNumberOfDays(num)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative aspect-square rounded-xl transition-all duration-200 ${
                      numberOfDays === num
                        ? 'bg-gold-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-semibold">{num}</span>
                      {numberOfDays === num && (
                        <motion.div
                          layoutId="selected"
                          className="absolute inset-0 border-2 border-gold-400 rounded-xl"
                          transition={{ duration: 0.15 }}
                        />
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>

              <div className="mt-4">
                {(() => {
                  const { totalTime } = getTotalItineraryTime();
                  const hoursPerDay = totalTime / (60 * numberOfDays);
                  
                  if (hoursPerDay > 14) {
                    return (
                      <div className="flex items-center text-red-700 text-sm bg-red-100 rounded-lg p-3">
                        <FaExclamationTriangle className="flex-shrink-0 mr-2" />
                        <span>
                          Your daily schedule is quite packed ({formatTravelTime(hoursPerDay * 60)}).
                          Consider adding more days for a more relaxed experience.
                        </span>
                      </div>
                    );
                  } else if (hoursPerDay > 10) {
                    return (
                      <div className="flex items-center text-yellow-700 text-sm bg-yellow-100 rounded-lg p-3">
                        <FaInfoCircle className="flex-shrink-0 mr-2" />
                        <span>
                          Your daily schedule is busy but manageable ({formatTravelTime(hoursPerDay * 60)}).
                        </span>
                      </div>
                    );
                  } else if (hoursPerDay > 0) {
                    return (
                      <div className="flex items-center text-green-700 text-sm bg-green-100 rounded-lg p-3">
                        <FaInfoCircle className="flex-shrink-0 mr-2" />
                        <span>
                          Your daily schedule looks good ({formatTravelTime(hoursPerDay * 60)}).
                        </span>
                      </div>
                    );
                  }
                  return null;
                })()}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Itinerary Content */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Daily Schedule */}
          <div className="space-y-6">
            {organizeByDays().map((dayAttractions, dayIndex) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: dayIndex * 0.1 }}
                key={dayIndex}
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm overflow-hidden border border-gray-200"
              >
                <div className="bg-gradient-to-r from-gold-600 to-gold-500 text-white px-6 py-4">
                  <h3 className="text-xl font-semibold flex items-center">
                    <FaCalendarDay className="mr-2" />
                    Day {dayIndex + 1}
                  </h3>
                  {dayAttractions.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-4 text-sm text-white/90">
                      <div className="flex items-center">
                        <FaClock className="mr-1.5" />
                        <span>
                          {(() => {
                            let totalTime = 0;
                            let totalDistance = 0;
                            let validTravelData = false;
                            
                            dayAttractions.forEach((attraction, idx) => {
                              if (idx < dayAttractions.length - 1) {
                                const currentAttraction = attraction;
                                const nextAttraction = dayAttractions[idx + 1];
                                
                                if (currentAttraction?.name && nextAttraction?.name) {
                                  const travelData = calculateTravelTimes(
                                    currentAttraction.name,
                                    nextAttraction.name
                                  );
                                  
                                  if (travelData?.driving && travelData?.distance) {
                                    totalTime += travelData.driving;
                                    totalDistance += travelData.distance;
                                    validTravelData = true;
                                  }
                                }
                              }
                            });
                            
                            if (!validTravelData) {
                              return 'Calculating travel times...';
                            }
                            
                            const miles = kmToMiles(totalDistance);
                            return `${formatTravelTime(totalTime)} (${Math.round(totalDistance * 10) / 10} km / ${miles} mi)`;
                          })()}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <FaMapMarkedAlt className="mr-1.5" />
                        <span>{dayAttractions.length} attractions</span>
                      </div>
                      <div className="flex items-center">
                        <FaCar className="mr-1.5" />
                        <span>
                          {(() => {
                            let totalTime = 0;
                            let totalDistance = 0;
                            let validTravelData = false;
                            
                            dayAttractions.forEach((attraction, idx) => {
                              if (idx < dayAttractions.length - 1) {
                                const currentAttraction = attraction;
                                const nextAttraction = dayAttractions[idx + 1];
                                
                                if (currentAttraction?.name && nextAttraction?.name) {
                                  const travelData = calculateTravelTimes(
                                    currentAttraction.name,
                                    nextAttraction.name
                                  );
                                  
                                  if (travelData?.driving && travelData?.distance) {
                                    totalTime += travelData.driving;
                                    totalDistance += travelData.distance;
                                    validTravelData = true;
                                  }
                                }
                              }
                            });
                            
                            if (!validTravelData) {
                              return 'Calculating travel times...';
                            }
                            
                            const miles = kmToMiles(totalDistance);
                            return `${formatTravelTime(totalTime)} (${Math.round(totalDistance * 10) / 10} km / ${miles} mi)`;
                          })()}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="divide-y divide-gray-100">
                  {dayAttractions.map((attraction, index) => (
                    <div key={index} className="p-4 hover:bg-gray-50/50 transition-colors">
                      <div className="flex items-start gap-4">
                        <Link 
                          to={attraction.location === 'Abu Dhabi' ? `/abu-dhabi/${attraction.id}` : `/atrakcje/${attraction.id}`}
                          className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 hover:opacity-75 transition-opacity"
                        >
                          <img
                            src={attraction.image}
                            alt={attraction.name}
                            className="w-full h-full object-cover"
                          />
                        </Link>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <span className={`text-sm ${
                              getCityFromAddress(getAttractionAddress(attraction.name)) === 'Abu Dhabi' 
                              ? 'text-purple-600' 
                              : 'text-blue-600'
                            }`}>
                              {getCityFromAddress(getAttractionAddress(attraction.name))}
                            </span>
                            <div className="flex gap-2">
                              <Link
                                to={attraction.location === 'Abu Dhabi' ? `/abu-dhabi/${attraction.id}` : `/atrakcje/${attraction.id}`}
                                className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-500 hover:text-white hover:bg-blue-500 rounded-lg transition-all duration-200 border border-blue-200 hover:border-blue-500"
                                title="Zobacz szczegóły atrakcji"
                              >
                                <span className="text-sm font-medium">Szczegóły</span>
                              </Link>
                              <button
                                onClick={() => removeFromItinerary(attraction.id)}
                                className="flex items-center gap-2 px-3 py-1.5 bg-red-50 text-red-500 hover:text-white hover:bg-red-500 rounded-lg transition-all duration-200 border border-red-200 hover:border-red-500"
                                title="Usuń z planu"
                              >
                                <FaTrash size={14} />
                                <span className="text-sm font-medium">Usuń</span>
                              </button>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <FaClock className="mr-1.5 text-gray-400" />
                              <span>{formatTravelTime(attraction.duration)}</span>
                            </div>
                            <div className="flex items-center">
                              <div className="flex items-center bg-gray-50/80 px-2 py-1 rounded">
                                <FaDollarSign className="mr-1 text-gold-600" />
                                <span className="font-medium text-gray-700">AED {attraction.price}</span>
                              </div>
                            </div>
                          </div>
                          
                          {index > 0 && (
                            <div className="text-sm text-gray-400 mt-1 mb-2 flex gap-3">
                              <span className="flex items-center">
                                <FaCar className="mr-1" />
                                {(() => {
                                  const prevAttraction = dayAttractions[index - 1];
                                  const currentAttraction = attraction;
                                  
                                  if (!prevAttraction?.name || !currentAttraction?.name) {
                                    return 'Calculating...';
                                  }
                                  
                                  const travelData = calculateTravelTimes(
                                    prevAttraction.name,
                                    currentAttraction.name
                                  );
                                  
                                  if (travelData?.driving && travelData?.distance) {
                                    const miles = kmToMiles(travelData.distance);
                                    return `${formatTravelTime(travelData.driving)} (${travelData.distance} km / ${miles} mi)`;
                                  }
                                  return 'Calculating...';
                                })()}
                              </span>
                              <span className="flex items-center">
                                <FaWalking className="mr-1" />
                                {(() => {
                                  const prevAttraction = dayAttractions[index - 1];
                                  const currentAttraction = attraction;
                                  
                                  if (!prevAttraction?.name || !currentAttraction?.name) {
                                    return '';
                                  }
                                  
                                  const travelData = calculateTravelTimes(
                                    prevAttraction.name,
                                    currentAttraction.name
                                  );
                                  
                                  if (travelData?.walking && travelData?.distance) {
                                    const miles = kmToMiles(travelData.distance);
                                    return `${formatTravelTime(travelData.walking, true)} (${travelData.distance} km / ${miles} mi)`;
                                  }
                                  return '';
                                })()}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {dayAttractions.length === 0 && (
                  <div className="p-8 text-center text-gray-500">
                    <FaCalendarTimes className="mx-auto h-8 w-8 mb-2 text-gray-400" />
                    <p>No attractions planned for this day</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Clear Itinerary Button */}
          <div className="flex justify-end mt-8">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={clearItinerary}
              className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 focus:outline-none focus:underline flex items-center bg-white/50 rounded-lg border border-red-200 hover:bg-white/80 transition-all"
            >
              <FaTrash className="mr-1.5" />
              Clear Itinerary
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
