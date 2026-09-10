import React from "react";
import { HiDownload } from "react-icons/hi";
import profilephoto from "../images/AvatarImage.webp";
import { site, resumeDownload } from "../../data/site";
import style from "./About.module.css";

const HIGHLIGHTS = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Ruby on Rails",
  "PostgreSQL",
  "Accessibility",
  "Performance Optimization",
];

const FACTS = [
  { label: "Based in", value: site.location },
  { label: "Experience", value: "4+ years" },
  { label: "Current role", value: "Senior Software Engineer" },
  { label: "Focus", value: "Full stack — React, Next.js, Node & Rails" },
  { label: "Currently exploring", value: "AI & LLMs" },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-num">01.</span>
          <h2>About me</h2>
          <span className="section-rule" />
        </div>

        <div className={`${style.grid} reveal`}>
          <div className={style.photoWrap}>
            <img className={style.photo} src={profilephoto} alt="Suhail Khan" />
          </div>

          <div>
            <p className={style.lead}>
              Innovative Full Stack Developer with 4+ years of experience building
              scalable web applications using the MERN stack along with PostgreSQL,
              TypeScript, Next.js and Elasticsearch.
            </p>
            <p className={style.body}>
              I work on core services, third-party API integrations and the front
              ends that sit on top of them — most recently media platforms serving
              publishers like Gulf News, Fortune India and Khaleej Times. I care
              about the parts users feel but never see: page performance,
              accessibility, and code that the next developer can actually read.
              Right now I'm spending my own time on AI and LLMs, and on building
              with Next.js.
            </p>

            <div className={`chips ${style.chipRow}`}>
              {HIGHLIGHTS.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>

            <dl className={style.facts}>
              {FACTS.map((fact) => (
                <div className={style.fact} key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>

            <a
              href={resumeDownload}
              target="_blank"
              rel="noreferrer"
              className={`btn btn-primary ${style.resume}`}
            >
              Download resume <HiDownload />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
