import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage/landingPage";
import { createTheme, capitalize, ThemeProvider } from "@mui/material";

const App = () => {
  const customTheme = createTheme({
    palette: {
      secondary: {
        main: "#1D366F",
      },
    },
    typography: {
      button: {
        textTransform: capitalize,
        fontFamily: "Open Sans",
        fontWeight: "700",
      },
    },
  });
  return (
    <ThemeProvider theme={customTheme}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
