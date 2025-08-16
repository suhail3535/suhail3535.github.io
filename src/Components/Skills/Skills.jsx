
import { Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import style from "./Skills.module.css";
import "../Home/animation.css";
import AOS from "aos";
import tailwind from "../images/tailwindlogo.png";
import tool from "../images/toolkit.jpg";
import express from "../images/expressjs.png";
import antd from "../images/antd.png";
import node from "../images/node.jpg";
import chakra from "../images/chakra.png";
import cyclic from "../images/cyc.png";
import jira from "../images/jira.png";
import gitlab from "../images/gitlab.png";
import prime from "../images/pr.png";
import githab from "../images/git.png";
import vercel from "../images/vercellogo.png";
import python from "../images/python.png";
import ruby from "../images/ruby.jpg";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init();

export default function Skills ({ colorMode }) {
    const frontendSkills = [
        {
            id: "1",
            name: "HTML",
            logo: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
        },
        {
            id: "2",
            name: "CSS",
            logo: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg",
        },
        {
            id: "3",
            name: "JavaScript",
            logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
        },
        {
            id: "4",
            name: "React js",
            logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
        },
        {
            id: "5",
            name: "Next js",
            logo: "https://www.datocms-assets.com/98835/1684410508-image-7.png",
        },
    
        {
            id: "7",
            name: "BootStrap",
            logo: "https://cdn.dribbble.com/users/595/screenshots/14417863/bootstrap-new-logo_4x.png",
        },
        {
            id: "13",
            name: "Typescript",
            logo: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
        },
        {
            id: "8",
            name: "Redux",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNe3NYVlI0lgrZLMto86XvqTSkxKEs6XRF9JmjFA-XSH5j0QtWclwj-5NwP7z4CbYlNMQ&usqp=CAU",
        },
        {
            id: "9",
            name: "Redux Toolkit",
            logo: tool
        },
    ];

    const backendSkills = [
        {
            id: "10",
            name: "MongoDB",
            logo: "https://newrelic.com/sites/default/files/styles/800w/public/2021-10/mongo_logo.jpg?itok=Z1PabBZB",
        },
        {
            id: "11",
            name: "NodeJS",
            logo: node,
        },
        {
            id: "12",
            name: "Express JS",
            logo: express,
        },
           {
            id: "110",
            name: "Python",
            logo: python,
        },
        {
            id: "120",
            name: "Ruby on Rails",
            logo: ruby,
        },
        {
            id: "1",
            name: "Postman",
            logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        },
        {
            id: "2",
            name: "Github",
            logo: githab,
        },
        {
            id: "3",
            name: "Gitlab",
            logo: gitlab,
        },

        {
            id: "4",
            name: "Jira Softwere",
            logo: jira
        },
        {
            id: "5",
            name: "vsCode",
            logo: "https://lh5.googleusercontent.com/5ES-Ty5oZV246Psq5ABbOGxOn3MN5piHduRfeQRlXNj3aAW32v7K9rHYaSqdvOjFFfQ=w2400",
        },
        {
            id: "4",
            name: "Netlify",
            logo: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
        },
        {
            id: "5",
            name: "Vercel",
            logo: vercel,
        }
    ];

    const uiLibraries = [

        {
            id: "17",
            name: "Material UI",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlqqONFG6eDHvqXzF2HtmKQ3qDErVWjLTsSUpIiJGCtA&s",
        },
            {
            id: "6",
            name: "Tailwind CSS",
            logo: tailwind,
        },
        {
            id: "14",
            name: "Chakra UI",
            logo: chakra,
        },
        {
            id: "15",
            name: "Aceternity UI",
            logo: "https://ui.aceternity.com/banner.png",
        },
        {
            id: "16",
            name: "Ant Design UI",
            logo: antd,
        },
        {
            id: "16",
            name: "Prime React",
            logo: prime,
        },

    ];



    const renderSkills = (skills) => {
        return skills.map((skill) => (
            <div key={skill.id} className={style.skill_in_div}>
                <div className="skills-card-img">
                    <img className={style.logo} src={skill.logo} alt={skill.name} />
                </div>
                <p
                    className="skills-card-name"
                    id={style.skillH3}
                    style={{
                        color: colorMode === "light" ? "white" : "white",
                    }}
                >
                    {skill.name}
                </p>
            </div>
        ));
    };

    return (
        <div id="skills" className={"background"}>
            <div id={"stars"} />
            <div id={"stars2"} />
            <div id={"stars3"} />

            <div id="Skills" style={{ height: "20px" }}></div>
            <div className="skills-card-name" id={style.skill}>
                <Heading
                    size={["xl", "xl", "xl", "xl"]}
                    fontFamily="Bree Serif, serif"
                    style={{
                        color: colorMode === "light" ? "white" : "white",
                    }}
                    textAlign="center"
                    color="#243D25"
                >
                  <span className={style.name}> Frontend Skills</span>  
                </Heading>
                <div
                    className="skills-card"
                    id={style.skillDiv}
                    data-aos-mirror="true"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    {renderSkills(frontendSkills)}
                </div>
            </div>


            <div className="skills-card-name" id={style.skill}>
                <Heading
                    size={["xl", "xl", "xl", "xl"]}
                    fontFamily="Bree Serif, serif"
                    style={{
                        color: colorMode === "light" ? "white" : "white",
                    }}
                    textAlign="center"
                    color="#243D25"
                >
                 <span className={style.name}>Backend Skills And Tools</span>  
                    
                </Heading>
                <div
                    className="skills-card"
                    id={style.skillDiv}
                    data-aos-mirror="true"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    {renderSkills(backendSkills)}
                </div>
            </div>


            <div className="skills-card-name" id={style.skill}>
                <Heading
                    size={["xl", "xl", "xl", "xl"]}
                    fontFamily="Bree Serif, serif"
                    style={{
                        color: colorMode === "light" ? "white" : "white",
                    }}
                    textAlign="center"
                    color="#243D25"
                >
                   
                  <span className={style.name}>UI Libraries</span>  
                </Heading>
                <div
                    className="skills-card"
                    id={style.skillDiv}
                    data-aos-mirror="true"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    {renderSkills(uiLibraries)}
                </div>
            </div>


        </div>
    );
}
