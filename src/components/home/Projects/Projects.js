import React from "react";
import "./Projects.css";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

function Projects({ polishVer, projectOnePl, projectOneEn }) {
  return (
    <div className="projects-container" id="projects">
      <div className="projects-item">
        <div className="project-wrapper">
          <Link to="https://countrysearcher.pl" className="projects-link">
            <div className="project-description">
              <p className="description-text">{polishVer ? projectOnePl : projectOneEn}</p>
            </div>
            <div className="link-button">
              <FiExternalLink className="link-image" />
            </div>
            <img
              src="images/project1.png"
              alt="project_screen"
              className="project-one"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
