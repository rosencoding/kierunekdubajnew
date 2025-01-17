import React, { createContext, useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export const ItineraryContext = createContext();

export const ItineraryProvider = ({ children }) => {
  const [itineraryItems, setItineraryItems] = useState(() => {
    const savedItems = localStorage.getItem('itinerary');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const [numberOfDays, setNumberOfDays] = useState(() => {
    const savedDays = localStorage.getItem('numberOfDays');
    return savedDays ? parseInt(savedDays) : 5;
  });

  const [dayPlans, setDayPlans] = useState(() => {
    const savedPlans = localStorage.getItem('dayPlans');
    if (savedPlans) {
      return JSON.parse(savedPlans);
    }
    // Initialize with 5 empty days
    return Array.from({ length: 5 }, (_, i) => ({
      dayNumber: i + 1,
      attractions: []
    }));
  });

  const updateNumberOfDays = (days) => {
    setNumberOfDays(days);
    localStorage.setItem('numberOfDays', days.toString());
  };

  const getAttractionAddress = (name) => {
    const addresses = {
      // Dubai Attractions
      'Burj Khalifa': '1 Sheikh Mohammed bin Rashid Blvd, Dubai',
      'Dubai Mall': 'Financial Center Road, Downtown Dubai',
      'Muzeum Przyszłości': 'Sheikh Zayed Rd, Trade Centre 2, Dubai',
      'Dubai Frame': 'Za\'abeel Park, Dubai',
      'Dubai Miracle Garden': 'Al Barsha South 3, Dubai',
      'Palm Jumeirah': 'Palm Jumeirah, Dubai',
      'Burj Al Arab': 'Jumeirah Beach Road, Dubai',
      
      // Abu Dhabi Attractions
      'Sheikh Zayed Grand Mosque': 'Sheikh Rashid Bin Saeed Street, Abu Dhabi',
      'Louvre Abu Dhabi': 'Saadiyat Cultural District, Abu Dhabi',
      'Emirates Palace': 'West Corniche Road, Abu Dhabi',
      'Ferrari World': 'Yas Island, Abu Dhabi',
      'Yas Waterworld': 'Yas Island, Abu Dhabi',
      'Warner Bros. World': 'Yas Island, Abu Dhabi',
      'The Corniche': 'Corniche Road, Abu Dhabi',
      'Qasr Al Watan': 'Al Ras Al Akhdar, Abu Dhabi',
      'Observation Deck at 300': 'Etihad Towers, Abu Dhabi',
      'Mangrove National Park': 'Sheikh Zayed Bin Sultan Street, Abu Dhabi',
      'Heritage Village': 'Near Marina Mall, Abu Dhabi',
      'Abu Dhabi Falcon Hospital': 'Sweihan Road, Abu Dhabi',
      'Yas Marina Circuit': 'Yas Island, Abu Dhabi',
      'Al Ain Zoo': 'Al Ain, Abu Dhabi',
      'Qasr Al Hosn': 'Rashid Bin Saeed Al Maktoum St, Abu Dhabi',
      'Emirates National Auto Museum': 'Al Gharbia, Abu Dhabi',
      'Capital Gate': 'Al Khaleej Al Arabi Street, Abu Dhabi',
      'Al Ain Oasis': 'Al Ain, Abu Dhabi',
      'Abu Dhabi Mall': 'Tourist Club Area, Abu Dhabi',
      'Marina Mall': 'Corniche Road, Abu Dhabi'
    };
    return addresses[name] || 'Address available at location';
  };

  const getAttractionCoordinates = (item) => {
    if (item.latitude && item.longitude) {
      return { lat: item.latitude, lng: item.longitude };
    }
    
    // Name mapping for attractions with different names
    const nameMapping = {
      'The Dubai Fountain': 'Fontanny Dubajskie',
      'Observation Deck at 300': 'Observation Deck at 300',
      'Mangrove National Park': 'Mangrove National Park',
      'Emirates National Auto Museum': 'Emirates National Auto Museum',
      'Al Ain Zoo': 'Al Ain Zoo',
      'Dubai Parks and Resorts': 'Dubai Parks and Resorts',
      'Aquaventure Waterpark': 'Aquaventure Waterpark',
      'Al Fahidi Historical District': 'Al Fahidi Historical District',
      'Heritage Village': 'Heritage Village',
      'Ain Dubai': 'Ain Dubai',
      'Wild Wadi Waterpark': 'Wild Wadi Waterpark',
      'Infinity des Lumières': 'Infinity des Lumières',
      'Global Village': 'Global Village',
      'Dubai Safari Park': 'Dubai Safari Park',
      'Kite Beach': 'Kite Beach',
      'Love Lakes': 'Love Lakes',
      'The View at The Palm': 'The View at The Palm',
      'La Mer': 'La Mer',
      'The Pointe': 'The Pointe',
      'Warner Bros. World': 'Warner Bros. World Abu Dhabi',
      'Yas Marina': 'Yas Marina',
      'Falcon Hospital': 'Falcon Hospital',
      'Jumeirah Mosque': 'Jumeirah Mosque'
    };

    const lookupName = nameMapping[item.name] || item.name;
    
    // Fallback coordinates if not found in item
    const attractionCoordinates = {
      'Burj Khalifa': { lat: 25.1972, lng: 55.2744 },
      'Dubai Mall': { lat: 25.1985, lng: 55.2798 },
      'Dubai Opera': { lat: 25.1927, lng: 55.2744 },
      'Dubai Frame': { lat: 25.2335, lng: 55.3003 },
      'Muzeum Przyszłości': { lat: 25.2186, lng: 55.2867 },
      'Burj Al Arab': { lat: 25.1412, lng: 55.1853 },
      'Palm Jumeirah': { lat: 25.1161, lng: 55.1375 },
      'Dubai Marina': { lat: 25.0806, lng: 55.1417 },
      'Miracle Garden': { lat: 25.0599, lng: 55.2423 },
      'Dubai Butterfly Garden': { lat: 25.0599, lng: 55.2423 },
      'Mall of the Emirates': { lat: 25.1181, lng: 55.2002 },
      'JBR Beach': { lat: 25.0799, lng: 55.1335 },
      'Ski Dubai': { lat: 25.1181, lng: 55.2002 },
      'Sheikh Zayed Grand Mosque': { lat: 24.4128, lng: 54.4750 },
      'Louvre Abu Dhabi': { lat: 24.5339, lng: 54.3981 },
      'Emirates Palace': { lat: 24.4615, lng: 54.3166 },
      'Ferrari World': { lat: 24.4821, lng: 54.6053 },
      'Yas Mall': { lat: 24.4821, lng: 54.6053 },
      'Warner Bros. World Abu Dhabi': { lat: 24.4821, lng: 54.6053 },
      'Jumeirah Beach': { lat: 25.2048, lng: 55.2708 },
      'IMG Worlds of Adventure': { lat: 25.0569, lng: 55.3019 },
      'Dubai Creek': { lat: 25.2711, lng: 55.3036 },
      'XLine Dubai Marina': { lat: 25.0806, lng: 55.1417 },
      'Dubai Aquarium & Underwater Zoo': { lat: 25.1985, lng: 55.2798 },
      'Atlantis The Royal': { lat: 25.1161, lng: 55.1375 },
      'Deep Dive Dubai': { lat: 25.1693, lng: 55.3802 },
      'Dubai Festival City Mall': { lat: 25.2207, lng: 55.3492 },
      'Textile Souk': { lat: 25.2847, lng: 55.2961 },
      'Spice Souk': { lat: 25.2867, lng: 55.2973 },
      'Gold Souk': { lat: 25.2867, lng: 55.2962 },
      'City Walk': { lat: 25.2095, lng: 55.2623 },
      'Dubai Garden Glow': { lat: 25.2384, lng: 55.3003 },
      'Dubai Museum': { lat: 25.2635, lng: 55.2972 },
      'Sheikh Mohammed Centre': { lat: 25.2677, lng: 55.2969 },
      'Etihad Museum': { lat: 25.2082, lng: 55.2571 },
      'Heritage Village': { lat: 25.2697, lng: 55.3075 },
      'Dubai Desert Conservation Reserve': { lat: 24.8333, lng: 55.6667 },
      'Ras Al Khor Wildlife Sanctuary': { lat: 25.1827, lng: 55.3527 },
      'Zabeel Park': { lat: 25.2272, lng: 55.3088 },
      'The Dubai Fountain': { lat: 25.1972, lng: 55.2744 },
      'Ain Dubai': { lat: 25.0785, lng: 55.1167 },
      'Dubai Parks and Resorts': { lat: 25.0333, lng: 55.0167 },
      'Aquaventure Waterpark': { lat: 25.1304, lng: 55.1171 },
      'Al Fahidi Historical District': { lat: 25.2635, lng: 55.2972 },
      'Heritage Village Abu Dhabi': { lat: 24.4821, lng: 54.3419 },
      'Observation Deck at 300': { lat: 24.4140, lng: 54.3225 },
      'Mangrove National Park': { lat: 24.4639, lng: 54.4275 },
      'Emirates National Auto Museum': { lat: 24.1786, lng: 54.9789 },
      'Al Ain Zoo': { lat: 24.1750, lng: 55.7361 },
      'Fontanny Dubajskie': { lat: 25.1972, lng: 55.2744 },
      'Wild Wadi Waterpark': { lat: 25.1412, lng: 55.1853 },
      'Infinity des Lumières': { lat: 25.1985, lng: 55.2798 },
      'Global Village': { lat: 25.0684, lng: 55.3009 },
      'Dubai Safari Park': { lat: 25.1686, lng: 55.4738 },
      'Kite Beach': { lat: 25.1304, lng: 55.2009 },
      'Love Lakes': { lat: 24.9982, lng: 55.5178 },
      'The View at The Palm': { lat: 25.1124, lng: 55.1390 },
      'La Mer': { lat: 25.2273, lng: 55.2642 },
      'The Pointe': { lat: 25.1167, lng: 55.1397 },
      'Yas Marina': { lat: 24.4667, lng: 54.6033 },
      'Falcon Hospital': { lat: 24.4297, lng: 54.6925 },
      'Jumeirah Mosque': { lat: 25.2332, lng: 55.2614 }
    };
    return attractionCoordinates[lookupName] || null;
  };

  const getCityFromAddress = (address) => {
    if (!address) return 'Unknown';
    
    const lowerAddress = address.toLowerCase();
    if (lowerAddress.includes('abu dhabi') || lowerAddress.includes('al ain')) {
      return 'Abu Dhabi';
    }
    if (lowerAddress.includes('dubai')) {
      return 'Dubai';
    }
    
    // If the address doesn't explicitly mention a city, check against known attractions
    const abuDhabiLocations = [
      'yas island',
      'saadiyat',
      'corniche',
      'al ras al akhdar',
      'etihad towers',
      'sheikh zayed bin sultan street',
      'marina mall',
      'sweihan road',
      'al gharbia',
      'al khaleej al arabi street',
      'tourist club area'
    ];
    
    if (abuDhabiLocations.some(location => lowerAddress.includes(location))) {
      return 'Abu Dhabi';
    }
    
    return 'Dubai'; // Default to Dubai if no specific location is matched
  };

  const kmToMiles = (km) => {
    return Math.round(km * 0.621371 * 10) / 10;
  };

  const normalizeAttractionName = (name) => {
    // Map attraction display names to their standardized versions
    const nameMap = {
      'The Dubai Mall': 'Dubai Mall',
      'The Dubai Opera': 'Dubai Opera',
      'The Dubai Frame': 'Dubai Frame',
      'Dubai Miracle Garden': 'Miracle Garden',
      'Mall of The Emirates': 'Mall of the Emirates',
      'The Palm Jumeirah': 'Palm Jumeirah',
      'JBR': 'JBR Beach',
      'The Dubai Marina': 'Dubai Marina',
      'Sheikh Zayed Mosque': 'Sheikh Zayed Grand Mosque',
      'The Louvre Abu Dhabi': 'Louvre Abu Dhabi',
      'The Emirates Palace': 'Emirates Palace',
      'Warner Brothers World': 'Warner Bros. World',
      'Burj-Al-Arab': 'Burj Al Arab',
      'The Dubai Creek': 'Dubai Creek',
      'Dubai Creek Harbour': 'Dubai Creek',
      'XLine': 'XLine Dubai Marina',
      'Dubai Aquarium': 'Dubai Aquarium & Underwater Zoo',
      'Underwater Zoo': 'Dubai Aquarium & Underwater Zoo',
      'Atlantis, The Royal': 'Atlantis The Royal',
      'The Royal Atlantis': 'Atlantis The Royal',
      'The Textile Souk': 'Textile Souk',
      'Dubai Textile Souk': 'Textile Souk',
      'Festival City Mall': 'Dubai Festival City Mall',
      'Festival City': 'Dubai Festival City Mall',
      'Deep Dive': 'Deep Dive Dubai',
      'The City Walk': 'City Walk',
      'The Dubai Museum': 'Dubai Museum',
      'Dubai Garden': 'Dubai Garden Glow',
      'Garden Glow': 'Dubai Garden Glow',
      'Sheikh Mohammed Cultural Center': 'Sheikh Mohammed Centre',
      'SMCCU': 'Sheikh Mohammed Centre',
      'The Etihad Museum': 'Etihad Museum',
      'The Heritage Village': 'Heritage Village',
      'Dubai Heritage Village': 'Heritage Village',
      'Dubai Desert Reserve': 'Dubai Desert Conservation Reserve',
      'Desert Conservation Reserve': 'Dubai Desert Conservation Reserve',
      'DDCR': 'Dubai Desert Conservation Reserve',
      'Ras Al Khor': 'Ras Al Khor Wildlife Sanctuary',
      'Ras Al Khor Sanctuary': 'Ras Al Khor Wildlife Sanctuary',
      'Wildlife Sanctuary': 'Ras Al Khor Wildlife Sanctuary',
      'The Zabeel Park': 'Zabeel Park',
      'Dubai Safari': 'Dubai Safari Park',
      'The Love Lake': 'Love Lakes',
      'Love Lake Dubai': 'Love Lakes',
      'The View Palm': 'The View at The Palm',
      'View Palm': 'The View at The Palm',
      'Palm View': 'The View at The Palm',
      'Pointe Dubai': 'The Pointe',
      'Palm Pointe': 'The Pointe',
      'La Mer Beach': 'La Mer',
      'La Mer Dubai': 'La Mer',
      'Green Planet Dubai': 'The Green Planet',
      'The Address Sky View': 'Address Sky View',
      'Address Sky View Hotel': 'Address Sky View',
      'The Gold Souk': 'Gold Souk',
      'Dubai Gold Souk': 'Gold Souk',
      'The Spice Souk': 'Spice Souk',
      'Dubai Spice Souk': 'Spice Souk',
      'Wild Wadi': 'Wild Wadi Waterpark',
      'Dubai Global Village': 'Global Village',
      'The Jumeirah Mosque': 'Jumeirah Mosque',
      'Dubai Fountain': 'The Dubai Fountain',
      'The Fountain Dubai': 'The Dubai Fountain',
      'Infinity Des Lumieres': 'Infinity des Lumières',
      'Infinity des Lumieres': 'Infinity des Lumières',
      'Muzeum Przyszłości': 'Muzeum Przyszłości'
    };
    
    return nameMap[name] || name;
  };

  const travelData = {
    // Dubai attractions
    'Burj Khalifa|Dubai Mall': { distance: 0.5, drivingTime: 5, walkingTime: 8 },
    'Burj Khalifa|Dubai Opera': { distance: 0.8, drivingTime: 7, walkingTime: 12 },
    'Dubai Mall|Dubai Opera': { distance: 0.9, drivingTime: 8, walkingTime: 15 },
    'Dubai Frame|Dubai Mall': { distance: 7.5, drivingTime: 17, walkingTime: 104 },
    'Dubai Frame|Burj Khalifa': { distance: 7.2, drivingTime: 16, walkingTime: 98 },
    'Dubai Butterfly Garden|Miracle Garden': { distance: 1.2, drivingTime: 5, walkingTime: 18 },
    'Dubai Butterfly Garden|Mall of the Emirates': { distance: 8.5, drivingTime: 15, walkingTime: 110 },
    'Miracle Garden|Mall of the Emirates': { distance: 9.0, drivingTime: 18, walkingTime: 120 },
    'Palm Jumeirah|Mall of the Emirates': { distance: 6.5, drivingTime: 15, walkingTime: 85 },
    'Palm Jumeirah|Dubai Marina': { distance: 4.2, drivingTime: 12, walkingTime: 55 },
    'Dubai Marina|JBR Beach': { distance: 1.5, drivingTime: 7, walkingTime: 20 },
    'Dubai Marina|Mall of the Emirates': { distance: 8.0, drivingTime: 18, walkingTime: 105 },
    'Ski Dubai|Mall of the Emirates': { distance: 0.1, drivingTime: 3, walkingTime: 5 },
    
    // Add missing attractions
    'Jumeirah Beach|Dubai Mall': { distance: 12.5, drivingTime: 25, walkingTime: 150 },
    'Jumeirah Beach|Burj Al Arab': { distance: 3.2, drivingTime: 10, walkingTime: 45 },
    'Jumeirah Beach|Palm Jumeirah': { distance: 8.5, drivingTime: 20, walkingTime: 110 },
    'IMG Worlds of Adventure|Dubai Mall': { distance: 15.2, drivingTime: 25, walkingTime: 180 },
    'IMG Worlds of Adventure|Dubai Frame': { distance: 12.8, drivingTime: 22, walkingTime: 160 },
    'IMG Worlds of Adventure|Miracle Garden': { distance: 10.5, drivingTime: 20, walkingTime: 140 },
    'Dubai Creek|Dubai Mall': { distance: 8.5, drivingTime: 20, walkingTime: 110 },
    'Dubai Creek|Dubai Frame': { distance: 4.2, drivingTime: 12, walkingTime: 55 },
    'Dubai Creek|Muzeum Przyszłości': { distance: 6.8, drivingTime: 15, walkingTime: 90 },
    'XLine Dubai Marina|Dubai Marina': { distance: 0.1, drivingTime: 3, walkingTime: 5 },
    'XLine Dubai Marina|JBR Beach': { distance: 1.6, drivingTime: 8, walkingTime: 22 },
    'Dubai Aquarium & Underwater Zoo|Dubai Mall': { distance: 0.1, drivingTime: 3, walkingTime: 5 },
    'Dubai Aquarium & Underwater Zoo|Burj Khalifa': { distance: 0.5, drivingTime: 5, walkingTime: 8 },
    'Atlantis The Royal|Palm Jumeirah': { distance: 0.5, drivingTime: 5, walkingTime: 8 },
    'Atlantis The Royal|Dubai Marina': { distance: 4.5, drivingTime: 12, walkingTime: 60 },
    'Dubai Creek|Burj Khalifa': { distance: 9.2, drivingTime: 18, walkingTime: 120 },
    'Dubai Creek|Dubai Aquarium & Underwater Zoo': { distance: 8.8, drivingTime: 17, walkingTime: 115 },
    'XLine Dubai Marina|Dubai Mall': { distance: 20.5, drivingTime: 30, walkingTime: 250 },
    'XLine Dubai Marina|Palm Jumeirah': { distance: 4.0, drivingTime: 12, walkingTime: 50 },
    'Atlantis The Royal|Dubai Mall': { distance: 21.0, drivingTime: 32, walkingTime: 260 },
    'Atlantis The Royal|Burj Al Arab': { distance: 12.5, drivingTime: 22, walkingTime: 155 },
    'Deep Dive Dubai|Dubai Mall': { distance: 18.5, drivingTime: 28, walkingTime: 230 },
    'Deep Dive Dubai|Dubai Frame': { distance: 12.8, drivingTime: 22, walkingTime: 160 },
    'Deep Dive Dubai|City Walk': { distance: 15.2, drivingTime: 25, walkingTime: 190 },
    'Dubai Festival City Mall|Dubai Mall': { distance: 10.5, drivingTime: 20, walkingTime: 130 },
    'Dubai Festival City Mall|Dubai Creek': { distance: 5.2, drivingTime: 12, walkingTime: 65 },
    'Dubai Festival City Mall|City Walk': { distance: 8.8, drivingTime: 18, walkingTime: 110 },
    'Textile Souk|Dubai Creek': { distance: 1.2, drivingTime: 5, walkingTime: 15 },
    'Textile Souk|Dubai Mall': { distance: 9.5, drivingTime: 18, walkingTime: 120 },
    'Textile Souk|Dubai Frame': { distance: 6.8, drivingTime: 15, walkingTime: 85 },
    'City Walk|Dubai Mall': { distance: 4.2, drivingTime: 12, walkingTime: 55 },
    'City Walk|Burj Khalifa': { distance: 3.8, drivingTime: 10, walkingTime: 50 },
    'City Walk|Dubai Frame': { distance: 5.5, drivingTime: 15, walkingTime: 70 },
    'Dubai Garden Glow|Dubai Frame': { distance: 1.2, drivingTime: 5, walkingTime: 15 },
    'Dubai Garden Glow|Dubai Creek': { distance: 3.5, drivingTime: 10, walkingTime: 45 },
    'Dubai Garden Glow|Dubai Mall': { distance: 8.2, drivingTime: 18, walkingTime: 105 },
    'Dubai Museum|Dubai Creek': { distance: 0.8, drivingTime: 5, walkingTime: 10 },
    'Dubai Museum|Textile Souk': { distance: 0.5, drivingTime: 3, walkingTime: 7 },
    'Dubai Museum|Dubai Mall': { distance: 8.8, drivingTime: 18, walkingTime: 110 },
    'Sheikh Mohammed Centre|Dubai Museum': { distance: 0.4, drivingTime: 3, walkingTime: 6 },
    'Sheikh Mohammed Centre|Dubai Creek': { distance: 0.9, drivingTime: 5, walkingTime: 12 },
    'Sheikh Mohammed Centre|Textile Souk': { distance: 0.6, drivingTime: 4, walkingTime: 8 },
    'Etihad Museum|City Walk': { distance: 1.2, drivingTime: 5, walkingTime: 15 },
    'Etihad Museum|Dubai Mall': { distance: 5.2, drivingTime: 12, walkingTime: 65 },
    'Etihad Museum|Burj Khalifa': { distance: 4.8, drivingTime: 12, walkingTime: 60 },
    
    // Add missing attractions
    'Heritage Village|Dubai Creek': { distance: 0.5, drivingTime: 3, walkingTime: 7 },
    'Heritage Village|Dubai Museum': { distance: 1.2, drivingTime: 5, walkingTime: 15 },
    'Heritage Village|Sheikh Mohammed Centre': { distance: 0.8, drivingTime: 4, walkingTime: 10 },
    'Dubai Desert Conservation Reserve|Dubai Mall': { distance: 45.0, drivingTime: 45, walkingTime: 540 },
    'Dubai Desert Conservation Reserve|Burj Khalifa': { distance: 44.5, drivingTime: 44, walkingTime: 535 },
    'Dubai Desert Conservation Reserve|IMG Worlds of Adventure': { distance: 35.2, drivingTime: 38, walkingTime: 420 },
    'Ras Al Khor Wildlife Sanctuary|Dubai Mall': { distance: 12.5, drivingTime: 22, walkingTime: 155 },
    'Ras Al Khor Wildlife Sanctuary|Dubai Festival City Mall': { distance: 6.8, drivingTime: 15, walkingTime: 85 },
    'Ras Al Khor Wildlife Sanctuary|Dubai Creek': { distance: 8.2, drivingTime: 18, walkingTime: 105 },
    
    // Add missing attractions
    'Zabeel Park|Dubai Frame': { distance: 2.2, drivingTime: 8, walkingTime: 28 },
    'Zabeel Park|Dubai Mall': { distance: 4.5, drivingTime: 12, walkingTime: 58 },
    'Zabeel Park|City Walk': { distance: 3.2, drivingTime: 10, walkingTime: 42 },
    'Dubai Safari Park|Dubai Mall': { distance: 25.5, drivingTime: 32, walkingTime: 320 },
    'Dubai Safari Park|IMG Worlds of Adventure': { distance: 18.2, drivingTime: 25, walkingTime: 230 },
    'Dubai Safari Park|Dubai Festival City Mall': { distance: 15.5, drivingTime: 22, walkingTime: 195 },
    'Kite Beach|Burj Al Arab': { distance: 2.5, drivingTime: 8, walkingTime: 32 },
    'Kite Beach|Jumeirah Beach': { distance: 3.8, drivingTime: 10, walkingTime: 48 },
    'Kite Beach|Mall of the Emirates': { distance: 5.2, drivingTime: 12, walkingTime: 65 },
    'Love Lakes|Dubai Mall': { distance: 35.5, drivingTime: 38, walkingTime: 440 },
    'Love Lakes|Dubai Desert Conservation Reserve': { distance: 22.5, drivingTime: 28, walkingTime: 280 },
    'Love Lakes|IMG Worlds of Adventure': { distance: 28.2, drivingTime: 32, walkingTime: 350 },
    'The View at The Palm|Palm Jumeirah': { distance: 0.1, drivingTime: 3, walkingTime: 5 },
    'The View at The Palm|Atlantis The Royal': { distance: 0.5, drivingTime: 5, walkingTime: 8 },
    'The View at The Palm|Dubai Marina': { distance: 4.2, drivingTime: 12, walkingTime: 55 },
    'The Pointe|Palm Jumeirah': { distance: 0.8, drivingTime: 5, walkingTime: 12 },
    'The Pointe|Atlantis The Royal': { distance: 1.2, drivingTime: 6, walkingTime: 15 },
    'The Pointe|Dubai Marina': { distance: 4.5, drivingTime: 12, walkingTime: 58 },
    'La Mer|Jumeirah Beach': { distance: 3.2, drivingTime: 10, walkingTime: 42 },
    'La Mer|City Walk': { distance: 2.8, drivingTime: 8, walkingTime: 35 },
    'La Mer|Dubai Mall': { distance: 5.5, drivingTime: 15, walkingTime: 70 },
    'The Green Planet|City Walk': { distance: 0.1, drivingTime: 3, walkingTime: 5 },
    'The Green Planet|Dubai Mall': { distance: 4.2, drivingTime: 12, walkingTime: 55 },
    'The Green Planet|Burj Khalifa': { distance: 3.8, drivingTime: 10, walkingTime: 50 },
    'Address Sky View|Burj Khalifa': { distance: 0.2, drivingTime: 3, walkingTime: 5 },
    'Address Sky View|Dubai Mall': { distance: 0.6, drivingTime: 5, walkingTime: 8 },
    'Address Sky View|Dubai Opera': { distance: 0.8, drivingTime: 5, walkingTime: 10 },
    
    // Add missing attractions
    'Gold Souk|Dubai Creek': { distance: 0.5, drivingTime: 3, walkingTime: 7 },
    'Gold Souk|Spice Souk': { distance: 0.2, drivingTime: 2, walkingTime: 3 },
    'Gold Souk|Dubai Museum': { distance: 1.2, drivingTime: 5, walkingTime: 15 },
    'Global Village|Dubai Mall': { distance: 22.5, drivingTime: 28, walkingTime: 280 },
    'Global Village|IMG Worlds of Adventure': { distance: 12.2, drivingTime: 18, walkingTime: 150 },
    'Global Village|Dubai Safari Park': { distance: 15.5, drivingTime: 22, walkingTime: 195 },
    'Spice Souk|Dubai Creek': { distance: 0.4, drivingTime: 3, walkingTime: 6 },
    'Spice Souk|Dubai Museum': { distance: 1.1, drivingTime: 5, walkingTime: 14 },
    'Spice Souk|Heritage Village': { distance: 0.8, drivingTime: 4, walkingTime: 10 },
    'Wild Wadi Waterpark|Burj Al Arab': { distance: 0.2, drivingTime: 3, walkingTime: 5 },
    'Wild Wadi Waterpark|Jumeirah Beach': { distance: 3.5, drivingTime: 10, walkingTime: 45 },
    'Wild Wadi Waterpark|Mall of the Emirates': { distance: 4.8, drivingTime: 12, walkingTime: 60 },
    
    // Add missing attractions
    'Jumeirah Mosque|City Walk': { distance: 2.8, drivingTime: 8, walkingTime: 35 },
    'Jumeirah Mosque|Jumeirah Beach': { distance: 2.5, drivingTime: 8, walkingTime: 32 },
    'Jumeirah Mosque|Dubai Mall': { distance: 5.5, drivingTime: 15, walkingTime: 70 },
    'The Dubai Fountain|Dubai Mall': { distance: 0.1, drivingTime: 2, walkingTime: 3 },
    'The Dubai Fountain|Burj Khalifa': { distance: 0.1, drivingTime: 2, walkingTime: 3 },
    'The Dubai Fountain|Dubai Opera': { distance: 0.8, drivingTime: 5, walkingTime: 10 },
    'Infinity des Lumières|Dubai Mall': { distance: 0.1, drivingTime: 2, walkingTime: 3 },
    'Infinity des Lumières|The Dubai Fountain': { distance: 0.1, drivingTime: 2, walkingTime: 3 },
    'Infinity des Lumières|Burj Khalifa': { distance: 0.5, drivingTime: 5, walkingTime: 8 },
    
    // Abu Dhabi attractions
    'Sheikh Zayed Grand Mosque|Louvre Abu Dhabi': { distance: 12.5, drivingTime: 20, walkingTime: 160 },
    'Sheikh Zayed Grand Mosque|Emirates Palace': { distance: 14.2, drivingTime: 22, walkingTime: 180 },
    'Louvre Abu Dhabi|Emirates Palace': { distance: 3.8, drivingTime: 12, walkingTime: 50 },
    'Ferrari World|Yas Mall': { distance: 0.5, drivingTime: 5, walkingTime: 8 },
    'Ferrari World|Warner Bros. World': { distance: 0.8, drivingTime: 7, walkingTime: 12 },
    'Yas Mall|Warner Bros. World': { distance: 0.9, drivingTime: 8, walkingTime: 15 },
    
    // Inter-city travel
    'Dubai Mall|Sheikh Zayed Grand Mosque': { distance: 140, drivingTime: 90, walkingTime: 1800 },
    'Burj Khalifa|Sheikh Zayed Grand Mosque': { distance: 140, drivingTime: 90, walkingTime: 1800 },
    'Dubai Marina|Ferrari World': { distance: 155, drivingTime: 100, walkingTime: 1950 },
    'Mall of the Emirates|Louvre Abu Dhabi': { distance: 145, drivingTime: 95, walkingTime: 1850 }
  };

  const getRealWorldTravelData = (fromAttraction, toAttraction) => {
    // Normalize attraction names
    const normalizedFrom = normalizeAttractionName(fromAttraction);
    const normalizedTo = normalizeAttractionName(toAttraction);
    
    console.log('Calculating travel data between:', normalizedFrom, 'and', normalizedTo);
    
    // Try both orders since the data is symmetric
    const key1 = `${normalizedFrom}|${normalizedTo}`;
    const key2 = `${normalizedTo}|${normalizedFrom}`;
    
    console.log('Looking for keys:', key1, 'or', key2);
    const data = travelData[key1] || travelData[key2];
    
    if (data) {
      console.log('Found pre-calculated data:', data);
      return {
        drivingDistance: data.distance,
        walkingDistance: data.distance * 0.8, // Walking paths are typically shorter
        driving: data.drivingTime,
        walking: data.walkingTime
      };
    }
    
    console.log('No pre-calculated data found, falling back to coordinates');
    // Fallback to calculated distances if not in the pre-calculated data
    const fromCoords = getAttractionCoordinates({ name: normalizedFrom });
    const toCoords = getAttractionCoordinates({ name: normalizedTo });
    
    console.log('Coordinates:', { fromCoords, toCoords });
    
    if (fromCoords && toCoords) {
      const distance = calculateDistance(fromCoords, toCoords);
      
      // Apply a realistic route factor (roads are typically 20-30% longer than straight-line distance)
      const routeFactor = 1.3;
      const adjustedDistance = distance * routeFactor;
      
      // Estimate times based on adjusted distance
      // Average speeds: driving 40 km/h in city, walking 4.5 km/h
      const drivingTime = Math.round((adjustedDistance / 40) * 60);
      const walkingTime = Math.round((adjustedDistance / 4.5) * 60);
      
      const result = {
        drivingDistance: Math.round(adjustedDistance * 10) / 10,
        walkingDistance: Math.round(adjustedDistance * 0.8 * 10) / 10,
        driving: Math.max(drivingTime, 5),  // Minimum 5 minutes
        walking: Math.max(walkingTime, 5)   // Minimum 5 minutes
      };
      
      console.log('Calculated result:', result);
      return result;
    }
    
    console.log('Could not calculate travel data');
    return null;
  };

  const calculateTravelTimes = (fromAttraction, toAttraction) => {
    if (!fromAttraction || !toAttraction) {
      return null;
    }

    // First try to get pre-calculated data
    const travelData = getRealWorldTravelData(fromAttraction, toAttraction);
    if (travelData) {
      return {
        drivingDistance: travelData.drivingDistance,
        walkingDistance: travelData.walkingDistance,
        driving: travelData.driving,
        walking: travelData.walking
      };
    }
    
    // Get coordinates for both attractions
    const fromCoords = getAttractionCoordinates({ name: fromAttraction });
    const toCoords = getAttractionCoordinates({ name: toAttraction });
    
    if (!fromCoords || !toCoords || !fromCoords.lat || !toCoords.lat) {
      return null;
    }
    
    // Calculate straight-line distance
    const distance = calculateDistance(fromCoords, toCoords);
    
    // Apply different route factors for driving and walking
    const drivingRouteFactor = 1.3; // Roads are typically 30% longer than straight line
    const walkingRouteFactor = 1.1; // Walking paths can be more direct
    
    const drivingDistance = distance * drivingRouteFactor;
    const walkingDistance = distance * walkingRouteFactor;
    
    // Calculate times based on distance
    let walking, driving;
    
    if (drivingDistance < 1) {
      // Short distances (< 1km)
      walking = Math.round(walkingDistance * 60 / 4.5) + 5;  // 4.5 km/h + 5min for crossings
      driving = Math.round(drivingDistance * 60 / 25) + 5;   // 25 km/h + 5min for traffic
    } else if (drivingDistance < 5) {
      // Medium distances (1-5km)
      walking = Math.round(walkingDistance * 60 / 4.5) + 10; // 4.5 km/h + 10min for crossings
      driving = Math.round(drivingDistance * 60 / 30) + 8;   // 30 km/h + 8min for traffic
    } else if (drivingDistance < 20) {
      // City distances (5-20km)
      walking = Math.round(walkingDistance * 60 / 4) + 15;   // 4 km/h + 15min for rests
      driving = Math.round(drivingDistance * 60 / 40) + 10;  // 40 km/h + 10min for traffic
    } else {
      // Inter-city distances (>20km)
      walking = Math.round(walkingDistance * 60 / 3.5);      // 3.5 km/h for long walks
      driving = Math.round(drivingDistance * 60 / 80) + 15;  // 80 km/h + 15min for traffic
    }
    
    return {
      drivingDistance: Math.round(drivingDistance * 10) / 10,
      walkingDistance: Math.round(walkingDistance * 10) / 10,
      driving: Math.max(driving, 5),    // Minimum 5 minutes
      walking: Math.max(walking, 5)     // Minimum 5 minutes
    };
  };

  const calculateDistance = (fromCoords, toCoords) => {
    if (!fromCoords?.lat || !toCoords?.lat) {
      return 0;
    }

    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (toCoords.lat - fromCoords.lat) * Math.PI / 180;
    const dLon = (toCoords.lng - fromCoords.lng) * Math.PI / 180;
    const lat1Rad = fromCoords.lat * Math.PI / 180;
    const lat2Rad = toCoords.lat * Math.PI / 180;

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1Rad) * Math.cos(lat2Rad);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const formatTravelTime = (minutes) => {
    if (minutes < 60) {
      return `${minutes} min`;
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    if (remainingMinutes === 0) {
      return `${hours} godz`;
    }
    return `${hours} godz ${remainingMinutes} min`;
  };

  const getTotalItineraryTime = () => {
    let attractionsDuration = 0;
    let travelTime = 0;

    if (itineraryItems && itineraryItems.length > 0) {
      // Calculate attractions duration
      attractionsDuration = itineraryItems.reduce((sum, item) => sum + (item.duration || 0), 0);
      
      // Calculate travel time between consecutive attractions
      for (let i = 1; i < itineraryItems.length; i++) {
        const prevItem = itineraryItems[i - 1];
        const currentItem = itineraryItems[i];
        
        if (prevItem?.name && currentItem?.name) {
          const travelTimes = calculateTravelTimes(prevItem.name, currentItem.name);
          if (travelTimes?.driving) {
            travelTime += travelTimes.driving;
          }
        }
      }
    }

    return { 
      attractionsDuration, 
      travelTime, 
      totalTime: attractionsDuration + travelTime 
    };
  };

  const addToItinerary = (attraction) => {
    if (!itineraryItems.some(item => item.id === attraction.id)) {
      setItineraryItems(prevItems => {
        const newItems = [...prevItems, { ...attraction, addedAt: new Date() }];
        return newItems;
      });
    } else {
      toast.error('Ta atrakcja jest już w planie podróży!');
    }
  };

  const removeFromItinerary = (attractionId) => {
    setItineraryItems(prevItems => {
      const newItems = prevItems.filter(item => item.id !== attractionId);
      return newItems;
    });
  };

  const clearItinerary = () => {
    setItineraryItems([]);
    toast.success('Plan podróży został wyczyszczony');
  };

  const reorderItinerary = (sourceIndex, destinationIndex) => {
    setItineraryItems(prev => {
      const result = Array.from(prev);
      const [removed] = result.splice(sourceIndex, 1);
      result.splice(destinationIndex, 0, removed);
      return result;
    });
  };

  const organizeByDays = () => {
    if (itineraryItems.length === 0) return [];

    // Group attractions by city first
    const dubaiAttractions = itineraryItems.filter(item => 
      getAttractionAddress(item.name).toLowerCase().includes('dubai')
    );
    const abuDhabiAttractions = itineraryItems.filter(item => 
      getAttractionAddress(item.name).toLowerCase().includes('abu dhabi')
    );

    // Calculate total time needed for each city including travel times
    const getDayDuration = (attractions) => {
      let totalTime = 0;
      for (let i = 0; i < attractions.length; i++) {
        totalTime += attractions[i].duration;
        if (i < attractions.length - 1) {
          const travelTimes = calculateTravelTimes(attractions[i].name, attractions[i + 1].name);
          totalTime += travelTimes.driving;
        }
      }
      return totalTime;
    };

    const dubaiTime = getDayDuration(dubaiAttractions);
    const abuDhabiTime = getDayDuration(abuDhabiAttractions);

    // Initialize days array
    const days = Array.from({ length: numberOfDays }, () => []);
    
    // Helper function to add attractions to a day
    const addAttractionsToDay = (attractions, startDay, maxTimePerDay) => {
      let currentDay = startDay;
      let currentDayTime = 0;
      
      attractions.forEach((attraction) => {
        // If adding this attraction would exceed the day's limit, move to next day
        if (currentDayTime + attraction.duration > maxTimePerDay && currentDay < numberOfDays - 1) {
          currentDay++;
          currentDayTime = 0;
        }
        
        days[currentDay].push(attraction);
        currentDayTime += attraction.duration;
        
        // Add travel time if there's a next attraction
        if (days[currentDay].length > 1) {
          const prevAttraction = days[currentDay][days[currentDay].length - 2];
          const travelTimes = calculateTravelTimes(prevAttraction.name, attraction.name);
          currentDayTime += travelTimes.driving;
        }
      });
      
      return currentDay + 1;
    };

    // Distribute attractions across days
    const MAX_HOURS_PER_DAY = 10; // Maximum hours per day
    const MAX_TIME_PER_DAY = MAX_HOURS_PER_DAY * 60; // Convert to minutes

    // Start with Dubai attractions
    let nextAvailableDay = addAttractionsToDay(dubaiAttractions, 0, MAX_TIME_PER_DAY);
    
    // Then add Abu Dhabi attractions
    addAttractionsToDay(abuDhabiAttractions, nextAvailableDay, MAX_TIME_PER_DAY);

    return days;
  };

  const getItineraryByDays = () => {
    const days = Array(numberOfDays).fill().map(() => []);
    
    itineraryItems.forEach(item => {
      const dayIndex = (item.day || 1) - 1;
      if (dayIndex < days.length) {
        days[dayIndex].push(item);
      }
    });
    
    return days;
  };

  const getDayItinerary = (day) => {
    return itineraryItems.filter(item => (item.day || 1) === day);
  };

  useEffect(() => {
    // Load saved itinerary from local storage on component mount
    const savedItinerary = localStorage.getItem('savedItinerary');
    if (savedItinerary) {
      try {
        const { items, numberOfDays: days } = JSON.parse(savedItinerary);
        setItineraryItems(items);
        setNumberOfDays(days);
      } catch (error) {
        console.error('Error loading saved itinerary:', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('itineraryItems', JSON.stringify(itineraryItems));
  }, [itineraryItems]);

  useEffect(() => {
    localStorage.setItem('numberOfDays', numberOfDays.toString());
  }, [numberOfDays]);

  useEffect(() => {
    localStorage.setItem('itinerary', JSON.stringify(itineraryItems));
    localStorage.setItem('dayPlans', JSON.stringify(dayPlans));
  }, [itineraryItems, dayPlans]);

  const value = {
    itineraryItems,
    addToItinerary,
    removeFromItinerary,
    clearItinerary,
    reorderItinerary,
    calculateDistance,
    calculateTravelTimes,
    getTotalItineraryTime,
    numberOfDays,
    updateNumberOfDays,
    organizeByDays,
    getAttractionAddress,
    getItineraryByDays,
    getDayItinerary,
    getCityFromAddress,
    getAttractionCoordinates,
    kmToMiles,
    formatTravelTime,
    dayPlans,
    setDayPlans
  };

  return (
    <ItineraryContext.Provider value={value}>
      <Toaster position="bottom-right" />
      {children}
    </ItineraryContext.Provider>
  );
};
