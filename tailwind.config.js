module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        oldRed: "#33000e",
      },
    },
    fontFamily: {
      vidaloka: ["Vidaloka"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
