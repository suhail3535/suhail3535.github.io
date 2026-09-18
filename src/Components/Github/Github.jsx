import React from "react";
import GitHubCalendar from "react-github-calendar";
import { FaGithub } from "react-icons/fa";
import { site } from "../../data/site";
import useTheme from "../../hooks/useTheme";
import style from "./Github.module.css";

/* The three README-stats images (streak stats, stats card, top languages) were
   dropped: they are third-party screenshots in clashing colours that often fail
   to load, and the calendar already tells the same story. */

// Both palettes are supplied so the calendar follows the site theme.
const calendarTheme = {
  light: ["#e6e9ee", "#a7ede1", "#5eead4", "#14b8a6", "#0d9488"],
  dark: ["#14161c", "#0f3d38", "#12695f", "#14b8a6", "#5eead4"],
};

export default function Github() {
  const { theme } = useTheme();

  return (
    <section id="github" className="section">
      <div className="container">
        <div className="section-head">
          {/* Unnumbered: this is developer-audience detail, kept as a
              supporting signal rather than a headline section. */}
          <h2>Code activity</h2>
          <span className="section-rule" />
        </div>

        <div className={`card ${style.panel} reveal`}>
          <div className={style.calendar}>
            <GitHubCalendar
              username={site.githubUser}
              colorScheme={theme}
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
