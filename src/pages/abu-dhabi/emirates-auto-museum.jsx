import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaTicketAlt, FaCamera, FaCar, FaTools } from 'react-icons/fa';

const EmiratesAutoMuseumPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const funFacts = [
    "Ponad 200 unikatowych pojazdów",
    "Największa terenówka na świecie",
    "Prywatna kolekcja szejka Hamada",
    "Pojazdy z różnych epok",
    "Piramida z 7 samochodów",
    "Dodge Power Wagon o wysokości 3 pięter",
    "Zabytkowe samochody wojskowe",
    "Największy pick-up na świecie"
  ];

  const galleryImages = [
    '/images/emirates-auto-museum-1.jpg',
    '/images/emirates-auto-museum-2.jpg',
    '/images/emirates-auto-museum-3.jpg',
    '/images/emirates-auto-museum-4.jpg',
    '/images/emirates-auto-museum-5.jpg',
    '/images/emirates-auto-museum-6.jpg'
  ];

  const attractions = [
    {
      title: "Kolekcja Klasyczna",
      description: "Zabytkowe samochody z różnych epok i kontynentów."
    },
    {
      title: "Pojazdy Offroad",
      description: "Unikalna kolekcja pojazdów terenowych, w tym rekordowe konstrukcje."
    },
    {
      title: "Samochody Militarne",
      description: "Historyczne pojazdy wojskowe i specjalistyczne."
    },
    {
      title: "Ekspozycje Specjalne",
      description: "Wyjątkowe konstrukcje i modyfikacje, w tym słynna piramida samochodowa."
    }
  ];

  // GetYourGuide Widget
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.getyourguide.com/dist/pa.umd.production.min.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("/images/emirates-auto-museum.jpg")',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Emirates National Auto Museum
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Unikalna Kolekcja Pojazdów
            </p>
            <a
              href="http://www.enam.ae/"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Kup bilety
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaClock className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Godziny Otwarcia</h3>
            <p className="text-gray-600">9:00 - 17:00</p>
            <p className="text-gray-500 text-sm">Zamknięte w piątki</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Bilety</h3>
            <p className="text-gray-600">50 AED</p>
            <p className="text-gray-500 text-sm">Dzieci do 10 lat za darmo</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaCamera className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Fotografie</h3>
            <p className="text-gray-600">Dozwolone</p>
            <p className="text-gray-500 text-sm">Bez ograniczeń</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Lokalizacja</h3>
            <p className="text-gray-600">Al Dhafra</p>
            <p className="text-gray-500 text-sm">Abu Dhabi</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">O Emirates National Auto Museum</h2>
          <p className="text-gray-600 mb-6">
            Emirates National Auto Museum to wyjątkowe miejsce prezentujące prywatną 
            kolekcję pojazdów należącą do szejka Hamada bin Hamdan Al Nahyan. Muzeum 
            mieści się w charakterystycznym piramidowym budynku na pustyni, około 45 km 
            na południe od Abu Dhabi. Kolekcja obejmuje ponad 200 pojazdów, w tym 
            klasyczne samochody, pojazdy militarne oraz unikalne konstrukcje, takie jak 
            największa terenówka na świecie - Dodge Power Wagon o wysokości trzech pięter. 
            Jedną z najbardziej charakterystycznych instalacji jest piramida zbudowana z 
            siedmiu samochodów. Muzeum prezentuje nie tylko pojazdy, ale także historię 
            motoryzacji i jej wpływ na rozwój Zjednoczonych Emiratów Arabskich.
          </p>
        </div>

        {/* Attractions */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Główne Atrakcje</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {attractions.map((attraction, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="font-semibold text-xl mb-3">{attraction.title}</h3>
                <p className="text-gray-600">{attraction.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Galeria</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Emirates Auto Museum - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
                className="relative max-w-4xl w-full h-auto"
                onClick={e => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Emirates Auto Museum"
                  className="w-full h-auto rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white bg-blue-500 rounded-full p-2 hover:bg-blue-600 transition-colors"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* GetYourGuide Widget */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">Wycieczki w Abu Dhabi</h2>
          <div 
            data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
            data-gyg-locale-code="pl-PL" 
            data-gyg-widget="activities" 
            data-gyg-number-of-items="8" 
            data-gyg-cmp="kd-attracion" 
            data-gyg-partner-id="19WQ75B" 
            data-gyg-q="abu dhabi desert"
          >
            <span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/abu-dhabi-l494/">GetYourGuide</a></span>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Ciekawostki</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <FaInfoCircle className="text-blue-500 mb-3 text-xl" />
                <p className="text-gray-600">{fact}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-3xl font-semibold mb-6">Udogodnienia</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaCar className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Parking</h3>
                  <p className="text-gray-600">Bezpłatny parking dla odwiedzających.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaTools className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Warsztat</h3>
                  <p className="text-gray-600">Możliwość obserwacji prac renowacyjnych.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-3xl font-semibold mb-6">Wskazówki dla Odwiedzających</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaCalendarAlt className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Najlepszy Czas na Wizytę</h3>
                  <p className="text-gray-600">Rano, gdy temperatura jest niższa.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaStar className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Polecane</h3>
                  <p className="text-gray-600">Zarezerwuj co najmniej 2 godziny na zwiedzanie.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmiratesAutoMuseumPage;
