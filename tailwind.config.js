/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'anton': ['Anton', 'sans-serif'],
        'alkSanet': ['ALK Sanet', 'sans-serif'],
        'bpgESM': ["BPG ExtraSquare Mtavruli", 'sans-serif'],
        'arialGeo': ["Arial GEO", 'sans-serif'],
        
      },
      colors: {
        "main": "rgb(255, 255, 255)",
        "secondary": "rgb(180, 210, 115)",
        "bg-1": "#011014",
        "bg-2": "#06111c",
        "bg-3": "#08192f",
        "bg-4": "#10213a"
      },
    },
    screens: {
      'phone': '400px',

      'tablet': '800px',

      'laptop': '1024px',

      'desktop': '1280px',
    },
  },
  plugins: [],
}
