import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaHotel, FaUmbrellaBeach, FaWater, FaClock, FaTicketAlt, FaSubway, FaBus, FaTaxi, FaCreditCard } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PalmJumeirahPage = () => {
  const funFacts = [
    "Palm Jumeirah jest widoczna z kosmosu i często nazywana 'Ósmym Cudem Świata'",
    "Do jej budowy użyto ponad 7 milionów ton skał",
    "Falochron zbudowany jest z 7 milionów ton skał i chroni wyspę przed falami i sztormami",
    "Wyspa dodała 520 kilometrów plaż do linii brzegowej Dubaju",
    "Do budowy potrzebne było 94 miliony metrów sześciennych piasku",
    "Falochron w kształcie półksiężyca został zbudowany jako pierwszy, aby chronić wyspę podczas budowy"
  ];

  const galleryImages = [
    '/images/palm-jumeirah-1.jpg',
    '/images/palm-jumeirah-2.jpg',
    '/images/palm-jumeirah-3.jpg',
    '/images/palm-jumeirah-4.jpg',
    '/images/palm-jumeirah-5.jpg',
    '/images/palm-jumeirah-6.jpg',
    '/images/palm-jumeirah-7.jpg',
    '/images/palm-jumeirah.jpg'
  ];

  const attractions = [
    {
      title: <><Link to="/atrakcje/the-pointe" className="text-blue-600 hover:text-blue-800">The Pointe</Link></>,
      description: "Nadmorska destynacja z restauracjami i rozrywką, oferująca spektakularne widoki na Atlantis i największy na świecie pokaz fontann."
    },
    {
      title: <>Palm West Beach</>,
      description: "Tętniąca życiem plaża z promenadą pełną restauracji, klubów plażowych i sportów wodnych."
    },
    {
      title: <><Link to="/atrakcje/atlantis-the-royal" className="text-blue-600 hover:text-blue-800">Atlantis The Royal</Link></>,
      description: "Najnowszy ultra-luksusowy hotel w Dubaju, oferujący ekskluzywne apartamenty, światowej klasy restauracje i spektakularne widoki."
    }
  ];

  const experiences = [
    {
      title: "Kluby plażowe",
      description: "Ekskluzywne kluby plażowe oferujące wyjątkowe doświadczenia, w tym WHITE Beach, FIVE Palm Jumeirah i Riva Beach Club."
    },
    {
      title: "Sporty wodne",
      description: "Różnorodne aktywności wodne, w tym skutery wodne, parasailing, kajaki i paddleboarding z zapierającymi dech w piersiach widokami na panoramę Dubaju."
    },
    {
      title: "Restauracje i życie nocne",
      description: "Restauracje światowej klasy i tętniące życiem lokale nocne oferujące różnorodne doświadczenia kulinarne i rozrywkę."
    },
    {
      title: "The View at The Palm",
      description: "Taras widokowy oferujący 360-stopniowy widok na Palm Jumeirah, Zatokę Perską i panoramę Dubaju z wysokości 240 metrów."
    }
  ];

  const activities = [
    "Przejażdżka kolejką jednoszynową z panoramicznymi widokami na wyspę",
    "Wizyta w parku wodnym Aquaventure w Atlantis",
    "Kolacja w The Pointe z widokiem na pokaz fontann",
    "Sporty wodne na Palm West Beach",
    "Luksusowe restauracje prowadzone przez znanych szefów kuchni",
    "Wizyta na tarasie widokowym The View",
    "Relaks w ekskluzywnych klubach plażowych",
    "Rejs jachtem dookoła Palm Jumeirah",
    "Pokaz fontann Palm Fountain"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/palm-jumeirah.jpg"
          alt="Palm Jumeirah"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Palm Jumeirah
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Ikoniczna sztuczna wyspa Dubaju
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* View at The Palm Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <a
                  href="https://www.getyourguide.com/dubai-islands-l167429/dubai-the-view-at-the-palm-observatory-entry-ticket-t409529/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd-attractionpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg inline-flex items-center space-x-2"
                >
                  <FaTicketAlt />
                  <span>Bilety na The View at The Palm</span>
                </a>
              </motion.div>
              {/* Hotels Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <a
                  href="https://www.booking.com/searchresults.html?ss=Palm+Jumeirah%2C+Dubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-500 hover:bg-gold-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg inline-flex items-center space-x-2"
                >
                  <FaHotel />
                  <span>Hotele na Palm Jumeirah</span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center text-blue-600 mb-2">
              <FaClock className="w-5 h-5 mr-2" />
              <span className="font-semibold">Czas zwiedzania</span>
            </div>
            <p className="text-gray-600">2-3 godziny</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center text-blue-600 mb-2">
              <FaMapMarkerAlt className="w-5 h-5 mr-2" />
              <span className="font-semibold">Adres</span>
            </div>
            <p className="text-gray-600">Palm Jumeirah, Dubaj, ZEA</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center text-blue-600 mb-2">
              <FaCalendarAlt className="w-5 h-5 mr-2" />
              <span className="font-semibold">Najlepszy czas</span>
            </div>
            <p className="text-gray-600">Wczesny poranek lub zachód słońca</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center text-blue-600 mb-2">
              <FaInfoCircle className="w-5 h-5 mr-2" />
              <span className="font-semibold">Typ</span>
            </div>
            <p className="text-gray-600">Sztuczna wyspa</p>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">O Palm Jumeirah</h2>
          <p className="text-gray-600 mb-6">
            Palm Jumeirah to cud nowoczesnej inżynierii i jedna z najbardziej charakterystycznych atrakcji Dubaju. Ten sztuczny archipelag został stworzony poprzez rekultywację terenu i rozciąga się w Zatoce Perskiej w kształcie palmy. Wyspa oferuje luksusowe hotele, ekskluzywne wille mieszkalne, dziewicze plaże i rozrywkę na światowym poziomie.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <FaMapMarkerAlt className="text-blue-500" />
            <span className="text-gray-600">
              Palm Jumeirah Island, Dubaj, Zjednoczone Emiraty Arabskie
            </span>
          </div>
        </div>

        {/* Gallery */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">Galeria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={image}
                  alt={`Palm Jumeirah ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
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
              Budowa Palm Jumeirah rozpoczęła się w 2001 roku. Projekt został ogłoszony przez rząd Dubaju jako część inicjatywy mającej na celu zwiększenie potencjału turystycznego miasta i stworzenie unikalnych możliwości mieszkaniowych.
            </p>
            <p>
              Wyspa została zbudowana przy użyciu najnowocześniejszych technik rekultywacji terenu, z milionami metrów sześciennych piasku wydobytego z dna Zatoki Perskiej. Do osiągnięcia idealnie symetrycznego kształtu palmy wykorzystano technologię satelitarną.
            </p>
            <p>
              W 2006 roku wprowadzili się pierwsi mieszkańcy, a flagowy kurort wyspy, Atlantis, The Palm, został otwarty w 2008 roku. Od tego czasu Palm Jumeirah stale się rozwija, a nowe inwestycje, takie jak The Pointe i Palm West Beach, dodatkowo zwiększają jej atrakcyjność.
            </p>
          </div>
        </div>

        {/* How to Get There from DXB Airport */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaSubway className="w-8 h-8 text-blue-500 mr-4" />
            <h2 className="text-3xl font-semibold">Jak dojechać z lotniska DXB do Palm Jumeirah transportem publicznym?</h2>
          </div>

          <div className="space-y-8">
            {/* Step 1: Metro */}
            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center">1</span>
                <FaSubway className="text-red-500" />
                Z terminalu lotniska wziąć czerwoną linię metra w kierunku UAE Exchange:
              </h3>
              <ul className="space-y-3 ml-11">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  <span>Stacje metra znajdują się przy Terminalu 1 i 3</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  <span>Metro kursuje od około 5:00 do północy (w weekendy do 1:00)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  <span>Podróż zajmie około 30-40 minut</span>
                </li>
              </ul>
            </div>

            {/* Step 2: Mall of the Emirates */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center">2</span>
                <FaMapMarkerAlt className="text-blue-500" />
                Wysiąść na stacji Mall of the Emirates
              </h3>
            </div>

            {/* Step 3: Bus */}
            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center">3</span>
                <FaBus className="text-green-500" />
                Przesiąść się do autobusu 8 lub 84:
              </h3>
              <ul className="space-y-3 ml-11">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Kursują do Palm Jumeirah</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Trasa kończy się przy Atlantis The Palm</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Podróż autobusem zajmie około 20-30 minut</span>
                </li>
              </ul>
            </div>

            {/* Important Info */}
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <FaCreditCard className="text-2xl text-amber-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Ważne informacje:</h3>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaCreditCard className="text-blue-600" />
                    Potrzebujesz <Link to="/transport#nol" className="text-blue-600 hover:text-blue-800 transition-colors">karty Nol</Link> do korzystania z transportu publicznego
                  </div>
                </div>
              </div>
            </div>

            {/* Alternative */}
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <FaTaxi className="text-2xl text-purple-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Alternatywa:</h3>
                  <p className="text-gray-700">
                    Możesz wziąć czerwoną linię metra do stacji Dubai Marina, a stamtąd taksówkę - będzie szybciej, choć drożej.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Attractions Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaInfoCircle className="w-8 h-8 text-blue-500 mr-4" />
            <h2 className="text-3xl font-semibold">Główne atrakcje</h2>
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
            <FaWater className="w-8 h-8 text-blue-500 mr-4" />
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

        {/* Activities Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaUmbrellaBeach className="w-8 h-8 text-blue-500 mr-4" />
            <h2 className="text-3xl font-semibold">Co można robić</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex items-start space-x-3"
              >
                <FaInfoCircle className="text-blue-500 mt-1" />
                <span className="text-gray-600">{activity}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-blue-50 rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaStar className="w-8 h-8 text-blue-500 mr-4" />
            <h2 className="text-3xl font-semibold">Ciekawostki</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <p className="text-gray-600">{fact}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GetYourGuide Widget */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">Sprawdź inne atrakcje</h2>
          <div
            data-gyg-href="https://widget.getyourguide.com/default/activities.frame"
            data-gyg-locale-code="en-US"
            data-gyg-widget="activities"
            data-gyg-number-of-items="8"
            data-gyg-partner-id="19WQ75B"
            data-gyg-q="dubai"
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

export default PalmJumeirahPage;
