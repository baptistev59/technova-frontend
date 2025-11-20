/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.4s ease-out",
      }
    },
  },
  plugins: [],
}
