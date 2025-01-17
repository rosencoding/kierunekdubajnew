import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaWater, FaSwimmer, FaGraduationCap } from 'react-icons/fa';

const DeepDiveDubaiPage = () => {
  const funFacts = [
    "Najgłębszy basen na świecie o głębokości 60,02 metrów",
    "Zawiera 14 milionów litrów słodkiej wody",
    "Temperatura utrzymywana na poziomie 30 stopni Celsjusza",
    "Posiada podwodne miasto do eksploracji",
    "Nowoczesny system filtracji wymienia wodę co 6 godzin",
    "Zaawansowana komora hiperbaryczna na miejscu"
  ];

  const galleryImages = [
    '/images/deep-dive-dubai-1.jpg',
    '/images/deep-dive-dubai-2.jpg',
    '/images/deep-dive-dubai-3.jpg',
    '/images/deep-dive-dubai.jpg'
  ];

  const attractions = [
    {
      title: "Basen o głębokości 60m",
      description: "Najgłębszy basen na świecie z różnymi poziomami głębokości i środowiskami dla wszystkich poziomów umiejętności."
    },
    {
      title: "Podwodne Miasto",
      description: "Zatopione środowisko miejskie z apartamentami, grami arcade i różnymi elementami do eksploracji."
    },
    {
      title: "Obiekty Szkoleniowe",
      description: "Nowoczesne obiekty do nurkowania, w tym sale lekcyjne i pomieszczenia odpraw."
    },
    {
      title: "Galeria Widokowa",
      description: "Restauracja i punkty widokowe z oknami na podwodny świat."
    }
  ];

  const experiences = [
    {
      title: "Odkryj Nurkowanie",
      description: "Pierwsze doświadczenie nurkowe z profesjonalnymi instruktorami w kontrolowanym środowisku."
    },
    {
      title: "Freediving",
      description: "Naucz się technik wstrzymywania oddechu i eksploruj głębiny bez sprzętu."
    },
    {
      title: "Nurkowanie Techniczne",
      description: "Zaawansowane kursy i doświadczenia nurkowe dla certyfikowanych nurków."
    },
    {
      title: "Fotografia Podwodna",
      description: "Uwiecznij wyjątkowe momenty w podwodnym mieście za pomocą specjalistycznego sprzętu."
    }
  ];

  const activities = [
    "Spróbuj nurkowania",
    "Weź udział w kursach nurkowania",
    "Odkryj podwodne miasto",
    "Obserwuj z galerii widokowej",
    "Naucz się freedivingu",
    "Zrób podwodne zdjęcia",
    "Dołącz do wycieczek z przewodnikiem",
    "Wypróbuj nurkowanie techniczne",
    "Zjedz posiłek z widokiem na basen",
    "Odwiedź sklep nurkowy"
  ];

  const affiliate_link = "https://www.getyourguide.com/dubai-l173/discover-scuba-dive-for-non-divers-at-deep-dive-dubai-t442814/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/deep-dive-dubai.jpg"
          alt="Deep Dive Dubai"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Deep Dive Dubai
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Najgłębszy Basen na Świecie
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href={affiliate_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg inline-flex items-center space-x-2"
              >
                <FaTicketAlt />
                <span>Zarezerwuj Nurkowanie</span>
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
            <p className="text-gray-600">9:00 - 21:00</p>
            <p className="text-gray-500 text-sm">Codziennie</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Nad Al Sheba 1</p>
            <p className="text-gray-500 text-sm">Dubaj</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaTicketAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Cena Doświadczenia</h3>
            <p className="text-gray-600">Od 400 AED</p>
            <p className="text-gray-500 text-sm">Zależy od aktywności</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaStar className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.8/5</p>
            <p className="text-gray-500 text-sm">od odwiedzających</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">O Deep Dive Dubai</h2>
          <p className="text-gray-600 mb-6">
            Deep Dive Dubai to dom najgłębszego basenu na świecie, sięgającego niesamowitej głębokości 60,02 metrów. Ten nowoczesny obiekt oferuje podwodne miasto czekające na odkrycie, wyposażone w opuszczone apartamenty, gry arcade i różne inne niespodzianki. Niezależnie od tego, czy nurkujesz po raz pierwszy, czy jesteś doświadczonym profesjonalistą, Deep Dive Dubai oferuje wyjątkowe doświadczenia w bezpiecznym, kontrolowanym środowisku z krystalicznie czystą, filtrowaną słodką wodą utrzymywaną w idealnej temperaturze.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <FaMapMarkerAlt className="text-blue-500" />
            <span className="text-gray-600">
              Nad Al Sheba 1, Dubaj, Zjednoczone Emiraty Arabskie
            </span>
          </div>
        </div>

        {/* Key Attractions */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaWater className="w-8 h-8 text-blue-500 mr-4" />
            <h2 className="text-2xl font-bold">Główne Atrakcje</h2>
          </div>
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
          <div className="flex items-center mb-6">
            <FaSwimmer className="w-8 h-8 text-blue-500 mr-4" />
            <h2 className="text-2xl font-bold">Doświadczenia Nurkowe</h2>
          </div>
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
                  alt={`Deep Dive Dubai - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mb-12">
          <a
            href={affiliate_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-500 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Zarezerwuj swoje nurkowanie
            <FaTicketAlt className="ml-2" />
          </a>
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

export default DeepDiveDubaiPage;
