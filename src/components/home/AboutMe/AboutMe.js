import React from "react";
import { DiHtml5, DiCss3, DiReact, DiJsBadge } from "react-icons/di";
import "./AboutMe.css";

function Home({
  polishVer,
  websiteDescPl1,
  websiteDescPl2,
  websiteDescEn1,
  websiteDescEn2,
  titlePl,
  titleEn,
}) {
  return (
    <div className="home-container" id="about-me">
      <div className="about-me">
        <div className="info-text-container">
          <p className="info-text">
            {polishVer ? websiteDescPl1 : websiteDescEn1}
          </p>
          <p className="info-text">
            {polishVer ? websiteDescPl2 : websiteDescEn2}
          </p>
        </div>
        <div className="abilities">
          <h3 className="abilities-header">{polishVer ? titlePl : titleEn}</h3>
          <div className="abilities-icons">
            <DiHtml5 id="html5" />
            <DiCss3 id="css3" />
            <DiJsBadge id="js-badge" />
            <DiReact id="react" />
          </div>
        </div>
      </div>
      <div className="photo-container">
        <img className="photo" src="images/selfie.png" alt="selfie" />
      </div>
    </div>
  );
}

export default Home;
