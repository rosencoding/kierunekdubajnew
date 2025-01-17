import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
  FaCreditCard,
  FaMobileAlt,
  FaSubway,
  FaHotel,
  FaHome,
  FaWineGlass,
  FaTint,
  FaPlug,
  FaGlobe,
  FaMoneyBillWave,
  FaExchangeAlt,
  FaInstagram,
  FaFacebook,
  FaUsers,
  FaInfoCircle,
  FaCaretRight
} from 'react-icons/fa';

const PraktycznePorady = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const quickStats = [
    {
      icon: <FaCreditCard className="w-8 h-8 text-green-600" />,
      title: "Płatności",
      description: "Karty i gotówka akceptowane wszędzie"
    },
    {
      icon: <FaMobileAlt className="w-8 h-8 text-blue-600" />,
      title: "Aplikacje",
      description: "Wszystko co potrzebne w telefonie"
    },
    {
      icon: <FaSubway className="w-8 h-8 text-amber-600" />,
      title: "Transport",
      description: "Nowoczesna komunikacja miejska"
    }
  ];

  const sections = [
    {
      id: "platnosci",
      title: "Płatności i Waluta",
      icon: <FaMoneyBillWave className="w-12 h-12 text-green-600" />,
      content: [
        {
          subtitle: "Karty płatnicze",
          items: [
            "Karty Visa i Maestro z Polski są akceptowane niemal wszędzie",
            "Możliwość wypłaty gotówki z bankomatów",
            "Bankomaty bez prowizji: ADCB, Emirates NBD",
            'Revolut: Unikać EURONET, zawsze wybierać opcję "without conversion"'
          ]
        },
        {
          subtitle: "Gotówka i wymiana",
          items: [
            "Do 40 tys. AED można przewieźć bez deklaracji celnej",
            "Najlepiej wymieniać USD/EUR na AED w kantorach w Dubaju",
            "Nie warto zabierać dolarów, chyba że ktoś bardzo chce"
          ]
        },
        {
          subtitle: "Revolut",
          items: [
            "Najwygodniejsze rozwiązanie dla posiadaczy aplikacji Revolut",
            "Szybka aktywacja bez konieczności kupowania fizycznej karty SIM",
            "Działa od razu po przylocie",
            "Możliwość zarządzania pakietem przez aplikację",
            <span>Załóż konto Revolut z naszym <a href="https://revolut.com/referral/?referral-code=krzysz6wur!JAN1-25-AR-H1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">linkiem polecającym</a></span>
          ]
        }
      ]
    },

    {
      id: "transport",
      title: "Transport Publiczny",
      icon: <FaSubway className="w-12 h-12 text-amber-600" />,
      content: [
        {
          subtitle: "Karta NOL",
          items: [
            "Obowiązkowa do korzystania z transportu publicznego",
            "Każdy pasażer musi posiadać własną kartę - nie ma możliwości jazdy grupowej na jednej karcie",
            "Można wyrobić na stacjach metra (płatność kartą/gotówką) lub przystankach autobusowych (często tylko gotówka)",
            "Można nią płacić za: metro, autobusy, tramwaje, taxi RTA, łodzie, niektóre sklepy i atrakcje (np. Miracle Garden)",
            "Dzieci poniżej 5 roku życia podróżują za darmo",
            "Osoby niepełnosprawne mają darmowe przejazdy na kartach personalizowanych (NOL Personal Card)",
            <span>Aktualne informacje o kartach NOL i opłatach na <a href="https://www.rta.ae/wps/portal/rta/ae/public-transport/Nol-Fares" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">stronie RTA</a></span>
          ]
        },
        {
          subtitle: "Metro",
          items: [
            "Kursuje 7 dni w tygodniu, średnio co 3 minuty",
            <div className="space-y-2">
              <p className="font-semibold">Godziny kursowania:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Poniedziałek–czwartek: 5:00-24:00</li>
                <li>Piątek: 5:00-1:00</li>
                <li>Sobota: 5:00-24:00</li>
                <li>Niedziela: 8:00-24:00</li>
              </ul>
            </div>,
            "Dostępne bezpłatne Wi-Fi we wszystkich wagonach"
          ]
        },
        {
          subtitle: "Autobusy miejskie",
          items: [
            "Kursują codziennie od 4:00 do 1:00 następnego dnia",
            <span>Rozkład jazdy dostępny na <a href="https://www.rta.ae/wps/portal/rta/ae/public-transport/journeyplanner" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">stronie RTA</a></span>,
            <div className="space-y-2">
              <p className="font-semibold">Oznaczenia linii:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Fioletowy - linie dzienne</li>
                <li>Żółty - linie dzienne</li>
                <li>Szary - linie nocne</li>
              </ul>
            </div>,
            <div className="space-y-2">
              <p className="font-semibold">Polecane aplikacje do planowania podróży:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Google Maps</li>
                <li>S'hail (oficjalna aplikacja RTA)</li>
              </ul>
            </div>
          ]
        },
        {
          subtitle: "Tramwaj",
          items: [
            "Jedna linia w okolicy Dubai Marina",
            <div className="space-y-2">
              <p className="font-semibold">Godziny kursowania:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Poniedziałek–sobota: 6:00-1:00</li>
                <li>Niedziela: 9:00-1:00</li>
              </ul>
            </div>,
            "Łatwa przesiadka z metra na tramwaj do Mariny i Palm Jumeirah"
          ]
        }
      ]
    },
    {
      id: "internet",
      title: "Internet w Dubaju",
      icon: <FaGlobe className="w-12 h-12 text-blue-500" />,
      content: [
        {
          subtitle: "Karta eSIM Revolut",
          items: [
            "Najwygodniejsze rozwiązanie dla posiadaczy aplikacji Revolut",
            "Szybka aktywacja bez konieczności kupowania fizycznej karty SIM",
            "Działa od razu po przylocie",
            "Możliwość zarządzania pakietem przez aplikację",
            <span>Załóż konto Revolut z naszym <a href="https://revolut.com/referral/?referral-code=krzysz6wur!JAN1-25-AR-H1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">linkiem polecającym</a></span>
          ]
        },
        {
          subtitle: "Lokalne karty SIM",
          items: [
            "Główni operatorzy: Etisalat, du, Virgin Mobile",
            "Karty dostępne na lotnisku i w punktach sprzedaży w mieście",
            "Wymagany paszport przy zakupie",
            "Atrakcyjne pakiety internetowe dla turystów",
            "Możliwość dokupienia dodatkowych pakietów w trakcie pobytu"
          ]
        },
        {
          subtitle: "Wi-Fi",
          items: [
            "Darmowe Wi-Fi w większości centrów handlowych",
            "Dostępne w metrze i na stacjach metra",
            "Hotele oferują bezpłatny internet dla gości",
            "Wiele restauracji i kawiarni zapewnia Wi-Fi"
          ]
        }
      ]
    },
    {
      id: "hotele",
      title: "Hotele, Restauracje i Rozrywka",
      icon: <FaHotel className="w-12 h-12 text-purple-600" />,
      content: [
        {
          subtitle: "Rezerwacje",
          items: [
            "Tripadvisor - opinie i porównanie cen",
            "Booking - szeroki wybór hoteli",
            "Agoda - często korzystne ceny",
            "Rentalcars.com - wynajem samochodów"
          ]
        },
        {
          subtitle: "Rozrywka",
          items: [
            "TimeOut Dubai - wydarzenia i atrakcje",
            "TimeOut Abu Dhabi - wydarzenia w Abu Dhabi"
          ]
        }
      ]
    },
    {
      id: "alkohol",
      title: "Alkohol w Dubaju",
      icon: <FaWineGlass className="w-12 h-12 text-red-600" />,
      content: [
        {
          subtitle: "Zasady ogólne",
          items: [
            "Dozwolony od 21 roku życia",
            "Zakaz spożywania w miejscach publicznych",
            "Można spożywać w apartamentach i hotelach (jeśli nie zabraniają tego zasady obiektu)",
            "Surowe kary za publiczne upojenie alkoholowe"
          ]
        },
        {
          subtitle: "Gdzie kupić w Dubaju",
          items: [
            "Sklepy MMI i African Eastern (dostępne w Google Maps)",
            "Wymagany paszport (czasem akceptują zdjęcie/kopię)",
            "Ceny często niższe niż w Polsce, nawet za alkohole importowane",
            "Dostępny również w licencjonowanych restauracjach i barach hotelowych"
          ]
        },
        {
          subtitle: "Przewóz alkoholu",
          items: [
            "Można przywieźć w bagażu rejestrowanym",
            "Limit: 4 litry alkoholu lub 2 opakowania piwa (24 puszki po max 355 ml)",
            "Możliwość zakupu na lotnisku w strefie bezcłowej (drożej niż w mieście)",
            "ZAKAZ wwożenia jakiegokolwiek alkoholu do emiratu Szardża",
            <span>Aktualne limity dostępne na <a href="https://www.dubaicustoms.gov.ae/en/mobile/Pages/PermittedLuggageItems.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">stronie Dubai Customs</a></span>
          ]
        },
        {
          subtitle: "Ważne informacje",
          items: [
            "Nie wolno być pod wpływem alkoholu w miejscach publicznych",
            "Surowe kary za prowadzenie pojazdu pod wpływem alkoholu",
            "W Ramadanie obowiązują dodatkowe ograniczenia",
            <span>Szczegółowe informacje na <a href="https://www.dubaicustoms.gov.ae" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">stronie Dubai Customs</a></span>
          ]
        }
      ]
    },
    {
      id: "woda",
      title: "Woda w Dubaju",
      icon: <FaTint className="w-12 h-12 text-blue-400" />,
      content: [
        {
          subtitle: "Informacje",
          items: [
            "Woda z kranu bezpieczna do gotowania i mycia zębów",
            "Zaleca się picie wody butelkowanej",
            "Woda pochodzi z desalinizacji wody morskiej"
          ]
        }
      ]
    },
    {
      id: "prad",
      title: "Prąd i Adaptery",
      icon: <FaPlug className="w-12 h-12 text-gray-600" />,
      content: [
        {
          subtitle: "Co warto wiedzieć",
          items: [
            "Gniazdka typu UK (typ G), ale wiele hoteli ma EU/UK",
            "Adaptery warto kupić przed wyjazdem (ok. 5-8 zł)",
            "Można też kupić na miejscu (np. Day to Day za 5-6 zł)"
          ]
        }
      ]
    },
    {
      id: "aplikacje",
      title: "Najlepsze Aplikacje w Dubaju",
      icon: <FaMobileAlt className="w-12 h-12 text-blue-600" />,
      content: [
        {
          subtitle: "Transport",
          items: [
            "Careem - lokalna alternatywa dla Ubera, często tańsza i bardziej popularna",
            "RTA Dubai - oficjalna aplikacja transportu publicznego, rozkłady jazdy i bilety",
            "Uber - międzynarodowa aplikacja do zamawiania taksówek"
          ]
        },
        {
          subtitle: "Komunikacja",
          items: [
            "My Etisalat - zarządzanie kartą SIM i pakietami od Etisalat",
            "Virgin - aplikacja operatora Virgin Mobile do zarządzania kartą",
            "Du - aplikacja operatora Du do zarządzania kartą i pakietami"
          ]
        },
        {
          subtitle: "Turystyka",
          items: [
            "Tripadvisor - recenzje restauracji, atrakcji i hoteli",
            "Booking - rezerwacja hoteli i apartamentów",
            "GetYourGuide - rezerwacja wycieczek i atrakcji"
          ]
        },
        {
          subtitle: "Nieruchomości",
          items: [
            "Dubizzle - największy portal z ogłoszeniami, nie tylko nieruchomości",
            "Bayut - wyszukiwarka mieszkań i hoteli",
            "Property Finder - wyszukiwarka nieruchomości z filtrowaniem"
          ]
        },
        {
          subtitle: "Finanse",
          items: [
            "Revolut - płatności, wymiana walut i karta eSIM",
            "nol Pay - zarządzanie kartą NOL do transportu publicznego"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Praktyczne Porady - Dubaj 2025 | KierunekDubaj.pl</title>
        <meta 
          name="description" 
          content="Praktyczne informacje o Dubaju: płatności, transport, aplikacje, hotele. Wszystko, co musisz wiedzieć przed podróżą." 
        />
        <meta 
          name="keywords" 
          content="praktyczne porady dubaj, płatności dubaj, transport dubaj, aplikacje dubaj, hotele dubaj" 
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0">
          <img
            src="/images/background-hero.jpg"
            alt="Dubaj - praktyczne informacje"
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
              Praktyczne Porady
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Wszystko, co musisz wiedzieć przed podróżą do Dubaju
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
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-6 rounded-xl shadow-sm mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Spis treści:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <FaCaretRight className="flex-shrink-0" />
                <span>{section.title}</span>
              </a>
            ))}
          </div>
        </motion.nav>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-8">
                  {section.icon}
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>

                <div className="space-y-8">
                  {section.content.map((block, blockIndex) => (
                    <div key={blockIndex} className="space-y-4">
                      {block.subtitle && (
                        <h3 className="text-xl font-semibold text-gray-800">{block.subtitle}</h3>
                      )}
                      {block.items && (
                        <ul className="space-y-3">
                          {block.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-3">
                              <FaInfoCircle className="text-blue-600 mt-1 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
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
              Poznaj więcej praktycznych porad i podziel się swoimi doświadczeniami
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
                <p className="text-sm text-blue-100 text-center">Praktyczne wskazówki na bieżąco</p>
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

export default PraktycznePorady;
