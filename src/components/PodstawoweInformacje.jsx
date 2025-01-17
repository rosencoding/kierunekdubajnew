import React from 'react';
import { motion } from 'framer-motion';
import { FaPassport, FaMoneyBillWave, FaLanguage, FaPlug, FaClock, FaPhone, FaWater, FaSun, FaInstagram, FaFacebook, FaUsers } from 'react-icons/fa';

const PodstawoweInformacje = () => {
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
              Podstawowe Informacje o Dubaju
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Wszystko, co musisz wiedzieć przed podróżą do Dubaju
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Essential Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl shadow-sm"
          >
            <FaMoneyBillWave className="w-8 h-8 text-amber-500 mb-4" />
            <div className="text-2xl font-bold mb-2">AED (Dirham)</div>
            <div className="text-gray-600">Waluta</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-sm"
          >
            <FaLanguage className="w-8 h-8 text-blue-500 mb-4" />
            <div className="text-2xl font-bold mb-2">Arabski, Angielski</div>
            <div className="text-gray-600">Języki</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-sm"
          >
            <FaClock className="w-8 h-8 text-purple-500 mb-4" />
            <div className="text-2xl font-bold mb-2">GMT+4</div>
            <div className="text-gray-600">Strefa czasowa</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-sm"
          >
            <FaPlug className="w-8 h-8 text-green-500 mb-4" />
            <div className="text-2xl font-bold mb-2">230V / 50Hz</div>
            <div className="text-gray-600">Napięcie elektryczne</div>
          </motion.div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-16">
          {/* Visa Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <div className="p-8">
              <div className="flex items-center mb-6">
                <FaPassport className="w-8 h-8 text-blue-600 mr-4" />
                <h2 className="text-3xl font-bold">Wiza do Dubaju</h2>
              </div>
              <div className="prose max-w-none">
                <p className="text-lg text-gray-600 mb-6">
                  Polscy obywatele otrzymują bezpłatną wizę turystyczną przy wjeździe do Dubaju. Wiza jest ważna przez 90 dni.
                </p>
                <h3 className="text-xl font-semibold mb-4">Wymagania wizowe:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Paszport ważny minimum 6 miesięcy od daty wjazdu</li>
                  <li>Bilet powrotny lub bilet na dalszą podróż</li>
                  <li>Potwierdzenie rezerwacji hotelu</li>
                  <li>Wystarczające środki finansowe na pobyt</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Climate Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <div className="p-8">
              <div className="flex items-center mb-6">
                <FaSun className="w-8 h-8 text-yellow-500 mr-4" />
                <h2 className="text-3xl font-bold">Klimat</h2>
              </div>
              <div className="prose max-w-none">
                <p className="text-lg text-gray-600 mb-6">
                  Dubaj charakteryzuje się gorącym, pustynnym klimatem z bardzo gorącymi latami i łagodnymi zimami.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Sezon zimowy (październik-kwiecień):</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Temperatury: 20-30°C</li>
                      <li>Idealna pogoda na zwiedzanie</li>
                      <li>Możliwe sporadyczne opady</li>
                      <li>Wysoki sezon turystyczny</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Sezon letni (maj-wrzesień):</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Temperatury: 35-45°C</li>
                      <li>Wysoka wilgotność</li>
                      <li>Idealne na zakupy w klimatyzowanych centrach</li>
                      <li>Niższe ceny hoteli</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Currency Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <div className="p-8">
              <div className="flex items-center mb-6">
                <FaMoneyBillWave className="w-8 h-8 text-green-600 mr-4" />
                <h2 className="text-3xl font-bold">Waluta i Płatności</h2>
              </div>
              <div className="prose max-w-none">
                <p className="text-lg text-gray-600 mb-6">
                  Oficjalną walutą jest dirham ZEA (AED). 1 AED ≈ 1.1 PLN. Większość miejsc akceptuje karty płatnicze, ale warto mieć przy sobie gotówkę.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Płatności:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Karty kredytowe szeroko akceptowane</li>
                      <li>Bankomaty dostępne w całym mieście</li>
                      <li>Apple Pay i Google Pay działają</li>
                      <li>Kantory oferują dobre kursy wymiany</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Przydatne informacje:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Większość cen podawana w AED</li>
                      <li>Napiwki: 10-15% w restauracjach</li>
                      <li>Warto negocjować na targach</li>
                      <li>Wymiana w kantorach lepsza niż w hotelach</li>
                    </ul>
                  </div>
                </div>
                
                {/* Revolut Call to Action */}
                <div className="mt-8">
                  <div className="relative overflow-hidden bg-gradient-to-br from-[#1A1510] to-[#2C2317] rounded-xl border border-[#B8860B]">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#B8860B] transform rotate-12 scale-150"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative p-8">
                      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                        {/* Text content */}
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-4 text-[#FFD700]">
                            Załóż konto Revolut i wymieniaj waluty z łatwością!
                          </h3>
                          <p className="text-[#D4AF37] mb-4">
                            Chcesz wymieniać waluty na korzystnych warunkach? Załóż konto Revolut i korzystaj z szybkiej wymiany walut po korzystnym kursie. Płać wygodnie kartą Revolut, gdziekolwiek jesteś, bez ukrytych opłat!
                          </p>
                          <p className="text-[#B8860B] text-sm">
                            Dołącz do ponad 50 milionów użytkowników, którzy tak jak ja pokochali Revolut.
                          </p>
                        </div>
                        
                        {/* CTA Button */}
                        <div className="w-full md:w-auto">
                          <a 
                            href="https://revolut.com/referral/?referral-code=krzysz6wur!JAN1-25-AR-H1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center w-full md:w-auto bg-gradient-to-r from-[#FFD700] to-[#B8860B] hover:from-[#B8860B] hover:to-[#FFD700] text-[#1A1510] font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                          >
                            Załóż konto Revolut
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Communication Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <div className="p-8">
              <div className="flex items-center mb-6">
                <FaPhone className="w-8 h-8 text-blue-600 mr-4" />
                <h2 className="text-3xl font-bold">Komunikacja</h2>
              </div>
              <div className="prose max-w-none">
                <p className="text-lg text-gray-600 mb-6">
                  W Dubaju powszechnie używany jest język angielski, a większość znaków jest dwujęzyczna.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Internet i telefon:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Darmowe Wi-Fi w centrach handlowych</li>
                      <li>Lokalne karty SIM dostępne na lotnisku</li>
                      <li>Popularne sieci: Etisalat i Du</li>
                      <li>WhatsApp i Skype działają bez VPN</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Ważne numery:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Pogotowie: 998</li>
                      <li>Policja: 999</li>
                      <li>Straż pożarna: 997</li>
                      <li>Informacja turystyczna: 800-555</li>
                      <li className="font-medium">Konsulat RP w Dubaju:
                        <ul className="pl-6 mt-2 space-y-1">
                          <li>Tel: (+971) 4 449 45 88</li>
                          <li>Alarmowy: (+971) 50 632 89 69</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Water and Electricity Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <div className="p-8">
              <div className="flex items-center mb-6">
                <FaWater className="w-8 h-8 text-blue-600 mr-4" />
                <h2 className="text-3xl font-bold">Woda i Elektryczność</h2>
              </div>
              <div className="prose max-w-none">
                <p className="text-lg text-gray-600 mb-6">
                  Woda z kranu w Dubaju jest zdatna do picia, ale większość ludzi preferuje wodę butelkowaną.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Elektryczność:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Napięcie: 230V / 50Hz</li>
                      <li>Gniazdka typu G (brytyjskie)</li>
                      <li>Warto zabrać adapter</li>
                      <li>Dostępne w większości sklepów</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Woda:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Woda butelkowana wszędzie dostępna</li>
                      <li>Hotele często zapewniają darmową wodę</li>
                      <li>Pamiętaj o nawodnieniu</li>
                      <li>Woda z kranu bezpieczna, ale nie polecana</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Quick Tips Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-sm overflow-hidden"
          >
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-8">Szybkie Porady</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">1</span>
                    <h3 className="text-lg font-semibold">Ramadan</h3>
                  </div>
                  <p className="text-gray-600">
                    W czasie Ramadanu nie jedz, nie pij i nie pal w miejscach publicznych w ciągu dnia. Restauracje w centrach handlowych są zazwyczaj otwarte.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">2</span>
                    <h3 className="text-lg font-semibold">Ubiór</h3>
                  </div>
                  <p className="text-gray-600">
                    Ubieraj się skromnie, szczególnie w miejscach religijnych i tradycyjnych. Ramiona i kolana powinny być zakryte.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">3</span>
                    <h3 className="text-lg font-semibold">Alkohol</h3>
                  </div>
                  <p className="text-gray-600">
                    Alkohol jest dostępny w licencjonowanych restauracjach i barach hotelowych. Nie wolno pić w miejscach publicznych.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">4</span>
                    <h3 className="text-lg font-semibold">Transport</h3>
                  </div>
                  <p className="text-gray-600">
                    Kup kartę Nol Card na metro i autobusy. Dostępna na stacjach metra i w większych centrach handlowych.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">5</span>
                    <h3 className="text-lg font-semibold">Zakupy</h3>
                  </div>
                  <p className="text-gray-600">
                    Na tradycyjnych targach (soukach) można i należy się targować. W centrach handlowych ceny są stałe.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">6</span>
                    <h3 className="text-lg font-semibold">Fotografia</h3>
                  </div>
                  <p className="text-gray-600">
                    Nie fotografuj osób bez ich zgody, szczególnie kobiet i rodzin. Niektóre budynki rządowe są również objęte zakazem.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Additional Information Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-8">Dodatkowe Informacje</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Święta i dni wolne</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Eid al-Fitr (koniec Ramadanu)</li>
                    <li>Eid al-Adha</li>
                    <li>Islamski Nowy Rok</li>
                    <li>Święto Narodowe ZEA (2 grudnia)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Zwyczaje i etykieta</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Nie używaj lewej ręki do jedzenia</li>
                    <li>Nie okazuj publicznie uczuć</li>
                    <li>Szanuj miejsca religijne</li>
                    <li>Bądź punktualny na spotkania</li>
                  </ul>
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
    </div>
  );
};

export default PodstawoweInformacje;
