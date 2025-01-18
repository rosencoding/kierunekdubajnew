import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getRelatedPosts } from '../utils/blogUtils';
import SEO from './SEO';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';

const BlogPost = ({ post }) => {
  if (!post) return null;

  const relatedPosts = getRelatedPosts(post);
  
  // Generate meta description from excerpt or first paragraph
  const metaDescription = post.excerpt || post.content.split('\n').find(p => p.length > 50) || '';
  
  // Generate structured data for article
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": metaDescription,
    "image": post.featuredImage,
    "datePublished": post.date,
    "dateModified": post.modifiedDate || post.date,
    "author": {
      "@type": "Person",
      "name": post.author || "Kierunek Dubaj"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Kierunek Dubaj",
      "logo": {
        "@type": "ImageObject",
        "url": "/images/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://kierunekdubaj.pl/blog/${post.id}`
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <SEO
        title={`${post.title} | Kierunek Dubaj`}
        description={metaDescription}
        image={post.featuredImage}
        article={true}
        publishedTime={post.date}
        modifiedTime={post.modifiedDate}
        author={post.author || "Kierunek Dubaj"}
        keywords={[
          ...(post.tags || []),
          'Dubaj',
          'ZEA',
          'podróże',
          'turystyka',
          post.category
        ]}
      />
      
      <script type="application/ld+json">
        {JSON.stringify(articleStructuredData)}
      </script>

      <div className="mb-8">
        <Link
          to="/blog"
          className="inline-flex items-center text-yellow-600 hover:text-yellow-700 transition-colors"
        >
          <FaArrowLeft className="mr-2" />
          Powrót do listy artykułów
        </Link>
      </div>

      <article className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-64 sm:h-96">
          {post.featuredImage && (
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-yellow-500 text-white text-sm font-medium rounded-full">
              {post.category}
            </span>
          </div>
        </div>

        <div className="p-8">
          <div className="text-sm text-gray-500 mb-4">
            {new Date(post.date).toLocaleDateString('pl-PL', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>

          <div
            className="prose prose-lg max-w-none"
          >
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h2 className="text-lg font-semibold mb-4">Tagi:</h2>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {relatedPosts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold mb-6">Podobne artykuły</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map(relatedPost => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.id}`}
                    className="group"
                  >
                    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      {relatedPost.featuredImage && (
                        <div className="aspect-w-16 aspect-h-9">
                          <img
                            src={relatedPost.featuredImage}
                            alt={relatedPost.title}
                            className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity"
                          />
                        </div>
                      )}
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-center">Bądź na bieżąco</h2>
              <p className="text-gray-600 text-center mb-8">
                Dołącz do naszej społeczności i poznaj więcej inspiracji na podróż do Dubaju
              </p>
              
              <div className="flex flex-col space-y-4">
                <a
                  href="https://www.instagram.com/kierunekdubajpl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-tr from-purple-600 via-pink-600 to-orange-500 rounded-full">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                    </svg>
                  </div>
                  <div className="ml-4 flex-grow">
                    <div className="font-medium">Instagram</div>
                    <div className="text-sm text-gray-500">@kierunekdubajpl</div>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a
                  href="https://www.facebook.com/kierunekdubajpl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div className="ml-4 flex-grow">
                    <div className="font-medium">Facebook</div>
                    <div className="text-sm text-gray-500">kierunekdubajpl</div>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a
                  href="https://www.facebook.com/groups/atrakcjedubaj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                    </svg>
                  </div>
                  <div className="ml-4 flex-grow">
                    <div className="font-medium">Grupa Facebook</div>
                    <div className="text-sm text-gray-500">Atrakcje Dubaju</div>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </motion.div>
  );
};

export default BlogPost;
