import React from "react";
import { DiHtml5, DiCss3, DiReact, DiJsBadge } from "react-icons/di";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="about-me">
        <div className="info-text-container">
          <p className="info-text">
            Hey, I’m Damian and it’s my portfolio website.
          </p>
          <p className="info-text">
            If you are interested in my projects, feel free to contact me.
          </p>
        </div>
        <div className="abilities">
          <h3 className="abilities-header">ABILITIES:</h3>
          <div className="abilities-images">
            <DiHtml5 id="html5"/>
            <DiCss3 id="css3"/>
            <DiJsBadge id="js-badge"/>
            <DiReact id="react"/>
          </div>
        </div>
      </div>
      <div className="photo-container">
        <img className="photo" alt="photo" />
      </div>
    </div>
  );
}

export default Home;
