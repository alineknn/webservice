/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <— this is critical
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
