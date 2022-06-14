/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      rotate3d: (theme) => ({
        // default values
        // https://tailwindcss.com/docs/rotate
        ...theme('rotate'),
        // new values
        ...{
          '-180': '-180deg',
          '-60': '-60deg',
          '-50': '-50deg',
          '-40': '-40deg',
          '-35': '-35deg',
          '-30': '-30deg',
          '-25': '-25deg',
          '-20': '-20deg',
          '-15': '-15deg',
          '-10': '-10deg',
          10: '10deg',
          15: '15deg',
          20: '20deg',
          25: '25deg',
          30: '30deg',
          35: '35deg',
          40: '40deg',
          50: '50deg',
          60: '60deg',
        },
      }),
    },
  },
  plugins: [require('@kamona/tailwindcss-perspective')],
};
