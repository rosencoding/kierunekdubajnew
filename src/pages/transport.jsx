import React from 'react';
import { motion } from 'framer-motion';
import { FaCreditCard, FaSubway, FaBus, FaShip, FaGraduationCap, FaUserTie, FaWheelchair, FaInfoCircle, FaExclamationTriangle, FaClock } from 'react-icons/fa';

const TransportPage = () => {
  const cardTypes = [
    {
      name: "Srebrna (Standardowa)",
      icon: <FaCreditCard className="text-gray-400" />,
      description: "Najbardziej popularna karta dla turystów i mieszkańców",
      recommended: true
    },
    {
      name: "Złota (Premium)",
      icon: <FaCreditCard className="text-yellow-500" />,
      description: "Karta premium z dostępem do złotej klasy w metrze"
    },
    {
      name: "Niebieska (Studencka)",
      icon: <FaGraduationCap className="text-blue-500" />,
      description: "Specjalna karta ze zniżkami dla studentów"
    },
    {
      name: "Czerwona (Specjalna)",
      icon: <FaWheelchair className="text-red-500" />,
      description: "Dla seniorów i osób niepełnosprawnych"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <img
          src="/images/dubai-metro.jpg"
          alt="Dubai Metro"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Transport w Dubaju
            </h1>
            <p className="text-xl text-white/90">
              Wszystko co musisz wiedzieć o poruszaniu się po mieście
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* NOL Card Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaCreditCard className="w-8 h-8 text-blue-500 mr-4" />
            <h2 className="text-3xl font-semibold">Karta NOL</h2>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
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
                {cardTypes.map((card, index) => (
                  <div key={index} className={`relative bg-white rounded-xl shadow p-6 border-2 ${card.recommended ? 'border-blue-500' : 'border-gray-100'}`}>
                    {card.recommended && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
                          Polecana dla turystów
                        </span>
                      </div>
                    )}
                    <div className="flex items-center mb-4">
                      <div className="text-2xl mr-3">{card.icon}</div>
                      <h4 className="font-semibold">{card.name}</h4>
                    </div>
                    <p className="text-gray-600 text-sm">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Use */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportPage;
