import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaSeedling, FaCamera, FaLeaf, FaChild, FaSun } from 'react-icons/fa';

const MiracleGardenPage = () => {
  const funFacts = [
    "Dubai Miracle Garden to największy naturalny ogród kwiatowy na świecie",
    "Posiada ponad 50 milionów kwiatów i 250 milionów roślin",
    "Znajduje się tu pokryty kwiatami samolot Emirates A380 w naturalnej wielkości",
    "Posiada wiele rekordów Guinnessa za swoje kwiatowe ekspozycje",
    "Ogród wykorzystuje oczyszczoną wodę poprzez system nawadniania kroplowego",
    "Zmienia swoje ekspozycje i motywy każdego sezonu"
  ];

  const galleryImages = [
    '/images/miracle-garden-1.jpg',
    '/images/miracle-garden-2.jpg',
    '/images/miracle-garden-3.jpg',
    '/images/miracle-garden-4.jpg',
    '/images/miracle-garden-5.jpg',
    '/images/miracle-garden-6.jpg',
    '/images/miracle-garden-7.jpg',
    '/images/miracle-garden-8.jpg',
    '/images/miracle-garden.jpg'
  ];

  const attractions = [
    {
      title: "Ekspozycja Emirates A380",
      description: "Największa na świecie kwiatowa instalacja samolotu A380, pokryta milionami świeżych kwiatów i utrzymywana dzięki zaawansowanemu systemowi nawadniania."
    },
    {
      title: "Zegar Kwiatowy",
      description: "Zachwycający czasomierz wykonany w całości z kwiatów, z intrygującymi wzorami, które zmieniają się wraz z porami roku."
    },
    {
      title: "Aleja Disneya",
      description: "Magiczny obszar przedstawiający ukochane postacie Disneya ożywione poprzez niesamowite kwiatowe rzeźby i aranżacje."
    }
  ];

  const experiences = [
    {
      title: "Ekspozycje Kwiatowe",
      description: "Oszałamiające aranżacje w kształcie serc, gwiazd, piramid i zamków stworzone z milionów kwiatów."
    },
    {
      title: "Miejsca na Zdjęcia",
      description: "Liczne miejsca idealne do Instagrama z łukami w kształcie serc, kwiatowymi tunelami i tematycznymi instalacjami."
    },
    {
      title: "Amfiteatr Ogrodowy",
      description: "Miejsce na świeżym powietrzu goszczące występy kulturalne i wydarzenia w pięknym kwiatowym otoczeniu."
    },
    {
      title: "Ogród Motyli",
      description: "Sąsiadujące sanktuarium motyli z tysiącami kolorowych motyli w klimatyzowanym środowisku."
    }
  ];

  const activities = [
    "Spacer przez kwiatowe tunele i łuki",
    "Zdjęcia przy ekspozycji Emirates A380",
    "Wizyta w Dubai Butterfly Garden (osobny bilet)",
    "Odpoczynek w ogrodowych kawiarniach",
    "Oglądanie występów kulturalnych w amfiteatrze",
    "Zwiedzanie tematycznych instalacji kwiatowych",
    "Wizyta o zachodzie słońca dla magicznego oświetlenia",
    "Udział w oprowadzanych wycieczkach po ogrodzie",
    "Zakupy pamiątek i artykułów ogrodowych"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/miracle-garden.jpg"
          alt="Dubai Miracle Garden"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Dubai Miracle Garden
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Największy Naturalny Ogród Kwiatowy na Świecie
            </p>
            {/* Book Tickets Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="https://www.getyourguide.com/dubai-l173/dubai-miracle-garden-entrance-ticket-t68768/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd-attractionpage"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg inline-flex items-center space-x-2"
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
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaClock className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Godziny Otwarcia</h3>
            <p className="text-gray-600">9:00 - 21:00</p>
            <p className="text-gray-500 text-sm">Otwarte od października do kwietnia</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Al Barsha South 3</p>
            <p className="text-gray-500 text-sm">Dubailand, Dubaj</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Ceny Biletów</h3>
            <p className="text-gray-600">55 AED - dorośli</p>
            <p className="text-gray-500 text-sm">40 AED - dzieci</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaStar className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.4/5</p>
            <p className="text-gray-500 text-sm">od odwiedzających</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">O Dubai Miracle Garden</h2>
          <p className="text-gray-600 mb-6">
            Dubai Miracle Garden to największy naturalny ogród kwiatowy na świecie, 
            który zachwyca odwiedzających swoimi spektakularnymi kompozycjami kwiatowymi. 
            Ten unikalny park oferuje niezapomniane doświadczenia i możliwość podziwiania 
            ponad 50 milionów kwiatów ułożonych w fantazyjne kształty i instalacje.
          </p>
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
                  alt={`Dubai Miracle Garden - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-blue-50 rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Ciekawostki</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {funFacts.map((fact, index) => (
              <li key={index} className="flex items-start">
                <FaHistory className="text-blue-500 mt-1 mr-3" />
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Best Time to Visit with Children */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <FaChild className="text-blue-500" />
            Najlepszy czas na zwiedzanie Dubai Miracle Garden z dziećmi
          </h2>
          
          {/* Optimal Months */}
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <FaCalendarAlt className="text-pink-500" />
              Najbardziej optymalne miesiące:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-pink-500 font-semibold">•</span>
                <div>
                  <span className="font-semibold">Grudzień-luty:</span> Temperatury są najprzyjemniejsze (20-25°C), co sprawia, że spacerowanie po ogrodzie jest komfortowe dla dzieci
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-500 font-semibold">•</span>
                <div>
                  <span className="font-semibold">Listopad i marzec:</span> Również dobre, choć może być nieco cieplej
                </div>
              </li>
            </ul>
          </div>

          {/* Time of Day */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <FaClock className="text-blue-500" />
              Pora dnia:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-semibold">•</span>
                <div>
                  <span className="font-semibold">Rano (9:00-11:00):</span> Idealne, gdyż jest chłodniej i mniej tłoczno
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-semibold">•</span>
                <div>
                  <span className="font-semibold">Późne popołudnie (16:00-zamknięcie):</span> Przyjemne temperatury i piękne oświetlenie do zdjęć
                </div>
              </li>
            </ul>
          </div>

          {/* Important Note */}
          <div className="bg-amber-50 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <FaInfoCircle className="text-2xl text-amber-500 mt-1 flex-shrink-0" />
              <p className="text-gray-700">
                <span className="font-semibold">Ważne:</span> Ogród jest zamknięty w okresie letnim (zazwyczaj od połowy maja do września) ze względu na ekstremalne temperatury i prace konserwacyjne. W tym czasie kwiaty są wymieniane na nowe ekspozycje.
              </p>
            </div>
          </div>
        </div>

        {/* Activities */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Co można robić</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activities.map((activity, index) => (
              <li key={index} className="flex items-start">
                <FaInfoCircle className="text-blue-500 mt-1 mr-3" />
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Other Attractions */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Inne atrakcje</h2>
          <div 
            data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
            data-gyg-locale-code="en-US" 
            data-gyg-widget="activities" 
            data-gyg-number-of-items="8" 
            data-gyg-cmp="kd-attracion" 
            data-gyg-partner-id="19WQ75B" 
            data-gyg-q="dubai"
          >
            <span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/dubai-l173/">GetYourGuide</a></span>
          </div>
        </div>

        {/* History Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaHistory className="w-8 h-8 text-blue-500 mr-4" />
            <h2 className="text-3xl font-semibold">Historia</h2>
          </div>
          <div className="space-y-4 text-gray-600">
            <p>
              Dubai Miracle Garden otworzył swoje podwoje w Walentynki 2013 roku, rozpoczynając wyjątkowy projekt, który miał pokazać zdolność Dubaju do stworzenia czegoś spektakularnego nawet w trudnych warunkach pustynnych.
            </p>
            <p>
              Ogród został stworzony z myślą o zorganizowaniu pokazu kwiatów na środku pustyni, demonstrując zaangażowanie Dubaju w zieloną innowację. Projekt wykorzystuje zaawansowany system nawadniania kroplowego, który przetwarza wodę poprzez recykling.
            </p>
            <p>
              Od momentu otwarcia ogród stale się rozwija, dodając nowe atrakcje i bijąc wiele rekordów Guinnessa, w tym za największą kwiatową instalację (Emirates A380) i największy pionowy ogród.
            </p>
          </div>
        </div>

        {/* Attractions Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaSeedling className="w-8 h-8 text-blue-500 mr-4" />
            <h2 className="text-3xl font-semibold">Główne Atrakcje</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-xl h-full flex flex-col"
              >
                <h3 className="font-semibold text-xl mb-4">{attraction.title}</h3>
                <p className="text-gray-600 flex-grow">{attraction.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experiences Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaLeaf className="w-8 h-8 text-blue-500 mr-4" />
            <h2 className="text-3xl font-semibold">Doświadczenia</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h3 className="font-semibold text-xl mb-4">{experience.title}</h3>
                <p className="text-gray-600">{experience.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
      </div>
    </div>
  );
};

export default MiracleGardenPage;
