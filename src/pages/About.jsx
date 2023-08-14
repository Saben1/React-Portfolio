import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about-me-container">
      <section className="about-me" id="about">
        <img className="avatar" src="/image/sabin.jpg" alt="Avatar" />
        <div>
          <h2 className="about-me-title">About Me</h2>
          <p className="about-me-text">
          I'm a junior web developer passionate about crafting dynamic,user-friendly
          websites. Proficient in HTML, CSS, and JavaScript,with experience in React.
          Eager to expand skills through challenging  projects and stay updated on the
          latest web trends. Excited to continuemaking an impact in the industry.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
