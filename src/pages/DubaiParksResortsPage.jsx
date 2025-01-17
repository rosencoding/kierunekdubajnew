import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaTheaterMasks, FaFilm, FaChild, FaHistory } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DubaiParksResortsPage = () => {
  const funFacts = [
    "Największy zintegrowany kompleks parków rozrywki na Bliskim Wschodzie",
    "Składa się z czterech unikalnych parków tematycznych: MOTIONGATE™ Dubai, LEGOLAND® Dubai, LEGOLAND® Water Park i Bollywood Parks™ Dubai",
    "MOTIONGATE™ Dubai to największy park tematyczny inspirowany Hollywood na Bliskim Wschodzie",
    "LEGOLAND® Dubai oferuje ponad 40 atrakcji i przejażdżek związanych z LEGO®",
    "Bollywood Parks™ Dubai to pierwszy na świecie park tematyczny inspirowany Bollywood",
    "Parki połączone są przez Riverland™ Dubai, tematyczną strefę restauracji i sklepów"
  ];

  const galleryImages = [
    '/images/dubai-parks-resorts-1.jpg',
    '/images/dubai-parks-resorts-2.jpg',
    '/images/dubai-parks-resorts-3.jpg',
    '/images/dubai-parks-resorts-4.jpg',
    '/images/dubai-parks-resorts-6.jpg',
    '/images/dubai-parks-resorts.jpg'
  ];

  const attractions = [
    {
      title: "MOTIONGATE™ Dubai",
      description: "Park tematyczny inspirowany Hollywood z atrakcjami opartymi na produkcjach DreamWorks Animation, Columbia Pictures i Lionsgate.",
      link: "/atrakcje/motiongate"
    },
    {
      title: "LEGOLAND® Dubai",
      description: "Interaktywny park tematyczny z ponad 40 atrakcjami idealny dla rodzin z dziećmi w wieku 2-12 lat."
    },
    {
      title: "LEGOLAND® Water Park",
      description: "Park wodny z zjeżdżalniami i atrakcjami w tematyce LEGO® dla całej rodziny."
    },
    {
      title: "Bollywood Parks™ Dubai",
      description: "Pierwszy na świecie park tematyczny Bollywood, celebrujący słynny przemysł filmowy Mumbai poprzez przejażdżki i występy na żywo.",
      link: "/atrakcje/bollywood-parks"
    }
  ];

  const experiences = [
    {
      title: "Przygoda w Hollywood",
      description: "Przeżyj ekscytujące przejażdżki i atrakcje oparte na ulubionych filmach Hollywood w MOTIONGATE™ Dubai."
    },
    {
      title: "Zabawa z LEGO®",
      description: "Buduj, baw się i odkrywaj świat zbudowany z LEGO® w LEGOLAND® Dubai i LEGOLAND® Water Park."
    },
    {
      title: "Magia Bollywood",
      description: "Zanurz się w tętniącym życiem świecie Bollywood poprzez pokazy na żywo, tematyczne restauracje i ekscytujące przejażdżki."
    },
    {
      title: "Riverland™ Dubai",
      description: "Spaceruj przez cztery tematyczne strefy oferujące wyjątkowe doświadczenia kulinarne i zakupowe."
    }
  ];

  const activities = [
    "Przejażdżka Madagascar Mad Pursuit w MOTIONGATE™",
    "Budowanie i wyścigi samochodów LEGO® w LEGOLAND®",
    "Oglądanie występów Bollywood na żywo",
    "Ochłoda w LEGOLAND® Water Park",
    "Posiłki w tematycznych restauracjach w Riverland™",
    "Spotkania z ulubionymi postaciami DreamWorks",
    "Doświadczanie filmów i pokazów 4D",
    "Zakupy wyjątkowych pamiątek",
    "Zdjęcia z modelami LEGO®",
    "Rozrywka uliczna"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/dubai-parks-resorts.jpg"
          alt="Dubai Parks and Resorts"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Dubai Parks and Resorts
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Największy kompleks parków rozrywki na Bliskim Wschodzie
            </p>
            {/* Book Tickets Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="https://gyg.me/dJbD5WJP"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-500 hover:bg-gold-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg inline-flex items-center space-x-2"
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
            <FaClock className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Godziny Otwarcia</h3>
            <p className="text-gray-600">11:00 - 20:00</p>
            <p className="text-gray-500 text-sm">Godziny mogą się różnić w zależności od parku</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Sheikh Zayed Road</p>
            <p className="text-gray-500 text-sm">Naprzeciwko Palm Jebel Ali</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Cena Wstępu</h3>
            <p className="text-gray-600">Od 295 AED</p>
            <p className="text-gray-500 text-sm">Dostępne karnety do wielu parków</p>
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

        {/* Description */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">O Dubai Parks and Resorts</h2>
          <p className="text-gray-600 mb-6">
            Dubai Parks and Resorts to największy zintegrowany kompleks parków rozrywki na Bliskim Wschodzie, oferujący niezapomniane wrażenia dla odwiedzających w każdym wieku. Kompleks składa się z czterech unikalnych parków tematycznych: MOTIONGATE™ Dubai, LEGOLAND® Dubai, LEGOLAND® Water Park i Bollywood Parks™ Dubai. Każdy park oferuje własne, wyjątkowe przygody, od atrakcji inspirowanych Hollywood po przejażdżki w tematyce LEGO® i celebracje Bollywood. Parki połączone są przez Riverland™ Dubai, tematyczną strefę restauracji i sklepów, która przenosi odwiedzających przez różne epoki, od Francuskiej Wioski po Bramę Indii.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <FaMapMarkerAlt className="text-gold-500" />
            <span className="text-gray-600">
              Sheikh Zayed Road, naprzeciwko Palm Jebel Ali - Dubaj - Zjednoczone Emiraty Arabskie
            </span>
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
                className="rounded-xl overflow-hidden shadow-md"
              >
                <img
                  src={image}
                  alt={`Dubai Parks and Resorts ${index + 1}`}
                  className="w-full h-72 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* History Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaHistory className="w-8 h-8 text-gold-500 mr-4" />
            <h2 className="text-3xl font-semibold">Historia</h2>
          </div>
          <div className="space-y-4 text-gray-600">
            <p>
              Dubai Parks and Resorts zostało otwarte pod koniec 2016 roku jako część wizji Dubaju mającej na celu przyciągnięcie większej liczby turystów i zróżnicowanie oferty rozrywkowej.
            </p>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaInfoCircle className="w-8 h-8 text-gold-500 mr-4" />
            <h2 className="text-3xl font-semibold">Ciekawostki</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                className="flex items-start space-x-3"
              >
                <FaStar className="text-gold-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">{fact}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Attractions */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaTheaterMasks className="w-8 h-8 text-gold-500 mr-4" />
            <h2 className="text-3xl font-semibold">Parki Tematyczne</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {attractions.map((attraction, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {attraction.link ? (
                    <Link to={attraction.link} className="text-blue-600 hover:text-blue-800 transition-colors">
                      {attraction.title}
                    </Link>
                  ) : (
                    attraction.title
                  )}
                </h3>
                <p className="text-gray-600">{attraction.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experiences */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaFilm className="w-8 h-8 text-gold-500 mr-4" />
            <h2 className="text-3xl font-semibold">Rodzaje Doświadczeń</h2>
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

        {/* Activities */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaChild className="w-8 h-8 text-gold-500 mr-4" />
            <h2 className="text-3xl font-semibold">Co Można Robić</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                className="flex items-start space-x-3"
              >
                <FaStar className="text-gold-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">{activity}</p>
              </motion.div>
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
      </div>
    </div>
  );
};

export default DubaiParksResortsPage;
