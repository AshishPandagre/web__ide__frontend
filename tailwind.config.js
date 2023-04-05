/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#161616",
        modal_color: "#1c1917",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};