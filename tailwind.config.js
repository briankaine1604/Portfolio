/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        orange:'#FFA500',
        extpink:{
          100:'#FFB6C1',
          200:'#FF69B4'
        }
      },
      backgroundImage: {
        
      },
      boxShadow: {
        'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
