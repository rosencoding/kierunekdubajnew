import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaUmbrella, FaCalendarAlt, FaMoneyBillWave, FaUsers, FaThermometerHalf, FaInstagram, FaFacebook } from 'react-icons/fa';

const KiedyJechac = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0">
          <img
            src="/images/background-hero.jpg"
            alt="Dubai Skyline"
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
              Kiedy najlepiej jechać do Dubaju?
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Poznaj najlepszy czas na wizytę w Dubaju i zaplanuj swoją podróż
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl shadow-sm"
          >
            <FaThermometerHalf className="w-8 h-8 text-amber-500 mb-4" />
            <div className="text-2xl font-bold mb-2">20-30°C</div>
            <div className="text-gray-600">Optymalna temperatura (listopad-marzec)</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-sm"
          >
            <FaSun className="w-8 h-8 text-blue-500 mb-4" />
            <div className="text-2xl font-bold mb-2">350</div>
            <div className="text-gray-600">Słonecznych dni w roku</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-sm"
          >
            <FaCalendarAlt className="w-8 h-8 text-green-500 mb-4" />
            <div className="text-2xl font-bold mb-2">Listopad-Marzec</div>
            <div className="text-gray-600">Najlepszy okres na wizytę</div>
          </motion.div>
        </div>

        {/* Seasons Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Pory roku w Dubaju</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Winter Season */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <FaSun className="w-6 h-6 text-amber-500 mr-3" />
                  Sezon zimowy (listopad-marzec)
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Temperatury: 20-30°C</li>
                  <li>• Idealna pogoda na zwiedzanie</li>
                  <li>• Najwyższy sezon turystyczny</li>
                  <li>• Wyższe ceny hoteli</li>
                  <li>• Doskonałe warunki do plażowania</li>
                  <li>• Liczne wydarzenia i festiwale</li>
                </ul>
              </div>
            </div>

            {/* Summer Season */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <FaThermometerHalf className="w-6 h-6 text-red-500 mr-3" />
                  Sezon letni (kwiecień-październik)
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Temperatury: 35-45°C</li>
                  <li>• Wysoka wilgotność powietrza</li>
                  <li>• Niższe ceny hoteli</li>
                  <li>• Mniej turystów</li>
                  <li>• Idealne na zakupy w klimatyzowanych centrach</li>
                  <li>• Specjalne oferty i promocje</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Monthly Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl shadow-sm overflow-hidden mb-16"
        >
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-8">Przegląd miesięczny</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  months: "Styczeń-Luty",
                  temp: "20-25°C",
                  description: "Przyjemne temperatury, idealne na zwiedzanie i plażowanie"
                },
                {
                  months: "Marzec-Kwiecień",
                  temp: "25-35°C",
                  description: "Rosnące temperatury, wciąż dobry czas na wizytę"
                },
                {
                  months: "Maj-Czerwiec",
                  temp: "35-40°C",
                  description: "Początek upałów, niższe ceny zakwaterowania"
                },
                {
                  months: "Lipiec-Sierpień",
                  temp: "38-45°C",
                  description: "Szczyt upałów, wysokie zniżki w hotelach"
                },
                {
                  months: "Wrzesień-Październik",
                  temp: "30-38°C",
                  description: "Spadające temperatury, początek sezonu eventowego"
                },
                {
                  months: "Listopad-Grudzień",
                  temp: "20-30°C",
                  description: "Idealny klimat, liczne wydarzenia i festiwale"
                }
              ].map((period, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2">{period.months}</h3>
                  <div className="text-amber-600 font-medium mb-2">{period.temp}</div>
                  <p className="text-gray-600">{period.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Tips Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-sm overflow-hidden mb-16"
        >
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-8">Wskazówki dotyczące planowania</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <FaMoneyBillWave className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Oszczędności</h3>
                <p className="text-gray-600">
                  Rezerwuj z wyprzedzeniem w sezonie zimowym. W lecie skorzystaj z licznych promocji hotelowych.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <FaUsers className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Zatłoczenie</h3>
                <p className="text-gray-600">
                  Unikaj weekendów (piątek-sobota) w popularnych atrakcjach. Rozważ wczesne poranki.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <FaUmbrella className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Ochrona przed słońcem</h3>
                <p className="text-gray-600">
                  Niezależnie od pory roku, używaj kremów z wysokim filtrem i noś nakrycie głowy.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Temperature Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-xl shadow-sm overflow-hidden mb-16"
        >
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-8">Temperatury w Dubaju</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Średnie temperatury w ciągu dnia</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="w-24">Styczeń</span>
                    <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500" style={{ width: '60%' }}></div>
                    </div>
                    <span className="ml-4 w-16 text-right">24°C</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-24">Marzec</span>
                    <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500" style={{ width: '70%' }}></div>
                    </div>
                    <span className="ml-4 w-16 text-right">28°C</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-24">Czerwiec</span>
                    <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500" style={{ width: '95%' }}></div>
                    </div>
                    <span className="ml-4 w-16 text-right">38°C</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-24">Sierpień</span>
                    <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500" style={{ width: '100%' }}></div>
                    </div>
                    <span className="ml-4 w-16 text-right">42°C</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-24">Październik</span>
                    <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500" style={{ width: '85%' }}></div>
                    </div>
                    <span className="ml-4 w-16 text-right">35°C</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-24">Grudzień</span>
                    <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500" style={{ width: '65%' }}></div>
                    </div>
                    <span className="ml-4 w-16 text-right">26°C</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Ważne informacje o temperaturze</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <FaThermometerHalf className="w-5 h-5 text-red-500 mt-1 mr-3" />
                    <div>
                      <span className="font-medium">Najwyższa temperatura</span>
                      <p>Sierpień: może sięgać nawet 48°C w ciągu dnia</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaThermometerHalf className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                    <div>
                      <span className="font-medium">Najniższa temperatura</span>
                      <p>Styczeń: może spaść do 15°C w nocy</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaUmbrella className="w-5 h-5 text-purple-500 mt-1 mr-3" />
                    <div>
                      <span className="font-medium">Wilgotność</span>
                      <p>Latem może sięgać 90%, co znacząco wpływa na odczuwalną temperaturę</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaSun className="w-5 h-5 text-amber-500 mt-1 mr-3" />
                    <div>
                      <span className="font-medium">Temperatura wody</span>
                      <p>Zima: 20-23°C, Lato: 30-32°C</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Quick Tips Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-sm overflow-hidden mb-16"
        >
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-8">Szybkie Porady</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <h3 className="text-lg font-semibold">Rezerwacja z wyprzedzeniem</h3>
                </div>
                <p className="text-gray-600">
                  W sezonie zimowym (listopad-marzec) rezerwuj hotele i atrakcje z minimum 2-3 miesięcznym wyprzedzeniem.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-lg font-semibold">Ramadan</h3>
                </div>
                <p className="text-gray-600">
                  Sprawdź daty Ramadanu - niektóre atrakcje mogą mieć zmienione godziny otwarcia, a jedzenie w miejscach publicznych jest ograniczone.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-lg font-semibold">Aktywności w upały</h3>
                </div>
                <p className="text-gray-600">
                  W lecie planuj aktywności na zewnątrz na wczesny ranek lub późne popołudnie. W ciągu dnia wybieraj atrakcje w pomieszczeniach.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-lg font-semibold">Oszczędności</h3>
                </div>
                <p className="text-gray-600">
                  Latem skorzystaj z promocji hotelowych i pakietów all-inclusive. Ceny mogą być nawet o 50% niższe niż w sezonie zimowym.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">5</span>
                  <h3 className="text-lg font-semibold">Festiwale i wydarzenia</h3>
                </div>
                <p className="text-gray-600">
                  Dubai Shopping Festival (grudzień-styczeń) i Dubai Summer Surprises (lipiec-sierpień) to okresy największych wyprzedaży.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">6</span>
                  <h3 className="text-lg font-semibold">Weekendy</h3>
                </div>
                <p className="text-gray-600">
                  Weekend w Dubaju to piątek i sobota. W piątki wiele miejsc otwiera się później ze względu na modlitwy.
                </p>
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
            <h2 className="text-3xl font-bold mb-4 text-center">Bądź na bieżąco</h2>
            <p className="text-blue-100 mb-8 text-center">
              Dołącz do naszej społeczności i bądź na bieżąco z najnowszymi informacjami o Dubaju
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a
                href="https://www.instagram.com/kierunekdubajpl/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all"
              >
                <FaInstagram className="w-8 h-8 mb-3" />
                <h3 className="font-semibold mb-2">Instagram</h3>
                <p className="text-sm text-blue-100">Obserwuj nas na Instagramie</p>
                <span className="mt-2 text-xs">@kierunekdubajpl</span>
              </a>
              
              <a
                href="https://www.facebook.com/kierunekdubajpl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all"
              >
                <FaFacebook className="w-8 h-8 mb-3" />
                <h3 className="font-semibold mb-2">Facebook</h3>
                <p className="text-sm text-blue-100">Polub nasz profil</p>
                <span className="mt-2 text-xs">KierunekDubaj.pl</span>
              </a>

              <a
                href="https://www.facebook.com/groups/atrakcjedubaj/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all"
              >
                <FaUsers className="w-8 h-8 mb-3" />
                <h3 className="font-semibold mb-2">Grupa FB</h3>
                <p className="text-sm text-blue-100">Dołącz do dyskusji</p>
                <span className="mt-2 text-xs">Atrakcje w Dubaju</span>
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default KiedyJechac;
