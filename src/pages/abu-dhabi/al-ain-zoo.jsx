import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaTicketAlt, FaPaw, FaCamera, FaExternalLinkAlt } from 'react-icons/fa';

const AlAinZooPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const funFacts = [
    "Dom dla ponad 4000 zwierząt",
    "Założone w 1968 roku przez Szejka Zayeda",
    "Największa kolekcja arabskiej fauny",
    "Program hodowlany zagrożonych gatunków",
    "Największe na świecie sztuczne safari",
    "Posiada rzadkie białe lwy i tygrysy"
  ];

  const galleryImages = [
    '/images/al-ain-zoo-1.jpg',
    '/images/al-ain-zoo-2.jpg',
    '/images/al-ain-zoo-3.jpg',
    '/images/al-ain-zoo-4.jpg',
    '/images/al-ain-zoo-5.jpg',
    '/images/al-ain-zoo-6.jpg',
    '/images/al-ain-zoo-7.jpg',
    '/images/al-ain-zoo-8.jpg',
    '/images/al-ain-zoo.jpg'
  ];

  const attractions = [
    {
      title: "Centrum Edukacyjne Sheikh Zayed Desert",
      description: "Interaktywne muzeum prezentujące dziedzictwo naturalne ZEA i wysiłki na rzecz ochrony dzikiej przyrody poprzez nowoczesne ekspozycje."
    },
    {
      title: "Safari Al Ain",
      description: "Największy na świecie sztuczny park safari prezentujący afrykańską i arabską dziką przyrodę w naturalnym pustynnym otoczeniu."
    },
    {
      title: "Spotkania ze Zwierzętami",
      description: "Bliskie spotkania z różnymi zwierzętami, w tym żyrafami, słoniami i dużymi kotami w specjalnie zaprojektowanych strefach interakcji."
    }
  ];

  const experiences = [
    {
      title: "Wstęp do Zoo",
      description: "Dostęp do wszystkich ekspozycji zwierząt",
      price: "Od 50 AED"
    },
    {
      title: "Wycieczka Safari",
      description: "Wycieczka z przewodnikiem po parku safari",
      price: "Od 120 AED"
    },
    {
      title: "Karmienie Zwierząt",
      description: "Interaktywne sesje karmienia",
      price: "Od 80 AED"
    }
  ];

  const activities = [
    "Zwiedzanie ekspozycji zwierząt",
    "Wycieczka safari",
    "Karmienie żyraf",
    "Pokazy zwierząt",
    "Wizyta w Centrum Edukacyjnym",
    "Wycieczki z przewodnikiem",
    "Sesje karmienia",
    "Fotografowanie dzikiej przyrody",
    "Wizyta w mini zoo"
  ];

  const gyg_link = "https://www.getyourguide.com/abu-dhabi-l494/abu-dhabi-emirates-park-zoo-entry-ticket-t564159/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/al-ain-zoo.jpg"
          alt="Zoo Al Ain"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Zoo Al Ain
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Raj Dzikich Zwierząt na Pustyni
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(gyg_link, '_blank')}
              className="bg-[#2D5A27] hover:bg-[#224A1D] text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg inline-flex items-center space-x-2"
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
            <FaClock className="w-8 h-8 text-[#2D5A27] mb-4" />
            <h3 className="font-semibold mb-2">Godziny Otwarcia</h3>
            <p className="text-gray-600">9:00 - 20:00</p>
            <p className="text-gray-500 text-sm">Codziennie</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-[#2D5A27] mb-4" />
            <h3 className="font-semibold mb-2">Ceny Biletów</h3>
            <p className="text-gray-600">Od 30 AED</p>
            <p className="text-gray-500 text-sm">Dzieci do 3 lat: Za darmo</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaStar className="w-8 h-8 text-[#2D5A27] mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.6/5 od odwiedzających</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-[#2D5A27] mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Nahyan The First Street</p>
            <p className="text-gray-500 text-sm">Al Ain</p>
          </motion.div>
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
            data-gyg-tour-ids="564159,559171,801373"
          >
            <span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/abu-dhabi-l494/">GetYourGuide</a></span>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">O Zoo Al Ain</h2>
          <p className="text-gray-600 mb-6">
            Zoo Al Ain to jeden z największych i najbardziej szanowanych parków dzikich zwierząt w ZEA, rozciągający się na 400 hektarach u podnóża góry Jebel Hafeet. Założone w 1968 roku przez Szejka Zayeda bin Sultana Al Nahyana, zoo stało się wiodącym centrum ochrony przyrody, będącym domem dla ponad 4000 zwierząt reprezentujących ponad 200 gatunków. Zoo łączy tradycyjne i nowoczesne ekspozycje, kładąc silny nacisk na edukację i ochronę dzikiej przyrody pustyni.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <FaMapMarkerAlt className="text-[#2D5A27]" />
            <span className="text-gray-600">
              Okolice Jebel Hafeet, Al Ain, Abu Dhabi, Zjednoczone Emiraty Arabskie
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
                  alt={`Zoo Al Ain - ${index + 1}`}
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
                  alt="Zoo Al Ain"
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
                <p className="text-[#2D5A27] font-semibold mt-2">{experience.price}</p>
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
                  <FaPaw className="text-[#2D5A27] mt-1" />
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
                  <FaInfoCircle className="text-[#2D5A27] mt-1" />
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
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-[#2D5A27] rounded-lg shadow-lg hover:bg-[#224A1D] transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Kup Bilet na GetYourGuide
            <FaExternalLinkAlt className="ml-2" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default AlAinZooPage;
