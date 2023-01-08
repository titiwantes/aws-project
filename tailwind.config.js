/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#7027cf",
          secondary: "#c29ef0",
          accent: "#FFC48C",
          neutral: "#021431",
          "base-100": "#F5F5F5",
          info: "#93E6FB",
          success: "#80CED1",
          warning: "#EFD8BD",
          error: "#cc0000",
        },
      },
    ],
  },
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.html"],
  darkMode: true, // or 'media' or 'class'
 
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

