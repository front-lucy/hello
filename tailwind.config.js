/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    colors: {
      purple: {
        11: "#3B1ABF",
        10: "#4D27DB",
        9: "#5E3DEA",
        8: "#6953F1",
        7: "#786EF5",
        6: "#8F8AF9",
        5: "#A6A5FD",
        4: "#BEC2FF",
        3: "#D6DAFF",
        2: "#E8EAFC",
        1: "#F4F5FF",
      },
      green: {
        9: "#00CF58",
        1: "#E6F7EC",
      },
      red: {
        3: "#FFEFEF",
        2: "#F5B9BA",
        1: "#E65052",
      },
      orange: "#FD7B1A",
      black: "#000000",
      white: "#FFFFFF",
      gray: {
        11: "#262626",
        10: "#434343",
        9: "#555",
        8: "#7B7B7B",
        7: "#999",
        6: "#BCBCBC",
        5: "#D7D7D7",
        4: "#E9E9E9",
        3: "#EfEfEf",
        2: "#F4F4F4",
        1: "#F9F9F9",
      },
    },
  },
  variants: {},
  plugins: [],
};
