import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaTicketAlt, FaCar, FaCamera, FaExternalLinkAlt } from 'react-icons/fa';

const EmiratesAutoMuseumPage = () => {
  const funFacts = [
    "Houses over 200 classic and unique vehicles",
    "Features world's largest truck - The Rainbow Sheikh Dodge Power Wagon",
    "Collection includes rare military vehicles",
    "Has the world's largest mobile home",
    "Displays Sheikh Hamad's personal collection",
    "Contains unique custom-built vehicles"
  ];

  const galleryImages = [
    '/images/emirates-auto-museum-1.jpg',
    '/images/emirates-auto-museum-2.jpg',
    '/images/emirates-auto-museum-3.jpg',
    '/images/emirates-auto-museum-4.jpg',
    '/images/emirates-auto-museum-5.jpg',
    '/images/emirates-auto-museum-6.jpg',
    '/images/emirates-auto-museum-7.jpg',
    '/images/emirates-auto-museum-8.jpg',
    '/images/emirates-auto-museum.jpg'
  ];

  const attractions = [
    {
      title: "Classic Car Collection",
      description: "An impressive collection of vintage and classic cars from different eras, including rare and unique models."
    },
    {
      title: "Giant Vehicles",
      description: "See the world's largest truck and other supersized vehicles that have set world records."
    },
    {
      title: "Military Vehicle Display",
      description: "Extensive collection of military vehicles showcasing the evolution of military transport."
    }
  ];

  const experiences = [
    {
      title: "Guided Tour",
      description: "Expert-led museum tour",
      price: "From AED 50"
    },
    {
      title: "Photo Session",
      description: "Photography permit",
      price: "From AED 30"
    },
    {
      title: "Group Visit",
      description: "Group tours available",
      price: "From AED 40/person"
    }
  ];

  const bookingOptions = [
    {
      title: "Standard Entry",
      description: "Access to all exhibits",
      price: "AED 50",
      link: "https://visitabudhabi.ae/emirates-auto-museum"
    },
    {
      title: "Guided Experience",
      description: "Tour with automotive expert",
      price: "From AED 100",
      link: "https://visitabudhabi.ae/emirates-auto-museum/tours"
    },
    {
      title: "Group Package",
      description: "For 10+ visitors",
      price: "From AED 40/person",
      link: "https://visitabudhabi.ae/emirates-auto-museum/groups"
    }
  ];

  const activities = [
    "View classic cars",
    "See giant vehicles",
    "Explore military collection",
    "Take guided tour",
    "Photography sessions",
    "Learn car history",
    "View custom builds",
    "See record holders",
    "Visit gift shop"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/emirates-auto-museum.jpg"
          alt="Emirates National Auto Museum"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Emirates National Auto Museum
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Home to Sheikh Hamad's Remarkable Vehicle Collection
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="https://visitabudhabi.ae/emirates-auto-museum"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C8102E] hover:bg-[#A00D24] text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg inline-flex items-center space-x-2"
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
            <p className="text-gray-600">9:00 AM - 5:00 PM</p>
            <p className="text-gray-500 text-sm">Closed on Mondays</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Entrance Fee</h3>
            <p className="text-gray-600">AED 50</p>
            <p className="text-gray-500 text-sm">Children under 10: Free</p>
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
            <p className="text-gray-600">Al Ain - Abu Dhabi Road</p>
            <p className="text-gray-500 text-sm">Nahel, Abu Dhabi</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">About Emirates National Auto Museum</h2>
          <p className="text-gray-600 mb-6">
            The Emirates National Auto Museum is a unique attraction showcasing the private collection of Sheikh Hamad Bin Hamdan Al Nahyan, also known as the 'Rainbow Sheikh'. The museum houses over 200 vehicles, including classic cars, military vehicles, and custom-built giants that have set world records. The centerpiece is the world's largest truck - a replica of a 1950s Dodge Power Wagon built at eight times the original scale.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <FaMapMarkerAlt className="text-[#C8102E]" />
            <span className="text-gray-600">
              Al Ain Road (E65), 45km south of Abu Dhabi City
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
                  alt={`Emirates Auto Museum - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Booking Options Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaExternalLinkAlt className="w-8 h-8 text-[#C8102E] mr-4" />
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
                  <p className="text-[#C8102E] font-semibold mb-3">{option.price}</p>
                  <a
                    href={option.link}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-block bg-[#C8102E] text-white px-4 py-2 rounded-md hover:bg-[#A00D24] transition-colors"
                  >
                    Book Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-6">
            * Photography permits required for professional photography.
          </p>
        </div>

        {/* History Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaHistory className="w-8 h-8 text-[#C8102E] mr-4" />
            <h2 className="text-3xl font-semibold">History</h2>
          </div>
          <div className="space-y-4 text-gray-600">
            <p>
              The Emirates National Auto Museum was established by Sheikh Hamad Bin Hamdan Al Nahyan to showcase his extensive personal collection of vehicles. Known worldwide as the 'Rainbow Sheikh' due to his famous collection of Mercedes cars in different colors, Sheikh Hamad has been collecting unique vehicles for decades.
            </p>
            <p>
              The museum's iconic pyramid structure has become a landmark in the desert landscape south of Abu Dhabi. Inside, visitors can find everything from classic American cars to custom-built giants that have earned places in the Guinness World Records.
            </p>
            <p>
              The collection continues to grow and evolve, with new additions regularly joining the impressive display of automotive history and innovation.
            </p>
          </div>
        </div>

        {/* Attractions Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaCar className="w-8 h-8 text-[#C8102E] mr-4" />
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
            <FaCamera className="w-8 h-8 text-[#C8102E] mr-4" />
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
                <p className="text-sm text-[#C8102E] mt-4">{experience.price}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Activities Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaCalendarAlt className="w-8 h-8 text-[#C8102E] mr-4" />
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
            <FaInfoCircle className="w-8 h-8 text-[#C8102E] mr-4" />
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

export default EmiratesAutoMuseumPage;
