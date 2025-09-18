/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          themeColor:"#F07621",
          themeColorTwo:"#fff2c5"
      },
    },
  },
  plugins: [],
};
