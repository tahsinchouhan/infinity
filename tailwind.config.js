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
        footer: "#F6EEF5",
      },
      spacing: {
        eighty: "80vw",
        ninety: "90vw",
        fifty: "50vw",
        sixty: "60vw",
        seventy: "70vw",

        fourty: "40vw",
        hfifty: "50vh",
        hseventy: "70vh",
        heighty: "80vh",
        42: "10.5rem",
        86: "22rem",
        98: "28rem",
        100: "30rem",
        104: "34rem",
        106: "38rem",
        108: "40rem",
        110: "44rem",

        per5: "5%",
        per8: "8%",

        per10: "10%",
        per15: "15%",
        per20: "20%",
        per25: "25%",
        per30: "30%",
        per35: "38%",
        per40: "40%",
        per50: "50%",
        per60: "60%",
        per70: "70%",
        per80: "80%",
        per85: "85%",
        per90: "90%",
        per95: "95%",
        per105: "110%",
        per110: "135%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
