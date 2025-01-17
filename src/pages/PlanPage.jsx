import React, { useState, useEffect, useContext } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { motion } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaTrash, FaArrowRight, FaCalendarAlt } from 'react-icons/fa';
import { ItineraryContext } from '../contexts/ItineraryContext';
import { Helmet } from 'react-helmet-async';

const PlanPage = () => {
  const { itineraryItems, numberOfDays, updateNumberOfDays, getAttractionCoordinates } = useContext(ItineraryContext);
  const [optimizedPlan, setOptimizedPlan] = useState([]);
  const [isOptimizing, setIsOptimizing] = useState(false);

  // Calculate distance between two points using Haversine formula
  const calculateDistance = (coord1, coord2) => {
    const R = 6371; // Earth's radius in km
    const dLat = (coord2.lat - coord1.lat) * Math.PI / 180;
    const dLon = (coord2.lng - coord1.lng) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(coord1.lat * Math.PI / 180) * Math.cos(coord2.lat * Math.PI / 180) *
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  // Estimate travel time between attractions
  const estimateTravelTime = (distance) => {
    const averageSpeed = 40; // km/h
    return Math.ceil(distance / averageSpeed * 60); // minutes
  };

  // Group attractions by location proximity
  const groupAttractionsByProximity = () => {
    if (itineraryItems.length === 0) return [];

    const items = [...itineraryItems];
    const groups = [];
    const maxDistanceInGroup = 5; // km

    while (items.length > 0) {
      const currentGroup = [items.shift()];
      const centerCoords = getAttractionCoordinates(currentGroup[0]);

      for (let i = 0; i < items.length; i++) {
        const itemCoords = getAttractionCoordinates(items[i]);
        const distance = calculateDistance(centerCoords, itemCoords);

        if (distance <= maxDistanceInGroup) {
          currentGroup.push(items.splice(i, 1)[0]);
          i--;
        }
      }

      groups.push(currentGroup);
    }

    return groups;
  };

  // Optimize the plan
  const optimizePlan = () => {
    setIsOptimizing(true);
    const groups = groupAttractionsByProximity();
    
    // Distribute groups across days
    const daysArray = Array.from({ length: numberOfDays }, () => []);
    let currentDayIndex = 0;
    let currentDayDuration = 0;
    const maxDayDuration = 10 * 60; // 10 hours in minutes

    groups.forEach(group => {
      const groupDuration = group.reduce((total, attraction) => {
        return total + attraction.duration;
      }, 0);

      if (currentDayDuration + groupDuration > maxDayDuration) {
        currentDayIndex++;
        currentDayDuration = 0;
      }

      if (currentDayIndex < numberOfDays) {
        daysArray[currentDayIndex].push(...group);
        currentDayDuration += groupDuration;
      } else {
        // If we run out of days, add to the last day
        daysArray[numberOfDays - 1].push(...group);
      }
    });

    setOptimizedPlan(daysArray);
    setIsOptimizing(false);
  };

  useEffect(() => {
    if (itineraryItems.length > 0) {
      optimizePlan();
    }
  }, [itineraryItems, numberOfDays]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const sourceDay = parseInt(result.source.droppableId);
    const destDay = parseInt(result.destination.droppableId);
    const sourceIndex = result.source.index;
    const destIndex = result.destination.index;

    const newPlan = [...optimizedPlan];
    const [removed] = newPlan[sourceDay].splice(sourceIndex, 1);
    newPlan[destDay].splice(destIndex, 0, removed);

    setOptimizedPlan(newPlan);
  };

  const calculateDayStats = (dayAttractions) => {
    let totalDuration = 0;
    let totalDistance = 0;

    for (let i = 0; i < dayAttractions.length - 1; i++) {
      const curr = getAttractionCoordinates(dayAttractions[i]);
      const next = getAttractionCoordinates(dayAttractions[i + 1]);
      const distance = calculateDistance(curr, next);
      
      totalDuration += dayAttractions[i].duration;
      totalDistance += distance;
    }

    if (dayAttractions.length > 0) {
      totalDuration += dayAttractions[dayAttractions.length - 1].duration;
    }

    const travelTime = estimateTravelTime(totalDistance);
    return {
      duration: totalDuration,
      distance: totalDistance.toFixed(1),
      travelTime
    };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Plan podróży - KierunekDubaj.pl</title>
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] -mt-16">
        <div className="absolute inset-0">
          <img
            src="/images/plan-hero.jpg"
            alt="Plan podróży do Dubaju"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Plan podróży
              </h1>
              <p className="text-xl text-gray-100">
                Twój spersonalizowany plan zwiedzania Dubaju i Abu Dhabi
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Days Selection */}
        <div className="mb-8">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Liczba dni:
          </label>
          <select
            value={numberOfDays}
            onChange={(e) => updateNumberOfDays(parseInt(e.target.value))}
            className="block w-full md:w-48 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
              <option key={num} value={num}>{num} dni</option>
            ))}
          </select>
        </div>

        {itineraryItems.length === 0 ? (
          <div className="text-center py-12">
            <FaCalendarAlt className="mx-auto text-4xl text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Twój plan jest pusty
            </h3>
            <p className="text-gray-500">
              Dodaj atrakcje ze strony głównej lub z listy atrakcji, aby rozpocząć planowanie.
            </p>
          </div>
        ) : (
          <DragDropContext onDragEnd={handleDragEnd}>
            <div className="space-y-8">
              {optimizedPlan.map((dayAttractions, dayIndex) => {
                const stats = calculateDayStats(dayAttractions);
                return (
                  <div key={dayIndex} className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="bg-yellow-500 px-6 py-4">
                      <h3 className="text-xl font-semibold text-white">
                        Dzień {dayIndex + 1}
                      </h3>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-yellow-100">
                        <span className="flex items-center">
                          <FaClock className="mr-1" />
                          Czas zwiedzania: {Math.floor(stats.duration / 60)}h {stats.duration % 60}min
                        </span>
                        <span className="flex items-center">
                          <FaMapMarkerAlt className="mr-1" />
                          Dystans: {stats.distance} km
                        </span>
                        <span className="flex items-center">
                          <FaArrowRight className="mr-1" />
                          Czas przejazdu: {Math.floor(stats.travelTime / 60)}h {stats.travelTime % 60}min
                        </span>
                      </div>
                    </div>
                    <Droppable droppableId={dayIndex.toString()}>
                      {(provided) => (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          className="p-4"
                        >
                          {dayAttractions.map((attraction, index) => (
                            <Draggable
                              key={attraction.id}
                              draggableId={attraction.id}
                              index={index}
                            >
                              {(provided) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className="bg-gray-50 rounded-lg p-4 mb-3 last:mb-0"
                                >
                                  <div className="flex items-start justify-between">
                                    <div className="w-full">
                                      <h4 className="font-semibold text-gray-900">
                                        {attraction.name}
                                      </h4>
                                      <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-600">
                                        <span className="flex items-center">
                                          <FaClock className="mr-1" />
                                          {Math.floor(attraction.duration / 60)}h {attraction.duration % 60}min
                                        </span>
                                      </div>
                                      
                                      {/* Distance and time to next attraction */}
                                      {index < dayAttractions.length - 1 && (
                                        <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                                          <div className="flex items-center text-blue-800 font-medium mb-1">
                                            <FaArrowRight className="mr-2" />
                                            Do następnej atrakcji:
                                          </div>
                                          <div className="grid grid-cols-2 gap-4 text-sm text-blue-700">
                                            <div className="flex items-center">
                                              <FaMapMarkerAlt className="mr-1" />
                                              {calculateDistance(
                                                getAttractionCoordinates(attraction),
                                                getAttractionCoordinates(dayAttractions[index + 1])
                                              ).toFixed(1)} km
                                            </div>
                                            <div className="flex items-center">
                                              <FaClock className="mr-1" />
                                              {estimateTravelTime(calculateDistance(
                                                getAttractionCoordinates(attraction),
                                                getAttractionCoordinates(dayAttractions[index + 1])
                                              ))} min
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
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
                );
              })}
            </div>
          </DragDropContext>
        )}
      </div>
    </div>
  );
};

export default PlanPage;
