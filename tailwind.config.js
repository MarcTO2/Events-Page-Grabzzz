/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lavender: "#e3e7f3",
        white: "#fff",
        rosybrown: "#bc9696",
        snow: "#fffcfc",
        black: "#000",
        cornflowerblue: "#6881cd",
      },
      spacing: {},
      fontFamily: {
        karma: "Karma",
        "roboto-condensed": "'Roboto Condensed'",
        playball: "Playball",
        "jacques-francois-shadow": "'Jacques Francois Shadow'",
      },
    },
    fontSize: {
      xl: "20px",
      "13xl": "32px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
