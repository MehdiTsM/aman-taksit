/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        spinBackward: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },

        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)', transform:'translateX(1px)', },
          '50%': { opacity: '0', transform: 'translateY(10px)', transform:'translateX(5px)', },
          '100%': { opacity: '1', transform: 'translateY(0)', transform:'translateX(0px)', },
        },
      },

      animation: {
        fadeInUp: 'fadeInUp 0.5s ease-out',
        spinBackward: 'spinBackward 1s linear infinite',
      },
      
      colors: {
        customOrange: '#f37b3b',
        customBlue: '#4bc4dc',
        customGreen: '#70ba50',
        customDarkGreen: '#539c4f',
        customWhite: '#fdfefe',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.line-clamp-3': {
          display: '-webkit-box',
          WebkitLineClamp: '3',
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          '.hide-scrollbar': {
            'scrollbar-width': 'none', /* Firefox */
            '-ms-overflow-style': 'none', /* Internet Explorer and Edge */
          },
          '.hide-scrollbar::-webkit-scrollbar': {
            'display': 'none', /* Chrome, Safari, and newer versions of Edge */
          },
        },
      }, ['responsive', 'hover'])
    }
  ],
};