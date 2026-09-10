import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import "./Carousel.css";

import listenfirst from "../images/listenfirst.png";
import gulfnews from "../images/gulfnews.png";
import fortuneindia from "../images/fortuneindia.png";
import khaleejtimes from "../images/khaleejtimes.png";
import zakat from "../images/zakat.png";
import brain1 from "../images/brain1.png";
import fashion from "../images/fashion.png";
import rctproject from "../images/rctproject.png";
import zym from "../images/zim.png";
import final from "../images/final.png";

/** Client work — shipped in a team, no public source. */
const FEATURED = [
  {
    title: "ListenFirst Media",
    imgSrc: listenfirst,
    description:
      "An enterprise media analytics platform delivering data-driven insights. Contributed to dashboards, API-driven visualizations, and production support in close collaboration with a U.S.-based team.",
    techStack: [
      "React",
      "Redux",
      "D3.js",
      "Ruby on Rails",
      "PostgreSQL",
      "TypeScript",
      "AWS",
      "Data Viz",
    ],
    liveLink: "https://listenfirstmedia.com",
    role: "Senior Software Developer",
    team: "Team Project",
  },
  {
    title: "Gulf News",
    imgSrc: gulfnews,
    description:
      "A custom front end for a high-traffic news portal. Focused on performance, accessibility and cross-platform responsiveness, working with QA and backend teams to resolve production issues.",
    techStack: ["React", "JavaScript", "Node.js", "Docker", "Accessibility"],
    liveLink: "https://gulfnews.com",
    role: "Software Developer",
    team: "Team Project",
  },
  {
    title: "Fortune India",
    imgSrc: fortuneindia,
    description:
      "A responsive front end for a leading business magazine — a high-performance reading experience built alongside backend developers and UI/UX designers working in Figma.",
    techStack: ["React", "Node.js", "JavaScript", "Docker", "Responsive Design"],
    liveLink: "https://fortuneindia.com",
    role: "Software Developer",
    team: "Team Project",
  },
  {
    title: "Khaleej Times",
    imgSrc: khaleejtimes,
    description:
      "Backend automation for a leading Middle East publication: JSON-to-XML conversion, secure FTP transfer of daily print editions, and CI/CD integration with CircleCI.",
    techStack: ["Node.js", "Express", "FTP", "XML", "CircleCI", "Elasticsearch"],
    liveLink: "https://khaleejtimes.com",
    role: "Software Developer",
    team: "Solo project",
  },
];

/** Personal and freelance builds, source available. */
const PERSONAL = [
  {
    title: "Zakat Foundation (Freelance)",
    imgSrc: zakat,
    description:
      "A responsive website UI built for a freelance client using React.js and Ant Design, focused on a clean and accessible user experience.",
    techStack: ["React", "Ant Design", "Chakra UI", "CSS"],
    githubLink: "https://github.com/suhail3535/zakat-foundation-frontend-freelance-project",
    liveLink: "https://6603caeba4541d678c0ca82a--marvelous-churros-cf40d8.netlify.app/",
  },
  {
    title: "Brainwave",
    imgSrc: brain1,
    description:
      "A modern UI/UX landing experience built with React and Tailwind CSS — sleek design, smooth scroll animations and parallax.",
    techStack: ["React", "Tailwind CSS", "JavaScript"],
    githubLink: "https://github.com/suhail3535/Brainwave_AI.git",
    liveLink: "https://brainwave-ai-phi.vercel.app/",
  },
  {
    title: "Fashion Frenzy",
    imgSrc: fashion,
    description:
      "A full-stack e-commerce store modelled on Anthropologie, with a product catalogue, cart and checkout flow.",
    techStack: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    githubLink: "https://github.com/suhail3535/alive-run-138",
    liveLink: "https://faishonfrenzyecom.vercel.app/",
  },
  {
    title: "AeroWear",
    imgSrc: rctproject,
    description:
      "A clothing store front end covering casual wear and accessories, with filtering, sorting and cart state in Redux.",
    techStack: ["React", "Redux", "JSON Server", "Chakra UI"],
    githubLink: "https://github.com/suhail3535/thinkable-slope-4107/tree/main/thinkable-slope",
    liveLink: "https://aerowear-suhail3535s-projects.vercel.app/",
  },
  {
    title: "Fitness World",
    imgSrc: zym,
    description:
      "A wellness app with tailored workout plans, nutrition tips and community features.",
    techStack: ["React", "Material UI", "Chakra UI", "JavaScript"],
    githubLink: "https://github.com/suhail3535/FitnessWorldwebApp",
    liveLink: "https://fitness-worldweb-app.vercel.app/",
  },
  {
    title: "Login Management System",
    imgSrc: final,
    description:
      "A student login system for Masai School, surfacing upcoming lectures, assignments and the daily schedule.",
    techStack: ["React", "Redux", "JSON Server", "Material UI"],
    githubLink: "https://github.com/suhail3535/MasaiLms",
    liveLink: "https://masaiapp-suhail3535.vercel.app/",
  },
];

function ProjectCard({ project, featured }) {
  return (
    <article className={`project reveal${featured ? " project--featured" : ""}`}>
      <div className="project__shot">
        <img src={project.imgSrc} alt={`${project.title} screenshot`} loading="lazy" />
      </div>

      <div className="project__body">
        <div className="project__head">
          <h3>{project.title}</h3>
          <div className="project__meta">
            {project.role && <span className="project__role">{project.role}</span>}
            {project.team && <span className="project__team">{project.team}</span>}
          </div>
        </div>

        <p className="project__desc">{project.description}</p>

        <div className="chips project__tech">
          {project.techStack.map((tech) => (
            <span className="chip" key={tech}>
              {tech}
            </span>
          ))}
        </div>

        <div className="project__links">
          {project.githubLink && (
            <a
              href={project.githubLink}
              className="btn btn-sm"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> Source
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              className="btn btn-sm"
              target="_blank"
              rel="noreferrer"
            >
              <FiExternalLink /> Live site
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-num">04.</span>
          <h2>Selected work</h2>
          <span className="section-rule" />
        </div>

        <p className="projects__lede">
          Platforms I've shipped as part of a team at Quintype and ListenFirst Media.
        </p>

        <div className="projects projects--featured">
          {FEATURED.map((project) => (
            <ProjectCard key={project.title} project={project} featured />
          ))}
        </div>

        <h3 className="projects__subhead">Personal Projects</h3>

        <div className="projects projects--grid">
          {PERSONAL.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
