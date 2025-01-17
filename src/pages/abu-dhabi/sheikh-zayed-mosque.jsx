import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaCamera, FaMosque, FaUserFriends, FaExternalLinkAlt, FaTicketAlt, FaSuitcase, FaTshirt, FaStore, FaUsers, FaCar, FaList } from 'react-icons/fa';

const SheikhZayedMosquePage = () => {
  const funFacts = [
    "Meczet może pomieścić ponad 40 000 wiernych",
    "Posiada największy ręcznie tkany dywan na świecie",
    "Ma 82 kopuły zdobione białym marmurem",
    "Posiada 7 kryształowych żyrandoli zdobionych milionami kryształów Swarovskiego",
    "Główna sala modlitewna posiada największy żyrandol na świecie",
    "Baseny refleksyjne tworzą zachwycające lustrzane efekty"
  ];

  const sections = [
    { id: "informacje", title: "Informacje" },
    { id: "galeria", title: "Galeria" },
    { id: "kup-bilety", title: "Kup bilety" },
    { id: "historia", title: "Historia" },
    { id: "ciekawostki", title: "Ciekawostki" },
    { id: "przydatne-informacje", title: "Przydatne Informacje" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const galleryImages = [
    '/images/sheikh-zayed-mosque-1.jpg',
    '/images/sheikh-zayed-mosque-2.jpg',
    '/images/sheikh-zayed-mosque-3.jpg',
    '/images/sheikh-zayed-mosque-4.jpg',
    '/images/sheikh-zayed-mosque-5.jpg',
    '/images/sheikh-zayed-mosque-6.jpg',
    '/images/sheikh-zayed-mosque-7.jpg',
    '/images/sheikh-zayed-mosque-8.jpg',
    '/images/sheikh-zayed-mosque.jpg'
  ];

  const activities = [
    "Zwiedzanie z przewodnikiem",
    "Fotografowanie architektury",
    "Odwiedzenie biblioteki",
    "Spacer po dziedzińcach",
    "Podziwianie refleksyjnych basenów",
    "Wizyta w centrum kulturalnym",
    "Obserwacja zachodów słońca",
    "Nocne zwiedzanie",
    "Kontemplacja architektury"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/sheikh-zayed-mosque.jpg"
          alt="Wielki Meczet Szejka Zajida"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Wielki Meczet Szejka Zajida
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Architektoniczne arcydzieło i duchowe serce Abu Dhabi
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="https://www.getyourguide.com/abu-dhabi-l494/sheikh-zayed-grand-mosque-center-t129267/?partner_id=19WQ75B&utm_medium=online_publisher"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-500 hover:bg-gold-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg inline-flex items-center space-x-2"
              >
                <FaTicketAlt />
                <span>Zarezerwuj Wycieczkę</span>
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
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaClock className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Godziny Otwarcia</h3>
            <p className="text-gray-600">Sob - Czw: 9:00 - 22:00</p>
            <p className="text-gray-500 text-sm">Pt: 16:30 - 22:00</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Wstęp</h3>
            <p className="text-gray-600">Bezpłatny</p>
            <p className="text-gray-500 text-sm">Wymagany odpowiedni strój</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaStar className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.9/5 od zwiedzających</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Lokalizacja</h3>
            <p className="text-gray-600">Sheikh Rashid Bin Saeed Street</p>
            <p className="text-gray-500 text-sm">Abu Dhabi</p>
          </motion.div>
        </div>

        {/* Description */}
        <div id="informacje" className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">Wielki Meczet Szejka Zajida</h2>
          <div className="space-y-6 text-gray-600">
            <p>
              Wielki Meczet Sheikh Zayed w Abu Zabi stanowi jeden z najbardziej imponujących i znaczących obiektów sakralnych na świecie. Wzniesiony ku czci szejka Zayeda bin Sultana Al Nahyana, założyciela i pierwszego prezydenta Zjednoczonych Emiratów Arabskich, powstawał przez 11 lat, od 1996 do 2007 roku.
            </p>
            <p>
              Architektura meczetu zachwyca harmonijnym połączeniem różnorodnych stylów islamskich. Śnieżnobiałe marmurowe ściany zdobią misterne kwiatowe wzory, a nad kompleksem góruje 82 kopuł różnej wielkości oraz cztery majestatyczne minarety, wznoszące się na wysokość 107 metrów w każdym rogu budowli.
            </p>
            <p>
              We wnętrzu znajduje się największy na świecie jednoczęściowy dywan, będący prawdziwym dziełem sztuki tkackiej. To monumentalne dzieło, stworzone przez 1200 rzemieślników, zajmuje powierzchnię 5627 metrów kwadratowych i waży 35 ton. Główna sala modlitewna może pomieścić ponad 7000 wiernych, podczas gdy cały kompleks jest w stanie przyjąć jednocześnie ponad 40000 osób.
            </p>
            <p>
              Pod główną kopułą zawisł monumentalny żyrandol, uznawany za największy na świecie. Ta imponująca konstrukcja, inkrustowana kryształami Swarovskiego, ma 15 metrów wysokości i 10 metrów szerokości, stanowiąc centralny punkt dekoracyjny świątyni.
            </p>
          </div>
        </div>

        {/* Gallery */}
        <div id="galeria" className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaCamera className="w-8 h-8 text-gold-500 mr-4" />
            <h2 className="text-3xl font-semibold">Galeria</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="rounded-xl overflow-hidden h-64"
              >
                <img
                  src={image}
                  alt={`Wielki Meczet Sheikh Zayed - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Buy Tickets Section */}
        <div id="kup-bilety" className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaTicketAlt className="w-8 h-8 text-gold-500 mr-4" />
            <h2 className="text-3xl font-semibold">Kup bilety</h2>
          </div>
          <div 
            data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
            data-gyg-locale-code="pl-PL" 
            data-gyg-widget="activities" 
            data-gyg-number-of-items="8" 
            data-gyg-partner-id="19WQ75B" 
            data-gyg-tour-ids="519121,528385,140175,52143,301193,237897,188898,49019"
            className="w-full"
          >
            <span className="text-sm text-gray-500">
              Powered by <a target="_blank" rel="sponsored noopener" href="https://www.getyourguide.com/dubai-l173/" className="text-gold-600 hover:text-gold-700">GetYourGuide</a>
            </span>
          </div>
        </div>

        {/* Historia Section */}
        <div id="historia" className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaHistory className="w-8 h-8 text-gold-500 mr-4" />
            <h2 className="text-3xl font-semibold">Historia</h2>
          </div>
          <div className="space-y-6 text-gray-600">
            <p>
              Historia Wielkiego Meczetu Szejka Zajida rozpoczęła się w 1996 roku, kiedy to szejk Zayed bin Sultan Al Nahyan, założyciel i pierwszy prezydent Zjednoczonych Emiratów Arabskich, przedstawił wizję stworzenia monumentalnej świątyni, która miała łączyć tradycyjną architekturę islamską z nowoczesnymi rozwiązaniami technologicznymi.
            </p>
            <p>
              Budowa meczetu trwała 11 lat i zaangażowała ponad 3000 robotników oraz najlepszych rzemieślników z całego świata. W projekt zaangażowano artystów i architektów z wielu krajów, w tym z Włoch, Niemiec, Maroka, Indii, Turcji, Chin, Wielkiej Brytanii, Nowej Zelandii, Grecji i Zjednoczonych Emiratów Arabskich, co nadało budowli prawdziwie międzynarodowy charakter.
            </p>
            <p>
              Szejk Zayed zmarł w 2004 roku, nie doczekawszy ukończenia swojego wielkiego projektu. Został pochowany na terenie meczetu, a jego grób stał się miejscem oddawania czci i szacunku dla jego wizji i dokonań. Meczet został oficjalnie otwarty w grudniu 2007 roku podczas święta Eid al-Adha.
            </p>
            <p>
              Koszt budowy meczetu szacuje się na około 2 miliardy dirhamów (około 545 milionów dolarów). Do jego budowy wykorzystano najwyższej jakości materiały z całego świata: biały marmur z Macedonii, kryształy z Austrii, dywany z Iranu, żyrandole z Niemiec i szkło z Włoch.
            </p>
            <p>
              Od momentu otwarcia, Wielki Meczet stał się nie tylko centrum religijnym, ale również symbolem nowoczesnych Emiratów Arabskich, łączącym tradycję z nowoczesnością. Jest to jeden z nielicznych meczetów w regionie, który jest otwarty dla niemuzułmanów, co czyni go ważnym miejscem dialogu międzykulturowego i międzyreligijnego.
            </p>
          </div>
        </div>

        {/* Ciekawostki */}
        <div id="ciekawostki" className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaList className="w-8 h-8 text-gold-500 mr-4" />
            <h2 className="text-3xl font-semibold">Ciekawostki</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <p className="text-gray-600">{fact}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Przydatne Informacje Section */}
        <div id="przydatne-informacje" className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-8">
            <FaInfoCircle className="w-8 h-8 text-gold-500 mr-4" />
            <h2 className="text-3xl font-semibold">Przydatne Informacje</h2>
          </div>

          {/* Opening Hours Widget */}
          <div className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-xl p-6 mb-8 border border-gold-200">
            <div className="flex items-center mb-4">
              <FaClock className="w-6 h-6 text-gold-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Godziny otwarcia</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-gray-700"><span className="font-medium">Sobota - Czwartek:</span> 9:00 - 22:00</p>
                <p className="text-gray-700"><span className="font-medium">Piątek:</span> 16:30 - 22:00</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Ostatnie wejście: 30 minut przed zamknięciem</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <FaSuitcase className="w-6 h-6 text-gold-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Gdzie przechować walizki w Wielkim Meczecie w Abu Dhabi?</h3>
                  <p className="text-gray-600 leading-relaxed">W meczecie jest darmowa przechowalnia przed bramkami wejściowymi zaraz po opuszczeniu podziemnego centrum handlowego.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <FaTshirt className="w-6 h-6 text-gold-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Jakie zasady dotyczące ubioru obowiązują odwiedzających?</h3>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>Wielki Meczet Szejka Zayeda w Abu Dhabi ma rygorystyczne zasady dotyczące ubioru, których muszą przestrzegać wszyscy odwiedzający. Dla kobiet obowiązują szczególnie restrykcyjne wytyczne. Muszą one całkowicie zakryć włosy chustą oraz nosić luźne, nieprzeźroczyste ubrania zakrywające całe ciało. Rękawy muszą sięgać do nadgarstków, a spódnice lub spodnie do kostek. Zabronione są obcisłe lub przezroczyste stroje. Warto wspomnieć, że na miejscu można kupić abaye (tradycyjne czarne szaty) oraz chusty. Kobiety nie mogą nosić mocnego makijażu ani widocznej biżuterii.</p>
                    <p>Mężczyźni również muszą dostosować się do określonych wymogów. Powinni nosić długie spodnie, gdyż szorty są niedozwolone. Wymagana jest koszula lub koszulka z długim rękawem, a podkoszulki są zabronione. Podobnie jak w przypadku kobiet, ubrania nie mogą być obcisłe ani zawierać prowokacyjnych napisów czy obrazków. </p>
                    <p><b>Przed wejściem do meczetu pracownicy dokładnie sprawdzają strój każdego odwiedzającego. Osoby, które nie spełniają wymogów, nie zostaną wpuszczone do środka.</b></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <FaStore className="w-6 h-6 text-gold-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Czy można wypożyczyć strój na miejscu?</h3>
                  <p className="text-gray-600 leading-relaxed">Obecnie w Wielkim Meczecie nie ma już wypożyczalni strojów, jednak przed wejściem znajduje się wiele sklepów z pamiątkami, gdzie można kupić odpowiedni strój za około 45 dirhamów (około 50 zł). W Dubaju natomiast dużym wyborem tradycyjnych ubrań wyróżnia się targ w <a href="/dzielnice#deira" className="text-gold-600 hover:text-gold-700 font-medium">dzielnicy Deira</a>, gdzie ceny zaczynają się już od 20 dirhamów.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <FaUsers className="w-6 h-6 text-gold-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Czy meczet jest dostępny dla osób niebędących muzułmanami?</h3>
                  <p className="text-gray-600 leading-relaxed">Meczet jest otwarty dla wszystkich odwiedzających, niezależnie od wyznania. Wyjątek stanowią godziny modlitw, podczas których wstęp mają wyłącznie osoby wyznające islam.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <FaCar className="w-6 h-6 text-gold-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Jak dojechać do meczetu z Dubaju i ile czasu się jedzie?</h3>
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">Do Wielkiego Meczetu w Abu Dhabi można dotrzeć z Dubaju na kilka sposobów:</p>
                    <ul className="space-y-2 text-gray-600 leading-relaxed">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gold-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>Autobusem: Z dworca Ibn Battuta kursują autobusy do lotniska w Abu Dhabi.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gold-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>Taksówką: Bezpośredni i wygodny sposób dotarcia na miejsce.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gold-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>Zorganizowaną wycieczką: Opcja oferująca transport i przewodnika.</span>
                      </li>
                    </ul>
                    <p className="text-gray-600 leading-relaxed">Czas przejazdu wynosi około 1,5–2 godziny.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <FaCamera className="w-6 h-6 text-gold-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Czy można robić zdjęcia wewnątrz i na zewnątrz meczetu?</h3>
                  <p className="text-gray-600 leading-relaxed">Robienie zdjęć zarówno wewnątrz, jak i na zewnątrz meczetu jest dozwolone. Należy jednak przestrzegać oznaczonych stref, w których fotografowanie jest zabronione, oraz zachować odpowiedni szacunek podczas robienia zdjęć.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activities Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaCalendarAlt className="w-8 h-8 text-gold-500 mr-4" />
            <h2 className="text-3xl font-semibold">Co Można Robić</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-4 rounded-lg"
              >
                <p className="text-gray-600">• {activity}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SheikhZayedMosquePage;
