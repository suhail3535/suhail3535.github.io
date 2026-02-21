import React, { useState, useEffect } from "react";
import {useColorMode } from "@chakra-ui/react";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";

import Static from "./Components/Static/Static";
import GitHub from "./Components/Github/Github";

import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import BackToTop from "./Components/Home/BacktoTop";

import WhatsApp from "./Components/Home/WhatsApp";

import { ImageCom } from "./Components/Image";
import Loader from "./Components/Home/Loader";
import CaroselMain from "./Components/CaroselSlider/CarouselMain";

import Experience from "./Components/ExperienceNew/Experience";

function App() {
  const { colorMode } = useColorMode();
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGif(false);
    }, 2500);


    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="App">
        {showGif ? (
          <Loader />

        ) : (
          <>

            <Navbar colorMode={colorMode} />
            <Home colorMode={colorMode} />

            <ImageCom />

            <About colorMode={colorMode} />
            <ImageCom />
            <Skills colorMode={colorMode} />
            <ImageCom />
            
            <Experience colorMode={colorMode} />
            <ImageCom />
            <CaroselMain colorMode={colorMode} />
            <ImageCom />
            <Static colorMode={colorMode} />
            <ImageCom />

            <GitHub colorMode={colorMode} />

            <ImageCom />

            <Contact colorMode={colorMode} />
            <ImageCom />

            <BackToTop />
            <WhatsApp />
            <Footer colorMode={colorMode} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
