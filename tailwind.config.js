/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    screens: {
      'sm' : {'min':'300px' , 'max':'500px'},
      'mb' : {'min':'600px' , 'max':'991px'}
    },

  },
  plugins: [],
}

