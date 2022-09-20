/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '380px',
      ...defaultTheme.screens
    },
    extend: {
      fontSize: {
        'xxs': '.60rem'
      }
    },
  },
  plugins: [],
}
