/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': {
        '50': '#eff5ff',
        '100': '#dbe8fe',
        '200': '#bfd7fe',
        '300': '#93bbfd',
        '400': '#609afa',
        '500': '#3b82f6',
        '600': '#2570eb',
        '700': '#1d64d8',
        '800': '#1e55af',
        '900': '#1e478a',
        '950': '#172e54',
      },
      'secondary': {
        '50': '#f6f7f9',
        '100': '#eceef2',
        '200': '#d5d9e2',
        '300': '#b1bbc8',
        '400': '#8695aa',
        '500': '#64748b',
        '600': '#526077',
        '700': '#434e61',
        '800': '#3a4252',
        '900': '#343a46',
        '950': '#23272e',
    },
    'white': '#fff'
    
    },
    extend: {


    },
  },
  plugins: [],
}