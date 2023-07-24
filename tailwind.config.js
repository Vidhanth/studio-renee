const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3F5668",
        primaryHover: "#2E4556",
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
