/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '375px',
      lg: '1440px'
    },
    extend: {
      colors: {
        darkCyan: 'hsl(158, 36%, 37%)',
        veryDarkCyan: 'hsl(157, 57%, 15%);',
        cream: 'hsl(30, 38%, 92%)',
        veryDarkBlue: 'hsl(212, 21%, 14%)',
        darkGreyishBlue: 'hsl(228, 12%, 48%)',
        white: 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Fraunces: ['Fraunces', 'serif']
      }
    },
  },
  plugins: [],
}
