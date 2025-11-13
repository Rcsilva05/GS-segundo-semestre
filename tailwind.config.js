/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#477BBC',
          600: '#3a6aa8',
        },
        purple: {
          500: '#9359D8',
          600: '#8248c7',
        }
      }
    },
  },
  plugins: [],
}