import React, { useState, useEffect } from "react";
import { Button, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";
import Project from "./Components/Project/Project";
import Static from "./Components/Static/Static";
import GitHub from "./Components/Github/Github";

import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import BackToTop from "./Components/Home/BacktoTop";
import Anima from "./Components/Animation/Anima";
import WhatsApp from "./Components/Home/WhatsApp";
import Experience from "./Components/Experience/Experience";
import { ImageCom } from "./Components/Image";
import Loader from "./Components/Home/Loader";

function App () {
  const { colorMode, toggleColorMode } = useColorMode();
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
            <Button size="lg" id="themeButton" onClick={toggleColorMode}>
              {colorMode === "light" ? (
                <FaMoon fontSize="20px" />
              ) : (
                <FaSun fontSize="20px" />
              )}
            </Button>
            <Navbar colorMode={colorMode} />
            <Home colorMode={colorMode} />
            <Anima dir="up" />
            <About colorMode={colorMode} />
            <ImageCom />
            <Skills colorMode={colorMode} />
            <ImageCom />
            <Experience colorMode={colorMode} />
            <ImageCom />
            <Project colorMode={colorMode} />
            <ImageCom />
            <Static colorMode={colorMode} />
            <Anima dir="up" />
            <GitHub colorMode={colorMode} />
            <Anima dir="down" />
            <Contact colorMode={colorMode} />
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
