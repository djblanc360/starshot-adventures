import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import shopify from 'vite-plugin-shopify';

// ESM equivalent of __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    // shopify({
    //   // Options for vite-plugin-shopify
    //   entrypointsDir: 'src',          // Directory containing entry points (e.g., main.ts and main.css)
    //   themeRoot: __dirname,           // Root of the Shopify theme
    // })
  ],
  publicDir: path.resolve(__dirname, 'public'), // output directory for Vite's build
  build: {
    outDir: path.resolve(__dirname, 'assets'),  // output the build directly into Shopify's assets directory
    rollupOptions: {
      input: {
        main: './src/main.ts',   // entry point for TypeScript
        styles: './src/main.css' // entry point for Tailwind CSS or other CSS
      },
      output: {
        entryFileNames: '[name].js',    // JavaScript output in assets
        assetFileNames: '[name].[ext]', // asset files (CSS, etc.) in assets
      },
    },
  },
  css: {
    postcss: './postcss.config.js',  // Enable PostCSS (for Tailwind CSS)
  },
});