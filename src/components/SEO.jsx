import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title, 
  description, 
  image, 
  article = false,
  publishedTime,
  modifiedTime,
  author = "Kierunek Dubaj",
  keywords = [],
  canonicalUrl
}) => {
  const siteUrl = "https://kierunekdubaj.pl"; // Update with your actual domain
  const imageUrl = image ? `${siteUrl}${image}` : `${siteUrl}/images/default-og.jpg`; // Add default OG image
  
  // Convert keywords array to string
  const keywordsString = Array.isArray(keywords) ? keywords.join(', ') : '';

  // Create structured data
  const structuredData = article ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "image": [imageUrl],
    "datePublished": publishedTime,
    "dateModified": modifiedTime || publishedTime,
    "author": [{
      "@type": "Person",
      "name": author,
      "url": `${siteUrl}/autor`
    }]
  } : null;

  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywordsString && <meta name="keywords" content={keywordsString} />}
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:site_name" content="Kierunek Dubaj" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content={article ? 'article' : 'website'} />

      {/* Article specific tags */}
      {article && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {article && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {article && author && (
        <meta property="article:author" content={author} />
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="pl" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
