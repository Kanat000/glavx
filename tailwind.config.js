import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        xxl: "40px",
        xl: "25px",
        lg: "15px",
        md: "10px",
        sm: "8px",
        xs: "4px",
      },
      fontSize: {
        "5xl": "40px",
        "4xl": "35px",
        "3xl": "24px",
        "2xl": "18px",
        xl: "16px",
        lg: "15px",
        base: "14px",
        sm: "12px",
        xs: "10px",
      },
      fontWeight: {
        600: 600,
        400: 400,
      },
      colors: {
        "gray-50": "#FEFEFF",
        "yellow-500": "#FFAD05",
        "orange-400": "#FF773D",
        "blue-500": "#0072BB",
        "red-500": "#A20021",
        "green-400": "#77AD78",
        "dark-50": "#1E1A1D",
      },
      fontFamily: {
        lato: ["Lato", "serif"],
        montserrat: ["Montserrat", "serif"],
        oswald: ["Oswald", "serif"],
        "luckiest-guy": ["Luckiest Guy", "serif"],
        rubik: ["Rubik Mono One", "serif"],
        ttInterface: ['"TT Interfaces"', "sans-serif"],
      },
      backgroundImage: {
        "tv-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 54.37%, rgba(0, 0, 0, 0.7) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0) 73.37%, rgba(0, 0, 0, 0.7) 100%)",
        "dark-light-effect":
          "radial-gradient(50% 50% at 50% 50%, #0D201C 0%, rgba(17, 28, 25, 0) 100%);",
        "green-light-effect":
          "radial-gradient(50% 50% at 50% 50%, #035040 0%, rgba(3, 80, 64, 0) 100%);",
        "banner-mask":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(90deg, rgba(0, 0, 0, 0.44) 5.95%, rgba(0, 0, 0, 0) 65.86%);",
        "resail-banner-mask":
          "linear-gradient(96.09deg, rgba(255, 255, 255, 0.75) 4.82%, rgba(255, 255, 255, 0.57) 26.27%, rgba(255, 255, 255, 0) 64.67%)",
      },
      boxShadow: {
        tab: " 0px 0px 30px -10px #00000033",
        live: "0px 0px 12px 0px #F31515",
        base: "0px 5px 20px -10px #2E313026;",
        "card-hover": "0 0 20px 2px #E3F2FD;",
      },
    },
  },
  plugins: [
    heroui({
      addCommonColors: true,
      layout: {
        colors: {
          primary: "text-gray-100",
        },
        fontFamily: "TT interfaces",
        radius: {
          xxl: "40px",
          xl: "25px",
          lg: "15px",
          md: "10px",
          sm: "8px",
          xs: "4px",
        },
      },
    }),
    require("tailwindcss-animated"),
  ],
};
