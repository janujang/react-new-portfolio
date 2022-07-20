import "./App.scss";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";

import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Navigation menuOpen={menuOpen} onMenuOpen={setMenuOpen} />
      <Sidebar menuOpen={menuOpen} onMenuOpen={setMenuOpen} />
      <div className="sections">
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
