import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaFileContract, FaChartLine, FaPassport, FaMapMarkedAlt } from 'react-icons/fa';

const RealEstatePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[600px] bg-fixed" 
        style={{ backgroundImage: 'url("/images/background-hero.jpg")' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight"
            >
              Dubai Real Estate Guide
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-100 max-w-3xl leading-relaxed"
            >
              Your comprehensive guide to investing in UAE property market
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {/* Investment Framework Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl text-blue-600 bg-blue-50 p-3 rounded-lg">
                  <FaBuilding />
                </span>
                <h2 className="text-3xl font-bold text-gray-900">Investment Framework</h2>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Freehold Areas</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h4 className="font-semibold mb-3">Popular Locations</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Dubai Marina</li>
                        <li>• Downtown Dubai</li>
                        <li>• Palm Jumeirah</li>
                        <li>• Select zones in Abu Dhabi</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl">
                      <h4 className="font-semibold mb-3">Property Types</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• High-rise apartments</li>
                        <li>• Luxury villas</li>
                        <li>• Townhouses</li>
                        <li>• Mixed-use developments</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Financial Considerations Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl text-green-600 bg-green-50 p-3 rounded-lg">
                  <FaChartLine />
                </span>
                <h2 className="text-3xl font-bold text-gray-900">Financial Overview</h2>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Key Financial Aspects</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h4 className="font-semibold mb-2">Tax Benefits</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• No property tax</li>
                        <li>• No personal income tax</li>
                        <li>• Rental income potential</li>
                        <li>• Capital appreciation</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl">
                      <h4 className="font-semibold mb-2">Fees & Charges</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• 2-4% registration fee</li>
                        <li>• Annual service charges</li>
                        <li>• Agency fees (if applicable)</li>
                        <li>• Utility deposits</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-xl">
                      <h4 className="font-semibold mb-2">Mortgage Info</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• 20-30% down payment</li>
                        <li>• Various bank options</li>
                        <li>• Competitive rates</li>
                        <li>• Flexible terms</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Market Performance</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <span>5-8% average annual rental yield</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <span>Strong market regulations via RERA</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <span>Regular new developments</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <span>Growing property market</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Residency Benefits Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl text-indigo-600 bg-indigo-50 p-3 rounded-lg">
                  <FaPassport />
                </span>
                <h2 className="text-3xl font-bold text-gray-900">Residency Benefits</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Visa Requirements</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                        <span>Minimum investment: AED 750,000</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                        <span>Regular renewal requirements</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                        <span>Property must be ready for occupancy</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Additional Benefits</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                        <span>Access to UAE healthcare system</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                        <span>Education opportunities</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                        <span>Business opportunities</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Infrastructure Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl text-blue-600 bg-blue-50 p-3 rounded-lg">
                  <FaMapMarkedAlt />
                </span>
                <h2 className="text-3xl font-bold text-gray-900">Infrastructure & Amenities</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Transportation</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>Modern metro systems</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>Extensive highway network</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>International airports</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Lifestyle Amenities</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>World-class shopping centers</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Healthcare facilities</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Educational institutions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Legal Considerations Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl text-blue-600 bg-blue-50 p-3 rounded-lg">
                  <FaFileContract />
                </span>
                <h2 className="text-3xl font-bold text-gray-900">Legal Considerations</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-yellow-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Important Documents</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      <span>Title deed registration</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      <span>Sale & purchase agreement</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      <span>NOC from developer</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Regulatory Bodies</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span>RERA (Real Estate Regulatory Agency)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span>Dubai Land Department</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span>Municipality regulations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Professional Advice?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Connect with our real estate experts for personalized guidance
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstatePage;
