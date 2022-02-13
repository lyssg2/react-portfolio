import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

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
    <BrowserRouter>
      <div className="app-container">
        <Navigation />
        {/* <Particles /> */}
        <Routes>
          <Route path="/" element={<Intro/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/work" element={<Work/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
