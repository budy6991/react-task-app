/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        pulseOne: "pulse 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
