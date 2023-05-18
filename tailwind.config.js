/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "380px",
      sm: "450px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontSize: {
      xs: "0.6rem",
      sm: "0.8rem",
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 0.6s",
        fadeInQuick: "fadeIn 0.4s",
        fadeInSlow: "fadeIn 1.3s",
        wiggle: "wiggle 300ms ease-in-out",
      },
      keyframes: () => ({
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        wiggle: {
          "0%, 100%": { transform: "none" },
          "50%": { transform: "scale(0.97)" },
        },
      }),
      colors: {
        dark: "#1a1d21",
        darkLight: "#34373c",
      },
    },
  },
  plugins: [],
};
