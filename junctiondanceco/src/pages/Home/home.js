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
        <Container>
          <Parallax
            // blur={10}
            bgImage={require("./images/junctioncrew.jpeg")}
            bgImageAlt="the crew"
            strength={100}
            style={{
							height: "50%",
							margin: "1% 0 0 0"
            }}
          >
            <div
              style={{
                height: "450px",
								backgroundColor: "rgba(0,0,0,0.4)"
              }}
            />
          </Parallax>
          <Events />
          <Gallery />
          {/* <Parallax
            bgImage={require("./images/performance.jpeg")}
            bgImageAlt="the crew"
            strength={200}
          >
            <div
              style={{
                height: "300px"
              }}
            />
          </Parallax> */}
          <Footer />
        </Container>
      </React.Fragment>
    );
  }
}
export default Home;
