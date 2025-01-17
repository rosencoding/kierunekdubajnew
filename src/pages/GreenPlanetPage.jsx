import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaBus, FaParking, FaWheelchair, FaCamera, FaLeaf, FaTree, FaPaw } from 'react-icons/fa';

const GreenPlanetPage = () => {
  const funFacts = [
    "Houses over 3,000 plants and animals",
    "Features world's largest indoor man-made tree",
    "Home to free-flying tropical birds",
    "Maintains rainforest humidity levels",
    "4-story biodome structure",
    "Self-sustaining ecosystem",
    "Houses rare species of flora",
    "Interactive educational exhibits"
  ];

  const galleryImages = [
    '/images/green-planet-1.jpg',
    '/images/green-planet-2.jpg',
    '/images/green-planet-3.jpg',
    '/images/green-planet-4.jpg',
    '/images/green-planet-5.jpg',
    '/images/green-planet-6.jpg'
  ];

  const experiences = [
    {
      name: "General Admission",
      price: "From AED 110",
      includes: [
        "Access to all levels",
        "Interactive exhibits",
        "Animal encounters",
        "Educational talks"
      ],
      link: "#"
    },
    {
      name: "VIP Experience",
      price: "From AED 299",
      includes: [
        "Private tour guide",
        "Behind the scenes access",
        "Animal feeding session",
        "Souvenir photo"
      ],
      link: "#"
    },
    {
      name: "Educational Program",
      price: "From AED 150",
      includes: [
        "Guided learning tour",
        "Workshop activities",
        "Educational materials",
        "Certificate"
      ],
      link: "#"
    }
  ];

  const mainAttractions = [
    {
      title: "The Living Tree",
      description: "World's largest indoor artificial tree hosting diverse plant species and wildlife."
    },
    {
      title: "Flooded Rainforest",
      description: "Multi-level habitat showcasing aquatic life and tropical plants."
    },
    {
      title: "Australian Walkabout",
      description: "Exhibition featuring unique Australian wildlife and vegetation."
    },
    {
      title: "Butterfly Garden",
      description: "Home to various species of free-flying tropical butterflies."
    },
    {
      title: "Night Life",
      description: "Special exhibit showcasing nocturnal rainforest creatures."
    },
    {
      title: "Interactive Zone",
      description: "Hands-on educational area with interactive displays and activities."
    }
  ];

  const practicalInfo = [
    {
      icon: <FaBus className="text-2xl text-gold-500" />,
      title: "Getting There",
      details: "Located in City Walk. Accessible by car, taxi, or bus. Close to Al Wasl Road."
    },
    {
      icon: <FaParking className="text-2xl text-gold-500" />,
      title: "Parking",
      details: "Free parking available at City Walk. Dedicated parking area for The Green Planet visitors."
    },
    {
      icon: <FaWheelchair className="text-2xl text-gold-500" />,
      title: "Accessibility",
      details: "Fully wheelchair accessible. Elevators available to all levels."
    },
    {
      icon: <FaCamera className="text-2xl text-gold-500" />,
      title: "Photography",
      details: "Photography allowed. No flash photography near animals."
    }
  ];

  const history = [
    {
      year: "2016",
      event: "Opening of The Green Planet"
    },
    {
      year: "2017",
      event: "Introduction of Australian wildlife exhibit"
    },
    {
      year: "2018",
      event: "Launch of educational programs"
    },
    {
      year: "2020",
      event: "Addition of new species"
    },
    {
      year: "2022",
      event: "Expansion of interactive zones"
    },
    {
      year: "2023",
      event: "New nocturnal exhibit opening"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/green-planet.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">The Green Planet Dubai</h1>
            <p className="text-xl mb-8">Discover Dubai's Indoor Rainforest</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              Book Tickets
            </motion.button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaClock className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Opening Hours</h3>
            <p className="text-gray-600">10:00 AM - 6:00 PM</p>
            <p className="text-gray-500 text-sm">Open daily</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Address</h3>
            <p className="text-gray-600">City Walk</p>
            <p className="text-gray-500 text-sm">Al Wasl, Dubai</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Entry Fee</h3>
            <p className="text-gray-600">From AED 145</p>
            <p className="text-gray-500 text-sm">per person</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaStar className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Rating</h3>
            <p className="text-gray-600">4.5/5</p>
            <p className="text-gray-500 text-sm">from visitors</p>
          </motion.div>
        </div>

        {/* About Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">About The Green Planet</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-6">
              The Green Planet is Dubai's only indoor rainforest, housing over 3,000 species of plants, animals, and birds. This unique bio-dome recreates the enchanting world of a tropical forest with its rich biodiversity and natural ecosystem.
            </p>
            <p className="text-gray-600">
              The centerpiece is an enormous artificial tree, which stands as the largest indoor man-made and life-sustaining tree in the world. The facility spans four levels, each representing a different layer of the rainforest, from the canopy to the forest floor.
            </p>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative h-64 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  src={image}
                  alt={`Green Planet Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Experiences */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Visit Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiences.map((experience, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                <h3 className="text-xl font-bold mb-2">{experience.name}</h3>
                <p className="text-2xl text-gold-500 font-bold mb-4">{experience.price}</p>
                <ul className="mb-6 flex-grow">
                  {experience.includes.map((item, i) => (
                    <li key={i} className="mb-2 flex items-center">
                      <FaStar className="text-gold-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={experience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 px-6 rounded-full text-center block transition-colors"
                  >
                    Book Now
                  </a>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Attractions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mainAttractions.map((attraction, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold mb-2">{attraction.title}</h3>
                <p className="text-gray-600">{attraction.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* History Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <FaHistory className="mr-3 text-gold-500" />
            History & Evolution
          </h2>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {history.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gold-500 mb-2">{item.year}</h3>
                  <p className="text-gray-600">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Practical Information */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Practical Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practicalInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
                {info.icon}
                <div>
                  <h3 className="font-bold mb-2">{info.title}</h3>
                  <p className="text-gray-600">{info.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Fun Facts</h2>
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

        {/* Visitor Tips */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Visitor Tips</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <FaCalendarAlt className="text-gold-500 mt-1" />
                <p className="text-gray-600">Visit on weekdays for fewer crowds</p>
              </div>
              <div className="flex items-start space-x-3">
                <FaLeaf className="text-gold-500 mt-1" />
                <p className="text-gray-600">Join guided tours for best experience</p>
              </div>
              <div className="flex items-start space-x-3">
                <FaTree className="text-gold-500 mt-1" />
                <p className="text-gray-600">Book animal encounters in advance</p>
              </div>
              <div className="flex items-start space-x-3">
                <FaPaw className="text-gold-500 mt-1" />
                <p className="text-gray-600">Check feeding times before visit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenPlanetPage;
