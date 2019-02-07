import React, { Component } from "react";
import { Container } from "../../components/Grid";
import { Parallax } from "react-parallax";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";
import Events from "../../components/Events";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Parallax
          // blur={10}
          bgImage={require("./images/junctionlogo.jpeg")}
          bgImageAlt="the crew"
          strength={500}
          style={{
            height: "50%",
            // margin: "1% 0 0 0"
          }}
          message={"Hello"}
        >
          <div
            style={{
              height: "500px",
              backgroundColor: "rgba(0,0,0,0.4)"
            }}
          />
        </Parallax>
        <Container>
          <Events />
          <Parallax
            bgImage={require("../../pages/About/images/performance.jpeg")}
            bgImageAlt="the crew"
            strength={200}
          >
            <div
              style={{
                height: "300px"
              }}
            />
          </Parallax>
          <Gallery />
          <Footer />
        </Container>
      </React.Fragment>
    );
  }
}
export default Home;
