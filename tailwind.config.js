/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ECF2FF",
        secondary: "#FFFFFF",
        result: "#CAC9FF",
        dark: "#303B59",
        pink: "#fff7f6",
        red: "#F55",
        yellow: "#FFB21E",
        lightYellow: "#fffbf4",
        green: "#00BB8F",
        lightGreen: "#f2fcf9",
        blue: "#1125D6",
        lightBlue: "#f3f4fd",
      },
      backgroundImage: {
        "gradient-1":
          "linear-gradient(180deg, #75F 0%, #6943FF 0.01%, #2F2CE9 100%)",
        "gradient-2":
          "linear-gradient(180deg, #4D21C9 0%, rgba(37, 33, 201, 0.00) 100%, rgba(37, 33, 201, 0.00) 100%)",
      },
      fontFamily: {
        sans: ["Hanken Grotesk", "sans-serif"],
      },
    },
  },

  plugins: [],
};
