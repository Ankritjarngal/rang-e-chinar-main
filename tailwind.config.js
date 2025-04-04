/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#D9823F",   // Burnt Orange
        secondary: "#064641", // Teal Green
        accent: "#E5A723",    // Golden Yellow
        background: "#FDF7F2",// Soft Cream
        text: "#2C4A2A",      // Deep Green
        
        rustRed: "#9B3A20",
        darkBrown: "#5B3A29",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        quicksand: ["Quicksand", "sans-serif"],
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      lg2: "1400px",
      xl: "1600px",
      xl2: "1820px",
    },
  },

  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        "::-moz-selection": {
          backgroundColor: theme("colors.primary") + "33", // 20% opacity
          color: "#ffffff",
        },
        "::selection": {
          backgroundColor: theme("colors.primary") + "33", // 20% opacity
          color: "#ffffff",
        },
      });
    },
  ],
}
