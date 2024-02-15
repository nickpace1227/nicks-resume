/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7856ff",
        blue: "blue",
      },
      spacing: {
        150: "37.5rem",
        168: "42rem",
      },
      fontFamily: {
        FjallaOne: ["FjallaOne"],
        Lemon: ["Lemon"],
        BadScript: ["BadScript"],
        Honk: ["Honk"],
        Martel: ["Martel"],
      },
      boxShadow: {
        dark: "0 10px 15px -3px rgb(0 0 0 / 0.7), 0 4px 6px -4px rgb(0 0 0 / 0.7)",
      },
    },
  },
  plugins: [],
};
