/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "grayText": '#B2B2B2',
        "mobileBg": '#2f2e2f',
        "navText":"#AFB1B2"
      }
    },
  },
  plugins: [],
}