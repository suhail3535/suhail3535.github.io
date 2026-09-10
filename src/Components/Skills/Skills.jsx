import React from "react";
import style from "./Skills.module.css";

import tailwind from "../images/tailwindlogo.png";
import tool from "../images/toolkit.jpg";
import express from "../images/expressjs.png";
import antd from "../images/antd.png";
import node from "../images/node.jpg";
import chakra from "../images/chakra.png";
import jira from "../images/jira.png";
import gitlab from "../images/gitlab.png";
import prime from "../images/pr.png";
import githab from "../images/git.png";
import vercel from "../images/vercellogo.png";
import python from "../images/python.png";
import ruby from "../images/ruby.jpg";

const GROUPS = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", logo: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" },
      { name: "CSS", logo: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg" },
      { name: "JavaScript", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
      { name: "TypeScript", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png" },
      { name: "React.js", logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" },
      { name: "Next.js", logo: "https://www.datocms-assets.com/98835/1684410508-image-7.png" },
      { name: "Redux", logo: tool },
      { name: "D3.js", logo: "https://www.vectorlogo.zone/logos/d3js/d3js-icon.svg" },
      { name: "Tailwind CSS", logo: tailwind },
    ],
  },
  {
    title: "Backend & Data",
    items: [
      { name: "Node.js", logo: node },
      { name: "Express", logo: express },
      { name: "Ruby on Rails", logo: ruby },
      { name: "Python", logo: python },
      { name: "MongoDB", logo: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" },
      { name: "PostgreSQL", logo: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" },
      { name: "Elasticsearch", logo: "https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg" },
      { name: "REST APIs", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "Git", logo: githab },
      { name: "GitLab", logo: gitlab },
      { name: "Docker", logo: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg" },
      { name: "Vercel", logo: vercel },
      { name: "Netlify", logo: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" },
      { name: "Jira", logo: jira },
      {
        name: "VS Code",
        logo: "https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg",
      },
      {
        name: "New Relic",
        logo: "https://www.vectorlogo.zone/logos/newrelic/newrelic-icon.svg",
      },
    ],
  },
  {
    title: "UI Libraries",
    items: [
      { name: "Material UI", logo: "https://www.vectorlogo.zone/logos/mui/mui-icon.svg" },
      { name: "Chakra UI", logo: chakra },
      { name: "Ant Design", logo: antd },
      { name: "PrimeReact", logo: prime },
    ],
  },
];

/** Hide the icon rather than showing a broken-image glyph if a remote logo 404s. */
const hideBrokenLogo = (event) => {
  event.currentTarget.style.visibility = "hidden";
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-num">02.</span>
          <h2>What I work with</h2>
          <span className="section-rule" />
        </div>

        <div className={style.groups}>
          {GROUPS.map((group) => (
            <div className={`card ${style.group} reveal`} key={group.title}>
              <h3 className={style.groupTitle}>{group.title}</h3>
              <ul className={style.tiles}>
                {group.items.map((item) => (
                  <li className={style.tile} key={item.name}>
                    <img
                      className={style.logo}
                      src={item.logo}
                      alt=""
                      loading="lazy"
                      onError={hideBrokenLogo}
                    />
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
