import React, { Component } from "react";
import JunctionLogo from "./images/junctionlogo.jpeg";
import "./form.css";

class Form extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <form className="col s6">
            <h3>Questions?</h3>
            <div className="row">
              <div className="input-field col s6">
                <input
                  placeholder="Enter Your First Name"
                  id="first_name"
                  type="text"
                  className="validate"
                />
                <span className="helper-text">First Name</span>
              </div>
              <div className="input-field col s6">
                <input
                  placeholder="Enter Your Last Name"
                  id="last_name"
                  type="text"
                  className="validate"
                />
                <span className="helper-text">Last Name</span>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input
                  placeholder="Enter Your Email"
                  id="email"
                  type="email"
                  className="validate"
                />
                <span className="helper-text">Email</span>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea id="textarea1" className="materialize-textarea" />
                <span className="helper-text">Message</span>
              </div>
            </div>
          </form>
          {/* <div className="col s6 m6">
            <div className="card">
              <div className="form-image" />
            </div>
          </div> */}

          <div className="col s12 m6">
            <img src={JunctionLogo} class="form-card" alt="junctino logo" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;
