import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaCamera, FaMosque, FaUserFriends, FaExternalLinkAlt, FaTicketAlt } from 'react-icons/fa';

const SheikhZayedMosquePage = () => {
  const funFacts = [
    "Meczet może pomieścić ponad 40 000 wiernych",
    "Posiada największy ręcznie tkany dywan na świecie",
    "Ma 82 kopuły zdobione białym marmurem",
    "Posiada 7 kryształowych żyrandoli zdobionych milionami kryształów Swarovskiego",
    "Główna sala modlitewna posiada największy żyrandol na świecie",
    "Baseny refleksyjne tworzą zachwycające lustrzane efekty"
  ];

  const galleryImages = [
    '/images/sheikh-zayed-mosque-1.jpg',
    '/images/sheikh-zayed-mosque-2.jpg',
    '/images/sheikh-zayed-mosque-3.jpg',
    '/images/sheikh-zayed-mosque-4.jpg',
    '/images/sheikh-zayed-mosque-5.jpg',
    '/images/sheikh-zayed-mosque-6.jpg',
    '/images/sheikh-zayed-mosque-7.jpg',
    '/images/sheikh-zayed-mosque-8.jpg',
    '/images/sheikh-zayed-mosque.jpg'
  ];

  const attractions = [
    {
      title: "Główna Sala Modlitewna",
      description: "Oszałamiająca główna sala modlitewna posiada największy ręcznie tkany dywan na świecie i wspaniałe żyrandole. Dywan powstawał dwa lata i został zaprojektowany przez irańskich artystów."
    },
    {
      title: "Dziedziniec",
      description: "Największy na świecie dziedziniec z mozaiki marmurowej, ozdobiony skomplikowanymi wzorami kwiatowymi wykonanymi z półszlachetnych kamieni. Baseny refleksyjne tworzą zachwycające lustrzane odbicia meczetu."
    },
    {
      title: "Kolumny i Kopuły",
      description: "82 białe marmurowe kopuły zdobione czystym białym marmurem i złoto-szklaną mozaiką. Kolumny posiadają unikalne marmurowe wykończenie z inkrustacją z masy perłowej."
    }
  ];

  const experiences = [
    {
      title: "Wycieczki Kulturalne",
      description: "Bezpłatne wycieczki z przewodnikiem oferujące wgląd w architekturę islamską, kulturę i tradycje. Wycieczki dostępne w wielu językach przez cały dzień."
    },
    {
      title: "Sesje Fotograficzne",
      description: "Specjalne sesje fotograficzne podczas wschodu i zachodu słońca, gdy biały marmur meczetu przybiera złote i niebieskie odcienie. Idealne do wykonywania zapierających dech w piersiach zdjęć."
    },
    {
      title: "Pokaz Świetlny",
      description: "Spektakularny pokaz iluminacji, który przemienia białą marmurową fasadę meczetu różnymi fazami księżyca, tworząc hipnotyzujący spektakl."
    }
  ];

  const activities = [
    "Weź udział w wycieczce z przewodnikiem",
    "Odwiedź meczet podczas zachodu słońca",
    "Zwiedzaj główną salę modlitewną",
    "Spaceruj po wielkim dziedzińcu",
    "Zobacz pokaz iluminacji",
    "Odwiedź centrum dla zwiedzających",
    "Poznaj architekturę islamską",
    "Podziwiaj baseny refleksyjne"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/sheikh-zayed-mosque.jpg"
          alt="Wielki Meczet Szejka Zayeda"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Wielki Meczet Szejka Zayeda
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Arcydzieło Architektury i Symbol Kultury
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://www.getyourguide.com/dubai-l173/from-dubai-abu-dhabi-city-sightseeing-tour-t60673/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd', '_blank')}
              className="bg-gold-500 hover:bg-gold-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg inline-flex items-center space-x-2"
            >
              <FaTicketAlt />
              <span>Zarezerwuj Wycieczkę</span>
            </motion.button>
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
            <p className="text-gray-600">Sob - Czw: 9:00 - 22:00</p>
            <p className="text-gray-500 text-sm">Piątek: 15:00 - 22:00</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Wstęp</h3>
            <p className="text-gray-600">Wstęp Bezpłatny</p>
            <p className="text-gray-500 text-sm">Dostępne Wycieczki z Przewodnikiem</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaStar className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.9/5 od odwiedzających</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Sheikh Rashid Bin Saeed Street</p>
            <p className="text-gray-500 text-sm">Abu Dhabi</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">O Wielkim Meczecie Szejka Zayeda</h2>
          <p className="text-gray-600 mb-6">
            Wielki Meczet Szejka Zayeda jest jednym z największych meczetów na świecie i arcydziełem architektury, które pięknie łączy islamską architekturę i design. Posiadający 82 kopuły, ponad 1000 kolumn, żyrandole pozłacane 24-karatowym złotem i największy ręcznie tkany dywan na świecie, meczet jest wspaniałym hołdem dla muzułmańskiej sztuki i rzemiosła.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <FaMapMarkerAlt className="text-gold-500" />
            <span className="text-gray-600">
              Sheikh Rashid Bin Saeed Street, Abu Dhabi, ZEA
            </span>
          </div>
        </div>

        {/* Zarezerwuj Wycieczkę */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Zarezerwuj Wycieczkę</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div 
              data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
              data-gyg-locale-code="pl-PL" 
              data-gyg-widget="activities" 
              data-gyg-number-of-items="3" 
              data-gyg-cmp="kd-attracion" 
              data-gyg-partner-id="19WQ75B" 
              data-gyg-tour-ids="60673,237897,333786"
            >
              <span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/dubai-l173/">GetYourGuide</a></span>
            </div>
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
                  alt={`Wielki Meczet Szejka Zayeda - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Main Attractions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Główne Atrakcje</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{attraction.title}</h3>
                <p className="text-gray-600">{attraction.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experiences */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Dostępne Doświadczenia</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiences.map((experience, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                <p className="text-gray-600">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Co Można Robić</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <FaInfoCircle className="text-gold-500 mt-1" />
                  <p className="text-gray-600">{activity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Ciekawostki</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {funFacts.map((fact, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <FaInfoCircle className="text-gold-500 mt-1" />
                  <p className="text-gray-600">{fact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SheikhZayedMosquePage;
