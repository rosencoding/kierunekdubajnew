import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaTicketAlt, FaDove, FaCamera, FaExternalLinkAlt } from 'react-icons/fa';

const FalconHospitalPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const funFacts = [
    "Największy szpital dla sokołów na świecie",
    "Leczy ponad 11 000 sokołów rocznie",
    "Pierwszy szpital dla sokołów w ZEA",
    "Posiada muzeum sokolnictwa",
    "Wydaje paszporty dla sokołów",
    "Wykonuje zaawansowane operacje ptaków"
  ];

  const galleryImages = [
    '/images/falcon-hospital-1.jpg',
    '/images/falcon-hospital-2.jpg',
    '/images/falcon-hospital-3.jpg',
    '/images/falcon-hospital-4.jpg',
    '/images/falcon-hospital-5.jpg',
    '/images/falcon-hospital-6.jpg',
    '/images/falcon-hospital-7.jpg',
    '/images/falcon-hospital-8.jpg',
    '/images/falcon-hospital.jpg'
  ];

  const attractions = [
    {
      title: "Strefa Pokazów Sokołów",
      description: "Zobacz majestatyczne sokoły z bliska i poznaj różne gatunki, ich cechy charakterystyczne oraz znaczenie w kulturze ZEA."
    },
    {
      title: "Sale Zabiegowe",
      description: "Obserwuj badania i leczenie sokołów w nowoczesnych placówkach medycznych podczas wycieczek z przewodnikiem."
    },
    {
      title: "Muzeum Sokolnictwa",
      description: "Odkryj wystawy przedstawiające historię sokolnictwa w ZEA, w tym tradycyjny sprzęt i ekspozycje edukacyjne."
    }
  ];

  const experiences = [
    {
      title: "Wycieczka z Przewodnikiem",
      description: "2-godzinna kompleksowa wycieczka po placówce",
      price: "Od 170 AED"
    },
    {
      title: "Interakcja z Sokołami",
      description: "Możliwość potrzymania i zrobienia zdjęć z sokołami",
      price: "W cenie wycieczki"
    },
    {
      title: "Wizyta w Muzeum",
      description: "Poznaj historię i kulturę sokolnictwa",
      price: "W cenie wycieczki"
    }
  ];

  const activities = [
    "Obserwacja badań sokołów",
    "Możliwość potrzymania sokoła",
    "Robienie zdjęć z sokołami",
    "Zwiedzanie sal zabiegowych",
    "Zwiedzanie muzeum sokolnictwa",
    "Nauka o sokolnictwie",
    "Wizyta w pomieszczeniu do pierzenia",
    "Obserwacja karmienia",
    "Wizyta na oddziałach"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/falcon-hospital.jpg"
          alt="Szpital Sokołów w Abu Dhabi"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Szpital Sokołów w Abu Dhabi
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Najlepszy na Świecie Ośrodek Opieki nad Sokołami
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://www.falconhospital.com/', '_blank')}
              className="bg-[#6B4423] hover:bg-[#543619] text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg inline-flex items-center space-x-2"
            >
              <FaTicketAlt />
              <span>Zarezerwuj Wycieczkę</span>
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
            <FaClock className="w-8 h-8 text-[#6B4423] mb-4" />
            <h3 className="font-semibold mb-2">Godziny Otwarcia</h3>
            <p className="text-gray-600">10:00 - 14:00</p>
            <p className="text-gray-500 text-sm">Niedziela - Czwartek</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-[#6B4423] mb-4" />
            <h3 className="font-semibold mb-2">Cena Wycieczki</h3>
            <p className="text-gray-600">Od 170 AED</p>
            <p className="text-gray-500 text-sm">Wymagana Rezerwacja</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaStar className="w-8 h-8 text-[#6B4423] mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.8/5 od odwiedzających</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-[#6B4423] mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Sweihan Road</p>
            <p className="text-gray-500 text-sm">Abu Dhabi</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">O Szpitalu Sokołów w Abu Dhabi</h2>
          <p className="text-gray-600 mb-6">
            Szpital Sokołów w Abu Dhabi to największy i najbardziej zaawansowany ośrodek opieki nad sokołami na świecie. Założony w 1999 roku, stał się wiodącym centrum medycyny i badań nad sokołami. Szpital oferuje wycieczki z przewodnikiem, podczas których odwiedzający mogą zobaczyć wyjątkową relację między sokołami a Emiratczykami, poznać medycynę sokolniczą i nawet wejść w interakcję z tymi majestatycznymi ptakami.
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
                  alt={`Szpital Sokołów - ${index + 1}`}
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
                  alt="Szpital Sokołów"
                  className="w-full h-auto rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white bg-[#6B4423] rounded-full p-2 hover:bg-[#543619] transition-colors"
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
          <h2 className="text-2xl font-bold mb-6">Dostępne Doświadczenia</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiences.map((experience, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                <p className="text-gray-600">{experience.description}</p>
                <p className="text-[#6B4423] font-semibold mt-2">{experience.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Co Można Zobaczyć</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <FaDove className="text-[#6B4423] mt-1" />
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
                  <FaInfoCircle className="text-[#6B4423] mt-1" />
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
            data-gyg-number-of-items="6" 
            data-gyg-cmp="kd-attracion" 
            data-gyg-partner-id="19WQ75B" 
            data-gyg-tour-ids="912924,864365,543875,228472,140175,56588"
          >
            <span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/abu-dhabi-l494/">GetYourGuide</a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FalconHospitalPage;
