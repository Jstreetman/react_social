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

const Login = () => {
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
          <TextField
            label="Email..."
            type="email"
            name="email"
            fullWidth
            required
            margin="normal"
          ></TextField>
          <TextField
            margin="normal"
            name="password"
            type="password"
            label="Password..."
            fullWidth
            required
          ></TextField>

          <Button variant="contained" type="submit" className="container-fluid">
            Login
          </Button>
        </Card>
      </Container>

      <AuthFooter />
    </div>
  );
};
export default Login;
