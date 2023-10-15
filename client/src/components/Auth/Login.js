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

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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

        // Redirect to /adminpanel after a delay
        setTimeout(() => {
          navigate("/feed");
        }, 1000);
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
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
    </div>
  );
};
export default Login;
