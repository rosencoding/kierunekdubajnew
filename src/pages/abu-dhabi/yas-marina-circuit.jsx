import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaTicketAlt, FaCar, FaCamera, FaExternalLinkAlt } from 'react-icons/fa';

const YasMarinaCircuitPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const funFacts = [
    "Miejsce Grand Prix Abu Dhabi",
    "Długość toru: 5,554 km",
    "21 wymagających zakrętów",
    "Jedyny wyścig F1 o zmierzchu",
    "Zbudowany na Wyspie Yas w 2009 roku",
    "Posiada unikalny wyjazd z pit lane przez tunel"
  ];

  const galleryImages = [
    '/images/yas-marina-circuit-1.jpg',
    '/images/yas-marina-circuit-2.jpg',
    '/images/yas-marina-circuit-3.jpg',
    '/images/yas-marina-circuit-4.jpg',
    '/images/yas-marina-circuit-5.jpg',
    '/images/yas-marina-circuit-6.jpg',
    '/images/yas-marina-circuit-7.jpg',
    '/images/yas-marina-circuit-8.jpg',
    '/images/yas-marina-circuit.jpg'
  ];

  const attractions = [
    {
      title: "Doświadczenie Toru F1",
      description: "Prowadź lub jedź jako pasażer w samochodach o wysokich osiągach na tym samym torze, którego używają kierowcy Formuły 1 podczas Grand Prix Abu Dhabi."
    },
    {
      title: "Szkoła Wyścigowa Yas",
      description: "Profesjonalne kursy jazdy dla wszystkich poziomów zaawansowania, od początkujących po zaawansowanych kierowców, z ekspertami instruktorami."
    },
    {
      title: "Wycieczka za Kulisy",
      description: "Ekskluzywny dostęp do centrum kontroli wyścigu, podium, pit lane i centrum mediowego z doświadczonymi przewodnikami."
    }
  ];

  const activities = [
    "Zwiedzanie toru",
    "Jazda samochodami wyścigowymi",
    "Oglądanie wydarzeń wyścigowych",
    "Wizyta w centrum kontroli",
    "Symulatory wyścigowe",
    "Szkoła jazdy",
    "Doświadczenie pit-stopów",
    "Zdjęcia na torze",
    "Zwiedzanie padoku F1"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/yas-marina-circuit.jpg"
          alt="Tor Yas Marina"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Tor Yas Marina
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Miejsce Formula 1 Etihad Airways Grand Prix Abu Dhabi
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://www.getyourguide.com/abu-dhabi-l494/abu-dhabi-yas-marina-circuit-karting-experience-t56588/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd', '_blank')}
              className="bg-[#E10600] hover:bg-[#B30500] text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg inline-flex items-center space-x-2"
            >
              <FaTicketAlt />
              <span>Kup bilet</span>
            </motion.button>
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
            <FaClock className="w-8 h-8 text-[#E10600] mb-4" />
            <h3 className="font-semibold mb-2">Godziny Otwarcia</h3>
            <p className="text-gray-600">9:00 - 17:00</p>
            <p className="text-gray-500 text-sm">Codziennie</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-[#E10600] mb-4" />
            <h3 className="font-semibold mb-2">Cena Wycieczki</h3>
            <p className="text-gray-600">Od 120 AED</p>
            <p className="text-gray-500 text-sm">Zależy od Doświadczenia</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaStar className="w-8 h-8 text-[#E10600] mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.7/5 od odwiedzających</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-[#E10600] mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Yas Marina Circuit</p>
            <p className="text-gray-500 text-sm">Wyspa Yas, Abu Dhabi</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">O Torze Yas Marina</h2>
          <p className="text-gray-600 mb-6">
            Tor Yas Marina jest jednym z najbardziej zaawansowanych technologicznie torów Formuły 1 na świecie i gospodarzem Grand Prix Abu Dhabi. Zaprojektowany przez renomowanego architekta torów Hermanna Tilke, ten 5,554-kilometrowy tor posiada 21 zakrętów i jest miejscem jedynego wyścigu F1 rozgrywanego o zmierzchu, tworząc spektakularne widowisko, gdy dzień zamienia się w noc. Poza F1, obiekt oferuje różnorodne doświadczenia związane z jazdą, dni torowe i wycieczki, co czyni go obowiązkowym miejscem do odwiedzenia dla entuzjastów sportów motorowych.
          </p>
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Galeria</h2>
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
                  alt={`Tor Yas Marina - ${index + 1}`}
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
                  alt="Tor Yas Marina"
                  className="w-full h-auto rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white bg-[#E10600] rounded-full p-2 hover:bg-[#B30500] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Attractions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Główne Atrakcje</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{attraction.title}</h3>
                <p className="text-gray-600">{attraction.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* GetYourGuide Widget */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Zarezerwuj Bilety</h2>
          <div 
            data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
            data-gyg-locale-code="pl-PL" 
            data-gyg-widget="activities" 
            data-gyg-number-of-items="8" 
            data-gyg-cmp="kd-attracion" 
            data-gyg-partner-id="19WQ75B" 
            data-gyg-tour-ids="912924,228472,140175,56588,67416,60968,71613,661318"
          >
            <span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/abu-dhabi-l494/">GetYourGuide</a></span>
          </div>
        </div>

        {/* Activities */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Co Można Robić</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <FaCar className="text-[#E10600] mt-1" />
                  <p className="text-gray-600">{activity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Ciekawostki</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {funFacts.map((fact, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <FaInfoCircle className="text-[#E10600] mt-1" />
                  <p className="text-gray-600">{fact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YasMarinaCircuitPage;
