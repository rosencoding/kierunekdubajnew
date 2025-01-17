import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaBus, FaParking, FaWheelchair, FaCamera, FaUmbrellaBeach, FaWater, FaIceCream, FaCheck } from 'react-icons/fa';

const LaMerPage = () => {
  const funFacts = [
    "2,5 miliona stóp kwadratowych nabrzeża",
    "Ponad 130 restauracji i sklepów",
    "Unikalne instalacje sztuki ulicznej",
    "Znajduje się tu park wodny Laguna",
    "Inspirowane kulturą plaż Miami",
    "Pierwsza licencjonowana plaża w Dubaju",
    "Regularne festiwale plażowe",
    "Nagradzana koncepcja architektoniczna"
  ];

  const galleryImages = [
    '/images/la-mer-1.jpg',
    '/images/la-mer-2.jpg',
    '/images/la-mer-3.jpg',
    '/images/la-mer-4.jpg',
    '/images/la-mer-5.jpg',
    '/images/la-mer-6.jpg'
  ];

  const experiences = [];

  const mainAttractions = [
    {
      title: "Plaża La Mer",
      description: "Dziewicza plaża z krystalicznie czystą wodą, idealna do pływania i opalania."
    },
    {
      title: "Park Wodny Laguna",
      description: "Ekscytujący park wodny ze zjeżdżalniami, strefą surfingu i placem zabaw wodnych dla dzieci."
    },
    {
      title: "Strefa Restauracji",
      description: "Szeroki wybór restauracji oferujących kuchnie z całego świata."
    },
    {
      title: "Dzielnica Handlowa",
      description: "Unikalne sklepy z lokalnymi i międzynarodowymi markami."
    },
    {
      title: "Sztuka Uliczna",
      description: "Kolorowe murale i instalacje lokalnych i międzynarodowych artystów."
    },
    {
      title: "Strefa Rozrywki",
      description: "Regularne wydarzenia, występy na żywo i sezonowe festiwale."
    }
  ];

  const practicalInfo = [
    {
      icon: <FaBus className="text-2xl text-gold-500" />,
      title: "Jak Dojechać",
      details: "Znajduje się w Jumeirah 1. Dostępne dojazd samochodem, taksówką lub autobusem. Parking na miejscu."
    },
    {
      icon: <FaParking className="text-2xl text-gold-500" />,
      title: "Parking",
      details: "Bezpłatny parking podziemny. Dodatkowe miejsca parkingowe przy ulicy."
    },
    {
      icon: <FaWheelchair className="text-2xl text-gold-500" />,
      title: "Dostępność",
      details: "Dostępne dla wózków inwalidzkich. Wózki plażowe dostępne na życzenie."
    },
    {
      icon: <FaCamera className="text-2xl text-gold-500" />,
      title: "Fotografia",
      details: "Dozwolone robienie zdjęć. Popularne miejsce do tworzenia treści w mediach społecznościowych."
    }
  ];

  const history = [
    {
      year: "2017",
      event: "Otwarcie La Mer"
    },
    {
      year: "2018",
      event: "Otwarcie parku wodnego Laguna"
    },
    {
      year: "2019",
      event: "Wprowadzenie klubów plażowych"
    },
    {
      year: "2020",
      event: "Dodanie nowych konceptów gastronomicznych"
    },
    {
      year: "2022",
      event: "Rozbudowa strefy handlowej"
    },
    {
      year: "2023",
      event: "Nowe obiekty rozrywkowe"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/la-mer.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">La Mer Dubai</h1>
            <p className="text-xl mb-8">Najlepsza Nadmorska Destynacja w Dubaju</p>
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
            <p className="text-gray-600">10:00 - 24:00</p>
            <p className="text-gray-500 text-sm">Restauracje do późna</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Jumeirah 1</p>
            <p className="text-gray-500 text-sm">Jumeirah Road, Dubaj</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Wstęp</h3>
            <p className="text-gray-600">Bezpłatny</p>
            <p className="text-gray-500 text-sm">Płatny parking</p>
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
          <h2 className="text-3xl font-bold mb-6">O La Mer</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-6">
              La Mer to wspaniała nadmorska destynacja w Dubaju, która łączy życie miejskie z relaksem na plaży. Zajmując 2,5 miliona stóp kwadratowych istniejącej i odzyskanej ziemi, ta światowej klasy destynacja oferuje czyste plaże, park wodny, sklepy, restauracje i rozrywkę.
            </p>
            <p className="text-gray-600">
              Z kolorowymi domkami plażowymi, muralami i palmowymi alejkami, La Mer tworzy wyjątkową atmosferę inspirowaną kulturą plaż Miami. Destynacja oferuje coś dla każdego, od sportów wodnych i aktywności plażowych po zakupy i doświadczenia kulinarne.
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
                  alt={`La Mer Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Experiences */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Doświadczenia Plaży</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div 
              data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
              data-gyg-locale-code="pl-PL" 
              data-gyg-widget="activities" 
              data-gyg-number-of-items="8" 
              data-gyg-partner-id="19WQ75B" 
              data-gyg-q="dubaj"
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
                <p className="text-gray-600">Odwiedź w dni powszednie, aby uniknąć tłumów</p>
              </div>
              <div className="flex items-start space-x-3">
                <FaUmbrellaBeach className="text-gold-500 mt-1" />
                <p className="text-gray-600">Zarezerwuj wyposażenie plażowe z wyprzedzeniem</p>
              </div>
              <div className="flex items-start space-x-3">
                <FaWater className="text-gold-500 mt-1" />
                <p className="text-gray-600">Spróbuj parku wodnego Laguna w godzinach porannych</p>
              </div>
              <div className="flex items-start space-x-3">
                <FaIceCream className="text-gold-500 mt-1" />
                <p className="text-gray-600">Odkryj unikalne koncepty gastronomiczne</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaMerPage;
