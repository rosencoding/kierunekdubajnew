import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaTicketAlt, FaCamera, FaTree, FaWater } from 'react-icons/fa';

const AlAinOasisPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const funFacts = [
    "Obiekt UNESCO od 2011 roku",
    "Ponad 147,000 palm daktylowych",
    "Tradycyjny system nawadniania falaj",
    "Historia sięga 4000 lat",
    "Zajmuje powierzchnię 1,200 hektarów",
    "Eko-centrum edukacyjne",
    "Tradycyjne metody uprawy",
    "Największa oaza w Abu Dhabi"
  ];

  const galleryImages = [
    '/images/al-ain-oasis-1.jpg',
    '/images/al-ain-oasis-2.jpg',
    '/images/al-ain-oasis-3.jpg',
    '/images/al-ain-oasis-4.jpg',
    '/images/al-ain-oasis-5.jpg',
    '/images/al-ain-oasis-6.jpg'
  ];

  const attractions = [
    {
      title: "System Falaj",
      description: "Tradycyjny system nawadniania wykorzystywany od tysięcy lat."
    },
    {
      title: "Eko-Centrum",
      description: "Nowoczesne centrum edukacyjne prezentujące historię i znaczenie oazy."
    },
    {
      title: "Plantacje Palm",
      description: "Rozległe plantacje palm daktylowych z tradycyjnymi metodami uprawy."
    },
    {
      title: "Ścieżki Edukacyjne",
      description: "Oznakowane trasy z informacjami o lokalnej florze i systemie nawadniania."
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
            backgroundImage: 'url("/images/al-ain-oasis.jpg")',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Al Ain Oasis
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Obiekt Światowego Dziedzictwa UNESCO
            </p>
            <a
              href="https://gyg.me/2ZZmTQtW"
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
            <p className="text-gray-600">8:00 - 17:00</p>
            <p className="text-gray-500 text-sm">Codziennie</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Wstęp</h3>
            <p className="text-gray-600">Bezpłatny</p>
            <p className="text-gray-500 text-sm">Wycieczki z przewodnikiem płatne</p>
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
            <p className="text-gray-600">Al Ain</p>
            <p className="text-gray-500 text-sm">Abu Dhabi</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">O Al Ain Oasis</h2>
          <p className="text-gray-600 mb-6">
            Al Ain Oasis to wyjątkowy obiekt wpisany na listę Światowego Dziedzictwa UNESCO, 
            który stanowi zielone serce miasta Al Ain. Na powierzchni 1,200 hektarów znajduje 
            się ponad 147,000 palm daktylowych, nawadnianych tradycyjnym systemem falaj, 
            którego historia sięga 4000 lat. Ten starożytny system irygacyjny, wykorzystujący 
            grawitację do transportu wody z pobliskich gór i źródeł podziemnych, jest nadal 
            aktywny i stanowi świadectwo inżynieryjnego geniuszu przodków. Oaza oferuje 
            nie tylko spokojny spacer wśród palm, ale także edukacyjne doświadczenie w 
            nowoczesnym eko-centrum, gdzie można poznać historię regionu, tradycyjne 
            metody uprawy i znaczenie oaz w rozwoju cywilizacji na tych terenach.
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
                  alt={`Al Ain Oasis - ${index + 1}`}
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
                  alt="Al Ain Oasis"
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
            data-gyg-q="al ain abu dhabi"
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
                <FaTree className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Ścieżki Spacerowe</h3>
                  <p className="text-gray-600">Wytyczone trasy z miejscami odpoczynku.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaWater className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">System Nawadniania</h3>
                  <p className="text-gray-600">Możliwość obserwacji tradycyjnego systemu falaj.</p>
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
                  <p className="text-gray-600">Wczesny poranek lub późne popołudnie, gdy jest chłodniej.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaStar className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Polecane</h3>
                  <p className="text-gray-600">Weź udział w wycieczce z przewodnikiem, aby lepiej poznać historię oazy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlAinOasisPage;
