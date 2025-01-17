import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaBus, FaParking, FaWheelchair, FaCamera } from 'react-icons/fa';

const EtihadMuseumPage = () => {
  const funFacts = [
    "Unikalna architektura muzeum reprezentuje kształt manuskryptu",
    "Zbudowane dokładnie w miejscu, gdzie podpisano konstytucję ZEA w 1971 roku",
    "Posiada ponad 6000 metrów kwadratowych powierzchni wystawienniczej",
    "Przechowuje rzadkie fotografie i przedmioty z okresu założycielskiego ZEA",
    "Projekt budynku zdobył wiele nagród architektonicznych",
    "Interaktywne ekspozycje wykorzystują najnowocześniejszą technologię do ożywienia historii",
    "Zawiera oryginalne kopie Konstytucji ZEA",
    "Posiada unikalny podziemny pawilon"
  ];

  const galleryImages = [
    '/images/etihad-museum-1.jpg',
    '/images/etihad-museum-2.jpg',
    '/images/etihad-museum-3.jpg',
    '/images/etihad-museum-4.jpg',
    '/images/etihad-museum-5.jpg',
    '/images/etihad-museum-6.jpg'
  ];

  const mainAttractions = [
    {
      title: "Sala Założycielska",
      description: "Prezentuje kluczowe momenty prowadzące do powstania ZEA, w tym podpisanie konstytucji."
    },
    {
      title: "Galeria Ojców Założycieli",
      description: "Poświęcona ojcom założycielom ZEA, prezentująca osobiste artefakty i historyczne fotografie."
    },
    {
      title: "Interaktywna Oś Czasu",
      description: "Cyfrowa podróż przez historię ZEA od lat 60. do utworzenia unii."
    },
    {
      title: "Drzewo Unii",
      description: "Immersyjna instalacja reprezentująca wzrost i jedność siedmiu emiratów."
    },
    {
      title: "Sala Wystaw Czasowych",
      description: "Gości rotacyjne wystawy skupiające się na różnych aspektach historii i kultury ZEA."
    },
    {
      title: "Centrum Zasobów",
      description: "Placówka badawcza z obszernymi archiwami i dokumentami historycznymi."
    }
  ];

  const practicalInfo = [
    {
      icon: <FaBus className="text-2xl text-gold-500" />,
      title: "Jak Dojechać",
      details: "Znajduje się w Jumeirah 1, łatwo dostępne samochodem lub taksówką. Najbliższa stacja metra to Al Jafiliya, następnie krótka przejażdżka taksówką."
    },
    {
      icon: <FaParking className="text-2xl text-gold-500" />,
      title: "Parking",
      details: "Bezpłatny parking dostępny na miejscu z dużą ilością miejsc dla odwiedzających."
    },
    {
      icon: <FaWheelchair className="text-2xl text-gold-500" />,
      title: "Dostępność",
      details: "W pełni dostępne dla wózków inwalidzkich z podjazdami i windami w całym muzeum."
    },
    {
      icon: <FaCamera className="text-2xl text-gold-500" />,
      title: "Fotografia",
      details: "Fotografowanie dozwolone w większości obszarów, z wyjątkiem niektórych wystaw specjalnych."
    }
  ];

  const history = [
    {
      year: "2012",
      event: "Ogłoszenie projektu i rozpoczęcie konkursu na projekt"
    },
    {
      year: "2014",
      event: "Rozpoczęcie budowy muzeum"
    },
    {
      year: "2016",
      event: "Oficjalne otwarcie Muzeum Etihad dla publiczności"
    },
    {
      year: "2017",
      event: "Otrzymuje nagrodę 'Najlepsze Nowe Muzeum na Bliskim Wschodzie'"
    },
    {
      year: "2018",
      event: "Uruchomienie programów edukacyjnych dla szkół"
    },
    {
      year: "2020",
      event: "Wprowadzenie wirtualnych wycieczek i wystaw cyfrowych"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/etihad-museum.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Muzeum Etihad</h1>
            <p className="text-xl mb-8">Odkryj Historię Powstania ZEA</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
              onClick={() => window.open('https://www.getyourguide.com/dubai-l173/dubai-old-town-markets-tasting-food-abra-boat-ride-t523026/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd', '_blank')}
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
            <p className="text-gray-600">10:00 - 20:00</p>
            <p className="text-gray-500 text-sm">Codziennie</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">1 Jumeirah Street</p>
            <p className="text-gray-500 text-sm">Jumeirah 1</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Cena Biletu</h3>
            <p className="text-gray-600">Od 25 AED</p>
            <p className="text-gray-500 text-sm">za osobę</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaStar className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.6/5</p>
            <p className="text-gray-500 text-sm">od odwiedzających</p>
          </motion.div>
        </div>

        {/* About Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">O Muzeum Etihad</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-6">
              Muzeum Etihad to nowoczesne muzeum poświęcone historii powstania Zjednoczonych Emiratów Arabskich. 
              Zlokalizowane w miejscu, gdzie w 1971 roku podpisano konstytucję ZEA, muzeum prezentuje fascynującą 
              podróż przez historię zjednoczenia siedmiu emiratów.
            </p>
            <p className="text-gray-600">
              Dzięki innowacyjnym wystawom interaktywnym i bogatym zbiorom historycznym, muzeum oferuje 
              wyjątkowe spojrzenie na proces formowania się narodu. Nowoczesna architektura budynku, 
              przypominająca kształtem manuskrypt, sama w sobie jest dziełem sztuki i symbolem postępu ZEA.
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
                  alt={`Muzeum Etihad - Zdjęcie ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Ticket Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Bilety i Wycieczki</h2>
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

export default EtihadMuseumPage;
