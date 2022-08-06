/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        play: ["Playfair Display", "serif"],
        adelia: ["ADELIA", "cursive"],
      },
    },
  },
  plugins: [],
};
