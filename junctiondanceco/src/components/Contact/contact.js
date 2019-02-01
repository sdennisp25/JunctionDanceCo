import React from "react";
import "./contact.css";

const Contact = props => (
  <div className="contact-background">
    <div className="row">
      <div className="col s12 m4">
        <div className="follow">
          <h3>Follow Us</h3>
          <div className="row">
            <div className="col s12 m2" />
            <div className="col s12 m4">
              <a href="https://www.facebook.com/junctiondanceco/" target="_blank">
                <img className="image" src={require("./images/facebook.png")} />
                <h7>Facebook</h7>
              </a>
            </div>
            <div className="col s12 m4">
              <img className="image" src={require("./images/instagram.png")} />
              <h7>Instagram</h7>
            </div>
            <div className="col s12 m2" />
          </div>
        </div>
      </div>

      <div className="col s12 m4">
        <div className="donate">
          <h3>Contact Us</h3>
          <div className="row">
            <div className="col s12 m4" />
            <div className="col s12 m4">
              <img className="image" src={require("./images/email.png")} />
              <h7>Email Us</h7>
            </div>
            <div className="col s12 m4" />
          </div>
        </div>
      </div>

      <div className="col s12 m4">
        <div className="donate">
          <h3>Donate</h3>
          <div className="row">
            <div className="col s12 m2" />
            <div className="col s12 m4">
              <img className="image" src={require("./images/paypal.jpeg")} />
              <h7>Paypal</h7>
            </div>
            <div className="col s12 m4">
              <img className="image" src={require("./images/venmo.png")} />
              <h7>Venmo</h7>
            </div>
            <div className="col s12 m2" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
