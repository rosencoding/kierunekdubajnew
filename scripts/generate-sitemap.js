import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://kierunekdubaj.pl';
const PRIORITY = {
  home: 1.0,
  mainPages: 0.9,
  attractions: 0.8,
  blog: 0.7,
  other: 0.6
};

const CHANGE_FREQ = {
  home: 'daily',
  mainPages: 'weekly',
  attractions: 'weekly',
  blog: 'weekly',
  other: 'monthly'
};

function getLastModifiedDate(filePath) {
  const stats = fs.statSync(filePath);
  return stats.mtime.toISOString().split('T')[0];
}

function generateSitemapEntry(url, lastmod, changefreq, priority) {
  return `  <url>
    <loc>${SITE_URL}${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

async function extractRoutesFromApp() {
  const appJsxPath = path.join(__dirname, '..', 'src', 'App.jsx');
  const content = fs.readFileSync(appJsxPath, 'utf-8');
  
  // Extract routes using regex
  const routeRegex = /path="([^"]+)"/g;
  const routes = new Set();
  let match;
  
  while ((match = routeRegex.exec(content)) !== null) {
    // Skip dynamic route parameters
    if (!match[1].includes(':')) {
      routes.add(match[1]);
    }
  }
  
  return Array.from(routes);
}

function categorizeRoute(route) {
  if (route === '/') return 'home';
  if (route.startsWith('/atrakcje/')) return 'attractions';
  if (route.startsWith('/abu-dhabi/')) return 'attractions';
  if (route.startsWith('/blog/')) return 'blog';
  return 'mainPages';
}

async function generateSitemap() {
  const entries = [];
  const srcDir = path.join(__dirname, '..', 'src');

  // Get all routes from App.jsx
  const routes = await extractRoutesFromApp();
  const routesSet = new Set(routes);
  
  // Add all routes from the application
  routes.forEach(route => {
    const category = categorizeRoute(route);
    entries.push(generateSitemapEntry(
      route,
      new Date().toISOString().split('T')[0],
      CHANGE_FREQ[category],
      PRIORITY[category]
    ));
  });

  // Add blog posts
  const blogPosts = await glob(path.join(srcDir, 'content/blog/**/*.md'));
  blogPosts.forEach(post => {
    const content = fs.readFileSync(post, 'utf-8');
    const { data } = matter(content);
    const slug = path.basename(post, '.md');
    const blogPath = `/blog/${slug}`;
    
    // Only add if not a dynamic route placeholder
    if (!routesSet.has(blogPath)) {
      entries.push(generateSitemapEntry(
        blogPath,
        getLastModifiedDate(post),
        CHANGE_FREQ.blog,
        PRIORITY.blog
      ));
    }
  });

  // Generate the final sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>`;

  // Write the sitemap to the public directory
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
}

generateSitemap().catch(console.error);
