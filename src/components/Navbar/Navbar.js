import React from "react";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">

    <div>
      <ul className="navbar-nav">

        <a id="previous-score">Previous Score:{props.previousScore}</a>
        <a id="title"><strong>Nature Clicker</strong></a>
        <a id="current-score">Current Score:{props.currentScore}</a>

      </ul>
    </div>
  </nav>
);

export default Navbar;
