// .babelrc.js
module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-react': {
          runtime: 'automatic',
          importSource: '@emotion/react',
        },
      },
      '@emotion/babel-preset-css-prop',
    ],
  ],
  plugins: [
    '@emotion/babel-plugin',
    'inline-react-svg',
    'babel-plugin-macros',
    [
      'module-resolver',
      {
        alias: {
          '@/components': './components',
          '@/assets': './assets',
        },
      },
    ],
  ],
};
