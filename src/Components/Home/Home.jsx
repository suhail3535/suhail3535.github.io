import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiDownload } from "react-icons/hi";
import { site, resumeDownload } from "../../data/site";
import style from "./Home.module.css";

export default function Home() {
  return (
    <section id="home" className={style.hero}>
      <div className="container">
        <div className="reveal">
          {site.available && (
            <span className={style.badge}>
              <span className={style.pulse} />
              Open to opportunities
            </span>
          )}

          <p className={style.eyebrow}>Hi, my name is</p>
          <h1 className={style.name}>{site.name}.</h1>
          <h2 className={style.title}>I build things for the web.</h2>

          <p className={style.blurb}>
            {site.role} with 4+ years of experience building scalable web
            applications in React, Next.js and Node — currently a Senior Software
            Engineer at Quintype, and going deeper into AI and LLMs.
          </p>

          <div className={style.current}>
            <span className={style.currentLabel}>Currently building</span>
            <p>
              <strong>ListenFirst</strong> — an enterprise media analytics
              platform. I work across the React front end and Ruby on Rails
              services: data-heavy dashboards, API-driven visualizations and
              production reliability, in sync with a U.S.-based team.
            </p>
          </div>

          <div className={style.actions}>
            <a href="#projects" className="btn btn-primary">
              View my work
            </a>
            <a
              href={resumeDownload}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Download resume <HiDownload />
            </a>

            <div className={style.socials}>
              <a
                href={site.github}
                className="icon-btn"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={site.linkedin}
                className="icon-btn"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a href={`mailto:${site.email}`} className="icon-btn" aria-label="Email">
                <HiOutlineMail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
