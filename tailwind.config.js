/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutralGold: {
          100: '#B2A68B',
          200: '#A7A08A',
          300: '#9C8E7A',
          400: '#8D8B6F',
          500: '#C1A875', // target gold
        },
      },
    },
  },
  plugins: [],
}

