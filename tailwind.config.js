module.exports = {
  purge: ["./**/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: "#fff",
      gray: {
        900: "#172638",
        700: "#46505B",
        DEFAULT: "#979797",
        300: "#EFEDED",
        100: "#FAFAFA",
      },
      blue: {
        light: "#5294F0",
        DEFAULT: "#475A79",
        dark: "#233b56",
      },
      red: {
        DEFAULT: "#F4616B",
        dark: "#DF5A63",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
