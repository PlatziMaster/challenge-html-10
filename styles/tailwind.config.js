module.exports = {
  theme: {
    
    extend: { backgroundColor: theme => ({
      'primary':'#F4F6F3',
      'secondary':'#A0AFA9',
      'tertiary': '#E1E6E0',
      'light' : '#FFFFFF',
      'dark': '#000000'
    }),}
  },
  variants: {},
  plugins: [
    // require('@tailwindcss/custom-forms'),
    require('@tailwindcss'),
    require('autoprefixer'),
  ],
};

