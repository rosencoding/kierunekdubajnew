import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaBus, FaParking, FaWheelchair, FaCamera, FaCoffee, FaPalette, FaHome } from 'react-icons/fa';

const AlFahidiPage = () => {
  const funFacts = [
    "Zbudowana w latach 1800 przez perskich kupców",
    "Charakteryzuje się tradycyjną architekturą wież wiatrowych",
    "Mieści ponad 50 przestrzeni kulturalnych",
    "Historycznie znana jako 'Bastakiya'",
    "Znajduje się tu najstarszy budynek w Dubaju (lata 1780)",
    "Zachowana dzięki gruntownej renowacji w 2005 roku",
    "Posiada wąskie sikkas (alejki) i dziedzińce",
    "Prezentuje autentyczną architekturę arabską"
  ];

  const galleryImages = [
    '/images/al-fahidi-1.jpg',
    '/images/al-fahidi-2.jpg',
    '/images/al-fahidi-3.jpg',
    '/images/al-fahidi-4.jpg',
    '/images/al-fahidi-5.jpg',
    '/images/al-fahidi-6.jpg'
  ];

  const ticketOptions = [];

  const mainAttractions = [
    {
      title: "Muzeum Dubaju",
      description: "Znajduje się w historycznym Forcie Al Fahidi, przedstawia historię Dubaju od wioski rybackiej do nowoczesnej metropolii."
    },
    {
      title: "Muzeum Kawy",
      description: "Poznaj historię kawy w świecie arabskim i na świecie, z pokazami tradycyjnego parzenia kawy."
    },
    {
      title: "Hotel i Galeria XVA Art",
      description: "Współczesna galeria sztuki i butikowy hotel mieszczący się w odrestaurowanym budynku zabytkowym."
    },
    {
      title: "Tradycyjna Architektura",
      description: "Historyczne wieże wiatrowe (barajeel) i budynki z kamienia koralowego z tradycyjnymi elementami architektonicznymi."
    },
    {
      title: "Centra Kulturalne",
      description: "Różne centra kulturalne, w tym Centrum Zrozumienia Kulturowego Szejka Mohammeda."
    },
    {
      title: "Galerie Sztuki",
      description: "Liczne galerie prezentujące lokalną i międzynarodową sztukę współczesną."
    }
  ];

  const practicalInfo = [
    {
      icon: <FaBus className="text-2xl text-gold-500" />,
      title: "Jak Dojechać",
      details: "Znajduje się w Bur Dubai. Najbliższa stacja metra to Al Fahidi, 5 minut spacerem. Dostępne taksówki wodne z Dubai Creek."
    },
    {
      icon: <FaParking className="text-2xl text-gold-500" />,
      title: "Parking",
      details: "Dostępny parking publiczny w pobliżu. Strefy płatnego parkowania w rozsądnych cenach."
    },
    {
      icon: <FaWheelchair className="text-2xl text-gold-500" />,
      title: "Dostępność",
      details: "Większość głównych ścieżek jest dostępna dla wózków inwalidzkich. Niektóre zabytkowe budynki mogą mieć ograniczony dostęp."
    },
    {
      icon: <FaCamera className="text-2xl text-gold-500" />,
      title: "Fotografia",
      details: "Fotografowanie dozwolone w większości miejsc. Niektóre galerie mogą mieć ograniczenia."
    }
  ];

  const history = [
    {
      year: "1800s",
      event: "Osada założona przez perskich kupców z Bastak w Iranie"
    },
    {
      year: "1900s",
      event: "Rozwój wież wiatrowych i tradycyjnej architektury"
    },
    {
      year: "1970s",
      event: "Obszarowi groziła rozbiórka pod nowoczesną zabudowę"
    },
    {
      year: "1980s",
      event: "Rozpoczęcie działań na rzecz ochrony dzielnicy historycznej"
    },
    {
      year: "2005",
      event: "Zakończenie głównego projektu renowacji"
    },
    {
      year: "2015",
      event: "Uznanie za kluczowy obiekt dziedzictwa kulturowego"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/al-fahidi.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Dzielnica Historyczna Al Fahidi</h1>
            <p className="text-xl mb-8">Podróż w Czasie do Starego Dubaju</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
              onClick={() => window.open('https://www.getyourguide.com/dubai-l173/dubai-street-food-souks-emirati-house-walking-tour-t409518/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd', '_blank')}
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
            <p className="text-gray-600">9:00 - 21:00</p>
            <p className="text-gray-500 text-sm">Codziennie</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Ulica Al Fahidi</p>
            <p className="text-gray-500 text-sm">Bur Dubai</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Cena Wycieczki</h3>
            <p className="text-gray-600">Od 65 AED</p>
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
          <h2 className="text-3xl font-bold mb-6">O Dzielnicy Historycznej Al Fahidi</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-6">
              Dzielnica Historyczna Al Fahidi, znana również jako Al Bastakiya, jest jednym z najstarszych obszarów dziedzictwa w Dubaju, pochodzącym z lat 1800. Ten dobrze zachowany obszar prezentuje tradycyjną architekturę i styl życia regionu Zatoki Perskiej, z ikonicznymi wieżami wiatrowymi, wąskimi uliczkami i budynkami z kamienia koralowego.
            </p>
            <p className="text-gray-600">
              Dziś dzielnica służy jako centrum kulturalne, mieszczące muzea, galerie sztuki, tradycyjne restauracje i centra kulturalne. Autentyczna architektura arabska, wraz z wieżami wiatrowymi (barajeel), dziedzińcami i sikkas (alejkami), oferuje odwiedzającym wgląd w przeszłość Dubaju, jednocześnie goszcząc współczesne wystawy sztuki i wydarzenia kulturalne.
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
                  alt={`Galeria Dzielnicy Historycznej Al Fahidi ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Ticket Options */}
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
              data-gyg-tour-ids="642556,409518,160202"
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
          <h2 className="text-3xl font-bold mb-6">Porady dla Odwiedzających</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <FaCalendarAlt className="text-gold-500 mt-1" />
                <p className="text-gray-600">Odwiedź wczesnym rankiem lub późnym popołudniem, aby uniknąć upału</p>
              </div>
              <div className="flex items-start space-x-3">
                <FaCoffee className="text-gold-500 mt-1" />
                <p className="text-gray-600">Spróbuj tradycyjnej arabskiej kawy w lokalnych kawiarniach</p>
              </div>
              <div className="flex items-start space-x-3">
                <FaPalette className="text-gold-500 mt-1" />
                <p className="text-gray-600">Sprawdź harmonogram galerii, aby zobaczyć wystawy</p>
              </div>
              <div className="flex items-start space-x-3">
                <FaHome className="text-gold-500 mt-1" />
                <p className="text-gray-600">Zwiedź wąskie sikkas między budynkami</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlFahidiPage;
