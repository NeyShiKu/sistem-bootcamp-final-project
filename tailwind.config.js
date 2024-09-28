/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'bluesistem': '#075EFD',
      'bluefooter': '#071F51',
      'grayfooter': '#ABB0BA',
      'pinktable': '#F4F0F8',
      'yellowtb': '#FFD050',
      'bluetb': '#075EFD',
      },
    },
  },
  plugins: [],
}

