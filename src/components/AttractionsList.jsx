import React, { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaClock, FaDollarSign, FaMapMarkerAlt, FaArrowRight, FaPlus, FaCheck } from 'react-icons/fa';
import { ItineraryContext } from '../contexts/ItineraryContext';
import attractions from '../data/attractions';

// List of Abu Dhabi attraction IDs
const ABU_DHABI_ATTRACTIONS = [
  'sheikh-zayed-mosque',
  'louvre-abu-dhabi',
  'emirates-palace',
  'ferrari-world',
  'yas-waterworld',
  'warner-bros-world',
  'corniche-beach',
  'qasr-al-watan',
  'observation-deck',
  'mangrove-national-park',
  'heritage-village',
  'al-ain-zoo',
  'falcon-hospital',
  'abu-dhabi-mall',
  'qasr-al-hosn',
  'al-ain-oasis',
  'emirates-auto-museum',
  'capital-gate'
];

const LOCATIONS = {
  ABU_DHABI: 'Abu Dhabi',
  DUBAI: 'Dubaj'
};

const categories = [
  { id: 'all', name: 'Wszystkie', icon: '🌟' },
  { id: 'landmarks', name: 'Zabytki', icon: '🏛️' },
  { id: 'theme-parks', name: 'Parki Rozrywki', icon: '🎡' },
  { id: 'cultural', name: 'Kultura', icon: '🕌' },
  { id: 'shopping', name: 'Zakupy', icon: '🛍️' },
  { id: 'beaches-parks', name: 'Plaże', icon: '🏖️' },
  { id: 'adventure', name: 'Przygoda', icon: '🏜️' },
  { id: 'entertainment', name: 'Rozrywka', icon: '🎭' },
  { id: 'gardens', name: 'Parki i Ogrody', icon: '🌸' }
];

const categoryMapping = {
  'landmarks': 'landmarks',
  'theme-parks': 'theme-parks',
  'cultural': 'cultural',
  'shopping': 'shopping',
  'beaches': 'beaches-parks',
  'adventure': 'adventure',
  'entertainment': 'entertainment',
  'parks': 'gardens'
};

const AttractionsList = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const { addToItinerary, removeFromItinerary, itineraryItems } = useContext(ItineraryContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we're on the Abu Dhabi page
  const isAbuDhabiPage = location.pathname.includes('/abu-dhabi');

  const filteredAttractions = attractions.filter(attraction => {
    console.log('Filtering attraction:', attraction.id, 'Location:', attraction.location, 'Category:', attraction.category);
    const categoryMatch = selectedCategory === 'all' || attraction.category === selectedCategory;
    const locationMatch = selectedLocation === 'all' || 
      (selectedLocation === LOCATIONS.ABU_DHABI && ABU_DHABI_ATTRACTIONS.includes(attraction.id)) ||
      (selectedLocation === LOCATIONS.DUBAI && !ABU_DHABI_ATTRACTIONS.includes(attraction.id));
    console.log('Category match:', categoryMatch, 'Location match:', locationMatch);
    return categoryMatch && locationMatch;
  });

  const isAttractionInItinerary = (attractionId) => {
    return itineraryItems.some(item => item.id === attractionId);
  };

  const handleAddToItinerary = (e, attraction) => {
    e.preventDefault();
    e.stopPropagation();
    addToItinerary(attraction);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Odkryj Atrakcje</h1>
        <p className="text-lg text-gray-600">Poznaj najlepsze miejsca w Dubaju i Abu Dhabi</p>
      </div>

      {/* Filters */}
      <div className="mb-8 space-y-6">
        {/* Categories */}
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-2 min-w-max">
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

        {/* Location filter */}
        <div className="flex gap-4">
          <button
            onClick={() => setSelectedLocation('all')}
            className={`
              px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200
              ${selectedLocation === 'all'
                ? 'bg-yellow-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
              }
            `}
          >
            Wszystkie lokalizacje
          </button>
          <button
            onClick={() => setSelectedLocation('Dubaj')}
            className={`
              px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200
              ${selectedLocation === 'Dubaj'
                ? 'bg-yellow-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
              }
            `}
          >
            Dubaj
          </button>
          <button
            onClick={() => setSelectedLocation('Abu Dhabi')}
            className={`
              px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200
              ${selectedLocation === 'Abu Dhabi'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
              }
            `}
          >
            Abu Dhabi
          </button>
        </div>
      </div>

      {/* Attractions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredAttractions.map((attraction) => {
          // Generate the correct link based on attraction ID
          const isAbuDhabiAttraction = ABU_DHABI_ATTRACTIONS.includes(attraction.id);
          let link = isAbuDhabiAttraction ? `/abu-dhabi/${attraction.id}` : `/atrakcje/${attraction.id}`;
          if (attraction.id === 'falcon-hospital') {
            link = '/abu-dhabi/falcon-hospital';
          }
          
          console.log('Attraction debug:', {
            id: attraction.id,
            name: attraction.name,
            isAbuDhabiAttraction,
            inAbuDhabiList: ABU_DHABI_ATTRACTIONS.includes(attraction.id),
            generatedLink: link
          });

          return (
            <div
              key={attraction.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 relative hover:shadow-xl"
            >
              <Link to={link} className="block">
                <div className="relative h-48">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 right-4">
                    <span className={`px-3 py-1 ${ABU_DHABI_ATTRACTIONS.includes(attraction.id) ? 'bg-blue-600' : 'bg-yellow-600'} text-white text-sm rounded-full`}>
                      {ABU_DHABI_ATTRACTIONS.includes(attraction.id) ? LOCATIONS.ABU_DHABI : LOCATIONS.DUBAI}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                    {attraction.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {attraction.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <FaClock className="mr-1" />
                      {Math.floor(attraction.duration / 60)}h {attraction.duration % 60}min
                    </span>
                    {attraction.price > 0 && (
                      <span className="flex items-center">
                        <FaDollarSign className="mr-1" />
                        {attraction.price} AED
                      </span>
                    )}
                    <span className="flex items-center">
                      <FaMapMarkerAlt className="mr-1" />
                      {ABU_DHABI_ATTRACTIONS.includes(attraction.id) ? LOCATIONS.ABU_DHABI : LOCATIONS.DUBAI}
                    </span>
                  </div>
                </div>
              </Link>

              {/* Add to Itinerary Button */}
              <button
                onClick={(e) => handleAddToItinerary(e, attraction)}
                className={`absolute top-4 right-4 p-3 rounded-full shadow-lg transition-all duration-200 z-10
                  ${isAttractionInItinerary(attraction.id)
                    ? 'bg-yellow-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                  }
                `}
              >
                {isAttractionInItinerary(attraction.id) ? <FaCheck /> : <FaPlus />}
              </button>
            </div>
          );
        })}
      </div>
      
      {/* Floating Action Button */}
      {itineraryItems.length > 0 && (
        <div className="fixed bottom-8 right-8">
          <button
            onClick={() => navigate('/plan-podrozy')}
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2 transform transition-transform hover:scale-105"
          >
            <span>Stwórz plan podróży ({itineraryItems.length})</span>
            <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default AttractionsList;
