import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaBus, FaParking, FaWheelchair, FaCamera, FaUtensils, FaWater, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ThePointePage = () => {
  const funFacts = [
    "Największy pokaz fontann na świecie",
    "Ponad 80 unikalnych restauracji",
    "Promenada o długości 1,4 kilometra",
    "Bezpośredni widok na Atlantis, The Palm",
    "Fontanna Palm z 3000 lampami LED",
    "Nadmorska destynacja o powierzchni 7327 metrów kwadratowych",
    "Fontanna osiąga wysokość 105 metrów",
    "Kuchnia ponad 20 narodowości"
  ];

  const galleryImages = [
    '/images/the-pointe-1.jpg',
    '/images/the-pointe-2.jpg',
    '/images/the-pointe-3.jpg',
    '/images/the-pointe-4.jpg',
    '/images/the-pointe-5.jpg',
    '/images/the-pointe-6.jpg'
  ];

  const experiences = [
    {
      name: "Pokaz Palm Fountain",
      price: "Bezpłatnie",
      includes: [
        "Największy pokaz fontann na świecie",
        "Spektakl światła i muzyki",
        "Wiele pokazów dziennie",
        "Najlepsze punkty widokowe"
      ],
      link: "#"
    },
    {
      name: "Pakiet Kolacja & Widok",
      price: "Od 150 AED",
      includes: [
        "Zarezerwowane miejsca w restauracji",
        "Kolacja z widokiem na fontannę",
        "Specjalne menu",
        "Parking z obsługą"
      ],
      link: "#"
    },
    {
      name: "Doświadczenie Zakupowe",
      price: "Płać za to, co kupujesz",
      includes: [
        "Terapia zakupowa",
        "Międzynarodowe marki",
        "Butiki",
        "Sklepy z pamiątkami"
      ],
      link: "#"
    }
  ];

  const mainAttractions = [
    {
      title: "The Palm Fountain",
      description: "Największa fontanna na świecie, prezentująca codzienne pokazy z muzyką, światłami i wodą wznoszącą się na wysokość 105 metrów."
    },
    {
      title: "Nadmorska Promenada",
      description: <>Promenada o długości 1,4 km oferująca zapierające dech w piersiach widoki na <Link to="/atrakcje/palm-jumeirah">Atlantis, The Palm</Link> i Zatokę Arabską.</>
    },
    {
      title: "Dzielnica Restauracyjna",
      description: "Ponad 80 restauracji i kawiarni oferujących kuchnie z całego świata, z miejscami do siedzenia wewnątrz i na zewnątrz."
    },
    {
      title: "Aleja Handlowa",
      description: "Różnorodne sklepy oferujące międzynarodowe marki, lokalne butiki i pamiątki."
    },
    {
      title: "Plac Rozrywki",
      description: "Regularne wydarzenia, występy na żywo i sezonowe celebracje przez cały rok."
    },
    {
      title: "Dostęp do Plaży",
      description: "Bezpośredni dostęp do dziewiczych plaż Palm Jumeirah i aktywności wodnych."
    }
  ];

  const practicalInfo = [
    {
      icon: <FaBus className="text-2xl text-gold-500" />,
      title: "Jak Dojechać",
      details: "Znajduje się na Palm Jumeirah. Dostępne samochodem, taksówką lub kolejką Palm Monorail. Bezpłatny bus wahadłowy z Nakheel Mall."
    },
    {
      icon: <FaParking className="text-2xl text-gold-500" />,
      title: "Parking",
      details: "Dostępny bezpłatny parking z ponad 1600 miejscami. Parking z obsługą dostępny przy głównych wejściach."
    },
    {
      icon: <FaWheelchair className="text-2xl text-gold-500" />,
      title: "Dostępność",
      details: "W pełni dostępne dla wózków inwalidzkich z podjazdami i windami. Serwis wózków inwalidzkich dostępny na życzenie."
    },
    {
      icon: <FaCamera className="text-2xl text-gold-500" />,
      title: "Fotografia",
      details: "Dozwolone fotografowanie w całym obiekcie. Oznaczone najlepsze punkty do zdjęć fontanny."
    }
  ];

  const history = [
    {
      year: "2018",
      event: "Rozpoczęcie budowy projektu The Pointe"
    },
    {
      year: "2019",
      event: "Oficjalne otwarcie The Pointe"
    },
    {
      year: "2020",
      event: "Uruchomienie The Palm Fountain"
    },
    {
      year: "2021",
      event: "Rekord Guinnessa dla największej fontanny"
    },
    {
      year: "2022",
      event: "Dodanie nowych konceptów gastronomicznych"
    },
    {
      year: "2023",
      event: "Uruchomienie ulepszonych pokazów fontanny"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/the-pointe.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">The Pointe</h1>
            <p className="text-xl mb-8">Najlepsza Nadmorska Destynacja w Dubaju</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              Odkryj Teraz
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
            <p className="text-gray-500 text-sm">Restauracje do 2:00</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">The Pointe</p>
            <p className="text-gray-500 text-sm">Palm Jumeirah, Dubaj</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Wstęp</h3>
            <p className="text-gray-600">Wstęp Bezpłatny</p>
            <p className="text-gray-500 text-sm">Pokaz fontann w cenie</p>
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
          <h2 className="text-3xl font-bold mb-6">O The Pointe</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-6">
              The Pointe to ikoniczna nadmorska destynacja gastronomiczna i rozrywkowa na Palm Jumeirah, oferująca zapierające dech w piersiach widoki na Zatokę Arabską i Atlantis, The Palm. Ta wibrująca destynacja jest domem dla Palm Fountain, największej fontanny na świecie, która prezentuje codzienne pokazy z muzyką, światłami i wodą wznoszącą się na wysokość 105 metrów.
            </p>
            <p className="text-gray-600">
              The Pointe rozciąga się na 1,4 km promenady i oferuje ponad 80 restauracji, kawiarni i sklepów. Destynacja oferuje różnorodne kuchnie, opcje rozrywki i aktywności rekreacyjne, co czyni ją idealną dla rodzin, par i przyjaciół szukających niezapomnianych wrażeń.
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
                  alt={`The Pointe Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
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
                <p className="text-gray-600">Odwiedź wieczorem, aby zobaczyć pokaz fontanny</p>
              </div>
              <div className="flex items-start space-x-3">
                <FaUtensils className="text-gold-500 mt-1" />
                <p className="text-gray-600">Zarezerwuj restaurację z wyprzedzeniem, aby mieć najlepszy widok</p>
              </div>
              <div className="flex items-start space-x-3">
                <FaWater className="text-gold-500 mt-1" />
                <p className="text-gray-600">Sprawdź godziny pokazów fontanny online</p>
              </div>
              <div className="flex items-start space-x-3">
                <FaShoppingBag className="text-gold-500 mt-1" />
                <p className="text-gray-600">Odwiedź w dni powszednie, aby uniknąć tłumów</p>
              </div>
            </div>
          </div>
        </div>

        {/* GetYourGuide Widget */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Sprawdź inne atrakcje</h2>
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

export default ThePointePage;
