import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Projects />
    </Router>
  );
}

export default App;
