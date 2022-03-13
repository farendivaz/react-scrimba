import React from "react";
import logo from "../react.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="header">
      <nav className="nav">
        <img src={logo} />
        <h2>React Facts</h2>
      </nav>
      <h3>React Course- Project 1</h3>
    </div>
  );
}

export default Navbar;
