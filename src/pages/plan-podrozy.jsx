import React, { useState, useEffect, useContext, useRef } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { motion } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaTrash, FaArrowRight, FaCalendarAlt, FaExclamationTriangle } from 'react-icons/fa';
import { ItineraryContext } from '../contexts/ItineraryContext';
import { Helmet } from 'react-helmet-async';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const SortableAttractionItem = ({ 
  attraction, 
  index, 
  dayAttractions, 
  getAttractionCoordinates, 
  calculateDistance, 
  calculateWalkingDistance, 
  estimateDrivingTime, 
  estimateWalkingTime,
  formatTime 
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: attraction.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-gray-50 rounded-lg p-4 mb-3 last:mb-0"
    >
      <div className="flex items-start gap-4">
        <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
          <img
            src={attraction.image}
            alt={attraction.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-grow">
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
              <div className="flex items-center text-blue-800 font-medium mb-2">
                <FaArrowRight className="mr-2" />
                Do następnej atrakcji:
              </div>
              <div className="space-y-3">
                {/* Driving info */}
                <div className="bg-white/50 p-2 rounded">
                  <div className="text-sm font-medium text-blue-800 mb-1">🚗 Samochodem:</div>
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
                      {formatTime(estimateDrivingTime(calculateDistance(
                        getAttractionCoordinates(attraction),
                        getAttractionCoordinates(dayAttractions[index + 1])
                      )))}
                    </div>
                  </div>
                </div>
                
                {/* Walking info */}
                <div className="bg-white/50 p-2 rounded">
                  <div className="text-sm font-medium text-blue-800 mb-1">🚶 Pieszo:</div>
                  <div className="grid grid-cols-2 gap-4 text-sm text-blue-700">
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-1" />
                      {calculateWalkingDistance(
                        getAttractionCoordinates(attraction),
                        getAttractionCoordinates(dayAttractions[index + 1])
                      ).toFixed(1)} km
                    </div>
                    <div className="flex items-center">
                      <FaClock className="mr-1" />
                      {formatTime(estimateWalkingTime(calculateWalkingDistance(
                        getAttractionCoordinates(attraction),
                        getAttractionCoordinates(dayAttractions[index + 1])
                      )))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const DayPlan = ({ 
  dayAttractions, 
  dayIndex, 
  handleDragEnd, 
  getAttractionCoordinates, 
  calculateDistance, 
  calculateWalkingDistance, 
  estimateDrivingTime, 
  estimateWalkingTime, 
  stats,
  formatTime 
}) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="bg-yellow-500 px-6 py-4">
        <h3 className="text-xl font-semibold text-white">
          Dzień {dayIndex}
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
          <div className="text-sm text-yellow-100">
            Czas przejazdu: {formatTime(stats.travelTime)}
          </div>
        </div>
      </div>
      <div className="p-4">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={(event) => handleDragEnd(event, dayIndex)}
        >
          <SortableContext
            items={dayAttractions.map(a => a.id)}
            strategy={verticalListSortingStrategy}
          >
            {dayAttractions.map((attraction, index) => (
              <SortableAttractionItem
                key={attraction.id}
                attraction={attraction}
                index={index}
                dayAttractions={dayAttractions}
                getAttractionCoordinates={getAttractionCoordinates}
                calculateDistance={calculateDistance}
                calculateWalkingDistance={calculateWalkingDistance}
                estimateDrivingTime={estimateDrivingTime}
                estimateWalkingTime={estimateWalkingTime}
                formatTime={formatTime}
              />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

const PlanPage = () => {
  const { itineraryItems, getAttractionCoordinates } = useContext(ItineraryContext);
  const [numberOfDays, setNumberOfDays] = useState(5);
  const [optimizedPlan, setOptimizedPlan] = useState([]);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const planRef = useRef(null);

  // Format time in hours and minutes
  const formatTime = (minutes) => {
    if (minutes < 60) {
      return `${minutes} min`;
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}min` : `${hours}h`;
  };

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

  // Calculate walking distance (slightly different from driving due to pedestrian paths)
  const calculateWalkingDistance = (coord1, coord2) => {
    // Walking paths are typically 15-20% longer than direct distance
    return calculateDistance(coord1, coord2) * 1.2;
  };

  // Estimate driving time between attractions
  const estimateDrivingTime = (distance) => {
    let averageSpeed;
    if (distance < 5) {
      averageSpeed = 25; // City center
    } else if (distance < 10) {
      averageSpeed = 35; // Mixed routes
    } else {
      averageSpeed = 45; // Highway routes
    }
    
    // Add 10% for traffic and stops
    const baseTime = (distance / averageSpeed) * 60;
    return Math.ceil(baseTime * 1.1);
  };

  // Estimate walking time between attractions
  const estimateWalkingTime = (distance) => {
    const walkingSpeed = 4.5; // km/h (average walking speed)
    // Add 20% for crossings, traffic lights, and heat
    return Math.ceil((distance / walkingSpeed) * 60 * 1.2);
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

  const handleDragEnd = (event, dayIndex) => {
    const { active, over } = event;
    
    if (active.id !== over.id) {
      const oldIndex = optimizedPlan[dayIndex].findIndex(item => item.id === active.id);
      const newIndex = optimizedPlan[dayIndex].findIndex(item => item.id === over.id);
      
      const newPlan = [...optimizedPlan];
      newPlan[dayIndex] = arrayMove(newPlan[dayIndex], oldIndex, newIndex);
      
      setOptimizedPlan(newPlan);
    }
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

    const travelTime = estimateDrivingTime(totalDistance);
    return {
      duration: totalDuration,
      distance: totalDistance.toFixed(1),
      travelTime
    };
  };

  const suggestedDays = Math.ceil(itineraryItems.reduce((total, attraction) => total + attraction.duration, 0) / (10 * 60));
  const showDayWarning = suggestedDays > numberOfDays;

  const handleSavePDF = async () => {
    if (planRef.current) {
      try {
        const canvas = await html2canvas(planRef.current, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: '#ffffff'
        });
        
        const imgData = canvas.toDataURL('image/jpeg', 1.0);
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 30;

        // Add title
        pdf.setFontSize(24);
        pdf.setTextColor(50, 50, 50);
        pdf.text('Plan podróży - Dubaj i Abu Dhabi', pdfWidth / 2, 20, { align: 'center' });
        
        // Add image
        pdf.addImage(imgData, 'JPEG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
        
        // Add footer
        pdf.setFontSize(10);
        pdf.setTextColor(130, 130, 130);
        const today = new Date().toLocaleDateString('pl-PL');
        pdf.text(`Wygenerowano ${today} przez KierunekDubaj.pl`, pdfWidth / 2, pdfHeight - 10, { align: 'center' });
        
        pdf.save('plan-podrozy-dubaj.pdf');
      } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Wystąpił błąd podczas generowania PDF. Spróbuj ponownie.');
      }
    }
  };

  const handleDaysChange = (change) => {
    setNumberOfDays((prevDays) => Math.max(1, Math.min(10, prevDays + change)));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Plan podróży - KierunekDubaj.pl</title>
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[400px] -mt-16">
        <div className="absolute inset-0">
          <img
            src="/images/plan-hero.jpg"
            alt="Plan podróży do Dubaju"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">
                Plan podróży
              </h1>
              <p className="text-xl text-gray-100 mb-8 text-center">
                Twój spersonalizowany plan zwiedzania Dubaju i Abu Dhabi
              </p>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-medium text-white">Liczba dni:</span>
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
                      
                      <span className="w-16 text-center font-semibold text-2xl text-white">
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
                      className="flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-yellow-400/30 transition-colors rounded-xl backdrop-blur-sm text-white"
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
                  <div className="mt-4 flex items-center gap-2 text-amber-300 bg-amber-900/50 px-6 py-3 rounded-lg border border-amber-500/30 backdrop-blur-sm">
                    <FaExclamationTriangle className="text-xl" />
                    <span className="text-lg">
                      Sugerowana liczba dni: {suggestedDays}. Obecny plan może być zbyt intensywny.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
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
          <>
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

            {/* Plan Content */}
            <div className="space-y-8" ref={planRef}>
              {optimizedPlan.map((dayAttractions, dayIndex) => {
                const stats = calculateDayStats(dayAttractions);
                return (
                  <DayPlan
                    key={dayIndex}
                    dayAttractions={dayAttractions}
                    dayIndex={dayIndex}
                    handleDragEnd={handleDragEnd}
                    getAttractionCoordinates={getAttractionCoordinates}
                    calculateDistance={calculateDistance}
                    calculateWalkingDistance={calculateWalkingDistance}
                    estimateDrivingTime={estimateDrivingTime}
                    estimateWalkingTime={estimateWalkingTime}
                    stats={stats}
                    formatTime={formatTime}
                  />
                );
              })}
            </div>
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleSavePDF}
            >
              Zapisz PDF
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PlanPage;
