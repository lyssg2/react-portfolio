import './App.css';
import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";

// Components
import Navigation from './components/Navigation'
import Intro from './components/Intro'
import Skills from "./components/Skills";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from './components/Footer';
// import Particles from 'react-tsparticles';

function App() {

  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <Intro />
        {/* <Particles /> */}
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/work" element={<Work/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
