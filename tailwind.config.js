const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*{ts,tsx}"],
  theme: {
    screens: {
      "xs": "512px",
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        "discord-blue-100": "#7289da",
        "discord-blue-200": "#6579c2",
      },
      fontFamily: {
        acme: ["Acme", "sans-serif"],
        palette_mosaic: ["Palette Mosaic", "sans-serif"],
        bebas_neue: ["Bebas Neue", "sans-serif"],
        plus_jarkarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      boxShadow: {
        drop: "0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%), 0px 11px 15px -7px rgb(0 0 0 / 20%)",
        "3xl":
          "0px -24px 38px 3px rgba(0, 0, 0, 0.14), 0px -9px 46px 8px rgba(0, 0, 0, 0.12), 0px -11px 15px -7px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"],
  },
};
