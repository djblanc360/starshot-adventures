/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.liquid',           // Watch for Tailwind classes in all .liquid files
    './src/**/*.{js,ts,jsx,tsx}',  // Include source files for Tailwind classes
    '!./node_modules/**/*'      // Exclude node_modules
  ],
  theme: {
    extend: {},                 // You can extend the theme here if needed
  },
  plugins: [],                  // Add Tailwind plugins here if required
};