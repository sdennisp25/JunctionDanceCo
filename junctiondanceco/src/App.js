import React, { Component } from "react";
import Header from "./components/Header";
// import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import { Container } from "./components/Grid";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Container>
          <Gallery />
          {/* <Wrapper> */}
          <Footer />
          {/* </Wrapper> */}
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
