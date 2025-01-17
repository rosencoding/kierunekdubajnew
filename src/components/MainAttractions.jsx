import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaPlus, FaCheck, FaDollarSign, FaMapMarkerAlt, FaInfoCircle, FaArrowRight, 
  FaCalendarAlt, FaShieldAlt, FaLanguage, FaPassport, FaTshirt, FaGlassMartini, FaCreditCard } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { ItineraryContext } from '../contexts/ItineraryContext';
import attractions from '../data/attractions';

const polishDescriptions = {
  'burj-khalifa': 'Najwyższy budynek świata o wysokości 828 metrów, oferujący zapierające dech w piersiach widoki na Dubaj.',
  'dubai-mall': 'Największe centrum handlowe na świecie z ponad 1200 sklepami, akwarium i lodowiskiem.',
  'palm-jumeirah': 'Kultowa sztuczna wyspa w kształcie palmy z luksusowymi hotelami i restauracjami.',
  'dubai-frame': 'Imponująca konstrukcja architektoniczna oferująca panoramiczny widok na stary i nowy Dubaj.',
  'dubai-fountain': 'Największa na świecie choreograficzna fontanna, tańcząca w rytm muzyki.',
  'burj-al-arab': 'Luksusowy hotel w kształcie żagla, symbol nowoczesnego Dubaju.',
};

