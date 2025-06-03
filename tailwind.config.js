/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,css}",
    "./src/**/*.js",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#38bdf8', // Warna utama
        secondary: '#64748b', // Warna sekunder
        dark: '#0f172a', // Warna dark mode
      },
      screens: {
        '2xl': '1320px', // Menambahkan breakpoint custom
      },
    },
  },
  plugins: [],
};
