/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgHeader: "#194350",
        bgMain: "#FF8882",
      },
    },
  },
  plugins: [],
};
