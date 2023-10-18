import React, { useState } from "react";
import Postsnack from "../../Snackbar/Postsnack";
import Slide from "@mui/material/Slide";
import Alert from "@mui/material/Alert";
import ErrorSnack from "../../Snackbar/ErrorSnack";
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

  const [snackbarState, setSnackbarState] = useState({
    openP: false,
    openErr: false,
    Transition: Slide,
  });

  const { openP, openErr, Transition } = snackbarState;

  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCloseSnack = () => {
    setSnackbarState({
      openP: false,
    });
  };

  const errSnack = () => {
    setSnackbarState({
      openErr: false,
    });
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
        setSnackbarState({
          ...snackbarState,
          openP: true,
        });
      } else {
        setMessage(response.data.message);
        setSnackbarState({
          ...snackbarState,
          openErr: true,
        });
      }
    } catch (error) {
      setSnackbarState({
        ...snackbarState,
        openErr: true,
      });
      console.log("Error Creating Post:", error);
    }
  };

  return (
    <div>
      {" "}
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
              rows={4}
              sx={{ marginBottom: 2 }}
            />

            <Button variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
      <Postsnack
        openP={openP}
        handleCloseSnack={handleCloseSnack}
        Transition={Transition}
      >
        <Alert
          severity="succcess"
          sx={{ width: "100%" }}
          handleCloseSnack={handleCloseSnack}
        ></Alert>
      </Postsnack>
      <ErrorSnack openErr={openErr} errSnack={errSnack} Transition={Transition}>
        <Alert
          severity="error"
          errSnack={errSnack}
          sx={{ width: "100%" }}
        ></Alert>
      </ErrorSnack>
    </div>
  );
};

export default Post;
