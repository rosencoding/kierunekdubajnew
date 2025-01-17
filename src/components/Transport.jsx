import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaSubway, FaTaxi, FaBus, FaCar, FaPlane, FaCreditCard, FaMapMarkedAlt, FaInstagram, FaFacebook, FaUsers, FaWater, FaShieldAlt, FaArrowRight, FaInfoCircle, FaExclamationTriangle, FaGraduationCap, FaWheelchair, FaClock, FaStore, FaHistory, FaExternalLinkAlt, FaStar } from 'react-icons/fa';

const Transport = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Transport w Dubaju 2025 - Metro, Autobusy, Taksówki | KierunekDubaj.pl</title>
        <meta name="description" content="Kompleksowy przewodnik po transporcie w Dubaju. Metro, autobusy, taksówki, transport wodny. Aktualne ceny, rozkłady jazdy i wskazówki dla turystów." />
        <meta name="keywords" content="transport dubaj, metro dubaj, autobusy dubaj, taksówki dubaj, karta nol, dubai transport, dubai metro" />
        <link rel="canonical" href="https://kierunekdubaj.pl/poznaj-dubaj/transport" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0">
          <img
            src="/images/dubai-metro.jpg"
            alt="Metro w Dubaju - nowoczesny system transportu"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transport w Dubaju
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Wszystko co musisz wiedzieć o poruszaniu się po Dubaju w 2025 roku
            </p>
          </motion.div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-xl shadow-sm mb-8"
          aria-label="Spis treści"
        >
          <h2 className="text-2xl font-bold mb-4">W tym artykule:</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <li>
              <a href="#metro" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                <FaSubway className="mr-2" />
                <span>Metro w Dubaju</span>
                <FaArrowRight className="ml-2 text-sm" />
              </a>
            </li>
            <li>
              <a href="#taxi" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                <FaTaxi className="mr-2" />
                <span>Taksówki i Uber</span>
                <FaArrowRight className="ml-2 text-sm" />
              </a>
            </li>
            <li>
              <a href="#bus" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                <FaBus className="mr-2" />
                <span>Autobusy i Tramwaje</span>
                <FaArrowRight className="ml-2 text-sm" />
              </a>
            </li>
            <li>
              <a href="#water" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                <FaWater className="mr-2" />
                <span>Transport Wodny</span>
                <FaArrowRight className="ml-2 text-sm" />
              </a>
            </li>
            <li>
              <a href="#nol" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                <FaCreditCard className="mr-2" />
                <span>Karta Nol</span>
                <FaArrowRight className="ml-2 text-sm" />
              </a>
            </li>
            <li>
              <a href="#safety" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                <FaShieldAlt className="mr-2" />
                <span>Bezpieczeństwo</span>
                <FaArrowRight className="ml-2 text-sm" />
              </a>
            </li>
          </ul>
        </motion.nav>

        {/* Quick Stats with better visual hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-500 hover:shadow-md transition-shadow"
          >
            <FaCreditCard className="w-8 h-8 text-amber-500 mb-4" />
            <div className="text-2xl font-bold mb-2">Karta Nol</div>
            <div className="text-gray-600">Twój klucz do transportu publicznego w Dubaju</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500 hover:shadow-md transition-shadow"
          >
            <FaSubway className="w-8 h-8 text-blue-500 mb-4" />
            <div className="text-2xl font-bold mb-2">Metro 24/7</div>
            <div className="text-gray-600">Nowoczesne, klimatyzowane, bezpieczne</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500 hover:shadow-md transition-shadow"
          >
            <FaBus className="w-8 h-8 text-green-500 mb-4" />
            <div className="text-2xl font-bold mb-2">1500+ autobusów</div>
            <div className="text-gray-600">Kompleksowa sieć połączeń</div>
          </motion.div>
        </div>

        {/* NOL Card Section */}
        <motion.section
          id="nol"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl shadow-sm overflow-hidden mb-12"
        >
          <div className="p-8">
            <div className="flex items-center mb-6">
              <FaCreditCard className="w-8 h-8 text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold">Karta NOL</h2>
            </div>
            
            <p className="text-gray-600 mb-8">
              Karta NOL to elektroniczna karta płatnicza używana w transporcie publicznym w Dubaju. 
              Można nią płacić za przejazdy metrem, autobusami, tramwajami i wodnymi taksówkami (abra).
            </p>

            {/* Key Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FaInfoCircle className="text-blue-500" />
                  Podstawowe informacje
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Kaucja: 25 AED</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Minimalne doładowanie: 15 AED</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Dostępna w kasach metra i na głównych stacjach autobusowych</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FaExclamationTriangle className="text-amber-500" />
                  Ważne zasady
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    <span>Minimalne saldo do przejścia przez bramkę: 7,5 AED</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    <span>Maksymalny czas podróży: 180 minut</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    <span>Maksymalna liczba przesiadek: 3</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card Types */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6">Rodzaje kart NOL</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="relative bg-white rounded-xl shadow p-6 border-2 border-blue-500">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
                      Polecana
                    </span>
                  </div>
                  <div className="flex items-center mb-4">
                    <FaCreditCard className="text-2xl text-gray-400 mr-3" />
                    <h4 className="font-semibold">Srebrna (Standardowa)</h4>
                  </div>
                  <p className="text-gray-600 text-sm">Najbardziej popularna karta dla turystów i mieszkańców</p>
                </div>

                <div className="bg-white rounded-xl shadow p-6 border-2 border-gray-100">
                  <div className="flex items-center mb-4">
                    <FaCreditCard className="text-2xl text-yellow-500 mr-3" />
                    <h4 className="font-semibold">Złota (Premium)</h4>
                  </div>
                  <p className="text-gray-600 text-sm">Karta premium z dostępem do złotej klasy w metrze</p>
                </div>

                <div className="bg-white rounded-xl shadow p-6 border-2 border-gray-100">
                  <div className="flex items-center mb-4">
                    <FaGraduationCap className="text-2xl text-blue-500 mr-3" />
                    <h4 className="font-semibold">Niebieska (Studencka)</h4>
                  </div>
                  <p className="text-gray-600 text-sm">Specjalna karta ze zniżkami dla studentów</p>
                </div>

                <div className="bg-white rounded-xl shadow p-6 border-2 border-gray-100">
                  <div className="flex items-center mb-4">
                    <FaWheelchair className="text-2xl text-red-500 mr-3" />
                    <h4 className="font-semibold">Czerwona (Specjalna)</h4>
                  </div>
                  <p className="text-gray-600 text-sm">Dla seniorów i osób niepełnosprawnych</p>
                </div>
              </div>
            </div>

            {/* How to Use */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FaClock className="text-blue-500" />
                Jak używać karty NOL
              </h3>
              <p className="text-gray-700 mb-4">
                Używając karty NOL nie musicie się przejmować liczbą stref którą pokonujecie. 
                Wszystko dlatego, że kartę należy odbić przy wsiadaniu do metra / autobusu czy łodzi, 
                a później wysiadając na stacji. System sam rozpozna ilość pokonywanych stref i pobierze 
                odpowiednią opłatę. Czytnik kart wydaje charakterystyczny dźwięk jeśli karta została 
                zeskanowana prawidłowo.
              </p>
              <p className="text-gray-700">
                We wszystkich strefach maksymalny czas jednej podróży to 180 minut. W ramach przejazdu 
                dozwolone są maksymalnie 3 przesiadki. Dłuższa podróż bądź większa liczba przesiadek 
                spowoduje pobranie z karty kolejnego przejazdu lub konieczność zakupu kolejnego biletu.
              </p>
            </div>

            {/* Where to Buy */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FaStore className="text-green-500" />
                Gdzie kupić i doładować
              </h3>
              <p className="text-gray-700 mb-4">
                Zakup i doładowanie karty NOL jest możliwe na każdej stacji metra - zarówno w automatach 
                biletowych (gdzie akceptowana jest tylko płatność bezgotówkowa), jak i w tradycyjnych 
                okienkach kasowych (gdzie można płacić kartą lub dirhamami).
              </p>
            </div>

            {/* Check Balance */}
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FaHistory className="text-purple-500" />
                Sprawdzanie salda
              </h3>
              <p className="text-gray-700 mb-4">
                Aktualne saldo karty NOL można w łatwy sposób sprawdzić na 
                <a 
                  href="https://nolcardcheck.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 mx-1"
                >
                  oficjalnej stronie RTA
                  <FaExternalLinkAlt className="text-sm" />
                </a>
                , gdzie dostępna jest również pełna historia opłat za przejazdy.
              </p>
              <p className="text-gray-700">
                Dodatkowo saldo wyświetla się automatycznie na ekranie czytnika przy każdym odbijaniu 
                karty podczas podróży.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Metro Section */}
        <motion.section
          id="metro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl shadow-sm overflow-hidden mb-12"
        >
          <div className="p-8">
            {/* Header */}
            <div className="flex items-center mb-8">
              <FaSubway className="w-8 h-8 text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold">Metro w Dubaju</h2>
            </div>

            {/* Introduction and Map */}
            <div className="mb-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                <p className="text-gray-700 mb-6">
                  Dubajskie metro to w pełni zautomatyzowany system transportu, obsługujący dwie główne linie: 
                  Czerwoną i Zieloną. System jest nowoczesny, klimatyzowany i stanowi jeden z najwygodniejszych 
                  sposobów poruszania się po mieście.
                </p>
                <div className="flex items-center gap-3">
                  <FaMapMarkedAlt className="text-xl text-blue-600" />
                  <div>
                    <span className="text-gray-700">Szczegółową mapę sieci metra znajdziesz na stronie RTA: </span>
                    <a 
                      href="https://www.rta.ae/links/rail/rail-network-map.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors font-medium"
                    >
                      Pobierz mapę metra (PDF)
                      <FaExternalLinkAlt className="text-sm" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Lines Info */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-6">Linie metra:</h3>
                
                {/* Red Line */}
                <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-red-600 rounded-full mr-3"></div>
                    <h4 className="text-lg font-semibold text-red-600">Linia Czerwona</h4>
                  </div>
                  <div className="space-y-3 text-gray-600">
                    <p className="flex items-center gap-2">
                      <span className="font-medium">Liczba stacji:</span>
                      <span>29</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-medium">Trasa:</span>
                      <span>Od lotniska (Terminal 3) do UAE Exchange</span>
                    </p>
                    <div className="bg-white/50 rounded-lg p-4 mt-4">
                      <p className="font-medium mb-2">Godziny kursowania:</p>
                      <ul className="space-y-1.5 text-sm">
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                          <span>Poniedziałek - Środa: 5:00-24:00</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                          <span>Czwartek: 5:00-1:00</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                          <span>Piątek: 10:00-1:00</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Green Line */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                    <h4 className="text-lg font-semibold text-green-600">Linia Zielona</h4>
                  </div>
                  <div className="space-y-3 text-gray-600">
                    <p className="flex items-center gap-2">
                      <span className="font-medium">Liczba stacji:</span>
                      <span>20</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-medium">Trasa:</span>
                      <span>Od Etisalat do Creek</span>
                    </p>
                    <div className="bg-white/50 rounded-lg p-4 mt-4">
                      <p className="font-medium mb-2">Godziny kursowania:</p>
                      <ul className="space-y-1.5 text-sm">
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                          <span>Poniedziałek - Środa: 5:00-24:00</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                          <span>Czwartek: 5:00-1:00</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                          <span>Piątek: 10:00-1:00</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Special Hours Notice */}
                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 text-blue-600 mb-3">
                    <FaInfoCircle className="text-xl" />
                    <h4 className="font-semibold">Uwaga</h4>
                  </div>
                  <p className="text-gray-600">
                    W okresie Ramadanu godziny kursowania mogą ulec zmianie. Aktualne informacje 
                    znajdziesz na stronie RTA lub w aplikacji.
                  </p>
                </div>
              </div>

              {/* Right Column - Pricing and Gold Class */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-6">Bilety i klasy:</h3>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 gap-4">
                  {/* Silver Class Pricing */}
                  <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
                      <FaCreditCard className="text-gray-400" />
                      Silver Class
                    </h4>
                    <div className="bg-white/50 rounded-lg p-4">
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex justify-between items-center">
                          <span>Jedna strefa:</span>
                          <span className="font-medium">4 AED</span>
                        </li>
                        <li className="flex justify-between items-center border-t border-gray-100 pt-3">
                          <span>Dwie strefy:</span>
                          <span className="font-medium">6 AED</span>
                        </li>
                        <li className="flex justify-between items-center border-t border-gray-100 pt-3">
                          <span>Wszystkie strefy:</span>
                          <span className="font-medium">8 AED</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Gold Class Pricing */}
                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6">
                    <h4 className="font-semibold text-amber-700 mb-4 flex items-center gap-2">
                      <FaStar className="text-amber-500" />
                      Gold Class
                    </h4>
                    <div className="bg-white/50 rounded-lg p-4">
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex justify-between items-center">
                          <span>Jedna strefa:</span>
                          <span className="font-medium">8 AED</span>
                        </li>
                        <li className="flex justify-between items-center border-t border-gray-100 pt-3">
                          <span>Dwie strefy:</span>
                          <span className="font-medium">12 AED</span>
                        </li>
                        <li className="flex justify-between items-center border-t border-gray-100 pt-3">
                          <span>Wszystkie strefy:</span>
                          <span className="font-medium">15 AED</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Gold Class Information */}
                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <FaStar className="text-amber-500" />
                      Czym wyróżnia się klasa Gold?
                    </h4>
                    <div className="space-y-4 text-gray-700">
                      <p>
                        Klasa Gold nie wyróżnia się znacząco na tle innych przedziałów. Jej główną zaletą 
                        jest dogodna lokalizacja oraz to, że zwykle podróżuje tam mniej osób.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mt-0.5">
                            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                          </div>
                          <span>Przedziały Gold są dostępne w każdym składzie metra i zawsze umieszczone na jednym z jego końców</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mt-0.5">
                            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                          </div>
                          <span>Dubajskie metro jest całkowicie zautomatyzowane, więc brak maszynisty zapewnia nieograniczony widok</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mt-0.5">
                            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                          </div>
                          <span>Na przeciwległym końcu pociągu znajdują się natomiast przedziały przeznaczone dla kobiet i dzieci</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Taxi and Uber Section */}
        <motion.section
          id="taxi"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-xl shadow-sm overflow-hidden mb-12"
        >
          <div className="p-8">
            <div className="flex items-center mb-6">
              <FaTaxi className="w-8 h-8 text-yellow-500 mr-4" />
              <h2 className="text-3xl font-bold">Taxi i Uber</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Taxi:</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-yellow-600 mb-2">Ceny podstawowe</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Start: 12 AED (dzień) / 14 AED (noc)</li>
                      <li>• Za km: 2.82 AED (dzień) / 2.93 AED (noc)</li>
                      <li>• Minimalna opłata: 20 AED</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-yellow-600 mb-2">Rodzaje taksówek</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Standardowe (kremowe)</li>
                      <li>• Damskie (różowy dach)</li>
                      <li>• VIP (czarne)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Uber i Careem:</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-blue-600 mb-2">Uber</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• UberX (standard)</li>
                      <li>• UberXL (większe grupy)</li>
                      <li>• UberBLACK (premium)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-green-600 mb-2">Careem</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• GO (ekonomiczny)</li>
                      <li>• Business (komfortowy)</li>
                      <li>• MAX (dla grup)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Bus and Tram Section */}
        <motion.section
          id="bus"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-xl shadow-sm overflow-hidden mb-12"
        >
          <div className="p-8">
            <div className="flex items-center mb-6">
              <FaBus className="w-8 h-8 text-green-600 mr-4" />
              <h2 className="text-3xl font-bold">Autobusy i Tramwaje</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Autobusy:</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-green-600 mb-2">Sieć autobusowa</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Ponad 1500 klimatyzowanych autobusów</li>
                      <li>• Regularne połączenia po całym mieście</li>
                      <li>• Osobne miejsca dla kobiet i dzieci</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-green-600 mb-2">Ceny i bilety</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 3-10 AED za przejazd</li>
                      <li>• Karta Nol wymagana</li>
                      <li>• Bilety dzienne dostępne</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Tramwaj:</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-blue-600 mb-2">Dubai Tram</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Trasa przez Dubai Marina i JBR</li>
                      <li>• 11 przystanków na trasie</li>
                      <li>• Połączenie z czerwoną linią metra</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-blue-600 mb-2">Informacje</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Klimatyzowane wagony</li>
                      <li>• Ceny jak w metrze</li>
                      <li>• Kursuje 6:30-1:38</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Water Transport Section */}
        <motion.section
          id="water"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-white rounded-xl shadow-sm overflow-hidden mb-12"
        >
          <div className="p-8">
            <div className="flex items-center mb-6">
              <FaWater className="w-8 h-8 text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold">Transport Wodny</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Abra:</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-blue-600 mb-2">Tradycyjna łódź</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Cena: 1 AED za przejazd</li>
                      <li>• Kursuje przez Dubai Creek</li>
                      <li>• Łączy Deira z Bur Dubai</li>
                      <li>• Dostępna 5:00-24:00</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Water Taxi i Ferry:</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-blue-600 mb-2">Water Taxi</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Od 50 AED za rejs</li>
                      <li>• Trasy na żądanie</li>
                      <li>• Klimatyzowane</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-blue-600 mb-2">Dubai Ferry</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Od 15 AED za osobę</li>
                      <li>• Regularne rejsy</li>
                      <li>• Akceptuje kartę Nol</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Safety Section */}
        <motion.section
          id="safety"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="bg-white rounded-xl shadow-sm overflow-hidden mb-12"
        >
          <div className="p-8">
            <div className="flex items-center mb-6">
              <FaShieldAlt className="w-8 h-8 text-green-600 mr-4" />
              <h2 className="text-3xl font-bold">Bezpieczeństwo</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Środki bezpieczeństwa:</h3>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <ul className="space-y-2 text-gray-600">
                    <li>• Monitoring 24/7</li>
                    <li>• Regularne kontrole bezpieczeństwa</li>
                    <li>• Osobne wagony dla kobiet i dzieci</li>
                    <li>• Ochrona na stacjach</li>
                    <li>• System powiadamiania o zagrożeniach</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Wskazówki:</h3>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <ul className="space-y-2 text-gray-600">
                    <li>• Pilnuj rzeczy osobistych</li>
                    <li>• Korzystaj z oficjalnych środków transportu</li>
                    <li>• Przestrzegaj oznaczeń</li>
                    <li>• W razie potrzeby zgłoś się do ochrony</li>
                    <li>• Zachowuj bilety do końca podróży</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Social Media Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-white overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4 text-center">Dołącz do społeczności</h2>
            <p className="text-blue-100 mb-8 text-center max-w-2xl mx-auto">
              Bądź na bieżąco z najnowszymi informacjami o transporcie i życiu w Dubaju. Dołącz do tysięcy Polaków planujących podróż!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a
                href="https://www.instagram.com/kierunekdubajpl/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all group"
              >
                <FaInstagram className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Instagram</h3>
                <p className="text-sm text-blue-100 text-center">Codzienna dawka inspiracji z Dubaju</p>
                <span className="mt-2 text-xs">@kierunekdubajpl</span>
              </a>
              
              <a
                href="https://www.facebook.com/kierunekdubajpl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all group"
              >
                <FaFacebook className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Facebook</h3>
                <p className="text-sm text-blue-100 text-center">Aktualności i porady</p>
                <span className="mt-2 text-xs">KierunekDubaj.pl</span>
              </a>

              <a
                href="https://www.facebook.com/groups/atrakcjedubaj/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all group"
              >
                <FaUsers className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Grupa FB</h3>
                <p className="text-sm text-blue-100 text-center">Społeczność podróżników</p>
                <span className="mt-2 text-xs">Atrakcje w Dubaju</span>
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Transport;
