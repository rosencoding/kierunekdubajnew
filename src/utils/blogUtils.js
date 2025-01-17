// Import all blog posts
const posts = import.meta.glob('/src/content/blog/*.md', { eager: true });

export function getSortedPostsData() {
  try {
    console.log('Raw posts data:', posts);
    
    const allPostsData = Object.entries(posts).map(([filepath, post]) => {
      // Get id from filename
      const id = filepath.split('/').pop().replace(/\.md$/, '');
      
      console.log('Raw post data:', post);
      
      // Extract metadata and content
      const metadata = post.metadata || {};
      const content = post.default || '';
      
      console.log('Extracted data:', { id, metadata, contentPreview: content.slice(0, 100) });
      
      return {
        id,
        ...metadata,
        content
      };
    });

    // Sort posts by date
    const sortedPosts = allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });

    console.log('Final sorted posts:', sortedPosts);
    return sortedPosts;
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export async function getPostData(id) {
  try {
    const posts = getSortedPostsData();
    const post = posts.find(post => post.id === id);
    console.log('Getting post data for:', id, post);
    return post || null;
  } catch (error) {
    console.error(`Error reading blog post ${id}:`, error);
    return null;
  }
}

export function getPostsByCategory(category) {
  const posts = getSortedPostsData();
  return posts.filter(post => post.category === category);
}

export function getAllCategories() {
  const posts = getSortedPostsData();
  const categories = new Set(posts.map(post => post.category));
  return Array.from(categories);
}

export function getRelatedPosts(currentPost, limit = 3) {
  if (!currentPost) return [];
  
  const allPosts = getSortedPostsData();
  
  // Filter out the current post
  const otherPosts = allPosts.filter(post => post.id !== currentPost.id);
  
  // Score each post based on relevance
  const scoredPosts = otherPosts.map(post => {
    let score = 0;
    
    // Same category
    if (post.category === currentPost.category) {
      score += 3;
    }
    
    // Shared tags
    const sharedTags = (post.tags || []).filter(tag => 
      (currentPost.tags || []).includes(tag)
    ).length;
    score += sharedTags;
    
    // Recent posts get a small boost
    const daysDifference = Math.abs(
      (new Date(post.date) - new Date(currentPost.date)) / (1000 * 60 * 60 * 24)
    );
    if (daysDifference < 30) {
      score += 1;
    }
    
    return { ...post, score };
  });
  
  // Sort by score and return top N posts
  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}
