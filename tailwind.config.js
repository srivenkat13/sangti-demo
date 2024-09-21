/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cGreen: "#32CD32",
        customBlue: {
          light: "#3A9AD9",
          DEFAULT: "#1E90FF",
          dark: "#1C3D5A",
        },
        sGreen: "#29cb84",
        sBlue: "#1d9be4 ",
        sTheme: '#60bfc6'
      },
      fontFamily: {
        sofadi: ["Sofadi One", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, #32CD32 0%, #1E90FF 100%)",
        "gradient-radial": "radial-gradient(circle, #FF5733, #FFC300)",
        "gradient-to-br": "linear-gradient(to bottom right, #ff7e5f, #feb47b)",
        "gradient-btn":
          "linear-gradient(117.08deg,#29cb84 -25.78%,#1d9be4 171.51%)",
      },
    },
  },
  plugins: [],
};
