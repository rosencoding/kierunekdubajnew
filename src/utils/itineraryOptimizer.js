// Calculate distance between two points using Haversine formula
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Earth's radius in kilometers
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return Math.round(distance * 10) / 10; // Round to 1 decimal place
};

const toRad = (degrees) => {
  return degrees * (Math.PI / 180);
};

// Constants for travel times
const WALKING_SPEED = 5; // km/h
const DRIVING_SPEED = 30; // km/h
const MINUTES_PER_DAY = 13 * 60; // 13 hours per day (9 AM to 10 PM)

// Calculate travel times based on distance
export const calculateTravelTimes = (distance) => {
  const walkingMinutes = Math.round((distance / WALKING_SPEED) * 60);
  const drivingMinutes = Math.round((distance / DRIVING_SPEED) * 60);
  return {
    walking: walkingMinutes,
    driving: drivingMinutes
  };
};

// Optimize itinerary based on distance and time constraints
export const optimizeItinerary = (attractions, numberOfDays) => {
  if (!attractions.length) return { days: [], unassignedAttractions: [] };

  // Calculate total duration including travel time between attractions
  const getTotalDurationWithTravel = (attractions) => {
    let totalDuration = 0;
    for (let i = 0; i < attractions.length; i++) {
      totalDuration += attractions[i].duration;
      if (i < attractions.length - 1) {
        const distance = calculateDistance(
          attractions[i].latitude,
          attractions[i].longitude,
          attractions[i + 1].latitude,
          attractions[i + 1].longitude
        );
        // Use driving time as default for planning
        totalDuration += calculateTravelTimes(distance).driving;
      }
    }
    return totalDuration;
  };

  // Sort attractions by priority (if any) and optimal route
  let remainingAttractions = [...attractions];
  const days = [];

  for (let day = 0; day < numberOfDays; day++) {
    const dayAttractions = [];
    let remainingTime = MINUTES_PER_DAY;

    while (remainingAttractions.length > 0) {
      let bestNextAttractionIndex = -1;
      let shortestDistance = Infinity;

      // Find the closest attraction that fits in remaining time
      for (let i = 0; i < remainingAttractions.length; i++) {
        const attraction = remainingAttractions[i];
        const lastAttraction = dayAttractions[dayAttractions.length - 1];
        
        let distance = 0;
        if (lastAttraction) {
          distance = calculateDistance(
            lastAttraction.latitude,
            lastAttraction.longitude,
            attraction.latitude,
            attraction.longitude
          );
        }

        // Use driving time for planning purposes
        const travelTimes = calculateTravelTimes(distance);
        const totalTimeNeeded = attraction.duration + travelTimes.driving;

        if (totalTimeNeeded <= remainingTime && distance < shortestDistance) {
          shortestDistance = distance;
          bestNextAttractionIndex = i;
        }
      }

      if (bestNextAttractionIndex === -1) break;

      const nextAttraction = remainingAttractions[bestNextAttractionIndex];
      const distance = shortestDistance;
      const travelTimes = calculateTravelTimes(distance);

      // Calculate start and end times
      const lastEndTime = dayAttractions.length > 0 
        ? dayAttractions[dayAttractions.length - 1].endTime 
        : 9 * 60; // 9:00 AM in minutes

      const startTime = lastEndTime + travelTimes.driving; // Use driving time for scheduling
      const endTime = startTime + nextAttraction.duration;

      dayAttractions.push({
        ...nextAttraction,
        startTime,
        endTime,
        distance,
        travelTimes: {
          walking: travelTimes.walking,
          driving: travelTimes.driving
        }
      });

      remainingTime -= (nextAttraction.duration + travelTimes.driving);
      remainingAttractions.splice(bestNextAttractionIndex, 1);
    }

    if (dayAttractions.length > 0) {
      days.push(dayAttractions);
    }
  }

  return {
    days,
    unassignedAttractions: remainingAttractions
  };
};

// Format time from minutes to readable string
export const formatTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  const period = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;
  return `${formattedHours}:${mins.toString().padStart(2, '0')} ${period}`;
};
