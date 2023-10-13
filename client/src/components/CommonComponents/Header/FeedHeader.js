import React, { useState } from "react";
import { useLocation } from "react-router-dom";
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
  const [selectedTab, setSelectedTab] = useState(0); // Set an initial selected tab

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
                <Tab icon={<SettingIcon />} label="Settings" />
              </Tabs>
            )}

            {/* Mobile Menu Drawer - Show only for smaller screens */}
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
                    <ListItemText primary="Settings" />
                  </ListItem>
                </List>
              </Drawer>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default FeedHeader;
