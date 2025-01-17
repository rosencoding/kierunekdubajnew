import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaBus, FaParking, FaWheelchair, FaCamera, FaBinoculars, FaDove, FaLeaf } from 'react-icons/fa';

const RasAlKhorPage = () => {
  const funFacts = [
    "Dom dla ponad 20 000 ptaków w szczycie sezonu",
    "Pierwsze mokradła Ramsar w Dubaju",
    "Obejmuje 620 hektarów chronionego obszaru",
    "Słynie z populacji flamingów",
    "Zarejestrowano ponad 180 gatunków ptaków",
    "Ważny przystanek na trasie migracji ptaków",
    "Posiada lasy namorzynowe",
    "Kluczowy ekosystem dla życia morskiego"
  ];

  const galleryImages = [
    '/images/ras-al-khor-1.jpg',
    '/images/ras-al-khor-2.jpg',
    '/images/ras-al-khor-3.jpg',
    '/images/ras-al-khor-4.jpg',
    '/images/ras-al-khor-5.jpg',
    '/images/ras-al-khor-6.jpg'
  ];

  const mainAttractions = [
    {
      title: "Punkt Obserwacji Flamingów",
      description: "Główne miejsce do obserwacji słynnej populacji flamingów w rezerwacie, szczególnie w miesiącach zimowych."
    },
    {
      title: "Las Namorzynowy",
      description: "Chroniony ekosystem namorzynowy stanowiący kluczowe siedlisko dla różnych gatunków ptaków i życia morskiego."
    },
    {
      title: "Platformy Obserwacyjne",
      description: "Trzy specjalistyczne kryjówki oferujące różne kąty widzenia i możliwości obserwacji dzikiej przyrody."
    },
    {
      title: "Centrum Informacyjne",
      description: "Obiekt edukacyjny dostarczający informacji o ekosystemie mokradeł i jego mieszkańcach."
    },
    {
      title: "Strefa Ptaków Brodzących",
      description: "Płytkie strefy wodne, gdzie można obserwować różne ptaki brodzące podczas żerowania i gniazdowania."
    },
    {
      title: "Punkty Fotograficzne",
      description: "Wyznaczone miejsca dla fotografów do uchwycenia dzikiej przyrody w jej naturalnym środowisku."
    }
  ];

  const practicalInfo = [
    {
      icon: <FaBus className="text-2xl text-gold-500" />,
      title: "Jak Dojechać",
      details: "Znajduje się we wschodnim Dubaju. Dostępne samochodem lub taksówką. Najbliższa stacja metra to Healthcare City, następnie krótka przejażdżka taksówką."
    },
    {
      icon: <FaParking className="text-2xl text-gold-500" />,
      title: "Parking",
      details: "Bezpłatny parking dostępny przy wszystkich trzech punktach obserwacyjnych. Ograniczona liczba miejsc w szczycie sezonu."
    },
    {
      icon: <FaWheelchair className="text-2xl text-gold-500" />,
      title: "Dostępność",
      details: "Punkty obserwacyjne dostępne dla wózków inwalidzkich. Utwardzone ścieżki do głównych punktów widokowych."
    },
    {
      icon: <FaCamera className="text-2xl text-gold-500" />,
      title: "Fotografia",
      details: "Fotografowanie dozwolone. Zalecane obiektywy teleobiektywowe. Zakaz używania dronów."
    }
  ];

  const history = [
    {
      year: "1985",
      event: "Początkowa ochrona obszaru mokradeł"
    },
    {
      year: "1998",
      event: "Oficjalne wyznaczenie jako rezerwat przyrody"
    },
    {
      year: "2003",
      event: "Budowa pierwszego punktu obserwacyjnego"
    },
    {
      year: "2007",
      event: "Uznanie za obszar Ramsar"
    },
    {
      year: "2015",
      event: "Wdrożenie wzmocnionych środków ochrony"
    },
    {
      year: "2020",
      event: "Dodanie nowych obiektów edukacyjnych"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/ras-al-khor.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Rezerwat Przyrody Ras Al Khor</h1>
            <p className="text-xl mb-8">Miejski Raj Dzikiej Przyrody w Dubaju</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
              onClick={() => window.open('https://www.getyourguide.com/dubai-l173/ras-al-khor-wildlife-sanctuary-with-dubai-city-tour-t461408/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd', '_blank')}
            >
              Zarezerwuj Wycieczkę
            </motion.button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaClock className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Godziny Otwarcia</h3>
            <p className="text-gray-600">9:00 - 16:00</p>
            <p className="text-gray-500 text-sm">Zamknięte w piątki</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Ras Al Khor Road</p>
            <p className="text-gray-500 text-sm">Ras Al Khor Industrial Area</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Wstęp</h3>
            <p className="text-gray-600">Bezpłatny</p>
            <p className="text-gray-500 text-sm">Bez rezerwacji</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaStar className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.5/5</p>
            <p className="text-gray-500 text-sm">od odwiedzających</p>
          </motion.div>
        </div>

        {/* About Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">O Rezerwacie</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-6">
              Rezerwat Przyrody Ras Al Khor to wyjątkowy ekosystem mokradeł w sercu Dubaju, 
              stanowiący schronienie dla tysięcy ptaków wędrownych, w tym imponującej populacji 
              flamingów. Ten chroniony obszar o powierzchni 620 hektarów jest pierwszym w Dubaju 
              obszarem wpisanym na listę Ramsar.
            </p>
            <p className="text-gray-600">
              Rezerwat łączy w sobie ochronę przyrody z możliwościami edukacyjnymi i turystycznymi. 
              Odwiedzający mogą obserwować różnorodne gatunki ptaków z specjalnie zaprojektowanych 
              punktów obserwacyjnych, poznawać znaczenie ekosystemu mokradeł oraz podziwiać 
              unikalne lasy namorzynowe.
            </p>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Galeria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative h-64 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  src={image}
                  alt={`Rezerwat Ras Al Khor - Zdjęcie ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tours Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Wycieczki</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div 
              data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
              data-gyg-locale-code="pl-PL" 
              data-gyg-widget="activities" 
              data-gyg-number-of-items="1" 
              data-gyg-cmp="kd-attracion" 
              data-gyg-partner-id="19WQ75B" 
              data-gyg-tour-ids="461408"
            >
              <span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/dubai-l173/">GetYourGuide</a></span>
            </div>
          </div>
        </div>

        {/* Main Attractions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Główne Atrakcje</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mainAttractions.map((attraction, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{attraction.title}</h3>
                <p className="text-gray-600">{attraction.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* History Timeline */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <FaHistory className="mr-3 text-gold-500" />
            Historia i Rozwój
          </h2>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {history.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-2">
                    <FaCalendarAlt className="text-gold-500 mr-2" />
                    <span className="font-semibold">{item.year}</span>
                  </div>
                  <p className="text-gray-600">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Practical Information */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Informacje Praktyczne</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practicalInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
                {info.icon}
                <div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  <p className="text-gray-600">{info.details}</p>
                </div>
              </div>
            ))}
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

export default RasAlKhorPage;
