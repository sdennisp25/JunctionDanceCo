import React, { Component } from "react";
import { Container } from "../../components/Grid";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import "./contact.css";

class Contact extends Component {
	
	
	render() {
		return (
      <React.Fragment>

        <Header />
        <Form />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Contact;
