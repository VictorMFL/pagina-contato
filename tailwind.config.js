/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'roxo-escuro': '#16151E',
        "roxo-claro": '#24243D',
        "cor-texto": '#E1E1E6'
      }
    },
  },
  plugins: [],
}

