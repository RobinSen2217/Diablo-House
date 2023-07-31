/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'spin-slow-reverse':'spin 10s reverse linear infinite',
      },
      fontFamily: {
        Nosifer: ['Nosifer', 'cursive'],
        Eater:['Eater','cursive'],
        Butcherman:['Butcherman', 'cursive'],
        Mystery:['Mystery Quest', 'cursive'],
        Horror:"HORROR",
        Metal:['Metal Mania', 'cursive'],
        
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
