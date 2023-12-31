import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/home/Navbar/Navbar";
import AboutMe from "./components/home/AboutMe/AboutMe.js";
import Projects from "./components/home/Projects/Projects.js";
import Contact from "./components/home/Contact/Contact";
import { navbarData } from "./components/home/Navbar/Data";
import { aboutMeData } from "./components/home/AboutMe/Data";
import { projectsData } from "./components/home/Projects/Data";
import { contactData } from "./components/home/Contact/Data";

function App() {
  const [click, setClick] = useState(true);
  const [polishVer, setPolishVer] = useState(true);
  const [showComponent, setShowComponent] = useState(false);

  const handleShowComponent = () => {
    if (!showComponent) setShowComponent(true);
  };

  const handleClickPL = () => {
    if (click) {
      setClick(click);
    } else {
      setClick(!click);
      setPolishVer(!click);
    }
  };

  const handleClickEN = () => {
    setClick(!click);
    setPolishVer(!polishVer);
  };

  return (
    <Router>
      <Navbar
        handleClickEN={handleClickEN}
        handleClickPL={handleClickPL}
        click={click}
        polishVer={polishVer}
        {...navbarData}
      />
      <AboutMe
        polishVer={polishVer}
        {...aboutMeData}
        showComponent={showComponent}
        handleShowComponent={handleShowComponent}
      />
      <Projects
        polishVer={polishVer}
        {...projectsData}
        showComponent={showComponent}
        handleShowComponent={handleShowComponent}
      />
      <Contact
        polishVer={polishVer}
        {...contactData}
        showComponent={showComponent}
        handleShowComponent={handleShowComponent}
      />
    </Router>
  );
}

export default App;
