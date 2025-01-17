import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaQuestionCircle } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[400px] bg-fixed" 
        style={{ backgroundImage: 'url("/images/background-hero.jpg")' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-100 max-w-2xl"
            >
              Get in touch with our team for any questions about Dubai
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-8 space-y-8"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-8">
              Have questions about Dubai? We're here to help! Send us an email and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="flex items-center space-x-4 border-b border-gray-200 pb-8">
            <div className="flex-shrink-0">
              <FaEnvelope className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Email</p>
              <a 
                href="mailto:contact@dubaidiscoverer.com"
                className="text-lg text-blue-600 hover:text-blue-700"
              >
                contact@dubaidiscoverer.com
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4 pt-4">
            <FaQuestionCircle className="h-6 w-6 text-blue-600" />
            <div>
              <p className="text-lg font-medium text-gray-900">Have general questions?</p>
              <Link 
                to="/faq" 
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Check our FAQ page →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
