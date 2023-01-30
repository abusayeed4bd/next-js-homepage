/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#00A67E',
      'secondary': '#0B483A',

      'dark': '#35384E',
      'light-dark': '#544F56',
      'white': '#FFFFFF',
      'black': '#0000',
      'light': '#cccc'

    },
  },
  plugins: [],
}