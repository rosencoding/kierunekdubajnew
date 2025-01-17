import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaTicketAlt, FaWater, FaCamera, FaExternalLinkAlt } from 'react-icons/fa';

const YasWaterworldPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const funFacts = [
    "Ponad 40 zjeżdżalni i atrakcji wodnych",
    "Tematyka parku oparta jest na oryginalnej historii 'Zagubionej Perły'",
    "Największa na świecie sztuczna fala do surfowania",
    "Najdłuższy na Bliskim Wschodzie podwieszany roller coaster",
    "Park zajmuje powierzchnię około 37 akrów",
    "Architektura parku inspirowana jest dziedzictwem emirackich nurków poszukujących pereł"
  ];

  const galleryImages = [
    '/images/yas-waterworld-1.jpg',
    '/images/yas-waterworld-2.jpg',
    '/images/yas-waterworld-3.jpg',
    '/images/yas-waterworld-4.jpg',
    '/images/yas-waterworld-5.jpg',
    '/images/yas-waterworld-6.jpg',
    '/images/yas-waterworld-7.jpg',
    '/images/yas-waterworld-8.jpg',
    '/images/yas-waterworld.jpg'
  ];

  const attractions = [
    {
      title: "Dawwama",
      description: "Pierwsza i największa na świecie zjeżdżalnia typu tornado z napędem hydromagnetycznym, oferująca przejażdżki pontonem dla sześciu osób przez ekscytujące zakręty i spadki."
    },
    {
      title: "Bubble's Barrel",
      description: "Największa na świecie sztuczna fala do surfowania, idealna do flowboardingu i flowridingu z trzema poziomami trudności."
    },
    {
      title: "Bandit Bomber",
      description: "Najdłuższy na Bliskim Wschodzie podwieszany roller coaster, wyposażony w efekty wodne i laserowe oraz pokładowe pistolety wodne."
    }
  ];

  const experiences = [
    {
      title: "Nurkowanie w Poszukiwaniu Pereł",
      description: "Tradycyjne doświadczenie nurkowania w specjalnie przygotowanym basenie",
      price: "Dodatkowa opłata"
    },
    {
      title: "Lekcje Surfingu",
      description: "Profesjonalne instruktaże na fali Bubble's Barrel",
      price: "Od 175 AED"
    },
    {
      title: "VIP Cabana",
      description: "Prywatna kabana z ekskluzywnymi udogodnieniami i obsługą",
      price: "Od 750 AED"
    }
  ];

  const activities = [
    "Wypróbuj wszystkie zjeżdżalnie wodne",
    "Przeżyj przygodę na Dawwama",
    "Naucz się surfować na Bubble's Barrel",
    "Przejażdżka na Bandit Bomber",
    "Spróbuj nurkowania w poszukiwaniu pereł",
    "Zrelaksuj się w prywatnej kabanie",
    "Zobacz pokazy na żywo",
    "Odwiedź sklepy z pamiątkami",
    "Korzystaj ze stref wodnej zabawy"
  ];

  const gyg_link = "https://www.getyourguide.com/abu-dhabi-l494/abu-dhabi-yas-waterworld-general-admission-ticket-t178514/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/yas-waterworld.jpg"
          alt="Yas Waterworld Abu Dhabi"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Yas Waterworld Abu Dhabi
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Największy Park Wodny w ZEA
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(gyg_link, '_blank')}
              className="bg-[#00B4D8] hover:bg-[#0096B4] text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg inline-flex items-center space-x-2"
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
            <FaClock className="w-8 h-8 text-[#00B4D8] mb-4" />
            <h3 className="font-semibold mb-2">Godziny Otwarcia</h3>
            <p className="text-gray-600">10:00 - 18:00</p>
            <p className="text-gray-500 text-sm">Codziennie</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-[#00B4D8] mb-4" />
            <h3 className="font-semibold mb-2">Ceny Biletów</h3>
            <p className="text-gray-600">Od 270 AED</p>
            <p className="text-gray-500 text-sm">Dzieci do 3 lat: Za darmo</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaStar className="w-8 h-8 text-[#00B4D8] mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.7/5 od odwiedzających</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-[#00B4D8] mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Yas Island</p>
            <p className="text-gray-500 text-sm">Abu Dhabi</p>
          </motion.div>
        </div>

        {/* GetYourGuide Widget */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Zarezerwuj Bilety</h2>
          <div 
            data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
            data-gyg-locale-code="pl-PL" 
            data-gyg-widget="activities" 
            data-gyg-number-of-items="2" 
            data-gyg-cmp="kd-attracion" 
            data-gyg-partner-id="19WQ75B" 
            data-gyg-tour-ids="178514,517349"
          >
            <span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/abu-dhabi-l494/">GetYourGuide</a></span>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">O Yas Waterworld</h2>
          <p className="text-gray-600 mb-6">
            Yas Waterworld Abu Dhabi to park wodny w tematyce emirackiej, który ożywia historię 'Zagubionej Perły' poprzez ponad 40 zjeżdżalni i atrakcji wodnych. Park łączy tradycyjną kulturę emirackich nurków poszukujących pereł z nowoczesnymi rozrywkami wodnymi, tworząc wyjątkowe i ekscytujące doświadczenie dla odwiedzających w każdym wieku.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <FaMapMarkerAlt className="text-[#00B4D8]" />
            <span className="text-gray-600">
              Yas Island, Abu Dhabi, Zjednoczone Emiraty Arabskie
            </span>
          </div>
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
                  alt={`Yas Waterworld Abu Dhabi - ${index + 1}`}
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
                  alt="Yas Waterworld Abu Dhabi"
                  className="w-full h-auto rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white bg-[#00B4D8] rounded-full p-2 hover:bg-[#0096B4] transition-colors"
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
                <p className="text-[#00B4D8] font-semibold mt-2">{experience.price}</p>
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
                  <FaWater className="text-[#00B4D8] mt-1" />
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
                  <FaInfoCircle className="text-[#00B4D8] mt-1" />
                  <p className="text-gray-600">{fact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(gyg_link, '_blank')}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-[#00B4D8] rounded-lg shadow-lg hover:bg-[#0096B4] transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Kup Bilet na GetYourGuide
            <FaExternalLinkAlt className="ml-2" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default YasWaterworldPage;
