/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'anton': ['Anton', 'sans-serif']
      },
      colors: {
        "main": "rgb(255, 255, 255)",
        "bg": "rgb(0, 0, 0)",
      }
    },
  },
  plugins: [],
}
