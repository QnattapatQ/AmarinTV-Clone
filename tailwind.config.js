/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '540' : '540px',
      '750': '750px',  
      '768': '768px',  
      '992': '992px',        
      '1200': '1200px',       
      '1440': '1440px',       
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

