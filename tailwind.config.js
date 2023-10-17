/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/*.js"],
  // content: ["./build/**/*{html,js}"]
  theme: {
    screen:{
      'xsm': '450px',
      'xxsm': '300px'
    },
    extend: {},
  },
  plugins: [],
}

