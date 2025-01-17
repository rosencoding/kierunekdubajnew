import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaTicketAlt, FaCar, FaCamera, FaExternalLinkAlt } from 'react-icons/fa';

const FerrariWorldPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const funFacts = [
    "Pierwszy na świecie park tematyczny Ferrari",
    "Znajduje się tu Formula Rossa - najszybszy roller coaster na świecie",
    "Charakterystyczny czerwony dach pokrywa 200 000 metrów kwadratowych",
    "Logo Ferrari na dachu jest największym, jakie kiedykolwiek stworzono",
    "Ponad 20 unikalnych atrakcji inspirowanych Ferrari",
    "Projekt budynku został zainspirowany nadwoziem Ferrari GT"
  ];

  const galleryImages = [
    '/images/ferrari-world-1.jpg',
    '/images/ferrari-world-2.jpg',
    '/images/ferrari-world-3.jpg',
    '/images/ferrari-world-4.jpg',
    '/images/ferrari-world-5.jpg',
    '/images/ferrari-world-6.jpg',
    '/images/ferrari-world-7.jpg',
    '/images/ferrari-world-8.jpg',
    '/images/ferrari-world.jpg'
  ];

  const attractions = [
    {
      title: "Formula Rossa",
      description: "Najszybszy roller coaster na świecie, osiągający prędkość 240 km/h w 4,9 sekundy, symulujący przeciążenia bolidu Formuły 1."
    },
    {
      title: "Flying Aces",
      description: "Roller coaster z najwyższą na świecie pętlą (52m), inspirowany włoskim asem myśliwskim z I wojny światowej, hrabią Francesco Baracca."
    },
    {
      title: "Symulatory jazdy",
      description: "Najnowocześniejsze symulatory oferujące autentyczne doświadczenie jazdy Ferrari GT na słynnych torach wyścigowych z całego świata."
    }
  ];

  const gyg_link = "https://www.getyourguide.com/abu-dhabi-l494/abu-dhabi-ferrari-world-general-admission-ticket-t178475/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/ferrari-world.jpg"
          alt="Ferrari World Abu Dhabi"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Ferrari World Abu Dhabi</h1>
            <p className="text-xl">Pierwszy na świecie park tematyczny Ferrari</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <FaClock className="text-red-600 text-2xl mb-3" />
            <h3 className="font-semibold mb-2">Godziny otwarcia</h3>
            <p>11:00 - 20:00</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <FaTicketAlt className="text-red-600 text-2xl mb-3" />
            <h3 className="font-semibold mb-2">Bilety</h3>
            <p>Od 310 AED</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <FaMapMarkerAlt className="text-red-600 text-2xl mb-3" />
            <h3 className="font-semibold mb-2">Lokalizacja</h3>
            <p>Yas Island, Abu Dhabi</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <FaStar className="text-red-600 text-2xl mb-3" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p>4.5/5</p>
          </div>
        </div>

        {/* GetYourGuide Widget */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Zarezerwuj Bilety</h2>
          <div 
            data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
            data-gyg-locale-code="pl-PL" 
            data-gyg-widget="activities" 
            data-gyg-number-of-items="3" 
            data-gyg-cmp="kd-attracion" 
            data-gyg-partner-id="19WQ75B" 
            data-gyg-tour-ids="178475,437302,493861"
          >
            <span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/abu-dhabi-l494/">GetYourGuide</a></span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-xl shadow-xl p-8 mb-12">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Zarezerwuj bilety</h2>
            <p className="text-xl mb-6">Zagwarantuj sobie wstęp do świata Ferrari</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(gyg_link, '_blank')}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-red-600 bg-white rounded-lg shadow-lg hover:bg-red-50 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Kup Bilet Online
              <FaExternalLinkAlt className="ml-2" />
            </motion.button>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">O Ferrari World</h2>
          <p className="text-gray-600 mb-6">
            Ferrari World Abu Dhabi to wyjątkowy park rozrywki, który łączy w sobie pasję do motoryzacji z ekscytującymi atrakcjami. 
            To miejsce, gdzie możesz doświadczyć emocji związanych z legendarnymi samochodami Ferrari, od najszybszego roller coastera na świecie 
            po zaawansowane symulatory jazdy. Park oferuje atrakcje zarówno dla miłośników adrenaliny, jak i dla całych rodzin.
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
                  alt={`Ferrari World Abu Dhabi - ${index + 1}`}
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
                  alt="Ferrari World Abu Dhabi"
                  className="w-full h-auto rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white bg-red-600 rounded-full p-2 hover:bg-red-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Attractions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Główne atrakcje</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-3">{attraction.title}</h3>
                <p className="text-gray-600">{attraction.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-red-50 rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Ciekawostki</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {funFacts.map((fact, index) => (
              <li key={index} className="flex items-start">
                <FaHistory className="text-red-600 mt-1 mr-3" />
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Praktyczne informacje */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Praktyczne informacje</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Co warto wiedzieć</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaInfoCircle className="text-red-600 mt-1 mr-3" />
                  <span>Zalecana rezerwacja biletów online, aby uniknąć kolejek</span>
                </li>
                <li className="flex items-start">
                  <FaInfoCircle className="text-red-600 mt-1 mr-3" />
                  <span>Większość atrakcji ma ograniczenia wzrostu dla bezpieczeństwa</span>
                </li>
                <li className="flex items-start">
                  <FaInfoCircle className="text-red-600 mt-1 mr-3" />
                  <span>Park jest w pełni klimatyzowany</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Jak dojechać</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaInfoCircle className="text-red-600 mt-1 mr-3" />
                  <span>Z Dubaju: około 1 godziny jazdy samochodem</span>
                </li>
                <li className="flex items-start">
                  <FaInfoCircle className="text-red-600 mt-1 mr-3" />
                  <span>Z centrum Abu Dhabi: około 30 minut jazdy</span>
                </li>
                <li className="flex items-start">
                  <FaInfoCircle className="text-red-600 mt-1 mr-3" />
                  <span>Dostępne są regularne autobusy z Abu Dhabi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(gyg_link, '_blank')}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-red-600 to-red-500 rounded-lg shadow-lg hover:from-red-700 hover:to-red-600 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Kup Bilet na GetYourGuide
            <FaExternalLinkAlt className="ml-2" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default FerrariWorldPage;
