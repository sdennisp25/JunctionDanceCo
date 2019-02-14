import React from "react";
import { Container } from "../../components/Grid";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Events from "../../components/Events";
import News from "../../components/News";
import "./home.css";

const Home = props => (
  <React.Fragment>
    <Header />
    <Parallax
      bgImage={require("./images/junctionlogo.jpeg")}
      bgImageAlt="the crew"
      strength={600}
      renderLayer={percentage => (
        <div
          style={{
            position: "absolute",
            background: `rgba(0,0,0,0.2)`,
            width: "100%",
            height: "100%"
          }}
        />
      )}
    >
      <div
        style={{
          height: "400px"
        }}
      />
      <div className="logo-header">
        <h5>"Connecting Lives Through Performance and Outreach"</h5>
        <Link to={"/classes"} class="waves-effect waves-light btn">
          Upcoming Classes!
        </Link>
      </div>
    </Parallax>
    <Container>
      <Events />
      <News />
    </Container>
    <Footer />
  </React.Fragment>
);
export default Home;
