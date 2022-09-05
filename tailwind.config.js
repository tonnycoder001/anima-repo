/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95% ' ,
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGraishBlue: 'hsl(227, 12% 61%)',
        veryDarkBlue: 'hsl(223, 12%, 13%)',
        veryPaleBlue: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        white: 'hsl(12, 88%, 59%)',
        purple: 'hsl(12, 88%, 69%)',
        midnight: 'hsl(12, 88%, 69%)',
        metal:  'hsl(228, 39%, 23%)',
        tahiti: 'hsl(228, 39%, 23%)',
        silver: 'hsl(223, 12%, 13%)',
        bermuda: 'hsl(227, 12% 61%)',
        black: 'hsl(12, 88%, 59%)',
        gray: 'hsl(12, 88%, 59%)',
        emerald: 'hsl(12, 88%, 59%)',
        indigo: 'hsl(223, 12%, 13%)',
        yellow: 'hsl(223, 12%, 13%)',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}
