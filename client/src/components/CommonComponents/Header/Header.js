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
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Landing from "../Body/Landing";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

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
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            Social App
          </Typography>

          {isMobile ? (
            // Render the hamburger menu button for smaller screens
            !location.pathname.startsWith("/register") &&
            !location.pathname.startsWith("/login") && (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
            )
          ) : (
            // Render the Register and Login buttons for larger screens
            <>
              {(!location.pathname.startsWith("/register") || isMobile) && (
                <Button color="inherit" href="/register">
                  Register
                </Button>
              )}
              {(!location.pathname.startsWith("/login") || isMobile) && (
                <Button color="inherit" href="/login">
                  Login
                </Button>
              )}
            </>
          )}

          {/* Mobile Menu Drawer - Show only for the root route */}
          {location.pathname === "/" && (
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerClose}
            >
              <List>
                <ListItem
                  button
                  onClick={handleDrawerClose}
                  component="a"
                  href="/register"
                >
                  <ListItemText primary="Register" />
                </ListItem>
                <ListItem
                  button
                  onClick={handleDrawerClose}
                  component="a"
                  href="/login"
                >
                  <ListItemText primary="Login" />
                </ListItem>
              </List>
            </Drawer>
          )}
        </Toolbar>
      </Container>
      <>
        {!location.pathname.startsWith("/register") &&
          !location.pathname.startsWith("/login") && <Landing />}
      </>
    </AppBar>
  );
};

export default Header;
