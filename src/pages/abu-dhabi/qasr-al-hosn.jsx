import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaTicketAlt, FaCamera, FaLandmark, FaHistory } from 'react-icons/fa';

const QasrAlHosnPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const funFacts = [
    "Najstarszy kamienny budynek w Abu Dhabi",
    "Początkowo służył jako punkt obserwacyjny",
    "Był siedzibą rządzącej rodziny",
    "Zbudowany w 1761 roku",
    "Przeszedł gruntowną renowację w 2018 roku",
    "Zawiera interaktywne wystawy historyczne",
    "Otoczony tradycyjnym targiem",
    "Regularnie odbywają się tu wydarzenia kulturalne"
  ];

  const galleryImages = [
    '/images/qasr-al-hosn-1.jpg',
    '/images/qasr-al-hosn-2.jpg',
    '/images/qasr-al-hosn-3.jpg',
    '/images/qasr-al-hosn-4.jpg',
    '/images/qasr-al-hosn-5.jpg',
    '/images/qasr-al-hosn-6.jpg'
  ];

  const attractions = [
    {
      title: "Fort",
      description: "Historyczna forteca będąca najstarszym budynkiem w Abu Dhabi."
    },
    {
      title: "Muzeum",
      description: "Interaktywne wystawy prezentujące historię i kulturę emiratu."
    },
    {
      title: "House of Artisans",
      description: "Miejsce prezentujące tradycyjne rzemiosło emirackie."
    },
    {
      title: "Cultural Foundation",
      description: "Centrum kultury z biblioteką, teatrem i galeriami sztuki."
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
            backgroundImage: 'url("/images/qasr-al-hosn.jpg")',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Qasr Al Hosn
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Najstarszy Zabytek Abu Dhabi
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
            <p className="text-gray-600">9:00 - 19:00</p>
            <p className="text-gray-500 text-sm">Codziennie</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Bilety</h3>
            <p className="text-gray-600">Od 30 AED</p>
            <p className="text-gray-500 text-sm">Dzieci do 5 lat za darmo</p>
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
            <p className="text-gray-600">Al Hosn</p>
            <p className="text-gray-500 text-sm">Abu Dhabi</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">O Qasr Al Hosn</h2>
          <p className="text-gray-600 mb-6">
            Qasr Al Hosn to najstarszy i najbardziej znaczący budynek w Abu Dhabi, 
            będący świadectwem historii emiratu. Początkowo zbudowany w 1761 roku jako 
            wieża strażnicza chroniąca jedyne źródło słodkiej wody w okolicy, z czasem 
            rozrósł się w fort, który stał się siedzibą rządzącej rodziny i centrum 
            administracyjnym miasta. Po gruntownej renowacji w 2018 roku, Qasr Al Hosn 
            został przekształcony w muzeum prezentujące historię Abu Dhabi od tradycyjnego 
            osadnictwa po współczesną metropolię. Kompleks obejmuje także House of Artisans, 
            prezentujący tradycyjne rzemiosło emirackie, oraz Cultural Foundation - 
            nowoczesne centrum kultury z biblioteką, teatrem i galeriami sztuki.
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
                  alt={`Qasr Al Hosn - ${index + 1}`}
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
                  alt="Qasr Al Hosn"
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
            data-gyg-q="abu dhabi"
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
                <FaLandmark className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Przewodnicy</h3>
                  <p className="text-gray-600">Dostępni przewodnicy mówiący w wielu językach.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaHistory className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Wystawy Interaktywne</h3>
                  <p className="text-gray-600">Nowoczesne ekspozycje z elementami multimedialnymi.</p>
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
                  <p className="text-gray-600">Wczesne godziny poranne lub późne popołudnie.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaStar className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Polecane</h3>
                  <p className="text-gray-600">Sprawdź kalendarz wydarzeń - często odbywają się tu pokazy kulturalne.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QasrAlHosnPage;
