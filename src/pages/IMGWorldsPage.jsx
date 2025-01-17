import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaDragon, FaChild, FaUtensils, FaExternalLinkAlt } from 'react-icons/fa';

const IMGWorldsPage = () => {
  const funFacts = [
    "IMG Worlds of Adventure to największy zadaszony park rozrywki na świecie",
    "Park zajmuje powierzchnię ponad 140 000 metrów kwadratowych",
    "Posiada unikalne strefy tematyczne Marvel i Cartoon Network",
    "Znajduje się tu najszybsza i najwyższa kolejka górska w Dubaju",
    "Temperatura wewnątrz jest utrzymywana na poziomie 22°C przez cały rok",
    "Może pomieścić do 20 000 odwiedzających dziennie"
  ];

  const galleryImages = [
    '/images/img-worlds-1.jpg',
    '/images/img-worlds-2.jpg',
    '/images/img-worlds-3.jpg',
    '/images/img-worlds.jpg'
  ];

  const attractions = [
    {
      title: "Strefa Marvel",
      description: "Ekscytujące atrakcje z udziałem Spider-Mana, Thora, Hulka i innych superbohaterów Marvela. Zawiera wysokiej klasy przejażdżkę Avengers: Battle of Ultron."
    },
    {
      title: "Strefa Cartoon Network",
      description: "Przyjazna rodzinom strefa z atrakcjami i rozrywką z udziałem Ben 10, The Powerpuff Girls i innych ukochanych postaci z Cartoon Network."
    },
    {
      title: "Zaginiona Dolina",
      description: "Strefa z motywem dinozaurów z animatronicznymi dinozaurami i prehistorycznymi atrakcjami, w tym kolejką górską Velociraptor."
    },
    {
      title: "Bulwar IMG",
      description: "Główne centrum rozrywki parku oferujące wyjątkowe opcje gastronomiczne, sklepy i rozrywkę na żywo."
    }
  ];

  const experiences = [
    {
      title: "Ekstremalne Atrakcje",
      description: "Doświadcz emocjonujących atrakcji, takich jak kolejka górska Velociraptor i Thor Thunder Spin."
    },
    {
      title: "Atrakcje Rodzinne",
      description: "Ciesz się rodzinnymi przejażdżkami i pokazami w strefie Cartoon Network, idealnymi dla młodszych gości."
    },
    {
      title: "Doświadczenia Kulinarne",
      description: "Liczne tematyczne restauracje oferujące różnorodną kuchnię, od przekąsek po pełne posiłki."
    },
    {
      title: "Spotkania z Postaciami",
      description: "Spotkaj swoich ulubionych superbohaterów Marvela i postacie z Cartoon Network w całym parku."
    }
  ];

  const activities = [
    "Przejażdżka kolejką górską Velociraptor",
    "Doświadcz Avengers Battle of Ultron",
    "Spotkaj superbohaterów Marvela",
    "Zobacz pokazy w kinie 5D",
    "Odkryj Zaginioną Dolinę z dinozaurami",
    "Zobacz pokazy na żywo Cartoon Network",
    "Zjedz w tematycznych restauracjach",
    "Kup ekskluzywne pamiątki",
    "Zrób zdjęcia z maskotkami postaci"
  ];

  const gyg_link = "https://www.getyourguide.com/dubai-l173/img-worlds-of-adventure-entry-ticket-with-hotel-transfers-t490920/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd-attractionpage";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/img-worlds.jpg"
          alt="IMG Worlds of Adventure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              IMG Worlds of Adventure
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Największy zadaszony park rozrywki na świecie
            </p>
            {/* Book Tickets Button */}
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
                <span>Zarezerwuj Bilety Online</span>
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
            <h3 className="font-semibold mb-2">Godziny Otwarcia</h3>
            <p className="text-gray-600">11:00 - 20:00</p>
            <p className="text-gray-500 text-sm">Czynne cały rok</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">E311 Sheikh Mohammed</p>
            <p className="text-gray-500 text-sm">Bin Zayed Rd, Dubaj</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaTicketAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Cena Biletu</h3>
            <p className="text-gray-600">299 AED dorośli</p>
            <p className="text-gray-500 text-sm">279 AED dzieci</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaStar className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.3/5</p>
            <p className="text-gray-500 text-sm">od odwiedzających</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">O IMG Worlds of Adventure</h2>
          <p className="text-gray-600 mb-6">
            IMG Worlds of Adventure to pierwszy mega tematyczny park rozrywki w Dubaju, łączący światy Marvela, Cartoon Network, 
            Zaginionej Doliny i Bulwaru IMG w największym zadaszonego parku rozrywki na świecie. Z najnowocześniejszymi 
            atrakcjami, unikalną rozrywką i tematycznymi restauracjami, oferuje całoroczną zabawę w klimatyzowanym 
            otoczeniu dla odwiedzających w każdym wieku.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <FaMapMarkerAlt className="text-blue-500" />
            <span className="text-gray-600">
              E311 - Sheikh Mohammed Bin Zayed Rd, Dubaj, ZEA
            </span>
          </div>
        </div>

        {/* Attractions */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Strefy Tematyczne</h2>
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
                  alt={`IMG Worlds of Adventure - ${index + 1}`}
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

export default IMGWorldsPage;
