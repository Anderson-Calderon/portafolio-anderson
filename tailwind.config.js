/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  				"index.html",
  				"./layout/*.{jsx,js,ts,tsx}",
  				"./components/*.{jsx,js,ts,tsx}",
  				"./src/pages/index.js"


  			],
  theme: {
    extend: {},
  },
  plugins: [],
}

