import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaTicketAlt, FaCamera, FaUmbrella, FaBicycle } from 'react-icons/fa';

const CornichePage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const funFacts = [
    "Długość promenady wynosi 8 kilometrów",
    "Plaża posiada certyfikat Błękitnej Flagi",
    "Oferuje spektakularne widoki na panoramę miasta",
    "Ponad 30 restauracji i kawiarni wzdłuż trasy",
    "Dostępne wypożyczalnie rowerów",
    "Specjalne strefy dla rodzin",
    "Regularne wydarzenia kulturalne i sportowe",
    "Darmowe Wi-Fi w wielu miejscach"
  ];

  const galleryImages = [
    '/images/corniche-1.jpg',
    '/images/corniche-2.jpg',
    '/images/corniche-3.jpg',
    '/images/corniche-4.jpg',
    '/images/corniche-5.jpg',
    '/images/corniche-6.jpg'
  ];

  const attractions = [
    {
      title: "Plaża Publiczna",
      description: "Piaszczysta plaża z krystalicznie czystą wodą, idealna do pływania i relaksu. Dostępne leżaki i parasole."
    },
    {
      title: "Ścieżka Rowerowa",
      description: "Dedykowana ścieżka dla rowerzystów i rolkarzy, ciągnąca się wzdłuż całej promenady."
    },
    {
      title: "Ogrody i Parki",
      description: "Zadbane tereny zielone z miejscami do piknikowania i placami zabaw dla dzieci."
    },
    {
      title: "Punkty Widokowe",
      description: "Platformy obserwacyjne oferujące zapierające dech w piersiach widoki na zatokę i panoramę miasta."
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
        <img
          src="/images/corniche.jpg"
          alt="Corniche Abu Dhabi"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Corniche Abu Dhabi
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Nadmorska Promenada i Plaża
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
            <p className="text-gray-600">24/7</p>
            <p className="text-gray-500 text-sm">Plaża: 7:00 - 24:00</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Wstęp</h3>
            <p className="text-gray-600">Bezpłatny</p>
            <p className="text-gray-500 text-sm">Leżaki od 30 AED</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaCamera className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Fotografie</h3>
            <p className="text-gray-600">Dozwolone</p>
            <p className="text-gray-500 text-sm">Wspaniałe widoki</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Lokalizacja</h3>
            <p className="text-gray-600">Corniche Road</p>
            <p className="text-gray-500 text-sm">Abu Dhabi</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">O Corniche</h2>
          <p className="text-gray-600 mb-6">
            Corniche to malownicza, 8-kilometrowa promenada ciągnąca się wzdłuż wybrzeża Abu Dhabi, 
            oferująca odwiedzającym spektakularne widoki na zatokę i panoramę miasta. Ta starannie 
            zaprojektowana przestrzeń publiczna łączy w sobie plażę z <a href="https://pl.wikipedia.org/wiki/B%C5%82%C4%99kitna_Flaga" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">certyfikatem Błękitnej Flagi</a>, 
            ścieżki rowerowe, tereny rekreacyjne i liczne kawiarnie. To popularne miejsce zarówno 
            wśród mieszkańców, jak i turystów, idealne do aktywnego wypoczynku, relaksu na plaży 
            czy wieczornych spacerów. Corniche jest również gospodarzem wielu wydarzeń kulturalnych 
            i festiwali, które odbywają się tu przez cały rok.
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
                  alt={`Corniche - ${index + 1}`}
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
                  alt="Corniche"
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
          <h2 className="text-3xl font-semibold mb-6">Wycieczki i Aktywności</h2>
          <div 
            data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
            data-gyg-locale-code="pl-PL" 
            data-gyg-widget="activities" 
            data-gyg-number-of-items="4" 
            data-gyg-cmp="corniche-ad" 
            data-gyg-partner-id="PDKWF6M" 
            data-gyg-q="corniche abu dhabi"
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
                <FaUmbrella className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Plaża</h3>
                  <p className="text-gray-600">Certyfikowana plaża z leżakami, parasolami i ratownikami.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaBicycle className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Wypożyczalnie Rowerów</h3>
                  <p className="text-gray-600">Dostępne rowery i sprzęt sportowy do wypożyczenia.</p>
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
                  <p className="text-gray-600">Wczesny poranek lub późne popołudnie, gdy temperatura jest niższa.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaStar className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Polecane Aktywności</h3>
                  <p className="text-gray-600">Jazda na rowerze, spacery o zachodzie słońca, pikniki w parkach.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CornichePage;
