import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogList from '../components/BlogList';
import BlogPost from '../components/BlogPost';
import { getSortedPostsData, getPostData, getAllCategories } from '../utils/blogUtils';
import usePageTitle from '../hooks/usePageTitle';

// Trigger Vercel deployment - 2025-01-18
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

        const loadedPosts = getSortedPostsData();
        setPosts(loadedPosts);

        const loadedCategories = getAllCategories();
        setCategories(loadedCategories);

        if (postId) {
          const post = await getPostData(postId);
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
      <div className="min-h-screen pt-24 px-4 flex items-center justify-center">
        <div className="text-xl text-gray-600">Ładowanie...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-24 px-4 flex items-center justify-center">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {postId && currentPost ? (
        <BlogPost post={currentPost} />
      ) : (
        <BlogList posts={posts} categories={categories} />
      )}
    </div>
  );
};

export default Blog;
