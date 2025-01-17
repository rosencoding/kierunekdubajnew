import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaShip, FaCamera, FaStore, FaExternalLinkAlt } from 'react-icons/fa';

const DubaiCreekPage = () => {
  const funFacts = [
    "Dubai Creek jest portem handlowym od ponad 100 lat",
    "Creek dzieli Dubaj na dwie główne części: Deira i Bur Dubai",
    "Tradycyjne drewniane łodzie dhow wciąż przewożą ładunki do różnych krajów",
    "Kanał został pogłębiony w 1961 roku, aby umożliwić dostęp większym statkom",
    "Creek był pierwszym portem Dubaju i fundamentem jego morskiego dziedzictwa",
    "Niektóre dhow operujące tutaj przewożą ładunki warte miliony dirhamów"
  ];

  const galleryImages = [
    '/images/dubai-creek-1.jpg',
    '/images/dubai-creek-2.jpg',
    '/images/dubai-creek-3.jpg',
    '/images/dubai-creek-4.jpg',
    '/images/dubai-creek-5.jpg',
    '/images/dubai-creek.jpg'
  ];

  const attractions = [
    {
      title: "Rejs Abrą",
      description: "Tradycyjne drewniane łodzie przewożące pasażerów przez Creek, oferujące malownicze widoki i autentyczne doświadczenie.",
      link: "/transport#water"
    },
    {
      title: "Gold Souk",
      description: "Słynny tradycyjny targ z setkami sprzedawców oferujących złotą biżuterię, kamienie szlachetne i unikalne wzory.",
      link: "/atrakcje/gold-souk"
    },
    {
      title: "Spice Souk",
      description: "Historyczny targ wypełniony aromatycznymi przyprawami, tradycyjnymi ziołami i lokalnymi przysmakami z całego świata.",
      link: "/atrakcje/spice-souk"
    },
    {
      title: "Dubai Creek Harbor",
      description: "Nowoczesna nadmorska dzielnica z restauracjami, sklepami i zapierającymi dech w piersiach widokami na creek i panoramę miasta."
    }
  ];

  const experiences = [
    {
      title: "Rejs z kolacją",
      description: "Delektuj się tradycyjną arabską kuchnią podczas rejsu tradycyjną drewnianą łodzią dhow."
    },
    {
      title: "Heritage Village",
      description: "Doświadcz tradycyjnego emirackiego stylu życia i kultury poprzez pokazy i wystawy."
    },
    {
      title: "Zakupy na targach",
      description: "Odkryj tradycyjne souki sprzedające złoto, przyprawy, tekstylia i autentyczne arabskie towary w dzielnicy <a href='/dzielnice#deira' className='text-blue-600 hover:text-blue-800'>Deira</a>."
    },
    {
      title: "Wycieczki fotograficzne",
      description: "Uchwyć kontrast między starym a nowym Dubajem wzdłuż historycznego szlaku wodnego."
    }
  ];

  const activities = [
    "Przepłyń abrą przez Creek",
    "Odwiedź <a href='/atrakcje/gold-souk' className='text-blue-600 hover:text-blue-800'>Gold Souk</a> i <a href='/atrakcje/spice-souk' className='text-blue-600 hover:text-blue-800'>Spice Souk</a>",
    "Wybierz się na rejs z kolacją",
    "Zwiedzaj Heritage Village",
    "Zobacz tradycyjne działania handlowe",
    "Odwiedź Dubai Creek Harbor",
    "Zrób zdjęcia tradycyjnym dhow",
    "Kup tradycyjne pamiątki",
    "Spróbuj lokalnego street foodu",
    "Odwiedź pobliskie <a href='/atrakcje/dubai-museum' className='text-blue-600 hover:text-blue-800'>Dubai Museum</a>"
  ];

  const gyg_link = "https://www.getyourguide.com/dubai-l173/old-dubai-guided-tour-with-boat-ride-souks-street-food-t664558/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd-attractionpage";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/dubai-creek.jpg"
          alt="Dubai Creek"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Dubai Creek
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Historyczne Serce Morskiego Dziedzictwa Dubaju
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
                <span>Zarezerwuj Rejs z Kolacją</span>
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
            <p className="text-gray-600">24 godziny</p>
            <p className="text-gray-500 text-sm">Souki: 10:00 - 22:00</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Lokalizacja</h3>
            <p className="text-gray-600">Dubai Creek</p>
            <p className="text-gray-500 text-sm">Deira - Bur Dubai</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaTicketAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Ceny</h3>
            <p className="text-gray-600">1 AED za przeprawę</p>
            <p className="text-gray-500 text-sm">Rejsy od 60 AED</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaStar className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.6/5</p>
            <p className="text-gray-500 text-sm">od odwiedzających</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">O Dubai Creek</h2>
          <p className="text-gray-600 mb-6">
            Dubai Creek to historyczne serce Dubaju, naturalna zatoka słonowodna, która odegrała kluczową rolę w rozwoju miasta. 
            Ten szlak wodny dzieli miasto na dwie główne części: Deira i Bur Dubai. Creek był przez wieki ważnym szlakiem 
            handlowym i nadal pozostaje tętniącym życiem centrum tradycyjnego handlu i działań kulturalnych.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <FaMapMarkerAlt className="text-blue-500" />
            <span className="text-gray-600">
              Dubai Creek - Między Deira a Bur Dubai, Dubaj, ZEA
            </span>
          </div>
        </div>

        {/* Attractions */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Główne Atrakcje</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {attractions.map((attraction, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold mb-2">
                  {attraction.link ? (
                    <a href={attraction.link} className="text-blue-600 hover:text-blue-800">
                      {attraction.title}
                    </a>
                  ) : (
                    attraction.title
                  )}
                </h3>
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
                  alt={`Dubai Creek - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Co można robić</h2>
          <ul className="list-disc pl-6 space-y-2">
            {activities.map((activity, index) => (
              <li key={index} className="text-gray-600" dangerouslySetInnerHTML={{ __html: activity }} />
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
        <div className="text-center mb-12">
          <a
            href={gyg_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-600 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Zarezerwuj wycieczkę po starym Dubaju
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
            data-gyg-tour-ids="664558,506774,820638,505703,49021,49019,411488,587080"
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

export default DubaiCreekPage;
