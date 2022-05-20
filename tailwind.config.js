const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
  './containers/**/*.{js,ts,jsx,tsx}',],
  theme: {
    screens: {
      xs: { max: '640px' },

      ...defaultTheme.screens,
    },
    extend: {
      fontFamily:{
        Sora:[ 'Sora'],
        pixel:["'Press Start 2P'", "cursive"]
      }, backgroundImage: {
        'background': "url('/Images/background.png')",
      },
    },
  },
  plugins: [],

}
