import { Link, useLocation } from "react-router-dom";
import { MdHome, MdAssignment, MdPerson } from "react-icons/md";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";

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
                  <div className="menu-item-text">
                    {polishVer ? homeBtnPl : homeBtnEn}
                  </div>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="#projects" className="nav-links">
                  <MdAssignment />
                  <div className="menu-item-text">{polishVer ? projectsBtnPl : projectsBtnEn}</div>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="#contact" className="nav-links">
                  <MdPerson />
                  <div className="menu-item-text">{polishVer ? contactBtnPl : contactBtnEn}</div>
                </Link>
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
