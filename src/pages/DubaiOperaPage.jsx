import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaTheaterMasks, FaGlassMartini, FaMusic, FaExternalLinkAlt } from 'react-icons/fa';

const DubaiOperaPage = () => {
  const funFacts = [
    "Architektura Dubai Opera inspirowana jest tradycyjnymi arabskimi łodziami dhow",
    "Budynek może być przekształcany z teatru w salę koncertową lub przestrzeń eventową",
    "Główna sala może pomieścić do 2000 osób",
    "Budynek posiada przezroczysty szklany hol z widokiem na Burj Khalifa",
    "Od otwarcia odbyło się tu ponad 1000 występów",
    "Żyrandol w głównym holu zawiera 2900 diod LED"
  ];

  const galleryImages = [
    '/images/dubai-opera-1.jpg',
    '/images/dubai-opera-2.jpg',
    '/images/dubai-opera-3.jpg',
    '/images/dubai-opera-4.jpg',
    '/images/dubai-opera-5.jpg',
    '/images/dubai-opera.jpg'
  ];

  const attractions = [
    {
      title: "Główna Sala",
      description: "Nowoczesna sala widowiskowa z doskonałą akustyką i widocznością z każdego miejsca."
    },
    {
      title: "Restauracja na Dachu",
      description: "Ekskluzywna restauracja oferująca panoramiczny widok na Downtown Dubai i Burj Khalifa."
    },
    {
      title: "Wielki Hol",
      description: "Imponująca przestrzeń otoczona szkłem, idealna na spotkania przed spektaklem i specjalne wydarzenia."
    },
    {
      title: "Salony VIP",
      description: "Ekskluzywne przestrzenie oferujące premium usługi i komfort dla specjalnych gości."
    }
  ];

  const experiences = [
    {
      title: "Przedstawienia Operowe",
      description: "Światowej klasy produkcje operowe z udziałem międzynarodowych artystów i orkiestr."
    },
    {
      title: "Spektakle Baletowe",
      description: "Klasyczne i współczesne przedstawienia baletowe w wykonaniu uznanych zespołów tanecznych."
    },
    {
      title: "Teatr Muzyczny",
      description: "Produkcje z Broadwayu i West Endu na dubajskiej scenie."
    },
    {
      title: "Koncerty Klasyczne",
      description: "Koncerty symfoniczne w wykonaniu regionalnych i międzynarodowych orkiestr."
    }
  ];

  const activities = [
    "Zobacz operę lub musical",
    "Zjedz kolację w restauracji na dachu",
    "Weź udział w wycieczce z przewodnikiem",
    "Posłuchaj koncertu muzyki klasycznej",
    "Zobacz spektakl baletowy",
    "Odwiedź salony VIP",
    "Zrób zdjęcia architekturze budynku",
    "Zjedz kolację z widokiem na Burj Khalifa",
    "Weź udział w wydarzeniach kulturalnych",
    "Uczestniczy w warsztatach edukacyjnych"
  ];

  const gyg_link = "https://www.getyourguide.com/dubai-l173/dubai-opera-grand-walking-tour-t458481/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/dubai-opera.jpg"
          alt="Dubai Opera"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Dubai Opera
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Najważniejsze Centrum Sztuki i Kultury na Bliskim Wschodzie
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
                <span>Zarezerwuj Bilety</span>
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
            <p className="text-gray-600">Kasa: 10:00 - 21:00</p>
            <p className="text-gray-500 text-sm">Godziny spektakli różnią się</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Mohammed Bin Rashid</p>
            <p className="text-gray-500 text-sm">Boulevard, Downtown Dubai</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaTicketAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Ceny Biletów</h3>
            <p className="text-gray-600">Od 200 AED</p>
            <p className="text-gray-500 text-sm">Zależne od wydarzenia</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaStar className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.8/5</p>
            <p className="text-gray-500 text-sm">od odwiedzających</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">O Dubai Opera</h2>
          <p className="text-gray-600 mb-6">
            Dubai Opera to arcydzieło współczesnej architektury i pierwsze w mieście centrum sztuk performatywnych. Ikoniczny budynek w kształcie łodzi dhow jest cudem nowoczesnego designu i inżynierii, oferującym światowej klasy rozrywkę i wydarzenia kulturalne w sercu Downtown Dubai.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <FaMapMarkerAlt className="text-blue-500" />
            <span className="text-gray-600">
              Mohammed Bin Rashid Boulevard, Downtown Dubai, ZEA
            </span>
          </div>
        </div>

        {/* History Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Historia</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Dubai Opera otworzyła swoje drzwi w 2016 roku jako część wizji Dubaju, by stać się centrum kulturalnym. Obiekt został zaprojektowany przez Janusa Rostocka i był inspirowany morską historią Dubaju.
            </p>
            <p>
              Charakterystyczna architektura budynku oddaje hołd tradycyjnej łodzi dhow, drewnianej jednostce żaglowej, która odegrała kluczową rolę w historii połowu pereł i handlu w Dubaju.
            </p>
            <p>
              Od momentu otwarcia Dubai Opera gościła setki występów, od klasycznych oper po współczesne koncerty, ustanawiając się jako najważniejsze miejsce kulturalne w regionie.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Udogodnienia</h2>
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
          <h2 className="text-2xl font-bold mb-6">Wydarzenia</h2>
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
                  alt={`Dubai Opera - ${index + 1}`}
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
            Zarezerwuj zwiedzanie Dubai Opera
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

export default DubaiOperaPage;
