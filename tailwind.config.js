/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
                
         'Lime-Green': 'hsl(163, 72%, 41%)',
         'not-white': '	 #e6e6e6',
         'Bright-Red': 'hsl(356, 69%, 56%)',
         'Facebook': 'hsl(208, 92%, 53%)',
         'Twitter': 'hsl(203, 89%, 53%)',
         'YouTube': 'hsl(348, 97%, 39%)',
         'Very-Dark-Blue-(BG)': 'hsl(230, 17%, 14%)',
         'Very-Dark-Blue-(Top-BG-Pattern)': 'hsl(232, 19%, 15%)',
         'Dark-Desaturated-Blue-(Card-BG)': 'hsl(228, 28%, 20%)',
         'not-dark': '#414a71',
         'Desaturated-Blue-(Text)': 'hsl(228, 34%, 66%)',
         'Very-Pale-Blue-(Top-BG-Pattern)': 'hsl(225, 100%, 98%)',
         'Light-Grayish-Blue-(Card-BG)': 'hsl(227, 47%, 96%)',
         'Dark-Grayish-Blue-(Text)': 'hsl(228, 12%, 44%)',
         'Very-Dark-Blue-(Text)': 'hsl(230, 17%, 14%)',
      }
    },
  },
  plugins: [],
}