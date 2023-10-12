import React from "react";
import { Typography, Container } from "@mui/material";

const AuthFooter = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        marginTop: "20px",
        backgroundColor: "#1976d2",
        color: "white",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <Typography align="center" variant="body2">
          &copy; {currentYear} Jstreetman
        </Typography>
      </Container>
    </footer>
  );
};

export default AuthFooter;
