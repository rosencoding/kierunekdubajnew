import React, { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaDollarSign, FaPlus, FaCheck, FaInfoCircle } from 'react-icons/fa';
import { ItineraryContext } from '../contexts/ItineraryContext';
import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

const AbuDhabiPage = () => {
  console.log('AbuDhabiPage mounting');
  
  useEffect(() => {
    console.log('AbuDhabiPage useEffect running');
    return () => {
      console.log('AbuDhabiPage unmounting');
    };
  }, []);

  usePageTitle('Abu Dhabi - KierunekDubaj.pl');
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

  const attractions = [
    {
      id: 'sheikh-zayed-mosque',
      name: 'Wielki Meczet Szejka Zajida',
      image: '/images/sheikh-zayed-mosque.jpg',
      description: 'Jeden z największych meczetów na świecie, słynący z zapierającej dech w piersiach architektury',
      duration: 120,
      price: 0,
      location: 'Abu Dhabi',
      latitude: 24.4128,
      longitude: 54.4750,
      bestTime: 'Wczesny poranek lub późne popołudnie',
      visitTime: '9:00 - 22:00',
      category: 'architecture'
    },
    {
      id: 'louvre-abu-dhabi',
      name: 'Louvre Abu Dhabi',
      image: '/images/louvre-abu-dhabi.jpg',
      description: 'Uniwersalne muzeum prezentujące sztukę i artefakty z całego świata',
      duration: 180,
      price: 63,
      location: 'Abu Dhabi',
      latitude: 24.5339,
      longitude: 54.3981,
      bestTime: 'Poranki w dni powszednie',
      visitTime: '10:00 - 20:00',
      category: 'cultural'
    },
    {
      id: 'emirates-palace',
      name: 'Emirates Palace',
      image: '/images/emirates-palace.jpg',
      description: 'Luksusowy hotel prezentujący arabską architekturę i gościnność',
      duration: 90,
      price: 0,
      location: 'Abu Dhabi',
      latitude: 24.4615,
      longitude: 54.3166,
      bestTime: 'Pora popołudniowej herbaty',
      visitTime: '1-2 godziny',
      category: 'architecture'
    },
    {
      id: 'ferrari-world',
      name: 'Ferrari World',
      image: '/images/ferrari-world.jpg',
      description: 'Pierwszy na świecie park rozrywki Ferrari z ekscytującymi atrakcjami',
      duration: 300,
      price: 310,
      location: 'Abu Dhabi',
      latitude: 24.4831,
      longitude: 54.6039,
      bestTime: 'Poranki w dni powszednie',
      visitTime: '4-6 godzin',
      category: 'entertainment'
    },
    {
      id: 'yas-waterworld',
      name: 'Yas Waterworld',
      image: '/images/yas-waterworld.jpg',
      description: 'Ekscytujący park wodny z unikalnymi zjeżdżalniami i atrakcjami',
      duration: 240,
      price: 270,
      location: 'Abu Dhabi',
      latitude: 24.4903,
      longitude: 54.6054,
      bestTime: 'Wczesny poranek',
      visitTime: '4-6 godzin',
      category: 'entertainment'
    },
    {
      id: 'warner-bros-world',
      name: 'Warner Bros. World',
      image: '/images/warner-bros-world.jpg',
      description: 'Wewnętrzny park rozrywki z ulubionymi postaciami Warner Bros. i atrakcjami',
      duration: 240,
      price: 295,
      location: 'Abu Dhabi',
      latitude: 24.4982,
      longitude: 54.6082,
      bestTime: 'Dowolna pora (wewnętrzny)',
      visitTime: '4-6 godzin',
      category: 'entertainment'
    },
    {
      id: 'corniche',
      name: 'Corniche',
      image: '/images/corniche.jpg',
      description: 'Piękna nadmorska promenada z plażami, parkami i restauracjami',
      duration: 120,
      price: 0,
      location: 'Abu Dhabi',
      latitude: 24.4539,
      longitude: 54.3339,
      bestTime: 'Późne popołudnie',
      visitTime: '2-3 godziny',
      category: 'beaches'
    },
    {
      id: 'qasr-al-watan',
      name: 'Qasr Al Watan',
      image: '/images/qasr-al-watan.jpg',
      description: 'Pałac Prezydencki z imponującą architekturą i bogatą historią',
      duration: 180,
      price: 65,
      location: 'Abu Dhabi',
      latitude: 24.4566,
      longitude: 54.3177,
      bestTime: 'Rano lub późnym popołudniem',
      visitTime: '2-3 godziny',
      category: 'architecture'
    },
    {
      id: 'observation-deck',
      name: 'Observation Deck at 300',
      image: '/images/observation-deck.jpg',
      description: 'Najwyższy punkt widokowy w Abu Dhabi z panoramicznym widokiem na miasto',
      duration: 90,
      price: 95,
      location: 'Abu Dhabi',
      latitude: 24.4556,
      longitude: 54.3224,
      bestTime: 'Zachód słońca',
      visitTime: '1-2 godziny',
      category: 'entertainment'
    },
    {
      id: 'abu-dhabi-mall',
      name: 'Abu Dhabi Mall',
      image: '/images/abu-dhabi-mall.jpg',
      description: 'Popularne centrum handlowe z ponad 200 sklepami i rozrywką',
      duration: 180,
      price: 0,
      location: 'Abu Dhabi',
      latitude: 24.4972,
      longitude: 54.3848,
      bestTime: 'W ciągu dnia',
      visitTime: '2-4 godziny',
      category: 'shopping'
    },
    {
      id: 'mangrove-national-park',
      name: 'Mangrove National Park',
      image: '/images/mangrove-national-park.jpg',
      description: 'Naturalny obszar chroniony z mangrowcami, idealny do kajakowania i obserwacji ptaków',
      duration: 120,
      price: 0,
      location: 'Abu Dhabi',
      latitude: 24.4128,
      longitude: 54.4749,
      bestTime: 'Wczesny poranek',
      visitTime: '2-3 godziny',
      category: 'parks'
    },
    {
      id: 'heritage-village',
      name: 'Heritage Village',
      image: '/images/heritage-village.jpg',
      description: 'Tradycyjna wioska prezentująca dziedzictwo kulturowe ZEA',
      duration: 90,
      price: 0,
      location: 'Abu Dhabi',
      latitude: 24.4615,
      longitude: 54.3166,
      bestTime: 'Rano',
      visitTime: '1-2 godziny',
      category: 'cultural'
    },
    {
      id: 'falcon-hospital',
      name: 'Abu Dhabi Falcon Hospital',
      image: '/images/falcon-hospital.jpg',
      description: 'Unikalna placówka poświęcona opiece nad sokołami i tradycji sokolnictwa w ZEA',
      duration: 120,
      price: 170,
      location: 'Abu Dhabi',
      latitude: 24.4128,
      longitude: 54.4749,
      bestTime: 'Poranki',
      visitTime: '2 godziny',
      category: 'cultural'
    },
    {
      id: 'qasr-al-hosn',
      name: 'Qasr Al Hosn',
      image: '/images/qasr-al-hosn.jpg',
      description: 'Najstarszy kamienny budynek w Abu Dhabi, świadectwo historii emiratu',
      duration: 120,
      price: 30,
      location: 'Abu Dhabi',
      latitude: 24.4828,
      longitude: 54.3567,
      bestTime: 'Rano lub późnym popołudniem',
      visitTime: '2-3 godziny',
      category: 'cultural'
    },
    {
      id: 'al-ain-zoo',
      name: 'Al Ain Zoo',
      image: '/images/al-ain-zoo.jpg',
      description: 'Nowoczesne zoo z różnorodnymi zwierzętami i programami ochrony',
      duration: 180,
      price: 30,
      location: 'Abu Dhabi',
      latitude: 24.2128,
      longitude: 55.7479,
      bestTime: 'Rano',
      visitTime: '3-4 godziny',
      category: 'parks'
    },
    {
      id: 'capital-gate',
      name: 'Capital Gate',
      image: '/images/capital-gate.jpg',
      description: 'Ikoniczna wieża z unikalną architekturą',
      duration: 60,
      price: 0,
      location: 'Abu Dhabi',
      latitude: 24.4128,
      longitude: 54.4749,
      bestTime: 'Dowolna pora',
      visitTime: '30 minut',
      category: 'architecture'
    },
    {
      id: 'yas-marina-circuit',
      name: 'Yas Marina Circuit',
      image: '/images/yas-marina-circuit.jpg',
      description: 'Gospodarz Grand Prix Abu Dhabi i różne doświadczenia związane z motoryzacją',
      duration: 120,
      price: 0,
      location: 'Abu Dhabi',
      latitude: 24.4831,
      longitude: 54.6039,
      bestTime: 'Wczesny poranek lub wieczór',
      visitTime: '1-3 godziny',
      category: 'entertainment'
    },
    {
      id: 'al-ain-oasis',
      name: 'Al Ain Oasis',
      image: '/images/al-ain-oasis.jpg',
      description: 'Największa oaza w Abu Dhabi z historycznym systemem nawadniania falaj',
      duration: 120,
      price: 0,
      location: 'Al Ain',
      latitude: 24.2091,
      longitude: 55.7645,
      bestTime: 'Wczesny poranek lub późne popołudnie',
      visitTime: '2-3 godziny',
      category: 'cultural'
    },
    {
      id: 'emirates-auto-museum',
      name: 'Emirates National Auto Museum',
      image: '/images/emirates-auto-museum.jpg',
      description: 'Unikalna kolekcja pojazdów szejka Hamada, w tym największa terenówka na świecie',
      duration: 120,
      price: 50,
      location: 'Al Dhafra',
      latitude: 24.1769,
      longitude: 54.2361,
      bestTime: 'Rano lub późnym popołudniem',
      visitTime: '2-3 godziny',
      category: 'cultural'
    },
    {
      id: 'marina-mall',
      name: 'Marina Mall',
      image: '/images/marina-mall.jpg',
      description: 'Centrum handlowe nad wodą z zakupami, rozrywką i kołem obserwacyjnym Marina Eye',
      duration: 120,
      price: 0,
      location: 'Abu Dhabi',
      latitude: 24.4615,
      longitude: 54.3166,
      bestTime: 'Wieczór',
      visitTime: '2-3 godziny',
      category: 'shopping'
    }
  ];

  const abuDhabiAttractions = attractions.filter(attraction => 
    ['Abu Dhabi', 'Al Ain', 'Al Dhafra'].includes(attraction.location)
  );

  const filteredAttractions = selectedCategory === 'all' 
    ? abuDhabiAttractions
    : abuDhabiAttractions.filter(attraction => attraction.category === selectedCategory);

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
    <>
      <div>
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[400px] bg-gray-900">
          <div className="absolute inset-0">
            <img
              src="/images/abu-dhabi.jpg"
              alt="Abu Dhabi Skyline"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60" />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Odkryj Abu Dhabi
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl"
            >
              Poznaj najciekawsze atrakcje Abu Dhabi! Meczet Szejka Zayeda, Ferrari World, Louvre Abu Dhabi i wiele więcej. Zaplanuj niezapomnianą podróż do stolicy ZEA.
            </motion.p>
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
                <Link to={`/abu-dhabi/${attraction.id}`} className="block">
                  <div className="relative h-48 overflow-hidden">
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
    </>
  );
};

export default AbuDhabiPage;
