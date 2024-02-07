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
      },
      spacing: {
        134: "33.5rem",
      },
      fontFamily: {
        FjallaOne: ["FjallaOne", "sans-serif"],
        Lemon: ["Lemon", "serif"],
        BadScript: ["BadScript", "sans-serif"],
      },
    },
  },
  plugins: [],
};
