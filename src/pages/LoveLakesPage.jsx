import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaBus, FaParking, FaWheelchair, FaCamera, FaBicycle, FaHeart, FaSun } from 'react-icons/fa';

const LoveLakesPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const funFacts = [
    "Dwa połączone jeziora tworzące kształt serc",
    "Widoczne z kosmosu przez satelitę",
    "Część kompleksu jezior Al Qudra",
    "Stworzone w 2018 roku jako sztuczne jezioro",
    "Popularne miejsce obserwacji dzikiej przyrody",
    "Ponad 16 000 posadzonych drzew",
    "Specjalnie zaprojektowane do fotografii",
    "Otoczone pustynną roślinnością"
  ];

  const galleryImages = [
    '/images/love-lakes-1.jpg',
    '/images/love-lakes-2.jpg',
    '/images/love-lakes-3.jpg',
    '/images/love-lakes-4.jpg',
    '/images/love-lakes-5.jpg',
    '/images/love-lakes-6.jpg'
  ];

  const attractions = [
    {
      title: "Jeziora w Kształcie Serc",
      description: "Dwa połączone jeziora tworzące idealne kształty serc, stworzone z myślą o romantycznych widokach i fotografii."
    },
    {
      title: "Trasy Rowerowe",
      description: "Dobrze utrzymane ścieżki rowerowe wokół jezior, idealne zarówno dla początkujących, jak i doświadczonych rowerzystów."
    },
    {
      title: "Obserwacja Dzikiej Przyrody",
      description: "Możliwość obserwacji pustynnej fauny, w tym ptaków, gazeli i oryksów w ich naturalnym środowisku."
    },
    {
      title: "Miejsca Piknikowe",
      description: "Wyznaczone miejsca z siedziskami, idealne na rodzinne pikniki i spotkania na świeżym powietrzu."
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
          src="/images/love-lakes.jpg"
          alt="Love Lakes Dubai"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Love Lakes Dubai
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Oaza w Kształcie Serc na Pustyni
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
            <h3 className="font-semibold mb-2">Godziny Dostępu</h3>
            <p className="text-gray-600">Dostępne 24/7</p>
            <p className="text-gray-500 text-sm">Najlepiej: Wschód/Zachód słońca</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Lokalizacja</h3>
            <p className="text-gray-600">Jeziora Al Qudra</p>
            <p className="text-gray-500 text-sm">Al Qudra Road, Dubaj</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Wstęp</h3>
            <p className="text-gray-600">Bezpłatny</p>
            <p className="text-gray-500 text-sm">Bez rezerwacji</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaStar className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.7/5</p>
            <p className="text-gray-500 text-sm">od odwiedzających</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">O Love Lakes</h2>
          <p className="text-gray-600 mb-6">
            Love Lakes to unikalna atrakcja w Dubaju, składająca się z dwóch połączonych jezior tworzących kształt serc. 
            Położone w sercu pustyni Al Qudra, jeziora zostały stworzone w 2018 roku jako część większego kompleksu 
            wodnego. To miejsce stało się popularnym celem wycieczek dla par, fotografów i miłośników przyrody. 
            Otoczone pustynną roślinnością i zamieszkałe przez różnorodną faunę, Love Lakes oferuje wyjątkowe 
            doświadczenie łączące romantyczną atmosferę z pięknem pustyni.
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
                  alt={`Love Lakes - ${index + 1}`}
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
                  alt="Love Lakes"
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
          <h2 className="text-3xl font-semibold mb-6">Wycieczki i Atrakcje</h2>
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

        {/* How to Get There & Best Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-3xl font-semibold mb-6">Jak Dotrzeć</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaBus className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Transport</h3>
                  <p className="text-gray-600">Dostępne tylko samochodem. Zalecany samochód 4x4. Kieruj się znakami z Al Qudra Road.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaParking className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Parking</h3>
                  <p className="text-gray-600">Bezpłatny parking przy jeziorach. Kilka stref parkingowych przy różnych punktach widokowych.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-3xl font-semibold mb-6">Najlepszy Czas na Wizytę</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaCalendarAlt className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Pora Roku</h3>
                  <p className="text-gray-600">Najlepszy okres to listopad-marzec, gdy temperatury są przyjemniejsze.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaSun className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Pora Dnia</h3>
                  <p className="text-gray-600">Wschód i zachód słońca oferują najlepsze warunki do fotografii i najpiękniejsze widoki.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveLakesPage;
