module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#3AAFC9",
      secondary: "#676CDB",
      black: "#000000",
      darkBg: "#2F3A4A",
      darkCard: "#1F2632",
      white: "#FFFFFF",
      gray: "#C3CADC",
      darkGray: "#464D57",
      grayBg: "#efefef",
    },
    screens: {
      xs: "250px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1336px",
    },
    container: {
      padding: {
        xs: "1rem",
        sm: "1.5rem",
        md: "2rem",
        lg: "2.5rem",
        xl: "3rem",
      },
    },
    fontSize: {
      8: "8px",
      10: "10px",
      12: "12px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      22: "22px",
      24: "24px",
      26: "26px",
      28: "28px",
      30: "30px",
      32: "32px",
      34: "34px",
      36: "36px",
      38: "38px",
      40: "40px",
      44: "44px",
      48: "48px",
      52: "52px",
      56: "56px",
      64: "64px",
      82: "82px",
    },
    maxWidth: {
      10: "10ch",
      15: "15ch",
      20: "20ch",
      25: "25ch",
      30: "30ch",
      35: "35ch",
      40: "40ch",
      45: "45ch",
      50: "50ch",
      55: "55ch",
      65: "65ch",
      75: "75ch",
      85: "85ch",
      "1/2": "50%",
      "3/6": "60%",
      "3/4": "75%",
      "4/4": "85%",
      full: "100%",
    },
    extend: {
      rotate: {
        10: "10deg",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [],
};
