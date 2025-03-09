/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['Forte', 'cMyriad Variable Concept'],
        poppins: ['Poppins', 'sans-serif'],
        averia: ['Averia Serif Libre', 'serif'],
        jp: ['Noto Sans JP', 'sans-serif'],
        mincho: ['Sawarabi Mincho', 'serif']
      },
      colors: {
        'custom-dark': '#24303F',
        'custom-Beige': '#EBDDCB',
        'custom-light': '#1A222C',
        'custom-layout-light': '#ECF2FF',
        'custom-layout-dark': '#253662',
        'custom-left-bar': '#5D87FF',
        'custom-border': 'rgb(51, 63, 85)'
      },
      animation: {
        'slow-spin': 'spin 4s linear infinite',
        'slow-spinn': 'spin 20s linear infinite'
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scroll-bar': {
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none'
        },
        '.no-scroll-bar::-webkit-scrollbar': {
          display: 'none'
        },
        '.thin-scrollbar': {
          'scrollbar-width': 'thin',
          'scrollbar-color': '#5D87FF #EBDDCB'
        },
        '.thin-scrollbar::-webkit-scrollbar': {
          width: '6px',
          height: '6px'
        },
        '.thin-scrollbar::-webkit-scrollbar-thumb': {
          background: '#5D87FF',
          borderRadius: '6px'
        },
        '.thin-scrollbar::-webkit-scrollbar-track': {
          background: '#EBDDCB'
        }
      })
    }
  ]
}
