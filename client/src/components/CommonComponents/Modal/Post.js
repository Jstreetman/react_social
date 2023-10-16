import React, { useState, useEffect } from "react";
import axios from "axios";
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

const Post = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    pText: "",
  });
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/users/create", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        setMessage("Submitted...");
        setFormData({
          pText: "",
        });

        handleClose();
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.log("Error Creating Post:", error);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2" color="black">
          Create Post
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Start typing..."
            fullWidth
            variant="outlined"
            multiline
            required
            onChange={handleChange}
            value={formData.pText}
            color="primary"
            name="pText"
            // Set the custom white color
            rows={4}
            sx={{ marginBottom: 2 }}
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default Post;
