import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaBus, FaParking, FaWheelchair, FaCamera, FaSwimmingPool, FaGlassMartini, FaHotel } from 'react-icons/fa';

const AddressSkyViewPage = () => {
  const funFacts = [
    "Posiada najwyżej położony basen bez krawędzi na świecie",
    "Szklana platforma widokowa na wysokości 219,5 metrów",
    "Konstrukcja połączonych bliźniaczych wież",
    "Oferuje widoki na Burj Khalifa i Downtown Dubai",
    "Trzypiętrowa przestrzeń rekreacyjna na dachu",
    "Szklana zjeżdżalnia na wysokości 219 metrów",
    "Mieści najwyżej położoną restaurację w Dubaju",
    "Arcydzieło architektury zaprojektowane przez Skidmore, Owings & Merrill"
  ];

  const galleryImages = [
    '/images/address-sky-view-1.jpg',
    '/images/address-sky-view-2.jpg',
    '/images/address-sky-view-3.jpg',
    '/images/address-sky-view-4.jpg',
    '/images/address-sky-view-5.jpg',
    '/images/address-sky-view-6.jpg'
  ];

  const ticketOptions = [
    {
      name: "Punkt Obserwacyjny Sky Views",
      price: "85 AED",
      includes: [
        "Dostęp do platformy widokowej",
        "Doświadczenie szklanej podłogi",
        "Możliwości robienia zdjęć",
        "Interaktywne atrakcje"
      ],
      link: "#"
    },
    {
      name: "Spacer Krawędzią Sky Views",
      price: "225 AED",
      includes: [
        "Spacer z przewodnikiem po krawędzi",
        "Sprzęt bezpieczeństwa",
        "Profesjonalne zdjęcia",
        "Certyfikat ukończenia"
      ],
      link: "#"
    },
    {
      name: "Szklana Zjeżdżalnia Sky Views",
      price: "125 AED",
      includes: [
        "Dostęp do punktu obserwacyjnego",
        "Przejazd szklaną zjeżdżalnią",
        "Zdjęcia cyfrowe",
        "Instruktaż bezpieczeństwa"
      ],
      link: "#"
    }
  ];

  const mainAttractions = [
    {
      title: "Punkt Obserwacyjny Sky Views",
      description: "Platforma widokowa ze szklaną podłogą oferująca widok 360 stopni na panoramę Dubaju z poziomu 52."
    },
    {
      title: "Spacer Krawędzią",
      description: "Ekscytujący spacer na zewnątrz budynku z uprzężą bezpieczeństwa na wysokości 219,5 metrów."
    },
    {
      title: "Szklana Zjeżdżalnia",
      description: "Przezroczysta zjeżdżalnia łącząca poziom 53 z poziomem 52, oferująca wyjątkową perspektywę miasta."
    },
    {
      title: "Basen bez krawędzi",
      description: "Najwyżej położony basen infinity oferujący spektakularne widoki na Downtown Dubai i okolicę."
    },
    {
      title: "Restauracje i Lounge",
      description: "Różnorodne lokale gastronomiczne, w tym restauracja z panoramicznym widokiem."
    },
    {
      title: "Taras Widokowy",
      description: "Platforma widokowa na świeżym powietrzu, idealna do fotografii i podziwiania miasta."
    }
  ];

  const practicalInfo = [
    {
      icon: <FaBus className="text-2xl text-gold-500" />,
      title: "Jak dotrzeć",
      details: "Znajduje się w Downtown Dubai. Najbliższa stacja metra to Burj Khalifa/Dubai Mall, następnie krótki spacer lub przejazd taksówką."
    },
    {
      icon: <FaParking className="text-2xl text-gold-500" />,
      title: "Parking",
      details: "Dostępny parking z obsługą i samoobsługowy w budynku. Bezpośredni dostęp do parkingu z Downtown Dubai."
    },
    {
      icon: <FaWheelchair className="text-2xl text-gold-500" />,
      title: "Dostępność",
      details: "Obiekt jest w pełni dostępny dla osób niepełnosprawnych. Windy i udogodnienia dostępne na wszystkich poziomach."
    },
    {
      icon: <FaCamera className="text-2xl text-gold-500" />,
      title: "Fotografia",
      details: "Dozwolone robienie zdjęć na własny użytek. Dostępne specjalne punkty do zdjęć z profesjonalnym oświetleniem."
    }
  ];

  const facilities = [
    {
      icon: <FaSwimmingPool className="text-3xl text-gold-500" />,
      name: "Basen Infinity"
    },
    {
      icon: <FaGlassMartini className="text-3xl text-gold-500" />,
      name: "Restauracje i Bary"
    },
    {
      icon: <FaHotel className="text-3xl text-gold-500" />,
      name: "Hotel Butikowy"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/address-sky-view.jpg"
          alt="Address Sky View"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Address Sky View</h1>
            <p className="text-xl">Spektakularne widoki i niezapomniane wrażenia</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <FaClock className="text-blue-500 text-2xl mb-3" />
            <h3 className="font-semibold mb-2">Godziny otwarcia</h3>
            <p>10:00 - 22:00 (Nd-Śr)<br />10:00 - 24:00 (Czw-Sob)</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <FaTicketAlt className="text-blue-500 text-2xl mb-3" />
            <h3 className="font-semibold mb-2">Bilety</h3>
            <p>Od 85 AED</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <FaMapMarkerAlt className="text-blue-500 text-2xl mb-3" />
            <h3 className="font-semibold mb-2">Lokalizacja</h3>
            <p>Downtown Dubai</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <FaStar className="text-blue-500 text-2xl mb-3" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p>4.7/5</p>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">O Address Sky View</h2>
          <p className="text-lg mb-6">
            Address Sky View to imponujący kompleks składający się z dwóch wież połączonych spektakularną platformą widokową. 
            To jedno z najbardziej ekscytujących miejsc w Dubaju, oferujące niezapomniane doświadczenia i panoramiczne widoki na miasto.
          </p>
          <p className="text-lg mb-6">
            Kompleks oferuje wiele wyjątkowych atrakcji, w tym punkt obserwacyjny ze szklaną podłogą, ekscytującą szklaną zjeżdżalnię 
            oraz odważny spacer po krawędzi budynku. Dodatkowo, znajdziesz tu najwyżej położony basen bez krawędzi oraz ekskluzywne 
            restauracje i bary.
          </p>
        </div>

        {/* Ticket Options */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Opcje biletów</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ticketOptions.map((option, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-3">{option.name}</h3>
                <p className="text-2xl text-blue-500 mb-4">{option.price}</p>
                <ul className="space-y-2">
                  {option.includes.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <FaInfoCircle className="text-blue-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Main Attractions */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">Główne atrakcje</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainAttractions.map((attraction, index) => (
              <div key={index} className="border-b md:border-b-0 md:border-r border-gray-200 last:border-0 p-4">
                <h3 className="text-xl font-semibold mb-2">{attraction.title}</h3>
                <p>{attraction.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-blue-50 rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">Ciekawostki</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {funFacts.map((fact, index) => (
              <div key={index} className="flex items-start">
                <FaHistory className="text-blue-500 mt-1 mr-3" />
                <p>{fact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Practical Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">Informacje praktyczne</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practicalInfo.map((info, index) => (
              <div key={index} className="flex items-start">
                <div className="mr-4">{info.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                  <p>{info.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Udogodnienia</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 flex items-center">
                {facility.icon}
                <span className="ml-4 text-lg">{facility.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Galeria</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative h-64 rounded-xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={image}
                  alt={`Address Sky View ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* GetYourGuide Widget */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div data-gyg-href="https://widget.getyourguide.com/default/activities.frame" 
               data-gyg-locale-code="pl-PL" 
               data-gyg-widget="activities" 
               data-gyg-number-of-items="8" 
               data-gyg-cmp="kd-attracion" 
               data-gyg-partner-id="19WQ75B" 
               data-gyg-q="dubaj">
            <span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/dubai-l173/">GetYourGuide</a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressSkyViewPage;
