import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiOutlineCalendar } from "react-icons/hi";
import { site, bookingLink } from "../../data/site";
import style from "./Home.module.css";

/**
 * Written for a prospective client, not a recruiter. The headline names who
 * the work is for, the proof names companies they can verify, and the primary
 * action is booking a call rather than downloading a CV.
 */
export default function Home() {
  return (
    <section id="home" className={style.hero}>
      <div className="container">
        <div className="reveal">
          {site.available && (
            <span className={style.badge}>
              <span className={style.pulse} />
              Available for freelance projects
            </span>
          )}

          <p className={style.eyebrow}>Freelance full-stack developer · Jaipur, India</p>
          <h1 className={style.name}>{site.name}.</h1>
          <h2 className={style.title}>
            I build fast, reliable web apps for media and finance teams.
          </h2>

          <p className={style.blurb}>
            4+ years shipping production software — currently a Senior Software
            Engineer at Quintype, where I build the platforms behind{" "}
            <strong>Gulf News</strong>, <strong>Fortune India</strong> and{" "}
            <strong>Khaleej Times</strong>. I take on freelance work in React,
            Next.js and Node.
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
            <a href={bookingLink} className="btn btn-primary">
              Book a call <HiOutlineCalendar />
            </a>
            <a href="#projects" className="btn">
              See my work
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
