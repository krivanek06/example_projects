const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  import: true,
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '475px',
        ...defaultTheme.screens
      },
      colors: {
        'primary-eduard': '#129445',
        red: {
          500: '#1122aa'
        }
      }
    }
  },
  plugins: []
};
