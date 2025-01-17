import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaUmbrella, FaSwimmer, FaWater, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const JumeirahBeachPage = () => {
  const funFacts = [
    "Plaża Jumeirah oferuje zapierające dech w piersiach widoki na ikoniczny Burj Al Arab",
    "Plaża rozciąga się na długości ponad 14 kilometrów nieskazitelnie białego piasku",
    "To jedna z niewielu plaż w Dubaju z bezpłatnym dostępem publicznym",
    "Temperatura wody osiąga średnio 28°C latem",
    "Plaża otrzymała certyfikat Błękitnej Flagi za czystość",
    "Miejsce różnorodnych sportów wodnych i klubów plażowych"
  ];

  const galleryImages = [
    '/images/jumeirah-beach-1.jpg',
    '/images/jumeirah-beach-2.jpg',
    '/images/jumeirah-beach-3.jpg',
    '/images/jumeirah-beach-4.jpg',
    '/images/jumeirah-beach-5.jpg',
    '/images/jumeirah-beach.jpg'
  ];

  const attractions = [
    {
      title: "Widoki na Burj Al Arab",
      description: "Idealne miejsce do fotografowania ikonicznego hotelu w kształcie żagla, szczególnie podczas zachodu słońca."
    },
    {
      title: "Aktywności na Plaży",
      description: "Szeroki wybór aktywności, w tym boiska do siatkówki, ścieżki do biegania i place zabaw dla dzieci."
    },
    {
      title: "Sporty Wodne",
      description: "Różnorodne sporty wodne, w tym skutery wodne, parasailing i paddleboarding."
    },
    {
      title: "Kluby Plażowe",
      description: "Dostęp do ekskluzywnych klubów plażowych oferujących najwyższej klasy udogodnienia i opcje gastronomiczne."
    }
  ];

  const experiences = [
    {
      title: "Zachody Słońca",
      description: "Podziwiaj zachód słońca za Burj Al Arab, relaksując się na nieskazitelnej plaży."
    },
    {
      title: "Sporty Wodne",
      description: "Spróbuj ekscytujących aktywności wodnych od skuterów wodnych po paddleboarding w krystalicznie czystej wodzie."
    },
    {
      title: "Jedzenie na Plaży",
      description: "Korzystaj z kawiarni i restauracji na plaży serwujących międzynarodową kuchnię z widokiem na ocean."
    },
    {
      title: "Atrakcje Rodzinne",
      description: "Przyjazne rodzinom otoczenie z placami zabaw, płytką wodą i nadzorem ratowników."
    }
  ];

  const activities = [
    "Pływanie w krystalicznie czystej Zatoce Arabskiej",
    "Zdjęcia z Burj Al Arab w tle",
    "Sporty wodne",
    "Spacer wzdłuż promenady",
    "Wizyta w klubach plażowych",
    "Siatkówka plażowa",
    "Piknik na plaży",
    "Podziwianie zachodu słońca",
    "Jogging na ścieżce biegowej",
    "Odwiedzanie pobliskich kawiarni i restauracji"
  ];

  const gyg_link = "https://www.getyourguide.com/dubai-l173/dubai-water-sports-experience-at-jumeirah-beach-t389750/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd-attractionpage";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/jumeirah-beach.jpg"
          alt="Plaża Jumeirah"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Plaża Jumeirah
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Najlepsza Publiczna Plaża w Dubaju z Ikonicznymi Widokami
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
                <span>Zarezerwuj Sporty Wodne</span>
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
            <p className="text-gray-600">Od wschodu do zachodu słońca</p>
            <p className="text-gray-500 text-sm">Codziennie</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Lokalizacja</h3>
            <p className="text-gray-600">Jumeirah Beach Road</p>
            <p className="text-gray-500 text-sm">Jumeirah, Dubaj</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaTicketAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Wstęp</h3>
            <p className="text-gray-600">Bezpłatny wstęp</p>
            <p className="text-gray-500 text-sm">Sporty wodne płatne extra</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaStar className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.7/5</p>
            <p className="text-gray-500 text-sm">od odwiedzających</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">O Plaży Jumeirah</h2>
          <p className="text-gray-600 mb-6">
            Plaża Jumeirah to jedna z najpopularniejszych publicznych plaż w Dubaju, oferująca nieskazitelnie biały piasek, krystalicznie czystą wodę i zapierające dech w piersiach widoki na ikoniczny <Link to="/atrakcje/burj-al-arab" className="text-blue-600 hover:text-blue-800">Burj Al Arab</Link>. To przyjazne rodzinom miejsce rozciąga się wzdłuż wybrzeża Dubaju, zapewniając odwiedzającym doskonałą infrastrukturę, sporty wodne i opcje gastronomiczne przy plaży.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <FaMapMarkerAlt className="text-blue-500" />
            <span className="text-gray-600">
              Jumeirah Beach Road, Dubaj, ZEA
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
                  alt={`Plaża Jumeirah - ${index + 1}`}
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
            Zarezerwuj sporty wodne na plaży Jumeirah
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

export default JumeirahBeachPage;
