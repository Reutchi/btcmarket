/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'1020px',
      xl:'1440px',
    },
    extend: {
      boxShadow:{
        '3xl': '0px 0px 16px rgba(9, 24, 26, 0.04)',
        '2xl': '0px 0px 16px rgba(9, 24, 26, 0.04)',

},
      content:{
        'arrowIcon':'url("../src/assets/Arrow.svg")',
      },
      colors:{
        lightGray:'#FAFAFA',
        lightGreen: '#4CFDC7',
        whiteGreen:'#BDFFEB',
        lightBlack:'#18181B',
        lightWhite:'#FCFBF8'

      },
      fontFamily:{
        sans:['Lexend', 'sans-serif']
      },
    },
  },
  plugins: [require("daisyui")],
}
