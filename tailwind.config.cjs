/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        firstly: "#5BB5A2",
        secondly: "#E8F2EE",
        pinky: "#F1DFDF",
        gray1: "#DFE1F1",
        gray2: "#DFEAF1",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    prefix: "",
    darkTheme: "light",
  },
};
