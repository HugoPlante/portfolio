/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        "background-main": "#121828",
        "background-variant": "#202938",
      },
    },
  },
  plugins: [],
}
