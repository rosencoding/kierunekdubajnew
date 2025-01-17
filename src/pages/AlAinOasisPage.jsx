import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaTicketAlt, FaTree, FaCamera, FaExternalLinkAlt } from 'react-icons/fa';

const AlAinOasisPage = () => {
  const funFacts = [
    "UNESCO World Heritage Site since 2011",
    "Over 147,000 date palms",
    "Oldest oasis in UAE",
    "3,000-year-old irrigation system",
    "Covers 1,200 hectares",
    "Home to 100+ varieties of dates"
  ];

  const galleryImages = [
    '/images/al-ain-oasis-1.jpg',
    '/images/al-ain-oasis-2.jpg',
    '/images/al-ain-oasis-3.jpg',
    '/images/al-ain-oasis-4.jpg',
    '/images/al-ain-oasis-5.jpg',
    '/images/al-ain-oasis-6.jpg',
    '/images/al-ain-oasis-7.jpg',
    '/images/al-ain-oasis-8.jpg',
    '/images/al-ain-oasis.jpg'
  ];

  const attractions = [
    {
      title: "Eco-Centre",
      description: "Interactive exhibition space showcasing the history of UAE's agricultural heritage and the ancient falaj irrigation system."
    },
    {
      title: "Palm Plantations",
      description: "Vast groves of date palms cultivated using traditional farming methods, producing various types of dates."
    },
    {
      title: "Falaj System",
      description: "Ancient irrigation channels demonstrating the ingenious water distribution system that has sustained the oasis for millennia."
    }
  ];

  const experiences = [
    {
      title: "Guided Tour",
      description: "Educational oasis tour",
      price: "From AED 50"
    },
    {
      title: "Farming Demo",
      description: "Traditional agriculture",
      price: "From AED 75"
    },
    {
      title: "Nature Walk",
      description: "Self-guided trails",
      price: "Free"
    }
  ];

  const bookingOptions = [
    {
      title: "Standard Entry",
      description: "Access to oasis and eco-centre",
      price: "Free",
      link: "https://visitabudhabi.ae/al-ain-oasis"
    },
    {
      title: "Guided Experience",
      description: "Expert-led educational tour",
      price: "From AED 50",
      link: "https://visitabudhabi.ae/al-ain-oasis/tours"
    },
    {
      title: "Group Tour",
      description: "For 10+ people with guide",
      price: "From AED 40/person",
      link: "https://visitabudhabi.ae/al-ain-oasis/groups"
    }
  ];

  const activities = [
    "Walk shaded pathways",
    "Visit eco-centre",
    "Learn about falaj system",
    "Watch farming demos",
    "Take nature photos",
    "Join guided tours",
    "See date harvesting",
    "Explore palm groves",
    "Visit mini-museum"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/al-ain-oasis.jpg"
          alt="Al Ain Oasis"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Al Ain Oasis
            </h1>
            <p className="text-xl text-white/90 mb-8">
              A UNESCO World Heritage Site and Ancient Desert Garden
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="https://visitabudhabi.ae/al-ain-oasis"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2E5B3E] hover:bg-[#224730] text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg inline-flex items-center space-x-2"
              >
                <FaTicketAlt />
                <span>Plan Your Visit</span>
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
            <p className="text-gray-600">8:00 AM - 5:00 PM</p>
            <p className="text-gray-500 text-sm">Daily</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Entrance Fee</h3>
            <p className="text-gray-600">Free Entry</p>
            <p className="text-gray-500 text-sm">All Visitors</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaStar className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Rating</h3>
            <p className="text-gray-600">4.5/5 from visitors</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Address</h3>
            <p className="text-gray-600">Sultan Bin Zayed The First Street</p>
            <p className="text-gray-500 text-sm">Al Ain</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">About Al Ain Oasis</h2>
          <p className="text-gray-600 mb-6">
            Al Ain Oasis is a UNESCO World Heritage site and the largest of Al Ain's oases, covering 1,200 hectares in the heart of the city. This historic site features more than 147,000 date palms of 100+ varieties, some of which are still producing dates using traditional farming methods. The oasis is irrigated using the ancient falaj system, a network of underground channels that has sustained agriculture in the region for millennia.
          </p>
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
                  alt={`Al Ain Oasis - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Booking Options Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaExternalLinkAlt className="w-8 h-8 text-[#2E5B3E] mr-4" />
            <h2 className="text-3xl font-semibold">Book Experiences</h2>
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
                  <p className="text-[#2E5B3E] font-semibold mb-3">{option.price}</p>
                  <a
                    href={option.link}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-block bg-[#2E5B3E] text-white px-4 py-2 rounded-md hover:bg-[#224730] transition-colors"
                  >
                    Book Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-6">
            * Advance booking recommended for guided tours and group visits.
          </p>
        </div>

        {/* History Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaHistory className="w-8 h-8 text-[#2E5B3E] mr-4" />
            <h2 className="text-3xl font-semibold">History</h2>
          </div>
          <div className="space-y-4 text-gray-600">
            <p>
              The Al Ain Oasis has been continuously inhabited for more than 4,000 years, making it one of the world's oldest permanently inhabited settlements. The oasis played a crucial role in the development of the region, providing water and sustenance through its sophisticated falaj irrigation system.
            </p>
            <p>
              The traditional falaj system, which dates back to the Iron Age, demonstrates the ingenuity of ancient civilizations in managing scarce water resources in an arid environment. This system continues to function today, providing water to the oasis's thousands of palm trees.
            </p>
            <p>
              In 2011, Al Ain Oasis was inscribed as a UNESCO World Heritage site as part of the Cultural Sites of Al Ain, recognizing its outstanding universal value and historical significance.
            </p>
          </div>
        </div>

        {/* Attractions Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaTree className="w-8 h-8 text-[#2E5B3E] mr-4" />
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
            <FaCamera className="w-8 h-8 text-[#2E5B3E] mr-4" />
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
                <p className="text-sm text-[#2E5B3E] mt-4">{experience.price}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Activities Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaCalendarAlt className="w-8 h-8 text-[#2E5B3E] mr-4" />
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
            <FaInfoCircle className="w-8 h-8 text-[#2E5B3E] mr-4" />
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

export default AlAinOasisPage;
