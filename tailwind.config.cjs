/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '750px'},
      // => @media (max-width: 639px) { ... }
      'mobile':{'min':'639px'},
    },
    extend: {  
      flexGrow: {
        '2': 2
      }, 
      fontSize:{
        xs:'0.8rem',
      },
      fontFamily:{
        Kumbh : ['Kumbh Sans','sans-serif']
      },
      backgroundImage :{
        'mobile-product': "url('/public/images/image-product-1-thumbnail.jpg')"
      },
      colors:{
        Orange:"hsl(26, 100%, 55%)",
        grayish_orange : "hsl(26, 100%, 60%)",
        Pale_orange:"hsl(25, 100%, 94%)",
        Very_dark_blue: "hsl(220, 13%, 13%)",
        Dark_grayish_blue: "hsl(219, 9%, 45%)",
        Grayish_blue: "hsl(220, 14%, 75%)",
        Light_grayish_blue:"hsl(223, 64%, 98%)",
        White: "hsl(0, 0%, 100%)",
        Black : "hsl(0, 0%, 0%)"
      },
      animation :{
        wiggle : 'wiggle 1s ease-in-out',
      },
      keyframes :{
        wiggle :{
          'from' : {display : "block"},
          'to' : {display : 'hidden'}
        }
      },
      transitionProperty :{
        display: "display",
        width: "widht"
      } 
      
    },
  },
  plugins: [],
}