module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "775px",
      // => @media (min-width: 768px) { ... }

      lg: "1030px",
      // => @media (min-width: 1024px) { ... }

      xl: "1300px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        beauty: "#FEF4E3",
        offer: "#FFF2EF",
        new: "#D9E9EA",
      },
      spacing: {
        eighty: "80vw",
        ninety: "90vw",
        fifty: "50vw",
        fourty: "40vw",
        hfifty: "50vh",
        hseventy: "70vh",
        86: "22rem",
        100: "30rem",
        104: "34rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
