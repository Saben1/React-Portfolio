import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <header>
      <h1 className="header" id="home">
        Welcome to my Portfolio.
        <br />
        My name is <span className="name"> Sabin Budhathoki</span> and I am a
        <span className="name">Web Developer</span>
      </h1>
    </header>
  );
}

export default Home;
