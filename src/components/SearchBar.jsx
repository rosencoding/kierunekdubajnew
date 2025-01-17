import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaMapMarkerAlt, FaNewspaper } from 'react-icons/fa';
import attractions from '../data/attractions';

// Import blog posts
const blogPosts = [
  {
    id: 'dubaj-w-5-dni',
    title: 'Dubaj w 5 dni - Plan zwiedzania',
    description: 'Kompleksowy plan zwiedzania Dubaju w 5 dni. Zobacz najważniejsze atrakcje i miejsca.',
    category: 'blog'
  },
  {
    id: 'hotele-w-dubai-marina',
    title: 'Najlepsze hotele w Dubai Marina',
    description: 'Przewodnik po najlepszych hotelach w dzielnicy Dubai Marina.',
    category: 'blog'
  }
];

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const searchBarRef = useRef(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm.length >= 2) {
      const attractionResults = attractions
        .filter(attraction => 
          attraction.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          attraction.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .slice(0, 3);

      const blogResults = blogPosts
        .filter(post => 
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .slice(0, 2);

      setSearchResults([...attractionResults, ...blogResults]);
      setIsVisible(true);
      updateDropdownPosition();
    } else {
      setSearchResults([]);
      setIsVisible(false);
    }
  }, [searchTerm]);

  const updateDropdownPosition = () => {
    if (searchBarRef.current) {
      const rect = searchBarRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left,
        width: rect.width
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', updateDropdownPosition);
    window.addEventListener('resize', updateDropdownPosition);
    return () => {
      window.removeEventListener('scroll', updateDropdownPosition);
      window.removeEventListener('resize', updateDropdownPosition);
    };
  }, []);

  const handleSelect = (item) => {
    setSearchTerm('');
    setIsVisible(false);
    if (item.category === 'blog') {
      navigate(`/blog/${item.id}`);
    } else {
      const path = item.location === 'Abu Dhabi' ? `/abu-dhabi/${item.id}` : `/atrakcje/${item.id}`;
      navigate(path);
    }
  };

  return (
    <div className="relative w-full" ref={searchBarRef}>
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Wyszukaj atrakcje, blogi, miejsca..."
          className="w-full px-6 py-4 text-lg rounded-full bg-white/90 backdrop-blur-sm shadow-lg pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
      </div>

      {/* Search Results Dropdown */}
      {isVisible && searchResults.length > 0 && (
        <div 
          className="fixed bg-white rounded-2xl shadow-xl overflow-hidden"
          style={{ 
            top: `${dropdownPosition.top}px`, 
            left: `${dropdownPosition.left}px`,
            width: `${dropdownPosition.width}px`,
            zIndex: 1000,
            maxHeight: '400px',
            overflowY: 'auto'
          }}
        >
          {searchResults.map((result) => (
            <div
              key={result.id}
              onClick={() => handleSelect(result)}
              className="flex items-center p-4 hover:bg-gray-50 cursor-pointer transition-colors border-b last:border-b-0"
            >
              {/* Icon based on result type */}
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 mr-4">
                {result.category === 'blog' ? (
                  <FaNewspaper className="text-teal-500 text-lg" />
                ) : (
                  <FaMapMarkerAlt className="text-teal-500 text-lg" />
                )}
              </div>
              
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">{result.name || result.title}</h4>
                <p className="text-sm text-gray-500 line-clamp-1">{result.description}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-teal-600">
                    {result.category === 'blog' ? 'Blog' : 'Atrakcja'}
                  </span>
                  {result.location && (
                    <>
                      <span className="text-xs text-gray-300">•</span>
                      <span className="text-xs text-gray-500">{result.location}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
