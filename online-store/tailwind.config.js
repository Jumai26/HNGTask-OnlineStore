/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#100B00',
        'secondary-color': '#85CB33',
        'light-yellow': "#EFFFC8",
        'light-blue': "#A5CBC3",
        'brown': "#3B341F",
      },
      fontFamily: {
        body: ['Poppins'],
        headings: ['Montserrat']
      },
    },
  },
  plugins: [],
}

