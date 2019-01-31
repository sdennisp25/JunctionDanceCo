import React from "react";
import "./gallery.css";

const Gallery = props => (
  <div className="gallery">
    <div className="row">
      <div className="col s12 m4">
        <div className="card">
          <div className="image1" />
        </div>
      </div>
      <div className="col s12 m4">
        <div className="card">
          <div className="image2" />
        </div>
      </div>
      <div className="col s12 m4">
        <div className="card">
          <div className="image3" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col s12 m4">
        <div className="card">
          <div className="image4" />
        </div>
      </div>
      <div className="col s12 m4">
        <div className="card">
          <div className="image5" />
        </div>
      </div>
      <div className="col s12 m4">
        <div className="card">
          <div className="image6" />
        </div>
      </div>
    </div>
  </div>
);

export default Gallery;
