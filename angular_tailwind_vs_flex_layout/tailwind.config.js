const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: ["./src/**/*.{html,ts}"],
  important: true, // to overwride angular material

  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
    }),
    screens: {
      ...defaultTheme.screens,
      xs: "475px",
      r,
    },
    flex: {
      ...defaultTheme.flex,
      0.5: "0.5 0.5 0%",
      2: "2 2 0%",
      2.5: "2.5 2.5 0%",
      3: "3 3 0%",
      3.5: "3.5 3.5 0%",
      4: "4 4 0%",
      4.5: "4.5 4.5 0%",
      5: "5 5 0%",
      6: "6 6 0%",
      7: "7 7 0%",
      8: "8 8 0%",
      9: "9 9 0%",
      10: "10 10 0%",
    },
    extend: {
      colors: {
        primary: "hsl(207, 90%, 54%)",
        "primary-medium": "#2196F3",
        "primary-color-dark": "#058ADB",
        "primary-secondary": "#d7edff",
      },
    },
  },
  plugins: [],
};
