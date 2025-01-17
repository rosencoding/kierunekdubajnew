import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaGem, FaShoppingBag, FaCoins } from 'react-icons/fa';

const GoldSoukPage = () => {
  const funFacts = [
    "Gold Souk ma ponad 380 sklepów",
    "Dubaj jest znany jako 'Miasto Złota' częściowo dzięki temu targowisku",
    "Około 20% światowego złota przechodzi przez Dubaj",
    "W souku znajduje się największy złoty pierścień na świecie - 'Najmat Taiba'",
    "Całe złoto sprzedawane w souku jest regulowane przez rząd Dubaju",
    "Targ działa od lat 1900-tych"
  ];

  const galleryImages = [
    '/images/gold-souk-1.jpg',
    '/images/gold-souk-2.jpg',
    '/images/gold-souk-3.jpg',
    '/images/gold-souk-4.jpg',
    '/images/gold-souk-5.jpg',
    '/images/gold-souk.jpg'
  ];

  const attractions = [
    {
      title: "Sklepy ze Złotą Biżuterią",
      description: "Setki sklepów prezentujących oszałamiającą złotą biżuterię, od tradycyjnych arabskich wzorów po nowoczesne międzynarodowe style."
    },
    {
      title: "Dzielnica Diamentów",
      description: "Sekcja poświęcona biżuterii z diamentami i kamieniami szlachetnymi, oferująca certyfikowane klejnoty z całego świata."
    },
    {
      title: "Tradycyjna Architektura",
      description: "Historyczna arabska architektura z wieżami wiatrowymi i wąskimi uliczkami tworzącymi autentyczną atmosferę targowiska."
    },
    {
      title: "Doświadczenie Targowania",
      description: "Tradycyjna bliskowschodnia kultura targowania, gdzie negocjowanie cen jest częścią doświadczenia zakupowego."
    }
  ];

  const experiences = [
    {
      title: "Zakupy Złota",
      description: "Przeglądaj i kupuj z największego na świecie wyboru złotej biżuterii w konkurencyjnych cenach."
    },
    {
      title: "Doświadczenie Kulturowe",
      description: "Zanurz się w tradycyjnej arabskiej kulturze targowej i praktykach zakupowych."
    },
    {
      title: "Tworzenie Biżuterii",
      description: "Obserwuj wykwalifikowanych rzemieślników tworzących na zamówienie biżuterię przy użyciu tradycyjnych i nowoczesnych technik."
    },
    {
      title: "Wycieczki po Targu",
      description: "Wycieczki z przewodnikiem wyjaśniające historię, kulturę i praktyki słynnego dubajskiego handlu złotem."
    }
  ];

  const activities = [
    "Zakupy złotej biżuterii",
    "Obserwowanie tworzenia biżuterii",
    "Targowanie się z kupcami",
    "Wizyta w sklepach z diamentami",
    "Robienie zdjęć ekspozycji",
    "Nauka o jakości złota",
    "Poznawanie lokalnej kultury",
    "Zakup kamieni szlachetnych",
    "Porównywanie cen złota",
    "Zamawianie biżuterii na wymiar"
  ];

  const gyg_link = "https://www.getyourguide.com/dubai-l173/dubai-explore-old-dubai-souks-creek-and-street-food-t506774/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/gold-souk.jpg"
          alt="Dubai Gold Souk"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Gold Souk w Dubaju
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Największy Targ Złota na Świecie
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
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg inline-flex items-center space-x-2"
              >
                <FaTicketAlt />
                <span>Zarezerwuj Wycieczkę z Przewodnikiem</span>
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
            <FaClock className="w-8 h-8 text-yellow-500 mb-4" />
            <h3 className="font-semibold mb-2">Godziny Otwarcia</h3>
            <p className="text-gray-600">10:00 - 22:00</p>
            <p className="text-gray-500 text-sm">Codziennie</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-yellow-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">54 Al Khor Street</p>
            <p className="text-gray-500 text-sm">Deira, Dubaj</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaCoins className="w-8 h-8 text-yellow-500 mb-4" />
            <h3 className="font-semibold mb-2">Ceny Złota</h3>
            <p className="text-gray-600">Aktualizowane codziennie</p>
            <p className="text-gray-500 text-sm">Regulowane przez rząd</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaStar className="w-8 h-8 text-yellow-500 mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.6/5</p>
            <p className="text-gray-500 text-sm">od odwiedzających</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">O Gold Souk</h2>
          <p className="text-gray-600 mb-6">
            Gold Souk w Dubaju to jeden z najstarszych i najbardziej fascynujących tradycyjnych targów w Dubaju. Znajdujący się w dzielnicy <a href="/dzielnice#deira" className="text-blue-500 hover:text-blue-600 font-medium">Deira</a>, jest główną atrakcją turystyczną i centrum handlowym, w którym mieści się ponad 380 sprzedawców, głównie handlarzy biżuterią. Znany z jednych z najniższych cen na świecie i szerokiego wyboru wzorów, Gold Souk jest obowiązkowym punktem programu zarówno dla miłośników biżuterii, jak i odkrywców kultury.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <FaMapMarkerAlt className="text-yellow-500" />
            <span className="text-gray-600">
              54 Al Khor Street, Deira, Dubaj, Zjednoczone Emiraty Arabskie
            </span>
          </div>
        </div>

        {/* History */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Historia</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-yellow-500 font-semibold">1900</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Początki Targu</h3>
                <p className="text-gray-600">Powstanie pierwszych sklepów z biżuterią w dzielnicy Deira, gdzie lokalni handlarze rozpoczęli sprzedaż złota i biżuterii.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-yellow-500 font-semibold">1950</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Rozwój Handlu</h3>
                <p className="text-gray-600">Znaczący rozwój handlu złotem w Dubaju, przyciągający kupców z całego regionu Zatoki Perskiej.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-yellow-500 font-semibold">1970</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Złoty Boom</h3>
                <p className="text-gray-600">Okres intensywnego rozwoju po odkryciu ropy naftowej, przekształcenie w główne centrum handlu złotem na Bliskim Wschodzie.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-yellow-500 font-semibold">2000</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Modernizacja</h3>
                <p className="text-gray-600">Wprowadzenie nowoczesnych standardów handlu i certyfikacji, zachowując jednocześnie tradycyjny charakter targu.</p>
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
          <h2 className="text-2xl font-bold mb-6">Doświadczenia na Targu</h2>
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
                <FaInfoCircle className="text-yellow-500 mt-1 mr-3" />
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
                  alt={`Gold Souk - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-yellow-50 rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Ciekawostki</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {funFacts.map((fact, index) => (
              <div key={index} className="flex items-start">
                <FaInfoCircle className="text-yellow-500 mt-1 mr-3" />
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
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-lg shadow-lg hover:from-yellow-600 hover:to-yellow-500 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Zarezerwuj wycieczkę z przewodnikiem
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
            data-gyg-tour-ids="68160,68159,68158,68157,411488,587080,714548,129267"
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

export default GoldSoukPage;
