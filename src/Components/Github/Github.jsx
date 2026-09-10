import React from "react";
import GitHubCalendar from "react-github-calendar";
import { FaGithub } from "react-icons/fa";
import { site } from "../../data/site";
import style from "./Github.module.css";

/* The three README-stats images (streak stats, stats card, top languages) were
   dropped: they are third-party screenshots in clashing colours that often fail
   to load, and the calendar already tells the same story. */

const calendarTheme = {
  dark: ["#14161c", "#0f3d38", "#12695f", "#14b8a6", "#5eead4"],
};

export default function Github() {
  return (
    <section id="github" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-num">05.</span>
          <h2>Contribution activity</h2>
          <span className="section-rule" />
        </div>

        <div className={`card ${style.panel} reveal`}>
          <div className={style.calendar}>
            <GitHubCalendar
              username={site.githubUser}
              colorScheme="dark"
              theme={calendarTheme}
              blockSize={12}
              blockMargin={4}
              fontSize={13}
            />
          </div>

          <a href={site.github} className="btn btn-sm" target="_blank" rel="noreferrer">
            <FaGithub /> @{site.githubUser}
          </a>
        </div>
      </div>
    </section>
  );
}
