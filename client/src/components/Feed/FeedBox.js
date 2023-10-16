import React, { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardHeader,
  Container,
  Grid,
} from "@mui/material";
import Post from "../CommonComponents/Modal/Post";

const FeedBox = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickMenu = (e) => {
    setAnchorEl(true);
  };

  const handleCloseMenu = () => {
    setAnchorEl(false);
  };

  return (
    <div>
      <Container maxWidth="md" sx={{ marginTop: "20px" }}>
        <Card>
          <CardActionArea>
            <CardHeader
              title="Create Post"
              className="text-center text-light"
              sx={{ backgroundColor: "#1976d2" }}
            ></CardHeader>
            <Grid container alignItems="center" className="p-3">
              <Grid item sx={{ width: "5%" }}>
                <Avatar />
              </Grid>
              <Grid item className="p-3" sx={{ width: "95%" }}>
                <Button
                  variant="outlined"
                  sx={{ borderColor: "black", color: "black" }}
                  fullWidth
                  onClick={handleOpen}
                >
                  <span>Create a Post</span>
                </Button>
                <Post open={open} handleClose={handleClose} />
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>
      </Container>
    </div>
  );
};

export default FeedBox;
