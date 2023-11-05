/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
   
    extend: {
      backgroundColor: {
        'zcb-primary' : '#fff',
        'zcb-secondary' :'#FBFAF8',
        'zcb-tertiary' : '#393E46'
      },
      backgroundImage:{
        'sec-1' : "url('assets/images/sec_1_bg.jpg')"
      }
    },
  },
  plugins: [],
}