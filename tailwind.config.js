/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-montserrat)"],
      },
      fontSize: {
        sm: ["12px", "16px"],
        md: ["14px", "22px"],
        lg: ["16px", "24px"],
        xl: ["20px", "28px"],
        "2xl": ["24px", "32px"],
        "3xl": ["32px", "40px"],
      },
      colors: {
        blue: "#18489A",
        purple: "#9747FF",
        green: "#4FE8B7",
        white: "#FEFEFF",
        "light-gray": "#F7F7F9",
        boder: "#D9DBDE",
        grey: "#AEB1B7",
        "dark-grey": "#5D6470",
        black: "#15294A",
        error: "#FA1048",
        success: "#15CC8A",
        // Gradients
        // bg-gradient-to-r from-blue to-green
      },
    },
  },
  plugins: [],
};
