import React from 'react';
import { motion } from 'framer-motion';
import { FaHotel, FaTicketAlt, FaStar, FaClock, FaDollarSign, FaExternalLinkAlt } from 'react-icons/fa';
import { trackAffiliateClick, generateAffiliateLink } from '../services/affiliateService';

const AffiliateRecommendations = ({ attraction }) => {
  const handleClick = (partner, productId) => {
    trackAffiliateClick(partner, productId);
  };

  const renderPrice = (price) => (
    <div className="flex items-center text-lg font-semibold text-green-600">
      <FaDollarSign className="mr-1" />
      {price} AED
    </div>
  );

  const renderRating = (rating) => (
    <div className="flex items-center">
      <FaStar className="text-yellow-400 mr-1" />
      {rating}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Hotels Section */}
      {attraction.affiliateInfo?.hotels?.length > 0 && (
        <div>
          <h3 className="flex items-center text-xl font-semibold mb-4 text-blue-600">
            <FaHotel className="mr-2" /> Nearby Hotels
          </h3>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {attraction.affiliateInfo.hotels.map((hotel) => (
              <motion.div
                key={hotel.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-blue-100 hover:border-blue-300 transition-colors"
              >
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-2">{hotel.name}</h4>
                  <div className="flex justify-between items-center mb-3">
                    {renderRating(hotel.rating)}
                    <span className="text-gray-600">{hotel.distance}km away</span>
                  </div>
                  <div className="flex justify-between items-center">
                    {renderPrice(hotel.price)}
                    <button
                      onClick={() => handleClick(hotel.partner, hotel.id)}
                      className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"
                    >
                      Book Now <FaExternalLinkAlt />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Activities Section */}
      {attraction.affiliateInfo?.activities?.length > 0 && (
        <div>
          <h3 className="flex items-center text-xl font-semibold mb-4 text-green-600">
            <FaTicketAlt className="mr-2" /> Available Activities
          </h3>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {attraction.affiliateInfo.activities.map((activity) => (
              <motion.div
                key={activity.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-green-100 hover:border-green-300 transition-colors"
              >
                <img
                  src={activity.image}
                  alt={activity.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-2">{activity.name}</h4>
                  <div className="flex justify-between items-center mb-3">
                    {renderRating(activity.rating)}
                    <div className="flex items-center text-gray-600">
                      <FaClock className="mr-1" />
                      {activity.duration}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    {renderPrice(activity.price)}
                    <button
                      onClick={() => handleClick(activity.partner, activity.id)}
                      className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
                    >
                      Book Now <FaExternalLinkAlt />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default AffiliateRecommendations;
