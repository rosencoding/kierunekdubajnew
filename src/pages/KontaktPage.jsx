import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';

const KontaktPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Kontakt</h1>
          
          <div className="space-y-6">
            <p className="text-gray-600">
              Masz pytania dotyczące podróży do Dubaju lub Abu Dhabi? 
              Chętnie pomożemy! Skontaktuj się z nami poprzez e-mail.
            </p>

            <div className="flex items-center space-x-3 text-lg">
              <FaEnvelope className="text-yellow-600" />
              <a 
                href="mailto:kontakt@kierunekdubaj.pl" 
                className="text-yellow-600 hover:text-yellow-700 transition-colors"
              >
                kontakt@kierunekdubaj.pl
              </a>
            </div>

            <div className="mt-8 border-t pt-6">
              <p className="text-gray-600">
                Staramy się odpowiadać na wszystkie wiadomości w ciągu 24-48 godzin roboczych.
                Jeśli Twoje pytanie wymaga szybszej odpowiedzi, prosimy o zaznaczenie tego w temacie wiadomości.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default KontaktPage;
