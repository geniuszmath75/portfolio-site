import { Link, useLocation } from "react-router-dom";
import { MdHome, MdAssignment, MdPerson } from "react-icons/md";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { useEffect } from "react";

function Navbar() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const targetElement = document.getElementById(hash.substring(1));
      targetElement?.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return (
    <IconContext.Provider value={{ className: "menu-item-img" }}>
      <>
        <div className="navbar">
          <div className="navbar-container">
            <ul className="menu-items">
              <li className="menu-item">
                <Link to="/" className="nav-links">
                  <MdHome />
                  <div className="menu-item-text">About Me</div>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="#projects" className="nav-links">
                  <MdAssignment />
                  <div className="menu-item-text">Projects</div>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="#contact" className="nav-links">
                  <MdPerson />
                  <div className="menu-item-text">Contact</div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    </IconContext.Provider>
  );
}

export default Navbar;
