import { Box, Heading, Image, useDisclosure } from "@chakra-ui/react";
import React, { useEffect } from "react";
import style from "./About.module.css";
import profilephoto from "../images/AvatarImage.webp";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { HiDownload } from "react-icons/hi";

// ..

AOS.init();
export default function About({ colorMode }) {
  const openLink = (url) => {
    window.open(url);
  };


  const buttonStyles = {
    base: {
      border: "none",
      borderRadius: "20px",
      padding: "6px 14px",
      fontSize: "14px",
      fontFamily: "Arial, sans-serif",
      margin: "5px",
      cursor: "pointer",
      fontWeight: "bold",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
    },
    react: { backgroundColor: "#CFEAFE", color: "#0A4C8C" },
    next: { backgroundColor: "#CDE4FF", color: "#0060C1" },
    ts: { backgroundColor: "#EAD7FF", color: "#6B22C1" },
    access: { backgroundColor: "#DFFAE4", color: "#087F23" },
    perf: { backgroundColor: "#FFF6C7", color: "#9A5B00" },
  };




  return (
    <div
      id="about"
      //   className={style.background}
      data-aos-mirror="true"
      data-aos="fade-up"
      data-aos-duration="3000"
      className={"background"}
    >
      <div id={"stars"} />
      <div id={"stars2"} />
      <div id={"stars3"} />

      <Heading
        size={["xl", "xl", "xl", "xl"]}
        textAlign="center"
        fontFamily="Bree Serif, serif"
        color={colorMode === "light" ? "white" : "white"}

      >
        <span className={style.name}>  Professional Summary</span>
      </Heading>
      <div data-aos-mirror="true" data-aos="fade-up" data-aos-duration="3000">
        <div
          id={style.aboutDiv}
          color={colorMode === "light" ? "white" : "black"}
        >
          <div id={style.first}>
            <Image
              className="home-img"
              src={profilephoto}
              // src="profile-modified.png"
              alt="Suhail Khan"
            />

          </div>

          <Box
            className={style.aboutDetails}
            color={colorMode === "light" ? "white" : "white"}
          >

            <div className="aboutMe" id="user-detail-intro">
              <p className={style.namep}>
                I'm a passionate fullstack developer with expertise in building modern, scalable web applications using Next.js and TypeScript.

                My focus is on crafting performant, accessible, and visually appealing digital experiences. I thrive on solving complex problems, collaborating with teams, and delivering clean, maintainable code that delights users.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap",marginTop: "20px" }}>
                <button style={{ ...buttonStyles.base, ...buttonStyles.react }}>
                  React.js
                </button>
                   <button style={{ ...buttonStyles.base, ...buttonStyles.perf }}>
                  Node.js
                </button>
                 <button style={{ ...buttonStyles.base, ...buttonStyles.ts }}>
                python
                </button>
                <button style={{ ...buttonStyles.base, ...buttonStyles.next }}>
                  Next.js
                </button>
                <button style={{ ...buttonStyles.base, ...buttonStyles.ts }}>
                  TypeScript
                </button>
                <button style={{ ...buttonStyles.base, ...buttonStyles.access }}>
                  Accessibility
                </button>
                <button style={{ ...buttonStyles.base, ...buttonStyles.perf }}>
                  Performance
                </button>
              </div>
            </div>

            <div
              id={style.resumeDiv}
              backgroundColor={colorMode === "light" ? "black" : ""}
            >
              <a
                id="resume-link-2"
                className={style.resumeButton}
                href="https://drive.google.com/uc?id=1VKRDeBEd3fPzapen5JUZ-ie-OGWaZBGY&export=download"
                download="Suahil_Khan_Resume"
              >
                <div
                  style={{
                    border: "0px solid green",
                    padding: "5px",
                    marginRight: "5px",
                  }}
                  onClick={() =>
                    openLink(
                      "https://drive.google.com/file/d/1VKRDeBEd3fPzapen5JUZ-ie-OGWaZBGY/view?usp=sharing_link"

                      // "https://drive.google.com/file/d/1kgIaKRXSAAvH_9y1JGGGAC6IyOOwqWAH/view?usp=share_link"
                      // "https://drive.google.com/file/d/1E2mSDcxCeoGCOiBQGj7J65qYYZFcJPsd/view?usp=share_link"
                    )
                  }
                  className="home-resume"
                  id="resume-button-2"
                >
                  Resume
                </div>
                <HiDownload />
              </a>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}
