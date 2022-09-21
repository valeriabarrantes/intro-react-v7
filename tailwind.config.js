module.exports = {
  mode: "jit", // Just In Time, best performance mode
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {},
  },
  variant: {},
  plugins: [require("@tailwindcss/forms")],
};
