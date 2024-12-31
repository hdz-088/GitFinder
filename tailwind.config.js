/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: ["selector", '[data-mode="light"]'],
  darkMode: "selector",
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      stat: ["JetBrains Mono"],
      body: ['"Poppins"'],
    },
    extend: {},
  },
  plugins: [],
};
