import React from "react";
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
import listenfirst from "../images/listenfirst.png";
import gulfnews from "../images/gulfnews.png";
import fortuneindia from "../images/fortuneindia.png";
import khaleejtimes from "../images/khaleejtimes.png";

import rctproject from "../images/rctproject.png";

import final from "../images/final.png";

function CaroselMain() {
  const className1 = 'background';
  const className2 = 'main_slider_app';

  const items = [
    {
      id: 100,
      title: "ListenFirst Media",
      imgSrc: listenfirst,
      alt: "ListenFirst Media Analytics",
      description:
        "An enterprise-level media analytics platform delivering data-driven insights. Contributed to the development of dashboards, API-driven visualizations, and production support in close collaboration with a U.S.-based team.",
      techStack: ["React", "Ruby", "Rails", "AWS", "Capistrano", "PostgreSQL", "TypeScript", "Data Visualization"],

      githubLink: "",
      liveLink: "https://listenfirstmedia.com",
      animation: "fade-up",
      team: "8 developers",
    },
    {
      id: 101,
      title: "Gulf News",
      description:
        "Developed a custom front-end solution for a high-traffic news portal. Focused on performance optimization, accessibility, and cross-platform responsiveness while collaborating with QA and backend teams to resolve production-level issues.",
      techStack: ["React", "JavaScript", "Node.js", "Docker", "HTML", "CSS", "Accessibility"],

      imgSrc: gulfnews,
      alt: "Gulf News Portal",

      githubLink: "",
      liveLink: "https://gulfnews.com",
      animation: "fade-up",
      team: "6 developers",
    },
    {
      id: 102,
      title: "Fortune India",
      description:
        "Built a responsive, custom front-end solution for a leading business magazine. Delivered a high-performance, user-friendly interface while collaborating with backend developers and UI/UX designers (Figma).",
      techStack: ["React", "Node.js", "JavaScript", "Docker", "CSS", "Responsive Design"],

      imgSrc: fortuneindia,
      alt: "Fortune India Magazine",
      githubLink: "",
      liveLink: "https://fortuneindia.com",
      animation: "fade-left",
      team: "8 developers",
    },
    {
      id: 103,
      title: "Khaleej Times",
      description:
        "Backend automation project for a leading Middle East news publication. Implemented JSON-to-XML conversion, secure FTP transfers for daily print editions, and CI/CD integration with CircleCI.",
      techStack: ["Node.js", "Express", "FTP", "XML", "CircleCI", "Elasticsearch", "Docker"],

      imgSrc: khaleejtimes,
      alt: "Khaleej Times Print Integration",

      githubLink: "",
      liveLink: "https://khaleejtimes.com",
      animation: "fade-right",
      team: "Independent (solo project)",
    },
     {
      title: "Raj Police Theft Vehicle Module (Demo)",
      description:
        "Introducing CCTNS Raj Police Portal's 'E-FIR Vehicle Theft Module': an online platform enabling civilians to report vehicle thefts seamlessly, designed to improve public safety.",
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
        "Developed a responsive and user-friendly website UI using React.js and component libraries such as Ant Design, focusing on seamless user experience.",
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
    <div className="project_card" key={index} >
      <div className="card_img">
        <img src={item.imgSrc} alt={item.title} />
      </div>
      <div className="details">
        <h2 className="title_project">{item.title}</h2>
        <h3 className="description">{item.description}</h3>
      </div>
      <div className="project-tech-stack">
        <strong>Tech Stack:</strong>
        {item.techStack.map((tech, i) => (
          <div className="tech" key={i}>{tech}</div>
        ))}
      </div>
      <Box className="project-card-btn">
        {item?.githubLink && (

          <Button size={["xs", "sm", "sm", "sm"]}>
            <a href={item.githubLink} target="_blank" rel="noreferrer">
              Source Code
            </a>
            &nbsp;
            <FaGithub />
          </Button>
        )}


        <Button className="live" size={["xs", "sm", "sm", "sm"]}>
          <a href={item.liveLink} target="_blank" rel="noreferrer">
            Live
          </a>
          &nbsp;
          <IoEyeSharp  className="live" style={{ marginTop: "5px" }} />
        </Button>
      </Box>
    </div>
  ));

  return (
    <div id="projects" className={`${className1} ${className2}`}>
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
