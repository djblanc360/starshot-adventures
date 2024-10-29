import type { Config } from 'tailwindcss'

export default {
  content: [
    './**/*.liquid',           // Watch for Tailwind classes in all .liquid files
    './src/**/*.{js,ts,jsx,tsx}',  // Include source files for Tailwind classes
    '!./node_modules/**/*'      // Exclude node_modules
  ],
  theme: {
    extend: {
      colors: {
        'shopify-dark-green': '#64943e',
        'shopify-light-green': '#95bf47',
        'biome-dark-blue': '#0d5070',
      },
    },
    backgroundImage: {
      'gradient-dark': 'linear-gradient(to bottom, #1a1a1a, #372F2F, #002850)',
    },
  },
  plugins: [],
} satisfies Config;