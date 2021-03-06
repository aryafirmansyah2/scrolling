const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/*.js', './pages/**/*.js', './components/*.js', './components/**/*.js'],
  theme: {
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '1xl': '1.375rem',
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
      '9.5xl': '4.5rem',
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
          500: 'hsla(0, 0%, 93%, 1)',
        },

        black: {
          DEFAULT: '#121212',
          200: 'hsla(187, 7%, 21%, 1)',
        },
        red: {
          500: 'hsla(359,83%,53%,1)',
          team: 'hsla(0, 100%, 82%, 1)',
        },
        green: {
          500: 'hsla(145,94%,44%,1)',
        },
        brown: {
          300: 'hsla(29,35%,38%,1)',
          500: 'hsla(45,100%,31%,1)',
          gold: 'hsla(45, 100%, 35%, 1)',
        },
        cream: {
          100: 'hsla(26, 95%, 85%, 1)',
          500: 'hsla(29,49%,87%,1)',
        },
      },
      animation: {
        'bounce-slow': 'bouncing 4s infinite ',
        'bounce-fast': 'bouncing 3s infinite ',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/aspect-ratio')],
};
