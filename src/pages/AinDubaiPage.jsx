import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaRegCircle, FaGlassCheers, FaCamera, FaExternalLinkAlt } from 'react-icons/fa';

const AinDubaiPage = () => {
  const funFacts = [
    "Ain Dubai to największe i najwyższe koło obserwacyjne na świecie",
    "Wznosi się na wysokość 250 metrów (820 stóp)",
    "Każda noga koła ma długość ponad 126 metrów",
    "Posiada 48 luksusowych kabin pasażerskich",
    "Może pomieścić do 1750 pasażerów jednocześnie",
    "Jeden pełny obrót trwa około 38 minut"
  ];

  const galleryImages = [
    '/images/ain-dubai-1.jpg',
    '/images/ain-dubai-2.jpg',
    '/images/ain-dubai-3.jpg',
    '/images/ain-dubai-4.jpg',
    '/images/ain-dubai-5.jpg',
    '/images/ain-dubai.jpg'
  ];

  const attractions = [
    {
      title: "Kabiny Obserwacyjne",
      description: "Przestronne, klimatyzowane kabiny oferujące widok 360 stopni na panoramę Dubaju, Palm Jumeirah i Zatokę Perską."
    },
    {
      title: "Kabiny Społecznościowe",
      description: "Ekskluzywne kabiny z miejscami w stylu lounge i serwisem napojów dla bardziej wyjątkowego doświadczenia."
    },
    {
      title: "Kabiny Prywatne",
      description: "Luksusowe prywatne kabiny dostępne na specjalne okazje i celebracje z dostosowanymi usługami."
    },
    {
      title: "Sesje o Zachodzie Słońca",
      description: "Specjalne doświadczenia o zachodzie słońca oferujące zapierające dech w piersiach widoki zachodzącego słońca nad Dubajem."
    }
  ];

  const experiences = [
    {
      title: "Doświadczenie Dzienne",
      description: "Ciesz się spektakularnymi dziennymi widokami na wybrzeże Dubaju i architektoniczne cuda."
    },
    {
      title: "Doświadczenie Nocne",
      description: "Podziwiaj rozświetloną panoramę Dubaju i migoczące światła miasta z góry."
    },
    {
      title: "Doświadczenie Kulinarne",
      description: "Pakiety premium zawierające napoje i opcje gastronomiczne podczas podziwiania widoków."
    },
    {
      title: "Pakiety Okolicznościowe",
      description: "Specjalne pakiety na urodziny, rocznice i inne celebracje z dostosowanymi usługami."
    }
  ];

  const activities = [
    "Przejażdżka standardową kabiną obserwacyjną",
    "Rezerwacja premium social experience",
    "Podziwianie zachodów słońca z koła",
    "Robienie panoramicznych zdjęć Dubaju",
    "Napoje w kabinie premium",
    "Celebracja specjalnych okazji",
    "Obserwacja zabytków Dubaju z góry",
    "Wizyta na placu u podstawy",
    "Nocne sesje fotograficzne",
    "Doświadczenie obsługi VIP"
  ];

  const gyg_link = "https://www.getyourguide.com/dubai-l173/dubai-sunset-or-dinner-cruise-with-live-music-open-bar-t57982/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/ain-dubai.jpg"
          alt="Ain Dubai"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Ain Dubai
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Największe Koło Obserwacyjne na Świecie
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
                <span>Zarezerwuj Bilet</span>
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
            <h3 className="font-semibold mb-2">Godziny Otwarcia</h3>
            <p className="text-gray-600">12:00 - 22:00</p>
            <p className="text-gray-500 text-sm">Codziennie</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Bluewaters Island</p>
            <p className="text-gray-500 text-sm">Dubaj</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaTicketAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Cena Biletu</h3>
            <p className="text-gray-600">Od 130 AED</p>
            <p className="text-gray-500 text-sm">Różne pakiety</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaStar className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.7/5</p>
            <p className="text-gray-500 text-sm">od odwiedzających</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">O Ain Dubai</h2>
          <p className="text-gray-600 mb-6">
            Ain Dubai, największe i najwyższe koło obserwacyjne na świecie, oferuje zapierające dech w piersiach widoki na majestatyczną panoramę Dubaju, Palm Jumeirah, Dubai Marina i inne ikoniczne zabytki. Wznosząc się dumnie na wysokość 250 metrów, zapewnia niezapomniane wrażenia dzięki luksusowym kabinom i różnorodnym opcjom rozrywki.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <FaMapMarkerAlt className="text-blue-500" />
            <span className="text-gray-600">
              Bluewaters Island, Dubaj, Zjednoczone Emiraty Arabskie
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
          <h2 className="text-2xl font-bold mb-6">Wyjątkowe Doświadczenia</h2>
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
                  alt={`Ain Dubai - ${index + 1}`}
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
            Zarezerwuj bilet na Ain Dubai
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

export default AinDubaiPage;
