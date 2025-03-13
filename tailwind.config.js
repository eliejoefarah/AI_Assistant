/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "grey-bg": "#a0aec0",
        "purple-acc": "#7951A8",
        "text-color": "#1a202c",
      }
    },
  },
  plugins: [],
}
