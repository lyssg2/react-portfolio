// Dependencies
import './App.css';
import React from 'react';
import {
  Routes,
  Route,
  HashRouter as Router,
} from "react-router-dom";

// Styling 
import 'materialize-css/dist/css/materialize.min.css'
import './index.css';
import { AnimatePresence } from "framer-motion";

// Components
import Navigation from './components/Navigation'
import Intro from './components/Intro'
import Skills from "./components/Skills";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from './components/Footer';

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
    <Router >
      <div className="app-container">
        <Navigation />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/About" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </AnimatePresence>
  )
}

export default App