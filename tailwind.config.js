const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F5EAE2",
        primaryHover: "#EDE1D8",
        secondary: "#CCCCCC",
        danger: colors.red,
        warning: colors.yellow,
        success: colors.green,
        info: colors.blue,
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      dropShadow: {
        strong: "0 0.15rem 0.15rem rgba(0, 0, 0, 0.75)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    // require('@tailwindcss/typography'),
  ],
};
