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
} from "@mui/material";
import React, { useState } from "react";
import Header from "../CommonComponents/Header/Header";
import AuthFooter from "../CommonComponents/Footer/AuthFooter";

const Register = () => {
  const [message, setMessage] = useState("");
  const [gender, setGender] = useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <div>
      <Header />
      <Container maxWidth="md" sx={{ marginTop: "60px" }}>
        <Card>
          <CardActionArea>
            <CardHeader
              title="Register"
              className="text-center text-light"
              sx={{ backgroundColor: "#1976d2" }}
            ></CardHeader>
          </CardActionArea>
          <TextField
            type="text"
            variant="outlined"
            label="Create Username..."
            fullWidth
            required
            name="username"
            margin="normal"
          ></TextField>
          <TextField
            type="email"
            variant="outlined"
            label="Email..."
            fullWidth
            name="email"
            margin="normal"
            required
          ></TextField>
          <TextField
            type="password"
            variant="outlined"
            label="Create Password..."
            fullWidth
            name="password"
            required
            margin="normal"
          ></TextField>
          <TextField
            type="text"
            variant="outlined"
            label="Full Username..."
            fullWidth
            name="fName"
            required
            margin="normal"
          ></TextField>
          <InputLabel id="gender">Gender</InputLabel>
          <Select
            fullWidth
            labelId="gender"
            label="Gender"
            value={gender}
            name="gender"
            onChange={handleChange}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </Select>

          <Button
            sx={{ marginTop: "10px" }}
            className="container-fluid"
            variant="contained"
          >
            Register
          </Button>
        </Card>
      </Container>

      <AuthFooter />
    </div>
  );
};
export default Register;
