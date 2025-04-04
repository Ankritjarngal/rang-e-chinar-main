/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        primary: "#0D6E5A",       // Deep Teal Green
        secondary: "#156E4C",     // Forest Green
        accent: "#E7B22A",        // Golden Yellow
        background: "#F1F6F4",    // Pale Mint
        text: "#1A3C35",          // Dark Green
        lightPrimaryBg: "#E0EAE7", // Light Teal
        rustRed: "#C25E30",       // Rust Orange
        darkBrown: "#3E4A40",     // Dark Forest
      },
      fontFamily: {
        // Headings
        heading: ["Marcellus", "serif"],
        // Body text
        body: ["Quicksand", "sans-serif"],
        
        // Additional fonts available
        cinzelDecorative: ["Cinzel Decorative", "cursive"],
        playfair: ["Playfair Display", "serif"],
        marcellus: ["Marcellus", "serif"],
        dancingScript: ["Dancing Script", "cursive"],
        timesNewRoman: ["Times New Roman", "serif"],
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