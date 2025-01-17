import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaShoppingBag, FaUtensils, FaTheaterMasks } from 'react-icons/fa';

const MallOfEmiratesPage = () => {
  const funFacts = [
    "Jedno z największych centrów handlowych na świecie z ponad 630 sklepami",
    "Posiada pierwszy na Bliskim Wschodzie kryty stok narciarski - Ski Dubai",
    "Oferuje kompleks kinowy VOX Cinema z 14 salami",
    "Mieści ponad 100 restauracji i kawiarni",
    "Zajmuje powierzchnię ponad 223 000 metrów kwadratowych",
    "Odwiedza go ponad 40 milionów gości rocznie"
  ];

  const galleryImages = [
    '/images/mall-emirates-1.jpg',
    '/images/mall-emirates-2.jpg',
    '/images/mall-emirates-3.jpg',
    '/images/mall-emirates.jpg'
  ];

  const attractions = [
    {
      title: "Luksusowe Zakupy",
      description: "Ponad 630 międzynarodowych marek, w tym butiki luksusowych marek, domy towarowe i lokalni projektanci."
    },
    {
      title: "Ski Dubai",
      description: <span>Kryty ośrodek narciarski z 22 500 metrami kwadratowymi prawdziwego śniegu, ze stokami dla wszystkich poziomów zaawansowania. <a href="/atrakcje/ski-dubai" className="text-blue-500 hover:text-blue-600 font-medium">Dowiedz się więcej o Ski Dubai →</a></span>
    },
    {
      title: "VOX Cinemas",
      description: "Nowoczesny kompleks kinowy z 14 salami, w tym IMAX, 4DX i luksusowymi salami kinowymi."
    },
    {
      title: "Magic Planet",
      description: "Centrum rozrywki rodzinnej z grami arcade, atrakcjami i rozrywką dla wszystkich grup wiekowych."
    }
  ];

  const experiences = [
    {
      title: "Doświadczenie Zakupowe",
      description: "Odkryj setki międzynarodowych i lokalnych marek z kategorii mody, elektroniki, wystroju wnętrz i nie tylko."
    },
    {
      title: "Podróż Kulinarna",
      description: "Ponad 100 opcji gastronomicznych, od ekskluzywnych restauracji po kawiarnie i food court."
    },
    {
      title: "Rozrywka",
      description: "Liczne miejsca rozrywkowe, w tym Ski Dubai, VOX Cinemas i Magic Planet."
    },
    {
      title: "Usługi Premium",
      description: "VIP parking z obsługą, zakupy bez noszenia toreb, osobisty stylista i usługi concierge."
    }
  ];

  const activities = [
    "Zakupy w luksusowych butikach",
    "Jazda na nartach w Ski Dubai",
    "Oglądanie najnowszych filmów",
    "Kolacje w restauracjach",
    "Wizyta w Magic Planet",
    "Korzystanie z usług concierge",
    "Udział w wydarzeniach na żywo",
    "Warsztaty modowe",
    "Zabiegi spa",
    "Gry arcade"
  ];

  const gyg_link = "https://www.getyourguide.com/dubai-l173/dubai-mall-of-the-emirates-ski-dubai-snow-classic-pass-t68157/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/mall-emirates.jpg"
          alt="Mall of the Emirates"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Mall of the Emirates
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Najlepsze Centrum Handlowo-Rozrywkowe w Dubaju
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
                <span>Bilety do Ski Dubai</span>
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
            <p className="text-gray-600">10:00 - 24:00</p>
            <p className="text-gray-500 text-sm">Codziennie</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Sheikh Zayed Road</p>
            <p className="text-gray-500 text-sm">Al Barsha, Dubaj</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <FaTicketAlt className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Rozrywka</h3>
            <p className="text-gray-600">Wiele atrakcji</p>
            <p className="text-gray-500 text-sm">Różne ceny</p>
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
          <h2 className="text-2xl font-bold mb-4">O Mall of the Emirates</h2>
          <p className="text-gray-600 mb-6">
            Mall of the Emirates to jedna z najbardziej kultowych destynacji zakupowych w Dubaju, łącząca luksusowy handel ze światowej klasy rozrywką. Z ponad 630 międzynarodowymi markami, centrum handlowe jest domem dla legendarnego <a href="/atrakcje/ski-dubai" className="text-blue-500 hover:text-blue-600 font-medium">Ski Dubai</a>, 14-salowego kompleksu VOX Cinemas i ponad 100 restauracji i kawiarni. Ta destynacja handlowo-rozrywkowa przyciąga ponad 40 milionów odwiedzających rocznie.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <FaMapMarkerAlt className="text-blue-500" />
            <span className="text-gray-600">
              Sheikh Zayed Road, Al Barsha, Dubaj, Zjednoczone Emiraty Arabskie
            </span>
          </div>
        </div>

        {/* History */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Historia</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-500 font-semibold">2005</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Otwarcie Centrum</h3>
                <p className="text-gray-600">Uroczyste otwarcie Mall of the Emirates, które od razu stało się jednym z największych centrów handlowych na świecie. Wprowadzenie rewolucyjnego konceptu <a href="/atrakcje/ski-dubai" className="text-blue-500 hover:text-blue-600 font-medium">Ski Dubai</a>.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-500 font-semibold">2010</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Pierwsza Rozbudowa</h3>
                <p className="text-gray-600">Znacząca ekspansja centrum handlowego, dodanie nowych marek luksusowych i rozszerzenie strefy gastronomicznej.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-500 font-semibold">2015</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Projekt Evolution 2015</h3>
                <p className="text-gray-600">Kompleksowa modernizacja o wartości 1 miliarda dirhamów, dodanie nowej strefy modowej i rozrywkowej oraz modernizacja istniejących przestrzeni.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-500 font-semibold">2020</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Cyfrowa Transformacja</h3>
                <p className="text-gray-600">Wprowadzenie zaawansowanych rozwiązań cyfrowych, w tym aplikacji mobilnej, systemu nawigacji i usług zakupów online z dostawą do domu.</p>
              </div>
            </div>
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
          <h2 className="text-2xl font-bold mb-6">Doświadczenia w Centrum</h2>
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
                  alt={`Mall of the Emirates - ${index + 1}`}
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
            Zarezerwuj bilety do Ski Dubai
            <FaTicketAlt className="ml-2" />
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
            data-gyg-tour-ids="68157,68158,68159,68160,411488,587080,714548,129267"
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

export default MallOfEmiratesPage;
