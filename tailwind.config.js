/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "rgb(var(--primary-bg) / <alpha-value>)",
        "secondary-bg": "rgb(var(--secondary-bg) / <alpha-value>)",
        "primary-text": "rgb(var(--primary-text) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
