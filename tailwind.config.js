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
      '2xl': ['1.5rem', '36px'],
      '2.5xl': '1.75rem',
      '3xl': '1.875rem',
      '4xl': '2rem',
      '5xl': ['2.25rem', '40px'],
      '5.5xl': '2.5rem',
      '6xl': '3rem',
      '7xl': '3.25rem',
      '8xl': ['3.5rem', '80px'],
      '8.5xl': ['3.75rem'],
      '9xl': '4rem',
      '10xl': '5rem',
    },
    extend: {
      fontFamily: {
        common: ['TT Commons', 'sans-serif'],
        woodland: ['PP Woodland', 'sans-serif'],
      },
      colors: {
        white: {
          'opacity-50': 'hsla(0, 0%, 100%, 0.5)',
          DEFAULT: 'hsla(0, 0%, 100%, 1)',
        },
        gray: {
          100: 'hsla(187,7%,21%,1)',
          200: 'hsla(0,0%,35%,1)',
          300: 'hsla(0,0%,65%,1)',
          400: 'hsla(0,0%,90%,1)',
        },
        black: 'hsla(0,0%,7%,1)',
        red: {
          500: 'hsla(359,83%,53%,1)',
        },
        green: {
          500: 'hsla(145,94%,44%,1)',
        },
        brown: {
          300: 'hsla(29,35%,38%,1)',
          500: 'hsla(45,100%,31%,1)',
        },
        cream: {
          500: 'hsla(29,49%,87%,1)',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
