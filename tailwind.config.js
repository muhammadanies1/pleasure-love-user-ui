/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors:{
      primary:'#afd1d2',
      red:"#FF0020",
      pink:"#FB9EF8",
      green:"#67d448",
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

