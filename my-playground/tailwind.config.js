/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tomato-orange':'#ff5640',
        'lavenderblush':'#fff1f2',
        'gray-94':'#f0f0f0',
        'tibetan-plateau':'#8ff7d5',
      },
    },
  },
  plugins: [],
};