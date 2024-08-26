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
      '1170': '1170px',       
    },
    extend: {},
  },
  plugins: [],
}

