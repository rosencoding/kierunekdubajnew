import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaTicketAlt, FaShoppingBag, FaCamera, FaExternalLinkAlt, FaParking } from 'react-icons/fa';

const MarinaMallPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const funFacts = [
    "Ponad 400 sklepów detalicznych",
    "Posiada 100-metrową wieżę widokową",
    "Największy Carrefour w Abu Dhabi",
    "Tradycyjny arabski souk",
    "Spektakularne widoki na marinę i morze",
    "Posiada muzyczną, tańczącą fontannę"
  ];

  const galleryImages = [
    '/images/marina-mall-1.jpg',
    '/images/marina-mall-2.jpg',
    '/images/marina-mall-3.jpg',
    '/images/marina-mall-4.jpg',
    '/images/marina-mall-5.jpg',
    '/images/marina-mall-6.jpg',
    '/images/marina-mall-7.jpg',
    '/images/marina-mall-8.jpg',
    '/images/marina-mall.jpg'
  ];

  const attractions = [
    {
      title: "Marina Eye",
      description: "Ikoniczna wieża obserwacyjna oferująca panoramiczne widoki na panoramę Abu Dhabi i Zatokę Perską."
    },
    {
      title: "Raj dla Zakupoholików",
      description: "Bogata kolekcja międzynarodowych i lokalnych marek z dziedziny mody, elektroniki i lifestyle."
    },
    {
      title: "Centrum Rozrywki",
      description: "Liczne opcje rozrywkowe, w tym kręgielnia, lodowisko i kompleks kinowy."
    },
    {
      title: "Strefa Gastronomiczna",
      description: "Szeroki wybór restauracji i kawiarni oferujących kuchnie z całego świata."
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
          src="/images/marina-mall.jpg"
          alt="Marina Mall Abu Dhabi"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Marina Mall Abu Dhabi
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Ekskluzywne Centrum Handlowo-Rozrywkowe nad Wodą
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="https://marinamall.ae"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00A3E0] hover:bg-[#0082B3] text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg inline-flex items-center space-x-2"
              >
                <FaShoppingBag />
                <span>Odkryj Centrum</span>
              </a>
            </motion.div>
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
            <p className="text-gray-600">10:00 - 22:00</p>
            <p className="text-gray-500 text-sm">Codziennie</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaParking className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Parking</h3>
            <p className="text-gray-600">Bezpłatny</p>
            <p className="text-gray-500 text-sm">Ponad 3000 miejsc</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaStar className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.5/5</p>
            <p className="text-gray-500 text-sm">od odwiedzających</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Breakwater Island</p>
            <p className="text-gray-500 text-sm">Abu Dhabi Corniche</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">O Marina Mall</h2>
          <p className="text-gray-600 mb-6">
            Marina Mall Abu Dhabi to główne centrum handlowe i lifestyle'owe, oferujące wyjątkowe doświadczenia zakupowe dzięki swojej prestiżowej lokalizacji na falochronie, obok Marina Village. Centrum handlowe posiada ponad 400 sklepów, w tym butiki projektantów, marki modowe i tradycyjny arabski souk. Z ikoniczną wieżą obserwacyjną Marina Eye, obiektami rozrywkowymi i różnorodnymi opcjami gastronomicznymi, jest to kompleksowa destynacja rodzinna łącząca zakupy, wypoczynek i rozrywkę.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <FaMapMarkerAlt className="text-[#00A3E0]" />
            <span className="text-gray-600">
              Breakwater Island, Abu Dhabi, Zjednoczone Emiraty Arabskie
            </span>
          </div>
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
                  alt={`Marina Mall - ${index + 1}`}
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
                  alt="Marina Mall"
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
            data-gyg-cmp="marina-mall-ad" 
            data-gyg-partner-id="19WQ75B" 
            data-gyg-tour-ids="412274,412278,412279,412280,412281,412282,412283,412284"
          >
            <span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/abu-dhabi-l494/">GetYourGuide</a></span>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Ciekawostki</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
            <h2 className="text-3xl font-semibold mb-6">Jak Dotrzeć</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Lokalizacja</h3>
                  <p className="text-gray-600">Znajduje się na wyspie Breakwater, przy Abu Dhabi Corniche.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaParking className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Parking</h3>
                  <p className="text-gray-600">Duży, bezpłatny parking na ponad 3000 miejsc.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-3xl font-semibold mb-6">Najlepszy Czas na Wizytę</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaClock className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Godziny Szczytu</h3>
                  <p className="text-gray-600">Najlepiej odwiedzać w dni powszednie rano lub późnym popołudniem, aby uniknąć tłumów.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaCalendarAlt className="text-xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Dni Tygodnia</h3>
                  <p className="text-gray-600">W weekendy (piątek-sobota) centrum jest najbardziej zatłoczone.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarinaMallPage;
