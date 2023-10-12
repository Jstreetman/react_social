import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  Drawer, // Import the Drawer component
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Landing from "../Body/Landing";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false); // State for the drawer

  // Define your custom breakpoints
  const customBreakpoints = {
    xs: "(max-width: 600px)",
    sm: "(max-width: 960px)",
    md: "(max-width: 1280px)",
    lg: "(max-width: 1920px)",
    xl: "(min-width: 1921px)",
  };

  const isMobile = useMediaQuery(customBreakpoints["sm"]);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          {/* Typography component aligned to the left */}
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            Social App
          </Typography>

          {isMobile ? (
            // Render the hamburger menu button for smaller screens
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen} // Open the drawer on button click
            >
              <MenuIcon />
            </IconButton>
          ) : (
            // Render the Register and Login buttons for larger screens
            <>
              <Button color="inherit" href="/register">
                Register
              </Button>
              <Button color="inherit" href="/login">
                Login
              </Button>
            </>
          )}

          {/* Mobile Menu Drawer */}
          <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
            <List>
              <ListItem
                button
                onClick={handleDrawerClose}
                component="a"
                href="#register"
              >
                <ListItemText primary="Register" />
              </ListItem>
              <ListItem
                button
                onClick={handleDrawerClose}
                component="a"
                href="#login"
              >
                <ListItemText primary="Login" />
              </ListItem>
            </List>
          </Drawer>
        </Toolbar>
      </Container>

      <Landing />
    </AppBar>
  );
};

export default Header;
