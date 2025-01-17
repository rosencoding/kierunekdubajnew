import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaBus, FaParking, FaWheelchair, FaCamera, FaShip, FaUtensils, FaShoppingBag } from 'react-icons/fa';

const MadinatJumeirahPage = () => {
  const funFacts = [
    "Inspirowany tradycyjnym arabskim miastem",
    "3 kilometry kanałów wodnych",
    "40 restauracji i barów",
    "Ponad 95 butików i sklepów",
    "Tradycyjne łodzie abra",
    "Widok na Burj Al Arab",
    "Tradycyjny arabski souk",
    "Replika starego miasta Dubaju"
  ];

  const galleryImages = [
    '/images/madinat-jumeirah-1.jpg',
    '/images/madinat-jumeirah-2.jpg',
    '/images/madinat-jumeirah-3.jpg',
    '/images/madinat-jumeirah-4.jpg',
    '/images/madinat-jumeirah-5.jpg',
    '/images/madinat-jumeirah-6.jpg'
  ];

  const experiences = [];

  const mainAttractions = [
    {
      title: "Souk Madinat Jumeirah",
      description: "Tradycyjny arabski bazar z rękodziełem, pamiątkami i lokalnymi produktami."
    },
    {
      title: "Kanały Wodne",
      description: "Sieć malowniczych kanałów z tradycyjnymi łodziami abra oferującymi rejsy."
    },
    {
      title: "Restauracje i Kawiarnie",
      description: "Szeroki wybór lokali gastronomicznych z kuchnią z całego świata."
    },
    {
      title: "Amfiteatr",
      description: "Przestrzeń eventowa z widokiem na Burj Al Arab."
    },
    {
      title: "Galerie Sztuki",
      description: "Lokalne i międzynarodowe galerie prezentujące różnorodną sztukę."
    },
    {
      title: "Taras Widokowy",
      description: "Punkty widokowe oferujące spektakularne widoki na Burj Al Arab i zatokę."
    }
  ];

  const practicalInfo = [
    {
      icon: <FaBus className="text-2xl text-gold-500" />,
      title: "Jak Dojechać",
      details: "Położony w dzielnicy Jumeirah. Dostępny taksówką, autobusem lub metrem (stacja Mall of the Emirates + taksówka)."
    },
    {
      icon: <FaParking className="text-2xl text-gold-500" />,
      title: "Parking",
      details: "Dostępny bezpłatny parking podziemny. Usługa valet parking za dodatkową opłatą."
    },
    {
      icon: <FaWheelchair className="text-2xl text-gold-500" />,
      title: "Dostępność",
      details: "W pełni dostępny dla osób niepełnosprawnych. Windy i rampy w całym kompleksie."
    },
    {
      icon: <FaCamera className="text-2xl text-gold-500" />,
      title: "Fotografia",
      details: "Dozwolone zdjęcia na zewnątrz i w częściach wspólnych. Niektóre sklepy mogą mieć ograniczenia."
    }
  ];

  const history = [
    {
      year: "2003",
      event: "Początek budowy kompleksu"
    },
    {
      year: "2004",
      event: "Otwarcie pierwszej części kompleksu"
    },
    {
      year: "2006",
      event: "Ukończenie Souk Madinat Jumeirah"
    },
    {
      year: "2010",
      event: "Rozbudowa systemu kanałów"
    },
    {
      year: "2016",
      event: "Renowacja i modernizacja kompleksu"
    },
    {
      year: "2020",
      event: "Wprowadzenie nowych atrakcji i restauracji"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/madinat-jumeirah.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Madinat Jumeirah</h1>
            <p className="text-xl mb-8">Nowoczesna Interpretacja Tradycyjnego Arabskiego Miasta</p>
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
            <p className="text-gray-600">10:00 - 23:00</p>
            <p className="text-gray-500 text-sm">Restauracje do 2:00</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Al Sufouh 1</p>
            <p className="text-gray-500 text-sm">Jumeirah, Dubaj</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Wstęp</h3>
            <p className="text-gray-600">Bezpłatny</p>
            <p className="text-gray-500 text-sm">Atrakcje płatne osobno</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaStar className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.7/5</p>
            <p className="text-gray-500 text-sm">od odwiedzających</p>
          </motion.div>
        </div>

        {/* About Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">O Madinat Jumeirah</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-6">
            Madinat Jumeirah to luksusowy kompleks hotelowo-rozrywkowy w Dubaju, zaprojektowany jako replika tradycyjnego arabskiego miasta. Charakterystycznym elementem są kanały wodne, po których pływają tradycyjne łodzie abra, oraz architektura z wiatrakami (wieże wiatrowe), łukami i wąskimi uliczkami. Kompleks obejmuje kilka ekskluzywnych hoteli, w tym Jumeirah Al Qasr i Jumeirah Mina A'Salam.
            </p>
            <p className="text-gray-600">
            Centralnym punktem kompleksu jest Souk Madinat Jumeirah - stylizowane na tradycyjny arabski bazar centrum handlowe z restauracjami i butikami. Z terenu kompleksu rozciąga się spektakularny widok na hotel Burj Al Arab, a całość otoczona jest pięknymi ogrodami. To miejsce, które doskonale łączy arabską tradycję z nowoczesnym luksusem, przyciągając zarówno turystów, jak i mieszkańców Dubaju.            </p>
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
                  alt={`Zdjęcie z Madinat Jumeirah ${index + 1}`}
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
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3">{attraction.title}</h3>
                <p className="text-gray-600">{attraction.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Ciekawostki</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-4 rounded-lg shadow-md"
              >
                <p className="text-gray-700">{fact}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Practical Information */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Informacje Praktyczne</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practicalInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {info.icon}
                  <h3 className="text-xl font-semibold ml-4">{info.title}</h3>
                </div>
                <p className="text-gray-600">{info.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* History Timeline */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Historia</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-6">
              {history.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-24">
                    <span className="font-bold text-gold-500">{item.year}</span>
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-700">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* GetYourGuide Widget */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Bilety i Wycieczki</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div 
              data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
              data-gyg-locale-code="pl-PL" 
              data-gyg-widget="activities" 
              data-gyg-number-of-items="8" 
              data-gyg-partner-id="19WQ75B" 
              data-gyg-q="Madinat Jumeirah"
            >
              <span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/madinat-jumeirah-l120695/">GetYourGuide</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MadinatJumeirahPage;
