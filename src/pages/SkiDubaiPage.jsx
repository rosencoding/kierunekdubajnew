import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaSnowflake, FaMountain, FaSkiing, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SkiDubaiPage = () => {
  const funFacts = [
    "Pierwszy kryty ośrodek narciarski na Bliskim Wschodzie",
    "Utrzymuje temperaturę od -1°C do -2°C przez cały rok",
    "Posiada 22 500 metrów kwadratowych prawdziwego śniegu",
    "Jest domem dla kolonii pingwinów królewskich i białobrewych",
    "Park śnieżny ma wielkość 3 boisk piłkarskich",
    "Wykorzystuje 6 000 ton świeżego śniegu w ciągu roku"
  ];

  const galleryImages = [
    '/images/ski-dubai-1.jpg',
    '/images/ski-dubai-2.jpg',
    '/images/ski-dubai-3.jpg',
    '/images/ski-dubai.jpg'
  ];

  const attractions = [
    {
      title: <>Park Śnieżny</>,
      description: "Zimowa kraina z górkami do jazdy na sankach, śnieżną jaskinią i interaktywnymi atrakcjami idealnymi dla rodzin."
    },
    {
      title: <>Stoki Narciarskie</>,
      description: "85-metrowa kryta góra z 5 stokami o różnym poziomie trudności, w tym pierwsza na świecie kryta czarna trasa."
    },
    {
      title: <>Spotkanie z Pingwinami</>,
      description: "Spotkaj kolonię pingwinów i poznaj te niesamowite stworzenia podczas kameralnego spotkania."
    },
    {
      title: <>Śnieżne Kino</>,
      description: "Wyjątkowe doświadczenie oglądania filmów w przytulnym, śnieżnym otoczeniu z gorącą czekoladą i przekąskami."
    }
  ];

  const experiences = [
    {
      title: <>Narciarstwo i Snowboard</>,
      description: "Profesjonalne instruktaże dostępne dla wszystkich poziomów zaawansowania, od początkujących po zaawansowanych."
    },
    {
      title: <>Aktywności Snow Plus</>,
      description: "Dostęp do zorbingu, zderzaków śnieżnych, przejażdżek bobslejami i Gigantycznej Kuli."
    },
    {
      title: <>Spotkania z Pingwinami</>,
      description: "Bliskie interakcje z mieszkającymi tu pingwinami, w tym sesje karmienia i możliwości robienia zdjęć."
    },
    {
      title: <>Snow Bullet</>,
      description: "Ekscytująca przejażdżka na tyrolce nad stokami, oferująca wyjątkową perspektywę."
    }
  ];

  const activities = [
    "Naucz się jeździć na nartach lub snowboardzie",
    "Spotkaj się i wchodź w interakcje z pingwinami",
    "Korzystaj z atrakcji Parku Śnieżnego",
    "Wypróbuj tyrolkę Snow Bullet",
    "Weź lekcje narciarstwa z profesjonalistami",
    "Doświadcz śnieżnego zorbingu",
    "Przejedź się wyciągiem krzesełkowym",
    "Odwiedź lodową jaskinię",
    "Obejrzyj film w Śnieżnym Kinie",
    "Delektuj się gorącą czekoladą w kawiarni"
  ];

  const gyg_link = "https://www.getyourguide.com/dubai-l173/ski-dubai-snow-classic-pass-t68175/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/ski-dubai.jpg"
          alt="Ski Dubai"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Ski Dubai
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Zimowa Kraina w Sercu Pustyni
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
                <span>Zarezerwuj Bilety</span>
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
            <p className="text-gray-600">10:00 - 23:00</p>
            <p className="text-gray-500 text-sm">Codziennie</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600"><Link to="/atrakcje/mall-of-emirates">Mall of the Emirates</Link></p>
            <p className="text-gray-500 text-sm">Al Barsha, Dubaj</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaTicketAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Cena Biletu</h3>
            <p className="text-gray-600">Od 200 AED</p>
            <p className="text-gray-500 text-sm">Sprzęt w cenie</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaStar className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.6/5</p>
            <p className="text-gray-500 text-sm">od odwiedzających</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">O Ski Dubai</h2>
          <p className="text-gray-600 mb-6">
            Ski Dubai to pierwszy kryty ośrodek narciarski na Bliskim Wschodzie, oferujący niesamowite śnieżne doświadczenie w sercu pustyni. 
            Ten niesamowity obiekt posiada 22 500 metrów kwadratowych krytego terenu narciarskiego z prawdziwym śniegiem przez cały rok, 
            utrzymując temperaturę od -1°C do -2°C, podczas gdy temperatura na zewnątrz w Dubaju może osiągać 45°C latem.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <FaMapMarkerAlt className="text-blue-500" />
            <span className="text-gray-600">
              <Link to="/atrakcje/mall-of-emirates">Mall of the Emirates</Link>, Sheikh Zayed Road, Al Barsha, Dubaj, ZEA
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

        {/* Experiences */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Śnieżne Doświadczenia</h2>
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
                  alt={`Ski Dubai - ${index + 1}`}
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
            Zarezerwuj bilety do Ski Dubai
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
            data-gyg-tour-ids="505703,49021,49019,411488,587080,714548,129267,123092"
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

export default SkiDubaiPage;
