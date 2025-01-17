import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaMosque, FaBook, FaCamera } from 'react-icons/fa';

const JumeirahMosquePage = () => {
  const funFacts = [
    "Zbudowany w średniowiecznej tradycji Fatymidów z nowoczesnymi akcentami",
    "Jedyny meczet w Dubaju otwarty dla zwiedzających spoza islamu",
    "Może pomieścić do 1,200 wiernych",
    "Znany z programu kulturalnego 'Otwarte Drzwi, Otwarte Umysły'",
    "Posiada kunsztowną kaligrafię islamską i architekturę",
    "Zbudowany całkowicie z białego kamienia w tradycyjnym stylu islamskim"
  ];

  const galleryImages = [
    '/images/jumeirah-mosque-1.jpg',
    '/images/jumeirah-mosque-2.jpg',
    '/images/jumeirah-mosque-3.jpg',
    '/images/jumeirah-mosque.jpg'
  ];

  const attractions = [
    {
      title: "Architektura",
      description: "Piękny biały kamienny meczet zbudowany w średniowiecznej tradycji Fatymidów, z dwoma minaretami i majestatycznymi kopułami."
    },
    {
      title: "Wycieczki Kulturalne",
      description: "Wycieczki z przewodnikiem wyjaśniające kulturę islamską, tradycje i elementy architektoniczne meczetu."
    },
    {
      title: "Sale Modlitewne",
      description: "Zachwycające wnętrze z kunsztowną kaligrafią islamską i tradycyjnymi elementami wzornictwa."
    },
    {
      title: "Centrum Kulturalne",
      description: "Centrum edukacyjne oferujące wgląd w kulturę i tradycje islamskie."
    }
  ];

  const experiences = [
    {
      title: "Wycieczki z Przewodnikiem",
      description: "Dołącz do programu 'Otwarte Drzwi, Otwarte Umysły', aby odbyć pouczającą wycieczkę po meczecie i kulturze islamskiej."
    },
    {
      title: "Sesje Fotograficzne",
      description: "Uchwyć zachwycające detale architektoniczne podczas wyznaczonych godzin fotografowania."
    },
    {
      title: "Nauka o Kulturze",
      description: "Poznaj tradycje islamskie, zwyczaje i rolę meczetów w życiu muzułmanów."
    },
    {
      title: "Sesje Pytań i Odpowiedzi",
      description: "Weź udział w otwartym dialogu o islamie i lokalnej kulturze z kompetentnymi przewodnikami."
    }
  ];

  const activities = [
    "Wycieczki z przewodnikiem",
    "Poznawanie architektury islamskiej",
    "Udział w sesjach Q&A",
    "Fotografowanie meczetu",
    "Doświadczanie wezwań do modlitwy",
    "Uczestnictwo w programach edukacyjnych",
    "Nauka kaligrafii arabskiej",
    "Zwiedzanie centrum kulturalnego",
    "Obserwacja tradycyjnych zwyczajów",
    "Odkrywanie wzornictwa islamskiego"
  ];

  const gyg_link = "https://www.getyourguide.com/dubai-l173/dubai-hop-on-hop-off-sightseeing-bus-tour-t49021/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/jumeirah-mosque.jpg"
          alt="Meczet Jumeirah"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Meczet Jumeirah
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Symbol Architektury Islamskiej i Zrozumienia Kulturowego
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
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg inline-flex items-center space-x-2"
              >
                <FaTicketAlt />
                <span>Zarezerwuj Wycieczkę</span>
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
            <FaClock className="w-8 h-8 text-emerald-500 mb-4" />
            <h3 className="font-semibold mb-2">Godziny Zwiedzania</h3>
            <p className="text-gray-600">Wycieczki kulturalne: 10:00</p>
            <p className="text-gray-500 text-sm">Sobota - Czwartek</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-emerald-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Jumeirah Beach Road</p>
            <p className="text-gray-500 text-sm">Jumeirah 1, Dubaj</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaTicketAlt className="w-8 h-8 text-emerald-500 mb-4" />
            <h3 className="font-semibold mb-2">Cena Wycieczki</h3>
            <p className="text-gray-600">25 AED za osobę</p>
            <p className="text-gray-500 text-sm">Dzieci do lat 12 za darmo</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaStar className="w-8 h-8 text-emerald-500 mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.8/5</p>
            <p className="text-gray-500 text-sm">od zwiedzających</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">O Meczecie Jumeirah</h2>
          <p className="text-gray-600 mb-6">
            Meczet Jumeirah to jedna z najbardziej charakterystycznych budowli Dubaju i symbol architektury islamskiej. Zbudowany w średniowiecznej tradycji Fatymidów, ten piękny meczet stanowi kulturowy most między kulturą islamską a współczesnym światem. Poprzez program 'Otwarte Drzwi, Otwarte Umysły' zaprasza odwiedzających wszystkich wyznań do poznania kultury i tradycji islamskich w spokojnej i przyjaznej atmosferze.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <FaMapMarkerAlt className="text-emerald-500" />
            <span className="text-gray-600">
              Jumeirah Beach Road, Jumeirah 1, Dubaj, Zjednoczone Emiraty Arabskie
            </span>
          </div>
        </div>

        {/* History */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Historia</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-emerald-500 font-semibold">1979</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Początek Budowy</h3>
                <p className="text-gray-600">Rozpoczęcie budowy meczetu w tradycyjnym stylu Fatymidów, z wykorzystaniem nowoczesnych technik budowlanych.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-emerald-500 font-semibold">1998</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Program Kulturalny</h3>
                <p className="text-gray-600">Wprowadzenie programu 'Otwarte Drzwi, Otwarte Umysły', umożliwiającego zwiedzanie meczetu osobom spoza islamu.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-emerald-500 font-semibold">2011</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Renowacja</h3>
                <p className="text-gray-600">Gruntowna renowacja i modernizacja meczetu, zachowująca jego oryginalny charakter przy jednoczesnym dodaniu nowoczesnych udogodnień.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-emerald-500 font-semibold">2019</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Rozwój Programu</h3>
                <p className="text-gray-600">Rozszerzenie programu edukacyjnego o nowe elementy, w tym warsztaty kaligrafii i sztuki islamskiej.</p>
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
                <FaInfoCircle className="text-emerald-500 mt-1 mr-3" />
                <span>{activity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-emerald-50 rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Ciekawostki</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {funFacts.map((fact, index) => (
              <div key={index} className="flex items-start">
                <FaInfoCircle className="text-emerald-500 mt-1 mr-3" />
                <span>{fact}</span>
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
                  alt={`Meczet Jumeirah - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mb-12">
          <a
            href={gyg_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-lg shadow-lg hover:from-emerald-600 hover:to-emerald-500 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Zarezerwuj wycieczkę
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
            data-gyg-tour-ids="49021,68160,68159,68158,68157,411488,587080,714548"
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

export default JumeirahMosquePage;
