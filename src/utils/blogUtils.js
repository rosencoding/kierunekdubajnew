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
      const { metadata, content } = post.default;
      
      console.log('Extracted data:', { id, metadata, contentPreview: content.slice(0, 100) });
      
      return {
        id,
        title: metadata.title,
        date: metadata.date,
        category: metadata.category,
        tags: metadata.tags,
        featuredImage: metadata.featuredImage,
        excerpt: metadata.excerpt,
        content
      };
    });

    // Sort posts by date
    const sortedPosts = allPostsData.sort((a, b) => {
      if (new Date(a.date) < new Date(b.date)) {
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
  const categories = [...new Set(posts.map(post => post.category))];
  return categories.filter(Boolean); // Remove any undefined or null values
}

export function getRelatedPosts(currentPost, limit = 3) {
  if (!currentPost) return [];

  const allPosts = getSortedPostsData();
  
  // Remove the current post from the list
  const otherPosts = allPosts.filter(post => post.id !== currentPost.id);
  
  // Score each post based on matching criteria
  const scoredPosts = otherPosts.map(post => {
    let score = 0;
    
    // Same category
    if (post.category === currentPost.category) score += 3;
    
    // Matching tags
    const matchingTags = post.tags?.filter(tag => 
      currentPost.tags?.includes(tag)
    ).length || 0;
    score += matchingTags;
    
    // Recent posts (within 30 days)
    const daysDifference = Math.abs(
      (new Date(post.date) - new Date(currentPost.date)) / (1000 * 60 * 60 * 24)
    );
    if (daysDifference <= 30) score += 1;
    
    return { ...post, score };
  });
  
  // Sort by score and return top N posts
  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}
