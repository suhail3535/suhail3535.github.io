import { Box, Button, Heading, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";

import style from "./Project.module.css";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import AOS from "aos";
import fashion from "../images/fashion.png";
import zakat from "../images/zakat.png";
import zym from "../images/zim.png";
import dict from "../images/dictonary.png";
import car from "../images/caradd.png";
import cctns from "../images/cctns.png";
import zeros from "../images/zeros.png";
import dinesh from "../images/dn.png";
import rctproject from "../images/rctproject.png";
import todoapp from "../images/new111.jpg";
import final from "../images/final.png";
import triphub from "../images/2.png";
import toptrip from "../images/3.png";
import todonew from "../images/todonew.png";
import shop from "../images/shopper.png";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export default function MajorProject ({ colorMode }) {
    return (
        <div id="projects" className={style.majorMain}>
            <div className="project-card" id={style.major_projectDiv}
                data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000" >
                <Box
                    className={style.major_project_imgDiv}

                >
                    <Image
                        className="project-skills-card-img"
                        src={fashion}
                        alt="fashionFrenzy"
                    />
                </Box>

                <Box
                    className={style.major_project_detailsDiv}
                    color={colorMode === "light" ? "black" : "white"}

                >
                    <Heading
                        className="project-title"
                        id={style.major_project_detailsDiv_Heading}
                        size={["md", "md", "md", "lg"]}>
                        Fashion Frenzy
                    </Heading>
                    <Heading
                        className="project-description"
                        id={style.major_project_detailsDiv_detail}
                        fontWeight="500"
                        size={["xs", "sm", "sm", "md"]}>
                        Fashion Frenzy is ECommerce Website & is a clone of
                        Anthropologie. With a vast collection of products of
                        fashion and clothing, we offer a seamless shopping
                        experience.!
                    </Heading>

                    <div
                        className="project-tech-stack"
                        id={style.major_project_detailsDiv_tehcs}>
                        Tech Stack:
                        <div>React</div>
                        <div>Redux</div>
                        <div>JavaScript</div>
                        <div>Node Js</div>
                        <div>Express Js</div>
                        <div>MongoDB</div>
                        <div>Chakra-UI</div>
                    </div>

                    <Box
                        className="project-card-btn"
                        id={style.major_project_detailsDi_btnDiv}>
                        <Button
                            className="project-card-btn"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className="project-github-link"
                                id={style.links}
                                rel="noreferrer"
                                href="https://github.com/suhail3535/alive-run-138"
                                target="_blank">
                                Source Code
                            </a>
                            &nbsp;
                            <FaGithub />
                        </Button>
                        <Button
                            className="project-deployed-link"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className={style.links}
                                rel="noreferrer"
                                href="https://faishonfrenzyecom.vercel.app/"
                                target="_blank">
                                Live
                            </a>
                            &nbsp;
                            <FaArrowRight />
                        </Button>
                    </Box>
                </Box>
            </div>

            <div className="project-card" id={style.major_projectDiv}
                data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000" >
                <Box
                    className={style.major_project_imgDiv}

                >
                    <Image
                        className="project-skills-card-img"
                        src={cctns}
                        alt="fashionFrenzy"
                    />
                </Box>

                <Box
                    className={style.major_project_detailsDiv}
                    color={colorMode === "light" ? "black" : "white"}

                >
                    <Heading
                        className="project-title"
                        id={style.major_project_detailsDiv_Heading}
                        size={["md", "md", "md", "lg"]}>
                        Raj Police Theft Vehicle  Module(Demo)
                    </Heading>
                    <Heading
                        className="project-description"
                        id={style.major_project_detailsDiv_detail}
                        fontWeight="500"
                        size={["xs", "sm", "sm", "md"]}>
                        Introducing CCTNS Raj Police Portal's 'E-FIR Vehicle Theft Module':
                        an online platform enabling civilians to report vehicle thefts seamlessly. This responsive UI is currently under development, designed to streamline reporting for enhanced public safety.
                    </Heading>

                    <div
                        className="project-tech-stack"
                        id={style.major_project_detailsDiv_tehcs}>
                        Tech Stack:
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>JavaScript</div>
                        <div>React</div>

                        <div>React-tostify</div>
                        <div>Ant-Design</div>
                        <div>Chakra-UI</div>
                    </div>

                    <Box
                        className="project-card-btn"
                        id={style.major_project_detailsDi_btnDiv}>
                        <Button
                            className="project-card-btn"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className="project-github-link"
                                id={style.links}
                                rel="noreferrer"
                                href="https://github.com/suhail3535/Rajpolice_vehicle_theft_portal_CCTNS_module-UI-Demo"
                                target="_blank">
                                Source Code
                            </a>
                            &nbsp;
                            <FaGithub />
                        </Button>
                        <Button
                            className="project-deployed-link"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className={style.links}
                                rel="noreferrer"
                                href="https://rajasthan-police-theftvehicle-module.netlify.app/"
                                target="_blank">
                                Live
                            </a>
                            &nbsp;
                            <FaArrowRight />
                        </Button>
                    </Box>
                </Box>
            </div>
            <div className="project-card" id={style.major_projectDiv}
                data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000" >
                <Box
                    className={style.major_project_imgDiv}

                >
                    <Image
                        className="project-skills-card-img"
                        src={zakat}
                        alt="fashionFrenzy"
                    />
                </Box>

                <Box
                    className={style.major_project_detailsDiv}
                    color={colorMode === "light" ? "black" : "white"}

                >
                    <Heading
                        className="project-title"
                        id={style.major_project_detailsDiv_Heading}
                        size={["md", "md", "md", "lg"]}>
                        Freelance Frontend Developer | Client: Bangladesh
                    </Heading>
                    <Heading
                        className="project-description"
                        id={style.major_project_detailsDiv_detail}
                        fontWeight="500"
                        size={["xs", "sm", "sm", "md"]}>
                        Developed a responsive and user-friendly
                        website UI using React.js and component libraries.
                        Collaborated with the client to deliver a high-quality product,
                        focusing on seamless navigation and an intuitive user experience.
                    </Heading>

                    <div
                        className="project-tech-stack"
                        id={style.major_project_detailsDiv_tehcs}>
                        Tech Stack:
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>JavaScript</div>
                        <div>React</div>

                        <div>React-tostify</div>
                        <div>Ant-Design</div>
                        <div>Chakra-UI</div>
                    </div>

                    <Box
                        className="project-card-btn"
                        id={style.major_project_detailsDi_btnDiv}>
                        <Button
                            className="project-card-btn"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className="project-github-link"
                                id={style.links}
                                rel="noreferrer"
                                href="https://github.com/suhail3535/zakat-foundation-frontend-freelance-project"

                                // href="https://github.com/suhail3535/alive-run-138"
                                target="_blank">
                                Source Code
                            </a>
                            &nbsp;
                            <FaGithub />
                        </Button>
                        <Button
                            className="project-deployed-link"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className={style.links}
                                rel="noreferrer"
                                href="https://6603caeba4541d678c0ca82a--marvelous-churros-cf40d8.netlify.app/"
                                target="_blank">
                                Live
                            </a>
                            &nbsp;
                            <FaArrowRight />
                        </Button>
                    </Box>
                </Box>
            </div>
            <div className="project-card" id={style.major_projectDiv}
                data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000">
                <Box
                    className={style.major_project_imgDiv}
                >
                    <Image
                        className="project-skills-card-img"
                        src={rctproject}
                        alt="aerowear"
                    />
                </Box>

                <Box
                    className={style.major_project_detailsDiv}
                    color={
                        colorMode === "light" ? "black" : "white"
                    }
                >
                    <Heading
                        className="project-title"
                        id={style.major_project_detailsDiv_Heading}
                        size={["md", "md", "md", "lg"]}>
                        AeroWear
                    </Heading>
                    <Heading
                        className="project-description"
                        id={style.major_project_detailsDiv_detail}
                        fontWeight="500"
                        size={["xs", "sm", "sm", "md"]}>
                        Aerowear is known for its trendy and affordable
                        clothing, with a focus on casual wear such as t-shirts,
                        hoodies, and jeans. The brand also offers a range of
                        accessories such as bags.
                    </Heading>
                    <div
                        className="project-tech-stack"
                        id={style.major_project_detailsDiv_tehcs}>
                        Tech Stack:
                        <div>React</div>
                        <div>Redux</div>
                        <div>Json Server</div>
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>JavaScript</div>
                        <div>Chakra-UI</div>
                    </div>
                    <div
                        className="project-card-btn"
                        id={style.major_project_detailsDi_btnDiv}>
                        <Button
                            // id={style.btn_Prj}
                            className="project-card-btn"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className="project-github-link"
                                id={style.links}
                                rel="noreferrer"
                                href="https://github.com/suhail3535/thinkable-slope-4107/tree/main/thinkable-slope"
                                target="_blank">
                                Source Code
                            </a>
                            &nbsp;
                            <FaGithub id={style.links} />
                        </Button>
                        <Button
                            className="project-deployed-link"
                            size={["xs", "sm", "sm", "sm"]}
                        // id={style.btn_Prj}
                        >
                            <a
                                id={style.links}
                                rel="noreferrer"
                                href="https://aerowear-suhail3535s-projects.vercel.app/"
                                target="_blank">
                                Live
                            </a>
                            &nbsp;
                            <FaArrowRight />
                        </Button>
                    </div>
                </Box>
            </div>
            {/* <div data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000" className="project-card" id={style.major_projectDiv}>
                <Box
                    className={style.major_project_imgDiv}
                >
                    <Image
                        className="project-skills-card-img"
                        src={zeros}
                        alt="typescript"
                    />
                </Box>

                <Box
                    className={style.major_project_detailsDiv}
                    color={colorMode === "light" ? "black" : "white"}
                >
                    <Heading
                        className="project-title"
                        id={style.major_project_detailsDiv_Heading}
                        size={["md", "md", "md", "lg"]}>
                        Zeros-Ecom
                    </Heading>
                    <Heading
                        className="project-description"
                        id={style.major_project_detailsDiv_detail}
                        fontWeight="500"
                        size={["xs", "sm", "sm", "md"]}>
                        Crafted a sleek landing page UI for a clothing e-commerce demo.
                        This minimalistic design showcases product listings, categories, and a streamlined checkout process. It's tailored to enhance user experience,
                        making browsing and purchasing clothing items effortless.
                    </Heading>
                    <div
                        className="project-tech-stack"
                        id={style.major_project_detailsDiv_tehcs}>
                        Tech Stack:
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>JavaScript</div>
                        <div>React</div>

                        <div>React-tostify</div>
                        <div>Ant-Design</div>
                        <div>Chakra-UI</div>
                    </div>
                    <div
                        className="project-card-btn"
                        id={style.major_project_detailsDi_btnDiv}>
                        <Button
                            // id={style.btn_Prj}
                            className="project-card-btn"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className="project-github-link"
                                id={style.links}
                                rel="noreferrer"
                                href="https://github.com/suhail3535/ZerosCom"
                                target="_blank">
                                Source Code
                            </a>
                            &nbsp;
                            <FaGithub id={style.links} />
                        </Button>
                        <Button
                            className="project-deployed-link"
                            size={["xs", "sm", "sm", "sm"]}
                        // id={style.btn_Prj}
                        >
                            <a
                                id={style.links}
                                rel="noreferrer"
                                href="https://zeroscom-landingpage.netlify.app/"
                                target="_blank">
                                Live
                            </a>
                            &nbsp;
                            <FaArrowRight />
                        </Button>
                    </div>
                </Box>
            </div> */}

            <div className="project-card"
                data-aos-mirror="true"
                data-aos="fade-right"
                data-aos-duration="3000" id={style.major_projectDiv}>
                <Box
                    className={style.major_project_imgDiv}
                >
                    <Image
                        className="project-skills-card-img"
                        src={zym}
                        alt="dictonary"
                    />
                </Box>

                <Box
                    className={style.major_project_detailsDiv}
                    color={colorMode === "light" ? "black" : "white"}
                     >
                    <Heading
                        className="project-title"
                        id={style.major_project_detailsDiv_Heading}
                        size={["sm", "sm", "sm", "lg"]}>
                        Fitness World
                    </Heading>
                    <Heading
                        className="project-description"
                        id={style.major_project_detailsDiv_detail}
                        fontWeight="500"
                        size={["xs", "sm", "sm", "md"]}>
                        Fitness World: Your ultimate destination for wellness. Explore tailored workout plans, nutrition tips, and community support. Achieve your fitness goals today!
                    </Heading>
                    <div
                        className="project-tech-stack"
                        id={style.major_project_detailsDiv_tehcs}>
                        Tech Stack:
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>JavaScript</div>
                        <div>React</div>
                        <div>Material-UI</div>
                        <div>Chakra-UI</div>
                    </div>
                    <Box
                        className="project-card-btn"
                        id={style.major_project_detailsDi_btnDiv}>
                        <Button
                            className="project-card-btn"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className="project-github-link"
                                id={style.links}
                                rel="noreferrer"
                                href="https://github.com/suhail3535/FitnessWorldwebApp"
                                target="_blank">
                                Source Code
                            </a>
                            &nbsp;
                            <FaGithub />
                        </Button>
                        <Button
                            className="project-deployed-link"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className={style.links}
                                rel="noreferrer"
                                href="https://fitness-worldweb-app.vercel.app/"
                                target="_blank">
                                Live
                            </a>
                            &nbsp;
                            <FaArrowRight />
                        </Button>
                    </Box>
                </Box>
            </div>
            {/* <div data-aos-mirror="true"
                data-aos="fade-right"
                data-aos-duration="3000" className="project-card" id={style.major_projectDiv}>
                <Box
                    className={style.major_project_imgDiv}
                >
                    <Image
                        className="project-skills-card-img"
                        src={dict}
                        alt="dictonary"
                    />
                </Box>

                <Box
                    className={style.major_project_detailsDiv}
                    color={colorMode === "light" ? "black" : "white"}
                 >
                    <Heading
                        className="project-title"
                        id={style.major_project_detailsDiv_Heading}
                        size={["sm", "sm", "sm", "lg"]}>
                        Your Dictionary
                    </Heading>
                    <Heading
                        className="project-description"
                        id={style.major_project_detailsDiv_detail}
                        fontWeight="500"
                        size={["xs", "sm", "sm", "md"]}>
                        Your Dictionary Search words here for instant access to definitions, synonyms, and antonyms. User-friendly interface with offline access.
                    </Heading>
                    <div
                        className="project-tech-stack"
                        id={style.major_project_detailsDiv_tehcs}>
                        Tech Stack:
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>JavaScript</div>
                        <div>React</div>

                        <div>Material-UI</div>
                        <div>Chakra-UI</div>
                    </div>
                    <Box
                        className="project-card-btn"
                        id={style.major_project_detailsDi_btnDiv}>
                        <Button
                            className="project-card-btn"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className="project-github-link"
                                id={style.links}
                                rel="noreferrer"
                                href="https://github.com/suhail3535/Dictionary_application/tree/master"
                                target="_blank">
                                Source Code
                            </a>
                            &nbsp;
                            <FaGithub />
                        </Button>
                        <Button
                            className="project-deployed-link"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className={style.links}
                                rel="noreferrer"
                                href="https://word-search-app.vercel.app/"
                                target="_blank">
                                Live
                            </a>
                            &nbsp;
                            <FaArrowRight />
                        </Button>
                    </Box>
                </Box>
            </div> */}
            {/* <div data-aos-mirror="true"
                data-aos="fade-left"
                data-aos-duration="3000" className="project-card" id={style.major_projectDiv}>
                <Box
                    className={style.major_project_imgDiv}
                 >
                    <Image
                        className="project-skills-card-img"
                        src={car}
                        alt="dictonary"
                    />
                </Box>

                <Box
                    className={style.major_project_detailsDiv}
                    color={colorMode === "light" ? "black" : "white"}
                 >
                    <Heading
                        className="project-title"
                        id={style.major_project_detailsDiv_Heading}
                        size={["sm", "sm", "sm", "lg"]}>
                        AutoHub
                    </Heading>
                    <Heading
                        className="project-description"
                        id={style.major_project_detailsDiv_detail}
                        fontWeight="500"
                        size={["xs", "sm", "sm", "md"]}>
                        Discover your next ride at AutoHub, your ultimate destination for car ads. Browse compare prices, and find the perfect match for your needs and budget today!
                    </Heading>
                    <div
                        className="project-tech-stack"
                        id={style.major_project_detailsDiv_tehcs}>
                        Tech Stack:
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>JavaScript</div>
                        <div>React</div>
                        <div>Json Server</div>

                        <div>Material-UI</div>
                        <div>Chakra-UI</div>
                    </div>
                    <Box
                        className="project-card-btn"
                        id={style.major_project_detailsDi_btnDiv}>
                        <Button
                            className="project-card-btn"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className="project-github-link"
                                id={style.links}
                                rel="noreferrer"
                                href="https://github.com/suhail3535/CarAdvertisementWebApp"
                                target="_blank">
                                Source Code
                            </a>
                            &nbsp;
                            <FaGithub />
                        </Button>
                        <Button
                            className="project-deployed-link"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className={style.links}
                                rel="noreferrer"
                                href="https://car-adds-application.vercel.app/"
                                target="_blank">
                                Live
                            </a>
                            &nbsp;
                            <FaArrowRight />
                        </Button>
                    </Box>
                </Box>
            </div> */}

            {/* <div data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000" className="project-card" id={style.major_projectDiv}>
                <Box
                    className={style.major_project_imgDiv}
                >
                    <Image
                        className="project-skills-card-img"
                        src={dinesh}
                        alt="typescript"
                    />
                </Box>

                <Box
                    className={style.major_project_detailsDiv}
                    color={colorMode === "light" ? "black" : "white"}
                >
                    <Heading
                        className="project-title"
                        id={style.major_project_detailsDiv_Heading}
                        size={["md", "md", "md", "lg"]}>
                        Dinesh Photography
                    </Heading>
                    <Heading
                        className="project-description"
                        id={style.major_project_detailsDiv_detail}
                        fontWeight="500"
                        size={["xs", "sm", "sm", "md"]}>
                        This is a photography website's Landing Page.
                        I was created as a practice project for DS Gahlot's website layout.
                    </Heading>
                    <div
                        className="project-tech-stack"
                        id={style.major_project_detailsDiv_tehcs}>
                        Tech Stack:
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>JavaScript</div>


                        <div>BootStrap</div>
                        <div>Sass</div>

                    </div>
                    <div
                        className="project-card-btn"
                        id={style.major_project_detailsDi_btnDiv}>
                        <Button
                            // id={style.btn_Prj}
                            className="project-card-btn"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className="project-github-link"
                                id={style.links}
                                rel="noreferrer"
                                href="https://github.com/suhail3535/DineshGahlot.com"
                                target="_blank">
                                Source Code
                            </a>
                            &nbsp;
                            <FaGithub id={style.links} />
                        </Button>
                        <Button
                            className="project-deployed-link"
                            size={["xs", "sm", "sm", "sm"]}
                        // id={style.btn_Prj}
                        >
                            <a
                                id={style.links}
                                rel="noreferrer"
                                href="https://dinesh-gahlot-demo.netlify.app/"
                                target="_blank">
                                Live
                            </a>
                            &nbsp;
                            <FaArrowRight />
                        </Button>
                    </div>
                </Box>
            </div> */}
            {/* <div data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000" className="project-card" id={style.major_projectDiv}>
                <Box
                    className={style.major_project_imgDiv}
                >
                    <Image
                        className="project-skills-card-img"
                        src={todoapp}
                        alt="typescript"
                    />
                </Box>

                <Box
                    className={style.major_project_detailsDiv}
                    color={colorMode === "light" ? "black" : "white"}
                >
                    <Heading
                        className="project-title"
                        id={style.major_project_detailsDiv_Heading}
                        size={["md", "md", "md", "lg"]}>
                        TypeScript Crud Application
                    </Heading>
                    <Heading
                        className="project-description"
                        id={style.major_project_detailsDiv_detail}
                        fontWeight="500"
                        size={["xs", "sm", "sm", "md"]}>
                        A TypeScript CRUD application with essential features:
                        adding new student data, retrieving student data,
                        updating student records, and deleting student data.!
                    </Heading>
                    <div
                        className="project-tech-stack"
                        id={style.major_project_detailsDiv_tehcs}>
                        Tech Stack:
                        <div>TypeScript</div>
                        <div>React</div>
                        <div>JavaScript</div>
                        <div>Node Js</div>
                        <div>Express Js</div>
                        <div>MongoDB</div>
                        <div>Chakra-UI</div>
                    </div>
                    <div
                        className="project-card-btn"
                        id={style.major_project_detailsDi_btnDiv}>
                        <Button
                            // id={style.btn_Prj}
                            className="project-card-btn"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className="project-github-link"
                                id={style.links}
                                rel="noreferrer"
                                href="https://github.com/suhail3535/TypeScriptCrudapp"
                                target="_blank">
                                Source Code
                            </a>
                            &nbsp;
                            <FaGithub id={style.links} />
                        </Button>
                        <Button
                            className="project-deployed-link"
                            size={["xs", "sm", "sm", "sm"]}
                        // id={style.btn_Prj}
                        >
                            <a
                                id={style.links}
                                rel="noreferrer"
                                href="https://649a4e10ce5a7628c1de0ffd--starlit-bublanina-a89a76.netlify.app/"
                                target="_blank">
                                Live
                            </a>
                            &nbsp;
                            <FaArrowRight />
                        </Button>
                    </div>
                </Box>
            </div> */}

            <div data-aos-mirror="true"
                data-aos="fade-left"
                data-aos-duration="3000" className="project-card" id={style.major_projectDiv}>
                <Box
                    className={style.major_project_imgDiv}
                >
                    <Image
                        className="project-skills-card-img"
                        src={final}
                        alt="masai"
                    />
                </Box>

                <Box
                    className={style.major_project_detailsDiv}
                    color={colorMode === "light" ? "black" : "white"}
                >
                    <Heading
                        className="project-title"
                        id={style.major_project_detailsDiv_Heading}
                        size={["sm", "sm", "sm", "lg"]}>
                        Login Management System
                    </Heading>
                    <Heading
                        className="project-description"
                        id={style.major_project_detailsDiv_detail}
                        fontWeight="500"
                        size={["xs", "sm", "sm", "md"]}>
                        Masai School's student login management system allows
                        students to access upcoming lectures, assignments, and
                        the daily schedule.
                    </Heading>
                    <div
                        className="project-tech-stack"
                        id={style.major_project_detailsDiv_tehcs}>
                        Tech Stack:
                        <div>React</div>
                        <div>Redux</div>
                        <div>Json Server</div>
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>JavaScript</div>
                        <div>Chakra-UI</div>
                        <div>Material-UI</div>
                    </div>
                    <Box
                        className="project-card-btn"
                        id={style.major_project_detailsDi_btnDiv}>
                        <Button
                            className="project-card-btn"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className="project-github-link"
                                id={style.links}
                                rel="noreferrer"
                                href="https://github.com/suhail3535/MasaiLms"
                                target="_blank">
                                Source Code
                            </a>
                            &nbsp;
                            <FaGithub />
                        </Button>
                        <Button
                            className="project-deployed-link"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className={style.links}
                                rel="noreferrer"
                                href="https://masaiapp-suhail3535.vercel.app/"
                                target="_blank">
                                Live
                            </a>
                            &nbsp;
                            <FaArrowRight />
                        </Button>
                    </Box>
                </Box>
            </div>

            {/* <div data-aos-mirror="true"
                data-aos="fade-left"
                data-aos-duration="3000" className="project-card" id={style.major_projectDiv}>
                <Box
                    className={style.major_project_imgDiv}
                >
                    <Image
                        className="project-skills-card-img"
                        src={triphub}
                        alt="triphub"
                    />
                </Box>

                <Box
                    className={style.major_project_detailsDiv}
                    color={colorMode === "light" ? "black" : "white"}
                >
                    <Heading
                        className="project-title"
                        id={style.major_project_detailsDiv_Heading}
                        size={["sm", "sm", "sm", "lg"]}>
                        TripHub
                    </Heading>
                    <Heading
                        className="project-description"
                        id={style.major_project_detailsDiv_detail}
                        fontWeight="500"
                        size={["xs", "sm", "sm", "md"]}>
                        TripHub is the clone of Makemytrip.com MakeMyTrip is a
                        travel company that provides online travel services.
                    </Heading>
                    <div
                        className="project-tech-stack"
                        id={style.major_project_detailsDiv_tehcs}>
                        Tech Stack:
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>JavaScript</div>
                        <div>React</div>
                        <div>Material-UI</div>
                        <div>Chakra-UI</div>
                    </div>
                    <Box
                        className="project-card-btn"
                        id={style.major_project_detailsDi_btnDiv}>
                        <Button
                            className="project-card-btn"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className="project-github-link"
                                id={style.links}
                                rel="noreferrer"
                                href="https://github.com/suhail3535/agreeable-transport-9100/tree/main/agreeable-transport-9100"
                                target="_blank">
                                Source Code
                            </a>
                            &nbsp;
                            <FaGithub />
                        </Button>
                        <Button
                            className="project-deployed-link"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className={style.links}
                                rel="noreferrer"
                                href="https://elegant-custard-fc08fa.netlify.app/"
                                target="_blank">
                                Live
                            </a>
                            &nbsp;
                            <FaArrowRight />
                        </Button>
                    </Box>
                </Box>
            </div>
            <div data-aos-mirror="true"
                data-aos="fade-right"
                data-aos-duration="3000" className="project-card" id={style.major_projectDiv}>
                <Box
                    className={style.major_project_imgDiv}
                >
                    <Image
                        className="project-skills-card-img"
                        src={toptrip}
                        alt="Toptrip"
                    />
                </Box>

                <Box
                    className={style.major_project_detailsDiv}
                    color={colorMode === "light" ? "black" : "white"}
                >
                    <Heading
                        className="project-title"
                        id={style.major_project_detailsDiv_Heading}
                        size={["md", "md", "md", "lg"]}>
                        TopTrip
                    </Heading>
                    <Heading
                        className="project-description"
                        id={style.major_project_detailsDiv_detail}
                        fontWeight="500"
                        size={["xs", "sm", "sm", "md"]}>
                        Top Trip is the clone of Booking.com, it is a travel
                        company that provides online travel services and hotel
                        booking .
                    </Heading>

                    <div
                        className="project-tech-stack"
                        id={style.major_project_detailsDiv_tehcs}>
                        Tech Stack:
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>BootStrap</div>
                        <div>JavaScript</div>
                    </div>
                    <Box
                        className="project-card-btn"
                        id={style.major_project_detailsDi_btnDiv}>
                        <Button
                            className="project-card-btn"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className="project-github-link"
                                id={style.links}
                                rel="noreferrer"
                                href="https://github.com/suhail3535/glad-airplane-61"
                                target="_blank">
                                Source Code
                            </a>
                            &nbsp;
                            <FaGithub />
                        </Button>
                        <Button
                            className="project-deployed-link"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className={style.links}
                                rel="noreferrer"
                                href="https://top-tripcom.netlify.app/"
                                target="_blank">
                                Live
                            </a>
                            &nbsp;
                            <FaArrowRight />
                        </Button>
                    </Box>
                </Box>
            </div> */}
            {/* ***************minor project********* */}
            {/* <div data-aos-mirror="true"
                data-aos="fade-left"
                data-aos-duration="3000" id={style.seceond_section}>
                <div id={style.card1}>
                    <img src={todonew} alt="todonew" />
                    <div id={style.dropdown}>
                        <Heading
                            id={style.title}
                            size={["md", "md", "md", "lg"]}>
                            Todo Application
                        </Heading>
                        <Heading
                            id={style.discription}
                            fontWeight="500"
                            size={["xs", "sm", "sm", "md"]}>
                            A JavaScript Todo app with essential features:
                            adding todos, retrieving todos, and deleting todos.
                            Streamline your task management effortlessly and
                            efficiently. Simplify your workflow with this
                            user-friendly application..!
                        </Heading>
                        <div
                            className="project-tech-stack"
                            id={style.major_project_detailsDiv_tehcs_part2}>
                            Tech Stack:
                            <div>HTML</div>
                            <div>CSS</div>
                            <div>BootStrap</div>
                            <div>JavaScript</div>
                        </div>
                        <div className="project-card-btn" id={style.source_btn}>
                            <Button
                                className="project-card-btn"
                                size={["xs", "sm", "sm", "sm"]}>
                                <a
                                    className="project-github-link"
                                    id={style.links}
                                    rel="noreferrer"
                                    href="https://github.com/suhail3535/JavaScript_Todo-APP/tree/main/Todo-List-App-with-Javascript-main"
                                    target="_blank">
                                    Source Code
                                </a>
                                &nbsp;
                                <FaGithub id={style.links} />
                            </Button>
                            <Button
                                className="project-deployed-link"
                                size={["xs", "sm", "sm", "sm"]}>
                                <a
                                    id={style.links}
                                    rel="noreferrer"
                                    href="https://stellar-tanuki-bd576d.netlify.app/"
                                    target="_blank">
                                    Live
                                </a>
                                &nbsp;
                                <FaArrowRight />
                            </Button>
                        </div>
                    </div>
                </div>

                <div id={style.card2}>
                    <img src={shop} alt="shopper" />
                    <div id={style.dropdown}>
                        <Heading
                            id={style.title}
                            size={["md", "md", "md", "lg"]}>
                            Shopper Korner
                        </Heading>
                        <Heading
                            id={style.discription}
                            fontWeight="500"
                            size={["xs", "sm", "sm", "md"]}>
                            Shopper Korner is the clone of Gearbest.com it is a
                            E-Commerce website.All the daily use products are
                            available here.!
                        </Heading>
                        <div
                            className="project-tech-stack"
                            id={style.major_project_detailsDiv_tehcs_part2}>
                            Tech Stack:
                            <div>HTML</div>
                            <div>CSS</div>
                            <div>BootStrap</div>
                            <div>JavaScript</div>
                        </div>
                        <div className="project-card-btn" id={style.source_btn}>
                            <Button
                                className="project-card-btn"
                                size={["xs", "sm", "sm", "sm"]}>
                                <a
                                    className="project-github-link"
                                    id={style.links}
                                    rel="noreferrer"
                                    href="https://github.com/suhail3535/Indigo-railway-8753"
                                    target="_blank">
                                    Source Code
                                </a>
                                &nbsp;
                                <FaGithub id={style.links} />
                            </Button>
                            <Button
                                className="project-deployed-link"
                                size={["xs", "sm", "sm", "sm"]}>
                                <a
                                    id={style.links}
                                    rel="noreferrer"
                                    href="https://vermillion-cendol-8a7209.netlify.app/"
                                    target="_blank">
                                    Live
                                </a>
                                &nbsp;
                                <FaArrowRight />
                            </Button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}
