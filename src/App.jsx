import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import "./index.css";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/theme";
import CssBaseline from "@mui/material/CssBaseline";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          minHeight: "100%",
          width: "100%",
        }}
      >
        <Header />
      </Box>
    </ThemeProvider>
  );
}

export default App;