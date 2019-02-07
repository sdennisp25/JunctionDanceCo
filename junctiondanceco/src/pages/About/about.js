import React from "react";
import "./about.css";
import { Container } from "../../components/Grid";
import { Parallax } from "react-parallax";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Megan from "../../components/Megan";

const About = props => (
  <React.Fragment>
    <Header />
    <Container>
			<Megan />
      <div className="about-background">
        <div className="about">
          <h3>About Us</h3>
          <h6>Connecting Lives Through Performance and Outreach</h6>
          <h6>
            It sums up your unique promise of value. Your personal brand
            statement is distinctive to you and you alone. ... The personal
            brand statement is not a job title. A job title is what others will
            try to classify you with, what employers and others want you to be
            to fit you into a corporate setting. It sums up your unique promise
            of value. Your personal brand statement is distinctive to you and
            you alone. ... The personal brand statement is not a job title. A
            job title is what others will try to classify you with, what
            employers and others want you to be to fit you into a corporate
            setting. It sums up your unique promise of value. Your personal
            brand statement is distinctive to you and you alone. ... The
            personal brand statement is not a job title. A job title is what
            others will try to classify you with, what employers and others want
            you to be to fit you into a corporate setting
          </h6>
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
