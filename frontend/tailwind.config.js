/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#004E89', // you can change this to your preferred primary color
        },
        secondary: {
          DEFAULT: '#FFAD1F', // you can change this to your preferred secondary color
        },
        Highlight: {
          DEFAULT: '#1C98F7', // you can change this to your preferred secondary color
        },
      },
    },
  },
  plugins: [],
}