import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaDollarSign, FaPlus, FaCheck, FaInfoCircle } from 'react-icons/fa';
import { ItineraryContext } from '../contexts/ItineraryContext';
import { Link } from 'react-router-dom';
import attractions from '../data/attractions';

const DubaiPage = () => {
  const { itineraryItems, addToItinerary, removeFromItinerary } = useContext(ItineraryContext);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Wszystkie', icon: '🌟' },
    { id: 'architecture', name: 'Architektura', icon: '🏛️' },
    { id: 'cultural', name: 'Kultura', icon: '🕌' },
    { id: 'shopping', name: 'Zakupy', icon: '🛍️' },
    { id: 'beaches', name: 'Plaże', icon: '🏖️' },
    { id: 'entertainment', name: 'Rozrywka', icon: '🎭' },
    { id: 'parks', name: 'Parki i Ogrody', icon: '🌸' }
  ];

  const abuDhabiAttractions = [
    'emirates-palace',
    'louvre-abu-dhabi',
    'sheikh-zayed-mosque',
    'ferrari-world',
    'yas-waterworld',
    'warner-bros-world',
    'corniche',
    'qasr-al-watan',
    'observation-deck',
    'mangrove-national-park',
    'yas-marina-circuit',
    'falcon-hospital',
    'heritage-village',
    'al-ain-oasis',
    'marina-mall',
    'abu-dhabi-mall',
    'capital-gate',
    'emirates-auto-museum',
    'al-ain-zoo',
    'qasr-al-hosn'
  ];

  const dubaiAttractions = attractions.filter(attraction => 
    !abuDhabiAttractions.includes(attraction.id)
  );

  const filteredAttractions = selectedCategory === 'all' 
    ? dubaiAttractions
    : dubaiAttractions.filter(attraction => attraction.category === selectedCategory);

  const isInItinerary = (attractionId) => {
    return itineraryItems.some(item => item.id === attractionId);
  };

  const handleAttractionClick = (attraction) => {
    if (isInItinerary(attraction.id)) {
      removeFromItinerary(attraction.id);
    } else {
      addToItinerary(attraction);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] -mt-16">
        <div className="absolute inset-0">
          <img
            src="/images/background-hero.jpg"
            alt="Dubai Attractions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl font-bold text-white mb-6 leading-tight"
              >
                Odkryj Dubaj
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-100 leading-relaxed"
              >
                Miasto przyszłości, gdzie tradycja spotyka się z innowacją. 
                Poznaj najwyższe budynki świata, luksusowe centra handlowe i fascynujące{' '}
                <span className="text-yellow-400 font-semibold">atrakcje</span>.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                selectedCategory === category.id
                  ? 'bg-yellow-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredAttractions.map((attraction) => (
            <motion.div
              key={attraction.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden relative group hover:shadow-xl"
            >
              <Link to={`/atrakcje/${attraction.id}`} className="block">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-200" />
                </div>
              </Link>
              
              {/* Add to Itinerary Button */}
              <button
                onClick={() => handleAttractionClick(attraction)}
                className={`absolute top-4 right-4 p-3 rounded-full shadow-lg transition-all duration-200
                  ${isInItinerary(attraction.id)
                    ? 'bg-yellow-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
              >
                {isInItinerary(attraction.id) ? <FaCheck /> : <FaPlus />}
              </button>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{attraction.name}</h3>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">{attraction.description}</p>

                <div className="flex flex-wrap gap-3 text-sm">
                  {/* Duration Label */}
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                    <FaClock className="mr-1.5" />
                    {Math.floor(attraction.duration / 60)}h {attraction.duration % 60}min
                  </span>

                  {/* Category Label */}
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
                    <FaInfoCircle className="mr-1.5" />
                    {categories.find(cat => cat.id === attraction.category)?.name}
                  </span>

                  {/* Price Label */}
                  {attraction.price > 0 ? (
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-100">
                      <FaDollarSign className="mr-1.5" />
                      {attraction.price} AED
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 font-medium">
                      <FaCheck className="mr-1.5" />
                      Wstęp wolny
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DubaiPage;
