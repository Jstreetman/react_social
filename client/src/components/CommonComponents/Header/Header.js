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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Landing from "../Body/Landing";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
    setAnchorEl(null);
  };

  return (
    <AppBar>
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
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            // Render the Register and Login buttons for larger screens
            <>
              <Button color="inherit" href="#register">
                Register
              </Button>
              <Button color="inherit" href="#login">
                Login
              </Button>
            </>
          )}

          {/* Mobile Menu */}
          <Menu
            variant="menu"
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleMenuClose} href="#register">
              Register
            </MenuItem>
            <MenuItem onClick={handleMenuClose} href="#login">
              Login
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>

      <Landing />
    </AppBar>
  );
};

export default Header;
