module.exports = {
  content: ["./src/**/*{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "discord-blue-100": "#7289da",
        "discord-blue-200": "#6579c2",
      },
      fontFamily: {
        acme: ["Acme", "sans-serif"],
        palette_mosaic: ["Palette Mosaic", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
