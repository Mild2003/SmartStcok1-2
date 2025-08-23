import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#222222",
    },
    text: {
      primary: "#959595ff",
      secondary: "#c5c2c2",
    },
    primary: {
      main: "#939292",
    },
    secondary: {
      main: "#3c3c3c",
    },
  },
  typography: {
    fontFamily: "Mitr, sans-serif",
  },
});

export default theme;
