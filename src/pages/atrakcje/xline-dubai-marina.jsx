import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaWeight, FaRuler, FaRunning, FaMountain, FaCamera, FaHistory, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const XLineDubaiMarinaPage = () => {
  const funFacts = [
    "Jedna z najdłuższych miejskich tyrolek na świecie o długości 1 kilometra",
    "Uczestnicy mogą osiągać prędkość do 80 kilometrów na godzinę",
    "Posiada unikalny system podwójnej liny umożliwiający zjazdy w parach",
    "Zjazd rozpoczyna się z wieży Amwaj na wysokości 170 metrów",
    "Lądowanie odbywa się na tarasie Dubai Marina Mall",
    "Zjazd trwa około 40 sekund"
  ];

  const galleryImages = [
    '/images/xline-1.jpg',
    '/images/xline-2.jpg',
    '/images/xline-3.jpg',
    '/images/xline.jpg'
  ];

  const attractions = [
    {
      title: "System Podwójnej Liny",
      description: "Przeżyj emocjonujący zjazd z przyjacielem na równoległych linach, idealne do wspólnego dzielenia wrażeń."
    },
    {
      title: "Spektakularne Widoki",
      description: "Szybuj nad Dubai Marina podziwiając zapierające dech w piersiach widoki na luksusowe jachty, drapacze chmur i Zatokę Perską."
    },
    {
      title: "Profesjonalny Sprzęt",
      description: "Najnowocześniejszy sprzęt zabezpieczający i wyposażenie, w tym kamery GoPro do uwiecznienia Twojego doświadczenia."
    },
    {
      title: "Platforma Widokowa",
      description: "Spektakularna platforma startowa oferująca panoramiczne widoki na Dubai Marina i Palm Jumeirah."
    }
  ];

  const experiences = [
    {
      title: "Lot Solo",
      description: "Indywidualny zjazd na tyrolce idealny dla poszukiwaczy wrażeń chcących podbić miejskie niebo."
    },
    {
      title: "Zjazd w Parze",
      description: "Podziel się doświadczeniem z przyjacielem lub partnerem na równoległych linach, ścigając się do mety."
    },
    {
      title: "Pakiet Zdjęciowy",
      description: "Profesjonalna usługa fotograficzna i wideo, aby uwiecznić Twoje niesamowite przeżycia."
    },
    {
      title: "Doświadczenie VIP",
      description: "Pakiet premium obejmujący priorytetowy dostęp, wydłużony czas lotu i ekskluzywne dodatki."
    }
  ];

  const activities = [
    "Emocjonujący zjazd na specjalnie przygotowanej linie",
    "Możliwość zrobienia wyjątkowych zdjęć z góry",
    "Możliwość ścigania się ze znajomymi na sąsiednich torach",
    "Nagranie swojego zjazdu kamerą sportową",
    "Podziwianie panoramy Dubai Marina z wysokości",
    "Uczestnicy mogą zakupić pamiątkowe zdjęcia i filmy z zjazdu",
    "Możliwość podzielenia się wrażeniami w social mediach",
    "Po zjeździe można odwiedzić centrum handlowe Dubai Marina Mall"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/xline.jpg"
          alt="XLine Dubai Marina"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              XLine Dubai Marina
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Tyrolka nad Dubai Marina
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="https://www.xdubai.com/xline"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-500 hover:bg-gold-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg inline-flex items-center space-x-2"
              >
                <FaTicketAlt />
                <span>Zarezerwuj Swój Lot</span>
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
            <FaClock className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Godziny Otwarcia</h3>
            <p className="text-gray-600">9:00 - 17:00</p>
            <p className="text-gray-500 text-sm">W zależności od pogody</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Dubai Marina Mall</p>
            <p className="text-gray-500 text-sm">Dubai Marina</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Cena Biletu</h3>
            <p className="text-gray-600">Od 650 AED</p>
            <p className="text-gray-500 text-sm">za osobę</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaStar className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.7/5</p>
            <p className="text-gray-500 text-sm">od uczestników</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">O XLine Dubai Marina</h2>
          <p className="text-gray-600 mb-6">
          Szukasz ekstremalnych wrażeń w Dubaju? XLine Dubai Marina to najdłuższa miejska tyrolka w Dubaju, oferująca zjazd z prędkością do 80 km/h nad wodami <Link to="/atrakcje/dubai-marina" className="text-blue-600 hover:text-blue-800">Dubai Marina</Link>. Ta wyjątkowa dubajska tyrolka pozwala podziwiać panoramę miasta, luksusowe jachty i Zatokę Perską z zapierającej dech w piersiach wysokości. Rozpocznij niezapomnianą przygodę i poczuj się jak latający superbohater nad najbardziej ikoniczną dzielnicą Dubaju.          </p>
          <div className="flex items-center space-x-2 mb-4">
            <FaMapMarkerAlt className="text-gold-500" />
            <span className="text-gray-600">
              Dubai Marina Mall, Dubai Marina, Dubaj, ZEA
            </span>
          </div>
        </div>

        {/* Gallery */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">Galeria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square overflow-hidden rounded-lg shadow-md"
              >
                <img
                  src={image}
                  alt={`XLine Dubai Marina ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Attractions */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaMountain className="w-8 h-8 text-gold-500 mr-4" />
            <h2 className="text-3xl font-semibold">Główne Atrakcje</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {attractions.map((attraction, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h3 className="font-semibold text-xl mb-4">{attraction.title}</h3>
                <p className="text-gray-600">{attraction.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaInfoCircle className="w-8 h-8 text-gold-500 mr-4" />
            <h2 className="text-3xl font-semibold">Wymogi</h2>
          </div>
          <p className="text-gray-700 mb-6">Aby skorzystać z tyrolki (zjazdu na linie) należy spełnić następujące warunki:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center space-x-3 mb-2">
                <FaCalendarAlt className="text-gold-500 w-5 h-5" />
                <h3 className="font-semibold text-gray-800">Wiek</h3>
              </div>
              <p className="text-gray-600">12-65 lat (osoby poniżej 18 lat - wymagana obecność i zgoda rodzica)</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center space-x-3 mb-2">
                <FaWeight className="text-gold-500 w-5 h-5" />
                <h3 className="font-semibold text-gray-800">Waga</h3>
              </div>
              <p className="text-gray-600">45-100 kg</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center space-x-3 mb-2">
                <FaRuler className="text-gold-500 w-5 h-5" />
                <h3 className="font-semibold text-gray-800">Wzrost</h3>
              </div>
              <p className="text-gray-600">powyżej 130 cm</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center space-x-3 mb-2">
                <FaRunning className="text-gold-500 w-5 h-5" />
                <h3 className="font-semibold text-gray-800">Strój</h3>
              </div>
              <p className="text-gray-600">wygodne ubranie i pełne buty (zakaz sukienek i klapek)</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center space-x-3 mb-2">
                <FaInfoCircle className="text-gold-500 w-5 h-5" />
                <h3 className="font-semibold text-gray-800">Zdrowie</h3>
              </div>
              <p className="text-gray-600">dobra kondycja fizyczna (zakaz dla kobiet w ciąży)</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center space-x-3 mb-2">
                <FaInfoCircle className="text-gold-500 w-5 h-5" />
                <h3 className="font-semibold text-gray-800">Trzeźwość</h3>
              </div>
              <p className="text-gray-600">zakaz jazdy pod wpływem alkoholu i innych środków odurzających</p>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaInfoCircle className="w-8 h-8 text-gold-500 mr-4" />
            <h2 className="text-3xl font-semibold">Ciekawostki</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                className="flex items-start space-x-3"
              >
                <FaStar className="text-gold-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">{fact}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaHistory className="w-8 h-8 text-gold-500 mr-4" />
            <h2 className="text-3xl font-semibold">Atrakcje związane ze zjazdem na tyrolce</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                className="flex items-start space-x-3"
              >
                <FaHeart className="text-gold-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">{activity}</p>
              </motion.div>
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

export default XLineDubaiMarinaPage;
