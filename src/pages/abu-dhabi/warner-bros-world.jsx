import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaTicketAlt, FaCamera, FaChild, FaUtensils } from 'react-icons/fa';

const WarnerBrosWorldPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const funFacts = [
    "Największy zadaszony park rozrywki na świecie",
    "Powierzchnia parku to 153,290 metrów kwadratowych",
    "Posiada 29 różnych atrakcji",
    "Podzielony na 6 tematycznych stref",
    "Wszystkie atrakcje są w pełni klimatyzowane",
    "Koszt budowy wyniósł 1 miliard dolarów",
    "Otwarty w 2018 roku",
    "Zawiera ponad 100 punktów gastronomicznych"
  ];

  const galleryImages = [
    '/images/warner-bros-world-1.jpg',
    '/images/warner-bros-world-2.jpg',
    '/images/warner-bros-world-3.jpg',
    '/images/warner-bros-world-4.jpg',
    '/images/warner-bros-world-5.jpg',
    '/images/warner-bros-world-6.jpg'
  ];

  const attractions = [
    {
      title: "Gotham City",
      description: "Strefa poświęcona Batmanowi i jego wrogom, z ekscytującymi kolejkami górskimi i mroczną atmosferą miasta Gotham."
    },
    {
      title: "Metropolis",
      description: "Futurystyczna strefa Supermana z wysokimi wieżowcami i zaawansowanymi technologicznie atrakcjami."
    },
    {
      title: "Cartoon Junction",
      description: "Kolorowa strefa z postaciami z kreskówek, idealna dla najmłodszych gości."
    },
    {
      title: "Bedrock",
      description: "Prehistoryczny świat Flinstonów z rodzinnymi atrakcjami i tematycznymi restauracjami."
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
        <img
          src="/images/warner-bros-world.jpg"
          alt="Warner Bros World"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Warner Bros World
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Największy Zadaszony Park Rozrywki na Świecie
            </p>
            <a
              href="https://www.getyourguide.com/abu-dhabi-l494/abu-dhabi-warner-bros-world-general-admission-ticket-t178508/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd"
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
            <p className="text-gray-600">10:00 - 20:00</p>
            <p className="text-gray-500 text-sm">Codziennie</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Bilety</h3>
            <p className="text-gray-600">Od 310 AED</p>
            <p className="text-gray-500 text-sm">Dzieci poniżej 3 lat za darmo</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaCamera className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Fotografie</h3>
            <p className="text-gray-600">Dozwolone</p>
            <p className="text-gray-500 text-sm">W całym parku</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Lokalizacja</h3>
            <p className="text-gray-600">Yas Island</p>
            <p className="text-gray-500 text-sm">Abu Dhabi</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">O Warner Bros World</h2>
          <p className="text-gray-600 mb-6">
            Warner Bros World Abu Dhabi to największy zadaszony park rozrywki na świecie, 
            oferujący niezapomniane przygody w świecie ulubionych postaci z kreskówek i komiksów. 
            Park podzielony jest na sześć tematycznych stref, każda wypełniona ekscytującymi 
            atrakcjami, pokazami na żywo i interaktywnymi doświadczeniami. Dzięki pełnej 
            klimatyzacji, park zapewnia komfortową rozrywkę przez cały rok, niezależnie od 
            warunków pogodowych. Goście mogą spotkać się z legendarnymi postaciami Warner Bros, 
            takimi jak Batman, Superman, Tom i Jerry czy Flinstonowie.
          </p>
        </div>

        {/* Attractions */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Główne Strefy</h2>
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
                  alt={`Warner Bros World - ${index + 1}`}
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
                  alt="Warner Bros World"
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
          <h2 className="text-3xl font-semibold mb-6">Bilety i Wycieczki</h2>
          <div 
            data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
            data-gyg-locale-code="pl-PL" 
            data-gyg-widget="activities" 
            data-gyg-number-of-items="4" 
            data-gyg-cmp="warner-bros-world-ad" 
            data-gyg-partner-id="PDKWF6M" 
            data-gyg-q="warner bros world abu dhabi"
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
                <FaChild className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Atrakcje dla Dzieci</h3>
                  <p className="text-gray-600">Specjalne strefy i atrakcje dostosowane do różnych grup wiekowych.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaUtensils className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Restauracje i Kawiarnie</h3>
                  <p className="text-gray-600">Liczne punkty gastronomiczne oferujące różnorodne menu.</p>
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
                  <p className="text-gray-600">Poranne godziny są zazwyczaj mniej zatłoczone. Warto zarezerwować bilet online.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaStar className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Polecane Atrakcje</h3>
                  <p className="text-gray-600">Batman: Knight Flight i Superman 360 należą do najpopularniejszych atrakcji.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarnerBrosWorldPage;
