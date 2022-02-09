import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react';
import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
    <div className="App">
      <Navigation />
    </div>
    </Router>
  );
}

export default App;
