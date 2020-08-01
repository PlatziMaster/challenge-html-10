module.exports = {
  purge: ['./public/*.html'],
  theme: {
    extend: {},
  },
  variants: {
    appearance: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus'],
    fill: [],
  },
  plugins: [require('tailwindcss')('./tailwindcss-config.js')],
};
