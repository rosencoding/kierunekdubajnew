import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold mb-4 border-b border-gold-500 pb-2 inline-block">
              O nas
            </h3>
            <p className="text-sm leading-relaxed">
              KierunekDubaj.pl to przewodnik po atrakcjach Dubaju i Abu Dhabi, który pomaga zaplanować idealną wycieczkę. Na platformie znajdziesz szczegółowe opisy miejsc wartych odwiedzenia wraz z praktycznymi informacjami o cenach biletów i godzinach otwarcia.
            </p>
            <div className="pt-4 space-y-2">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-gold-500" />
                <a href="mailto:kontakt@kierunekdubaj.pl" className="text-sm hover:text-gold-500 transition-colors">
                  kontakt@kierunekdubaj.pl
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold mb-4 border-b border-gold-500 pb-2 inline-block">
              Szybkie linki
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/dubaj" className="text-sm hover:text-gold-500 transition-colors flex items-center space-x-2">
                  <span className="w-1 h-1 bg-gold-500 rounded-full"></span>
                  <span>Atrakcje Dubaj</span>
                </Link>
              </li>
              <li>
                <Link to="/abu-dhabi" className="text-sm hover:text-gold-500 transition-colors flex items-center space-x-2">
                  <span className="w-1 h-1 bg-gold-500 rounded-full"></span>
                  <span>Atrakcje Abu Dhabi</span>
                </Link>
              </li>
              <li>
                <Link to="/poznaj-dubaj" className="text-sm hover:text-gold-500 transition-colors flex items-center space-x-2">
                  <span className="w-1 h-1 bg-gold-500 rounded-full"></span>
                  <span>Przewodnik</span>
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm hover:text-gold-500 transition-colors flex items-center space-x-2">
                  <span className="w-1 h-1 bg-gold-500 rounded-full"></span>
                  <span>FAQ</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Info */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold mb-4 border-b border-gold-500 pb-2 inline-block">
              Przydatne informacje
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/kiedy-jechac" className="text-sm hover:text-gold-500 transition-colors flex items-center space-x-2">
                  <span className="w-1 h-1 bg-gold-500 rounded-full"></span>
                  <span>Kiedy jechać</span>
                </Link>
              </li>
              <li>
                <Link to="/transport" className="text-sm hover:text-gold-500 transition-colors flex items-center space-x-2">
                  <span className="w-1 h-1 bg-gold-500 rounded-full"></span>
                  <span>Transport</span>
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-sm hover:text-gold-500 transition-colors flex items-center space-x-2">
                  <span className="w-1 h-1 bg-gold-500 rounded-full"></span>
                  <span>Kontakt</span>
                </Link>
              </li>
              <li>
                <Link to="/polityka-prywatnosci" className="text-sm hover:text-gold-500 transition-colors flex items-center space-x-2">
                  <span className="w-1 h-1 bg-gold-500 rounded-full"></span>
                  <span>Polityka Prywatności</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold mb-4 border-b border-gold-500 pb-2 inline-block">
              Śledź nas
            </h3>
            <div className="flex space-x-6">
              <a
                href="https://facebook.com/kierunekdubajpl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold-500 transition-colors transform hover:scale-110"
              >
                <FaFacebook className="h-7 w-7" />
              </a>
              <a
                href="https://instagram.com/kierunekdubajpl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold-500 transition-colors transform hover:scale-110"
              >
                <FaInstagram className="h-7 w-7" />
              </a>
              <a
                href="https://youtube.com/kierunekdubajpl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold-500 transition-colors transform hover:scale-110"
              >
                <FaYoutube className="h-7 w-7" />
              </a>
            </div>
            <div className="pt-6">
              <p className="text-sm text-gray-400">
                Dołącz do naszej społeczności i bądź na bieżąco z najnowszymi informacjami o Dubaju!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-sm">
            {new Date().getFullYear()} KierunekDubaj.pl - Wszelkie prawa zastrzeżone
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
