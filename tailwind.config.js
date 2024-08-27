/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '750': '750px',  
      '970': '970px',  
      '992': '992px',  
      '1170': '1170px',       
      '1200': '1200px',       
    },
    extend: {},
  },
  plugins: [],
}

