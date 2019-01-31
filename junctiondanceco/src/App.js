import React, { Component } from "react";
import { Container } from "./components/Grid";
import { Parallax } from "react-parallax";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

import "./App.css";
import { formatWithOptions } from "util";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Container>
          <Parallax
            // blur={10}
            bgImage={require("../src/components/Jumbotron/images/junctioncrew.jpeg")}
            bgImageAlt="the crew"
            strength={200}
            style={{
              margin: "1% 0 0 0",
              width: "100%"
            }}
          >
            <div
              style={{
                height: "350px"
              }}
            />
          </Parallax>
          <About />
          <Parallax
            // blur={10}
            bgImage={require("../src/components/Jumbotron/images/performance.jpeg")}
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
					<Contact />
          <Footer />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
