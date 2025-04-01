/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Custom colors
        primaryGreen: "#a9fa4c",
        primaryGreenHover: "#8cdb1c",
        primary: "#bd93f9",
        secondary: "#ff79c6",
        error: "#ff5555",
        textColor: "#d6d7db",
        background: "#232530",
        success: "#51fa7b",
        card: "#30323e",
        backgroundHighlight: "#515669",
        tag: "#f1fa8c",
      },
    },
  },
  plugins: [],
};
