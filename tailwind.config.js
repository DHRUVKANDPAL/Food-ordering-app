/** @type {import('tailwindcss').Config} */
export default { 
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        'hero': "url('https://media.cntraveler.com/photos/61e886f19580ae68b5219023/master/pass/Oji%20Seichi%20Toronto_Oji%20Food-Food%20Spread_Roberto%20Caruso.jpg')",
        'hero2':"url('https://t3.ftcdn.net/jpg/02/48/92/96/360_F_248929619_JkVBYroM1rSrshWJemrcjriggudHMUhV.jpg')"
      }
    },
    
  },
  plugins: [],
  prefix: 'tw-',
}