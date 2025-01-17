import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import AttractionCard from './AttractionCard';

const SearchResults = ({ attractions, onSearch }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q') || '';

  useEffect(() => {
    if (query && onSearch) {
      onSearch(query);
    }
  }, [query, onSearch]);

  const filteredAttractions = attractions.filter(attraction => {
    const searchTerm = query.toLowerCase();
    return (
      attraction.name.toLowerCase().includes(searchTerm) ||
      (attraction.category && attraction.category.toLowerCase().includes(searchTerm)) ||
      attraction.description.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        Search Results for "{query}"
      </h2>
      <p className="text-gray-600 mb-8">
        Found {filteredAttractions.length} attractions matching your search
      </p>

      {filteredAttractions.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg
              className="w-16 h-16 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-medium text-gray-900 mb-4">
            No Results Found
          </h3>
          <p className="text-gray-600">
            Try adjusting your search terms or browse our categories instead.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAttractions.map((attraction) => (
            <motion.div
              key={attraction.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <AttractionCard attraction={attraction} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