const MainAttractions = () => {
  const { itineraryItems, addToItinerary, removeFromItinerary } = useContext(ItineraryContext);
  const navigate = useNavigate();

  const [showFab, setShowFab] = useState(false);

  const isInItinerary = (attractionId) => {
    return itineraryItems.some(item => item.id === attractionId);
  };

  const handleAttractionClick = (attraction) => {
    if (isInItinerary(attraction.id)) {
      removeFromItinerary(attraction.id);
      if (itineraryItems.length <= 1) {
        setShowFab(false);
      }
    } else {
      addToItinerary(attraction);
      setShowFab(true);
    }
  };

  // Get only the first 6 attractions for the main page
  const featuredAttractions = attractions.slice(0, 6);

  return (
    <section id="atrakcje" className="relative z-0 py-8 bg-white">
      {/* Main Content */}
      <div className="container mx-auto px-4 pt-4">
        {/* Attractions Section */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popularne Atrakcje</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Wybierz interesujące Cię miejsca i dodaj je do swojego planu podróży. Pomożemy Ci zorganizować 
              niezapomnianą wycieczkę do Dubaju.
            </p>
            <Link 
              to="/atrakcje"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-600 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Zobacz wszystkie atrakcje
              <FaArrowRight className="ml-2 text-xl" />
            </Link>
          </div>

          {/* Attractions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAttractions.map((attraction) => (
              <motion.div
                key={attraction.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden relative"
              >
                <Link to={`/atrakcje/${attraction.id}`} className="block">
                  <div className="relative h-64">
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  </div>
                </Link>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Link 
                      to={`/atrakcje/${attraction.id}`}
                      className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      {attraction.name}
                    </Link>
                  </div>

                  <p className="text-gray-600 mb-6">
                    {polishDescriptions[attraction.id] || attraction.description}
                  </p>

                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center bg-blue-50 px-4 py-2 rounded-lg border border-blue-100 shadow-sm">
                        <FaClock className="text-blue-500 mr-2" />
                        <span className="text-blue-700 font-medium">{attraction.duration} min</span>
                      </div>
                      <div className="flex items-center bg-green-50 px-4 py-2 rounded-lg border border-green-100 shadow-sm">
                        <FaDollarSign className="text-green-500 mr-1" />
                        <span className="text-green-700 font-medium">
                          {attraction.price === 0 ? 'Za darmo' : `${attraction.price} AED`}
                        </span>
                      </div>
                    </div>
                    
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleAttractionClick(attraction);
                      }}
                      className={`w-full px-4 py-3 rounded-lg font-medium text-base transition-all duration-200 shadow-sm
                        ${isInItinerary(attraction.id)
                          ? 'bg-gradient-to-r from-yellow-500 to-yellow-400 text-white hover:from-yellow-600 hover:to-yellow-500 transform hover:-translate-y-0.5'
                          : 'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 transform hover:-translate-y-0.5'
                        }
                      `}
                    >
                      {isInItinerary(attraction.id) ? (
                        <>
                          <FaCheck className="inline mr-2 text-lg" />
                          W planie
                        </>
                      ) : (
                        <>
                          <FaPlus className="inline mr-2 text-lg" />
                          Dodaj do planu
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Często Zadawane Pytania</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Znajdź odpowiedzi na najczęściej zadawane pytania o podróż do Dubaju
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <FaCalendarAlt className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Kiedy najlepiej odwiedzić Emiraty?</h3>
              </div>
              <p className="text-gray-600">
                • Najlepszy okres: listopad - marzec<br />
                • Przyjemna temperatura: 20-30°C<br />
                • Mniej turystów: czerwiec - wrzesień<br />
                • Unikaj: lipca i sierpnia (upały)
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <FaShieldAlt className="text-2xl text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Czy w Dubaju jest bezpiecznie?</h3>
              </div>
              <p className="text-gray-600">
                • Jedno z najbezpieczniejszych miast<br />
                • Niski poziom przestępczości<br />
                • Monitoring w miejscach publicznych<br />
                • Przyjazne dla turystów
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <FaLanguage className="text-2xl text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Jaki jest język urzędowy?</h3>
              </div>
              <p className="text-gray-600">
                • Arabski - język urzędowy<br />
                • Angielski - powszechnie używany<br />
                • Oznaczenia w dwóch językach<br />
                • Łatwa komunikacja dla turystów
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <FaPassport className="text-2xl text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Czy potrzebuję wizy do Dubaju?</h3>
              </div>
              <p className="text-gray-600">
                • Polacy - wiza przy wjeździe<br />
                • 90 dni pobytu<br />
                • Bezpłatna<br />
                • Paszport ważny 6 miesięcy
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                  <FaTshirt className="text-2xl text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Jak się ubrać w Dubaju?</h3>
              </div>
              <p className="text-gray-600">
                • Strój dostosowany do miejsca<br />
                • Zakryte ramiona w meczetach<br />
                • Swobodnie w hotelach<br />
                • Szacunek dla kultury lokalnej
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <FaGlassMartini className="text-2xl text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Alkohol w Dubaju?</h3>
              </div>
              <p className="text-gray-600">
                • Dostępny w hotelach<br />
                • Potrzebna licencja<br />
                • Zakaz w miejscach publicznych<br />
                • Wysokie ceny
              </p>
            </motion.div>
          </div>
        </div>

        {/* Revolut CTA Section */}
        <div className="mb-16">
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl overflow-hidden shadow-xl"
            whileHover={{ y: -5 }}
          >
            <div className="p-6 md:p-8 flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <img 
                  src="/images/revolut-dubaj.jpg" 
                  alt="Revolut w Dubaju" 
                  className="w-full max-w-[200px] mx-auto rounded-xl shadow-lg"
                />
              </div>
              <div className="w-full md:w-2/3 md:pl-8 text-white">
                <div className="flex items-center mb-4">
                  <FaCreditCard className="text-2xl mr-3" />
                  <h2 className="text-2xl font-bold">Revolut - Twój sprytny portfel w podróży!</h2>
                </div>
                <p className="text-lg mb-6 text-white/90">
                  Płać kartą w Dubaju i Abu Dhabi po rzeczywistym kursie walut, bez żadnych dodatkowych opłat. 
                  Zero kantorów, zero stresu - tylko oszczędności na każdej transakcji.
                </p>
                <motion.a
                  href="https://revolut.com/referral/?referral-code=krzysz6wur!JAN1-25-AR-H1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-medium text-base shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Załóż darmowe konto Revolut
                </motion.a>
                <p className="mt-3 text-sm text-white/80">
                  Dołącz do ponad 50 milionów użytkowników, którzy tak jak ja pokochali Revolut
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* GetYourGuide Widget Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Polecane atrakcje w Dubaju</h2>
          </div>
          <div data-gyg-href="https://widget.getyourguide.com/default/activities.frame" data-gyg-locale-code="pl-PL" data-gyg-widget="activities" data-gyg-number-of-items="8" data-gyg-partner-id="19WQ75B" data-gyg-tour-ids="411488,412274,519121,482006,140175,301193,505703,90195"><span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/dubai-l173/">GetYourGuide</a></span></div>
        </div>

        {/* Floating Action Button */}
        {showFab && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-8 right-8"
          >
            <Link
              to="/plan-podrozy"
              className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
            >
              <span className="mr-2">Stwórz plan podróży</span>
              <FaArrowRight />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default MainAttractions;
