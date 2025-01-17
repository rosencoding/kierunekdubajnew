import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaShoppingBag, FaUtensils, FaTheaterMasks, FaTicketAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DubaiMallPage = () => {
  const funFacts = [
    "Dubai Mall to największe centrum handlowe na świecie pod względem całkowitej powierzchni",
    "Odwiedza je więcej osób rocznie niż Nowy Jork czy Los Angeles",
    "Akwarium w Dubai Mall mieści 10 milionów litrów wody",
    "W centrum znajduje się ponad 1200 sklepów",
    "Parking może pomieścić ponad 14 000 pojazdów",
    "Całkowita powierzchnia centrum handlowego odpowiada 50 boiskom piłkarskim"
  ];

  const galleryImages = [
    '/images/dubai-mall-1.jpg',
    '/images/dubai-mall-2.jpg',
    '/images/dubai-mall-3.jpg',
    '/images/dubai-mall-4.jpg',
    '/images/dubai-mall-5.jpg',
    '/images/dubai-mall.jpg'
  ];

  const attractions = [
    {
      title: "Dubai Aquarium & Underwater Zoo",
      description: "Jedno z największych podwieszanych akwariów na świecie z tysiącami morskich stworzeń i 270-stopniowym tunelem. Możesz tu doświadczyć wyjątkowych podwodnych spotkań i rejsów łodzią ze szklanym dnem.",
      link: "/atrakcje/dubai-aquarium"
    },
    {
      title: "Dubai Ice Rink",
      description: "Lodowisko o olimpijskich wymiarach oferujące publiczne sesje łyżwiarskie, lekcje i spektakularne pokazy na lodzie. Organizowane są tu również wieczory disco i tematyczne."
    },
    {
      title: "VR Park",
      description: "Największy park wirtualnej rzeczywistości w regionie, zajmujący dwa piętra, z najnowocześniejszymi atrakcjami VR i grami odpowiednimi dla wszystkich grup wiekowych."
    }
  ];

  const shoppingCategories = [
    {
      title: "Fashion Avenue",
      description: "Miejsce skupiające światowej sławy marki modowe i luksusowych projektantów, z ekskluzywnymi butikami i najnowszymi kolekcjami."
    },
    {
      title: "The Souk",
      description: "Tradycyjna arabska strefa handlowa z biżuterią, akcesoriami i tradycyjnym rękodziełem, charakteryzująca się wyjątkową architekturą."
    },
    {
      title: "Level Shoes",
      description: "Największy sklep obuwniczy na świecie o powierzchni 96 000 stóp kwadratowych, oferujący wyselekcjonowaną kolekcję obuwia designerskiego."
    },
    {
      title: "Elektronika i Rozrywka",
      description: "Flagowe sklepy głównych marek technologicznych, strefy gier i największa księgarnia w regionie."
    }
  ];

  const activities = [
    "Oglądanie pokazów Dubai Fountain z różnych punktów widokowych",
    "Wizyta w Dubai Aquarium & Underwater Zoo",
    "Jazda na łyżwach w Dubai Ice Rink",
    "Doświadczanie wirtualnej rzeczywistości w VR Park",
    "Odkrywanie luksusowych butików w Fashion Avenue",
    "Posiłek w jednej z ponad 200 restauracji i kawiarni",
    "Seans filmowy w Reel Cinemas",
    "Zdjęcia ze szkieletem Dubai Dino",
    "Zakupy w największym sklepie ze słodyczami na świecie"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/dubai-mall.jpg"
          alt="The Dubai Mall"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Dubai Mall</h1>
            <p className="text-xl">Największe centrum handlowo-rozrywkowe na świecie</p>
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
            <p>10:00 - 24:00 (Nd-Śr)</p>
            <p>10:00 - 01:00 (Czw-Sob)</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <FaTicketAlt className="text-blue-500 text-2xl mb-3" />
            <h3 className="font-semibold mb-2">Wstęp</h3>
            <p>Bezpłatny</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <FaMapMarkerAlt className="text-blue-500 text-2xl mb-3" />
            <h3 className="font-semibold mb-2">Lokalizacja</h3>
            <p>Financial Center Road, Downtown Dubai</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <FaStar className="text-blue-500 text-2xl mb-3" />
            <h3 className="font-semibold mb-2">Ocena</h3>
            <p>4.7/5</p>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">O Dubai Mall</h2>
          <p className="text-gray-600 mb-6">
          Dubai Mall to gigantyczne centrum handlowe i rozrywkowe w sercu Downtown Dubai, uważane za jedno z największych i najczęściej odwiedzanych na świecie. Znajduje się tu ponad 1200 różnych sklepów. Największe atrakcje to Dubai Aquarium & Underwater Zoo, gdzie można podziwiać bogactwo podwodnego życia, oraz Dubai Ice Rink, idealne miejsce do jazdy na łyżwach. Dodatkowo, centrum oferuje VR Park, gdzie technologia wirtualnej rzeczywistości dostarcza niezapomnianych wrażeń, oraz Dubai Dino, ekspozycję z ogromnym szkieletem dinozaura. Warto również wspomnieć o Dubai Fountain, fontannach znajdujących się przed Burj Khalifa, które oferują spektakularne pokazy wody, muzyki i światła, synchronizowane do muzyki, z wodą wystrzeliwującą na wysokość do 150 metrów. Poza zakupami i atrakcjami, Dubai Mall jest pełen kawiarni, restauracji oraz kin, co sprawia, że jest to miejsce, gdzie każdy znajdzie coś dla siebie, niezależnie od wieku czy zainteresowań. </p>
        </div>

        {/* Attractions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Główne atrakcje</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {attraction.link ? (
                    <Link to={attraction.link} className="text-blue-600 hover:text-blue-800">
                      {attraction.title}
                    </Link>
                  ) : (
                    attraction.title
                  )}
                </h3>
                <p className="text-gray-600">{attraction.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Galeria</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="rounded-xl overflow-hidden h-64 shadow-md"
              >
                <img
                  src={image}
                  alt={`Dubai Mall - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Shopping */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Strefy zakupowe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shoppingCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Co można robić</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activities.map((activity, index) => (
              <li key={index} className="flex items-start">
                <FaInfoCircle className="text-blue-500 mt-1 mr-3" />
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Fun Facts */}
        <div className="bg-blue-50 rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Ciekawostki</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {funFacts.map((fact, index) => (
              <li key={index} className="flex items-start">
                <FaHistory className="text-blue-500 mt-1 mr-3" />
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* GetYourGuide Widget */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Sprawdź również</h2>
          <div
            data-gyg-href="https://widget.getyourguide.com/default/activities.frame"
            data-gyg-locale-code="en-US"
            data-gyg-widget="activities"
            data-gyg-number-of-items="8"
            data-gyg-partner-id="19WQ75B"
            data-gyg-q="dubai"
          >
            <span>
              Powered by{" "}
              <a
                target="_blank"
                rel="sponsored"
                href="https://www.getyourguide.com/dubai-l173/"
              >
                GetYourGuide
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DubaiMallPage;
