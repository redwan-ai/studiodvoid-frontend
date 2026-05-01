/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        studioDvoidTheme: {
          primary: "#ff6600",
          secondary: "#ddd",
          accent: "#b4b4b4",
          neutral: "#8c8c8c",
          someDeep: "#3d3d3d",
          "base-100": "#ffffff",
        },
      },
    ],
  },
}

