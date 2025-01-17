import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaPalette, FaLightbulb, FaCamera } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const InfinityDesLumieresPage = () => {
  const funFacts = [
    "Największa galeria sztuki cyfrowej na Bliskim Wschodzie",
    "Posiada ponad 130 projektorów i 58 głośników",
    "Zajmuje 2,700 metrów kwadratowych przestrzeni immersyjnej",
    "Ściany o wysokości do 12 metrów",
    "Wykorzystuje najnowocześniejszą technologię mapowania projekcji",
    "Prezentuje prace znanych artystów w formacie cyfrowym"
  ];

  const galleryImages = [
    '/images/infinity-des-lumieres-1.jpg',
    '/images/infinity-des-lumieres-2.jpg',
    '/images/infinity-des-lumieres-3.jpg',
    '/images/infinity-des-lumieres-4.jpg',
    '/images/infinity-des-lumieres-5.jpg',
    '/images/infinity-des-lumieres.jpg'
  ];

  const attractions = [
    {
      title: "Galeria Sztuki Immersyjnej",
      description: "360-stopniowe cyfrowe wystawy sztuki prezentujące arcydzieła przekształcone w immersyjne doświadczenia."
    },
    {
      title: "Pokazy Współczesne",
      description: "Nowoczesne instalacje sztuki cyfrowej i wystawy współczesne wykorzystujące najnowocześniejszą technologię."
    },
    {
      title: "Przestrzenie Interaktywne",
      description: "Obszary, gdzie zwiedzający mogą wchodzić w interakcję ze sztuką cyfrową i stać się częścią wystawy."
    },
    {
      title: "Wystawy Specjalne",
      description: "Rotacyjne wystawy prezentujące różnych artystów i tematy w ciągu roku."
    }
  ];

  const experiences = [
    {
      title: "Pokazy Sztuki Cyfrowej",
      description: "Doświadcz arcydzieł ożywionych poprzez immersyjne projekcje cyfrowe i dźwięk."
    },
    {
      title: "Elementy Interaktywne",
      description: "Zaangażuj się w responsywne instalacje cyfrowe reagujące na ruchy zwiedzających."
    },
    {
      title: "Podróż Dźwięku i Światła",
      description: "Wielozmysłowe doświadczenie łączące sztukę wizualną z zsynchronizowaną muzyką i dźwiękami."
    },
    {
      title: "Sesje Fotograficzne",
      description: "Wykonaj oszałamiające zdjęcia w unikalnych środowiskach sztuki cyfrowej."
    }
  ];

  const activities = [
    "Oglądanie pokazów sztuki cyfrowej",
    "Interakcja z instalacjami",
    "Robienie artystycznych zdjęć",
    "Uczestnictwo w wystawach specjalnych",
    "Doświadczanie podróży dźwiękowych",
    "Udział w wycieczkach z przewodnikiem",
    "Odwiedzanie pokoju nieskończoności",
    "Nauka o sztuce cyfrowej",
    "Oglądanie prezentacji artystów",
    "Odkrywanie galerii tematycznych"
  ];

  const website_link = "https://www.infinitylumieres.com/";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/infinity-des-lumieres.jpg"
          alt="Infinity des Lumières"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Infinity des Lumières
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Najważniejsze Centrum Sztuki Cyfrowej na Bliskim Wschodzie
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href={website_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg inline-flex items-center space-x-2"
              >
                <FaTicketAlt />
                <span>Zarezerwuj Bilet</span>
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
            <FaClock className="w-8 h-8 text-purple-500 mb-4" />
            <h3 className="font-semibold mb-2">Godziny Otwarcia</h3>
            <p className="text-gray-600">10:00 - 20:00</p>
            <p className="text-gray-500 text-sm">Codziennie</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-purple-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Poziom 2, The Dubai Mall</p>
            <p className="text-gray-500 text-sm">Downtown Dubaj</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaTicketAlt className="w-8 h-8 text-purple-500 mb-4" />
            <h3 className="font-semibold mb-2">Cena Biletu</h3>
            <p className="text-gray-600">Od 125 AED</p>
            <p className="text-gray-500 text-sm">Dzieci do lat 3 za darmo</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaStar className="w-8 h-8 text-purple-500 mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.6/5</p>
            <p className="text-gray-500 text-sm">od odwiedzających</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">O Infinity des Lumières</h2>
          <p className="text-gray-600 mb-6">
            Infinity des Lumières to największe centrum sztuki cyfrowej na Bliskim Wschodzie, oferujące niezrównane immersyjne doświadczenie artystyczne. Zlokalizowane w <Link to="/atrakcje/dubai-mall" className="text-purple-600 hover:text-purple-700 underline">Dubai Mall</Link>, to nowoczesne miejsce przekształca arcydzieła sztuki w oszałamiające wyświetlacze cyfrowe przy użyciu najnowocześniejszej technologii. Zwiedzający mogą doświadczyć sztuki w zupełnie nowy sposób poprzez 360-stopniowe projekcje cyfrowe, tworząc niezapomnianą, wielozmysłową podróż przez różne artystyczne światy.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <FaMapMarkerAlt className="text-purple-500" />
            <span className="text-gray-600">
              Poziom 2, <Link to="/atrakcje/dubai-mall" className="text-purple-600 hover:text-purple-700 underline">The Dubai Mall</Link>, Downtown Dubai, Dubaj, Zjednoczone Emiraty Arabskie
            </span>
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
          <h2 className="text-2xl font-bold mb-6">Doświadczenia Cyfrowe</h2>
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
                <FaInfoCircle className="text-purple-500 mt-1 mr-3" />
                <span>{activity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-purple-50 rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Ciekawostki</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {funFacts.map((fact, index) => (
              <div key={index} className="flex items-start">
                <FaInfoCircle className="text-purple-500 mt-1 mr-3" />
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
                  alt={`Infinity des Lumières - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mb-12">
          <a
            href={website_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-purple-400 rounded-lg shadow-lg hover:from-purple-600 hover:to-purple-500 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Zarezerwuj swoje doświadczenie
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

export default InfinityDesLumieresPage;
