/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: "#e11d48",
          secondary: "#183153",
          underline: "#e91e63",
          abu: "#dee2e6",
          neutral: "#fff",
        },
      },
    ],
  },
};
