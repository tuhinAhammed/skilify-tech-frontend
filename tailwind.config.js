/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        lg: "1140px",
        xl: "1320px",
      },
      screens: {
        xs: "380px", // Extra small devices
        sm: "576px", // Small devices
        md: "768px", // Medium devices
        lg: "992px", // Large devices
        xl: "1320px", // Extra large devices
        "2xl": "3080px", // Extra large devices
      },
      colors: {
        theme: "#FFAA18", // Website Theme Color
        primary: "#000", // Text Like black
        secondary: "#fff", // text White
        tertiary: "#6d6c74",
        quaternary : "#F4F4F5",
        static : "#1A1A34",
        themeDeep : "#e89405",
        lightThemeBg : "#E5F2FF", // for light theme background color
        buttonHover :"#e89405",
        borderColor : "#CCCCCC",
        skeletonLoading : "#cbd5e1"
      },
      padding: {
        'sectionSm': '30px',
        'sectionMd': '60px',
        'sectionLg': '80px',
      },
      fontFamily: {
        primary: ["Outfit", "sans-serif"],
        secondary: ["DM Sans", "sans-serif"],
      },
      keyframes: {
        "bounce-top": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "bounce-left": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-15px)" },
        },
      },
      animation: {
        "bounce-top": "bounce-top 4s ease-in-out infinite",
        "bounce-left": "bounce-left 6s ease-in-out infinite",
      },
      boxShadow: {
        primary: "0px 0px 3px 0px ", // Add your custom shadow here
      },
    },
  },
  plugins: [],
}