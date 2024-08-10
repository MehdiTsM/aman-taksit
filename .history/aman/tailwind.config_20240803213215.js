/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)', transform:'translateX(1px)', },
          '50%': { opacity: '0', transform: 'translateY(10px)', transform:'translateX(5px)', },
          '100%': { opacity: '1', transform: 'translateY(0)', transform:'translateX(0px)', },
        },
      },

      animation: {
        fadeInUp: 'fadeInUp 0.5s ease-out',
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
  plugins: [],
};