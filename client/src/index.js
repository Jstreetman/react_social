import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Register from "../src/components/Auth/Register";
import Login from "../src/components/Auth/Login";
import App from "./App";

const theme = createTheme();
// You can customize the theme here

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/",
    element: <App />,
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router}></RouterProvider>);
