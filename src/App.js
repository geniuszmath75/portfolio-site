import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './components/home/AboutMe/AboutMe.js';
import Projects from './components/home/Projects/Projects.js';
import Contact from './components/home/Contact/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <AboutMe />
      <Projects />
      <Contact />
    </Router>
  );
}

export default App;
