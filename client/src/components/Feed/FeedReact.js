import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import axios from "axios";

const FeedReact = ({ postId }) => {
  const [likeBtn, setLikedBtn] = useState("Like");

  const handleLike = async () => {
    try {
      //sending request to server
      const response = await axios.post(`/api/users/posts/pLikes/${postId}`);
      if (response.status === 200) {
        setLikedBtn("Liked");
      }
    } catch (error) {
      console.log("error while liking post:", error);
    }
  };

  return (
    <div>
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
          <IconButton onClick={handleLike}>
            <ThumbUpIcon sx={{ color: "white" }} />
          </IconButton>
          <Typography>{likeBtn}</Typography>
        </Stack>

        <Stack direction="row" alignItems="center">
          <IconButton>
            <ChatBubbleIcon sx={{ color: "white" }} />
          </IconButton>
          <Typography>Comment</Typography>
        </Stack>
      </Container>
    </div>
  );
};

export default FeedReact;
