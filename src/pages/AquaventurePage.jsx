import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaWater, FaSwimmer, FaChild } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AquaventurePage = () => {
  const funFacts = [
    "Największy aquapark na świecie",
    "Posiada ponad 105 rekordowych zjeżdżalni i atrakcji",
    "Znajduje się tu najdłuższa zjeżdżalna wodna na świecie",
    "Zawiera 79 milionów litrów świeżej wody",
    "Obejmuje 2,3-kilometrową prywatną plażę",
    "W Lost Chambers Aquarium mieszka ponad 65 000 morskich zwierząt"
  ];

  const galleryImages = [
    '/images/aquaventure-1.jpg',
    '/images/aquaventure-2.jpg',
    '/images/aquaventure-3.jpg',
    '/images/aquaventure-4.jpg',
    '/images/aquaventure-5.jpg',
    '/images/aquaventure.jpg'
  ];

  const attractions = [
    {
      title: "Trident Tower",
      description: "Najwyższa wieża ze zjeżdżalniami wodnymi na świecie, posiadająca 12 rekordowych zjeżdżalni, w tym najdłuższą zjeżdżalnię wodną świata."
    },
    {
      title: "Splashers Island",
      description: "Największy na świecie aquapark tylko dla dzieci z 16 atrakcjami zaprojektowanymi specjalnie dla młodych odkrywców."
    },
    {
      title: "Aquaventure Beach",
      description: "Malownicza 2,3-kilometrowa prywatna plaża z krystalicznie czystą wodą i wygodnymi leżakami."
    },
    {
      title: "Lost Chambers Aquarium",
      description: "Podwodny labirynt zamieszkany przez ponad 65 000 morskich stworzeń, przedstawiający legendę zaginionego miasta Atlantydy."
    }
  ];

  const experiences = [
    {
      title: "Ekstremalne Zjeżdżalnie",
      description: "Poczuj adrenalinę na zjeżdżalniach takich jak Leap of Faith i Poseidon's Revenge."
    },
    {
      title: "Atrakcje Rodzinne",
      description: "Skorzystaj z atrakcji przyjaznych rodzinie, takich jak Lazy River i baseny z falami odpowiednie dla wszystkich grup wiekowych."
    },
    {
      title: "Spotkania z Morskimi Zwierzętami",
      description: "Poznaj z bliska rekiny, płaszczki i delfiny podczas różnych doświadczeń z morskimi zwierzętami."
    },
    {
      title: "Aktywności na Plaży",
      description: "Zrelaksuj się na prywatnej plaży, spróbuj sportów wodnych lub ciesz się posiłkami przy plaży."
    }
  ];

  const activities = [
    "Zjeżdżaj na rekordowych zjeżdżalniach",
    "Odwiedź Splashers Island",
    "Relaksuj się na prywatnej plaży",
    "Spotkaj morskie zwierzęta",
    "Pływaj w Lazy River",
    "Zwiedzaj Lost Chambers",
    "Baw się w basenach z falami",
    "Spróbuj spotkań z rekinami",
    "Zjedz w restauracjach",
    "Weź lekcje surfingu"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/aquaventure.jpg"
          alt="Aquaventure Waterpark"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Aquaventure Waterpark
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Największy Aquapark na Świecie
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <a
                  href="https://www.getyourguide.com/dubai-l173/dubai-atlantis-aquaventure-waterpark-admission-ticket-t570397/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg inline-flex items-center space-x-2"
                >
                  <FaTicketAlt />
                  <span>Kup Bilety Online</span>
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  to="/atrakcje/atlantis-the-royal"
                  className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg inline-flex items-center space-x-2"
                >
                  <FaInfoCircle />
                  <span>Zobacz Atlantis The Royal</span>
                </Link>
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
            <p className="text-gray-600">10:00 - Zachód słońca</p>
            <p className="text-gray-500 text-sm">Codziennie</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-teal-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Crescent Road</p>
            <p className="text-gray-500 text-sm">Palm Jumeirah</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaTicketAlt className="w-8 h-8 text-teal-500 mb-4" />
            <h3 className="font-semibold mb-2">Cena Biletu</h3>
            <p className="text-gray-600">Od 320 AED</p>
            <p className="text-gray-500 text-sm">Dzieci do 2 lat za darmo</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaStar className="w-8 h-8 text-teal-500 mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.7/5</p>
            <p className="text-gray-500 text-sm">od odwiedzających</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">O Aquaventure</h2>
          <p className="text-gray-600 mb-6">
            Aquaventure w Atlantis The Palm to największy aquapark na świecie, oferujący niekończącą się wodną zabawę dla wszystkich grup wiekowych. Z ponad 105 rekordowymi zjeżdżalniami i atrakcjami, w tym najdłuższą zjeżdżalnią wodną świata, park zapewnia niezapomnianą wodną przygodę. Od atrakcji pełnych adrenaliny po relaksujące doświadczenia na plaży i spotkania z morskimi zwierzętami, Aquaventure łączy emocje, relaks i odkrywanie życia morskiego w jednym spektakularnym miejscu.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <FaMapMarkerAlt className="text-teal-500" />
            <span className="text-gray-600">
              Atlantis The Palm, Crescent Road, Palm Jumeirah, Dubaj, ZEA
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
                  alt={`Aquaventure Waterpark - ${index + 1}`}
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
          <h2 className="text-2xl font-bold mb-6">Wodne Doświadczenia</h2>
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

export default AquaventurePage;
