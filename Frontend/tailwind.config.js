/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
     boxShadow:{
neon: "0 0 5px theme('colors.black'), 0 0 20px theme('colors.black')"
     }
  },

  plugins: [],
}
});
