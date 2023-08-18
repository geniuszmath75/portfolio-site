import { NavLink, useLocation } from "react-router-dom";
import { MdHome, MdAssignment, MdPerson } from "react-icons/md";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { useEffect } from "react";

function Navbar({
  homeBtnPl,
  projectsBtnPl,
  contactBtnPl,
  homeBtnEn,
  projectsBtnEn,
  contactBtnEn,
  click,
  polishVer,
  handleClickEN,
  handleClickPL
}) {
  
  let location = useLocation();
  
  useEffect(() => {
    if (location.hash) {
      const targetElement = document.getElementById(location.hash.substring(1));
      targetElement?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <IconContext.Provider value={{ className: "menu-item-img" }}>
      <>
        <div className="navbar">
          <div className="navbar-container">
            <ul className="menu-items">
              <li className="menu-item">
                <NavLink exact to="/" className="nav-links"
                >
                  <MdHome />
                  <div className="menu-item-text">
                    {polishVer ? homeBtnPl : homeBtnEn}
                  </div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to="#projects" className="nav-links">
                  <MdAssignment />
                  <div className="menu-item-text">{polishVer ? projectsBtnPl : projectsBtnEn}</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to="#contact" className="nav-links">
                  <MdPerson />
                  <div className="menu-item-text">{polishVer ? contactBtnPl : contactBtnEn}</div>
                </NavLink>
              </li>
            </ul>
            <div className="website-language">
              <button
                className={click ? "active-button" : "not-active-button"}
                onClick={handleClickPL}
              >
                PL
              </button>
              <button
                className={click ? "not-active-button" : "active-button"}
                onClick={handleClickEN}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </>
    </IconContext.Provider>
  );
}

export default Navbar;
