/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      lg: { max: "1024px" },
      // => @media (max-width: 1023px) { ... }

      mb: { max: "991px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
    },
  },
  plugins: [],
};
