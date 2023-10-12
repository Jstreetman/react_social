import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card, CardHeader, Container } from "@mui/material";

const Hero = () => {
  return (
    <section className="p-5 mt-5">
      <Container maxWidth="sm">
        <Card sx={{ maxWidth: 345 }} className="bg-primary">
          <CardHeader title="About"></CardHeader>
        </Card>
      </Container>
    </section>
  );
};

export default Hero;
