import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaShip, FaWater, FaBuilding, FaExternalLinkAlt } from 'react-icons/fa';

const DubaiMarinaPage = () => {
  const funFacts = [
    "Dubai Marina to największa sztuczna marina na świecie",
    "Cała dzielnica została zbudowana wokół sztucznego kanału o długości 3,5 km",
    "Jest domem dla jednych z najwyższych budynków mieszkalnych na świecie",
    "Znajduje się tu charakterystyczna skręcona wieża Cayan Tower",
    "Marina Walk rozciąga się na długości ponad 7 kilometrów",
    "Może pomieścić ponad 500 jachtów i łodzi"
  ];

  const galleryImages = [
    '/images/dubai-marina-1.jpg',
    '/images/dubai-marina-2.jpg',
    '/images/dubai-marina-3.jpg',
    '/images/dubai-marina-4.jpg',
    '/images/dubai-marina-5.jpg',
    '/images/dubai-marina-6.jpg',
    '/images/dubai-marina-7.jpg',
    '/images/dubai-marina-8.jpg',
    '/images/dubai-marina.jpg'
  ];

  const attractions = [
    {
      title: "Marina Walk",
      description: "Malowniczy 7-kilometrowy deptak z restauracjami, kawiarniami i zapierającymi dech w piersiach widokami na luksusowe jachty i nowoczesną architekturę."
    },
    {
      title: "Dubai Marina Mall",
      description: "Nowoczesne centrum handlowe z ponad 140 sklepami, restauracjami nad wodą i rozrywką."
    },
    {
      title: "Plaża Marina",
      description: "Piękna plaża oferująca sporty wodne, opalanie i wspaniałe widoki na Palm Jumeirah."
    },
    {
      title: "Pier 7",
      description: "Siedmiopiętrowy kompleks restauracyjny oferujący różne kuchnie na każdym piętrze z panoramicznymi widokami na marinę."
    }
  ];

  const experiences = [
    {
      title: "Rejsy Jachtem",
      description: "Luksusowe rejsy jachtami oferujące kolacje, prywatne czartery i wycieczki widokowe."
    },
    {
      title: "Sporty Wodne",
      description: "Różnorodne aktywności, w tym skutery wodne, flyboarding i parasailing z pięknymi widokami na marinę."
    },
    {
      title: "Doświadczenia Kulinarne",
      description: "Restauracje światowej klasy oferujące jedzenie nad wodą z widokami na marinę i panoramę miasta."
    },
    {
      title: "Wycieczki po Marinie",
      description: "Wycieczki z przewodnikiem odkrywające architekturę, historię i rozwój Dubai Marina."
    }
  ];

  const activities = [
    "Rejs jachtem",
    "Spacer wzdłuż promenady Marina",
    "Kolacja w restauracjach nad wodą",
    "Zakupy w Dubai Marina Mall",
    "Sporty wodne",
    "Wizyta na plaży Marina",
    "Podziwianie zachodu słońca",
    "Sesje fotograficzne w punktach widokowych",
    "Życie nocne",
    "Przejażdżka wodnym taxi"
  ];

  const gyg_link = "https://www.getyourguide.com/dubai-l173/dubai-marina-luxury-yacht-tour-with-breakfast-or-bbq-t68767/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd-attractionpage";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/dubai-marina.jpg"
          alt="Dubai Marina"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Dubai Marina
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Luksusowa Dzielnica nad Wodą
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href={gyg_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg inline-flex items-center space-x-2"
              >
                <FaTicketAlt />
                <span>Zarezerwuj Rejs po Marinie</span>
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
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaClock className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Najlepsze Godziny</h3>
            <p className="text-gray-600">Otwarte 24/7</p>
            <p className="text-gray-500 text-sm">Najlepsze widoki o zachodzie słońca</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Lokalizacja</h3>
            <p className="text-gray-600">Dzielnica Dubai Marina</p>
            <p className="text-gray-500 text-sm">Dubaj</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaTicketAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Ceny Atrakcji</h3>
            <p className="text-gray-600">Od 100 AED</p>
            <p className="text-gray-500 text-sm">Różne aktywności</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaStar className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.8/5</p>
            <p className="text-gray-500 text-sm">od odwiedzających</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">O Dubai Marina</h2>
          <p className="text-gray-600 mb-6">
            Dubai Marina to sztuczne miasto kanałowe, zbudowane wzdłuż 3,5-kilometrowego odcinka wybrzeża Zatoki Arabskiej. 
            Ta luksusowa dzielnica nad wodą charakteryzuje się imponującymi wieżowcami mieszkalnymi, hotelami światowej klasy, 
            restauracjami i miejscami rozrywki, co czyni ją jedną z najbardziej pożądanych dzielnic Dubaju i popularnym celem 
            turystycznym.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <FaMapMarkerAlt className="text-blue-500" />
            <span className="text-gray-600">
              Dubai Marina, Dubaj, Zjednoczone Emiraty Arabskie
            </span>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Główne Atrakcje</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {attractions.map((attraction, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-6 rounded-xl shadow-md"
              >
                <h3 className="font-semibold text-xl mb-4">{attraction.title}</h3>
                <p className="text-gray-600">{attraction.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Co Można Robić</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-start">
                <FaInfoCircle className="text-blue-500 mt-1 mr-3" />
                <span>{activity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Galeria</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="rounded-xl overflow-hidden h-64 shadow-md"
              >
                <img
                  src={image}
                  alt={`Dubai Marina - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-blue-50 rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Ciekawostki</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {funFacts.map((fact, index) => (
              <div key={index} className="flex items-start">
                <FaInfoCircle className="text-blue-500 mt-1 mr-3" />
                <span>{fact}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mb-12">
          <a
            href={gyg_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-600 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Zarezerwuj rejs po Dubai Marina
            <FaExternalLinkAlt className="ml-2" />
          </a>
        </div>

        {/* Other Attractions */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Inne atrakcje</h2>
          <div
            data-gyg-href="https://widget.getyourguide.com/default/activities.frame"
            data-gyg-locale-code="pl-PL"
            data-gyg-widget="activities"
            data-gyg-number-of-items="8"
            data-gyg-cmp="kd-attracion"
            data-gyg-partner-id="19WQ75B"
            data-gyg-tour-ids="664558,505703,49021,49019,411488,587080,714548,129267"
          >
            <span>
              Powered by{" "}
              <a
                target="_blank"
                rel="sponsored"
                href="https://www.getyourguide.com/dubai-l173/"
              >
                GetYourGuide
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DubaiMarinaPage;
