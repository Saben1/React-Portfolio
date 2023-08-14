import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navBar">
      <ul>
        <li>
          <a href="/" className="home">
            HOME
          </a>
        </li>
        <li>
          <a href="/About">ABOUT ME</a>
        </li>
        <li>
          <a href="/Portfolio">PORTFOLIO</a>
        </li>
        <li>
          <a href="/Contact">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
