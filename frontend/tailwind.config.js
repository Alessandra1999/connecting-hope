/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary-light': {
          100: '#CBDAD5',
          300: '#89A7B1',
          500: '#566981',
          700: '#3A415A',
          900: '#34344E',
        },
        'primary-dark': {
          100: '#E3E3D1',
          300: '#B0B087',
          500: '#7C8A6E',
          700: '#4B5757',
          900: '#58706D',
        },
      },
    },
  },
  plugins: [],
};
