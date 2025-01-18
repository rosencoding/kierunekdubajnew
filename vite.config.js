import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

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

import matter from 'gray-matter';

export default defineConfig({
  plugins: [react(), markdown()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
          if (/css/i.test(extType)) {
            return 'assets/css/[name][extname]';
          }
          return 'assets/[name][extname]';
        },
        chunkFileNames: 'assets/js/[name].js',
        entryFileNames: 'assets/js/[name].js',
      }
    }
  },
  server: {
    headers: {
      'Content-Type': {
        '.js': 'application/javascript',
        '.css': 'text/css',
      },
    },
  },
});
