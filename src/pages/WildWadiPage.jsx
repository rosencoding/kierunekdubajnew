import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaWater, FaSwimmer, FaChild } from 'react-icons/fa';

const WildWadiPage = () => {
  const funFacts = [
    "Ponad 30 zjeżdżalni i atrakcji",
    "Zjeżdżalnia Jumeirah Sceirah osiąga prędkość 80 km/h",
    "Park jest utrzymany w tematyce Juhy, postaci z arabskiego folkloru",
    "Zawiera 2,8 miliona litrów wody o kontrolowanej temperaturze",
    "Największy basen ze sztucznymi falami na Bliskim Wschodzie",
    "Pierwszy aquapark w regionie z certyfikatem ISO"
  ];

  const galleryImages = [
    '/images/wild-wadi-1.jpg',
    '/images/wild-wadi-2.jpg',
    '/images/wild-wadi-3.jpg',
    '/images/wild-wadi-4.jpg',
    '/images/wild-wadi-5.jpg',
    '/images/wild-wadi.jpg'
  ];

  const attractions = [
    {
      title: "Jumeirah Sceirah",
      description: "Szybka zjeżdżalnia wodna ze spadkiem 120 metrów i prędkością dochodzącą do 80 kilometrów na godzinę."
    },
    {
      title: "Breakers Bay",
      description: "Największy basen ze sztucznymi falami na Bliskim Wschodzie, tworzący fale o wysokości do 1,5 metra."
    },
    {
      title: "Juha's Journey",
      description: "360-metrowa rodzinna zjeżdżalnia pontonowa pełna ekscytujących zakrętów i zwrotów."
    },
    {
      title: "Master Blasters",
      description: "Wodne kolejki górskie, które wynoszą Cię pod górę za pomocą silnych strumieni wody."
    }
  ];

  const experiences = [
    {
      title: "Ekstremalne Atrakcje",
      description: "Szybkie zjeżdżalnie i spadki dla poszukiwaczy adrenaliny."
    },
    {
      title: "Rodzinne Przygody",
      description: "Atrakcje rodzinne odpowiednie dla wszystkich grup wiekowych i umiejętności pływackich."
    },
    {
      title: "Strefy Relaksu",
      description: "Spokojne miejsca do odpoczynku, w tym prywatne kabany i strefy wypoczynku."
    },
    {
      title: "Atrakcje dla Dzieci",
      description: "Dedykowane strefy dla dzieci z mniejszymi zjeżdżalniami i interaktywnymi atrakcjami wodnymi."
    }
  ];

  const activities = [
    "Zjazd na Jumeirah Sceirah",
    "Surfing na Wipeout Flowrider",
    "Relaks w Breakers Bay",
    "Przejażdżka na Master Blasters",
    "Zabawa na Juha's Journey",
    "Odpoczynek w prywatnych kabanach",
    "Zabawa w strefach dla dzieci",
    "Wyścigi na Tantrum Alley",
    "Posiłek w restauracjach",
    "Lekcje surfingu"
  ];

  const gyg_link = "https://www.getyourguide.com/dubai-l173/dubai-wild-wadi-waterpark-full-day-ticket-t124418/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/wild-wadi.jpg"
          alt="Wild Wadi Waterpark"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Aquapark Wild Wadi
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Najlepszy Park Wodny w Dubaju
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
                <span>Kup Bilety Online</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaClock className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Godziny Otwarcia</h3>
            <p className="text-gray-600">10:00 - 18:00</p>
            <p className="text-gray-500 text-sm">Codziennie</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaTicketAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Cena Biletu</h3>
            <p className="text-gray-600">Od 295 AED</p>
            <p className="text-gray-500 text-sm">Dzieci do lat 2 za darmo</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaStar className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.5/5 od odwiedzających</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">O Wild Wadi</h2>
          <p className="text-gray-600 mb-6">
            Wild Wadi Waterpark to jedna z najpopularniejszych atrakcji rodzinnych w Dubaju, oferująca 30 zjeżdżalni i atrakcji dla wszystkich grup wiekowych. Położony naprzeciwko ikonicznego Burj Al Arab, park wodny oferuje jedne z najbardziej ekscytujących zjeżdżalni wodnych na Bliskim Wschodzie, wraz z atrakcjami rodzinnymi i strefami relaksu. Unikalny motyw parku opiera się na opowieści o Juha, postaci z arabskiego folkloru.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <FaMapMarkerAlt className="text-blue-500" />
            <span className="text-gray-600">
              Jumeirah Street, obok Burj Al Arab, Dubaj, Zjednoczone Emiraty Arabskie
            </span>
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
          <h2 className="text-2xl font-bold mb-6">Wodne Przygody</h2>
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
                  alt={`Wild Wadi - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mb-12">
          <a
            href={gyg_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-500 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Kup bilety online
            <FaTicketAlt className="ml-2" />
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
            data-gyg-tour-ids="124418,68160,68159,68158,68157,411488,587080,714548"
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

export default WildWadiPage;
