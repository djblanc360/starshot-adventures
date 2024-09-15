import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    outDir: path.resolve(__dirname, 'assets'),  // Output the build directly into Shopify's assets directory
    rollupOptions: {
      input: {
        main: './src/main.ts',   // Entry point for TypeScript
        styles: './src/main.css' // Entry point for Tailwind CSS or other CSS
      },
      output: {
        entryFileNames: '[name].js',    // JavaScript output in assets
        assetFileNames: '[name].[ext]', // Asset files (CSS, etc.) in assets
      },
    },
  },
  css: {
    postcss: './postcss.config.js',  // Enable PostCSS (for Tailwind CSS)
  },
});