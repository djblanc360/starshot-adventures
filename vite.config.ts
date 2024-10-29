import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import fg from 'fast-glob';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    {
      name: 'glob-input',
      options(options) {
        const inputs = typeof options.input === 'string' ? [options.input] : options.input
        return Array.isArray(inputs)
          ? { ...options, input: inputs.flatMap((input) => fg.sync(input)) }
          : null
      },
    },
  ],
  publicDir: path.resolve(__dirname, 'public'), // Directory for static assets
  build: {
    emptyOutDir: false, // Prevents clearing the assets directory before each build
    outDir: path.resolve(__dirname, 'assets'),  // Output directly to Shopify's assets directory
    manifest: false,      // Disable the generation of manifest.json
    rollupOptions: {
      input: 'src/*.{ts,js,css}',
      output: {
        dir: 'assets',
        entryFileNames: '[name].js',    // Output JavaScript files as [name].js
        assetFileNames: '[name].[ext]', // Output CSS and other assets by original name
      },
    },
  },
  css: {
    postcss: './postcss.config.js',  // Enable PostCSS for Tailwind or other plugins
  },
});
