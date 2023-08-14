import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://github.com/Saben1" target="_blank" rel="noopener noreferrer">
        <img className="icons" src="image\github_icon.png" alt="github icon" width="65" />
      </a>
      <a href="" target="_blank" rel="noopener noreferrer">
        <img className="icons" src="\image\LinkedIn.png" alt="linkedin icon" width="50" />
      </a>
    </footer>
  );
};

export default Footer;
