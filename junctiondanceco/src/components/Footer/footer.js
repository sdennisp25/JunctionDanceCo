import React from "react";
import "./footer.css";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="footer">
    <div class="row">
      <div class="col s5" />
      <div class="col s2">© 2019 Junction Dance Co</div>
      <div class="col s3" />
      <div class="col s2">
        <div className="logo right">
          <Link to="https://www.facebook.com/junctiondanceco/" target="_blank">
            <SocialIcon
              network="facebook"
              bgColor="teal"
              style={{ height: 25, width: 25, margin: 5 }}
            />
          </Link>
          <Link to="https://www.instagram.com/junctiondanceco/" target="_blank">
            <SocialIcon
              network="instagram"
              bgColor="teal"
              style={{ height: 25, width: 25, margin: 5 }}
            />
          </Link>
          <Link to="https://www.instagram.com/junctiondanceco/" target="_blank">
            <SocialIcon
              network="email"
              bgColor="teal"
              style={{ height: 25, width: 25, margin: 5 }}
            />
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
