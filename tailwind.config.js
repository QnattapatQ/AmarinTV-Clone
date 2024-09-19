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
      '970': '970px',  
      '992': '992px',  
      '1170': '1170px',       
      '1200': '1200px',       
    },
    extend: {},
  },
  plugins: [],
}

