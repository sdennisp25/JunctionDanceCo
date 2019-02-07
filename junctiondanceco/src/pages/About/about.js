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
          <h6>Junction Dance Company is a diverse group of talented individuals that came together to unite all styles of dance. Passionately driven to spread the love for the art of dance by performing at charity events, benefit concerts, parades, and competitions. We strive to create unity in the dance community and by connecting others who have yet to experience the same passion.
          </h6>
        </div>
      </div>
      <Parallax
        bgImage={require("./images/junctioncrew.jpeg")}
        bgImageAlt="the crew"
				strength={150}
				style={{
					margin: "0 0 15% 0"
				}}
      >
        <div
          style={{
						height: "400px",
          }}
        />
      </Parallax>
    </Container>
    <Footer />
  </React.Fragment>
);

export default About;
