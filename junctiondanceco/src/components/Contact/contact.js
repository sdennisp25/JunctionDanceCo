import React from "react";
import "./contact.css";

const Contact = props => (
  <div className="contact-background">
    <div className="row">
      <div className="col s12 m6">
        <div className="contact">
          <h3>Contact Us</h3>
          <div className="row">
            <div className="col s12 m4">
              <div className="box">
                <div className="card card-box">
                  <div className="facebook" />
                </div>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="box">
                <div className="card">
                  <div className="instagram" />
                </div>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="box">
                <div className="card">
                  <div className="email" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col s12 m6">
        <div className="donate">
          <h3>Donate</h3>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
