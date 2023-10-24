import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import { Menu, MenuItem } from "@mui/material";

import Typography from "@mui/material/Typography";
import { Container, IconButton, Stack } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";

const FeedCard = (post) => {
  const [anchorEl, setAnchorEl] = useState(null);

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
                <MenuItem onClick={handleClose}>Edit Post</MenuItem>
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

            <Container
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "10px",
                backgroundColor: "#1976d2",
                color: "white",
              }}
            >
              <Stack direction="row" alignItems="center">
                <IconButton>
                  <ThumbUpIcon sx={{ color: "white" }} />
                </IconButton>
                <Typography>Like</Typography>
              </Stack>

              <Stack direction="row" alignItems="center">
                <IconButton>
                  <ChatBubbleIcon sx={{ color: "white" }} />
                </IconButton>
                <Typography>Comment</Typography>
              </Stack>
            </Container>
          </CardActionArea>
        </Card>
      </Container>
    </div>
  );
};

export default FeedCard;
