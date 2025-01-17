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
        const { data, content } = matter(code);
        return {
          code: `
            const metadata = ${JSON.stringify(data)};
            const content = ${JSON.stringify(content)};
            export { metadata, content };
            export default { metadata, content };
          `
        };
      } catch (error) {
        console.error('Error processing markdown:', error);
        return null;
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
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
  server: {
    port: 3000,
    host: true,
  },
});
