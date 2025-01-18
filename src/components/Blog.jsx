import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogList from './BlogList';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { postId } = useParams();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const postsData = await import.meta.glob('/src/content/blog/*.md');
        const allPosts = await Promise.all(
          Object.entries(postsData).map(async ([path, loader]) => {
            const post = await loader();
            const id = path.split('/').pop().replace('.md', '');
            return {
              id,
              ...post.metadata,
              content: post.content,
            };
          })
        );

        const sortedPosts = allPosts.sort((a, b) => 
          new Date(b.date) - new Date(a.date)
        );

        setPosts(sortedPosts);
        
        // Extract unique categories
        const uniqueCategories = [...new Set(sortedPosts.map(post => post.category))];
        setCategories(uniqueCategories);
        
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) {
    return <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>;
  }

  if (error) {
    return <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="text-red-500">Error: {error}</div>
    </div>;
  }

  return (
    <div className="min-h-screen pt-20">
      {postId ? (
        <BlogPost post={posts.find(p => p.id === postId)} />
      ) : (
        <BlogList posts={posts} categories={categories} />
      )}
    </div>
  );
};

export default Blog;
