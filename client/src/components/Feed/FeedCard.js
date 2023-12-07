import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import { Menu, MenuItem } from "@mui/material";

import Typography from "@mui/material/Typography";
import { Container, IconButton, Stack } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import FeedReact from "./FeedReact";
import PostUpdate from "../CommonComponents/Modal/PostUpdate";

const FeedCard = (post) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [anchorEl2, setAnchorEl2] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Container maxWidth="md" sx={{ marginTop: "20px" }}>
        <Card>
          <CardActionArea>
            <Container
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#1976d2",
                color: "white",
              }}
            >
              <Typography>{post.pDate}</Typography>

              <IconButton onClick={handleClick}>
                <MoreHorizIcon sx={{ color: "white" }} />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleOpen}>Edit Post</MenuItem>
                <PostUpdate open={open} handleClose={handleClose} />
                <MenuItem onClick={handleClose}>Delete Post</MenuItem>
              </Menu>
            </Container>
            <Container sx={{ marginTop: "10px" }}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Avatar />
                <Typography variant="h6">{post.username}</Typography>
              </Stack>

              <Typography component="div" fontSize="12px" mt={2}>
                {post.pText}
              </Typography>
            </Container>

            <Container
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
              >
                <Typography>0 Likes</Typography>
                <Typography>0 Comments</Typography>
              </Stack>
            </Container>
            <FeedReact postId={post.postId} />
          </CardActionArea>
        </Card>
      </Container>
    </div>
  );
};

export default FeedCard;
