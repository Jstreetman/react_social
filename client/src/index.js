import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import App from "./App"; // Your main application component

const theme = createTheme();
// You can customize the theme here

const root = createRoot(document.getElementById("root"));

root.render(<App />);
