/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pgWhite: '#FFFCF5',
        pgLightPurple: '#BABCE2',
        pgBlue: '#374375',
        pgRose: '#DFAEA0',
        pgRed: '#89515A',
      },
    },
  },
  plugins: [],
}

