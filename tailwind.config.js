/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        assistant: ['Assistant', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
        Montserrat: ["Montserrat", 'sans-serif']
      },
    },
  },
  plugins: [],
}

