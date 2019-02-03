import React from "react";
import "./about.css";
import { Container } from "../../components/Grid";
import { Parallax } from "react-parallax";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const About = props => (
  <React.Fragment>
    <Header />
    <Container>
      <div className="about-background">
        <div className="about">
          <h3>About Us</h3>
          <h6>Connecting Lives Through Performance and Outreach</h6>
        </div>
      </div>
      <Parallax
        bgImage={require("./images/performance.jpeg")}
        bgImageAlt="the crew"
        strength={200}
      >
        <div
          style={{
            height: "300px"
          }}
        />
      </Parallax>
    </Container>
    <Footer />
  </React.Fragment>
);

export default About;
