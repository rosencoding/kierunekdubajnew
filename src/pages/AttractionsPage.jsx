import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaClock, FaPlus, FaCheck, FaDollarSign, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ItineraryContext } from '../contexts/ItineraryContext';
import attractions, { categories } from '../data/attractions';
import usePageTitle from '../hooks/usePageTitle';

const AttractionsPage = () => {
  usePageTitle('Atrakcje w Dubaju - KierunekDubaj.pl');
  const { itineraryItems, addToItinerary, removeFromItinerary } = useContext(ItineraryContext);
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  const getAttractionLink = (attractionId) => {
    const attraction = attractions.find(a => a.id === attractionId);
    if (attraction?.route) return attraction.route;
    if (attraction?.link) return attraction.link;
    
    if (attractionId === 'corniche-beach') {
      return '/abu-dhabi/corniche';
    }
    return abuDhabiAttractions.includes(attractionId) 
      ? `/abu-dhabi/${attractionId}` 
      : `/atrakcje/${attractionId}`;
  };

  const filteredAttractions = selectedCategory === 'all'
    ? attractions
    : attractions.filter(attraction => attraction.category === selectedCategory);

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] -mt-16">
          <div className="absolute inset-0">
            <img
              src="/images/background-hero.jpg"
              alt="Atrakcje w Dubaju i Abu Dhabi"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Atrakcje w Dubaju i Abu Dhabi
                </h1>
                <p className="text-xl text-gray-100 leading-relaxed max-w-3xl mx-auto">
                  Odkryj najciekawsze atrakcje turystyczne w Dubaju i Abu Dhabi! Dodawaj ulubione miejsca do swojego planu podróży i stwórz idealny harmonogram zwiedzania. Zaplanuj niezapomniane wakacje w Zjednoczonych Emiratach Arabskich już dziś!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-center mb-4">Popularne Atrakcje</h2>
          <p className="text-gray-600 text-center mb-8">
            Wybierz interesujące Cię miejsca i dodaj je do swojego planu podróży. Pomożemy Ci zorganizować niezapomnianą wycieczkę do Dubaju
          </p>

          {/* Category Filters */}
          <div className="mb-12 overflow-x-auto">
            <div className="flex gap-2 min-w-max pb-4 justify-center">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`
                  px-6 py-3 rounded-full text-sm font-medium transition-all duration-200
                  ${selectedCategory === 'all'
                    ? 'bg-yellow-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
                  }
                `}
              >
                <span className="mr-2">🌟</span>
                Wszystkie
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`
                    px-6 py-3 rounded-full text-sm font-medium transition-all duration-200
                    ${selectedCategory === category.id
                      ? 'bg-yellow-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
                    }
                  `}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredAttractions.map((attraction) => (
              <motion.div
                key={attraction.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden relative group hover:shadow-xl"
              >
                {/* Image with Link */}
                <Link 
                  to={getAttractionLink(attraction.id)} 
                  className="block relative h-64"
                >
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Location Badge */}
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center">
                    <FaMapMarkerAlt className="mr-1" />
                    {abuDhabiAttractions.includes(attraction.id) ? 'Abu Dhabi' : 'Dubaj'}
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Link 
                      to={getAttractionLink(attraction.id)}
                      className="text-xl font-bold text-gray-900 hover:text-yellow-600 transition-colors"
                    >
                      {attraction.name}
                    </Link>
                    <button
                      onClick={() => handleAttractionClick(attraction)}
                      className={`ml-2 p-2 rounded-full transition-colors ${
                        isInItinerary(attraction.id)
                          ? 'bg-green-100 text-green-600 hover:bg-green-200'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {isInItinerary(attraction.id) ? <FaCheck /> : <FaPlus />}
                    </button>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {attraction.description}
                  </p>

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
    </>
  );
};

export default AttractionsPage;
