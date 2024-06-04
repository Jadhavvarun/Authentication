/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-1": "#1A1A2E",
        "yellow-1": '#FFF500',
      }
    },
  },
  plugins: [],
}