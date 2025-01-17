import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaLightbulb, FaTree, FaCamera, FaHistory, FaLeaf, FaRecycle, FaBus, FaParking, FaWheelchair } from 'react-icons/fa';

const DubaiGardenGlowPage = () => {
  const funFacts = [
    "Największy świecący ogród na świecie",
    "Ponad 10 milionów energooszczędnych lamp LED",
    "Nowe motywy i instalacje każdego sezonu",
    "Łączy sztukę, technologię i naturę",
    "Wykorzystuje materiały w 100% przyjazne środowisku",
    "Interaktywne i edukacyjne ekspozycje",
    "Ponad 500 000 odwiedzających rocznie",
    "Ponad 500 artystycznych instalacji"
  ];

  const galleryImages = [
    '/images/dubai-garden-glow-1.jpg',
    '/images/dubai-garden-glow.jpg',
    '/images/dubai-garden-glow-2.jpg',
    '/images/dubai-garden-glow-3.jpg',
    '/images/dubai-garden-glow-4.jpg',
    '/images/dubai-garden-glow-5.jpg'
  ];

  const attractions = [
    {
      title: "Świecący Ogród",
      description: "Zachwycające świetlne instalacje artystyczne stworzone z milionów lamp LED."
    },
    {
      title: "Park Dinozaurów",
      description: "Ekspozycja z naturalnymi rozmiarami animowanych dinozaurów, prezentująca ponad 100 prehistorycznych stworzeń."
    },
    {
      title: "Park Sztuki",
      description: "Wyjątkowe instalacje artystyczne wykonane z materiałów pochodzących z recyklingu i porcelanowych filiżanek."
    },
    {
      title: "Park Magii",
      description: "Złudzenia optyczne i interaktywne instalacje idealne do wyjątkowych zdjęć."
    }
  ];

  const history = [
    {
      year: "2015",
      event: "Dubai Garden Glow otwiera swoje podwoje jako pierwszy świecący park rozrywki na Bliskim Wschodzie"
    },
    {
      year: "2016",
      event: "Dodanie Parku Dinozaurów z animatronicznymi prehistorycznymi stworzeniami"
    },
    {
      year: "2017",
      event: "Wprowadzenie Parku Sztuki z instalacjami z materiałów z recyklingu"
    },
    {
      year: "2018",
      event: "Otwarcie Parku Magii ze złudzeniami optycznymi"
    },
    {
      year: "2020",
      event: "Wdrożenie technologii cyfrowej i interaktywnych ekspozycji"
    },
    {
      year: "2023",
      event: "Duża renowacja z nową technologią LED i zrównoważonymi rozwiązaniami"
    }
  ];

  const practicalInfo = [
    {
      icon: <FaBus className="text-2xl text-gold-500" />,
      title: "Jak Dojechać",
      details: "Znajduje się w Zabeel Park, Brama 6 i 7. Dostępny metrem (stacja Al Jafiliya) i autobusami linii 21, 29, 88"
    },
    {
      icon: <FaParking className="text-2xl text-gold-500" />,
      title: "Parking",
      details: "Bezpłatny parking dostępny przy Bramach 6 i 7 Zabeel Park"
    },
    {
      icon: <FaWheelchair className="text-2xl text-gold-500" />,
      title: "Dostępność",
      details: "Dostępny dla wózków inwalidzkich z utwardzonymi ścieżkami w całym parku"
    },
    {
      icon: <FaLeaf className="text-2xl text-gold-500" />,
      title: "Zrównoważony Rozwój",
      details: "Wykorzystuje energooszczędne lampy LED i systemy zasilania słonecznego"
    }
  ];

  const ticketOptions = [];

  const experiences = [
    {
      title: "Fotografia Nocna",
      description: "Wykonuj zapierające dech w piersiach zdjęcia oświetlonych instalacji artystycznych."
    },
    {
      title: "Wycieczki Edukacyjne",
      description: "Poznaj zagadnienia zrównoważonego rozwoju i ochrony środowiska poprzez interaktywne ekspozycje."
    },
    {
      title: "Rozrywka Rodzinna",
      description: "Zabawne aktywności i pokazy odpowiednie dla odwiedzających w każdym wieku."
    },
    {
      title: "Doświadczenie Kulturowe",
      description: "Doświadcz artystycznych reprezentacji światowych zabytków i motywów kulturowych."
    }
  ];

  const activities = [
    "Zwiedzanie świecących ogrodów",
    "Wizyta w Parku Dinozaurów",
    "Zdjęcia w Parku Magii",
    "Odkrywanie Parku Sztuki",
    "Oglądanie występów na żywo",
    "Wycieczki z przewodnikiem",
    "Odwiedzanie stoisk z jedzeniem",
    "Interaktywne pokazy świetlne",
    "Warsztaty edukacyjne",
    "Zakupy pamiątek"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/dubai-garden-glow.jpg"
          alt="Dubai Garden Glow"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Dubai Garden Glow
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Największy Świecący Ogród na Świecie
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="https://www.dubaigardenglow.com/tickets"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-500 hover:bg-gold-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg inline-flex items-center space-x-2"
              >
                <FaTicketAlt />
                <span>Kup Bilety</span>
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
            <p className="text-gray-600">16:00 - 23:00</p>
            <p className="text-gray-500 text-sm">Codziennie</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Zabeel Park</p>
            <p className="text-gray-500 text-sm">Brama 6</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Cena Biletu</h3>
            <p className="text-gray-600">Od AED 65</p>
            <p className="text-gray-500 text-sm">za osobę</p>
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

        {/* About Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">O Dubai Garden Glow</h2>
          <p className="text-gray-600 mb-6">
            Dubai Garden Glow to wyjątkowa atrakcja, która łączy sztukę, technologię i naturę, tworząc magiczne doświadczenie nocne. Park prezentuje miliony energooszczędnych lamp LED w przepięknych instalacjach artystycznych, a także edukacyjne ekspozycje na temat zrównoważonego rozwoju i ochrony środowiska.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((experience, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold mb-2">{experience.title}</h3>
                <p className="text-gray-600">{experience.description}</p>
              </div>
            ))}
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
                  alt={`Dubai Garden Glow Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Ticket Options */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Bilety</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div 
              data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
              data-gyg-locale-code="pl-PL" 
              data-gyg-widget="activities" 
              data-gyg-number-of-items="3" 
              data-gyg-cmp="kd-attracion" 
              data-gyg-partner-id="19WQ75B" 
              data-gyg-tour-ids="564157,62688,519121"
            >
              <span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/dubai-garden-glow-l169697/dubai-garden-glow-t62688/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd">GetYourGuide</a></span>
            </div>
          </div>
        </div>

        {/* Attractions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Główne Atrakcje</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {attractions.map((attraction, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold mb-2">{attraction.title}</h3>
                <p className="text-gray-600">{attraction.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Co Można Zrobić</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <p className="text-gray-600">{activity}</p>
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
            <p className="text-gray-600 mb-6">
              Dubai Garden Glow ewoluował od prostego parku świetlnego do wielowątkowej atrakcji, łączącej rozrywkę, edukację i świadomość ekologiczną. Od momentu otwarcia stale innowuje, aby zapewnić unikalne doświadczenia dla odwiedzających w każdym wieku.
            </p>
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

        {/* Environmental Impact */}
        <div className="mb-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <FaRecycle className="mr-3 text-gold-500" />
            Wpływ na Środowisko
          </h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Dubai Garden Glow jest zaangażowany w zrównoważony rozwój poprzez różne inicjatywy:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start space-x-3">
                <FaLeaf className="text-gold-500 mt-1" />
                <span>Używanie energooszczędnych systemów oświetlenia LED</span>
              </li>
              <li className="flex items-start space-x-3">
                <FaLeaf className="text-gold-500 mt-1" />
                <span>Integracja systemów zasilania słonecznego</span>
              </li>
              <li className="flex items-start space-x-3">
                <FaLeaf className="text-gold-500 mt-1" />
                <span>Używanie materiałów z recyklingu w instalacjach artystycznych</span>
              </li>
              <li className="flex items-start space-x-3">
                <FaLeaf className="text-gold-500 mt-1" />
                <span>Praktyki oszczędzania wody</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Ciekawostki</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {funFacts.map((fact, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
                <FaLightbulb className="text-2xl text-gold-500 flex-shrink-0" />
                <p className="text-gray-600">{fact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-3xl font-bold mb-6">Porady dla Odwiedzających</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <FaInfoCircle className="text-2xl text-gold-500 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Najlepszy Czas na Wizytę</h3>
                <p className="text-gray-600">Odwiedź po zachodzie słońca, aby doświadczyć najlepszych efektów oświetlenia. Wieczory w dni powszednie są zwykle mniej zatłoczone.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaCamera className="text-2xl text-gold-500 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Porady Fotograficzne</h3>
                <p className="text-gray-600">Przynieś aparat z dobrą jakością zdjęć w niskim świetle. Statywy są dozwolone dla lepszej fotografii nocnej.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DubaiGardenGlowPage;
