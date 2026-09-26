import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight, FiExternalLink } from "react-icons/fi";
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
import interviewprep from "../images/interviewprep.jpg";
import jaipurtour from "../images/jaipurtour.jpg";

/**
 * Client work — shipped in a team, no public source.
 *
 * TODO: add an `outcome` to each of these — one sentence with a number in it.
 * A description tells a client what the project was; an outcome tells them
 * what they would get. Examples of the shape:
 *   outcome: "Cut dashboard load time from 4.1s to 1.3s for 400+ daily users."
 *   outcome: "Automated a print handoff that was taking 2 hours a day manually."
 * Only claim numbers you can stand behind in a call.
 */
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
    title: "Interview Prep",
    imgSrc: interviewprep,
    description:
      "A MERN app for technical interview revision: a topic-wise question bank covering HTML/CSS, JavaScript, React, Next.js, Node, Express, SQL and MongoDB, graded from beginner to advanced. Email and Google sign-in.",
    techStack: [ "AI Assistance","React", "Node.js", "Express", "MongoDB", "Google OAuth"],
    // NOTE: the screenshot has your email prefilled in the login form, which
    // is publicly visible here. Retake it signed out (empty form) or with a
    // placeholder address if you would rather not have it scraped.
    // NOTE: this repo is currently PRIVATE — api.github.com returns 404 to
    // anyone not signed in as you, so visitors clicking Source get GitHub's
    // 404 page. Make it public (Settings > General > Change visibility)
    // or remove this link.
    githubLink: "https://github.com/suhail3535/mern-interview-preparation",
    liveLink: "https://mern-interview-preparation.vercel.app/login",
  },
  {
    title: "Jaipur Auto Tour",
    imgSrc: jaipurtour,
    description:
      "A booking-focused website for a Jaipur sightseeing tour business: transparent ₹850 day-tour pricing, the 12 places covered, packages, fleet, reviews and FAQ, with one-tap booking and WhatsApp enquiries.",
    techStack: ["React", "Vite", "JavaScript", "CSS", "Responsive Design"],
    // NOTE: like Interview Prep, this repo is currently PRIVATE, so the
    // Source button leads visitors to GitHub's 404 page until it is public.
    githubLink: "https://github.com/suhail3535/travel-website",
    // The git-main preview URL sits behind Vercel login; this is the public
    // production domain for the same project.
    liveLink: "https://jaipur-auto-tour.vercel.app/",
  },
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
  }
];

/**
 * How many technologies to emphasise in the stack row.
 *
 * A fixed count breaks on short lists: Brainwave only lists three, so
 * highlighting three highlighted everything and the hierarchy disappeared.
 * The rule is therefore relative — never more than half the list, and never
 * more than three, so the emphasis is always a minority.
 *
 *   3 items -> 1    5 items -> 2    8 items -> 3
 *   4 items -> 2    6 items -> 3
 */
function keyTechCount(total) {
  return Math.min(3, Math.floor(total / 2)) || 1;
}

function ProjectCard({ project, featured, reveal = true }) {
  const keyCount = keyTechCount(project.techStack.length);

  return (
    <article
      className={`project${reveal ? " reveal" : ""}${featured ? " project--featured" : ""}`}
    >
      {/* Rendered only when a screenshot exists, so a card without one is
          a clean text card rather than an empty grey box. */}
      {project.imgSrc && (
        <div className="project__shot">
          <img src={project.imgSrc} alt={`${project.title} screenshot`} loading="lazy" />
        </div>
      )}

      <div className="project__body">
        <div className="project__head">
          <h3>{project.title}</h3>
          <div className="project__meta">
            {project.role && <span className="project__role">{project.role}</span>}
            {project.team && <span className="project__team">{project.team}</span>}
          </div>
        </div>

        <p className="project__desc">{project.description}</p>

        {/* Renders only when an outcome exists, so cards without one look
            intentional rather than unfinished. */}
        {project.outcome && (
          <p className="project__outcome">
            <span className="project__outcomeLabel">Outcome</span>
            {project.outcome}
          </p>
        )}

        {/* The leading entries of techStack are the headline technologies and
            get the accent treatment; the rest stay muted. Order each
            techStack array most-important-first. */}
        <div className="project__stack">
          <span className="project__stackLabel">Stack</span>
          <div className="chips">
            {project.techStack.map((tech, i) => (
              <span
                className={`chip chip--tech${i < keyCount ? " chip--key" : ""}`}
                key={tech}
              >
                {tech}
              </span>
            ))}
          </div>
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

const AUTOPLAY_MS = 2000;

/**
 * Native scroll-snap carousel: swipe/trackpad scrolling works for free, and
 * the arrows and dots just drive scrollLeft. The reveal animation sits on the
 * wrapper rather than each card, because cards scrolled out of the track are
 * clipped and would never intersect the viewport-rooted observer.
 */
function ProjectCarousel({ projects }) {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.children);
    const left = track.scrollLeft;
    let nearest = 0;
    cards.forEach((card, i) => {
      if (
        Math.abs(card.offsetLeft - left) <
        Math.abs(cards[nearest].offsetLeft - left)
      ) {
        nearest = i;
      }
    });
    setActive(nearest);
    setAtStart(left <= 2);
    setAtEnd(left + track.clientWidth >= track.scrollWidth - 2);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const goTo = (index) => {
    const track = trackRef.current;
    const card = track?.children[index];
    if (card) track.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  };

  // One step is one card, clamped so the last press lands on the end.
  const step = (dir) => goTo(Math.max(0, Math.min(projects.length - 1, active + dir)));

  // Autoplay: advance every AUTOPLAY_MS, wrapping to the first card once the
  // end is visible. Paused while the pointer or keyboard focus is inside, so
  // nobody has a card slide away mid-read. Re-arms after every slide change,
  // so a manual click also restarts the full interval.
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const id = setTimeout(() => goTo(atEnd ? 0 : active + 1), AUTOPLAY_MS);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, atEnd, paused]);

  return (
    <div
      className="carousel reveal"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="carousel__viewport">
        <div className="carousel__track" ref={trackRef} onScroll={update}>
          {projects.map((project) => (
            <div className="carousel__slide" key={project.title}>
              <ProjectCard project={project} reveal={false} />
            </div>
          ))}
        </div>

        <button
          type="button"
          className="carousel__arrow carousel__arrow--prev"
          onClick={() => step(-1)}
          disabled={atStart}
          aria-label="Previous project"
        >
          <FiChevronLeft />
        </button>
        <button
          type="button"
          className="carousel__arrow carousel__arrow--next"
          onClick={() => step(1)}
          disabled={atEnd}
          aria-label="Next project"
        >
          <FiChevronRight />
        </button>
      </div>

      <div className="carousel__dots">
        {projects.map((project, i) => (
          <button
            type="button"
            key={project.title}
            className={`carousel__dot${i === active ? " is-active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to ${project.title}`}
            aria-current={i === active}
          />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-num">02.</span>
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

        <ProjectCarousel projects={PERSONAL} />
      </div>
    </section>
  );
}
