import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardActionArea,
  CardHeader,
  Container,
  TextField,
} from "@mui/material";
import AuthFooter from "../CommonComponents/Footer/AuthFooter";
import Header from "../CommonComponents/Header/Header";
import axios from "axios";
import Loginsnack from "../Snackbar/Loginsnack";
import ErrorSnack from "../Snackbar/ErrorSnack";
import Slide from "@mui/material/Slide";
import Alert from "@mui/material/Alert";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [snackbarState, setSnackbarState] = useState({
    open: false,
    openErr: false,
    Transition: Slide,
  });

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

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/users/signin", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setMessage("Login successful!");
        setFormData({
          email: "",
          password: "",
        });

        setSnackbarState({
          ...snackbarState,
          open: true,
        });

        // Redirect to /feed after a delay
        setTimeout(() => {
          navigate("/feed");
        }, 1250);
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
      console.error("Login error:", error);
    }
  };

  return (
    <div>
      <Header />

      <Container maxWidth="md" sx={{ marginTop: "60px" }}>
        <Card>
          <CardActionArea>
            <CardHeader
              title="Sign In"
              className="text-center text-light"
              sx={{ backgroundColor: "#1976d2" }}
            ></CardHeader>
          </CardActionArea>
          <form className="p-3" onSubmit={handleSubmit}>
            <TextField
              name="email"
              label="Email..."
              fullWidth
              required
              value={formData.email}
              type="email"
              onChange={handleChange}
              color="primary"
              margin="normal"
            ></TextField>
            <TextField
              type="password"
              name="password"
              fullWidth
              value={formData.password}
              required
              label="Password..."
              margin="normal"
              onChange={handleChange}
              color="primary"
            ></TextField>

            <Button
              variant="contained"
              type="submit"
              className="container-fluid"
            >
              Login
            </Button>
          </form>
        </Card>
      </Container>

      <AuthFooter />
      <Loginsnack
        open={open}
        handleCloseSnack={handleCloseSnack}
        Transition={Transition}
      >
        <Alert
          severity="success"
          handleCloseSnack={handleCloseSnack}
          sx={{ width: "100%" }}
        ></Alert>
      </Loginsnack>
      <ErrorSnack
        openErr={openErr}
        errSnack={errSnack}
        Transition={Transition}
      ></ErrorSnack>
    </div>
  );
};
export default Login;
