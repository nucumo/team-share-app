const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins), Apple Color Emoji", ...fontFamily.sans],
      },
      aspectRatio: {
        cover: "3 / 1",
      },
      boxShadow: {
        sm: "0 2px 4px -1px rgba(0, 0, 0, 0.1)",
        xl: "0 8px 32px -8px rgba(0, 0, 0, 0.2)",
        card: "0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)",
      },
      colors: {
        gray: {
          50: "#F9FAFB",
          100: "#F3F5F6",
          200: "#E5E8EB",
          300: "#D1D6DB",
          400: "#9CA5AF",
          500: "#6B7480",
          600: "#4B5563",
          700: "#374251",
          800: "#1F2737",
          900: "#111827",
        },
        red: {
          400: "#FF867E",
          500: "#FF675E",
        },
        teal: {
          50: "#EDFBF9",
          200: "#ABE7E1",
          700: "#1B756C",
        },
        blue: {
          50: "#F0F4FF",
          200: "#B2C3FF",
          700: "#253F99",
        },
        purple: {
          50: "#F9F7FF",
          100: "#E8DAFF",
          200: "#D1B5FF",
          500: "#8D47FF",
          600: "#7139CC",
          700: "#552B99",
        },
        cyan: {
          50: "#F5FCFF",
          100: "#D4EEFC",
          200: "#A9DDF9",
          400: "#53BAF3",
          500: "#28A9F0",
          600: "#2087C0",
          700: "#186590",
        },
        orange: {
          50: "#FFFBF4",
          100: "#FFECD2",
          200: "#FFD9A6",
          500: "#FF9F20",
          600: "#CC7F1A",
          700: "#995F13",
        },
        pink: {
          50: "#FFF8FC",
          100: "#FFDEF2",
          500: "#FF5BBD",
          600: "#CC4998",
        },
      },
    },
  },
  plugins: [],
};
