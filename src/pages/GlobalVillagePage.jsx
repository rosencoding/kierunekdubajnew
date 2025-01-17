import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaGlobe, FaTheaterMasks, FaStore } from 'react-icons/fa';

const GlobalVillagePage = () => {
  const funFacts = [
    "Ponad 3,500 punktów handlowych z ponad 78 krajów",
    "Ponad 200 restauracji i stoisk z jedzeniem",
    "Ponad 7 milionów odwiedzających w sezonie",
    "Największa sezonowa ekstrawagancja kulturalna w regionie",
    "Oferuje ponad 40,000 pokazów na żywo w sezonie",
    "Największa koncepcja street food w regionie"
  ];

  const galleryImages = [
    '/images/global-village-1.jpg',
    '/images/global-village-2.jpg',
    '/images/global-village-3.jpg',
    '/images/global-village.jpg'
  ];

  const attractions = [
    {
      title: "Pawilony Kulturowe",
      description: "Ponad 26 pawilonów reprezentujących różne kraje i kultury, prezentujących tradycyjne produkty i doświadczenia."
    },
    {
      title: "Karnaval",
      description: "Pełna rozrywki strefa z atrakcjami, grami i rozrywkami dla wszystkich grup wiekowych."
    },
    {
      title: "Ripley's Believe It or Not!®",
      description: "Muzeum prezentujące unikalne eksponaty i osobliwości z całego świata."
    },
    {
      title: "Główna Scena Kulturalna",
      description: "Miejsce spektakularnych występów, koncertów i pokazów kulturalnych przez cały sezon."
    }
  ];

  const experiences = [
    {
      title: "Zakupy ze Świata",
      description: "Kupuj autentyczne produkty z różnych krajów, od tradycyjnego rękodzieła po nowoczesne towary."
    },
    {
      title: "Globalna Kuchnia",
      description: "Doświadcz różnorodnych kuchni z całego świata w licznych restauracjach i stoiskach z jedzeniem."
    },
    {
      title: "Pokazy Kulturalne",
      description: "Oglądaj tradycyjne występy, parady i rozrywkę z różnych kultur."
    },
    {
      title: "Rozrywka Rodzinna",
      description: "Korzystaj z atrakcji, gier i specjalnych wydarzeń odpowiednich dla wszystkich członków rodziny."
    }
  ];

  const activities = [
    "Zwiedzanie pawilonów krajowych",
    "Oglądanie występów kulturalnych",
    "Próbowanie międzynarodowych kuchni",
    "Korzystanie z atrakcji karnawałowych",
    "Zakupy produktów z całego świata",
    "Oglądanie pokazów fajerwerków",
    "Wizyta w Muzeum Ripleya",
    "Robienie zdjęć kulturowych",
    "Oglądanie występów ulicznych",
    "Uczestnictwo w wydarzeniach tematycznych"
  ];

  const gyg_link = "https://www.getyourguide.com/dubai-l173/dubai-global-village-entry-ticket-t553170/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/global-village.jpg"
          alt="Global Village Dubai"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Global Village w Dubaju
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Gdzie Świat Spotyka się w Jednym Miejscu
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
                className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg inline-flex items-center space-x-2"
              >
                <FaTicketAlt />
                <span>Kup Bilety Online</span>
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
            <FaClock className="w-8 h-8 text-purple-500 mb-4" />
            <h3 className="font-semibold mb-2">Godziny Otwarcia</h3>
            <p className="text-gray-600">16:00 - 24:00</p>
            <p className="text-gray-500 text-sm">Niedziela - Środa</p>
            <p className="text-gray-600">16:00 - 1:00</p>
            <p className="text-gray-500 text-sm">Czwartek - Sobota</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-purple-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Sheikh Mohammed Bin Zayed Road</p>
            <p className="text-gray-500 text-sm">Dubaj</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaTicketAlt className="w-8 h-8 text-purple-500 mb-4" />
            <h3 className="font-semibold mb-2">Cena Biletu</h3>
            <p className="text-gray-600">Od 20 AED</p>
            <p className="text-gray-500 text-sm">Dzieci do lat 3 za darmo</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaStar className="w-8 h-8 text-purple-500 mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.7/5</p>
            <p className="text-gray-500 text-sm">od odwiedzających</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">O Global Village</h2>
          <p className="text-gray-600 mb-6">
            Global Village to wiodąca wielokulturowa destynacja rodzinna w Dubaju, łącząca kulturę, zakupy i rozrywkę. Każdego sezonu to wyjątkowe miejsce gromadzi kioski, stoiska z jedzeniem, sklepy i rozrywkę z całego świata. Global Village zabiera gości w podróż dookoła świata poprzez swoje pawilony krajowe, prezentując najlepsze oferty kulturalne z ponad 78 krajów.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <FaMapMarkerAlt className="text-purple-500" />
            <span className="text-gray-600">
              Sheikh Mohammed Bin Zayed Road, Dubaj, Zjednoczone Emiraty Arabskie
            </span>
          </div>
        </div>

        {/* History */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Historia</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-purple-500 font-semibold">1996</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Początki</h3>
                <p className="text-gray-600">Otwarcie pierwszej edycji Global Village jako małego karnawału kulturalnego w Dubai Creek.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-purple-500 font-semibold">2005</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Nowa Lokalizacja</h3>
                <p className="text-gray-600">Przeniesienie do obecnej lokalizacji przy Sheikh Mohammed Bin Zayed Road, znaczne rozszerzenie oferty.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-purple-500 font-semibold">2016</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">20-lecie</h3>
                <p className="text-gray-600">Świętowanie 20 lat działalności, wprowadzenie nowych atrakcji i rozrywek.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-purple-500 font-semibold">2023</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Rozwój</h3>
                <p className="text-gray-600">Wprowadzenie nowych technologii i innowacji, w tym aplikacji mobilnej i systemu płatności cyfrowych.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Attractions */}
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

        {/* Experiences */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Doświadczenia Kulturalne</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-6 rounded-xl shadow-md"
              >
                <h3 className="font-semibold text-xl mb-4">{experience.title}</h3>
                <p className="text-gray-600">{experience.description}</p>
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
                <FaInfoCircle className="text-purple-500 mt-1 mr-3" />
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
                  alt={`Global Village - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-purple-50 rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Ciekawostki</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {funFacts.map((fact, index) => (
              <div key={index} className="flex items-start">
                <FaInfoCircle className="text-purple-500 mt-1 mr-3" />
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
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-purple-400 rounded-lg shadow-lg hover:from-purple-600 hover:to-purple-500 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Kup bilety online
            <FaTicketAlt className="ml-2" />
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
            data-gyg-tour-ids="553170,68160,68159,68158,68157,411488,587080,714548"
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

export default GlobalVillagePage;
