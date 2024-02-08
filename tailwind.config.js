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
        150: "37.5rem",
      },
      fontFamily: {
        FjallaOne: ["FjallaOne"],
        Lemon: ["Lemon"],
        BadScript: ["BadScript"],
        Honk: ["Honk"],
      },
    },
  },
  plugins: [],
};
