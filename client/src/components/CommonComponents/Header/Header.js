import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Paper } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/system";
import Switch from "@mui/material/Switch";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "../../Theme/Theme"; // Assuming you have these themes

const MenuContainer = styled("div")({
  marginLeft: "auto",
});

const Header = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("light"); // Initial theme

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
  };

  const list = (
    <List>
      <ListItem button>
        <ListItemText primary="Register" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Login" />
      </ListItem>
    </List>
  );

  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Social App
          </Typography>

          <MenuContainer>
            {isMobile ? (
              <>
                <IconButton
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                  <Paper
                    sx={{
                      backgroundColor:
                        currentTheme === "dark"
                          ? darkTheme.drawer.background
                          : lightTheme.drawer.background,
                    }}
                  ></Paper>
                  {list}
                </Drawer>
              </>
            ) : (
              <>
                <Button color="inherit">Register</Button>
                <Button color="inherit">Login</Button>
              </>
            )}

            <Switch
              color="default"
              checked={currentTheme === "dark"}
              onChange={toggleTheme}
              inputProps={{ "aria-label": "toggle theme" }}
            />
          </MenuContainer>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
