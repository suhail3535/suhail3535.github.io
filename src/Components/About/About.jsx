import { Box, Heading, Image, useDisclosure } from "@chakra-ui/react";
import React, { useEffect } from "react";
import style from "./About.module.css";
import profilephoto from "../images/mycropimg.png";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { HiDownload } from "react-icons/hi";

// ..

AOS.init();
export default function About ({ colorMode }) {
    const openLink = (url) => {
        window.open(url);
    };

    return (
        <div

            id="about"
            className={style.background}
            data-aos-mirror="true"
            data-aos="fade-up"
            data-aos-duration="3000">

            <Heading
                size={["xl", "xl", "xl", "xl"]}
                textAlign="center"
                fontFamily="Bree Serif, serif"
                color={colorMode === "light" ? "black" : "white"}>
                About Me
            </Heading>
            <div
                data-aos-mirror="true"
                data-aos="fade-up"
                data-aos-duration="3000">
                <div
                    id={style.aboutDiv}
                    color={colorMode === "light" ? "white" : "black"}>
                    <div id={style.first}>
                        <Image
                            className="home-img"
                            src={profilephoto}
                            // src="profile-modified.png"
                            alt="Suhail Khan"
                        />
                    </div>

                    <Box className={style.aboutDetails} color={colorMode === "light" ? "black" : "white"}>
                        <p
                            id="user-detail-name"
                            fontFamily="Bree Serif, serif"
                            className={style.name}
                            color={colorMode === "light" ? "black" : "gray"}
                        >
                            I am Suhail Khan
                        </p>
                        <p className={style.name}>Full Stack Web Developer</p>

                        <p className={style.name}>
                            I live in Hardoi,Uttar Pradesh,India
                        </p>

                        <div className="aboutMe" id="user-detail-intro">
                            <p className={style.namep}>
                                A highly focused and reliable Front-End Developer with 1 year
                                and 11 months of hands-on experience. My expertise include HTML,
                                CSS,Vanilla JavaScript,BootStrap,Tailwind CSS, React.js,Redux js,Redux Toolkit Node.js, Express.js, MongoDB, Mongoose,
                                and Git. Passionate about web development, I am eager to contribute to innovative projects and develop impactful solutions. My strong work ethic and ability to thrive in fast-paced environments make me a valuable team member. I look forward to collaborating on new ventures and pushing boundaries in the ever-evolving landscape of technology.
                            </p>
                        </div>

                        <div
                            id={style.resumeDiv}
                            backgroundColor={
                                colorMode === "light" ? "black" : ""
                            }>
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
                                    id="resume-button-2">
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
