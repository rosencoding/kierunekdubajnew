import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaBus, FaParking, FaWheelchair, FaCamera, FaPaw, FaTree, FaCar } from 'react-icons/fa';

const DesertConservationPage = () => {
  const funFacts = [
    "Pierwszy park narodowy w ZEA",
    "Obejmuje 225 kilometrów kwadratowych chronionej pustyni",
    "Dom dla ponad 800 sztuk oryksów arabskich",
    "Zarejestrowano ponad 250 gatunków ptaków",
    "Posiada 6000 drzew rodzimych dla Półwyspu Arabskiego",
    "Przywrócono zagrożone gatunki pustynne",
    "Zawiera rzadkie gatunki roślin pustynnych",
    "Praktykuje zrównoważoną turystykę od 1999 roku"
  ];

  const galleryImages = [
    '/images/desert-conservation-1.jpg',
    '/images/desert-conservation-2.jpg',
    '/images/desert-conservation-3.jpg',
    '/images/desert-conservation-4.jpg',
    '/images/desert-conservation-5.jpg',
    '/images/desert-conservation-6.jpg'
  ];

  const mainAttractions = [
    {
      title: "Sanktuarium Oryksa Arabskiego",
      description: "Chroniony obszar z największym wolno żyjącym stadem oryksów arabskich w ZEA."
    },
    {
      title: "Ekosystem Pustynny",
      description: "Dziewicze pustynne krajobrazy z wydmami, żwirowymi równinami i roślinnością pustynną."
    },
    {
      title: "Obserwacja Dzikiej Przyrody",
      description: "Możliwość obserwacji gazeli, zajęcy arabskich, kotów pustynnych i różnych gatunków ptaków."
    },
    {
      title: "Centrum Badawcze",
      description: "Placówka poświęcona ochronie pustyni i badaniom nad dziką przyrodą."
    },
    {
      title: "Flora Rodzima",
      description: "Kolekcja rodzimych roślin i drzew pustynnych przystosowanych do surowego środowiska."
    },
    {
      title: "Obóz Beduiński",
      description: "Tradycyjny obóz pustynny prezentujący lokalne dziedzictwo i kulturę."
    }
  ];

  const practicalInfo = [
    {
      icon: <FaBus className="text-2xl text-gold-500" />,
      title: "Jak Dojechać",
      details: "Znajduje się 45 minut od Dubaju. Transport wliczony w większość wycieczek. Prywatne pojazdy wymagają pozwoleń."
    },
    {
      icon: <FaParking className="text-2xl text-gold-500" />,
      title: "Dostęp",
      details: "Wstęp tylko z przewodnikiem. Wymagana wcześniejsza rezerwacja. Zakaz samodzielnej jazdy po rezerwacie."
    },
    {
      icon: <FaWheelchair className="text-2xl text-gold-500" />,
      title: "Dostępność",
      details: "Dostępne zmodyfikowane pojazdy dla osób z ograniczoną mobilnością. Wymagane wcześniejsze powiadomienie."
    },
    {
      icon: <FaCamera className="text-2xl text-gold-500" />,
      title: "Fotografia",
      details: "Fotografowanie dozwolone. Fotografia profesjonalna wymaga specjalnego pozwolenia."
    }
  ];

  const history = [
    {
      year: "1999",
      event: "Utworzenie Rezerwatu Ochrony"
    },
    {
      year: "2001",
      event: "Pierwszy program reintrodukcji oryksa arabskiego"
    },
    {
      year: "2003",
      event: "Otwarcie Centrum Badawczego"
    },
    {
      year: "2008",
      event: "Uruchomienie programu zrównoważonej turystyki"
    },
    {
      year: "2018",
      event: "Rozszerzenie chronionego obszaru"
    },
    {
      year: "2023",
      event: "Nowe obiekty do obserwacji dzikiej przyrody"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/desert-conservation.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Rezerwat Ochrony Pustyni w Dubaju</h1>
            <p className="text-xl mb-8">Odkryj Naturalne Dziedzictwo Dubaju</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
              onClick={() => window.open('https://www.getyourguide.com/dubai-l173/dubai-al-marmoom-evening-safari-by-vintage-car-with-meal-t409094/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd', '_blank')}
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
            <h3 className="font-semibold mb-2">Godziny Wycieczek</h3>
            <p className="text-gray-600">5:00 - 9:00</p>
            <p className="text-gray-500 text-sm">15:00 - 19:00</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Al Ain Road</p>
            <p className="text-gray-500 text-sm">Al Lisaili, Dubaj</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Cena Początkowa</h3>
            <p className="text-gray-600">Od 295 AED</p>
            <p className="text-gray-500 text-sm">za osobę</p>
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
          <h2 className="text-3xl font-bold mb-6">O Rezerwacie</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-6">
              Rezerwat Ochrony Pustyni w Dubaju to pierwszy park narodowy w Zjednoczonych Emiratach Arabskich, 
              stanowiący sanktuarium dla zagrożonych gatunków pustynnych. Ten rozległy obszar chroniony jest 
              domem dla największej wolno żyjącej populacji oryksa arabskiego na świecie.
            </p>
            <p className="text-gray-600">
              Rezerwat oferuje unikalne doświadczenie pustyni, łącząc ochronę przyrody z edukacją ekologiczną 
              i tradycyjną kulturą beduińską. Odwiedzający mogą poznać bogactwo lokalnej flory i fauny, 
              obserwować rzadkie gatunki w ich naturalnym środowisku oraz doświadczyć magii pustynnego krajobrazu.
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
                  alt={`Rezerwat Pustyni - Zdjęcie ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tours Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Wycieczki i Doświadczenia</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div 
              data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
              data-gyg-locale-code="pl-PL" 
              data-gyg-widget="activities" 
              data-gyg-number-of-items="6" 
              data-gyg-cmp="kd-attracion" 
              data-gyg-partner-id="19WQ75B" 
              data-gyg-tour-ids="408481,409094,71350,74766,89937,74550"
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

export default DesertConservationPage;
