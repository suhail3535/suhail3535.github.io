import React from "react";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Projects from "./Components/CaroselSlider/CarouselMain";
import Testimonials from "./Components/Testimonials/Testimonials";
import Process from "./Components/Process/Process";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/ExperienceNew/Experience";
import Static from "./Components/Static/Static";
import GitHub from "./Components/Github/Github";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import BackToTop from "./Components/Home/BacktoTop";
import WhatsApp from "./Components/Home/WhatsApp";

import useReveal from "./hooks/useReveal";

/**
 * Section order is deliberately client-first: what I can do for you, proof
 * that I have done it, who vouches for it, and how the engagement works —
 * before the parts that are about me (about, skills, employment history).
 */
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
        <Services />
        <Projects />
        <Testimonials />
        <Process />
        <Experience />
        <Skills />
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
