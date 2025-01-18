import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaTicketAlt, FaCamera, FaBook, FaLandmark } from 'react-icons/fa';
import GetYourGuideWidget from '../components/GetYourGuideWidget';

const QasrAlWatanPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const funFacts = [
    "Pałac został otwarty dla zwiedzających w 2019 roku",
    "Zbudowany z białego wapienia i granitu",
    "Kopuła główna ma 37 metrów średnicy",
    "Posiada jedną z największych bibliotek w regionie",
    "W budowie użyto ponad 5000 ozdobnych elementów",
    "Żyrandole wykonane są z milionów kryształów",
    "Fasada pałacu mieni się różnymi kolorami po zmroku",
    "Znajduje się tu sala posiedzeń Rady Najwyższej"
  ];

  const galleryImages = [
    '/images/qasr-al-watan-1.jpg',
    '/images/qasr-al-watan-2.jpg',
    '/images/qasr-al-watan-3.jpg',
    '/images/qasr-al-watan-4.jpg',
    '/images/qasr-al-watan-5.jpg',
    '/images/qasr-al-watan-6.jpg'
  ];

  const attractions = [
    {
      title: "Wielka Sala",
      description: "Imponująca sala z największą kopułą w pałacu, ozdobiona złotem i kryształami."
    },
    {
      title: "Biblioteka",
      description: "Bogata kolekcja książek i manuskryptów dokumentujących historię i kulturę arabską."
    },
    {
      title: "Sala Spirit of Collaboration",
      description: "Miejsce spotkań Federalnej Rady Najwyższej i międzynarodowych szczytów."
    },
    {
      title: "Dom Wiedzy",
      description: "Interaktywna wystawa prezentująca wkład świata arabskiego w różne dziedziny nauki."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/qasr-al-watan.jpg"
          alt="Qasr Al Watan"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Qasr Al Watan
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Pałac Prezydencki i Skarbnica Arabskiej Kultury
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
            <p className="text-gray-600">10:00 - 19:00</p>
            <p className="text-gray-500 text-sm">Codziennie</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Bilety</h3>
            <p className="text-gray-600">Od 65 AED</p>
            <p className="text-gray-500 text-sm">Dzieci do 3 lat za darmo</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaCamera className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Fotografie</h3>
            <p className="text-gray-600">Dozwolone</p>
            <p className="text-gray-500 text-sm">W wyznaczonych miejscach</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Lokalizacja</h3>
            <p className="text-gray-600">Al Ras Al Akhdar</p>
            <p className="text-gray-500 text-sm">Abu Dhabi</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">O Qasr Al Watan</h2>
          <p className="text-gray-600 mb-6">
            Qasr Al Watan, znany również jako Pałac Narodów, to architektoniczny cud i kulturalne serce 
            Zjednoczonych Emiratów Arabskich. Ten majestatyczny biały pałac jest nie tylko siedzibą rządu 
            federalnego, ale także miejscem celebrującym arabskie dziedzictwo i wiedzę. Zwiedzający mogą 
            podziwiać wspaniałe wnętrza zdobione złotem, kryształami i mozaikami, a także poznać historię 
            i kulturę regionu poprzez interaktywne wystawy i eksponaty.
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
                  alt={`Qasr Al Watan - ${index + 1}`}
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
                  alt="Qasr Al Watan"
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
        <div className="my-8">
          <GetYourGuideWidget
            tourIds="411488,412274,519121,482006,140175,301193,505703,90195"
            numItems={8}
          />
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
                <FaBook className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Przewodnik Audio</h3>
                  <p className="text-gray-600">Dostępny w wielu językach, w tym po polsku. Zawiera szczegółowe informacje o pałacu.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaLandmark className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Wystawy i Ekspozycje</h3>
                  <p className="text-gray-600">Interaktywne wystawy prezentujące historię i kulturę ZEA.</p>
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
                  <p className="text-gray-600">Wczesne godziny poranne lub późne popołudnie. Wieczorem odbywają się pokazy świetlne.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaStar className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Dress Code</h3>
                  <p className="text-gray-600">Wymagany skromny strój. Ramiona i kolana powinny być zakryte.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QasrAlWatanPage;
