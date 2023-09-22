/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        montserrat: ["var(--font-montserrat)"],
      },
      fontSize: {
        sm: ["0.75rem", "1rem"],
        md: ["0.875rem", "1.375rem"],
        lg: ["1rem", "1.5rem"],
        xl: ["1.25rem", "1.75rem"],
        "2xl": ["1.5rem", "2rem"],
        "3xl": ["2rem", "2.5rem"],
      },
      colors: {
        blue: "#18489A",
        hoverBlue: "#ECF0F7",
        pressedBlue: "#E2E8F2",
        purple: "#9747FF",
        green: "#4FE8B7",
        white: "#FEFEFF",
        "light-grey": "#F7F7F9",
        border: "#D9DBDE",
        grey: "#AEB1B7",
        "dark-grey": "#5D6470",
        black: "#15294A",
        error: "#FA1048",
        success: "#15CC8A",
        hoverRed: "#fa104814",
        pressedRed: "#fa10481f",
        lightGreen: "#AAF6CD",
        lightRed: "#FFC6D3",
        lightYellow: "#FFE9AF",
        lightPurple: "#ECDEFF",
        lightBlue: "#D8E7FF",

        // Gradients
        // bg-gradient-to-r from-blue to-green
      },
    },
  },
  plugins: [],
};
