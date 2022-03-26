module.exports = {
  mode: "jit",
  content: ["./components/**/*.{html,js}","./pages/**/*.{html,js}"],
  theme: {
    extend: {
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
