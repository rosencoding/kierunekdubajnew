import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaTicketAlt, FaShoppingBag, FaCamera, FaExternalLinkAlt, FaParking } from 'react-icons/fa';

const AbuDhabiMallPage = () => {
  const funFacts = [
    "Over 200 retail outlets",
    "Multi-screen cinema complex",
    "Traditional and modern shopping mix",
    "Connected to Beach Rotana Hotel",
    "One of Abu Dhabi's first modern malls",
    "Features an indoor entertainment zone"
  ];

  const galleryImages = [
    '/images/abu-dhabi-mall-1.jpg',
    '/images/abu-dhabi-mall-2.jpg',
    '/images/abu-dhabi-mall-3.jpg',
    '/images/abu-dhabi-mall-4.jpg',
    '/images/abu-dhabi-mall-5.jpg',
    '/images/abu-dhabi-mall-6.jpg',
    '/images/abu-dhabi-mall-7.jpg',
    '/images/abu-dhabi-mall-8.jpg',
    '/images/abu-dhabi-mall.jpg'
  ];

  const attractions = [
    {
      title: "Retail Stores",
      description: "Wide range of international and local brands offering fashion, electronics, home goods, and more."
    },
    {
      title: "Entertainment Zone",
      description: "Family entertainment center with arcade games, rides, and activities for children of all ages."
    },
    {
      title: "Dining Options",
      description: "Diverse selection of restaurants and cafes serving local and international cuisine, from fast food to fine dining."
    }
  ];

  const experiences = [
    {
      title: "Shopping",
      description: "International brands",
      price: "Various prices"
    },
    {
      title: "Entertainment",
      description: "Family activities",
      price: "From AED 20"
    },
    {
      title: "Dining",
      description: "Multiple cuisines",
      price: "Various prices"
    }
  ];

  const bookingOptions = [
    {
      title: "Cinema Tickets",
      description: "Latest movies and shows",
      price: "From AED 35",
      link: "https://uae.voxcinemas.com"
    },
    {
      title: "Entertainment Zone",
      description: "Family fun activities",
      price: "From AED 50",
      link: "https://abudhabi-mall.com/entertainment"
    },
    {
      title: "Restaurant Reservations",
      description: "Various dining options",
      price: "Various prices",
      link: "https://abudhabi-mall.com/dining"
    }
  ];

  const activities = [
    "Shop at retail stores",
    "Watch movies",
    "Play arcade games",
    "Dine at restaurants",
    "Visit beauty salons",
    "Browse electronics",
    "Shop for fashion",
    "Get spa treatments",
    "Visit specialty stores"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/abu-dhabi-mall.jpg"
          alt="Abu Dhabi Mall"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Abu Dhabi Mall
            </h1>
            <p className="text-xl text-white/90 mb-8">
              A Premier Shopping and Entertainment Destination
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="https://abudhabi-mall.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4A90E2] hover:bg-[#357ABD] text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg inline-flex items-center space-x-2"
              >
                <FaShoppingBag />
                <span>Explore Shops</span>
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
            <h3 className="font-semibold mb-2">Opening Hours</h3>
            <p className="text-gray-600">10:00 AM - 10:00 PM</p>
            <p className="text-gray-500 text-sm">Daily</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaParking className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Parking</h3>
            <p className="text-gray-600">Free Parking</p>
            <p className="text-gray-500 text-sm">2,500+ Spaces</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaStar className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Rating</h3>
            <p className="text-gray-600">4.4/5 from visitors</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Address</h3>
            <p className="text-gray-600">Tourist Club Area</p>
            <p className="text-gray-500 text-sm">Abu Dhabi</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">About Abu Dhabi Mall</h2>
          <p className="text-gray-600 mb-6">
            Abu Dhabi Mall is one of the capital's most popular shopping destinations, offering a perfect blend of retail, dining, and entertainment options. With over 200 stores featuring international and local brands, a multi-screen cinema complex, and a variety of dining outlets, the mall caters to all ages and interests. Connected to the Beach Rotana Hotel, it's conveniently located in the heart of Abu Dhabi's business district.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <FaMapMarkerAlt className="text-[#4A90E2]" />
            <span className="text-gray-600">
              Tourist Club Area (Al Zahiyah), Abu Dhabi, United Arab Emirates
            </span>
          </div>
        </div>

        {/* Gallery */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="rounded-xl overflow-hidden h-64"
              >
                <img
                  src={image}
                  alt={`Abu Dhabi Mall - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Booking Options Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaExternalLinkAlt className="w-8 h-8 text-[#4A90E2] mr-4" />
            <h2 className="text-3xl font-semibold">Entertainment & Dining</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bookingOptions.map((option, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-xl h-full flex flex-col"
              >
                <h3 className="font-semibold text-xl mb-4">{option.title}</h3>
                <p className="text-gray-600 flex-grow">{option.description}</p>
                <div className="mt-4">
                  <p className="text-[#4A90E2] font-semibold mb-3">{option.price}</p>
                  <a
                    href={option.link}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-block bg-[#4A90E2] text-white px-4 py-2 rounded-md hover:bg-[#357ABD] transition-colors"
                  >
                    Book Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-6">
            * Prices and availability may vary. Check individual outlets for specific timings.
          </p>
        </div>

        {/* History Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaHistory className="w-8 h-8 text-[#4A90E2] mr-4" />
            <h2 className="text-3xl font-semibold">History</h2>
          </div>
          <div className="space-y-4 text-gray-600">
            <p>
              Abu Dhabi Mall opened its doors in 2001 as one of the capital's first modern shopping centers. Since then, it has established itself as a key retail and entertainment destination in the heart of Abu Dhabi.
            </p>
            <p>
              The mall has undergone several renovations and expansions over the years to keep up with changing consumer preferences and retail trends. Its connection to the Beach Rotana Hotel has made it a popular destination for both tourists and residents.
            </p>
            <p>
              Today, it continues to evolve with new brands and entertainment options being added regularly to enhance the shopping experience for visitors.
            </p>
          </div>
        </div>

        {/* Attractions Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaShoppingBag className="w-8 h-8 text-[#4A90E2] mr-4" />
            <h2 className="text-3xl font-semibold">Key Features</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-xl h-full flex flex-col"
              >
                <h3 className="font-semibold text-xl mb-4">{attraction.title}</h3>
                <p className="text-gray-600 flex-grow">{attraction.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experiences Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaCamera className="w-8 h-8 text-[#4A90E2] mr-4" />
            <h2 className="text-3xl font-semibold">Experiences</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-xl h-full flex flex-col"
              >
                <h3 className="font-semibold text-xl mb-4">{experience.title}</h3>
                <p className="text-gray-600 flex-grow">{experience.description}</p>
                <p className="text-sm text-[#4A90E2] mt-4">{experience.price}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Activities Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaCalendarAlt className="w-8 h-8 text-[#4A90E2] mr-4" />
            <h2 className="text-3xl font-semibold">Things to Do</h2>
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

        {/* Fun Facts */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaInfoCircle className="w-8 h-8 text-[#4A90E2] mr-4" />
            <h2 className="text-3xl font-semibold">Fun Facts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-4 rounded-lg"
              >
                <p className="text-gray-600">• {fact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbuDhabiMallPage;
