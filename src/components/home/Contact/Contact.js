import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaFacebook, FaPhone, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Contact.css";
import { IconContext } from "react-icons";

function Contact() {
  return (
    <IconContext.Provider value={{ className: "contact-icons" }}>
      <div className="contact-container" id="contact">
        <div className="contact-wrapper">
          <div className="contact-header-container">
            <h1 className="contact-header">Contact</h1>
          </div>
          <div className="contact-icons-wrapper">
            <ul className="icons-list">
              <li className="contact-item">
                <Link
                  to="mailto:damianjudka4500@gmail.com"
                  className="contact-links"
                >
                  <MdEmail id="email-icon" />
                </Link>
              </li>
              <li className="contact-item">
                <Link
                  to="https://github.com/geniuszmath75"
                  className="contact-links"
                >
                  <FaGithub id='github-icon'/>
                </Link>
              </li>
              <li className="contact-item">
                <Link
                  to="https://facebook.com/damian.judka1"
                  className="contact-links"
                >
                  <FaFacebook id="fb-icon"/>
                </Link>
              </li>
              <li className="contact-item">
                <Link
                  to="https://www.linkedin.com/in/damian-judka-8b0492248/"
                  className="contact-links"
                >
                  <FaLinkedin id='linkedin-icon'/>
                </Link>
              </li>
              <li className="contact-item">
                <Link to='tel:+48784826700' className="contact-links">
                  <FaPhone id='phone-icon'/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Contact;
