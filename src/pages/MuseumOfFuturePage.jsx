import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaExternalLinkAlt } from 'react-icons/fa';

const MuseumOfFuturePage = () => {
  const funFacts = [
    "Budynek jest uważany za jeden z najbardziej skomplikowanych projektów architektonicznych w historii",
    "Zewnętrzna fasada jest ozdobiona arabską kaligrafią, która świeci w nocy",
    "Muzeum zajmuje powierzchnię 30 000 metrów kwadratowych",
    "Zdobyło tytuł 'Najpiękniejszego Budynku na Świecie'",
    "Budynek reprezentuje wizję przyszłości Dubaju",
    "Arabskie napisy na zewnątrz zawierają inspirujące cytaty o przyszłości"
  ];

  const galleryImages = [
    '/images/museum-future-1.jpg',
    '/images/museum-future-2.jpg',
    '/images/museum-future-3.jpg',
    '/images/museum-future.jpg'
  ];

  const exhibitions = [
    {
      title: "Podróż w Przyszłość",
      description: "Doświadcz życia w roku 2071 poprzez immersyjną technologię i interaktywne eksponaty prezentujące potencjalne scenariusze przyszłości i innowacje."
    },
    {
      title: "Instytut Zdrowia",
      description: "Odkryj przyszłość zdrowia i dobrostanu poprzez terapie cyfrowe, bioinżynierię i rozwiązania medyczne oparte na sztucznej inteligencji."
    },
    {
      title: "Jutro Dzisiaj",
      description: "Zobacz najnowsze innowacje w robotyce, sztucznej inteligencji i zrównoważonych technologiach kształtujących naszą przyszłość."
    }
  ];

  const gyg_link = "https://www.getyourguide.com/dubai-l173/dubai-museum-of-the-future-admission-ticket-t411488/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd-attractionpage";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/museum-future.jpg"
          alt="Muzeum Przyszłości"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Muzeum Przyszłości
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Doświadcz Jutra Już Dziś
            </p>
            {/* Book Tickets Button */}
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
                <span>Zarezerwuj Bilet - Od 145 AED</span>
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
            <h3 className="font-semibold mb-2">Godziny Otwarcia</h3>
            <p className="text-gray-600">10:00 - 18:00</p>
            <p className="text-gray-500 text-sm">Zamknięte w niedziele</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Sheikh Zayed Road</p>
            <p className="text-gray-500 text-sm">Trade Centre 2, Dubaj</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaTicketAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Cena Biletu</h3>
            <p className="text-gray-600">Od 145 AED</p>
            <p className="text-gray-500 text-sm">za osobę</p>
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
          <h2 className="text-2xl font-bold mb-4">O Muzeum Przyszłości</h2>
          <p className="text-gray-600 mb-6">
            Muzeum Przyszłości to architektoniczny cud i unikalne miejsce dla futurystycznych innowacji i designu. 
            To pionierskie muzeum oferuje odwiedzającym immersyjne doświadczenie tego, jak społeczeństwo może ewoluować 
            w nadchodzących dekadach, wykorzystując wszystkie dostępne nowoczesne i przyszłe technologie.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <FaMapMarkerAlt className="text-blue-500" />
            <span className="text-gray-600">
              Sheikh Zayed Road, Trade Centre 2, Dubaj, ZEA
            </span>
          </div>
        </div>

        {/* History */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaHistory className="w-8 h-8 text-blue-500 mr-4" />
            <h2 className="text-2xl font-bold">Historia</h2>
          </div>
          <div className="space-y-4 text-gray-600">
            <p>
              Muzeum Przyszłości zostało otwarte 22 lutego 2022 roku (22/02/2022). Budowa trwała siedem lat, 
              a projekt został stworzony przez architekta Shauna Killę z Killa Design.
            </p>
            <p>
              Unikalny design budynku zawiera arabską kaligrafię na zewnętrznej fasadzie, która służy jako okna 
              i przedstawia inspirujące cytaty o przyszłości napisane przez Szejka Mohammeda bin Rashida Al Maktouma.
            </p>
            <p>
              Muzeum zostało uznane za jeden z najpiękniejszych i najbardziej innowacyjnych budynków na świecie, 
              łącząc elementy wystawy, immersyjnego teatru i tematycznych atrakcji.
            </p>
          </div>
        </div>

        {/* Exhibitions */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Główne Wystawy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {exhibitions.map((exhibition, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-6 rounded-xl shadow-md"
              >
                <h3 className="font-semibold text-xl mb-4">{exhibition.title}</h3>
                <p className="text-gray-600">{exhibition.description}</p>
              </motion.div>
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
                  alt={`Muzeum Przyszłości - ${index + 1}`}
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
            Zarezerwuj bilet do Muzeum Przyszłości
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

export default MuseumOfFuturePage;
