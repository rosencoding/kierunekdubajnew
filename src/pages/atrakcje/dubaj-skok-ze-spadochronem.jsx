import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaExternalLinkAlt, FaPlane, FaParachuteBox } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DubajSkokZeSpadochronemPage = () => {
  const funFacts = [
    "Skok ze spadochronem w Dubaju oferuje widok na kultową Palmę Jumeirah",
    "Wysokość skoku to około 4000 metrów nad poziomem morza",
    "Czas swobodnego spadania trwa około 60 sekund",
    "Skydive Dubai to jeden z najbardziej prestiżowych ośrodków skoków na świecie",
    "Możliwość wykonania profesjonalnego nagrania i zdjęć z całego skoku",
    "Przed skokiem przechodzisz szczegółowe szkolenie z instruktorem"
  ];

  const requirements = [
    "Minimalny wiek: 18 lat",
    "Maksymalna waga: 100 kg",
    "Dobry stan zdrowia",
    "Wcześniejsza rezerwacja"
  ];

  const activities = [
    "Szkolenie przed skokiem z instruktorem",
    "Skok w tandemie z profesjonalnym instruktorem",
    "Lot na wysokość 4000 metrów",
    "60 sekund swobodnego spadania",
    "5-7 minut lotu na spadochronie",
    "Możliwość nagrania filmu i zdjęć",
    "Otrzymanie certyfikatu po skoku",
    "Widoki na Palm Jumeirah i panoramę Dubaju"
  ];

  const gyg_link = "https://gyg.me/F3pc4pRr";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/skok-ze-spadochronem.jpg"
          alt="Skok ze spadochronem w Dubaju"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Skok ze spadochronem w Dubaju</h1>
            <p className="text-xl">Niezapomniana przygoda z widokiem na Palm Jumeirah</p>
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
            <p className="text-gray-600">Skydive Dubai, The Palm DZ</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <FaClock className="text-2xl text-purple-600 mr-3" />
              <h3 className="text-lg font-semibold">Czas trwania</h3>
            </div>
            <p className="text-gray-600">Około 3-4 godziny</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <FaTicketAlt className="text-2xl text-green-600 mr-3" />
              <h3 className="text-lg font-semibold">Cena</h3>
            </div>
            <p className="text-gray-600">Od 3000 PLN</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <FaStar className="text-2xl text-amber-500 mr-3" />
              <h3 className="text-lg font-semibold">Ocena</h3>
            </div>
            <p className="text-gray-600">4.9/5</p>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FaInfoCircle className="text-blue-600" />
            O skokach ze spadochronem
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Skok ze spadochronem w Dubaju to jedna z najbardziej ekscytujących atrakcji, jakie możesz przeżyć w Zjednoczonych 
              Emiratach Arabskich. Skydive Dubai oferuje niezapomniane doświadczenie skoku w tandemie z profesjonalnym instruktorem, 
              podczas którego możesz podziwiać spektakularne widoki na Palm Jumeirah i panoramę Dubaju.
            </p>
            <p>
              Przed skokiem przejdziesz szczegółowe szkolenie z instruktorem, który wyjaśni Ci wszystkie aspekty bezpieczeństwa 
              i techniki skoku. Sam skok rozpoczyna się na wysokości około 4000 metrów, skąd będziesz mógł podziwiać 
              niesamowite widoki na miasto i zatokę.
            </p>
            <p>
              Podczas około 60-sekundowego swobodnego spadania doświadczysz niesamowitego uczucia wolności, a następnie 
              spokojnego 5-7 minutowego lotu na spadochronie, podczas którego będziesz mógł podziwiać panoramę Dubaju 
              z zupełnie nowej perspektywy.
            </p>
          </div>
        </div>

        {/* Requirements Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FaInfoCircle className="text-blue-600" />
            Wymagania
          </h2>
          <ul className="list-none space-y-4">
            {requirements.map((requirement, index) => (
              <li key={index} className="flex items-start gap-3">
                <FaInfoCircle className="text-blue-600 mt-1" />
                <span className="text-gray-700">{requirement}</span>
              </li>
            ))}
          </ul>
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
            <h2 className="text-3xl font-bold mb-4">Zarezerwuj swój skok</h2>
            <p className="text-xl mb-6">Przeżyj niezapomnianą przygodę w Dubaju</p>
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

        {/* Activities */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Co zawiera skok</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <FaParachuteBox className="text-blue-600 mt-1" />
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

export default DubajSkokZeSpadochronemPage;
