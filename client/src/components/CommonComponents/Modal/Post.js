import React, { useState } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%", // Make the width responsive
  bgcolor: "#f5f5f5",
  border: "1px solid #1976d2",
  borderRadius: "20px",
  boxShadow: 24,
  color: "white",
  p: 4,
};

const textField = {
  color: "white",
};

const Post = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2" color="black">
          Create Post
        </Typography>
        <TextField
          label="Your Post"
          fullWidth
          variant="outlined"
          multiline
          color="primary"
          // Set the custom white color
          rows={4}
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" onClick={handleClose}>
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

export default Post;
