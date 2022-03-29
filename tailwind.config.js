const daisyui = require('daisyui');

module.exports = {
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
}
