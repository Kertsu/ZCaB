/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
   
    extend: {
      backgroundColor: {
        'zcb-primary' : '#fff',
        'zcb-secondary' :'#FBFAF8',
        'zcb-tertiary' : '#393E46',
        'zcb-alternate' : '#FAF8F4'
      },
      backgroundImage:{
        'sec-1' : "url('assets/images/sec_1_bg.jpg')"
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}