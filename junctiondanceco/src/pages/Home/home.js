import React, { Component } from "react";
import { Container } from "../../components/Grid";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";
import Events from "../../components/Events";
import "./home.css";

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
					renderLayer={percentage => (
						<div
								style={{
										position: 'absolute',
										background: `rgba(0,0,0,0.3)`,
										// left: '50%',
										// top: '50%',
										width: "100%",
										height: "100%",
								}}
						/>
				)}
        >
          <div
            style={{
							height: "300px",

            }}
          />
          <div className="logo-header">
            <h5>"Connecting Lives Through Performance and Outreach"</h5>
            <Link to={"/about"} class="waves-effect waves-light btn">Upcoming Classes!</Link>
          </div>
        </Parallax>
        <Container>
          <Events />
          <Gallery />
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}
export default Home;
