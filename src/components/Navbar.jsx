import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaMapMarkerAlt, FaSuitcase, FaBlog, FaQuestionCircle, FaCompass, FaPlane, FaChevronDown, FaFacebook, FaInstagram } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGuideDropdownOpen, setIsGuideDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const mainLinks = [
    { name: 'Atrakcje', path: '/atrakcje', icon: <FaMapMarkerAlt className="w-4 h-4" /> },
    { name: 'Dubaj', path: '/dubaj', icon: <FaCompass className="w-4 h-4" /> },
    { name: 'Abu Dhabi', path: '/abu-dhabi', icon: <FaCompass className="w-4 h-4" /> },
    { name: 'Blog', path: '/blog', icon: <FaBlog className="w-4 h-4" /> },
    { name: 'Plan Podróży', path: '/plan-podrozy', icon: <FaSuitcase className="w-4 h-4" /> },
  ];

  const guideLinks = [
    { name: 'Przewodnik', path: '/poznaj-dubaj' },
    { name: 'Praktyczne Porady', path: '/praktyczne-porady' },
    { name: 'Transport', path: '/transport' },
    { name: 'Kultura i Zwyczaje', path: '/kultura-i-zwyczaje' },
    { name: 'Kiedy Jechać', path: '/kiedy-jechac' },
    { name: 'Dzielnice', path: '/dzielnice' },
    { name: 'Podstawowe Informacje', path: '/podstawowe-informacje' },
  ];

  const secondaryLinks = [
    { name: 'FAQ', path: '/faq', icon: <FaQuestionCircle className="w-4 h-4" /> },
  ];

  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com/kierunekdubajpl', icon: <FaFacebook className="w-5 h-5" /> },
    { name: 'Instagram', url: 'https://instagram.com/kierunekdubajpl', icon: <FaInstagram className="w-5 h-5" /> },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsGuideDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isGuideActive = () => {
    return guideLinks.some(link => location.pathname === link.path);
  };

  return (
    <>
      <Helmet>
        <script 
          async 
          defer 
          src="https://widget.getyourguide.com/dist/pa.umd.production.min.js" 
          data-gyg-partner-id="19WQ75B"
        />
      </Helmet>
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Brand */}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-yellow-500">Kierunek</span>
              <span className="text-2xl font-light text-gray-700">Dubaj</span>
              <span className="text-sm text-gray-400">.pl</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              {/* Main Navigation */}
              <div className="flex space-x-1">
                {mainLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(link.path)
                        ? 'bg-yellow-50 text-yellow-600'
                        : 'text-gray-700 hover:bg-yellow-50 hover:text-yellow-600'
                    }`}
                  >
                    <span className={`mr-2 ${isActive(link.path) ? 'text-yellow-500' : ''}`}>
                      {link.icon}
                    </span>
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Divider */}
              <div className="h-6 w-px bg-gray-200 mx-4" />

              {/* Guide Dropdown and Secondary Links */}
              <div className="flex space-x-1">
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsGuideDropdownOpen(!isGuideDropdownOpen)}
                    className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isGuideActive() || isGuideDropdownOpen
                        ? 'bg-yellow-50 text-yellow-600'
                        : 'text-gray-700 hover:bg-yellow-50 hover:text-yellow-600'
                    }`}
                  >
                    <FaCompass className={`w-4 h-4 mr-2 ${isGuideActive() || isGuideDropdownOpen ? 'text-yellow-500' : ''}`} />
                    Przewodnik
                    <FaChevronDown className={`ml-2 w-3 h-3 transition-transform ${isGuideDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isGuideDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
                      >
                        <div className="py-1">
                          {guideLinks.map((link) => (
                            <Link
                              key={link.path}
                              to={link.path}
                              className={`block px-4 py-2 text-sm ${
                                isActive(link.path)
                                  ? 'bg-yellow-50 text-yellow-600'
                                  : 'text-gray-700 hover:bg-yellow-50 hover:text-yellow-600'
                              }`}
                            >
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Secondary Links */}
                {secondaryLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(link.path)
                        ? 'bg-yellow-50 text-yellow-600'
                        : 'text-gray-700 hover:bg-yellow-50 hover:text-yellow-600'
                    }`}
                  >
                    <span className={`mr-2 ${isActive(link.path) ? 'text-yellow-500' : ''}`}>
                      {link.icon}
                    </span>
                    {link.name}
                  </Link>
                ))}

                {/* Social Media Links */}
                <div className="flex items-center space-x-2 ml-4 border-l border-gray-200 pl-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 hover:bg-yellow-50 text-gray-600 hover:text-yellow-500 transition-all hover:scale-110"
                      aria-label={link.name}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-yellow-500 hover:bg-yellow-50 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {mainLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                      isActive(link.path)
                        ? 'bg-yellow-50 text-yellow-600'
                        : 'text-gray-700 hover:bg-yellow-50 hover:text-yellow-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="mr-3">{link.icon}</span>
                    {link.name}
                  </Link>
                ))}

                <div className="px-3 py-2">
                  <button
                    onClick={() => setIsGuideDropdownOpen(!isGuideDropdownOpen)}
                    className="flex items-center w-full text-left"
                  >
                    <FaCompass className="mr-3 w-4 h-4" />
                    <span className="flex-1">Przewodnik</span>
                    <FaChevronDown className={`w-4 h-4 transition-transform ${isGuideDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isGuideDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 pl-8 space-y-1"
                      >
                        {guideLinks.map((link) => (
                          <Link
                            key={link.path}
                            to={link.path}
                            className={`block py-2 text-base font-medium ${
                              isActive(link.path)
                                ? 'text-yellow-600'
                                : 'text-gray-700 hover:text-yellow-600'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {link.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {secondaryLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                      isActive(link.path)
                        ? 'bg-yellow-50 text-yellow-600'
                        : 'text-gray-700 hover:bg-yellow-50 hover:text-yellow-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="mr-3">{link.icon}</span>
                    {link.name}
                  </Link>
                ))}

                {/* Mobile Social Links */}
                <div className="px-3 py-4 flex justify-center space-x-4 border-t border-gray-100">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 hover:bg-yellow-50 text-gray-600 hover:text-yellow-500 transition-all"
                      aria-label={link.name}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
