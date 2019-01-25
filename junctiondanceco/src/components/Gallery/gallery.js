import React from "react";
import "./gallery.css";
// import { Parallax } from "react-parallax";

const Gallery = props => (
  <div className="parentBox">
    <div className="parallax-container">
      <div className="parallax">
				<img src={require("./images/junctioncrew.jpeg")} alt=""></img>
      </div>
    </div>
    <div className="section white">
      <div className="row container">
        <h2 className="header">Parallax</h2>
        <p className="grey-text text-darken-3 lighten-3">
          Parallax is an effect where the background content or image in this
          case, is moved at a different speed than the foreground content while
          scrolling.
        </p>
      </div>
    </div>
    <div className="parallax-container">
      <div className="parallax2">
      </div>
		</div>
    {/* <div>
      <Parallax imageSrc={require("./images/junctioncrew.jpeg")} />
      <div className="section white">
        <div className="row container">
          <h2 className="header">Parallax</h2>
          <p className="grey-text text-darken-3 lighten-3">
            Parallax is an effect where the background content or image in this
            case, is moved at a different speed than the foreground content
            while scrolling.
          </p>
        </div>
      </div>
      <Parallax imageSrc="http://materializecss.com/images/parallax2.jpg" />
    </div> */}
  </div>
);
export default Gallery;
