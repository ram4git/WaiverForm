module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  darkMode: false,
  theme: {
    cursor: {
      default: "default",
      "not-allowed": "not-allowed",
    },
    extend: {
      colors: {
        blue: {
          450: '#1c88a3',
          50: '#e4e5e6',
        }
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
};
