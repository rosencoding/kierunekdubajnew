import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaTicketAlt, FaBuilding, FaCamera, FaExternalLinkAlt } from 'react-icons/fa';

const CapitalGatePage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const funFacts = [
    "Najbardziej pochylona wieża na świecie",
    "Pochylona o 18 stopni na zachód",
    "Wysokość 160 metrów",
    "35 pięter przestrzeni wielofunkcyjnej",
    "Zbudowana z ponad 12 500 szklanych paneli",
    "Fundamenty sięgają 30 metrów pod ziemię"
  ];

  const galleryImages = [
    '/images/capital-gate-1.jpg',
    '/images/capital-gate-2.jpg',
    '/images/capital-gate-3.jpg',
    '/images/capital-gate-4.jpg',
    '/images/capital-gate-5.jpg',
    '/images/capital-gate-6.jpg',
    '/images/capital-gate-7.jpg',
    '/images/capital-gate-8.jpg',
    '/images/capital-gate.jpg'
  ];

  const attractions = [
    {
      title: "Taras Widokowy",
      description: "Panoramiczne widoki na panoramę Abu Dhabi z unikalnego punktu widokowego budynku, oferujące spektakularne możliwości fotograficzne."
    },
    {
      title: "Cud Architektury",
      description: "Rewolucyjny projekt z dramatycznym pochyleniem 18 stopni na zachód, stanowiący wyjątkowe osiągnięcie inżynieryjne."
    },
    {
      title: "Hotel Andaz Capital Gate",
      description: "Luksusowy hotel zajmujący piętra 18-33, oferujący światowej klasy udogodnienia i zapierające dech w piersiach widoki na miasto z każdego pokoju."
    }
  ];

  const experiences = [
    {
      title: "Zwiedzanie Budynku",
      description: "Wycieczka z przewodnikiem",
      price: "Od 100 AED"
    },
    {
      title: "Dostęp do Tarasu",
      description: "Panoramiczne widoki",
      price: "Od 80 AED"
    },
    {
      title: "Sesja Fotograficzna",
      description: "Profesjonalne punkty foto",
      price: "Od 150 AED"
    }
  ];

  const activities = [
    "Wycieczka architektoniczna",
    "Wizyta na tarasie widokowym",
    "Kolacja w restauracjach",
    "Pobyt w hotelu Andaz",
    "Wydarzenia biznesowe",
    "Zdjęcia z punktów widokowych",
    "Wizyta w galerii sztuki",
    "Zwiedzanie placu",
    "Podziwianie zachodu słońca"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/capital-gate.jpg"
          alt="Capital Gate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Capital Gate
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Najbardziej Pochylona Wieża na Świecie
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://www.getyourguide.com/abu-dhabi-l494/abu-dhabi-observation-deck-at-300-entry-ticket-t912924/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd', '_blank')}
              className="bg-[#1B365D] hover:bg-[#142847] text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg inline-flex items-center space-x-2"
            >
              <FaTicketAlt />
              <span>Kup Bilet Online</span>
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
            <FaClock className="w-8 h-8 text-[#1B365D] mb-4" />
            <h3 className="font-semibold mb-2">Godziny Otwarcia</h3>
            <p className="text-gray-600">24 Godziny</p>
            <p className="text-gray-500 text-sm">Godziny Tarasu Różnią się</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-[#1B365D] mb-4" />
            <h3 className="font-semibold mb-2">Dostęp</h3>
            <p className="text-gray-600">Widok Zewnętrzny Za Darmo</p>
            <p className="text-gray-500 text-sm">Wnętrze Tylko dla Gości</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaStar className="w-8 h-8 text-[#1B365D] mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.5/5 od odwiedzających</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-[#1B365D] mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Al Khaleej Al Arabi Street</p>
            <p className="text-gray-500 text-sm">Al Safarat, Abu Dhabi</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">O Capital Gate</h2>
          <p className="text-gray-600 mb-6">
            Capital Gate to cud architektury i jeden z najbardziej charakterystycznych budynków Abu Dhabi. Znany z dramatycznego 18-stopniowego pochylenia na zachód, posiada rekord Guinnessa dla "Najbardziej Pochylonej Wieży na Świecie". 35-piętrowa wieża mieści luksusowy hotel Andaz Capital Gate oraz ekskluzywną przestrzeń biurową, oferując odwiedzającym zapierające dech w piersiach widoki na miasto i innowacyjny projekt architektoniczny, który przesuwa granice inżynierii.
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
                  alt={`Capital Gate - ${index + 1}`}
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
                  alt="Capital Gate"
                  className="w-full h-auto rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white bg-[#1B365D] rounded-full p-2 hover:bg-[#142847] transition-colors"
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

        {/* Experiences */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Dodatkowe Atrakcje</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiences.map((experience, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                <p className="text-gray-600">{experience.description}</p>
                <p className="text-[#1B365D] font-semibold mt-2">{experience.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Co Można Robić</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <FaBuilding className="text-[#1B365D] mt-1" />
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
                  <FaInfoCircle className="text-[#1B365D] mt-1" />
                  <p className="text-gray-600">{fact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* GetYourGuide Widget */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Zarezerwuj Bilety</h2>
          <div 
            data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
            data-gyg-locale-code="pl-PL" 
            data-gyg-widget="activities" 
            data-gyg-number-of-items="5" 
            data-gyg-cmp="kd-attracion" 
            data-gyg-partner-id="19WQ75B" 
            data-gyg-tour-ids="912924,864365,543875,228472,140175"
          >
            <span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/abu-dhabi-l494/">GetYourGuide</a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapitalGatePage;
