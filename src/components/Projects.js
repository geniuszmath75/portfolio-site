import React from "react";
import "./Projects.css";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-item">
        <div className="project-wrapper">
          <Link to="http://projektdamian.pl" className="projects-link">
            <div className="project-description">
              Website browser to look for information about countries.
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
