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
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
    sourcemap: true,
    manifest: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: true
      }
    }
  },
  server: {
    port: 3000,
    host: true,
    strictPort: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-store',
    }
  },
});
