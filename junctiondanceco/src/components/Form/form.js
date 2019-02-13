import React, { Component } from "react";
import { Container } from "../../components/Grid";

import "./form.css";

class Form extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <div className="form-box">
            <h3 class="questions">Questions?</h3>
            <form
              className="form col s12"
              method="GET"
              action="mailto:sdennisp25@hotmail.com"
              enctype="text/plain"
            >
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
              <input
                type="submit"
                value="Send Message"
                class="waves-effect waves-light btn-small"
              />
            </form>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default Form;
