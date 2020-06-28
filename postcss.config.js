const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    content: [
      './components/**/*.js',
      './pages/**/*.js',
      './components/**/*.jsx',
      './pages/**/*.jsx',
      './components/**/*.ts',
      './pages/**/*.ts',
      './components/**/*.tsx',
      './pages/**/*.tsx',
    ],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];
module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss',
    'autoprefixer',
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
};
