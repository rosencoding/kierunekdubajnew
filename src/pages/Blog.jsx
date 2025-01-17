import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogList from '../components/BlogList';
import BlogPost from '../components/BlogPost';
import { getSortedPostsData, getPostData, getAllCategories } from '../utils/blogUtils';
import usePageTitle from '../hooks/usePageTitle';

const Blog = () => {
  const { postId } = useParams();
  const [currentPost, setCurrentPost] = useState(null);
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  usePageTitle(postId ? 'Blog - Artykuł' : 'Blog - KierunekDubaj.pl');

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Load all posts and categories
        const loadedPosts = getSortedPostsData();
        console.log('Loaded posts:', loadedPosts);
        setPosts(loadedPosts);

        const loadedCategories = getAllCategories();
        console.log('Loaded categories:', loadedCategories);
        setCategories(loadedCategories);

        // Load specific post if postId is present
        if (postId) {
          const post = await getPostData(postId);
          console.log('Loaded specific post:', post);
          if (!post) {
            setError('Nie znaleziono artykułu');
          } else {
            setCurrentPost(post);
          }
        }
      } catch (err) {
        console.error('Error loading blog data:', err);
        setError('Wystąpił błąd podczas ładowania danych');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [postId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Błąd</h1>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  if (postId && currentPost) {
    return <BlogPost post={currentPost} />;
  }

  return <BlogList posts={posts} categories={categories} />;
};

export default Blog;
