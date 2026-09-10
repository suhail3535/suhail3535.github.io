import React, { useEffect, useState } from "react";
import { HiDownload } from "react-icons/hi";
import { HiMenu, HiX } from "react-icons/hi";
import { resumeDownload } from "../../data/site";
import "./navbar.css";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
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
          <a
            href={resumeDownload}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-sm navbar__resume"
          >
            Resume <HiDownload />
          </a>
        </nav>

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
