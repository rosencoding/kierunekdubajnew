import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaTicketAlt, FaBinoculars, FaCamera, FaExternalLinkAlt } from 'react-icons/fa';

const ObservationDeckPage = () => {
  const funFacts = [
    "Znajduje się na 74. piętrze Jumeirah at Etihad Towers",
    "Położony na wysokości 300 metrów nad poziomem morza",
    "Oferuje panoramiczne widoki sięgające ponad 300 km w pogodny dzień",
    "Wyposażony w interaktywne iPady z technologią point-and-learn",
    "Przejazd windą na szczyt trwa mniej niż 55 sekund",
    "Nazwa pochodzi od wysokości 300 metrów nad ziemią"
  ];

  const galleryImages = [
    '/images/observation-deck-1.jpg',
    '/images/observation-deck-2.jpg',
    '/images/observation-deck-3.jpg',
    '/images/observation-deck-4.jpg',
    '/images/observation-deck-5.jpg',
    '/images/observation-deck-6.jpg',
    '/images/observation-deck-7.jpg',
    '/images/observation-deck-8.jpg',
    '/images/observation-deck.jpg'
  ];

  const attractions = [
    {
      title: "Widoki 360°",
      description: "Nieograniczone panoramiczne widoki na panoramę Abu Dhabi, Zatokę Perską i kultowe zabytki miasta przez okna od podłogi do sufitu."
    },
    {
      title: "Popołudniowa herbata",
      description: "Luksusowe doświadczenie high tea z wyborem wykwintnych herbat, ciast i kanapek przy spektakularnych widokach."
    },
    {
      title: "Interaktywne doświadczenie",
      description: "Cyfrowe przewodniki i ekrany dotykowe pomagające zwiedzającym identyfikować zabytki i poznawać rozwój Abu Dhabi."
    }
  ];

  const bookingOptions = [
    {
      title: "Standardowy bilet wstępu",
      description: "Dostęp do tarasu widokowego z powitalnym napojem",
      price: "Od 95 AED",
      link: "https://www.getyourguide.com/jumeirah-at-etihad-towers-l89865/observation-deck-at-300-entry-ticket-t389167/"
    },
    {
      title: "Pakiet z popołudniową herbatą",
      description: "Wstęp z ekskluzywną popołudniową herbatą",
      price: "Od 250 AED",
      link: "https://www.jumeirah.com/en/dine/abu-dhabi/etihad-towers-observation-deck-at-300"
    },
    {
      title: "Premium pakiet zachodu słońca",
      description: "Wieczorny dostęp z przekąskami podczas zachodu słońca",
      price: "Od 125 AED",
      link: "https://www.jumeirah.com/en/dine/abu-dhabi/etihad-towers-observation-deck-at-300"
    }
  ];

  const activities = [
    "Podziwiaj panoramiczne widoki",
    "Zrób zdjęcia zabytków",
    "Napij się popołudniowej herbaty",
    "Skorzystaj z interaktywnych przewodników",
    "Zobacz zachód słońca",
    "Znajdź słynne budynki",
    "Poznaj Abu Dhabi",
    "Delektuj się przekąskami",
    "Odwiedź sklep z pamiątkami"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/observation-deck.jpg"
          alt="Observation Deck at 300"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Observation Deck at 300
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Najwyższy punkt widokowy w Abu Dhabi
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="https://www.jumeirah.com/en/dine/abu-dhabi/etihad-towers-observation-deck-at-300"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1E3A8A] hover:bg-[#1C3574] text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg inline-flex items-center space-x-2"
              >
                <FaTicketAlt />
                <span>Oficjalna strona</span>
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
            <h3 className="font-semibold mb-2">Godziny otwarcia</h3>
            <p className="text-gray-600">12:00 - 20:00</p>
            <p className="text-gray-500 text-sm">Codziennie</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Cena wstępu</h3>
            <p className="text-gray-600">Od 95 AED</p>
            <p className="text-gray-500 text-sm">Dzieci poniżej 4 lat: Za darmo</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaStar className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.6/5 od odwiedzających</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Conrad Abu Dhabi Etihad Towers</p>
            <p className="text-gray-500 text-sm">West Corniche</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">O Observation Deck at 300</h2>
          <p className="text-gray-600 mb-6">
            Znajdujący się na 74. piętrze Jumeirah at Etihad Towers, Observation Deck at 300 oferuje najwyższy punkt widokowy w Abu Dhabi z zapierającymi dech w piersiach widokami na panoramę miasta, Zatokę Perską i okoliczne wyspy. To wyrafinowane miejsce łączy oszałamiające widoki z luksusową gościnnością, oferując odwiedzającym nie tylko panoramiczne widoki, ale także eleganckie doświadczenie popołudniowej herbaty.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <FaMapMarkerAlt className="text-[#1E3A8A]" />
            <span className="text-gray-600">
              Tower 2, Jumeirah at Etihad Towers, West Corniche, Abu Dhabi
            </span>
          </div>
        </div>

        {/* Gallery */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">Galeria</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="rounded-xl overflow-hidden h-64"
              >
                <img
                  src={image}
                  alt={`Observation Deck at 300 - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Attractions */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">Główne atrakcje</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-3">{attraction.title}</h3>
                <p className="text-gray-600">{attraction.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experiences & Pricing */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">Doświadczenia i ceny</h2>
          <div data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
               data-gyg-locale-code="pl-PL" 
               data-gyg-widget="activities" 
               data-gyg-number-of-items="8" 
               data-gyg-partner-id="19WQ75B" 
               data-gyg-tour-ids="139694,237897,564983,555237,528385,448422,121428,401557">
            <span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/louvre-abu-dhabi-l88814/">GetYourGuide</a></span>
          </div>
        </div>

        {/* Booking Options */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">Opcje rezerwacji</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bookingOptions.map((option, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <p className="text-lg font-semibold text-[#1E3A8A] mb-4">{option.price}</p>
                <a
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#1E3A8A] hover:text-[#1C3574]"
                >
                  <span className="mr-2">Zarezerwuj teraz</span>
                  <FaExternalLinkAlt />
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">Co można robić</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
              >
                <FaBinoculars className="text-[#1E3A8A]" />
                <span className="text-gray-700">{activity}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-3xl font-semibold mb-6">Ciekawostki</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                className="flex items-start space-x-3 p-4"
              >
                <FaInfoCircle className="text-[#1E3A8A] mt-1" />
                <span className="text-gray-700">{fact}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObservationDeckPage;
