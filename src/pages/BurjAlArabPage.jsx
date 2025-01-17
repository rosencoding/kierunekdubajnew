import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHotel, FaUtensils, FaGlassMartiniAlt, FaExternalLinkAlt } from 'react-icons/fa';

const BurjAlArabPage = () => {
  const funFacts = [
    "Hotel stoi na sztucznej wyspie 280m od plaży Jumeirah",
    "Jego charakterystyczny kształt żagla czyni go jednym z najczęściej fotografowanych hoteli na świecie",
    "Budynek ma wysokość 321 metrów",
    "Posiada najwyższe atrium na świecie o wysokości 180 metrów",
    "Apartament Królewski kosztuje około 24 000 USD za noc",
    "Jest często nazywany jedynym 7-gwiazdkowym hotelem na świecie"
  ];

  const galleryImages = [
    '/images/burj-al-arab-1.jpg',
    '/images/burj-al-arab-2.jpg',
    '/images/burj-al-arab-3.jpg',
    '/images/burj-al-arab-4.jpg',
    '/images/burj-al-arab-6.jpg',
    '/images/burj-al-arab.jpg'
  ];

  const attractions = [
    {
      title: "Luksusowe Restauracje",
      description: "Światowej klasy lokale gastronomiczne, w tym Al Muntaha, Al Mahara i Skyview Bar oferujące spektakularne widoki i kuchnię nagradzaną gwiazdkami Michelin."
    },
    {
      title: "Talise Spa",
      description: "Luksusowe zabiegi spa z panoramicznym widokiem na Zatokę Perską z 18. piętra."
    },
    {
      title: "The Terrace",
      description: "Ekskluzywny obiekt wypoczynkowy na świeżym powietrzu z dwoma basenami, prywatnymi kabinami i restauracją."
    },
    {
      title: "Gold on 27",
      description: "Luksusowy bar oferujący innowacyjne koktajle i zapierające dech w piersiach widoki z 27. piętra."
    }
  ];

  const experiences = [
    {
      title: "Zwiedzanie Burj Al Arab",
      description: "Ekskluzywna wycieczka z przewodnikiem oferująca wgląd w świat najbardziej luksusowego hotelu."
    },
    {
      title: "Popołudniowa Herbata",
      description: "Tradycyjna ceremonia popołudniowej herbaty w salonie Sahn Eddar z widokiem na wielkie atrium."
    },
    {
      title: "Wykwintna Kuchnia",
      description: "Wyjątkowe doświadczenia kulinarne w wielu nagradzanych restauracjach."
    },
    {
      title: "Luksusowe Zabiegi Spa",
      description: "Ekskluzywne zabiegi spa z wykorzystaniem wysokiej klasy produktów w luksusowych gabinetach."
    }
  ];

  const activities = [
    "Weź udział w wycieczce Inside Burj Al Arab",
    "Delektuj się popołudniową herbatą w Sahn Eddar",
    "Zjedz kolację w restauracji Al Muntaha",
    "Odwiedź podwodną restaurację Al Mahara",
    "Skorzystaj z Talise Spa",
    "Napij się koktajli w Gold on 27",
    "Zrelaksuj się na The Terrace",
    "Zrób zdjęcia ikonicznej architekturze",
    "Zobacz zachód słońca z Skyview Bar",
    "Odwiedź najwyższe atrium świata"
  ];

  const gyg_link = "https://www.getyourguide.com/burj-al-arab-l3309/dubai-inside-burj-al-arab-tour-t462854/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/burj-al-arab.jpg"
          alt="Burj Al Arab"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Burj Al Arab
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Najbardziej Luksusowy Hotel Świata
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href={gyg_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg inline-flex items-center space-x-2"
              >
                <FaTicketAlt />
                <span>Zarezerwuj Zwiedzanie</span>
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
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaClock className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Godziny Zwiedzania</h3>
            <p className="text-gray-600">10:00 - 20:00</p>
            <p className="text-gray-500 text-sm">Wycieczki codziennie</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Jumeirah Street</p>
            <p className="text-gray-500 text-sm">Jumeirah, Dubaj</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaTicketAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Cena Zwiedzania</h3>
            <p className="text-gray-600">Od 399 AED</p>
            <p className="text-gray-500 text-sm">Wycieczki i posiłki</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaStar className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.9/5</p>
            <p className="text-gray-500 text-sm">od odwiedzających</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">O Burj Al Arab</h2>
          <p className="text-gray-600 mb-6">
            Burj Al Arab to jeden z najbardziej luksusowych hoteli na świecie i globalny symbol arabskiego luksusu. Stojący na własnej sztucznej wyspie, ten architektoniczny cud został zaprojektowany tak, aby przypominać powiewający żagiel i stał się synonimem luksusowej turystyki w Dubaju. Hotel oferuje wyjątkowe doświadczenia, od przepysznych apartamentów po światowej klasy restauracje i niezrównaną obsługę.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <FaMapMarkerAlt className="text-blue-500" />
            <span className="text-gray-600">
              Jumeirah Street, Dubaj, Zjednoczone Emiraty Arabskie
            </span>
          </div>
        </div>

        {/* Features */}
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
          <h2 className="text-2xl font-bold mb-6">Luksusowe Doświadczenia</h2>
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
                <FaInfoCircle className="text-blue-500 mt-1 mr-3" />
                <span>{activity}</span>
              </div>
            ))}
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
                  alt={`Burj Al Arab - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-blue-50 rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Ciekawostki</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {funFacts.map((fact, index) => (
              <div key={index} className="flex items-start">
                <FaInfoCircle className="text-blue-500 mt-1 mr-3" />
                <span>{fact}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mb-12">
          <a
            href={gyg_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-600 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Zarezerwuj zwiedzanie Burj Al Arab
            <FaExternalLinkAlt className="ml-2" />
          </a>
        </div>

        {/* Other Attractions */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Inne atrakcje</h2>
          <div
            data-gyg-href="https://widget.getyourguide.com/default/activities.frame"
            data-gyg-locale-code="pl-PL"
            data-gyg-widget="activities"
            data-gyg-number-of-items="8"
            data-gyg-cmp="kd-attracion"
            data-gyg-partner-id="19WQ75B"
            data-gyg-tour-ids="505703,49021,49019,411488,587080,714548,129267,123092"
          >
            <span>
              Powered by{" "}
              <a
                target="_blank"
                rel="sponsored"
                href="https://www.getyourguide.com/dubai-l173/"
              >
                GetYourGuide
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurjAlArabPage;
