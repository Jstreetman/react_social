import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "@mui/material";

function Hero(props) {
  return (
    <Container>
      <CardActionArea>
        <Card sx={{ minWidth: 275, backgroundColor: "#1976d2" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 40 }}
              gutterBottom
              className="text-center text-light"
            >
              {props.title}
            </Typography>

            <Typography variant="h6" paragraph className="text-light">
              {props.description}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Container>
  );
}
export default Hero;
