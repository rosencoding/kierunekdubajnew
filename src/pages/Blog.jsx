import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogList from '../components/BlogList';
import BlogPost from '../components/BlogPost';
import { getSortedPostsData, getPostData, getAllCategories } from '../utils/blogUtils';

const Blog = () => {
  const { postId } = useParams();
  const [currentPost, setCurrentPost] = useState(null);
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Load all posts and categories
    const loadedPosts = getSortedPostsData();
    setPosts(loadedPosts);
    setCategories(getAllCategories());

    // Load specific post if postId is present
    if (postId) {
      const loadPost = async () => {
        const post = await getPostData(postId);
        setCurrentPost(post);
      };
      loadPost();
    }
  }, [postId]);

  if (postId && currentPost) {
    return <BlogPost post={currentPost} />;
  }

  return <BlogList posts={posts} categories={categories} />;
};

export default Blog;
