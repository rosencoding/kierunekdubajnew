import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ posts, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  console.log('BlogList received posts:', posts);

  const filteredPosts = posts
    .filter((post) => !selectedCategory || post.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.date) - new Date(a.date);
      }
      return new Date(a.date) - new Date(b.date);
    });

  console.log('Filtered posts:', filteredPosts);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog o Dubaju</h1>
        <p className="text-xl text-gray-600">
          Odkryj fascynujący świat Dubaju poprzez nasze artykuły
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mb-8 justify-between items-center">
        <div className="flex gap-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Wszystkie kategorie</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="newest">Najnowsze</option>
            <option value="oldest">Najstarsze</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {post.featuredImage && (
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('pl-PL', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <span className="mx-2">•</span>
                <span>{post.category}</span>
              </div>
              <h2 className="text-xl font-bold mb-2">
                <Link
                  to={`/blog/${post.id}`}
                  className="text-gray-900 hover:text-blue-600"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
              <Link
                to={`/blog/${post.id}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Czytaj więcej →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
