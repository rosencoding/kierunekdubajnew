import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaShoppingBag, FaUtensils, FaWater, FaBuilding, FaHotel } from 'react-icons/fa';

const DubaiFestivalCityMallPage = () => {
  const funFacts = [
    "Dubai Festival City Mall zajmuje ponad 2,4 miliona stóp kwadratowych powierzchni handlowej",
    "Centrum handlowe oferuje spektakularny pokaz IMAGINE - multisensoryczne doświadczenie na wodzie",
    "Mieści pierwszy w regionie sklep IKEA",
    "Z centrum roztaczają się zapierające dech w piersiach widoki na Dubai Creek",
    "Posiada unikalną nadwodną promenadę z restauracjami",
    "Znajduje się tu jedna z największych w Dubaju stref gastronomicznych z kuchnią międzynarodową"
  ];

  const galleryImages = [
    '/images/dubai-festival-city-mall-1.jpg',
    '/images/dubai-festival-city-mall-2.jpg',
    '/images/dubai-festival-city-mall-3.jpg',
    '/images/dubai-festival-city-mall.jpg'
  ];

  const attractions = [
    {
      title: "Pokaz IMAGINE",
      description: "Nagradzany pokaz wody, laserów i świateł wykorzystujący największy na świecie ekran projekcyjny na wodzie."
    },
    {
      title: "Festival Bay",
      description: "Nadwodna promenada oferująca wyjątkowe doświadczenia kulinarne ze spektakularnymi widokami."
    },
    {
      title: "Raj dla Zakupoholików",
      description: "Ponad 400 sklepów oferujących lokalne i międzynarodowe marki."
    },
    {
      title: "Strefa Rozrywki",
      description: "Rodzinna strefa rozrywki z salonami gier i kompleksem kinowym."
    }
  ];

  const experiences = [
    {
      title: "Doświadczenie Zakupowe",
      description: "Odkryj setki sklepów oferujących międzynarodowe i lokalne marki."
    },
    {
      title: "Doświadczenie Kulinarne",
      description: "Restauracje nad wodą z widokiem na zatokę i pokaz IMAGINE."
    },
    {
      title: "Rozrywka",
      description: "Oglądaj najnowsze filmy w kinie lub ciesz się rodzinnymi aktywnościami."
    },
    {
      title: "Pokaz IMAGINE",
      description: "Doświadcz magicznego pokazu wody, laserów i świateł w Festival Bay."
    }
  ];

  const activities = [
    "Zobacz pokaz IMAGINE w Festival Bay",
    "Zrób zakupy w międzynarodowych sklepach",
    "Zjedz w restauracjach nad wodą",
    "Odwiedź pierwszy w regionie sklep IKEA",
    "Obejrzyj film w kompleksie kinowym",
    "Spaceruj wzdłuż nadwodnej promenady",
    "Skorzystaj z rodzinnych atrakcji rozrywkowych",
    "Zrób zdjęcia z widokiem na Dubai Creek",
    "Spróbuj międzynarodowych potraw w strefie gastronomicznej",
    "Weź udział w sezonowych wydarzeniach festiwalowych"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/dubai-festival-city-mall.jpg"
          alt="Dubai Festival City Mall"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Dubai Festival City Mall
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Centrum Zakupów, Gastronomii i Rozrywki
            </p>
            {/* Affiliate Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <a
                  href="https://www.booking.com/hotel/ae/intercontinental-dubai-festival-city.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg inline-flex items-center space-x-2"
                >
                  <FaHotel />
                  <span>Zarezerwuj Hotel w Pobliżu</span>
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <a
                  href="https://www.dubaifestivalcitymall.com/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg inline-flex items-center space-x-2"
                >
                  <FaShoppingBag />
                  <span>Odwiedź Stronę Centrum</span>
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
            <FaClock className="w-8 h-8 text-teal-500 mb-4" />
            <h3 className="font-semibold mb-2">Godziny Otwarcia</h3>
            <p className="text-gray-600">10:00 - 22:00</p>
            <p className="text-gray-500 text-sm">Codziennie</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-teal-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Dubai Festival City</p>
            <p className="text-gray-500 text-sm">Dubaj</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaWater className="w-8 h-8 text-teal-500 mb-4" />
            <h3 className="font-semibold mb-2">Pokaz IMAGINE</h3>
            <p className="text-gray-600">Wstęp Bezpłatny</p>
            <p className="text-gray-500 text-sm">Pokazy codziennie po zachodzie słońca</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaStar className="w-8 h-8 text-teal-500 mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.5/5</p>
            <p className="text-gray-500 text-sm">od odwiedzających</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">O Dubai Festival City Mall</h2>
          <p className="text-gray-600 mb-6">
            Dubai Festival City Mall to ekskluzywne centrum handlowe, gastronomiczne i rozrywkowe położone nad wodą. Zlokalizowane wzdłuż historycznego Dubai Creek, to ikoniczne centrum łączy światowej klasy zakupy ze spektakularną rozrywką, w tym słynnym pokazem IMAGINE - multisensorycznym doświadczeniem, które ożywia nabrzeże poprzez grę świateł, wody i dźwięku.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <FaMapMarkerAlt className="text-teal-500" />
            <span className="text-gray-600">
              Dubai Festival City, Dubaj, Zjednoczone Emiraty Arabskie
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
                  alt={`Dubai Festival City Mall - ${index + 1}`}
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

export default DubaiFestivalCityMallPage;
