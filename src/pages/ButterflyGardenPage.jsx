import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaBus, FaParking, FaWheelchair, FaCamera, FaFeather, FaLeaf, FaSun } from 'react-icons/fa';

const ButterflyGardenPage = () => {
  const funFacts = [
    "Największy kryty ogród motyli na świecie",
    "Ponad 15 000 motyli",
    "Ponad 50 gatunków motyli",
    "10 specjalnie zaprojektowanych kopuł",
    "Kontrolowana temperatura otoczenia",
    "Edukacyjne muzeum motyli",
    "Codzienne wypuszczanie motyli",
    "Program hodowli motyli"
  ];

  const galleryImages = [
    '/images/butterfly-garden-1.jpg',
    '/images/butterfly-garden-2.jpg',
    '/images/butterfly-garden-3.jpg',
    '/images/butterfly-garden-4.jpg',
    '/images/butterfly-garden-5.jpg',
    '/images/butterfly-garden-6.jpg'
  ];

  const experiences = [];

  const mainAttractions = [
    {
      title: "Kopuły Motyli",
      description: "Klimatyzowane kopuły zamieszkałe przez tysiące motyli z całego świata."
    },
    {
      title: "Muzeum Motyli",
      description: "Edukacyjne wystawy o cyklu życia motyli, gatunkach i ochronie."
    },
    {
      title: "Strefa Hodowli",
      description: "Obserwuj motyle wykluwające się z poczwarek w strefie hodowlanej."
    },
    {
      title: "Ogród Kwiatowy",
      description: "Piękne kwitnące rośliny przyciągające i karmiące motyle."
    },
    {
      title: "Staw Koi",
      description: "Spokojny zbiornik wodny z kolorowymi karpiami koi i roślinami wodnymi."
    },
    {
      title: "Centrum Edukacyjne",
      description: "Interaktywna strefa edukacyjna z motylimi aktywnościami i wystawami."
    }
  ];

  const practicalInfo = [
    {
      icon: <FaBus className="text-2xl text-gold-500" />,
      title: "Jak Dojechać",
      details: "Znajduje się w Al Barsha South 3. Dostępny samochodem, taksówką lub autobusem RTA. Dostępny bezpłatny parking."
    },
    {
      icon: <FaParking className="text-2xl text-gold-500" />,
      title: "Parking",
      details: "Bezpłatny parking dla wszystkich odwiedzających. Dedykowane miejsca dla autokarów."
    },
    {
      icon: <FaWheelchair className="text-2xl text-gold-500" />,
      title: "Dostępność",
      details: "Dostępny dla wózków inwalidzkich. Gładkie ścieżki we wszystkich kopułach."
    },
    {
      icon: <FaCamera className="text-2xl text-gold-500" />,
      title: "Fotografia",
      details: "Dozwolone zdjęcia prywatne. Sesje profesjonalne wymagają specjalnej przepustki."
    }
  ];

  const history = [
    {
      year: "2015",
      event: "Początkowa faza koncepcji i projektowania"
    },
    {
      year: "2016",
      event: "Budowa kopuł dla motyli"
    },
    {
      year: "2017",
      event: "Wielkie otwarcie dla publiczności"
    },
    {
      year: "2019",
      event: "Dodanie muzeum motyli"
    },
    {
      year: "2021",
      event: "Rozszerzenie programu hodowli"
    },
    {
      year: "2023",
      event: "Wprowadzenie nowych gatunków"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/butterfly-garden.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Dubajski Ogród Motyli</h1>
            <p className="text-xl mb-8">Największy Ogród Motyli na Świecie</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              Zaplanuj Wizytę
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
            <p className="text-gray-600">9:00 - 18:00</p>
            <p className="text-gray-500 text-sm">Ostatnie wejście: 17:30</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Al Barsha South 3</p>
            <p className="text-gray-500 text-sm">Dubaj</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Cena Biletu</h3>
            <p className="text-gray-600">55 AED</p>
            <p className="text-gray-500 text-sm">za osobę</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaStar className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.4/5</p>
            <p className="text-gray-500 text-sm">od odwiedzających</p>
          </motion.div>
        </div>

        {/* About Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">O Dubajskim Ogrodzie Motyli</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-6">
              Dubajski Ogród Motyli to największy kryty ogród motyli na świecie, posiadający dziesięć specjalnie zaprojektowanych, klimatyzowanych kopuł. Każda kopuła jest domem dla tysięcy motyli z ponad 50 różnych gatunków, tworząc magiczne i edukacyjne doświadczenie dla odwiedzających w każdym wieku.
            </p>
            <p className="text-gray-600">
              Poza oszałamiającymi pokazami motyli, ogród posiada muzeum motyli, strefę hodowli i centrum edukacyjne, gdzie odwiedzający mogą dowiedzieć się więcej o cyklu życia motyli, wysiłkach na rzecz ich ochrony i znaczeniu tych pięknych owadów dla naszego ekosystemu.
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
                  alt={`Zdjęcie z Ogrodu Motyli ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Experiences */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Bilety</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
                 data-gyg-locale-code="pl-PL" 
                 data-gyg-widget="activities" 
                 data-gyg-number-of-items="3" 
                 data-gyg-cmp="kd-attracion" 
                 data-gyg-partner-id="19WQ75B" 
                 data-gyg-tour-ids="404997,726833,57818">
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
                <h3 className="font-bold mb-2">{attraction.title}</h3>
                <p className="text-gray-600">{attraction.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* History Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <FaHistory className="mr-3 text-gold-500" />
            Historia i Rozwój
          </h2>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {history.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gold-500 mb-2">{item.year}</h3>
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
                  <h3 className="font-bold mb-2">{info.title}</h3>
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

        {/* Visitor Tips */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Wskazówki dla Odwiedzających</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <FaCalendarAlt className="text-gold-500 mt-1" />
                <p className="text-gray-600">Odwiedź wcześnie rano, gdy motyle są najbardziej aktywne</p>
              </div>
              <div className="flex items-start space-x-3">
                <FaFeather className="text-gold-500 mt-1" />
                <p className="text-gray-600">Noś jasne kolory, aby przyciągnąć motyle</p>
              </div>
              <div className="flex items-start space-x-3">
                <FaLeaf className="text-gold-500 mt-1" />
                <p className="text-gray-600">Sprawdź godziny pokazów karmienia</p>
              </div>
              <div className="flex items-start space-x-3">
                <FaSun className="text-gold-500 mt-1" />
                <p className="text-gray-600">Najlepsze zdjęcia zrobisz w słoneczne dni</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButterflyGardenPage;
