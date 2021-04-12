const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './pages/*.js',
    './pages/**/*.js',
    './components/*.js',
    './components/**/*.js',
  ],
  theme: {
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2rem',
      '5xl': '2.25rem',
      '6xl': '3rem',
      '7xl': '3.5rem',
      '8xl': '4rem',
      '9xl': '5rem',
    },
    extend: {
      colors: {
        gray: {
          100: 'hsla(187,7%,21%,1)',
          200: 'hsla(0,0%,35%,1)',
          300: 'hsla(0,0%,65%,1)',
        },
        black: 'hsla(0,0%,7%,1)',
        red: {
          500: 'hsla(359,83%,53%,1)',
        },
        green: {
          500: 'hsla(145,94%,44%,1)',
        },
        brown: {
          500: 'hsla(45,100%,31%,1)',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
