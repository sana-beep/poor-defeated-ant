/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./App.jsx"
  ],
  theme: {
    extend: {
      colors: {
        'xp-blue': '#0078d4',
        'xp-gray': '#c0c0c0',
        'xp-dark-gray': '#808080',
        'xp-light-gray': '#f0f0f0'
      },
      fontFamily: {
        'xp': ['Tahoma', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}
