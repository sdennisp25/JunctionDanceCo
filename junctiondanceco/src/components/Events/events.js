import React from "react";
import "./events.css";

const Events = props => (
  <div className="events-background">
    <h3>Upcoming Show!</h3>
    <div className="row">
      <div className="col s12 m6">
        <img className="event-image" src={require("./images/rebirth.png")} />
      </div>
      <div className="col s12 m6">
        <div className="events">
          <h4>REBIRTH</h4>
          <h6>Mar 29 at 7:30 PM – Mar 31 at 7:30 PM</h6>
          <br />
          <h6>Rose Wagner Performing Arts Center</h6>
          <h6>138 W Broadway, Salt Lake City, Utah 84101</h6>
          <a
            href="https://arttix.artsaltlake.org/single/EventDetail.aspx?p=22701"
            target="_blank"
            class="waves-effect waves-light btn-small"
          >
            Buy Tickets
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Events;
