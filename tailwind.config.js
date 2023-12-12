/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ff00d4",

          secondary: "#2e8f00",

          accent: "#00beff",

          neutral: "#2b272c",

          "base-100": "#002c35",

          info: "#0096ff",

          success: "#6bb000",

          warning: "#ff9800",

          error: "#c40043",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
