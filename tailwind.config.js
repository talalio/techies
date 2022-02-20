module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {},
  },
  
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["fantasy", "forest", "black", "light"],
    darkTheme: "forest",
  },
}
