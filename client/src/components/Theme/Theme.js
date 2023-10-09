// theme.js
import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    type: "light",
    primary: {
      main: "#1976D2",
    },
    secondary: {
      main: "#FF4081",
    },
    // Customize other colors for light mode
  },
  typography: {
    // Define typography styles here for light mode
  },

  drawer: {
    primary: "#1976D2",
  },
  // Other theme options for light mode
});

const darkTheme = createTheme({
  ...lightTheme, // Extend the light theme
  palette: {
    ...lightTheme.palette,
    type: "dark", // Set to dark mode
    primary: {
      main: "#121212", // Your primary color for dark mode
    },
    secondary: {
      main: "#f48fb1", // Your secondary color for dark mode
    },
    // Customize other colors as needed for dark mode
  },
  // Other theme options for dark mode
  drawer: {
    primary: "#121212",
  },
});

export { lightTheme, darkTheme };
