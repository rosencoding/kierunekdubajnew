import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaWater, FaMusic, FaCamera } from 'react-icons/fa';

const DubaiFountainPage = () => {
  const funFacts = [
    "Największy na świecie system choreograficznych fontann",
    "Wystrzeliwuje wodę na wysokość do 150 metrów",
    "Posiada ponad 6,600 świateł WET Superlight i 25 projektorów kolorów",
    "Wiązka światła z fontanny jest widoczna z kosmosu",
    "Wykorzystuje 83,000 litrów wody w powietrzu w każdej chwili",
    "Oferuje ponad 1,000 różnych ekspresji wodnych"
  ];

  const galleryImages = [
    '/images/dubai-fountain-1.jpg',
    '/images/dubai-fountain-2.jpg',
    '/images/dubai-fountain-3.jpg',
    '/images/dubai-fountain-4.jpg',
    '/images/dubai-fountain-5.jpg',
    '/images/dubai-fountain.jpg'
  ];

  const attractions = [
    {
      title: "Pokazy Wodne",
      description: "Spektakularne choreograficzne pokazy wodne zsynchronizowane z muzyką, wykorzystujące strumienie wody, światła i dźwięk."
    },
    {
      title: "Promenada przy Fontannie",
      description: "Zbliż się do akcji na 272-metrowej pływającej platformie, oddalonej zaledwie 9 metrów od fontann."
    },
    {
      title: "Pokazy Wieczorne",
      description: "Wzbogacone pokazy z zapierającymi dech w piersiach pokazami świetlnymi oświetlającymi strumienie wody na tle nocnego nieba."
    },
    {
      title: "Punkty Widokowe",
      description: "Liczne punkty obserwacyjne, w tym promenady nad wodą, restauracje i dedykowane platformy."
    }
  ];

  const experiences = [
    {
      title: "Pokazy Fontann",
      description: "Oglądaj hipnotyzujące występy łączące wodę, muzykę i światła w doskonałej harmonii."
    },
    {
      title: "Rejsy po Jeziorze",
      description: "Wybierz się w rejs tradycyjną łodzią abra po Jeziorze Burj, aby zobaczyć pokazy z unikalnej perspektywy."
    },
    {
      title: "Fotografia",
      description: "Wykonaj oszałamiające zdjęcia fontanny na tle Burj Khalifa."
    },
    {
      title: "Doświadczenie Kulinarne",
      description: "Ciesz się pokazami podczas kolacji w różnych restauracjach z widokiem na fontannę."
    }
  ];

  const activities = [
    "Oglądanie pokazów fontann",
    "Spacer promenadą przy fontannie",
    "Fotografowanie wieczornych pokazów",
    "Kolacja z widokiem na fontannę",
    "Rejsy łodzią abra",
    "Odwiedzanie platform widokowych",
    "Słuchanie zsynchronizowanej muzyki",
    "Zakupy w Dubai Mall",
    "Zwiedzanie Burj Khalifa",
    "Nocne sesje zdjęciowe"
  ];

  const gyg_link = "https://www.getyourguide.com/dubai-l173/dubai-fountain-show-and-lake-ride-t60095/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/dubai-fountain.jpg"
          alt="Fontanna Dubajska"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Fontanna Dubajska
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Największy na Świecie System Choreograficznych Fontann
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
                <span>Zarezerwuj Rejs</span>
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
            <h3 className="font-semibold mb-2">Godziny Pokazów</h3>
            <p className="text-gray-600">Popołudnie: 13:00 - 17:30</p>
            <p className="text-gray-500 text-sm">Wieczór: 18:00 - 23:00</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Jezioro Burj</p>
            <p className="text-gray-500 text-sm">Downtown Dubaj</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaTicketAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Cena Promenady</h3>
            <p className="text-gray-600">Od 20 AED</p>
            <p className="text-gray-500 text-sm">Oglądanie za darmo</p>
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
          <h2 className="text-2xl font-bold mb-4">O Fontannie Dubajskiej</h2>
          <p className="text-gray-600 mb-6">
            Fontanna Dubajska to największy na świecie system choreograficznych fontann, prezentujący codziennie spektakularne pokazy zsynchronizowane z muzyką. Zlokalizowana w sercu Downtown Dubai, na 12-hektarowym Jeziorze Burj, ta ikoniczna atrakcja wykorzystuje potężne strumienie wody, które tańczą do starannie wybranych utworów muzycznych, tworząc niezapomniane widowisko. Występy fontanny łączą wodę, muzykę i światło w hipnotyzujący pokaz, który stał się jedną z najpopularniejszych atrakcji Dubaju.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <FaMapMarkerAlt className="text-blue-500" />
            <span className="text-gray-600">
              Jezioro Burj, Downtown Dubai, Dubaj, Zjednoczone Emiraty Arabskie
            </span>
          </div>
        </div>

        {/* History */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Historia</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-500 font-semibold">2008</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Początek Projektu</h3>
                <p className="text-gray-600">Rozpoczęcie budowy fontanny jako części ambitnego projektu Downtown Dubai. Koszt projektu wyniósł ponad 218 milionów dolarów.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-500 font-semibold">2009</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Uroczyste Otwarcie</h3>
                <p className="text-gray-600">Oficjalna inauguracja fontanny wraz z otwarciem Dubai Mall. Pierwszy pokaz odbył się przy akompaniamencie "Insza Allah" Andrea Bocellego.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-500 font-semibold">2010</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Rozwój Pokazów</h3>
                <p className="text-gray-600">Wprowadzenie nowych choreografii i utworów muzycznych, w tym arabskich klasyków i międzynarodowych hitów.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-500 font-semibold">2013</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Promenada</h3>
                <p className="text-gray-600">Otwarcie Fountain Boardwalk, umożliwiającej odwiedzającym oglądanie pokazów z bliskiej odległości.</p>
              </div>
            </div>
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
                  alt={`Fontanna Dubajska - ${index + 1}`}
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
            Zarezerwuj rejs po jeziorze
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
            data-gyg-tour-ids="60095,68160,68159,68158,68157,411488,587080,714548"
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

export default DubaiFountainPage;
