/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        first: "#262A56",
        second: "#1D267D",
        third: "#5C469C",
        fourth: "#D4ADFC"
        
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
    }
  },
  plugins: [],
}

