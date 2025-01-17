import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaTicketAlt, FaCamera, FaShoppingBag, FaUtensils } from 'react-icons/fa';

const AbuDhabiMallPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const funFacts = [
    "Ponad 200 sklepów i butików",
    "Powierzchnia handlowa 235,000 m²",
    "Kino z 8 salami",
    "Ponad 40 restauracji i kawiarni",
    "Strefa rozrywki dla dzieci",
    "Parking na 3000 samochodów",
    "Otwarty w 2001 roku",
    "Jeden z pierwszych centrów handlowych w Abu Dhabi"
  ];

  const galleryImages = [
    '/images/abu-dhabi-mall-1.jpg',
    '/images/abu-dhabi-mall-2.jpg',
    '/images/abu-dhabi-mall-3.jpg',
    '/images/abu-dhabi-mall-4.jpg',
    '/images/abu-dhabi-mall-5.jpg',
    '/images/abu-dhabi-mall-6.jpg'
  ];

  const attractions = [
    {
      title: "Sklepy i Butiki",
      description: "Szeroki wybór sklepów od luksusowych marek po popularne sieciówki."
    },
    {
      title: "Strefa Gastronomiczna",
      description: "Różnorodne restauracje i kawiarnie oferujące kuchnie z całego świata."
    },
    {
      title: "Rozrywka",
      description: "Nowoczesne kino i centrum rozrywki dla dzieci z grami i atrakcjami."
    },
    {
      title: "Supermarket Carrefour",
      description: "Duży supermarket z szerokim wyborem produktów lokalnych i międzynarodowych."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/abu-dhabi-mall.jpg"
          alt="Abu Dhabi Mall"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Abu Dhabi Mall
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Centrum Handlowo-Rozrywkowe w Sercu Miasta
            </p>
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
            <p className="text-gray-600">10:00 - 22:00</p>
            <p className="text-gray-500 text-sm">Codziennie</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Wstęp</h3>
            <p className="text-gray-600">Bezpłatny</p>
            <p className="text-gray-500 text-sm">Parking płatny</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaCamera className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Fotografie</h3>
            <p className="text-gray-600">Dozwolone</p>
            <p className="text-gray-500 text-sm">W miejscach publicznych</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Lokalizacja</h3>
            <p className="text-gray-600">Tourist Club Area</p>
            <p className="text-gray-500 text-sm">Abu Dhabi</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">O Abu Dhabi Mall</h2>
          <p className="text-gray-600 mb-6">
            Abu Dhabi Mall to jedno z najpopularniejszych centrów handlowych w stolicy ZEA, 
            oferujące kompleksowe doświadczenie zakupowe, rozrywkowe i gastronomiczne. 
            Na powierzchni ponad 235,000 metrów kwadratowych znajduje się ponad 200 sklepów 
            i butików, reprezentujących zarówno międzynarodowe marki luksusowe, jak i popularne 
            sieciówki. Centrum handlowe wyróżnia się nowoczesną architekturą, przestronnymi 
            alejkami i bogatą ofertą rozrywkową, w tym multipleksem kinowym i strefą zabaw 
            dla dzieci. To idealne miejsce na zakupy, spotkania z przyjaciółmi czy rodzinne 
            wyjście.
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
                  alt={`Abu Dhabi Mall - ${index + 1}`}
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
                  alt="Abu Dhabi Mall"
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
            data-gyg-q="abu dhabi"
          >
            <span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/abu-dhabi-l494/">GetYourGuide</a></span>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-3xl font-semibold mb-6">Udogodnienia</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaShoppingBag className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Sklepy</h3>
                  <p className="text-gray-600">Szeroki wybór marek i produktów w jednym miejscu.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaUtensils className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Restauracje</h3>
                  <p className="text-gray-600">Różnorodne opcje gastronomiczne i kawiarnie.</p>
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
                  <p className="text-gray-600">W dni powszednie przed południem jest najmniej tłoczno.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaStar className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Polecane</h3>
                  <p className="text-gray-600">Warto odwiedzić food court z widokiem na miasto.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbuDhabiMallPage;
