const plugin = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      wordSpacing: {
        tighter: "-0.05em",
        tight:"-0.025em",
        normal: "0",
        wide: "0.025em",  
        wider: "0.05em",
        widest: "0.1em",

    },}
  },
  plugins: [
    plugin(function({ addUtilities, theme }) {
      const wordSpacing = theme('wordSpacing');
      const newUtilities = {};
      Object.keys(wordSpacing).forEach(key => {
        newUtilities[`.word-spacing-${key}`] = {
          'word-spacing': wordSpacing[key],
        };
      });
      addUtilities(newUtilities);
    }),
  ],
};
