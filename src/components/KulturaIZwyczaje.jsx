import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  FaMosque, 
  FaHandshake, 
  FaUserTie, 
  FaCalendarAlt, 
  FaUtensils, 
  FaLanguage,
  FaInstagram,
  FaFacebook,
  FaUsers,
  FaPrayingHands,
  FaGlassMartiniAlt,
  FaCamera,
  FaFemale,
  FaMale,
  FaInfoCircle,
  FaShoppingBag
} from 'react-icons/fa';

const KulturaIZwyczaje = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const quickStats = [
    {
      icon: <FaMosque className="w-8 h-8 text-green-600" />,
      title: "Religia",
      description: "Islam jest główną religią"
    },
    {
      icon: <FaLanguage className="w-8 h-8 text-blue-600" />,
      title: "Język",
      description: "Arabski i angielski"
    },
    {
      icon: <FaHandshake className="w-8 h-8 text-amber-600" />,
      title: "Tolerancja",
      description: "Otwartość na inne kultury"
    }
  ];

  const culturalTips = [
    {
      icon: <FaHandshake className="w-8 h-8 text-red-600" />,
      title: "Prawa ręka",
      description: "Lewa ręka uważana jest za nieczystą, dlatego jedzenie, podawanie przedmiotów czy płacenie powinno odbywać się prawą ręką."
    },
    {
      icon: <FaShoppingBag className="w-8 h-8 text-amber-600" />,
      title: "Targowanie",
      description: "Targowanie się na tradycyjnych bazarach (soukach) jest częścią lokalnej kultury. Zawsze zaczynaj od niższej ceny i negocjuj z uśmiechem – to naturalny element zakupów."
    },
    {
      icon: <FaUserTie className="w-8 h-8 text-blue-600" />,
      title: "Zachowanie",
      description: "Unikaj publicznego okazywania uczuć, takich jak pocałunki czy przytulanie. Warto również witać się tradycyjnym uściskiem dłoni tylko wtedy, gdy druga osoba go zainicjuje."
    }
  ];

  const customsContent = [
    {
      id: "ubiór",
      title: "Zasady ubioru",
      icon: <FaUserTie className="w-12 h-12 text-blue-600" />,
      content: [
        "Skromny i schludny strój w miejscach publicznych",
        "Zakryte ramiona i kolana (dotyczy zarówno kobiet jak i mężczyzn)",
        "Strój kąpielowy dozwolony tylko na plażach i basenach",
        "W meczetach kobiety muszą zakryć włosy, ramiona i nogi do kostek",
        "Unikaj przezroczystych i zbyt obcisłych ubrań",
        "W centrach handlowych obowiązuje odpowiedni dress code",
        "Szorty i spódnice powinny sięgać co najmniej do kolan"
      ],
      additionalInfo: "W strefach turystycznych zasady są bardziej liberalne, ale warto zachować umiar i szacunek dla lokalnej kultury."
    },
    {
      id: "zachowanie",
      title: "Zachowanie publiczne",
      icon: <FaHandshake className="w-12 h-12 text-green-600" />,
      content: [
        "Unikaj publicznego okazywania uczuć (nawet trzymania się za ręce)",
        "Nie fotografuj osób bez ich zgody, szczególnie kobiet i rodzin",
        "Szanuj miejsca kultu religijnego i zachowuj ciszę w ich pobliżu",
        "Nie jedz, nie pij i nie pal w miejscach publicznych podczas Ramadanu",
        "Unikaj przeklinania i gestów, które mogą być uznane za obraźliwe",
        "Zachowuj się spokojnie i kulturalnie w miejscach publicznych",
        "Nie krytykuj publicznie religii, władzy czy kultury"
      ],
      additionalInfo: "Dubaj jest tolerancyjny, ale warto przestrzegać lokalnych norm społecznych, aby uniknąć nieporozumień."
    },
    {
      id: "ramadan",
      title: "Podczas Ramadanu",
      icon: <FaCalendarAlt className="w-12 h-12 text-amber-600" />,
      content: [
        "Nie jedz, nie pij i nie pal w miejscach publicznych od świtu do zmierzchu",
        "Restauracje w centrach handlowych są zasłonięte w ciągu dnia",
        "Godziny otwarcia sklepów i restauracji są zmienione",
        "Wieczorem odbywają się specjalne uczty (Iftar) - warto wziąć udział",
        "Zachowaj szczególny szacunek dla postących osób",
        "Ubieraj się jeszcze bardziej skromnie niż zwykle",
        "Muzyka w miejscach publicznych jest ściszona lub wyłączona"
      ],
      additionalInfo: "Ramadan to wyjątkowy miesiąc w kulturze muzułmańskiej. To świetna okazja, by poznać lokalną kulturę i tradycje."
    },
    {
      id: "handel",
      title: "Sztuka targowania",
      icon: <FaHandshake className="w-12 h-12 text-purple-600" />,
      content: [
        "W tradycyjnych souks (targach) targowanie się jest oczekiwane",
        "Zacznij od zaproponowania 40-50% początkowej ceny",
        "Bądź uprzejmy i traktuj to jako przyjazną rozmowę",
        "Nie spiesz się - negocjacje mogą trwać dłużej",
        "Jeśli cena jest zbyt wysoka, podziękuj i odejdź - sprzedawca może zaproponować lepszą cenę",
        "W centrach handlowych ceny są stałe - tam się nie targujemy",
        "Znajomość podstawowych zwrotów po arabsku może pomóc w negocjacjach"
      ],
      additionalInfo: "Targowanie się to nie tylko sposób na uzyskanie lepszej ceny, ale także część lokalnej kultury i tradycji."
    },
    {
      id: "alkohol",
      title: "Alkohol i używki",
      icon: <FaGlassMartiniAlt className="w-12 h-12 text-red-600" />,
      content: [
        "Alkohol dostępny tylko w licencjonowanych miejscach (hotele, wybrane restauracje)",
        "Spożywanie alkoholu w miejscach publicznych jest surowo zabronione",
        "Zero tolerancji dla narkotyków - bardzo surowe kary",
        "Prowadzenie pod wpływem alkoholu jest surowo karane",
        "Zakaz wwożenia alkoholu bez specjalnego pozwolenia",
        "Nietrzeźwość w miejscu publicznym może skutkować aresztem",
        "Wiek legalnego spożycia alkoholu to 21 lat"
      ],
      additionalInfo: "Zasady dotyczące alkoholu są bardzo restrykcyjne. Warto je znać i bezwzględnie przestrzegać, aby uniknąć problemów prawnych."
    },
    {
      id: "biznes",
      title: "Etykieta biznesowa",
      icon: <FaUserTie className="w-12 h-12 text-gray-700" />,
      content: [
        "Punktualność jest bardzo ceniona w kontaktach biznesowych",
        "Wymiana wizytówek powinna odbywać się prawą ręką",
        "Hierarchia i szacunek dla starszych są bardzo ważne",
        "Relacje biznesowe buduje się na zaufaniu i osobistych kontaktach",
        "Negocjacje mogą trwać dłużej niż w kulturze zachodniej",
        "Spotkania mogą być przerywane modlitwą lub innymi sprawami",
        "Unikaj planowania spotkań w piątek (święty dzień w islamie)"
      ],
      additionalInfo: "W biznesie ważne są zarówno profesjonalizm jak i osobiste relacje. Cierpliwość i szacunek dla lokalnej kultury są kluczowe."
    },
    {
      id: "komunikacja",
      title: "Komunikacja międzykulturowa",
      icon: <FaLanguage className="w-12 h-12 text-blue-600" />,
      content: [
        "Arabski jest językiem oficjalnym, ale angielski jest powszechnie używany",
        "Podstawowe zwroty po arabsku są doceniane (As-salaam-alaikum - powitanie)",
        "Unikaj rozmów o polityce i religii, chyba że zostaniesz o to poproszony",
        "Gesty mogą mieć inne znaczenie - bądź ostrożny",
        "Kontakt wzrokowy jest ważny, ale nie powinien być zbyt intensywny",
        "Ton głosu powinien być spokojny i uprzejmy",
        "W rozmowie zachowaj odpowiedni dystans fizyczny"
      ],
      additionalInfo: "Efektywna komunikacja wymaga zrozumienia i szacunku dla różnic kulturowych. Uprzejmość i cierpliwość są zawsze doceniane."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Kultura i zwyczaje w Dubaju 2025 | KierunekDubaj.pl</title>
        <meta 
          name="description" 
          content="Poznaj kulturę i zwyczaje Dubaju. Zasady ubioru, zachowania, Ramadan, etykieta biznesowa. Praktyczny przewodnik dla turystów." 
        />
        <meta 
          name="keywords" 
          content="kultura dubaj, zwyczaje dubaj, ramadan dubaj, zasady ubioru dubaj, islam dubaj, etykieta dubaj" 
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0">
          <img
            src="/images/background-hero.jpg"
            alt="Tradycyjna kultura Dubaju"
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
              Kultura i zwyczaje w Dubaju
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Poznaj zasady i tradycje, które pomogą Ci lepiej zrozumieć Dubaj
            </p>
          </motion.div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center space-x-4">
                {stat.icon}
                <div>
                  <h3 className="font-semibold text-lg">{stat.title}</h3>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Szybkie Porady */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Szybkie Porady</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {culturalTips.map((tip, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  {tip.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{tip.title}</h3>
                  <p className="text-gray-600">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Customs Content */}
        <div className="space-y-12">
          {customsContent.map((section, index) => (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  {section.icon}
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                
                <ul className="space-y-4 mb-6">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FaInfoCircle className="text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800">{section.additionalInfo}</p>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Social Media Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-white overflow-hidden mt-16"
        >
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4 text-center">Dołącz do społeczności</h2>
            <p className="text-blue-100 mb-8 text-center max-w-2xl mx-auto">
              Poznaj więcej o kulturze Dubaju i podziel się swoimi doświadczeniami
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
                <p className="text-sm text-blue-100 text-center">Zdjęcia z życia w Dubaju</p>
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
                <p className="text-sm text-blue-100 text-center">Aktualności i ciekawostki</p>
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
                <p className="text-sm text-blue-100 text-center">Wymiana doświadczeń</p>
                <span className="mt-2 text-xs">Atrakcje w Dubaju</span>
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default KulturaIZwyczaje;
