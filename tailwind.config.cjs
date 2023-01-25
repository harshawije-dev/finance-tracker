/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        btnPrimary: "#1a73e8",
        fontPrimary: "#1c1c1c",
      },
    },
  },
  plugins: [],
};
