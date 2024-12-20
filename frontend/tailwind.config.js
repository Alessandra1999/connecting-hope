/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 theme: {  darkMode: ['selector', '[data-mode="dark"]'],
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'radial-light': 'radial-gradient(circle, #89A7B1, #566981)',
        'radial-dark': 'radial-gradient(circle, #34344E, #3E77C0)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.95)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        fadeOut: 'fadeOut 0.5s ease-out forwards',
      },
      colors: {
        "primary-light": {
          50: "#FFF",
          100: "#E5F8FF",
          150: "#D9D5D5",
          200: "#CBDAD5",
          250: "#B2D1DB",
          300: "#A7CCD9",
          350: "#A5BEDE",
          400: "#89A7B1",
          450: "#8AA8B2",
          500: "#6FA7BA",
          550: "#6C7471",
          600: "#0087FF",
          650: "#3E77C0",
          700: "#13485A",
          750: "#1E1E1E",
        },
        "primary-dark": {
          50: "#FFF",
          100: "#D9D5D5",
          150: "#3E76BF",
          200: "#3F76BE",
          250: "#3E77C0",
          300: "#3C5183",
          350: "#374683",
          400: "#303881",
          450: "#363C5A",
          500: "#34344E",
          550: "#343651",
          600: "#35354F",
          650: "#1B3454",
          700: "#171B4D",
          750: "#171A27",
          800: "#1E1E1E",
        },
      },
      height: {
        "max-without-navbar": "calc(100vh - 87px)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
});
