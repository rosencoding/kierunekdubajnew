import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaBus, FaParking, FaWheelchair, FaCamera, FaUmbrellaBeach, FaWater, FaVolleyballBall } from 'react-icons/fa';

const KiteBeachPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const funFacts = [
    "Nazwa pochodzi od popularnego kitesurfingu",
    "14-kilometrowa ścieżka do biegania wzdłuż plaży",
    "Widoki na Burj Al Arab",
    "Centrum sportów wodnych",
    "Popularne miejsce do siatkówki plażowej",
    "Regularne turnieje sportów plażowych",
    "Idealna pogoda przez cały rok",
    "Centrum dla entuzjastów fitnessu"
  ];

  const galleryImages = [
    '/images/kite-beach-1.jpg',
    '/images/kite-beach-2.jpg',
    '/images/kite-beach-3.jpg',
    '/images/kite-beach-4.jpg',
    '/images/kite-beach-5.jpg',
    '/images/kite-beach-6.jpg'
  ];

  const attractions = [
    {
      title: "Sporty Wodne",
      description: "Szeroki wybór aktywności wodnych, w tym kitesurfing, paddleboarding i kajaki."
    },
    {
      title: "Ścieżka do Biegania",
      description: "14-kilometrowa trasa wzdłuż plaży z widokiem na Burj Al Arab."
    },
    {
      title: "Boiska do Siatkówki",
      description: "Profesjonalne boiska do siatkówki plażowej dostępne przez cały dzień."
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
          src="/images/kite-beach.jpg"
          alt="Kite Beach Dubai"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Kite Beach Dubai
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Raj dla Miłośników Sportów Wodnych i Aktywnego Wypoczynku
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
            <p className="text-gray-600">Otwarte 24/7</p>
            <p className="text-gray-500 text-sm">Cały rok</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Wstęp</h3>
            <p className="text-gray-600">Bezpłatny</p>
            <p className="text-gray-500 text-sm">Płatne aktywności dodatkowe</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Lokalizacja</h3>
            <p className="text-gray-600">Umm Suqeim</p>
            <p className="text-gray-500 text-sm">Dubaj</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaStar className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.5/5</p>
            <p className="text-gray-500 text-sm">Opinie odwiedzających</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">O Kite Beach</h2>
          <p className="text-gray-600 mb-6">
            Kite Beach to jedna z najbardziej dynamicznych plaż w Dubaju, znana z doskonałych warunków do kitesurfingu 
            i innych sportów wodnych. Ta rozległa plaża oferuje nie tylko wspaniałe możliwości do uprawiania sportów, 
            ale także zapierające dech w piersiach widoki na ikoniczny hotel Burj Al Arab. Z 14-kilometrową ścieżką do 
            biegania, boiskami do siatkówki plażowej i różnorodnymi udogodnieniami, Kite Beach jest idealnym miejscem 
            zarówno dla miłośników sportów, jak i osób szukających relaksu na plaży.
          </p>
        </div>

        {/* Attractions */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Główne Atrakcje</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  alt={`Kite Beach - ${index + 1}`}
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
                  alt="Kite Beach"
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
          <h2 className="text-3xl font-semibold mb-6">Wycieczki i Atrakcje</h2>
          <div 
            data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
            data-gyg-locale-code="pl-PL" 
            data-gyg-widget="activities" 
            data-gyg-number-of-items="8" 
            data-gyg-cmp="kd-attracion" 
            data-gyg-partner-id="19WQ75B" 
            data-gyg-tour-ids="519121,523026,412274,412278,546987,483532,519111,528385"
          >
            <span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/dubai-l173/">GetYourGuide</a></span>
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

        {/* How to Get There & Best Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-3xl font-semibold mb-6">Jak Dotrzeć</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaBus className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Transport Publiczny</h3>
                  <p className="text-gray-600">Autobusy 8, X28 zatrzymują się w pobliżu plaży. Najbliższy przystanek to Umm Suqeim Park.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaParking className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Samochodem</h3>
                  <p className="text-gray-600">Dostępny duży parking publiczny. Wjazd od strony Jumeirah Beach Road.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-3xl font-semibold mb-6">Najlepszy Czas na Wizytę</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaCalendarAlt className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Pora Roku</h3>
                  <p className="text-gray-600">Najlepszy okres to październik-kwiecień, gdy temperatury są przyjemniejsze.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaClock className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Pora Dnia</h3>
                  <p className="text-gray-600">Wcześnie rano lub późnym popołudniem dla najlepszych warunków do kitesurfingu i mniejszych tłumów.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KiteBeachPage;
