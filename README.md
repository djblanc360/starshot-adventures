# Shopify Theme - TypeScript & Tailwind CSS with Vite

This a skeleton Shopify theme using **TypeScript**, **Tailwind CSS**, and **Vite** as the build tool. This will serve as a launching point for future Shopify themes.

## Project Structure

```bash
/root
├── /asset              # Compiled assets (JavaScript, CSS) are placed here for Shopify
├── /src                # Source files (TypeScript, CSS)
│   ├── main.ts         # Main TypeScript file for JS logic
│   ├── main.css        # Tailwind CSS entry point
├── layout/
│   ├── theme.liquid 
├── snippets/
├── sections/
├── templates/
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.js       # Vite build configuration
├── postcss.config.js    # PostCSS configuration for Tailwind CSS 
├── package.json
└── .shopifyignore       # Ignore non-production files like node_modules
```

## Features

- **TypeScript**: Enables modern JavaScript development with type safety.
- **Tailwind CSS**: Utility-first CSS framework for building responsive and maintainable designs.
- **Vite**: Fast bundler and build tool for modern frontend projects.
- **Shopify CLI**: Handles theme development and live previewing.

## Getting Started

### Prerequisites

- **Node.js**: Ensure that you have Node.js installed. You can download it from [here](https://nodejs.org/).
- **Shopify CLI**: Install the Shopify CLI to interact with Shopify themes. Instructions can be found [here](https://shopify.dev/docs/themes/tools/cli).

### Installation

1. Clone the repository and navigate to the project directory:

```bash
   git clone <your-repo-url>
   cd ts-prototype
```

2. Install dependencies:
```bash
npm install
```

### Bundling

All TypeScript files will be created in the `src/` directory and then imported into the `src/main.ts` file.

All CSS files will will be created in the `src/` directory and then imported into the `src/main.css` file.

