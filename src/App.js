import React from "react";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/ExperienceNew/Experience";
import Projects from "./Components/CaroselSlider/CarouselMain";
import Static from "./Components/Static/Static";
import GitHub from "./Components/Github/Github";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import BackToTop from "./Components/Home/BacktoTop";
import WhatsApp from "./Components/Home/WhatsApp";

import useReveal from "./hooks/useReveal";

function App() {
  // One IntersectionObserver for every .reveal element on the page.
  useReveal();

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Static />
        <GitHub />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
      <WhatsApp />
    </>
  );
}

export default App;
