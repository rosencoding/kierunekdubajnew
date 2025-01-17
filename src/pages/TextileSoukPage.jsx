import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaShoppingBag, FaStore, FaMoneyBillWave, FaShip, FaExternalLinkAlt } from 'react-icons/fa';

const TextileSoukPage = () => {
  const funFacts = [
    "Jeden z najstarszych tradycyjnych targów w Dubaju, sięgający początków XX wieku",
    "Położony w historycznej dzielnicy Bur Dubai wzdłuż Dubai Creek",
    "Znany lokalnie jako 'Souk Al Textiles' lub 'Old Textile Souk'",
    "Charakteryzuje się tradycyjną arabską architekturą z drewnianymi ażurowymi ekranami",
    "Połączony z innymi historycznymi soukami za pomocą tradycyjnych łodzi abra",
    "Dom dla setek sklepów z tekstyliami i lokalnych sprzedawców"
  ];

  const galleryImages = [
    '/images/textile-souk-1.jpg',
    '/images/textile-souk-2.jpg',
    '/images/textile-souk-3.jpg',
    '/images/textile-souk.jpg'
  ];

  const attractions = [
    {
      title: "Tradycyjne Tekstylia",
      description: "Bogata kolekcja tkanin, w tym jedwab, bawełna i tradycyjne materiały z całej Azji i Bliskiego Wschodu."
    },
    {
      title: "Historyczna Architektura",
      description: "Piękne tradycyjne wieże wiatrowe i drewniane łuki prezentujące autentyczną arabską architekturę."
    },
    {
      title: "Stacja Abra",
      description: "Tradycyjna stacja łodzi drewnianych łącząca z innymi historycznymi obszarami wzdłuż Dubai Creek."
    },
    {
      title: "Lokalne Rękodzieło",
      description: "Sklepy sprzedające tradycyjną odzież, paszminy i ręcznie robione przedmioty."
    }
  ];

  const experiences = [
    {
      title: "Doświadczenie Zakupowe",
      description: "Targuj się z lokalnymi kupcami o najlepsze ceny tekstyliów i tradycyjnej odzieży."
    },
    {
      title: "Doświadczenie Kulturowe",
      description: "Zanurz się w tradycyjnej arabskiej kulturze targowej i architekturze."
    },
    {
      title: "Przejażdżka Abrą",
      description: "Przepłyń tradycyjną drewnianą łodzią przez Dubai Creek, aby odkryć inne souki."
    },
    {
      title: "Fotografia",
      description: "Uchwyć esencję starego Dubaju z pięknymi możliwościami fotograficznymi."
    }
  ];

  const activities = [
    "Przeglądaj ogromne kolekcje tekstyliów i tkanin",
    "Praktykuj tradycyjne targowanie się z kupcami",
    "Przepłyń się abrą przez Dubai Creek",
    "Kupuj tradycyjną arabską odzież",
    "Odkrywaj historyczną architekturę",
    "Odwiedź pobliskie Gold i Spice Souki",
    "Fotografuj tradycyjne wieże wiatrowe",
    "Doświadcz autentycznej arabskiej kultury targowej",
    "Zamów ubrania szyte na miarę",
    "Spróbuj lokalnego street foodu w okolicy"
  ];

  const gyg_link = "https://www.getyourguide.com/dubai-l173/dubai-old-town-souks-walking-tour-t68991/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd-attractionpage";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/textile-souk.jpg"
          alt="Souk Tekstylny"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Souk Tekstylny
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Historyczny Targ Tkanin i Kulturowy Skarb Dubaju
            </p>
            {/* Affiliate Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
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
                  <span>Zarezerwuj Wycieczkę z Przewodnikiem</span>
                </a>
              </motion.div>
            </div>
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
            <h3 className="font-semibold mb-2">Godziny Otwarcia</h3>
            <p className="text-gray-600">10:00 - 22:00</p>
            <p className="text-gray-500 text-sm">Codziennie</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">34 35th Street</p>
            <p className="text-gray-500 text-sm">Bur Dubai</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaMoneyBillWave className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Wstęp</h3>
            <p className="text-gray-600">Bezpłatny</p>
            <p className="text-gray-500 text-sm">Ceny towarów różnią się</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaStar className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.3/5</p>
            <p className="text-gray-500 text-sm">od odwiedzających</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">O Souku Tekstylnym</h2>
          <p className="text-gray-600 mb-6">
            Souk Tekstylny to jeden z najbardziej historycznych i kulturowo bogatych targowisk w Dubaju. Położony w sercu 
            starego Dubaju wzdłuż Creek, ten tradycyjny arabski targ słynie z ogromnej kolekcji tkanin, tekstyliów i 
            tradycyjnej odzieży. Architektura souku, z jego drewnianymi ażurowymi ekranami i wieżami wiatrowymi, daje 
            odwiedzającym autentyczny wgląd w handlowe dziedzictwo Dubaju.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <FaMapMarkerAlt className="text-blue-500" />
            <span className="text-gray-600">
              34 35th St - Bur Dubai - Dubaj, Zjednoczone Emiraty Arabskie
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
                  alt={`Souk Tekstylny - ${index + 1}`}
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
            Zarezerwuj wycieczkę z przewodnikiem po soukach
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
            data-gyg-tour-ids="664558,505703,49021,49019,411488,587080,714548,129267"
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

export default TextileSoukPage;
