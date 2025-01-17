import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaWallet, FaInfoCircle, FaPassport, FaMapMarkedAlt } from 'react-icons/fa';
import SEO from '../components/SEO';

const TravelGuidePage = () => {
  // SEO data
  const seoData = {
    title: "Przewodnik po Dubaju 2024 | Kompletny poradnik turystyczny",
    description: "Kompleksowy przewodnik po Dubaju: najlepszy czas na wizytę, pogoda, atrakcje, transport, kultura i zwyczaje. Wszystko, co musisz wiedzieć przed podróżą do Dubaju.",
    keywords: [
      "Dubaj przewodnik",
      "przewodnik po Dubaju",
      "kiedy jechać do Dubaju",
      "pogoda w Dubaju",
      "zwiedzanie Dubaju",
      "atrakcje Dubaju",
      "transport w Dubaju",
      "kultura Dubaju",
      "turystyka Dubaj",
      "ZEA podróże"
    ]
  };

  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        image="/images/background-hero.jpg"
      />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section 
          className="relative bg-cover bg-center h-[600px] bg-fixed" 
          style={{ backgroundImage: 'url("/images/background-hero.jpg")' }}
          aria-label="Hero sekcja przewodnika po Dubaju"
        >
          <div className="absolute inset-0 bg-black bg-opacity-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight"
              >
                Przewodnik po Dubaju
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-100 max-w-3xl leading-relaxed"
              >
                Twój kompletny przewodnik po Dubaju - od planowania budżetu po lokalne zwyczaje
              </motion.p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-16">
            {/* When to Visit Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              aria-labelledby="when-to-visit"
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl text-blue-600 bg-blue-50 p-3 rounded-lg" aria-hidden="true">
                    <FaCalendarAlt />
                  </span>
                  <h2 id="when-to-visit" className="text-3xl font-bold text-gray-900">Kiedy odwiedzić Dubaj</h2>
                </div>

                <div className="space-y-8">
                  <article>
                    <h3 className="text-xl font-semibold mb-4">Najlepszy czas na wizytę</h3>
                    <p className="text-gray-600 mb-4">
                      Najlepszy czas na odwiedzenie Dubaju to okres od listopada do marca, kiedy pogoda jest przyjemna i idealna na aktywności na świeżym powietrzu.
                    </p>
                  </article>

                  <article>
                    <h3 className="text-xl font-semibold mb-4">Przewodnik po pogodzie</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 p-6 rounded-xl">
                        <h4 className="font-semibold mb-3">Szczyt sezonu (Listopad-Marzec)</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Temperatura: 15-25°C</li>
                          <li>• Idealna pogoda na aktywności zewnętrzne</li>
                          <li>• Wyższe ceny hoteli</li>
                          <li>• Główne wydarzenia i festiwale</li>
                        </ul>
                      </div>
                      <div className="bg-orange-50 p-6 rounded-xl">
                        <h4 className="font-semibold mb-3">Poza sezonem (Czerwiec-Wrzesień)</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Temperatura: 35-45°C</li>
                          <li>• Najlepsze oferty hotelowe</li>
                          <li>• Skupienie na atrakcjach wewnętrznych</li>
                          <li>• Letnie wyprzedaże i promocje</li>
                        </ul>
                      </div>
                    </div>
                  </article>

                  <article>
                    <h3 className="text-xl font-semibold mb-4">Najtańszy czas na wizytę</h3>
                    <p className="text-gray-600 mb-4">
                      Lipiec i sierpień są zwykle najtańszymi miesiącami na wizytę w Dubaju. Chociaż temperatura jest wysoka, znajdziesz:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span>Ceny hoteli nawet o 50% niższe</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span>Oferty lotnicze i promocje</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span>Festiwal Dubai Summer Surprises</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span>Mniej zatłoczone atrakcje</span>
                      </li>
                    </ul>
                  </article>
                </div>
              </div>
            </motion.section>

            {/* Budget Planning Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              aria-labelledby="budget-planning"
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl text-green-600 bg-green-50 p-3 rounded-lg" aria-hidden="true">
                    <FaWallet />
                  </span>
                  <h2 id="budget-planning" className="text-3xl font-bold text-gray-900">Planowanie budżetu</h2>
                </div>

                <div className="space-y-8">
                  <article>
                    <h3 className="text-xl font-semibold mb-4">Szacunki budżetu tygodniowego</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-green-50 p-6 rounded-xl">
                        <h4 className="font-semibold mb-2">Podróżnik budżetowy</h4>
                        <p className="text-3xl font-bold text-green-600 mb-4">700-1000 USD</p>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Hostel/hotel budżetowy: 30-50 USD/night</li>
                          <li>• Restauracje lokalne: 15-25 USD/posiłek</li>
                          <li>• Transport publiczny</li>
                          <li>• Bezpłatne/niskokosztowe atrakcje</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 p-6 rounded-xl">
                        <h4 className="font-semibold mb-2">Klasa średnia</h4>
                        <p className="text-3xl font-bold text-blue-600 mb-4">1500-2500 USD</p>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Hotel 3-4 gwiazdkowy: 100-200 USD/night</li>
                          <li>• Mieszane opcje gastronomiczne: 40-60 USD/posiłek</li>
                          <li>• Niektóre płatne atrakcje</li>
                          <li>• Okazjonalne użycie taksówki</li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 p-6 rounded-xl">
                        <h4 className="font-semibold mb-2">Luksus</h4>
                        <p className="text-3xl font-bold text-purple-600 mb-4">3000+ USD</p>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Hotel 5 gwiazdkowy: 300+ USD/night</li>
                          <li>• Restauracje fine dining: 100+ USD/posiłek</li>
                          <li>• Aktywności premium</li>
                          <li>• Wycieczki prywatne</li>
                        </ul>
                      </div>
                    </div>
                  </article>

                  <article>
                    <h3 className="text-xl font-semibold mb-4">Porady dotyczące oszczędzania pieniędzy</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span>Zarezerwuj loty 3-4 miesiące wcześniej</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span>Odwiedź Dubaj w okresie poza sezonem (czerwiec-sierpień)</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span>Użyj metra w Dubaju i transportu publicznego</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span>Zdobądź kartę Dubai Pass dla atrakcji</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span>Szukaj ofert hotelowych z śniadaniem</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span>Zjedz w lokalnych restauracjach w starej części Dubaju</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </motion.section>

            {/* Practical Information Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              aria-labelledby="practical-information"
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl text-indigo-600 bg-indigo-50 p-3 rounded-lg" aria-hidden="true">
                    <FaInfoCircle />
                  </span>
                  <h2 id="practical-information" className="text-3xl font-bold text-gray-900">Informacje praktyczne</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <article>
                      <h3 className="text-xl font-semibold mb-4">Wytyczne kulturowe</h3>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                          <span>Ubierz się skromnie w miejscach publicznych</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                          <span>Unikaj publicznego okazywania uczuć</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                          <span>Szanuj zwyczaje Ramadanu</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                          <span>Nie spożywaj alkoholu w miejscach publicznych</span>
                        </li>
                      </ul>
                    </article>
                  </div>

                  <div className="space-y-6">
                    <article>
                      <h3 className="text-xl font-semibold mb-4">Porady praktyczne</h3>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                          <span>Pobierz aplikacje przewoźników</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                          <span>Zdobądź lokalną kartę SIM</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                          <span>Nie zapomnij o kremie z filtrem i wodzie</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                          <span>Zapisz numery awaryjne</span>
                        </li>
                      </ul>
                    </article>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Getting Around Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              aria-labelledby="getting-around"
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl text-blue-600 bg-blue-50 p-3 rounded-lg" aria-hidden="true">
                    <FaMapMarkedAlt />
                  </span>
                  <h2 id="getting-around" className="text-3xl font-bold text-gray-900">Poruszanie się po Dubaju</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-4">Metro w Dubaju</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span>Linia czerwona: lotnisko do marin</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span>Linia zielona: obszar Creek</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span>Cena: 4-8,50 AED za przejazd</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span>Godziny: 5:00 - północ</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-4">Taksówki i aplikacje przewoźników</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span>Cena startowa: 12 AED</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span>Dostępne aplikacje Uber i Careem</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span>Taksówki różowe dla kobiet</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span>Taksówka z lotniska: około 70 AED</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Visa Information Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              aria-labelledby="visa-information"
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl text-blue-600 bg-blue-50 p-3 rounded-lg" aria-hidden="true">
                    <FaPassport />
                  </span>
                  <h2 id="visa-information" className="text-3xl font-bold text-gray-900">Informacje o wizach</h2>
                </div>

                <div className="space-y-8">
                  <article>
                    <h3 className="text-xl font-semibold mb-4">Kraje z wizą na przyjazd</h3>
                    <p className="text-gray-600 mb-4">
                      Obywatele tych krajów mogą uzyskać bezpłatną wizę na przyjazd:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-600">
                      <div>
                        <strong>Europa</strong>
                        <ul className="list-disc list-inside">
                          <li>Wielka Brytania</li>
                          <li>Francja</li>
                          <li>Niemcy</li>
                          <li>Włochy</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Ameryka</strong>
                        <ul className="list-disc list-inside">
                          <li>Stany Zjednoczone</li>
                          <li>Kanada</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Azja/Pacyfik</strong>
                        <ul className="list-disc list-inside">
                          <li>Japonia</li>
                          <li>Singapur</li>
                          <li>Australia</li>
                        </ul>
                      </div>
                    </div>
                  </article>

                  <article>
                    <h3 className="text-xl font-semibold mb-4">Typy wiz i opłaty</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border p-4 rounded-lg">
                        <h4 className="font-semibold">Wiza turystyczna (30 dni)</h4>
                        <p className="text-gray-600">Cena: 300 AED (~82 USD)</p>
                      </div>
                      <div className="border p-4 rounded-lg">
                        <h4 className="font-semibold">Wiza turystyczna (90 dni)</h4>
                        <p className="text-gray-600">Cena: 700 AED (~191 USD)</p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </motion.section>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Czy masz jeszcze jakieś pytania?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Sprawdź naszą sekcję FAQ, aby uzyskać więcej informacji o podróżowaniu do Dubaju
              </p>
              <motion.a
                href="/faq"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Zobacz FAQ
              </motion.a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default TravelGuidePage;
