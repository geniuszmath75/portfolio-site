import { Link } from "react-router-dom";
import { MdHome, MdAssignment, MdPerson } from "react-icons/md";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { useState } from "react";

function Navbar() {
  const [hover, setHover] = useState(false);
  const handleMouseOver = () => setHover(false);
  const handleMouseOut = () => setHover(true);

  return (
    <IconContext.Provider value={{ className: "menu-item-img" }}>
      <>
        <div className="navbar">
          <div className="navbar-container">
            <ul className="menu-items">
              <li className="menu-item">
                <Link to="/" className="nav-links">
                  <MdHome />
                  <div className="menu-item-text">Home</div>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/" className="nav-links">
                  <MdAssignment />
                  <div className="menu-item-text">Projects</div>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/" className="nav-links">
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
