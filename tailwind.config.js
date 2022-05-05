const daisyui = require('daisyui');
const textshadow = require('tailwindcss-textshadow')

module.exports = {
  theme: {
    extend: {
      colors: {
        'discord-blue-100': '#7289da',
        'discord-blue-200': '#6579c2'
      },
      screens: {
        
      }
    },
  },
  plugins: [daisyui, textshadow],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
}
