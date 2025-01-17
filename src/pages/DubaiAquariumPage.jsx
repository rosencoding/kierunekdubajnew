import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaFish, FaWater, FaCamera, FaImage, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DubaiAquariumPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const funFacts = [
    "Jedno z największych podwieszanych akwariów na świecie",
    "Posiada 270-stopniowy tunel podwodny",
    "Zamieszkuje tu ponad 33 000 zwierząt wodnych",
    "Zbiornik o pojemności 10 milionów litrów",
    "Dom dla ponad 300 rekinów i płaszczek",
    "Posiada największą na świecie kolekcję rekinów tygryskich piaskowych"
  ];

  const galleryImages = [
    '/images/dubai-aquarium-1.jpg',
    '/images/dubai-aquarium-2.jpg',
    '/images/dubai-aquarium-3.jpg',
    '/images/dubai-aquarium-4.jpg',
    '/images/dubai-aquarium-5.jpg',
    '/images/dubai-aquarium-6.jpg',
    '/images/dubai-aquarium-7.jpg',
    '/images/dubai-aquarium-tunnel.jpg',
    '/images/dubai-aquarium-shark.jpg'
  ];

  const attractions = [
    {
      title: "Podwodne Zoo",
      description: "Wielopoziomowa wystawa wodna prezentująca różne środowiska i gatunki wodne."
    },
    {
      title: "Tunel Podwodny",
      description: "270-stopniowy tunel spacerowy oferujący immersyjne widoki życia morskiego."
    },
    {
      title: "Łódź ze Szklanym Dnem",
      description: "Wyjątkowe doświadczenie unoszenia się nad rekinami i płaszczkami w łodzi ze szklanym dnem."
    },
    {
      title: "Spotkanie z Królem Krokodylem",
      description: "Spotkaj jednego z największych krokodyli w niewoli w specjalnie zaprojektowanym wybiegu."
    }
  ];

  const experiences = [
    {
      title: "Spotkania z Rekinami",
      description: "Zbliż się do różnych gatunków rekinów w ich naturalnym środowisku."
    },
    {
      title: "Sesje Karmienia",
      description: "Obserwuj codzienne sesje karmienia różnych gatunków morskich."
    },
    {
      title: "Interaktywna Nauka",
      description: "Programy edukacyjne o życiu morskim i ochronie środowiska."
    },
    {
      title: "Fotografia",
      description: "Wykonuj zapierające dech w piersiach zdjęcia życia morskiego przez akrylowe panele."
    }
  ];

  const activities = [
    "Spacer przez tunel akwarium",
    "Wizyta w Podwodnym Zoo",
    "Przejażdżka łodzią ze szklanym dnem",
    "Oglądanie sesji karmienia",
    "Spotkanie z Królem Krokodylem",
    "Udział w wycieczkach z przewodnikiem",
    "Interaktywne wystawy",
    "Nurkowanie z rekinami (dla certyfikowanych nurków)",
    "Prezentacje edukacyjne",
    "Zakupy pamiątek"
  ];

  const gyg_link = "https://www.getyourguide.com/dubai-aquarium-underwater-zoo-l3333/dubai-aquarium-and-underwater-zoo-entry-ticket-t123092/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd-attractionpage";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/dubai-aquarium.jpg"
          alt="Akwarium w Dubaju"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Akwarium w Dubaju i Podwodne Zoo
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Odkryj Cuda Życia Morskiego
            </p>
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
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaClock className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Godziny Otwarcia</h3>
            <p className="text-gray-600">10:00 - 22:00</p>
            <p className="text-gray-500 text-sm">Codziennie</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">The Dubai Mall</p>
            <p className="text-gray-500 text-sm">Downtown Dubai</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaTicketAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Cena Biletu</h3>
            <p className="text-gray-600">Od 175 AED</p>
            <p className="text-gray-500 text-sm">Dzieci do lat 3 za darmo</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaStar className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.7/5</p>
            <p className="text-gray-500 text-sm">od odwiedzających</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">O Akwarium w Dubaju</h2>
          <p className="text-gray-600 mb-6">
            Akwarium w Dubaju to jedno z najbardziej imponujących akwariów na świecie, znajdujące się w <Link to="/atrakcje/dubai-mall" className="text-blue-600 hover:text-blue-800">Dubai Mall</Link>. 
            Ten niezwykły obiekt oferuje odwiedzającym możliwość podziwiania fascynującego życia morskiego przez 
            ogromne akrylowe panele i w ramach immersyjnego 270-stopniowego tunelu. Z ponad 33 000 zwierząt morskich, 
            w tym rekinów, płaszczek i niezliczonych gatunków ryb, akwarium stanowi niezapomniane doświadczenie dla 
            całej rodziny.
          </p>
        </div>

        {/* Features */}
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
                <FaInfoCircle className="text-blue-500 mt-1 mr-3" />
                <span>{activity}</span>
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
                  alt={`Akwarium w Dubaju - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-blue-50 rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Ciekawostki</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {funFacts.map((fact, index) => (
              <div key={index} className="flex items-start">
                <FaInfoCircle className="text-blue-500 mt-1 mr-3" />
                <span>{fact}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mb-12">
          <a
            href={gyg_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-600 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Zarezerwuj bilety do Akwarium w Dubaju
            <FaExternalLinkAlt className="ml-2" />
          </a>
        </div>

        {/* Other Attractions */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Inne atrakcje</h2>
          <div
            data-gyg-href="https://widget.getyourguide.com/default/activities.frame"
            data-gyg-locale-code="pl-PL"
            data-gyg-widget="activities"
            data-gyg-number-of-items="8"
            data-gyg-cmp="kd-attracion"
            data-gyg-partner-id="19WQ75B"
            data-gyg-tour-ids="505703,49021,49019,411488,587080,714548,129267,123092"
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

export default DubaiAquariumPage;
