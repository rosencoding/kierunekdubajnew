import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaTicketAlt, FaButterfly, FaCamera } from 'react-icons/fa';

const DubaiButterflyGarden = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black">
        <img
          src="/images/attractions/dubai-butterfly-garden.jpg"
          alt="Dubai Butterfly Garden"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Dubai Butterfly Garden
            </h1>
            <p className="text-xl text-white mb-8">
              World's Largest Covered Butterfly Garden
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="https://www.dubaibutterflygarden.com/tickets"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-full text-lg transition-colors inline-flex items-center gap-2"
              >
                <FaTicketAlt />
                <span>Book Tickets</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <FaButterfly className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Butterfly Species</h3>
            <p className="text-gray-600">Over 50 different species</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <FaCalendarAlt className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
            <p className="text-gray-600">9:00 AM - 6:00 PM</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <FaStar className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Rating</h3>
            <p className="text-gray-600">4.5/5 from visitors</p>
          </motion.div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">About Dubai Butterfly Garden</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Dubai Butterfly Garden is a magical sanctuary that brings together nature, education, and entertainment. As the world's largest covered butterfly garden, it provides visitors with a unique opportunity to witness thousands of butterflies in a carefully maintained environment. The garden features custom-built climate-controlled domes that house butterflies from around the globe, along with educational facilities and beautiful landscaping.
          </p>
          <div className="flex items-center gap-2 text-gray-600">
            <FaMapMarkerAlt className="text-primary" />
            <span>Al Barsha South 3 - Dubai - United Arab Emirates</span>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center gap-4 mb-6">
              <FaHistory className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">History</h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Dubai Butterfly Garden opened its doors in 2015 as part of Dubai's vision to create unique tourist attractions. The garden was designed to provide visitors with a year-round butterfly experience, regardless of the external weather conditions.
              </p>
              <p>
                The project required extensive research and planning to create the perfect environment for butterflies to thrive in Dubai's desert climate. The garden's climate-controlled domes maintain ideal temperature and humidity levels throughout the year.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center gap-4 mb-6">
              <FaInfoCircle className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Highlights</h2>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-2">
                <FaButterfly className="w-5 h-5 text-primary mt-1" />
                <span>Over 15,000 butterflies from 50 different species</span>
              </li>
              <li className="flex items-start gap-2">
                <FaButterfly className="w-5 h-5 text-primary mt-1" />
                <span>10 custom-built climate-controlled domes</span>
              </li>
              <li className="flex items-start gap-2">
                <FaButterfly className="w-5 h-5 text-primary mt-1" />
                <span>Educational center and butterfly museum</span>
              </li>
              <li className="flex items-start gap-2">
                <FaButterfly className="w-5 h-5 text-primary mt-1" />
                <span>Interactive exhibits and guided tours</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Activities */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="flex items-center gap-4 mb-8">
            <FaCamera className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Things to Do</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Watch butterflies emerging from chrysalis",
              "Take guided educational tours",
              "Participate in feeding sessions",
              "Visit the butterfly museum",
              "Join photography workshops",
              "Explore themed gardens",
              "Learn about conservation",
              "Visit the souvenir shop",
              "Enjoy the koi ponds"
            ].map((activity, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-4 rounded-lg"
              >
                <p className="text-gray-600">{activity}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center gap-4 mb-8">
            <FaInfoCircle className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Fun Facts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "World's largest covered butterfly garden",
              "Houses over 15,000 butterflies",
              "Temperature maintained at 24-28°C",
              "Features 10 custom-built domes",
              "Each dome has unique species",
              "Includes museum and education center"
            ].map((fact, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-4 rounded-lg"
              >
                <p className="text-gray-600">{fact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DubaiButterflyGarden;
