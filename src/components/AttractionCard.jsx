import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaPlus, FaCheck, FaDollarSign, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AttractionCard = ({ attraction, isSelected, onSelect }) => {
  const handleAddToItinerary = (e) => {
    e.preventDefault(); // Prevent navigation when clicking the button
    onSelect(attraction);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${isSelected ? 'ring-2 ring-yellow-500' : ''}`}
    >
      <div className="relative h-56 group">
        <img
          src={attraction.image || 'https://images.unsplash.com/photo-1583997052830-a9c397e0ecf9?ixlib=rb-4.0.3'}
          alt={attraction.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <button
          onClick={handleAddToItinerary}
          className={`absolute top-4 right-4 p-2.5 rounded-full shadow-lg ${
            isSelected
              ? 'bg-yellow-500 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          } transition-colors duration-200`}
          aria-label={isSelected ? 'Remove from itinerary' : 'Add to itinerary'}
        >
          <FaCheck className={`${isSelected ? 'opacity-100' : 'opacity-50'}`} />
        </button>
      </div>

      <div className="p-6">
        <Link to={`/${attraction.id}`} className="block group">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-yellow-600 transition-colors duration-200">
            {attraction.name}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{attraction.description}</p>
        </Link>

        <div className="flex flex-wrap gap-3 text-sm mb-4">
          {/* Duration Label */}
          {attraction.duration && (
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
              <FaClock className="mr-1.5" />
              {typeof attraction.duration === 'number'
                ? `${Math.floor(attraction.duration / 60)}h ${attraction.duration % 60}min`
                : attraction.duration}
            </span>
          )}

          {/* Category Label */}
          {attraction.category && (
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
              <FaInfoCircle className="mr-1.5" />
              {attraction.category}
            </span>
          )}

          {/* Price Label */}
          {attraction.price !== undefined && (
            attraction.price > 0 ? (
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-100">
                <FaDollarSign className="mr-1.5" />
                {attraction.price} AED
              </span>
            ) : (
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 font-medium">
                <FaCheck className="mr-1.5" />
                Wstęp wolny
              </span>
            )
          )}
        </div>

        <div className="flex justify-between items-center gap-4">
          <Link
            to={`/${attraction.id}`}
            className="inline-flex items-center px-4 py-2 bg-yellow-600 text-white text-sm font-medium rounded-full hover:bg-yellow-700 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            <FaInfoCircle className="mr-2" />
            View Details
          </Link>
          {attraction.location && (
            <div className="flex items-center text-gray-500 text-sm">
              <FaMapMarkerAlt className="mr-1.5 text-yellow-500" />
              {attraction.location}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AttractionCard;
