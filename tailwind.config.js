/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: { max: "1024px" },
        mb: { max: "991px" },
        sm: { max: "639px" },
      },
    },
  },
  plugins: [],
  corePlugins: {
    userSelect: false,
  },
  variants: {},
  purge: {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    options: {
      safelist: ["select-none"],
    },
  },
};
