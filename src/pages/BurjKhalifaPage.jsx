import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaExternalLinkAlt, FaSubway } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BurjKhalifaPage = () => {
  const funFacts = [
    "Na wysokości 828 metrów, Burj Khalifa jest najwyższym budynkiem na świecie",
    "Budynek ma 163 piętra i 2 909 schodów prowadzących na szczyt",
    "Budowa zajęła 22 miliony roboczogodzin",
    "Projekt budynku został zainspirowany kwiatem Hymenocallis",
    "Czubek wieży widoczny jest z odległości nawet 95 kilometrów",
    "Budynek faktycznie 'rośnie' w gorącym słońcu, rozszerzając się nawet o 14 cm"
  ];

  const galleryImages = [
    '/images/burj-khalifa-1.jpg',
    '/images/burj-khalifa-2.jpg',
    '/images/burj-khalifa-3.jpg',
    '/images/burj-khalifa-4.jpg',
    '/images/burj-khalifa-5.jpg',
    '/images/burj-khalifa-6.jpg',
    '/images/burj-khalifa-7.jpg',
    '/images/burj-khalifa-8.jpg',
    '/images/burj-khalifa.jpg'
  ];

  const attractions = [
    {
      title: "At the Top SKY Lounge (Poziom 148)",
      description: "Ekskluzywny taras widokowy oferujący najwyżej położony punkt widokowy na świecie wraz z spersonalizowanymi wycieczkami i przekąskami. Doświadcz niezrównanego luksusu i zapierających dech w piersiach panoram Dubaju."
    },
    {
      title: "At the Top (Poziom 124 i 125)",
      description: "Główny taras widokowy z zewnętrznym tarasem i interaktywnymi atrakcjami. Wyposażony w najnowocześniejsze instalacje i interaktywne wystawy, oferuje spektakularne widoki na panoramę Dubaju."
    },
    {
      title: "The Lounge (Poziom 152, 153, 154)",
      description: "Ekskluzywne doświadczenie w najwyżej położonym salonie na świecie z popołudniową herbatą, koktajlami o zachodzie słońca lub wieczornymi drinkami. Ciesz się wyrafinowaną atmosferą podziwiając niesamowite widoki."
    }
  ];

  const activities = [
    "Podziwiaj wschód lub zachód słońca z tarasów widokowych",
    "Zjedz kolację w restauracji At.mosphere na poziomie 122",
    "Odwiedź interaktywną wystawę Dubai – A Falcon's Eye View",
    "Zrób zdjęcia na zewnętrznym tarasie",
    "Rozkoszuj się herbatą w The Lounge",
    "Obserwuj pokaz Dubai Fountain z góry"
  ];

  const gyg_link = "https://www.getyourguide.com/dubai-l173/burj-khalifa-ticket-t49019/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd-attractionpage";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/burj-khalifa.jpg"
          alt="Burj Khalifa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Burj Khalifa</h1>
            <p className="text-xl">Najwyższy budynek świata</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-2xl text-blue-600 mr-3" />
              <h3 className="text-lg font-semibold">Lokalizacja</h3>
            </div>
            <p className="text-gray-600">Downtown Dubai, Zjednoczone Emiraty Arabskie</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <FaStar className="text-2xl text-amber-500 mr-3" />
              <h3 className="text-lg font-semibold">Wysokość</h3>
            </div>
            <p className="text-gray-600">828 metrów (2,717 stóp)</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <FaCalendarAlt className="text-2xl text-green-600 mr-3" />
              <h3 className="text-lg font-semibold">Otwarcie</h3>
            </div>
            <p className="text-gray-600">4 stycznia 2010</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <FaClock className="text-2xl text-purple-600 mr-3" />
              <h3 className="text-lg font-semibold">Budowa</h3>
            </div>
            <p className="text-gray-600">2004 - 2009 (6 lat)</p>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FaInfoCircle className="text-blue-600" />
            O Burj Khalifa
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Burj Khalifa to nie tylko najwyższy budynek świata, ale prawdziwy symbol nowoczesnej architektury 
              i inżynieryjnego kunsztu. Ta imponująca konstrukcja wznosi się na wysokość 828 metrów, górując 
              nad panoramą Dubaju i ustanawiając nowe standardy w dziedzinie budownictwa wysokościowego.
            </p>
            <p>
              Budynek składa się z 163 pięter i mieści różnorodne funkcje: luksusowe apartamenty, prestiżowe 
              biura, ekskluzywny hotel Armani oraz platformy widokowe, z których roztacza się zapierający 
              dech w piersiach widok na miasto i Zatokę Perską.
            </p>
            <p>
              Architektura Burj Khalifa inspirowana jest geometrią pustynnego kwiatu Hymenocallis oraz 
              tradycyjnymi wzorami islamskiej architektury. Charakterystyczna spiralna bryła budynku 
              nie tylko nadaje mu unikalny wygląd, ale także pomaga w redukcji wpływu wiatru na konstrukcję.
            </p>
            <p>
              Na szczególną uwagę zasługują platformy widokowe At the Top, znajdujące się na 124. i 125. piętrze, 
              oraz SKY lounge na 148. piętrze, które oferują niezapomniane widoki na miasto. W budynku znajduje się 
              również luksusowy hotel Armani, ekskluzywne apartamenty mieszkalne oraz nowoczesne biura.
            </p>
          </div>
        </div>

        {/* History Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FaHistory className="text-blue-600" />
            Historia
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Historia Burj Khalifa rozpoczęła się w 2004 roku, kiedy to rozpoczęto prace budowlane nad tym 
              ambitnym projektem. Budowa trwała 6 lat i wymagała zaangażowania tysięcy pracowników oraz 
              wykorzystania najnowocześniejszych technologii budowlanych.
            </p>
            <p>
              W trakcie budowy wykorzystano ponad 330 000 metrów sześciennych betonu i 39 000 ton stali 
              zbrojeniowej. Fasada budynku została pokryta 26 000 szklanych paneli, które były montowane 
              przez specjalistów pracujących na zawrotnych wysokościach.
            </p>
            <p>
              Oficjalne otwarcie Burj Khalifa miało miejsce 4 stycznia 2010 roku i zbiegło się z objęciem 
              władzy przez szejka Muhammada bin Rashida Al Maktouma. Wydarzenie to było transmitowane na 
              całym świecie i przyciągnęło uwagę międzynarodowych mediów, ugruntowując pozycję Dubaju jako 
              globalnego centrum innowacji i ambicji.
            </p>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FaStar className="text-amber-500" />
            Ciekawostki
          </h2>
          <ul className="list-none space-y-4">
            {funFacts.map((fact, index) => (
              <li key={index} className="flex items-start gap-3">
                <FaInfoCircle className="text-blue-600 mt-1" />
                <span className="text-gray-700">{fact}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl shadow-xl p-8 mb-12">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Zarezerwuj bilety</h2>
            <p className="text-xl mb-6">Zagwarantuj sobie wstęp na najwyższy punkt widokowy świata</p>
            <a
              href={gyg_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-blue-600 bg-white rounded-lg shadow-lg hover:bg-blue-50 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Sprawdź dostępność i ceny
              <FaExternalLinkAlt className="ml-2" />
            </a>
          </div>
        </div>

        {/* Description */}
        {/* Attractions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Co można zobaczyć</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-3">{attraction.title}</h3>
                <p className="text-gray-600">{attraction.description}</p>
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
                  alt={`Burj Khalifa - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
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

        {/* Getting There Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FaSubway className="text-blue-600" />
            Jak dojechać do Burj Khalifa metrem?
          </h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
            <p className="text-gray-700">
              Aby dojechać do Burj Khalifa <Link to="/transport#metro" className="text-blue-600 hover:text-blue-800 transition-colors">metrem</Link>, 
              wsiądź na czerwoną linię metra (Red Line) i kieruj się w stronę Jebel Ali. Wysiądź na stacji "Burj Khalifa/Dubai Mall", 
              która znajduje się w pobliżu Burj Khalifa. Po wyjściu ze stacji, skieruj się w stronę Dubai Mall, a stamtąd dojdziesz 
              do samego Burj Khalifa. Cała podróż jest wygodna i szybka, a stacja metra jest doskonale skomunikowana z atrakcjami w okolicy.
            </p>
          </div>
        </div>

        {/* GetYourGuide Widget */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">Wycieczki po Dubaju</h2>
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

        {/* Bottom CTA */}
        <div className="text-center">
          <a
            href={gyg_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-600 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Zarezerwuj bilety
            <FaExternalLinkAlt className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BurjKhalifaPage;
