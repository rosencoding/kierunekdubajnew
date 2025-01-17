import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import usePageTitle from '../hooks/usePageTitle';
import { FaLandmark, FaUmbrellaBeach, FaShoppingBag, FaUtensils, FaHotel, FaPlane, FaClock, FaSun, FaMapMarkedAlt, FaMoneyBillWave, FaCalendarAlt, FaInfoCircle } from 'react-icons/fa';

const PoznajDubajPage = () => {
  usePageTitle('Poznaj Dubaj - KierunekDubaj.pl');

  const seoData = {
    title: "Poznaj Dubaj | Najciekawsze atrakcje i miejsca w Dubaju 2024",
    description: "Odkryj najciekawsze miejsca i atrakcje w Dubaju. Burj Khalifa, Dubai Mall, Palm Jumeirah, plaże, parki rozrywki i wiele więcej. Przewodnik po wszystkich atrakcjach Dubaju.",
    keywords: [
      "atrakcje Dubaj",
      "co zobaczyć w Dubaju",
      "Burj Khalifa",
      "Dubai Mall",
      "Palm Jumeirah",
      "plaże w Dubaju",
      "zwiedzanie Dubaju",
      "miejsca w Dubaju",
      "parki rozrywki Dubaj",
      "wycieczki Dubaj"
    ]
  };

  const categories = [
    {
      title: "Główne atrakcje",
      icon: <FaLandmark />,
      description: "Najbardziej znane miejsca w Dubaju",
      items: [
        { name: "Burj Khalifa", link: "/atrakcje/burj-khalifa", description: "Najwyższy budynek świata - 828 metrów wysokości" },
        { name: "Dubai Mall", link: "/atrakcje/dubai-mall", description: "Największe centrum handlowe z akwarium i lodowiskiem" },
        { name: "Palm Jumeirah", link: "/atrakcje/palm-jumeirah", description: "Kultowa sztuczna wyspa w kształcie palmy" },
        { name: "Dubai Frame", link: "/atrakcje/dubai-frame", description: "150-metrowa złota rama z widokiem na stare i nowe miasto" }
      ]
    },
    {
      title: "Plaże i parki",
      icon: <FaUmbrellaBeach />,
      description: "Najpiękniejsze plaże i tereny rekreacyjne",
      items: [
        { name: "JBR Beach", link: "/atrakcje/jbr-beach", description: "2 km plaży z restauracjami i rozrywką" },
        { name: "Kite Beach", link: "/atrakcje/kite-beach", description: "Centrum sportów wodnych i aktywnego wypoczynku" },
        { name: "Zabeel Park", link: "/atrakcje/zabeel-park", description: "47 hektarów zieleni w sercu metropolii" },
        { name: "Dubai Miracle Garden", link: "/atrakcje/miracle-garden", description: "72,000 m² ogrodu z 50 milionami kwiatów" }
      ]
    },
    {
      title: "Zakupy",
      icon: <FaShoppingBag />,
      description: "Centra handlowe i tradycyjne targi",
      items: [
        { name: "Mall of Emirates", link: "/atrakcje/mall-of-emirates", description: "Centrum handlowe ze stokiem narciarskim Ski Dubai" },
        { name: "Gold Souk", link: "/atrakcje/gold-souk", description: "Tradycyjny targ z ponad 300 sklepami jubilerskimi" },
        { name: "Global Village", link: "/atrakcje/global-village", description: "Park kulturalny z pawilonami z 90 krajów" },
        { name: "City Walk", link: "/atrakcje/city-walk", description: "Luksusowa dzielnica handlowa pod gołym niebem" }
      ]
    }
  ];

  const quickTips = [
    {
      icon: <FaClock />,
      title: "Najlepszy czas na zwiedzanie",
      description: "Od listopada do marca, gdy temperatury są przyjemne"
    },
    {
      icon: <FaSun />,
      title: "Pogoda",
      description: "Średnia temperatura w lecie 40°C, w zimie 25°C"
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Waluta",
      description: "Dirham (AED), 1 AED ≈ 1.1 PLN"
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Transport",
      description: "Metro, autobusy, taksówki i Uber"
    }
  ];

  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        image="/images/dubai-skyline.jpg"
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section 
          className="relative bg-cover bg-center h-[80vh]" 
          style={{ backgroundImage: 'url("/images/background-hero.jpg")' }}
          aria-label="Panorama Dubaju"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold text-white mb-6"
              >
                Poznaj Dubaj
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-100 max-w-3xl"
              >
                Odkryj miasto przyszłości, gdzie tradycja spotyka się z innowacją
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Link
                  to="/atrakcje"
                  className="bg-gold-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold-600 transition-colors"
                >
                  Zobacz wszystkie atrakcje
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Navigation */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Przewodnik po Dubaju
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link 
                to="/praktyczne-porady" 
                className="group flex items-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <span className="text-2xl text-gold-500 mr-4 group-hover:scale-110 transition-transform">
                  <FaInfoCircle />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Praktyczne porady</h3>
                  <p className="text-sm text-gray-600">Wskazówki dla podróżnych</p>
                </div>
              </Link>

              <Link 
                to="/transport" 
                className="group flex items-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <span className="text-2xl text-gold-500 mr-4 group-hover:scale-110 transition-transform">
                  <FaMapMarkedAlt />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Transport</h3>
                  <p className="text-sm text-gray-600">Jak poruszać się po mieście</p>
                </div>
              </Link>

              <Link 
                to="/kultura-i-zwyczaje" 
                className="group flex items-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <span className="text-2xl text-gold-500 mr-4 group-hover:scale-110 transition-transform">
                  <FaLandmark />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Kultura i zwyczaje</h3>
                  <p className="text-sm text-gray-600">Poznaj lokalne tradycje</p>
                </div>
              </Link>

              <Link 
                to="/kiedy-jechac" 
                className="group flex items-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <span className="text-2xl text-gold-500 mr-4 group-hover:scale-110 transition-transform">
                  <FaCalendarAlt />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Kiedy jechać</h3>
                  <p className="text-sm text-gray-600">Najlepszy czas na wizytę</p>
                </div>
              </Link>

              <Link 
                to="/dzielnice" 
                className="group flex items-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <span className="text-2xl text-gold-500 mr-4 group-hover:scale-110 transition-transform">
                  <FaMapMarkedAlt />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Dzielnice</h3>
                  <p className="text-sm text-gray-600">Przewodnik po dzielnicach</p>
                </div>
              </Link>

              <Link 
                to="/podstawowe-informacje" 
                className="group flex items-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <span className="text-2xl text-gold-500 mr-4 group-hover:scale-110 transition-transform">
                  <FaInfoCircle />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Podstawowe informacje</h3>
                  <p className="text-sm text-gray-600">Co warto wiedzieć</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Safety Info */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Bezpieczeństwo w Dubaju
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <FaInfoCircle className="text-3xl text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Ogólne zasady</h3>
                <p className="text-gray-600">
                  Dubaj jest jednym z najbezpieczniejszych miast na świecie. Przestrzegaj lokalnych zwyczajów i szanuj kulturę emiracką.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <FaSun className="text-3xl text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Ochrona przed słońcem</h3>
                <p className="text-gray-600">
                  Używaj kremów z wysokim filtrem UV, noś nakrycie głowy i pij dużo wody, szczególnie w miesiącach letnich.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <FaMapMarkedAlt className="text-3xl text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Transport</h3>
                <p className="text-gray-600">
                  Korzystaj z licencjonowanych taksówek i transportu publicznego. Metro w Dubaju jest bezpieczne i nowoczesne.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Revolut CTA */}
        <section className="bg-gradient-to-r from-[#0666eb] to-[#02a7f0] py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Wygodne płatności w Emiratach!
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Płać kartą w Dubaju i Abu Dhabi po rzeczywistym kursie walut, bez żadnych dodatkowych opłat. Zero kantorów, zero stresu - tylko oszczędności na każdej transakcji.
              </p>
              <a
                href="https://revolut.com/referral/?referral-code=krzysz6wur!JAN1-25-AR-H1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#0666eb] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#0555c7] transition-colors"
              >
                Załóż konto Revolut
              </a>
            </motion.div>
          </div>
        </section>

        {/* Intro Text */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Witaj w mieście przyszłości
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Dubaj to miasto, które nieustannie przesuwa granice możliwości. Tu znajdziesz najwyższy budynek świata, 
                największe centrum handlowe, najbardziej luksusowy hotel i najbardziej spektakularne sztuczne wyspy. 
                To miejsce, gdzie pustynia spotyka się z ultranowoczesną architekturą, a tradycyjne arabskie bazary 
                sąsiadują z futurystycznymi centrami handlowymi.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <span className="text-4xl font-bold text-gold-500">300+</span>
                  <p className="text-gray-600">Słonecznych dni w roku</p>
                </div>
                <div>
                  <span className="text-4xl font-bold text-gold-500">200+</span>
                  <p className="text-gray-600">Narodowości</p>
                </div>
                <div>
                  <span className="text-4xl font-bold text-gold-500">828m</span>
                  <p className="text-gray-600">Wysokość Burj Khalifa</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Odkryj atrakcje Dubaju
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="text-3xl text-gold-500 mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <ul className="space-y-4">
                  {category.items.map((item) => (
                    <li key={item.name}>
                      <Link to={item.link} className="block hover:bg-gray-50 p-3 rounded-lg transition-colors">
                        <h4 className="font-semibold text-gray-900 mb-1">{item.name}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* GetYourGuide Widget */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Popularne wycieczki w Dubaju
            </h2>
            <div data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
                 data-gyg-locale-code="pl-PL" 
                 data-gyg-widget="activities" 
                 data-gyg-number-of-items="8" 
                 data-gyg-partner-id="19WQ75B" 
                 data-gyg-tour-ids="411488,412274,519121,482006,140175,301193,505703,90195">
              <span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/dubai-l173/">GetYourGuide</a></span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PoznajDubajPage;
