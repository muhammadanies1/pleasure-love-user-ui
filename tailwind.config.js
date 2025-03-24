/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors:{
      primary:'#afd1d2',
    },
    screens:{
      'tablet':'750px',
      'laptop': '990px',
      'desktop':'1000px'
    },
    extend: {},
  },
  plugins: [],
}

