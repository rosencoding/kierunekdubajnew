import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaBuilding, FaCamera, FaGlassCheers } from 'react-icons/fa';

const DubaiFramePage = () => {
  const funFacts = [
    "Dubai Frame ma dokładnie 150 metrów wysokości i 93 metry szerokości",
    "Konstrukcja wykonana jest ze szkła, stali, aluminium i zbrojonego betonu",
    "Posiada szklany most o powierzchni 93 metrów kwadratowych z krystalicznie czystym widokiem w dół",
    "Otrzymała rekord Guinnessa jako największa rama na świecie",
    "Zewnętrzna część jest ozdobiona złotymi motywami inspirowanymi Expo 2020",
    "Wykorzystuje najnowocześniejszą technologię rozszerzonej rzeczywistości w swoich wystawach"
  ];

  const galleryImages = [
    '/images/dubai-frame-1.jpg',
    '/images/dubai-frame-2.jpg',
    '/images/dubai-frame-3.jpg',
    '/images/dubai-frame.jpg'
  ];

  const attractions = [
    {
      title: "Szklany Most",
      description: "Spacer po przezroczystej szklanej kładce 150 metrów nad ziemią, oferujący zapierające dech w piersiach widoki na stary i nowy Dubaj."
    },
    {
      title: "Galeria Przeszłości",
      description: "Interaktywna wystawa przedstawiająca transformację Dubaju z wioski rybackiej w nowoczesną metropolię poprzez prezentacje multimedialne."
    },
    {
      title: "Dubaj Przyszłości",
      description: "Immersyjne doświadczenie pokazujące wizję przyszłości Dubaju poprzez rozszerzoną rzeczywistość i interaktywne projekcje."
    }
  ];

  const experiences = [
    {
      title: "Taras Widokowy",
      description: "360-stopniowe widoki na miasto ze szklanego mostu, ze starym Dubajem na północy i nowym Dubajem na południu."
    },
    {
      title: "Rozszerzona Rzeczywistość",
      description: "Interaktywne ekrany i wyświetlacze cyfrowe, które ożywiają przeszłość, teraźniejszość i przyszłość Dubaju."
    },
    {
      title: "Efekty Mgły",
      description: "Specjalne efekty na szklanym moście tworzące wyjątkową atmosferę i okazje do zdjęć."
    },
    {
      title: "Sky Deck Café",
      description: "Możliwość wypicia kawy z panoramicznym widokiem na miasto ze szczytu Frame."
    }
  ];

  const activities = [
    "Spacer po szklanym moście z ekscytującymi widokami",
    "Poznanie historii Dubaju w Galerii Przeszłości",
    "Doświadczenie przyszłości Dubaju przez technologię AR",
    "Zdjęcia z panoramą starego i nowego Dubaju",
    "Przerwa na kawę w Sky Deck Café",
    "Wizyta w otaczającym Frame Parku Zabeel",
    "Podziwianie złotej iluminacji Frame o zachodzie słońca",
    "Wykorzystanie możliwości zdjęć w rozszerzonej rzeczywistości",
    "Zakupy pamiątek w sklepie z upominkami"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/dubai-frame.jpg"
          alt="Dubai Frame"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Dubai Frame
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Okno między starym a nowym Dubajem
            </p>
            {/* Book Tickets Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="https://www.getyourguide.com/dubai-l173/dubai-entry-ticket-to-the-dubai-frame-with-deck-access-t714548/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd-attractionpage"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg inline-flex items-center space-x-2"
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
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaClock className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Godziny Otwarcia</h3>
            <p className="text-gray-600">9:00 - 21:00</p>
            <p className="text-gray-500 text-sm">Codziennie</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Park Zabeel</p>
            <p className="text-gray-500 text-sm">Za'abeel, Dubaj</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Ceny Biletów</h3>
            <p className="text-gray-600">50 AED - dorośli</p>
            <p className="text-gray-500 text-sm">20 AED - dzieci</p>
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
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">O Dubai Frame</h2>
          <p className="text-gray-600 mb-6">
            Dubai Frame to architektoniczny punkt orientacyjny, który dosłownie obramowuje panoramę miasta, oferując wyjątkową perspektywę starego i nowego Dubaju. Mająca 150 metrów wysokości złota konstrukcja posiada szklany most łączący dwie wieże, oferujący zapierające dech w piersiach widoki i immersyjne doświadczenie przeszłości, teraźniejszości i przyszłości Dubaju.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <FaMapMarkerAlt className="text-blue-500" />
            <span className="text-gray-600">
              Park Zabeel, Za'abeel, Dubaj, ZEA
            </span>
          </div>
        </div>

        {/* History Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaHistory className="w-8 h-8 text-blue-500 mr-4" />
            <h2 className="text-3xl font-semibold">Historia</h2>
          </div>
          <div className="space-y-4 text-gray-600">
            <p>
              Projekt Dubai Frame został zapoczątkowany w 2013 roku jako część inicjatywy mającej na celu stworzenie nowych punktów orientacyjnych, które przyciągnęłyby 20 milionów odwiedzających rocznie do Dubaju do 2020 roku. Projekt został wybrany w międzynarodowym konkursie zorganizowanym przez Dubai Municipality.
            </p>
            <p>
              Budowa rozpoczęła się w 2013 roku i została ukończona pod koniec 2017 roku, a oficjalne otwarcie nastąpiło w styczniu 2018 roku. Konstrukcja została zaprojektowana tak, aby symbolizować metaforyczne połączenie starego i nowego miasta, dosłownie obramowując każdą stronę Dubaju w złotym prostokącie.
            </p>
            <p>
              Wyjątkowy projekt Frame zdobył liczne wyróżnienia, w tym rekord Guinnessa dla największej ramy na świecie. Jej zewnętrzna część jest ozdobiona złotymi motywami inspirowanymi logo Expo 2020, co czyni ją oszałamiającym dodatkiem do panoramy Dubaju.
            </p>
          </div>
        </div>

        {/* Attractions Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaBuilding className="w-8 h-8 text-blue-500 mr-4" />
            <h2 className="text-3xl font-semibold">Główne Atrakcje</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-xl h-full flex flex-col"
              >
                <h3 className="font-semibold text-xl mb-4">{attraction.title}</h3>
                <p className="text-gray-600 flex-grow">{attraction.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experiences Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaGlassCheers className="w-8 h-8 text-blue-500 mr-4" />
            <h2 className="text-3xl font-semibold">Doświadczenia</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h3 className="font-semibold text-xl mb-4">{experience.title}</h3>
                <p className="text-gray-600">{experience.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Activities Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaCamera className="w-8 h-8 text-blue-500 mr-4" />
            <h2 className="text-3xl font-semibold">Co Można Robić</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex items-start space-x-3"
              >
                <FaInfoCircle className="text-blue-500 mt-1" />
                <span className="text-gray-600">{activity}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-blue-50 rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaStar className="w-8 h-8 text-blue-500 mr-4" />
            <h2 className="text-3xl font-semibold">Ciekawostki</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <p className="text-gray-600">{fact}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-3xl font-semibold mb-6">Galeria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={image}
                  alt={`Dubai Frame ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DubaiFramePage;
