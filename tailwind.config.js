module.exports = {
  mode: "jit",
  content: ["./components/**/*.{html,js}", "./pages/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      backgroundColor: {
        dark: " #f2f2f2",
      },
      minWidth: {
        "1/2": "50%",
      },
    },
  },
  plugins: [],
};
