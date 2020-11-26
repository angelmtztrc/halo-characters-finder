// add your custom configurations
module.exports = {
  purge: ['src/**/*.js', 'src/**/*.jsx', 'public/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#61DAFB',
        secondary: '#282C34'
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        fadeIn: 'fadeIn 1s linear'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
