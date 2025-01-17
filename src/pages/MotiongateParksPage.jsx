import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaBus, FaParking, FaWheelchair, FaCamera, FaFilm, FaTheaterMasks, FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MotiongateParksPage = () => {
  const funFacts = [
    "Największy park rozrywki w Dubaju oparty na hollywoodzkich filmach",
    "27 głównych atrakcji i przejażdżek",
    "5 tematycznych stref filmowych",
    "Ponad 40 restauracji i sklepów",
    "Całoroczna rozrywka w klimatyzowanym obiekcie",
    "Współpraca z największymi studiami filmowymi",
    "Najszybszy rollercoaster w parku osiąga prędkość 110 km/h",
    "Wysokość najwyższej atrakcji to 58 metrów"
  ];

  const galleryImages = [
    '/images/motiongate.jpg',
    '/images/motiongate-2.jpg',
    '/images/motiongate-3.jpg',
    '/images/motiongate-4.jpg',
    '/images/motiongate-5.jpg',
    '/images/motiongate-6.jpg'
  ];

  const experiences = [];

  const mainAttractions = [
    {
      title: "DreamWorks Zone",
      description: "Strefa z atrakcjami inspirowanymi filmami jak Kung Fu Panda, Shrek, Madagascar i Jak wytresować smoka."
    },
    {
      title: "Columbia Pictures Zone",
      description: "Ekscytujące przejażdżki oparte na hitach jak Zombieland, Hotel Transylwania i Ghostbusters."
    },
    {
      title: "Lionsgate Zone",
      description: "Atrakcje inspirowane filmami John Wick i Igrzyska Śmierci, w tym spektakularny rollercoaster."
    },
    {
      title: "Studio Central",
      description: "Strefa wejściowa stylizowana na złotą erę Hollywood z restauracjami i sklepami."
    },
    {
      title: "Smurfs Village",
      description: "Magiczna wioska Smerfów z atrakcjami dla najmłodszych gości."
    },
    {
      title: "Shows & Entertainment",
      description: "Regularne pokazy na żywo, parady i występy postaci z filmów."
    }
  ];

  const practicalInfo = [
    {
      icon: <FaBus className="text-2xl text-gold-500" />,
      title: "Jak Dojechać",
      details: "Położony w Dubai Parks and Resorts. Dostępny shuttle bus z głównych hoteli, taksówką lub samochodem. Dojazd autobusem RTA."
    },
    {
      icon: <FaParking className="text-2xl text-gold-500" />,
      title: "Parking",
      details: "Duży parking dostępny dla gości. Płatny 20 AED za dzień. Bezpłatny dla posiadaczy biletów VIP."
    },
    {
      icon: <FaWheelchair className="text-2xl text-gold-500" />,
      title: "Dostępność",
      details: "Dostosowany dla osób niepełnosprawnych. Większość atrakcji dostępna dla wózków inwalidzkich. Specjalne wejścia dla osób z niepełnosprawnościami."
    },
    {
      icon: <FaCamera className="text-2xl text-gold-500" />,
      title: "Fotografia",
      details: "Dozwolone zdjęcia prywatne. Dostępne pakiety fotograficzne z profesjonalnymi zdjęciami z atrakcji."
    }
  ];

  const history = [
    {
      year: "2012",
      event: "Ogłoszenie planów budowy MOTIONGATE™ Dubai"
    },
    {
      year: "2014",
      event: "Rozpoczęcie budowy parku"
    },
    {
      year: "2016",
      event: "Oficjalne otwarcie parku"
    },
    {
      year: "2019",
      event: "Dodanie nowych atrakcji w strefie DreamWorks"
    },
    {
      year: "2021",
      event: "Otwarcie strefy Lionsgate z nowymi rollercoasterami"
    },
    {
      year: "2023",
      event: "Wprowadzenie nowych pokazów i doświadczeń VR"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      {/* Hero Section */}
      <div className="relative h-[60vh] rounded-3xl overflow-hidden mb-8">
        <img
          src="/images/motiongate.jpg"
          alt="MOTIONGATE Dubai"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">MOTIONGATE Dubai</h1>
            <p className="text-xl">Hollywoodzka magia w sercu Dubaju</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-8 rounded-xl shadow-sm mb-12"
      >
        <h2 className="text-3xl font-bold mb-6">O MOTIONGATE Dubai</h2>
        <p className="text-gray-600 mb-6">
          MOTIONGATE Dubai to spektakularny park rozrywki inspirowany Hollywood, znajdujący się w kompleksie{' '}
          <Link to="/atrakcje/dubai-parks-resorts" className="text-blue-600 hover:text-blue-800 transition-colors">
            Dubai Parks and Resorts
          </Link>
          . Park oferuje ponad 29 ekscytujących atrakcji i pokazów inspirowanych 13 najpopularniejszymi produkcjami filmowymi z DreamWorks Animation, Columbia Pictures, Lionsgate i The Smurfs™.
        </p>
      </motion.div>

      {/* Quick Info */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <FaClock className="text-3xl text-gold-500 mb-4" />
          <h3 className="font-bold mb-2">Godziny Otwarcia</h3>
          <p>Codziennie 11:00 - 20:00</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <FaTicketAlt className="text-3xl text-gold-500 mb-4" />
          <h3 className="font-bold mb-2">Bilety</h3>
          <p>Od 335 AED dla dorosłych</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <FaMapMarkerAlt className="text-3xl text-gold-500 mb-4" />
          <h3 className="font-bold mb-2">Lokalizacja</h3>
          <p>Dubai Parks and Resorts</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <FaStar className="text-3xl text-gold-500 mb-4" />
          <h3 className="font-bold mb-2">Ocena</h3>
          <p>4.5/5 (12,000+ opinii)</p>
        </div>
      </div>

      {/* Fun Facts */}
      <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center">
          <FaInfoCircle className="text-gold-500 mr-3" />
          Ciekawostki
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {funFacts.map((fact, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-4 text-center"
            >
              <p>{fact}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Attractions */}
      <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center">
          <FaFilm className="text-gold-500 mr-3" />
          Główne Atrakcje
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainAttractions.map((attraction, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-xl font-bold mb-3">{attraction.title}</h3>
              <p>{attraction.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center">
          <FaCamera className="text-gold-500 mr-3" />
          Galeria
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden"
            >
              <img
                src={image}
                alt={`MOTIONGATE™ Dubai ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Practical Information */}
      <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center">
          <FaInfoCircle className="text-gold-500 mr-3" />
          Informacje Praktyczne
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {practicalInfo.map((info, index) => (
            <div
              key={index}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0">
                {info.icon}
              </div>
              <div>
                <h3 className="font-bold mb-2">{info.title}</h3>
                <p>{info.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GetYourGuide Widget */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
        <h2 className="text-3xl font-semibold mb-6">Inne atrakcje</h2>
        <div 
          data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
          data-gyg-locale-code="pl-PL" 
          data-gyg-widget="activities" 
          data-gyg-number-of-items="8" 
          data-gyg-partner-id="19WQ75B" 
          data-gyg-q="dubai"
        >
          <span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/dubai-l173/">GetYourGuide</a></span>
        </div>
      </div>

      {/* History Timeline */}
      <div className="bg-white rounded-xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-6 flex items-center">
          <FaHistory className="text-gold-500 mr-3" />
          Historia
        </h2>
        <div className="space-y-4">
          {history.map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0 w-24 font-bold text-gold-500">
                {item.year}
              </div>
              <div>{item.event}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MotiongateParksPage;
