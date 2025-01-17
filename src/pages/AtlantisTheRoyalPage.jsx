import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHotel, FaUtensils, FaSwimmingPool, FaSpa, FaExternalLinkAlt } from 'react-icons/fa';

const AtlantisTheRoyalPage = () => {
  const funFacts = [
    "Hotel posiada 795 pokoi i apartamentów na 43 piętrach",
    "Mieści 17 światowej klasy restauracji i barów",
    "Posiada największe na świecie akwarium z meduzami",
    "Projekt budynku został zainspirowany klockami Tetris",
    "Ma 90-metrowy basen infinity z widokiem na Palm Jumeirah",
    "Budowa hotelu kosztowała około 1,6 miliarda dolarów"
  ];

  const galleryImages = [
    '/images/atlantis-royal-1.jpg',
    '/images/atlantis-royal-2.jpg',
    '/images/atlantis-royal-3.jpg',
    '/images/atlantis-royal-4.jpg',
    '/images/atlantis-royal-5.jpg',
    '/images/atlantis-royal.jpg'
  ];

  const attractions = [
    {
      title: "Luksusowe Zakwaterowanie",
      description: "Ultra-luksusowe pokoje i apartamenty z zapierającymi dech w piersiach widokami na Morze Arabskie i Palm Jumeirah, z prywatnymi basenami infinity i obsługą kamerdynera."
    },
    {
      title: "Światowej Klasy Kuchnia",
      description: "17 restauracji i barów z szefami kuchni takimi jak Heston Blumenthal, José Andrés i Nobu Matsuhisa."
    },
    {
      title: "AWAKEN Spa",
      description: "Centrum wellness o powierzchni 3000 metrów kwadratowych oferujące holistyczne zabiegi, w tym pierwszy tradycyjny hammam od Rayya Wellness."
    },
    {
      title: "Cloud 22",
      description: "Ekskluzywny basen infinity i lounge z basenem na dachu oferujący panoramiczne widoki na panoramę Dubaju i Zatokę Arabską."
    }
  ];

  const experiences = [
    {
      title: "Doświadczenia Kulinarne",
      description: "Wyjątkowe podróże kulinarne w restauracjach takich jak Dinner by Heston Blumenthal i La Mar by Gastón Acurio."
    },
    {
      title: "Podróż Wellness",
      description: "Luksusowe zabiegi spa, sesje medytacyjne i holistyczne doświadczenia wellness w AWAKEN."
    },
    {
      title: "Królewski Styl Życia",
      description: "Dostęp do prywatnej plaży, ekskluzywnych basenów i usług konsjerża VIP."
    },
    {
      title: "Rozrywka",
      description: "Występy na żywo, ekskluzywne wydarzenia i dostęp do Atlantis Aquaventure Waterpark."
    }
  ];

  const activities = [
    "Kolacja w restauracjach znanych szefów kuchni",
    "Doświadczenie basenu infinity Cloud 22",
    "Zabiegi spa w AWAKEN",
    "Wizyta w akwarium z meduzami",
    "Dostęp do Atlantis Aquaventure",
    "Relaks w prywatnym klubie plażowym",
    "Zdjęcia o zachodzie słońca na Sky Bridge",
    "Zakupy w luksusowych butikach",
    "Udział w ekskluzywnych wydarzeniach",
    "Rezerwacja prywatnych kolacji"
  ];

  const gyg_link = "https://www.getyourguide.com/dubai-l173/dubai-luxury-dinner-buffet-at-gastronomy-atlantis-the-royal-t836367/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/atlantis-royal.jpg"
          alt="Atlantis The Royal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Atlantis The Royal
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Najbardziej Luksusowy Kurort w Dubaju
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
                <span>Zarezerwuj Kolację</span>
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
            <h3 className="font-semibold mb-2">Zameldowanie/Wymeldowanie</h3>
            <p className="text-gray-600">Zameldowanie: 15:00</p>
            <p className="text-gray-500 text-sm">Wymeldowanie: 12:00</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Crescent Road</p>
            <p className="text-gray-500 text-sm">Palm Jumeirah, Dubaj</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaTicketAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Ceny Pokoi</h3>
            <p className="text-gray-600">Od 4,000 AED</p>
            <p className="text-gray-500 text-sm">Za noc</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaStar className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">5.0/5</p>
            <p className="text-gray-500 text-sm">od gości</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">O Atlantis The Royal</h2>
          <p className="text-gray-600 mb-6">
            Atlantis The Royal to najbardziej luksusowy kurort w Dubaju. Nowy ikoniczny punkt orientacyjny, gdzie dzieją się niezwykłe rzeczy. Doświadcz świata niezrównanego luksusu z oszałamiającymi widokami, doświadczeniami kulinarnymi od znanych szefów kuchni i rozrywką światowej klasy. Kurort na nowo definiuje luksusową gościnność dzięki wyjątkowemu projektowi, innowacyjnym doświadczeniom i niezrównanym udogodnieniom.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <FaMapMarkerAlt className="text-blue-500" />
            <span className="text-gray-600">
              Crescent Road, Palm Jumeirah, Dubaj, Zjednoczone Emiraty Arabskie
            </span>
          </div>
        </div>

        {/* History */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Historia</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-500 font-semibold">2016</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Początek Projektu</h3>
                <p className="text-gray-600">Rozpoczęcie ambitnego projektu przez grupę Kerzner International, twórców oryginalnego Atlantis, The Palm.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-500 font-semibold">2020</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Ukończenie Konstrukcji</h3>
                <p className="text-gray-600">Zakończenie głównych prac budowlanych nad 43-piętrowym kompleksem, który zmienił panoramę Palm Jumeirah.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-500 font-semibold">2022</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Przygotowania do Otwarcia</h3>
                <p className="text-gray-600">Okres intensywnych przygotowań, w tym rekrutacja personelu i finalizacja umów z renomowanymi szefami kuchni.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-500 font-semibold">2023</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Wielkie Otwarcie</h3>
                <p className="text-gray-600">Spektakularne otwarcie z udziałem światowych gwiazd, w tym Beyoncé, które przyciągnęło uwagę mediów z całego świata.</p>
              </div>
            </div>
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
                  alt={`Atlantis The Royal - ${index + 1}`}
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
            Zarezerwuj kolację w Atlantis The Royal
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

export default AtlantisTheRoyalPage;
