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

export default defineConfig({
  plugins: [react(), markdown()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/\.(css)$/i.test(assetInfo.name)) {
            return `assets/[name].[hash][extname]`
          }
          return `assets/[name].[hash][extname]`
        },
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
    assetsDir: 'assets',
    manifest: true,
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
