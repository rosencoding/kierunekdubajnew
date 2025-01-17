import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaBus, FaParking, FaWheelchair, FaLanguage, FaBook, FaCamera, FaChild } from 'react-icons/fa';

const DubaiMuseumPage = () => {
  const funFacts = [
    "Najstarszy istniejący budynek w Dubaju (Fort Al Fahidi, zbudowany w 1787)",
    "Posiada naturalnej wielkości dioramy przedstawiające życie dawnego Dubaju",
    "Przechowuje artefakty datowane na 3000 lat p.n.e.",
    "Podziemne galerie z kontrolą klimatu",
    "Oryginalny fort służył jako rezydencja władcy",
    "Zawiera ekspozycję tradycyjnego nurkowania za perłami",
    "Prezentuje zrekonstruowane tradycyjne suki",
    "Przechowuje rzadkie starożytne artefakty z odkrytych grobów"
  ];

  const ticketOptions = [];

  const mainAttractions = [
    {
      title: "Fort Al Fahidi",
      description: "Najstarszy istniejący budynek w Dubaju, zbudowany w 1787 roku. Pierwotnie służył jako pałac, forteca i więzienie."
    },
    {
      title: "Galeria Tradycyjnych Łodzi",
      description: "Wystawa tradycyjnych drewnianych łodzi i statków do nurkowania za perłami, prezentująca morskie dziedzictwo Dubaju."
    },
    {
      title: "Diorama Dubai Creek",
      description: "Naturalnej wielkości rekonstrukcja starego Dubai Creek, pokazująca tradycyjny handel i połów pereł."
    },
    {
      title: "Wystawy Archeologiczne",
      description: "Kolekcja artefaktów z wykopanych grobów, datowanych na trzecie tysiąclecie p.n.e."
    },
    {
      title: "Tradycyjny Dom",
      description: "Rekonstrukcja tradycyjnego domu w Dubaju, wyposażona w autentyczne meble i przedmioty codziennego użytku."
    },
    {
      title: "Ekspozycja Broni",
      description: "Kolekcja tradycyjnej broni, w tym mieczy, włóczni, tarcz i broni palnej z różnych okresów."
    }
  ];

  const practicalInfo = [
    {
      icon: <FaBus className="text-2xl text-gold-500" />,
      title: "Jak Dojechać",
      details: "Znajduje się w Forcie Al Fahidi, Bur Dubai. Najbliższa stacja metra to Al Fahidi, następnie krótki spacer."
    },
    {
      icon: <FaParking className="text-2xl text-gold-500" />,
      title: "Parking",
      details: "Parking publiczny dostępny w pobliskiej dzielnicy Al Fahidi. Kilka stref płatnego parkowania w zasięgu spaceru."
    },
    {
      icon: <FaWheelchair className="text-2xl text-gold-500" />,
      title: "Dostępność",
      details: "Parter i podziemne galerie są dostępne dla wózków inwalidzkich. Niektóre obszary fortu mają ograniczony dostęp."
    },
    {
      icon: <FaLanguage className="text-2xl text-gold-500" />,
      title: "Języki",
      details: "Informacje wyświetlane w języku arabskim i angielskim. Przewodniki audio dostępne w wielu językach."
    }
  ];

  const history = [
    {
      year: "1787",
      event: "Budowa Fortu Al Fahidi"
    },
    {
      year: "1800s",
      event: "Fort służy jako rezydencja rodziny królewskiej i siedziba rządu"
    },
    {
      year: "1971",
      event: "Fort przekształcony w muzeum po utworzeniu ZEA"
    },
    {
      year: "1995",
      event: "Główna renowacja i dodanie podziemnych galerii"
    },
    {
      year: "2007",
      event: "Instalacja nowych ekspozycji multimedialnych"
    },
    {
      year: "2012",
      event: "Dodanie interaktywnych ekspozycji edukacyjnych"
    }
  ];

  const galleryImages = [
    '/images/dubai-museum-1.jpg',
    '/images/dubai-museum-2.jpg',
    '/images/dubai-museum-3.jpg',
    '/images/dubai-museum-4.jpg',
    '/images/dubai-museum-5.jpg',
    '/images/dubai-museum-6.jpg'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/dubai-museum.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Muzeum Dubaju</h1>
            <p className="text-xl mb-8">Podróż Przez Bogatą Historię Dubaju</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
              onClick={() => window.open('https://www.getyourguide.com/dubai-l173/dubai-old-town-markets-tasting-food-abra-boat-ride-t523026/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd', '_blank')}
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
            <p className="text-gray-600">8:30 - 20:30</p>
            <p className="text-gray-500 text-sm">Pt: 14:30 - 20:30</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Fort Al Fahidi</p>
            <p className="text-gray-500 text-sm">Bur Dubai</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Cena Wstępu</h3>
            <p className="text-gray-600">3 AED</p>
            <p className="text-gray-500 text-sm">Dzieci: 1 AED</p>
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
          <h2 className="text-3xl font-bold mb-6">O Muzeum Dubaju</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-6">
              Muzeum Dubaju, mieszczące się w historycznym Forcie Al Fahidi, jest najstarszym istniejącym budynkiem w Dubaju i zapewnia fascynujący wgląd w bogatą historię i dziedzictwo kulturowe emiratu. Zbudowany w 1787 roku, fort służył jako pałac, forteca i więzienie, zanim został przekształcony w muzeum w 1971 roku.
            </p>
            <p className="text-gray-600">
              Muzeum łączy tradycyjne ekspozycje z nowoczesnymi interaktywnymi wystawami, prezentując podziemne galerie, które pokazują przemianę Dubaju z małej wioski rybackiej w globalne metropolis. Odwiedzający mogą zwiedzać naturalnej wielkości dioramy przedstawiające codzienne sceny z dawnego Dubaju, znaleziska archeologiczne datowane na 3000 lat p.n.e. oraz ekspozycje na temat nurkowania za perłami, tradycyjnej architektury i lokalnych zwyczajów.
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
                  alt={`Muzeum Dubaju - Zdjęcie ${index + 1}`}
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
                <p className="text-gray-600">Odwiedź muzeum wcześnie rano, aby uniknąć tłumów</p>
              </div>
              <div className="flex items-start space-x-3">
                <FaCamera className="text-gold-500 mt-1" />
                <p className="text-gray-600">Fotografowanie dozwolone bez lampy błyskowej</p>
              </div>
              <div className="flex items-start space-x-3">
                <FaChild className="text-gold-500 mt-1" />
                <p className="text-gray-600">Idealne dla rodzin z dziećmi</p>
              </div>
              <div className="flex items-start space-x-3">
                <FaBook className="text-gold-500 mt-1" />
                <p className="text-gray-600">Przewodniki audio ulepszają doświadczenie</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DubaiMuseumPage;
