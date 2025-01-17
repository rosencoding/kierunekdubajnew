import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaClock } from 'react-icons/fa';
import { attractions } from '../data/attractions';

const AttractionDetails = () => {
  const { id } = useParams();
  const attraction = attractions.find((a) => a.id === id);

  if (!attraction) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Attraction not found</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-[50vh] rounded-xl overflow-hidden mb-8">
        <img
          src={attraction.image}
          alt={attraction.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8">
          <h1 className="text-4xl font-bold text-white mb-4">{attraction.name}</h1>
          {attraction.rating && (
            <div className="flex items-center text-white mb-2">
              <span className="text-xl mr-2">★</span>
              <span className="text-lg">{attraction.rating}</span>
            </div>
          )}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Information */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">About</h2>
            <p className="text-gray-600 mb-4">{attraction.description}</p>
            
            <div className="flex flex-wrap gap-4">
              {attraction.duration && (
                <div className="flex items-center text-gray-600">
                  <FaClock className="mr-2" />
                  <span>{attraction.duration}</span>
                </div>
              )}
              {attraction.price && attraction.price !== 'Free' && (
                <div className="text-gray-600">
                  <span className="font-medium">From ${typeof attraction.price === 'number' ? attraction.price.toFixed(2) : attraction.price}</span>
                </div>
              )}
              {attraction.price === 'Free' && (
                <div className="text-green-600 font-medium">
                  Free Attraction
                </div>
              )}
            </div>

            {/* Tips Section */}
            {attraction.tips && attraction.tips.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Visitor Tips</h3>
                <ul className="list-disc list-inside space-y-2">
                  {attraction.tips.map((tip, index) => (
                    <li key={index} className="text-gray-600">{tip}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Opening Hours */}
            {attraction.openingHours && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Opening Hours</h3>
                <p className="text-gray-600">
                  {attraction.openingHours.open} - {attraction.openingHours.close}
                </p>
              </div>
            )}
          </div>

          {/* Gallery */}
          {attraction.gallery && (
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {attraction.gallery.map((image, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square rounded-lg overflow-hidden"
                  >
                    <img
                      src={image}
                      alt={`${attraction.name} gallery image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Booking Widget */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Book Your Visit</h2>
            {attraction.price === 'Free' ? (
              <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-4">
                This is a free attraction! No booking required.
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-gray-600">
                  Secure your spot and get the best rates for your visit to {attraction.name}.
                </p>
                {attraction.bookingUrl && (
                  <a
                    href={attraction.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gold-500 hover:bg-gold-600 text-white text-center py-3 rounded-lg font-medium transition-colors"
                  >
                    Book Now
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Related Activities */}
          {attraction.affiliateInfo?.activities && (
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Related Activities</h2>
              <div className="space-y-4">
                {attraction.affiliateInfo.activities.map((activity) => (
                  <div key={activity.id} className="border rounded-lg p-4">
                    <div className="aspect-video rounded-lg overflow-hidden mb-3">
                      <img
                        src={activity.image}
                        alt={activity.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-medium mb-2">{activity.name}</h3>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        {activity.duration} • ★ {activity.rating}
                      </div>
                      <div className="font-medium text-gold-600">
                        ${activity.price}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AttractionDetails;
