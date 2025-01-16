/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      colors: {
        peel: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd44d",
          400: "#fbc024",
          500: "#f49e0a",
          600: "#d97806",
          700: "#b45409",
          800: "#92410e",
          900: "#78350f",
          950: "#451a03",
        },
        smoke: {
          50: "#f7f7f8",
          100: "#eeeef0",
          200: "#d9d9de",
          300: "#b8b9c1",
          400: "#91939f",
          500: "#737584",
          600: "#5d5e6c",
          700: "#4c4d58",
          800: "#41414b",
          900: "#26262b",
          950: "#0f0f11",
        },
      },
    },
  },
  plugins: [],
};
