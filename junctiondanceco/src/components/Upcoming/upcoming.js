import React, { Component } from "react";

class Upcoming extends Component {
  render() {
    return (
      <React.Fragment>
        <h3>Upcoming Events</h3>

        <div className="row">
          <div className="col s12 m3">
            <div className="card">
              <div className="card-image">
                <img src="images/sample-1.jpg" />
                {/* <span className="card-title">Card Title</span> */}
              </div>
              <div className="card-content">
								<ul>
									<li>Who</li>
									<li>What</li>
									<li>When</li>
									<li>Where</li>
								</ul>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
          <div className="col s12 m3">
            <div className="card">
              <div className="card-image">
                <img src="images/sample-1.jpg" />
                {/* <span className="card-title">Card Title</span> */}
              </div>
              <div className="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
          <div className="col s12 m3">
            <div className="card">
              <div className="card-image">
                <img src="images/sample-1.jpg" />
                {/* <span className="card-title">Card Title</span> */}
              </div>
              <div className="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
          <div className="col s12 m3">
            <div className="card">
              <div className="card-image">
                <img src="images/sample-1.jpg" />
                {/* <span className="card-title">Card Title</span> */}
              </div>
              <div className="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Upcoming;
