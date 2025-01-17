import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaPaw, FaTree, FaCamera, FaHistory, FaLeaf, FaRecycle, FaBus, FaParking, FaWheelchair, FaUtensils } from 'react-icons/fa';

const DubaiSafariPage = () => {
  const funFacts = [
    "Dom dla ponad 2 500 zwierząt z całego świata",
    "Rozciąga się na obszarze 119 hektarów",
    "Prezentuje unikalne środowisko Pustyni Arabskiej",
    "Posiada pierwsze na świecie przejezdne ekspozycje krokodyli",
    "Prowadzi programy hodowlane zagrożonych gatunków",
    "Posiada wiele klimatyzowanych środowisk",
    "Wykorzystuje zrównoważony system recyklingu wody",
    "Prowadzi nagradzane programy ochrony przyrody"
  ];

  const galleryImages = [
    '/images/dubai-safari-1.jpg',
    '/images/dubai-safari.jpg',
    '/images/dubai-safari-2.jpg',
    '/images/dubai-safari-3.jpg',
    '/images/dubai-safari-4.jpg',
    '/images/dubai-safari-5.jpg'
  ];

  const attractions = [
    {
      title: "Safari na Pustyni Arabskiej",
      description: "Poznaj rodzimą faunę pustyni w jej naturalnym środowisku, w tym oryks arabski i gazele."
    },
    {
      title: "Wioska Afrykańska",
      description: "Dom dla afrykańskiej dzikiej przyrody, w tym lwów, słoni, żyraf i zebr w specjalnie zaprojektowanym środowisku."
    },
    {
      title: "Wioska Azjatycka",
      description: "Prezentuje azjatyckie gatunki, takie jak tygrysy, niedźwiedzie księżycowe i różne naczelne w tematycznych środowiskach."
    },
    {
      title: "Wioska Odkrywców",
      description: "Interaktywna strefa z wycieczkami z przewodnikiem, programami edukacyjnymi i bliskimi spotkaniami z przyjaznymi zwierzętami."
    }
  ];

  const history = [
    {
      year: "2017",
      event: "Dubai Safari Park oficjalnie otwiera swoje podwoje dla publiczności"
    },
    {
      year: "2018",
      event: "Wprowadzenie nowych gatunków i programów hodowlanych"
    },
    {
      year: "2020",
      event: "Główna renowacja i modernizacja obiektów"
    },
    {
      year: "2021",
      event: "Uruchomienie nowych programów ochrony i edukacji"
    },
    {
      year: "2022",
      event: "Otwarcie nowych interaktywnych wystaw i doświadczeń"
    },
    {
      year: "2023",
      event: "Wdrożenie zaawansowanych praktyk i technologii zrównoważonego rozwoju"
    }
  ];

  const practicalInfo = [
    {
      icon: <FaBus className="text-2xl text-gold-500" />,
      title: "Jak Dojechać",
      details: "Znajduje się w Al Warqa. Dostępny autobusami linii 50 i 53. Dostępne usługi taksówkowe."
    },
    {
      icon: <FaParking className="text-2xl text-gold-500" />,
      title: "Parking",
      details: "Dostępny bezpłatny parking z wydzielonymi miejscami dla autobusów i osób niepełnosprawnych"
    },
    {
      icon: <FaWheelchair className="text-2xl text-gold-500" />,
      title: "Dostępność",
      details: "Dostępny dla wózków inwalidzkich z możliwością wypożyczenia. Utwardzone ścieżki w całym parku."
    },
    {
      icon: <FaUtensils className="text-2xl text-gold-500" />,
      title: "Udogodnienia",
      details: "Dostępne liczne restauracje, kawiarnie, sale modlitewne i miejsca odpoczynku"
    }
  ];

  const experiences = [
    {
      title: "Wycieczki z Przewodnikiem",
      description: "Wycieczki prowadzone przez ekspertów przez różne siedliska dzikich zwierząt i wioski."
    },
    {
      title: "Spotkania ze Zwierzętami",
      description: "Bliskie spotkania z wybranymi zwierzętami pod profesjonalnym nadzorem."
    },
    {
      title: "Programy Edukacyjne",
      description: "Interaktywne sesje edukacyjne o ochronie dzikiej przyrody i ekosystemach."
    },
    {
      title: "Pokazy Dzikich Zwierząt",
      description: "Codzienne prezentacje przedstawiające różne zwierzęta i ich naturalne zachowania."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/dubai-safari.jpg"
          alt="Park Safari w Dubaju"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Park Safari w Dubaju
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Przeżyj Przygodę z Dziką Przyrodą w Sercu Dubaju
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button
                onClick={() => window.open('https://www.getyourguide.com/dubai-l173/dubai-dubai-safari-park-entry-pass-t564161/?partner_id=19WQ75B&utm_medium=online_publisher&cmp=kd', '_blank')}
                className="bg-gold-500 hover:bg-gold-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg inline-flex items-center space-x-2"
              >
                <FaTicketAlt />
                <span>Zarezerwuj Bilet</span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaClock className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Godziny Otwarcia</h3>
            <p className="text-gray-600">9:00 - 17:00</p>
            <p className="text-gray-500 text-sm">Otwarte codziennie</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Al Warqa 5</p>
            <p className="text-gray-500 text-sm">Al Awir Road, Dubaj</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Bilety</h3>
            <p className="text-gray-600">Od 85 AED</p>
            <p className="text-gray-500 text-sm">Różne opcje dostępne</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaStar className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p className="text-gray-600">4.5/5</p>
            <p className="text-gray-500 text-sm">od odwiedzających</p>
          </motion.div>
        </div>

        {/* About Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">O Parku Safari</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-6">
              Dubai Safari Park to wyjątkowe miejsce, gdzie można spotkać ponad 2500 zwierząt z całego świata. 
              Park zajmuje imponującą powierzchnię 119 hektarów i oferuje niezapomniane doświadczenia z dziką przyrodą 
              w sercu Dubaju.
            </p>
            <p className="text-gray-600">
              Park jest podzielony na tematyczne wioski reprezentujące różne regiony świata, 
              każda z własnym unikalnym ekosystemem i charakterystycznymi gatunkami zwierząt. 
              Oprócz obserwacji zwierząt, park oferuje edukacyjne programy i interaktywne doświadczenia 
              dla odwiedzających w każdym wieku.
            </p>
          </div>
        </div>

        {/* Zarezerwuj Bilet */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Zarezerwuj Bilet</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div 
              data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
              data-gyg-locale-code="pl-PL" 
              data-gyg-widget="activities" 
              data-gyg-number-of-items="1" 
              data-gyg-cmp="kd-attracion" 
              data-gyg-partner-id="19WQ75B" 
              data-gyg-tour-ids="564161"
            >
              <span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/dubai-l173/">GetYourGuide</a></span>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Galeria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative h-64 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  src={image}
                  alt={`Park Safari w Dubaju - Zdjęcie ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Attractions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Główne Atrakcje</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {attractions.map((attraction, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{attraction.title}</h3>
                <p className="text-gray-600">{attraction.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experiences */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Dostępne Doświadczenia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((experience, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                <p className="text-gray-600">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* History Timeline */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <FaHistory className="mr-3 text-gold-500" />
            Historia i Rozwój
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {history.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <FaCalendarAlt className="text-gold-500 mr-2" />
                  <span className="font-semibold">{item.year}</span>
                </div>
                <p className="text-gray-600">{item.event}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Practical Information */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Informacje Praktyczne</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practicalInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
                {info.icon}
                <div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  <p className="text-gray-600">{info.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Ciekawostki</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {funFacts.map((fact, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <FaInfoCircle className="text-gold-500 mt-1" />
                  <p className="text-gray-600">{fact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DubaiSafariPage;
