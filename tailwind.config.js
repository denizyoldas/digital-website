/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FF5678',
          900: '#020E35'
        },
        secondary: {
          100: '#FFFFFF',
          500: '#FFDDE4',
          900: '#2B2B2B'
        },
        accent: '#FFEEF6'
      },
      boxShadow: {
        header: '0px 8px 20px 5px rgba(0, 0, 0, 0.08)'
      },
      fontFamily: {
        sans: ['Merriweather', ...fontFamily.sans]
      }
    },
    screens: {
      sm: '768px',
      md: '1152px',
      lg: '1440px',
      xl: '1920px'
    }
  },
  plugins: []
}
