import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaTicketAlt, FaCamera, FaWifi, FaSwimmingPool } from 'react-icons/fa';

const EmiratesPalacePage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const funFacts = [
    "Budowa pałacu kosztowała około 3 miliardów dolarów",
    "Posiada ponad 390 pokoi i apartamentów",
    "Na budowę zużyto 100,000 m³ marmuru",
    "Kopuła główna ma 72.6 metrów wysokości",
    "Posiada własną plażę o długości 1.3 km",
    "W hotelu znajduje się 1002 żyrandoli",
    "Wnętrza zdobione są 24-karatowym złotem",
    "Jest to jeden z najdroższych hoteli na świecie"
  ];

  const galleryImages = [
    '/images/emirates-palace-1.jpg',
    '/images/emirates-palace-2.jpg',
    '/images/emirates-palace-3.jpg',
    '/images/emirates-palace-4.jpg',
    '/images/emirates-palace-5.jpg',
    '/images/emirates-palace-6.jpg'
  ];

  const attractions = [
    {
      title: "Luksusowe Pokoje i Apartamenty",
      description: "Eleganckie pokoje i apartamenty z widokiem na Zatokę Perską, wyposażone w najnowocześniejsze udogodnienia."
    },
    {
      title: "Prywatna Plaża",
      description: "1.3 kilometrowa prywatna plaża z krystalicznie czystą wodą i luksusowymi leżakami."
    },
    {
      title: "Restauracje i Kawiarnie",
      description: "14 ekskluzywnych restauracji serwujących dania kuchni międzynarodowej, w tym słynną Emirates Palace Cappuccino ze złotymi płatkami."
    },
    {
      title: "Spa i Wellness",
      description: "Luksusowe spa oferujące zabiegi z wykorzystaniem złota i produktów premium."
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
          src="/images/emirates-palace.jpg"
          alt="Emirates Palace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Emirates Palace
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Luksusowy Hotel i Ikona Abu Dhabi
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
            <p className="text-gray-500 text-sm">Hotel czynny całą dobę</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Zwiedzanie</h3>
            <p className="text-gray-600">Wstęp bezpłatny do lobby</p>
            <p className="text-gray-500 text-sm">Rezerwacja dla gości</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaCamera className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Fotografie</h3>
            <p className="text-gray-600">Dozwolone</p>
            <p className="text-gray-500 text-sm">W miejscach publicznych</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Lokalizacja</h3>
            <p className="text-gray-600">West Corniche Road</p>
            <p className="text-gray-500 text-sm">Abu Dhabi</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">O Emirates Palace</h2>
          <p className="text-gray-600 mb-6">
            Emirates Palace to jeden z najbardziej luksusowych hoteli na świecie, będący symbolem 
            bogactwa i przepychu Abu Dhabi. Ten imponujący kompleks, położony na prywatnej plaży 
            o długości 1.3 kilometra, łączy w sobie tradycyjną arabską architekturę z nowoczesnymi 
            udogodnieniami. Hotel słynie z wykończenia wnętrz 24-karatowym złotem, marmurowych podłóg 
            i kryształowych żyrandoli. Goście mogą delektować się wyjątkowymi doznaniami kulinarnymi 
            w licznych restauracjach, zrelaksować się w luksusowym spa lub po prostu podziwiać 
            zapierające dech w piersiach widoki na Zatokę Perską.
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
                  alt={`Emirates Palace - ${index + 1}`}
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
                  alt="Emirates Palace"
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
          <h2 className="text-3xl font-semibold mb-6">Bilety i Wycieczki</h2>
          <div 
            data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
            data-gyg-locale-code="pl-PL" 
            data-gyg-widget="activities" 
            data-gyg-number-of-items="4" 
            data-gyg-cmp="emirates-palace-ad" 
            data-gyg-partner-id="PDKWF6M" 
            data-gyg-q="emirates palace abu dhabi"
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
                <FaWifi className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Bezpłatne Wi-Fi</h3>
                  <p className="text-gray-600">Szybkie połączenie internetowe w całym obiekcie.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaSwimmingPool className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Baseny i Plaża</h3>
                  <p className="text-gray-600">Dwa baseny z kontrolowaną temperaturą i prywatna plaża.</p>
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
                  <p className="text-gray-600">Zachód słońca to najlepszy czas na zdjęcia i podziwianie architektury pałacu.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaStar className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Dress Code</h3>
                  <p className="text-gray-600">Wymagany elegancki strój. Zbyt swobodny ubiór może skutkować odmową wstępu.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmiratesPalacePage;
