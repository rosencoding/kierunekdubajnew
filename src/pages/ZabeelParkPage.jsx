import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaBus, FaParking, FaWheelchair, FaCamera, FaTree, FaBicycle, FaChild } from 'react-icons/fa';

const ZabeelParkPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const funFacts = [
    "Jeden z największych parków miejskich w Dubaju",
    "W pobliżu znajduje się Dubai Frame",
    "Trzy połączone ze sobą strefy",
    "Zaawansowane technologicznie udogodnienia",
    "Miejsce Dubai Garden Glow",
    "Zrównoważone praktyki parkowe",
    "47,5 hektarów zielonej przestrzeni",
    "Wiele tematycznych ogrodów"
  ];

  const galleryImages = [
    '/images/zabeel-park-1.jpg',
    '/images/zabeel-park-2.jpg',
    '/images/zabeel-park-3.jpg',
    '/images/zabeel-park-4.jpg',
    '/images/zabeel-park-5.jpg',
    '/images/zabeel-park-6.jpg'
  ];

  const mainAttractions = [
    {
      title: "Ogrody Tematyczne",
      description: "Wiele ogrodów tematycznych prezentujących różnorodne gatunki roślin i projekty krajobrazowe."
    },
    {
      title: "Trasy do Biegania",
      description: "Dobrze utrzymane trasy do biegania i jazdy na rowerze ze znacznikami odległości."
    },
    {
      title: "Place Zabaw",
      description: "Wiele placów zabaw z nowoczesnym sprzętem dla różnych grup wiekowych."
    },
    {
      title: "Strefa Technologii",
      description: "Interaktywne ekspozycje i edukacyjne wystawy dotyczące technologii i innowacji."
    },
    {
      title: "Amfiteatr",
      description: "Miejsce na świeżym powietrzu goszczące różne wydarzenia i występy przez cały rok."
    },
    {
      title: "Obiekty Sportowe",
      description: "Korty tenisowe, boiska do koszykówki i stacje fitness w całym parku."
    }
  ];

  const practicalInfo = [
    {
      icon: <FaBus className="text-2xl text-[#2D5A27]" />,
      title: "Jak Dojechać",
      details: "Znajduje się między Al Karama a World Trade Centre. Dostępny metrem (stacja Al Jafiliya), autobusem lub samochodem."
    },
    {
      icon: <FaParking className="text-2xl text-[#2D5A27]" />,
      title: "Parking",
      details: "Dostępne liczne miejsca parkingowe. Bezpłatny parking dla odwiedzających park."
    },
    {
      icon: <FaWheelchair className="text-2xl text-[#2D5A27]" />,
      title: "Dostępność",
      details: "Ścieżki dostosowane dla wózków inwalidzkich. Dostępne udogodnienia dla niepełnosprawnych."
    },
    {
      icon: <FaCamera className="text-2xl text-[#2D5A27]" />,
      title: "Fotografia",
      details: "Dozwolone fotografowanie. Wspaniałe widoki na Dubai Frame i panoramę miasta."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/zabeel-park.jpg"
          alt="Park Zabeel w Dubaju"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Park Zabeel w Dubaju
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Miejska Oaza Dubaju
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://maps.app.goo.gl/Pf3LCJsnWH4ahgzE7', '_blank')}
              className="bg-[#2D5A27] hover:bg-[#224A1D] text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg inline-flex items-center space-x-2"
            >
              <FaTicketAlt />
              <span>Sprawdź lokalizację w Google Maps</span>
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
            <FaClock className="w-8 h-8 text-[#2D5A27] mb-4" />
            <h3 className="font-semibold mb-2">Godziny Otwarcia</h3>
            <p className="text-gray-600">8:00 - 22:00</p>
            <p className="text-gray-500 text-sm">Garden Glow: 18:00-23:00</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-[#2D5A27] mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Brama 4, Zabeel</p>
            <p className="text-gray-500 text-sm">Al Kifaf, Dubaj</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-[#2D5A27] mb-4" />
            <h3 className="font-semibold mb-2">Cena Wstępu</h3>
            <p className="text-gray-600">5 AED</p>
            <p className="text-gray-500 text-sm">za osobę</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaStar className="w-8 h-8 text-[#2D5A27] mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.5/5</p>
            <p className="text-gray-500 text-sm">od odwiedzających</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">O Parku Zabeel</h2>
          <p className="text-gray-600 mb-6">
            Park Zabeel to rozległa, zielona oaza w sercu Dubaju, oferująca idealne miejsce do rekreacji i odpoczynku. Park łączy w sobie nowoczesne udogodnienia z pięknymi terenami zielonymi, tworząc przestrzeń przyjazną dla rodzin i miłośników aktywnego wypoczynku. Szczególną atrakcją jest Dubai Garden Glow - magiczny ogród świetlny, który zachwyca po zmroku swoimi kolorowymi instalacjami.
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
                  alt={`Park Zabeel - ${index + 1}`}
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
                  alt="Park Zabeel"
                  className="w-full h-auto rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white bg-[#2D5A27] rounded-full p-2 hover:bg-[#224A1D] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
            data-gyg-tour-ids="519121,523026,412274,412278,546987,483532,519111,528385"
          >
            <span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/dubai-l173/">GetYourGuide</a></span>
          </div>
        </div>

        {/* Main Attractions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Główne Atrakcje</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mainAttractions.map((attraction, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{attraction.title}</h3>
                <p className="text-gray-600">{attraction.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Practical Info */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Informacje Praktyczne</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practicalInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                  <p className="text-gray-600">{info.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Ciekawostki</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {funFacts.map((fact, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <FaInfoCircle className="text-[#2D5A27] mt-1" />
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

export default ZabeelParkPage;
