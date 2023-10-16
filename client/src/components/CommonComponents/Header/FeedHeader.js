import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Tab,
  Tabs,
  Menu, // Import Menu component
  MenuItem, // Import MenuItem component
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingIcon from "@mui/icons-material/Settings";

const FeedHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(0);
  const navigate = useNavigate();

  const customBreakpoints = {
    xs: "(max-width: 600px)",
    sm: "(max-width: 960px)",
    md: "(max-width: 1280px)",
    lg: "(max-width: 1920px)",
    xl: "(min-width: 1921px)",
  };

  const isMobile = useMediaQuery(customBreakpoints["sm"]);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const [settingsMenuOpen, setSettingsMenuOpen] = useState(null); // State for the settings dropdown menu

  const handleSettingsMenuOpen = (event) => {
    setSettingsMenuOpen(event.currentTarget);
  };

  const handleSettingsMenuClose = () => {
    setSettingsMenuOpen(null);
  };

  const handleLogout = () => {
    axios
      .get("/logout")
      .then((response) => {
        //redired user to login component
        navigate("/login");
      })
      .catch((error) => {
        console.log("Error logging out:", error);
      });
  };

  return (
    <div>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4">Social App</Typography>
            </Box>

            {isMobile ? (
              // Render the hamburger menu button for smaller screens
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              // Render icon buttons for larger screens with even spacing
              <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                textColor="inherit"
                indicatorColor="primary"
              >
                <Tab icon={<HomeIcon />} label="Home" />
                <Tab icon={<MessageIcon />} label="Messages" />
                <Tab icon={<NotificationsIcon />} label="Notifications" />
                <Tab icon={<AccountCircleIcon />} label="Profile" />
                {!isMobile && ( // Hide the "Settings" tab for smaller screens
                  <Tab
                    icon={<SettingIcon />}
                    label="Settings"
                    onClick={handleSettingsMenuOpen}
                  />
                )}
              </Tabs>
            )}

            {isMobile && (
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerClose}
              >
                <List>
                  <ListItem button onClick={handleDrawerClose}>
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem button onClick={handleDrawerClose}>
                    <ListItemText primary="Messaging" />
                  </ListItem>
                  <ListItem button onClick={handleDrawerClose}>
                    <ListItemText primary="Notifications" />
                  </ListItem>
                  <ListItem button onClick={handleDrawerClose}>
                    <ListItemText primary="Profile" />
                  </ListItem>
                  <ListItem button onClick={handleDrawerClose}>
                    <ListItemText primary="Log Out" />
                  </ListItem>
                </List>
              </Drawer>
            )}

            {/* Settings dropdown menu for larger screens */}
            <Menu
              anchorEl={settingsMenuOpen}
              keepMounted
              open={Boolean(settingsMenuOpen)}
              onClose={handleSettingsMenuClose}
            >
              <MenuItem onClick={handleLogout}>Log Out</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default FeedHeader;
