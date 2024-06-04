/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        "blue-1": "#1A1A2E",
        "blue-2": "#28166F",
        "yellow-1": '#FFF500',
      }
    },
  },
  plugins: [],
}