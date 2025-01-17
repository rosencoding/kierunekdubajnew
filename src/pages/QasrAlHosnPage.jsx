import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaInfoCircle, FaHistory, FaTicketAlt, FaLandmark, FaCamera, FaExternalLinkAlt } from 'react-icons/fa';

const QasrAlHosnPage = () => {
  const funFacts = [
    "Oldest stone building in Abu Dhabi",
    "Originally built as a watchtower in the 1760s",
    "Served as the residence of the ruling family",
    "Contains the Cultural Foundation building",
    "Features traditional coral and sea stone architecture",
    "Houses rare historical photographs and artifacts"
  ];

  const galleryImages = [
    '/images/qasr-al-hosn-1.jpg',
    '/images/qasr-al-hosn-2.jpg',
    '/images/qasr-al-hosn-3.jpg',
    '/images/qasr-al-hosn-4.jpg',
    '/images/qasr-al-hosn-5.jpg',
    '/images/qasr-al-hosn-6.jpg',
    '/images/qasr-al-hosn-7.jpg',
    '/images/qasr-al-hosn-8.jpg',
    '/images/qasr-al-hosn.jpg'
  ];

  const attractions = [
    {
      title: "The Fort",
      description: "Explore the historic fort structure, featuring traditional architecture and defensive features that protected Abu Dhabi for centuries."
    },
    {
      title: "House of Artisans",
      description: "Discover traditional Emirati crafts and watch artisans demonstrate ancient techniques in weaving, palm braiding, and more."
    },
    {
      title: "Cultural Foundation",
      description: "Visit this modernist landmark offering art exhibitions, a theater, and a library dedicated to preserving UAE's cultural heritage."
    }
  ];

  const experiences = [
    {
      title: "Guided Tour",
      description: "90-minute tour of the historic fort",
      price: "From AED 60"
    },
    {
      title: "Artisan Workshops",
      description: "Traditional craft demonstrations",
      price: "From AED 45"
    },
    {
      title: "Exhibition Access",
      description: "Access to temporary exhibitions",
      price: "Included with entry"
    }
  ];

  const bookingOptions = [
    {
      title: "General Admission",
      description: "Access to fort, exhibitions and Cultural Foundation",
      price: "From AED 30",
      link: "https://qasralhosn.ae/tickets"
    },
    {
      title: "Guided Tour",
      description: "90-minute tour with expert guide",
      price: "From AED 60",
      link: "https://qasralhosn.ae/guided-tours"
    },
    {
      title: "Workshop Package",
      description: "Admission + artisan workshop",
      price: "From AED 75",
      link: "https://qasralhosn.ae/workshops"
    }
  ];

  const activities = [
    "Tour the historic fort",
    "Watch artisan demonstrations",
    "Visit art exhibitions",
    "Attend cultural workshops",
    "Explore the museum",
    "Visit the Cultural Foundation",
    "Learn traditional crafts",
    "Take photography tours",
    "Enjoy the courtyard cafe"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/qasr-al-hosn.jpg"
          alt="Qasr Al Hosn"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Qasr Al Hosn
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Abu Dhabi's Oldest and Most Significant Building
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="https://qasralhosn.ae"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4A6670] hover:bg-[#3A515A] text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg inline-flex items-center space-x-2"
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
            <p className="text-gray-600">9:00 AM - 7:00 PM</p>
            <p className="text-gray-500 text-sm">Daily</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaTicketAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Entrance Fee</h3>
            <p className="text-gray-600">From AED 30</p>
            <p className="text-gray-500 text-sm">Children under 5: Free</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaStar className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Rating</h3>
            <p className="text-gray-600">4.7/5 from visitors</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaMapMarkerAlt className="w-8 h-8 text-gold-500 mb-4" />
            <h3 className="font-semibold mb-2">Address</h3>
            <p className="text-gray-600">Rashid Bin Saeed Al Maktoum St</p>
            <p className="text-gray-500 text-sm">Al Hosn, Abu Dhabi</p>
          </motion.div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">About Qasr Al Hosn</h2>
          <p className="text-gray-600 mb-6">
            Qasr Al Hosn is the oldest and most significant heritage site in Abu Dhabi. Originally constructed in 1760 as a watchtower to protect the only freshwater well in Abu Dhabi island, it was later expanded into a small fort in 1793. The fort grew into a palace during the 1940s, becoming the permanent residence of the ruling family and the seat of government until the 1960s. Today, it stands as a living museum that tells the story of Abu Dhabi and its people through immersive exhibitions and experiences.
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
                  alt={`Qasr Al Hosn - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Booking Options Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaExternalLinkAlt className="w-8 h-8 text-gold-500 mr-4" />
            <h2 className="text-3xl font-semibold">Book Tickets</h2>
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
                  <p className="text-gold-500 font-semibold mb-3">{option.price}</p>
                  <a
                    href={option.link}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-block bg-gold-500 text-white px-4 py-2 rounded-md hover:bg-[#3A515A] transition-colors"
                  >
                    Book Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-6">
            * Advance booking recommended for guided tours and workshops.
          </p>
        </div>

        {/* History Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaHistory className="w-8 h-8 text-gold-500 mr-4" />
            <h2 className="text-3xl font-semibold">History</h2>
          </div>
          <div className="space-y-4 text-gray-600">
            <p>
              Built in the 1760s as a watchtower to defend Abu Dhabi's only freshwater well, Qasr Al Hosn has evolved alongside the city. The watchtower was expanded into a small fort in 1793 by Sheikh Shakhbut bin Dhiyab Al Nahyan, the ruler of Abu Dhabi at the time.
            </p>
            <p>
              During the reign of Sheikh Shakhbut bin Sultan Al Nahyan in the 1940s, the fort was transformed into a palace and became the permanent residence of the ruling family. It also served as the seat of government until the late 1960s.
            </p>
            <p>
              Today, after careful restoration, Qasr Al Hosn stands as a national monument and a living museum that showcases Abu Dhabi's journey from a fishing settlement to a modern global city.
            </p>
          </div>
        </div>

        {/* Attractions Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaLandmark className="w-8 h-8 text-gold-500 mr-4" />
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
            <FaCamera className="w-8 h-8 text-gold-500 mr-4" />
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
                <p className="text-sm text-gold-500 mt-4">{experience.price}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Activities Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaCalendarAlt className="w-8 h-8 text-gold-500 mr-4" />
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
            <FaInfoCircle className="w-8 h-8 text-gold-500 mr-4" />
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

export default QasrAlHosnPage;
