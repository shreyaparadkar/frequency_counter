/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        indigo: "0 15px 15px rgba(67, 56, 202, 0.40)",
      },
    },
  },
  plugins: [],
};
