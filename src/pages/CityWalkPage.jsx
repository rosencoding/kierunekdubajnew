import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaTheaterMasks, FaStore, FaLeaf } from 'react-icons/fa';

const CityWalkPage = () => {
  const funFacts = [
    "City Walk zajmuje ponad 10 milionów stóp kwadratowych powierzchni handlowej",
    "Posiada unikalne instalacje street art stworzone przez międzynarodowych artystów",
    "Znajduje się tu The Green Planet - biodome z ponad 3000 roślin i zwierząt",
    "Mieści pierwszy w Dubaju inteligentny posterunek policji",
    "Oferuje zakupy w europejskim stylu pod gołym niebem",
    "Posiada klimatyzowane alejki w okresie letnim"
  ];

  const galleryImages = [
    '/images/city-walk-1.jpg',
    '/images/city-walk-2.jpg',
    '/images/city-walk-3.jpg',
    '/images/city-walk-4.jpg',
    '/images/city-walk-5.jpg',
    '/images/city-walk.jpg'
  ];

  const attractions = [
    {
      title: "The Green Planet",
      description: "Tropikalny las deszczowy pod dachem z ponad 3000 roślin i zwierząt, z 25-metrowym sztucznym drzewem."
    },
    {
      title: "Dzielnica Handlowa",
      description: "Ponad 200 lokalnych i międzynarodowych marek oferujących modę, akcesoria i produkty lifestyle."
    },
    {
      title: "Bulwar Restauracyjny",
      description: "Różnorodny wybór restauracji i kawiarni oferujących kuchnie z całego świata z miejscami na świeżym powietrzu."
    },
    {
      title: "Strefa Rozrywki",
      description: "Centrum gier Hub Zero, kina Roxy Cinemas i różne miejsca rozrywki dla wszystkich grup wiekowych."
    }
  ];

  const experiences = [
    {
      title: "Doświadczenie Green Planet",
      description: "Odkryj pionowy las tropikalny i wejdź w interakcję z egzotycznymi zwierzętami w tym immersyjnym bio-kopule."
    },
    {
      title: "Doświadczenie Zakupowe",
      description: "Przeglądaj ekskluzywne butiki i międzynarodowe marki w otoczeniu inspirowanym europejską architekturą."
    },
    {
      title: "Doświadczenie Kulinarne",
      description: "Ciesz się jedzeniem na świeżym powietrzu w licznych restauracjach oferujących globalne kuchnie i lokalne przysmaki."
    },
    {
      title: "Wycieczka Szlakiem Street Artu",
      description: "Odkryj zachwycające murale i instalacje międzynarodowych artystów w całej dzielnicy."
    }
  ];

  const activities = [
    "Odwiedź biodome The Green Planet",
    "Zrób zakupy w luksusowych sklepach",
    "Zjedz w restauracjach światowej klasy",
    "Wybierz się na wycieczkę szlakiem street artu",
    "Obejrzyj film w Roxy Cinemas",
    "Odpoczywaj w kawiarniach na świeżym powietrzu",
    "Odwiedź centrum gier Hub Zero",
    "Zrób zdjęcia idealne na Instagram",
    "Weź udział w sezonowych wydarzeniach",
    "Doświadcz życia nocnego"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/city-walk.jpg"
          alt="City Walk Dubai"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              City Walk Dubai
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Najlepsza Destynacja Lifestyle w Dubaju
            </p>
            {/* Book Tickets Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="https://www.getyourguide.com/dubai-l173/dubai-city-walk-green-planet-tickets-t401324/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg inline-flex items-center space-x-2"
              >
                <FaTicketAlt />
                <span>Kup Bilety do Green Planet</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaClock className="w-8 h-8 text-teal-500 mb-4" />
            <h3 className="font-semibold mb-2">Godziny Otwarcia</h3>
            <p className="text-gray-600">10:00 - 24:00</p>
            <p className="text-gray-500 text-sm">Restauracje do późna</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-teal-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Al Safa Street</p>
            <p className="text-gray-500 text-sm">Al Wasl, Dubaj</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaTicketAlt className="w-8 h-8 text-teal-500 mb-4" />
            <h3 className="font-semibold mb-2">Wstęp</h3>
            <p className="text-gray-600">Bezpłatny</p>
            <p className="text-gray-500 text-sm">Dostępny parking</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaStar className="w-8 h-8 text-teal-500 mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.7/5</p>
            <p className="text-gray-500 text-sm">od odwiedzających</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">O City Walk</h2>
          <p className="text-gray-600 mb-6">
          City Walk to niezwykłe miejsce, gdzie przyszłość spotyka się z luksusem w sercu tętniącego życiem Dubaju. Ta ultranowoczesna dzielnica to prawdziwy raj dla poszukiwaczy wrażeń, łączący w sobie to, co najlepsze w światowej architekturze, rozrywce i stylu życia. Spacerując klimatyzowanymi uliczkami, można poczuć się jak w futurystycznej europejskiej metropolii, gdzie na każdym kroku czekają fascynujące niespodzianki. To tutaj znajduje się jedyny w swoim rodzaju tropikalny las deszczowy ukryty w szklanej kopule The Green Planet, gdzie można stanąć oko w oko z egzotycznymi stworzeniami. Miłośników zakupów przyciągają ekskluzywne butiki światowych marek, a smakosze mogą delektować się kuchnią z całego świata w stylowych restauracjach i kawiarniach.</p>
          <div className="flex items-center space-x-2 mb-4">
            <FaMapMarkerAlt className="text-teal-500" />
            <span className="text-gray-600">
              Al Safa St - Al Wasl - Dubaj, Zjednoczone Emiraty Arabskie
            </span>
          </div>
        </div>

        {/* Gallery */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Galeria</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="rounded-xl overflow-hidden h-64 shadow-md"
              >
                <img
                  src={image}
                  alt={`City Walk - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Attractions */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Główne Atrakcje</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {attractions.map((attraction, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-6 rounded-xl shadow-md"
              >
                <h3 className="font-semibold text-xl mb-4">{attraction.title}</h3>
                <p className="text-gray-600">{attraction.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experiences */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Doświadczenia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-6 rounded-xl shadow-md"
              >
                <h3 className="font-semibold text-xl mb-4">{experience.title}</h3>
                <p className="text-gray-600">{experience.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Co Można Robić</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-start">
                <FaInfoCircle className="text-teal-500 mt-1 mr-3" />
                <span>{activity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-teal-50 rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Ciekawostki</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {funFacts.map((fact, index) => (
              <div key={index} className="flex items-start">
                <FaInfoCircle className="text-teal-500 mt-1 mr-3" />
                <span>{fact}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Other Attractions */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Inne atrakcje</h2>
          <div data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
               data-gyg-locale-code="pl-PL" 
               data-gyg-widget="activities" 
               data-gyg-number-of-items="8" 
               data-gyg-cmp="kd-attracion" 
               data-gyg-partner-id="19WQ75B" 
               data-gyg-tour-ids="505703,49021,49019,411488,587080,714548,129267,123092">
            <span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/dubai-l173/">GetYourGuide</a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityWalkPage;
