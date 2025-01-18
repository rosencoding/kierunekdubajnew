import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    try {
      console.log('Navigating to:', path);
      navigate(path, { replace: false });
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  return (
    <div className="relative bg-gray-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/background-hero.jpg)',
          filter: 'brightness(0.4)',
        }}
      />

      {/* Content */}
      <div className="relative min-h-[60vh] flex items-center justify-center">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Odkryj Dubaj i Abu Dhabi
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Poznaj najpiękniejsze miejsca, zaplanuj swoją podróż i odkryj wszystko, 
              co musisz wiedzieć o Zjednoczonych Emiratach Arabskich
            </p>

            <div className="mt-10 flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  console.log('Poznaj Dubaj button clicked');
                  handleNavigation('/poznaj-dubaj');
                }}
                className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
              >
                Poznaj Dubaj
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  console.log('Abu Dhabi button clicked');
                  handleNavigation('/abu-dhabi');
                }}
                className="inline-block bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-full transition-colors"
              >
                Odkryj Abu Dhabi
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
