import React, { Component } from "react";
import { Link } from "react-router-dom";


class Sponsors extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Card Title</span>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Sponsors;
