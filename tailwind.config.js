/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/js/**/*.{html,js}"],
  safelist: [
    "-translate-x-[10%]",
    "-translate-x-[20%]",
    "-translate-x-[30%]",
    "-translate-x-[40%]",
    "-translate-x-[50%]",
    "-translate-x-[60%]",
    "-translate-x-[70%]",
    "-translate-x-[80%]",
    "-translate-x-[90%]",
    "-translate-x-[0%]",
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster: ["Lobster"],
      },
    },
    screens: {
      sm: "600px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
