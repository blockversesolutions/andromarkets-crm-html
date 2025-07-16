/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/pages/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        secondary: "#f59e0b",
        brandGreen: "#10b981",
        primary: {
          900: "#FCD331",
          400: "#c2a11b",
        },
        dark: {
          400: "#E0E0E080",
          500: "#131315",
          600: "#000",
        },
        roseRed: {
          200: "#FE6D8E",
        },
        green: {
          800: "#359846",
        },
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
