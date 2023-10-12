import React from "react";
import { Container, Stack, Typography, Avatar } from "@mui/material";
import "bootstrap/dist/css/bootstrap.css";
import profile from "../../images/social.svg";

const Landing = () => {
  return (
    <div className="p-5">
      <section className="showcase  text-light p-5 p-lg-0 pt-lg-5 mt-5 text-center text-sm-start">
        <Container>
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>
                <span className="text-warning">J</span>
                <span className="text-light">
                  streetman's
                  <span className="text-warning"> React Social App</span>
                </span>
              </h1>
              <p className="lead my-4">
                {" "}
                <span className="text-warning">
                  Powered by Mern and RestAPI
                </span>{" "}
              </p>
              <a
                className="btn btn-light btn-custom"
                target="_blank"
                href="https://jrsportfolio.com"
              >
                Visit My Website
              </a>
            </div>
            <img
              className="img-fluid  h-25 w-25 d-none d-sm-block"
              src={profile}
              alt="profile"
            />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Landing;
