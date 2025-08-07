/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        // This path is correct assuming herobg.png is directly in public/assets/
        'hero-pattern': "url('/assets/herobg.png')",
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      // Added glow animation and keyframes
      animation: {
        glow: "glow 2s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 8px 2px rgba(34, 211, 238, 0.6)",
          },
          "50%": {
            boxShadow: "0 0 15px 4px rgba(34, 211, 238, 1)",
          },
        },
      },
    },
  },
  plugins: [],
};
