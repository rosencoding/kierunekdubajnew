import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaExternalLinkAlt, FaTheaterMasks, FaFilm } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BollywoodParksPage = () => {
  const funFacts = [
    "Pierwszy na świecie park tematyczny inspirowany Bollywood",
    "Ponad 20 atrakcji i pokazów inspirowanych słynnymi filmami Bollywood",
    "5 tematycznych stref rozrywki reprezentujących różne aspekty indyjskiej kinematografii",
    "Największy teatr w parku może pomieścić ponad 850 widzów",
    "Codzienne występy profesjonalnych tancerzy i artystów z Indii",
    "Autentyczna kuchnia indyjska w tematycznych restauracjach"
  ];

  const galleryImages = [
    '/images/bollywood-parks-1.jpg',
    '/images/bollywood-parks-2.jpg',
    '/images/bollywood-parks-3.jpg',
    '/images/bollywood-parks-4.jpg',
    '/images/bollywood-parks-5.jpg',
    '/images/bollywood-parks-6.jpg'
  ];

  const attractions = [
    {
      title: "Rajmahal Theatre",
      description: "Spektakularny teatr będący domem dla broadwayowskich produkcji w stylu Bollywood, oferujący zapierające dech w piersiach występy muzyczne i taneczne."
    },
    {
      title: "Mumbai Chowk",
      description: "Strefa inspirowana tętniącymi życiem ulicami Mumbaju, z restauracjami serwującymi autentyczne indyjskie potrawy i sklepami z pamiątkami."
    },
    {
      title: "Rustic Ravine",
      description: "Obszar inspirowany wiejskimi Indiami, oferujący ekscytujące przejażdżki i atrakcje oparte na filmowych hitach akcji."
    },
    {
      title: "Bollywood Film Studios",
      description: "Interaktywne doświadczenie pokazujące magię tworzenia filmów Bollywood, z możliwością udziału w produkcji filmowej."
    }
  ];

  const activities = [
    "Oglądanie spektakularnych pokazów muzycznych na żywo",
    "Udział w interaktywnych warsztatach tanecznych",
    "Przejażdżki inspirowane słynnymi filmami Bollywood",
    "Degustacja tradycyjnych indyjskich potraw",
    "Robienie zdjęć w kultowych sceneriach filmowych",
    "Spotkania z artystami i tancerzami",
    "Zakupy pamiątek i tradycyjnych indyjskich produktów",
    "Uczestnictwo w sesjach karaoke z hitami Bollywood"
  ];

  const gyg_link = "https://gyg.me/dJbD5WJP";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/bollywood-parks.jpg"
          alt="Bollywood Parks Dubai"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Bollywood Parks Dubai</h1>
            <p className="text-xl">Pierwszy na świecie park tematyczny Bollywood</p>
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
            <p className="text-gray-600">Dubai Parks and Resorts, Sheikh Zayed Road</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <FaClock className="text-2xl text-purple-600 mr-3" />
              <h3 className="text-lg font-semibold">Godziny otwarcia</h3>
            </div>
            <p className="text-gray-600">11:00 - 20:00</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <FaTicketAlt className="text-2xl text-green-600 mr-3" />
              <h3 className="text-lg font-semibold">Bilety</h3>
            </div>
            <p className="text-gray-600">Od 295 AED</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <FaStar className="text-2xl text-amber-500 mr-3" />
              <h3 className="text-lg font-semibold">Ocena</h3>
            </div>
            <p className="text-gray-600">4.5/5</p>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FaInfoCircle className="text-blue-600" />
            O Bollywood Parks
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Bollywood Parks Dubai to pierwszy na świecie park tematyczny poświęcony magicznemu światu indyjskiej 
              kinematografii. Park oferuje unikalne połączenie ekscytujących atrakcji, spektakularnych pokazów na żywo 
              i interaktywnych doświadczeń, wszystko inspirowane największymi hitami Bollywood.
            </p>
            <p>
              Park podzielony jest na pięć tematycznych stref, z których każda przedstawia inny aspekt kultury 
              i kinematografii indyjskiej. Od tętniących życiem ulic Mumbai Chowk po majestatyczny Rajmahal Theatre, 
              każda strefa oferuje wyjątkowe doświadczenia i atrakcje.
            </p>
            <p>
              Goście mogą cieszyć się spektakularnymi pokazami muzycznymi i tanecznymi, przejażdżkami inspirowanymi 
              popularnymi filmami, a także spróbować autentycznej kuchni indyjskiej w tematycznych restauracjach. 
              Park oferuje również możliwość zajrzenia za kulisy produkcji filmowych Bollywood.
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
              Bollywood Parks Dubai został otwarty w 2016 roku jako część większego kompleksu{' '}
              <Link to="/atrakcje/dubai-parks-resorts" className="text-blue-600 hover:text-blue-800 transition-colors">
                Dubai Parks and Resorts
              </Link>
              . Jest to pierwszy na świecie park tematyczny poświęcony magii i urokowi indyjskiego kina Bollywood.
            </p>
            <p>
              Park został zaprojektowany we współpracy z czołowymi studiami filmowymi z Mumbaju, aby zapewnić 
              autentyczne doświadczenie Bollywood. Każda atrakcja i show zostały starannie opracowane, aby oddać 
              ducha i energię indyjskiej kinematografii.
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
            <p className="text-xl mb-6">Odkryj magiczny świat Bollywood w Dubaju</p>
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

        {/* Attractions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Co można zobaczyć</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {attractions.map((attraction, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-3">{attraction.title}</h3>
                <p className="text-gray-600">{attraction.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Co można robić</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <FaFilm className="text-blue-600 mt-1" />
                <span className="text-gray-700">{activity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* GetYourGuide Widget */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">Inne atrakcje</h2>
          <div 
            data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
            data-gyg-locale-code="pl-PL" 
            data-gyg-widget="activities" 
            data-gyg-number-of-items="8" 
            data-gyg-partner-id="19WQ75B" 
            data-gyg-q="dubai"
          >
            <span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/dubai-l173/">GetYourGuide</a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BollywoodParksPage;
