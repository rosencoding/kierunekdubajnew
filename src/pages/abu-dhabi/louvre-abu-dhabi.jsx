import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaPalette, FaTicketAlt, FaCamera, FaExternalLinkAlt } from 'react-icons/fa';

const LouvreAbuDhabiPage = () => {
  const funFacts = [
    "Muzeum Luwr Abu Dhabi waży 7 500 ton",
    "Kopuła tworzy efekt 'deszczu światła' inspirowany liśćmi palmowymi",
    "Zawiera 7 850 unikalnych metalowych gwiazd w geometrycznym wzorze",
    "Budynek wydaje się unosić na wodzie",
    "Zajęło 10 lat od pomysłu do ukończenia",
    "Średnica kopuły wynosi 180 metrów"
  ];

  const galleryImages = [
    '/images/louvre-abu-dhabi-1.jpg',
    '/images/louvre-abu-dhabi-2.jpg',
    '/images/louvre-abu-dhabi-3.jpg',
    '/images/louvre-abu-dhabi-4.jpg',
    '/images/louvre-abu-dhabi-5.jpg',
    '/images/louvre-abu-dhabi-6.jpg',
    '/images/louvre-abu-dhabi-7.jpg',
    '/images/louvre-abu-dhabi-8.jpg',
    '/images/louvre-abu-dhabi.jpg'
  ];

  const exhibitions = [
    {
      title: "Galerie Uniwersalne",
      description: "Kronologiczne galerie prezentujące sztukę od czasów prehistorycznych do współczesnych dzieł, podkreślających wspólne ludzkie doświadczenia w różnych cywilizacjach."
    },
    {
      title: "Muzeum Dziecięce",
      description: "Interaktywna przestrzeń zaprojektowana dla młodych zwiedzających w wieku 6-12 lat, oferująca zajęcia praktyczne i edukacyjne eksponaty o sztuce i kulturze."
    },
    {
      title: "Wystawy Tymczasowe",
      description: "Regularne wystawy obrotowe prezentujące międzynarodowe arcydzieła i zbiory tematyczne z muzeów partnerskich na całym świecie."
    }
  ];

  const experiences = [
    {
      title: "Wycieczki z przewodnikiem",
      description: "Wycieczki z przewodnikiem w wielu językach, eksplorujące architekturę muzeum, kolekcje stałe i wystawy specjalne.",
      price: "W cenie biletu wstępu"
    },
    {
      title: "Warsztaty artystyczne",
      description: "Zajęcia praktyczne, podczas których zwiedzający mogą nauczyć się różnych technik artystycznych i stworzyć własne dzieła sztuki.",
      price: "Dodatkowa opłata"
    },
    {
      title: "Wycieczki kajakowe",
      description: "Niepowtarzalna perspektywa architektury muzeum z wody, oferująca wspaniałe możliwości fotograficzne.",
      price: "Od 120 AED"
    }
  ];

  const activities = [
    "Odkryj galerie stałe",
    "Dołącz do wycieczki z przewodnikiem",
    "Odwiedź aktualne wystawy tymczasowe",
    "Wybierz się na wycieczkę kajakową wokół muzeum",
    "Weź udział w warsztacie artystycznym",
    "Zjedz w restauracjach muzealnych",
    "Odwiedź Muzeum Dziecięce",
    "Zakup w sklepie muzealnym",
    "Zfotografuj ikoniczną kopułę"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/louvre-abu-dhabi.jpg"
          alt="Luwr Abu Dhabi"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Luwr Abu Dhabi
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Uniwersalne muzeum łączące sztukę Wschodu i Zachodu
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="https://www.getyourguide.com/abu-dhabi-l494/louvre-abu-dhabi-museum-general-admission-ticket-t543875/?partner_id=19WQ75B&utm_medium=online_publisher"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-500 hover:bg-gold-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg inline-flex items-center space-x-2"
              >
                <FaTicketAlt />
                <span>Kup Bilety</span>
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
            <FaClock className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Godziny Otwarcia</h3>
            <p className="text-gray-600">Wt - Nd: 10:00 - 18:30</p>
            <p className="text-gray-500 text-sm">Zamknięte w poniedziałki</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Cena Wstępu</h3>
            <p className="text-gray-600">Od 63 AED</p>
            <p className="text-gray-500 text-sm">Dzieci do 13 lat: Bezpłatnie</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaStar className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.8/5 od zwiedzających</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Dzielnica Kulturalna Saadiyat</p>
            <p className="text-gray-500 text-sm">Abu Dhabi</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">O Muzeum Luwr Abu Dhabi</h2>
          <p className="text-gray-600 mb-6">
            Luwr Abu Dhabi to pierwsze uniwersalne muzeum w świecie arabskim, które promuje dialog między kulturami. 
            Ten architektoniczny cud zaprojektowany przez Jeana Nouvela oferuje wyjątkowe doświadczenie muzealne, 
            łączące sztukę, architekturę i naturę. Kolekcja muzeum obejmuje całą historię ludzkości, podkreślając 
            wspólne ludzkie doświadczenia w różnych cywilizacjach i kulturach.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <FaMapMarkerAlt className="text-gold-500" />
            <span className="text-gray-600">
              Dzielnica Kulturalna Saadiyat, Wyspa Saadiyat, Abu Dhabi
            </span>
          </div>
        </div>

        {/* Gallery */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">Galeria</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="rounded-xl overflow-hidden h-64"
              >
                <img
                  src={image}
                  alt={`Luwr Abu Dhabi - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Booking Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaExternalLinkAlt className="w-8 h-8 text-gold-500 mr-4" />
            <h2 className="text-3xl font-semibold">Zarezerwuj Wycieczkę</h2>
          </div>
          <div data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
               data-gyg-locale-code="pl-PL" 
               data-gyg-widget="activities" 
               data-gyg-number-of-items="3" 
               data-gyg-partner-id="19WQ75B" 
               data-gyg-tour-ids="652137,543875,129267">
            <span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/dubai-l173/">GetYourGuide</a></span>
          </div>
        </div>

        {/* History Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaHistory className="w-8 h-8 text-gold-500 mr-4" />
            <h2 className="text-3xl font-semibold">Historia</h2>
          </div>
          <div className="space-y-4 text-gray-600">
            <p>
              Projekt Luwr Abu Dhabi został uruchomiony w 2007 roku na podstawie umowy międzyrządowej między Abu Dhabi i Francją. 
              To przełomowe partnerstwo reprezentuje pierwszy raz, kiedy Luwr rozciągnął swoją nazwę poza Paryż.
            </p>
            <p>
              Muzeum zostało zaprojektowane przez laureata Nagrody Pritzkerja, architekta Jeana Nouvela, który został zainspirowany tradycyjnymi elementami architektury arabskiej. 
              Ikoniczna kopuła, arcydzieło inżynierii i sztuki, tworzy efekt "deszczu światła", który stał się synonimem muzeum.
            </p>
            <p>
              Po latach starannego planowania i budowy, Luwr Abu Dhabi otworzył swoje drzwi dla publiczności 11 listopada 2017 roku, 
              oznaczając nowy rozdział we współpracy kulturalnej między narodami.
            </p>
          </div>
        </div>

        {/* Exhibitions Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaPalette className="w-8 h-8 text-gold-500 mr-4" />
            <h2 className="text-3xl font-semibold">Wystawy</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {exhibitions.map((exhibition, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-xl h-full flex flex-col"
              >
                <h3 className="font-semibold text-xl mb-4">{exhibition.title}</h3>
                <p className="text-gray-600 flex-grow">{exhibition.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experiences Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaCamera className="w-8 h-8 text-gold-500 mr-4" />
            <h2 className="text-3xl font-semibold">Doświadczenia Zwiedzających</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-xl h-full flex flex-col"
              >
                <h3 className="font-semibold text-xl mb-4">{experience.title}</h3>
                <p className="text-gray-600 flex-grow">{experience.description}</p>
                <p className="text-sm text-gold-600 mt-4">{experience.price}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Activities Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaCalendarAlt className="w-8 h-8 text-gold-500 mr-4" />
            <h2 className="text-3xl font-semibold">Co Można Robić</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-4 rounded-lg"
              >
                <p className="text-gray-600">• {activity}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaInfoCircle className="w-8 h-8 text-gold-500 mr-4" />
            <h2 className="text-3xl font-semibold">Ciekawostki</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-4 rounded-lg"
              >
                <p className="text-gray-600">• {fact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LouvreAbuDhabiPage;
