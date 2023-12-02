import {
  Button,
  Card,
  CardActionArea,
  CardHeader,
  Container,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Input,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../CommonComponents/Header/Header";
import AuthFooter from "../CommonComponents/Footer/AuthFooter";
import Alert from "@mui/material/Alert";
import ErrorSnack from "../Snackbar/ErrorSnack";
import Registersnack from "../Snackbar/Registersnack";
import Slide from "@mui/material/Slide";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Avatar from "@mui/material/Avatar";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    fName: "",
    gender: "",
    //uImage: "",
  });

  const [snackbarState, setSnackbarState] = useState({
    open: false,
    openErr: false,
    Transition: Slide,
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const { open, openErr, Transition } = snackbarState;

  const handleCloseSnack = () => {
    setSnackbarState({
      ...snackbarState,
      open: false,
    });
  };

  const errSnack = () => {
    setSnackbarState({
      ...snackbarState,
      openErr: false,
    });
  };

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    // Handle the selected image file
    setFormData({ ...formData, uImage: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "/api/users/signup",
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          fName: formData.fName,
          gender: formData.gender,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        setMessage("Sent!");
        // Clear form fields if registration is successful
        setFormData({
          username: "",
          email: "",
          password: "",
          fName: "",
          gender: "",
        });

        setSnackbarState({
          ...snackbarState,
          open: true,
        });
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        setMessage(response.data.message);
        setSnackbarState({
          openErr: true,
        });
      }
    } catch (error) {
      setSnackbarState({
        openErr: true,
      });
      console.error("error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div style={{ minHeight: "130vh" }}>
      <Header />
      <Container maxWidth="md" sx={{ marginTop: "30px" }}>
        <Card>
          <CardActionArea>
            <CardHeader
              title="Register"
              className="text-center text-light"
              sx={{ backgroundColor: "#1976d2" }}
            ></CardHeader>
          </CardActionArea>
          <form
            className="p-3"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <TextField
              type="text"
              variant="outlined"
              label="Create Username..."
              fullWidth
              required
              value={formData.username}
              name="username"
              onChange={handleChange}
              margin="normal"
            ></TextField>
            <TextField
              type="email"
              variant="outlined"
              label="Email..."
              fullWidth
              value={formData.email}
              name="email"
              margin="normal"
              required
              onChange={handleChange}
            ></TextField>
            <TextField
              type="password"
              variant="outlined"
              label="Create Password..."
              fullWidth
              value={formData.password}
              name="password"
              required
              onChange={handleChange}
              margin="normal"
            ></TextField>
            <TextField
              type="text"
              variant="outlined"
              label="Full Username..."
              fullWidth
              name="fName"
              value={formData.fName}
              required
              onChange={handleChange}
              margin="normal"
            ></TextField>
            <InputLabel id="gender">Gender</InputLabel>
            <Select
              fullWidth
              labelId="gender"
              label="Gender"
              value={formData.gender}
              name="gender"
              onChange={handleChange}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>

            {/* <InputLabel htmlFor="imageInput">Upload Profile Image</InputLabel> */}
            {/* <Input
              type="file"
              name="uImage"
              required
              accept=".png, .jpeg, .jpg"
              id="imageInput"
              onChange={handleImageSelect}
              style={{ display: "none" }} // Hide the default file input
            /> */}
            {/* <label htmlFor="imageInput">
              <Button
                variant="contained"
                color="primary"
                component="span"
                startIcon={<CloudUploadIcon />}
              >
                Upload Image
              </Button>
            </label> */}

            {/* {formData.uImage && (
              <Avatar
                src={URL.createObjectURL(formData.uImage)}
                sx={{
                  width: "100px",
                  height: "100px",
                  marginTop: "10px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            )} */}

            <Button
              sx={{ marginTop: "10px" }}
              className="container-fluid"
              variant="contained"
              type="submit"
            >
              Register
            </Button>
          </form>
        </Card>
      </Container>
      <Registersnack
        open={open}
        handleCloseSnack={handleCloseSnack}
        Transition={Transition}
      >
        <Alert
          severity="success"
          sx={{ width: "100%" }}
          handleCloseSnack={handleCloseSnack}
        ></Alert>
      </Registersnack>
      <ErrorSnack openErr={openErr} errSnack={errSnack} Transition={Transition}>
        <Alert
          severity="error"
          sx={{ width: "100%" }}
          errSnack={errSnack}
        ></Alert>
      </ErrorSnack>
      <AuthFooter />
    </div>
  );
};
export default Register;
