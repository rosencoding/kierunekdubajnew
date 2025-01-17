import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaBus, FaParking, FaUtensils, FaBook, FaMosque, FaCoffee } from 'react-icons/fa';

const SheikhMohammedCentrePage = () => {
  const funFacts = [
    "Znajduje się w tradycyjnym domu z wieżą wiatrową w dzielnicy historycznej Al Fahidi",
    "Serwuje autentyczne emirackie śniadania, obiady i kolacje",
    "Organizuje dyskusje kulturalne w języku arabskim i angielskim",
    "Oferuje zwiedzanie meczetu z sesjami pytań i odpowiedzi",
    "Posiada tradycyjne miejsca do siedzenia w stylu Majlis",
    "Zapewnia programy edukacyjne dla szkół i uniwersytetów",
    "Promuje międzykulturowe zrozumienie poprzez interaktywne sesje",
    "Zachowuje i dzieli się autentycznymi tradycjami emirackimi"
  ];

  const galleryImages = [
    '/images/sheikh-mohammed-centre-1.jpg',
    '/images/sheikh-mohammed-centre-2.jpg',
    '/images/sheikh-mohammed-centre-3.jpg',
    '/images/sheikh-mohammed-centre-4.jpg',
    '/images/sheikh-mohammed-centre-5.jpg',
    '/images/sheikh-mohammed-centre-6.jpg'
  ];

  const mainAttractions = [
    {
      title: "Posiłki Kulturalne",
      description: "Doświadcz tradycyjnej kuchni emirackiej podczas dyskusji kulturalnych o lokalnych zwyczajach i tradycjach."
    },
    {
      title: "Zwiedzanie Meczetu",
      description: "Wycieczki z przewodnikiem po meczecie Jumeirah z objaśnieniami dotyczącymi architektury islamskiej i praktyk religijnych."
    },
    {
      title: "Dom Dziedzictwa",
      description: "Odkryj tradycyjny dom z wieżą wiatrową i poznaj historyczną architekturę arabską."
    },
    {
      title: "Prezentacje Kulturalne",
      description: "Interaktywne sesje na temat kultury ZEA, tradycji i współczesnego życia."
    },
    {
      title: "Ceremonia Kawy Arabskiej",
      description: "Poznaj znaczenie kawy arabskiej w kulturze Zatoki i tradycje jej serwowania."
    },
    {
      title: "Programy Edukacyjne",
      description: "Specjalnie zaprojektowane programy dla szkół i grup korporacyjnych o kulturze emirackiej."
    }
  ];

  const practicalInfo = [
    {
      icon: <FaBus className="text-2xl text-gold-500" />,
      title: "Jak Dojechać",
      details: "Znajduje się w dzielnicy historycznej Al Fahidi. Najbliższa stacja metra to Al Fahidi, następnie krótki spacer."
    },
    {
      icon: <FaParking className="text-2xl text-gold-500" />,
      title: "Parking",
      details: "Parking publiczny dostępny w dzielnicy historycznej Al Fahidi. Parking z obsługą dostępny podczas specjalnych wydarzeń."
    },
    {
      icon: <FaUtensils className="text-2xl text-gold-500" />,
      title: "Posiłki",
      details: "Tradycyjne emirackie posiłki serwowane podczas programów kulturalnych. Wymagana wcześniejsza rezerwacja."
    },
    {
      icon: <FaBook className="text-2xl text-gold-500" />,
      title: "Rezerwacje",
      details: "Wymagana wcześniejsza rezerwacja na wszystkie programy. Dostępne rezerwacje grupowe."
    }
  ];

  const history = [
    {
      year: "1998",
      event: "Utworzenie SMCCU w celu promowania zrozumienia kulturowego"
    },
    {
      year: "2000",
      event: "Uruchomienie pierwszego programu śniadań kulturalnych"
    },
    {
      year: "2005",
      event: "Wprowadzenie programów zwiedzania meczetu"
    },
    {
      year: "2010",
      event: "Rozszerzenie programów edukacyjnych dla szkół"
    },
    {
      year: "2015",
      event: "Uruchomienie korporacyjnych szkoleń kulturalnych"
    },
    {
      year: "2020",
      event: "Wprowadzenie wirtualnych doświadczeń kulturalnych"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/sheikh-mohammed-centre.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Centrum Zrozumienia Kulturowego Szejka Mohammeda</h1>
            <p className="text-xl mb-8">Otwarte Drzwi, Otwarte Umysły</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
              onClick={() => window.open('https://www.getyourguide.com/dubai-l173/dubai-old-town-markets-tasting-food-abra-boat-ride-t523026/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd', '_blank')}
            >
              Zarezerwuj Doświadczenie
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
            <p className="text-gray-600">9:00 - 17:00</p>
            <p className="text-gray-500 text-sm">Nd-Czw</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Dom 26</p>
            <p className="text-gray-500 text-sm">Dzielnica Historyczna Al Fahidi</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Cena Doświadczenia</h3>
            <p className="text-gray-600">Od 75 AED</p>
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
          <h2 className="text-3xl font-bold mb-6">O Centrum</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-6">
              Centrum Zrozumienia Kulturowego Szejka Mohammeda (SMCCU) to wyjątkowe miejsce w historycznej dzielnicy Al Fahidi, 
              które służy jako most między kulturą emiracką a gośćmi z całego świata. Mieści się w tradycyjnym domu z wieżą 
              wiatrową i oferuje autentyczne doświadczenia kulturalne.
            </p>
            <p className="text-gray-600">
              Centrum organizuje różnorodne programy, od tradycyjnych posiłków emirackich po zwiedzanie meczetów i dyskusje 
              kulturalne, wszystkie prowadzone w duchu otwartości i wzajemnego zrozumienia. To idealne miejsce, aby poznać 
              prawdziwe oblicze kultury emirackiej i jej tradycje.
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
                  alt={`Centrum Kulturowe - Zdjęcie ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Experiences Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Doświadczenia i Wycieczki</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div 
              data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
              data-gyg-locale-code="pl-PL" 
              data-gyg-widget="activities" 
              data-gyg-number-of-items="3" 
              data-gyg-cmp="kd-attracion" 
              data-gyg-partner-id="19WQ75B" 
              data-gyg-tour-ids="523026,531313,505703"
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

export default SheikhMohammedCentrePage;
