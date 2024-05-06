/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      volkhov: ["Volkhov", "serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#FB583D",
        title: "#222222",
        paragraph: "#666666",
        back: "#C1C1C1",
        'sub-head': "#333333",
        details: "#888888",
      },
    },
  },
  plugins: [require("daisyui")],
};
