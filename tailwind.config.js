//const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      IranYekan: "IranYekanRegular",
      IranYekanMedium: "IranYekanMedium",
      IranYekanBold: "IranYekanBold",
    },
    extend: {
      colors: {
        oo: colors.cyan,
        blue: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        gray: {
          100: "#f7fafc",
          // ...
          900: "#1a202c",
        },
        primary: { main: "#5c6ac4", dark: "#5c6a94", light: "#5c6ac4" },
        secondary: { main: "#ecc94b", dark: "#ff7849", light: "#13ce66" },
        error: "#ff7849",
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    spacing: {
      px: "1px",
      0: "0",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // plugin(function({ addComponents }) {
    //   addComponents({
    //     '.btn': {
    //       padding: '.5rem 1rem',
    //       borderRadius: '.25rem',
    //       fontWeight: '600',
    //     },
    //     '.btn-blue': {
    //       backgroundColor: '#3490dc',
    //       color: '#fff',
    //       '&:hover': {
    //         backgroundColor: '#2779bd'
    //       },
    //     },
    //     '.btn-red': {
    //       backgroundColor: '#e3342f',
    //       color: '#fff',
    //       '&:hover': {
    //         backgroundColor: '#cc1f1a'
    //       },
    //     },
    //   })
    // })
  ],
};
