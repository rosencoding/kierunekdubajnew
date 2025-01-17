import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import matter from 'gray-matter';

// Markdown plugin
function markdown() {
  return {
    name: 'transform-markdown',
    transform(code, id) {
      if (!id.endsWith('.md')) return null;

      try {
        console.log('Processing markdown file:', id);
        const { data, content } = matter(code);
        console.log('Extracted frontmatter:', data);
        
        return {
          code: `
            const metadata = ${JSON.stringify(data)};
            const content = ${JSON.stringify(content)};
            export { metadata };
            export default content;
          `,
          map: { mappings: '' }
        };
      } catch (error) {
        console.error('Error processing markdown:', error);
        throw error;
      }
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    markdown()
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'markdown': ['gray-matter']
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    sourcemap: false
  },
  server: {
    cors: true,
    compression: true
  }
});
