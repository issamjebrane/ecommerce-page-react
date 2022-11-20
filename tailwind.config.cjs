/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {   
      fontSize:{
        xs:'0.6rem',
      },
      fontFamily:{
        Kumbh : ['Kumbh Sans','sans-serif']
      },
      backgroundImage :{
        'mobile-product': "url('/public/images/image-product-1-thumbnail.jpg')"
      },
      colors:{
        Orange:"hsl(26, 100%, 55%)",
        Pale_orange:"hsl(25, 100%, 94%)",
        Very_dark_blue: "hsl(220, 13%, 13%)",
        Dark_grayish_blue: "hsl(219, 9%, 45%)",
        Grayish_blue: "hsl(220, 14%, 75%)",
        Light_grayish_blue:"hsl(223, 64%, 98%)",
        White: "hsl(0, 0%, 100%)",
        Black : "hsl(0, 0%, 0%)"
      },
    },
  },
  plugins: [],
}