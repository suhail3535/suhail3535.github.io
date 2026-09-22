import React, { useEffect, useState } from "react";
import { HiMenu, HiX, HiSun, HiMoon } from "react-icons/hi";
import { resumeDownload } from "../../data/site";
import useTheme from "../../hooks/useTheme";
import "./navbar.css";

// Services leads, because that is what a prospective client is scanning for.
// Order must match the order the sections appear in App.js, or the
// scroll-spy highlight jumps backwards as you scroll.
const LINKS = [
  { id: "services", label: "Services" },
  { id: "projects", label: "Work" },
  { id: "process", label: "Process" },
  { id: "experience", label: "Experience" },
  { id: "awards", label: "Awards" },
  { id: "skills", label: "Stack" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight whichever section is currently under the header.
  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-72px 0px -55% 0px" }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Close the mobile menu once the desktop nav is visible again.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 861px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className={`navbar${stuck ? " navbar--stuck" : ""}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" aria-label="Suhail Khan — home">
          <span className="navbar__dot" />
          Suhail Khan
        </a>

        <nav className="navbar__links" aria-label="Sections">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? "is-active" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            type="button"
            className="navbar__theme"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
            }
            title={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            {theme === "dark" ? <HiSun /> : <HiMoon />}
          </button>

          <button
            type="button"
            className="navbar__toggle"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        className={`navbar__mobile${open ? " is-open" : ""}`}
        aria-label="Sections"
      >
        <div className="container">
          {LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            href={resumeDownload}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            Download resume
          </a>
        </div>
      </nav>
    </header>
  );
}
