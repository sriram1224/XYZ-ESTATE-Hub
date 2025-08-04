/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#fdfaf6",
        "soft-blue": "#d0e6f7",
        "warm-orange": "#f2994a",
        "warm-gray": "#7a6f66",
        primary: "#f2994a",
      },
    },
  },
  plugins: [],
};
