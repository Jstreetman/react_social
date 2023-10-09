// index.js

import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./components/Theme/Theme";

import App from "./App"; // Your main application component

ReactDOM.render(
  <ThemeProvider theme={lightTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
