import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaBus, FaParking, FaWheelchair, FaCamera, FaBinoculars, FaGlassCheers, FaCoffee } from 'react-icons/fa';

const ViewPalmPage = () => {
  const funFacts = [
    "Znajduje się na 52. piętrze",
    "240 metrów nad ziemią",
    "Taras widokowy 360 stopni",
    "Interaktywne doświadczenia",
    "Galeria historii Palm Island",
    "Dostępne doświadczenia VR",
    "Szklana podłoga do spacerowania",
    "Najwyższy punkt widokowy na Palm Jumeirah"
  ];

  const galleryImages = [
    '/images/view-palm-1.jpg',
    '/images/view-palm-2.jpg',
    '/images/view-palm-3.jpg',
    '/images/view-palm-4.jpg',
    '/images/view-palm-5.jpg',
    '/images/view-palm-6.jpg'
  ];

  const mainAttractions = [
    {
      title: "Taras Widokowy",
      description: "Widoki 360 stopni na Palm Jumeirah, Zatokę Perską i panoramę Dubaju z wysokości 240m."
    },
    {
      title: "Doświadczenia Interaktywne",
      description: "Cyfrowe doświadczenia i ekrany dotykowe przedstawiające historię powstania Palm Jumeirah."
    },
    {
      title: "Szklana Podłoga",
      description: "Ekscytujący szklany chodnik oferujący unikalne widoki w dół na The Palm."
    },
    {
      title: "Muzeum Palm",
      description: "Galeria przedstawiająca historię i budowę Palm Jumeirah."
    },
    {
      title: "Doświadczenie VR",
      description: "Stanowiska wirtualnej rzeczywistości oferujące immersyjne doświadczenia Palm Jumeirah."
    },
    {
      title: "Kawiarnia i Salon",
      description: "Wysokiej jakości przekąski z panoramicznym widokiem na Dubaj."
    }
  ];

  const practicalInfo = [
    {
      icon: <FaBus className="text-2xl text-gold-500" />,
      title: "Jak Dojechać",
      details: "Znajduje się w Palm Tower. Dostępny samochodem, taksówką lub kolejką Palm Monorail. Połączony z Nakheel Mall."
    },
    {
      icon: <FaParking className="text-2xl text-gold-500" />,
      title: "Parking",
      details: "Parking dostępny w Nakheel Mall z bezpośrednim dostępem do The View."
    },
    {
      icon: <FaWheelchair className="text-2xl text-gold-500" />,
      title: "Dostępność",
      details: "W pełni dostępny dla wózków inwalidzkich. Windy dostępne na taras widokowy."
    },
    {
      icon: <FaCamera className="text-2xl text-gold-500" />,
      title: "Fotografia",
      details: "Dozwolone robienie zdjęć. Fotografia profesjonalna wymaga pozwolenia."
    }
  ];

  const history = [
    {
      year: "2020",
      event: "Zakończenie budowy The Palm Tower"
    },
    {
      year: "2021",
      event: "Otwarcie The View at The Palm"
    },
    {
      year: "2021",
      event: "Uruchomienie doświadczeń VR"
    },
    {
      year: "2022",
      event: "Wprowadzenie pakietów zachodu słońca"
    },
    {
      year: "2022",
      event: "Dodanie interaktywnych wystaw"
    },
    {
      year: "2023",
      event: "Uruchomienie nowych doświadczeń VIP"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/view-palm.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">The View at The Palm</h1>
            <p className="text-xl mb-8">Najlepszy Taras Widokowy w Dubaju</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://www.getyourguide.com/dubai-islands-l167429/dubai-the-view-at-the-palm-observatory-entry-ticket-t409529/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd', '_blank')}
              className="bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              Zarezerwuj Bilet
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
            <p className="text-gray-600">10:00 - 23:00</p>
            <p className="text-gray-500 text-sm">Ostatnie wejście: 22:30</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Palm Tower, Piętro 52</p>
            <p className="text-gray-500 text-sm">Palm Jumeirah, Dubaj</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Cena Wstępu</h3>
            <p className="text-gray-600">Od 100 AED</p>
            <p className="text-gray-500 text-sm">za osobę</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaStar className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.8/5</p>
            <p className="text-gray-500 text-sm">od odwiedzających</p>
          </motion.div>
        </div>

        {/* About Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">O The View</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-6">
              The View at The Palm to oszałamiający taras widokowy położony na 52. piętrze Palm Tower, 
              oferujący niezapomniane widoki na ikoniczną wyspę Palm Jumeirah i panoramę Dubaju.
            </p>
            <p className="text-gray-600">
              Z wysokości 240 metrów, goście mogą podziwiać spektakularne widoki 360 stopni, 
              korzystać z interaktywnych wystaw i doświadczeń VR, oraz spacerować po szklanej podłodze 
              z widokiem na miasto poniżej.
            </p>
          </div>
        </div>

        {/* Zarezerwuj Bilet */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Zarezerwuj Bilet</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div 
              data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
              data-gyg-locale-code="pl-PL" 
              data-gyg-widget="activities" 
              data-gyg-number-of-items="1" 
              data-gyg-cmp="kd-attracion" 
              data-gyg-partner-id="19WQ75B" 
              data-gyg-tour-ids="409529"
            >
              <span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/dubai-islands-l167429/">GetYourGuide</a></span>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Galeria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative h-64 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  src={image}
                  alt={`The View at The Palm - Zdjęcie ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Main Attractions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Główne Atrakcje</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            Historia
          </h2>
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

export default ViewPalmPage;
