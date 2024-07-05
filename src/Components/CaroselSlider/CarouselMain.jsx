import React, { useState } from "react";
import Carousel from "./Carousel";
import "./Carousel.css";
import fashion from "../images/fashion.png";
import { Box, Button } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import zakat from "../images/zakat.png";
import zym from "../images/zim.png";
import brain1 from "../images/brain1.png";
import "../Home/animation.css"
import cctns from "../images/cctns.png";

import rctproject from "../images/rctproject.png";

import final from "../images/final.png";

function CaroselMain({ colorMode }) {
  const borderStyle =
    colorMode === "light" ? "1px solid gray" : "1px dotted rgb(212, 152, 152)";
  const items = [
    {
      title: "Brainwave - Modern UI/UX website",
      description:
        "Brainwave - Modern UI/UX website, developed using React.js and Tailwind CSS, exemplifies modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard.",
      techStack: [
        "React",
        "tailwindcss",
        "scroll-lock",
        "JavaScript",
        "react-just-parallax",
      ],
      githubLink: "https://github.com/suhail3535/Brainwave_AI.git",
      liveLink: "https://brainwave-ai-phi.vercel.app/",
      imgSrc: brain1,
    },
    {
      title: "Fashion Frenzy",
      description:
        "Fashion Frenzy is an ECommerce Website & is a clone of Anthropologie. With a vast collection of fashion and clothing products, we offer a seamless shopping experience.",
      techStack: [
        "React",
        "Redux",
        "JavaScript",
        "Node Js",
        "Express Js",
        "MongoDB",
        "Chakra-UI",
      ],
      githubLink: "https://github.com/suhail3535/alive-run-138",
      liveLink: "https://faishonfrenzyecom.vercel.app/",
      imgSrc: fashion,
    },
    {
      title: "Raj Police Theft Vehicle Module (Demo)",
      description:
        "Introducing CCTNS Raj Police Portal's 'E-FIR Vehicle Theft Module': an online platform enabling civilians to report vehicle thefts seamlessly. This user-friendly UI is under development, designed to improve public safety.",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "React-toastify",
        "Ant-Design",
        "Chakra-UI",
      ],
      githubLink:
        "https://github.com/suhail3535/Rajpolice_vehicle_theft_portal_CCTNS_module-UI-Demo",
      liveLink: "https://rajasthan-police-theftvehicle-module.netlify.app/",
      imgSrc: cctns,
    },
    {
      title: "Freelance Frontend Developer",
      description:
        "Developed a responsive and user-friendly website UI using React.js and component libraries. Collaborated with the client to deliver a high-quality product, focusing on seamless navigation and an intuitive user experience.",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "React-toastify",
        "Ant-Design",
        "Chakra-UI",
      ],
      githubLink:
        "https://github.com/suhail3535/zakat-foundation-frontend-freelance-project",
      liveLink:
        "https://6603caeba4541d678c0ca82a--marvelous-churros-cf40d8.netlify.app/",
      imgSrc: zakat,
    },
    {
      title: "AeroWear",
      description:
        "Aerowear is known for its trendy and affordable clothing, with a focus on casual wear such as t-shirts, hoodies, and jeans. The brand also offers a range of accessories such as bags.",
      techStack: [
        "React",
        "Redux",
        "Json Server",
        "HTML",
        "CSS",
        "JavaScript",
        "Chakra-UI",
      ],
      githubLink:
        "https://github.com/suhail3535/thinkable-slope-4107/tree/main/thinkable-slope",
      liveLink: "https://aerowear-suhail3535s-projects.vercel.app/",
      imgSrc: rctproject,
    },
    {
      title: "Fitness World",
      description:
        "Fitness World: Your ultimate destination for wellness. Explore tailored workout plans, nutrition tips, and community support. Achieve your fitness goals today!",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Material-UI",
        "Chakra-UI",
      ],
      githubLink: "https://github.com/suhail3535/FitnessWorldwebApp",
      liveLink: "https://fitness-worldweb-app.vercel.app/",
      imgSrc: zym,
    },
    {
      title: "Login Management System",
      description:
        "Masai School's student login management system allows students to access upcoming lectures, assignments, and the daily schedule.",
      techStack: [
        "React",
        "Redux",
        "Json Server",
        "JavaScript",
        "Chakra-UI",
        "Material-UI",
      ],
      githubLink: "https://github.com/suhail3535/MasaiLms",
      liveLink: "https://masaiapp-suhail3535.vercel.app/",
      imgSrc: final,
    },
  ];

  const renderItems = items.map((item, index) => (
    <div className="project_card" key={index} style={{ border: borderStyle }}>
      <div className="card_img">
        <img src={item.imgSrc} alt={item.title} />
      </div>
      <div className="details">
        <h2 className="title_project">{item.title}</h2>
        <h3>{item.description}</h3>
      </div>
      <div className="project-tech-stack">
        <strong>Tech Stack:</strong>
        {item.techStack.map((tech, i) => (
          <div key={i}>{tech}</div>
        ))}
      </div>
      <Box className="project-card-btn">
        <Button size={["xs", "sm", "sm", "sm"]}>
          <a href={item.githubLink} target="_blank" rel="noreferrer">
            Source Code
          </a>
          &nbsp;
          <FaGithub />
        </Button>
        <Button size={["xs", "sm", "sm", "sm"]}>
          <a href={item.liveLink} target="_blank" rel="noreferrer">
            Live
          </a>
          &nbsp;
          <IoEyeSharp style={{ marginTop: "5px" }} />
        </Button>
      </Box>
    </div>
  ));

  return (
    <div id="main_slider_app" className="background">
      <div id={"stars"} />
      <div id={"stars2"} />
      <div id={"stars3"} />
      <h1 className="heading">Projects</h1>
      <div className="carousel-container">
        <Carousel items={renderItems} />
      </div>
    </div>
  );
}

export default CaroselMain;
