import React from "react";
import "./Header.css";

const Header = props => (
  <div>
    <nav>
      <div className="nav-wrapper">
        {/* <a href="#" className="brand-logo right"> */}
          JunctionDanceCo
        {/* </a> */}
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <a href="sass.html">Home</a>
          </li>
          <li>
            <a href="badges.html">About</a>
          </li>
          <li>
            <a href="collapsible.html">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Header;
