const theme = {
  breakpoints: ["600px", "1000px", "1280px"],
  colors: {
    orange: "#ef8610",
    primary: "#57abaa",
    secondary: "#D56668",
    background: "#222",
  },
  fonts: {
    body: "Silom, monospace",
  },
  styles: {
    root: {
      fontSize: 3,
      lineHeight: 1.15,
      minWidth: "350px",
    },
    h1: {
      a: {
        visibility: "hidden",
        position: "absolute",
      },
    },
    p: {
      "&:last-of-type": {
        mb: 0,
      },
    },
  },
  links: {
    nav: {
      color: "secondary",
      ml: [3, 4],
      fontSize: [2, 3],
      "&:first-of-type": {
        ml: 0,
      },
    },
    social: {
      color: "primary",
      mr: 2,
      fontSize: [2, 3],
      textDecoration: "none",
      svg: {
        fill: "primary",
        width: ["20px", "24px"],
        height: ["20px", "24px"],
      },
    },
  },
  cards: {
    skill: {
      padding: 3,
      borderRadius: 4,
      boxShadow:
        "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
      backgroundColor: "muted",
      color: "secondary",
      svg: {
        fill: "primary",
      },
    },
  },
  buttons: {
    link: {
      color: "primary",
      background: "none",
      "&:hover": {
        textDecoration: "underline",
        cursor: "pointer",
      },
    },
  },
};

export default theme;
