import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
