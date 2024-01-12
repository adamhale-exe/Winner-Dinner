/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        block: ".2rem .2rem 0rem #000",
        blockhover: ".15rem .15rem 0rem #000",
      },
    },
  },
  plugins: [],
};
