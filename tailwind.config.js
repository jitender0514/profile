/** @type {import('tailwindcss').Config} */
// const plugin = require('tailwindcss/plugin');
import daisyui from 'daisyui'


import plugin from 'tailwindcss/plugin';


const variants = ["blue", "red", "yellow"];

const customVariants = plugin(({ addVariant, e }) => {
  variants.map((variant) =>
    addVariant(variant, ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        const element = e(`${variant}${separator}${className}`);
        return `.${variant} .${element}`;
      });
    }),
  );
});

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  // daisyui: {
  //   themes: [
  //     "light",
  //     "dark",
  //     "cupcake",
  //     "bumblebee",
  //     "emerald",
  //     "corporate",
  //     "synthwave",
  //     "retro",
  //     "cyberpunk",
  //     "valentine",
  //     "halloween",
  //     "garden",
  //     "forest",
  //     "aqua",
  //     "lofi",
  //     "pastel",
  //     "fantasy",
  //     "wireframe",
  //     "black",
  //     "luxury",
  //     "dracula",
  //     "cmyk",
  //     "autumn",
  //     "business",
  //     "acid",
  //     "lemonade",
  //     "night",
  //     "coffee",
  //     "winter",
  //     "dim",
  //     "nord",
  //     "sunset",
  //   ],
  // },
  plugins: [customVariants, daisyui],
}

