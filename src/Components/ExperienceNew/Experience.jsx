import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./expnew.css";

const EXPERIENCE = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Quintype Services India Pvt Ltd",
    location: "Jaipur, Rajasthan",
    date: "Aug 2024 — Present",
    isCurrent: true,
    achievements: [
      "Contributed to the development of a media analytics platform using React and Ruby on Rails, implementing new features and resolving production-level bugs to enhance user experience and functionality.",
      "Maintained code quality and scalability while working within a large-scale React-based codebase.",
      "Collaborated with a U.S.-based cross-functional team, working in sync with U.S. time zones to meet client expectations.",
    ],
  },
  {
    id: 2,
    title: "Full-Stack Developer (MERN)",
    company: "Rajasthan Police Headquarters",
    location: "Jaipur, India",
    date: "Dec 2023 — Jul 2024",
    achievements: [
      "Developed and maintained a responsive web application for Rajasthan Police using React.js, ensuring an intuitive and accessible user experience across devices and browsers.",
      "Debugged and optimized application performance by identifying and resolving critical issues, improving speed, reliability, and efficiency.",
      "Ensured cross-device and cross-browser compatibility while adhering to web standards and performance best practices.",
    ],
  },
  {
    id: 3,
    title: "React.js Developer",
    company: "Vastu Housing Finance Corporation Pvt. Ltd.",
    location: "Nashik, India",
    date: "Jul 2023 — Dec 2023",
    achievements: [
      "Developed and implemented the admin interface of the Loan Origination System (LOS) to streamline loan process management.",
      "Converted Figma designs into responsive web pages using React.js and Ant Design for consistent UI/UX.",
      "Integrated secure role-based access control to ensure proper user management and data integrity.",
    ],
  },
  {
    id: 4,
    title: "Full-Stack Web Development Trainee",
    company: "Masai School",
    location: "Bengaluru, India (Remote)",
    date: "Jul 2022 — Jun 2023",
    achievements: [
      "Gained proficiency in HTML, CSS, JavaScript, React, Node.js, and MongoDB through hands-on learning.",
      "Built responsive and user-friendly web applications, applying theoretical knowledge to practical projects.",
      "Strengthened problem-solving and collaboration skills through team-based projects and coding challenges.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-num">04.</span>
          <h2>Work Experience</h2>
          <span className="section-rule" />
        </div>

        <ol className="timeline">
          {EXPERIENCE.map((job) => (
            <li className="timeline__item reveal" key={job.id}>
              <span
                className={`timeline__marker${job.isCurrent ? " is-current" : ""}`}
                aria-hidden="true"
              />

              <div className="timeline__meta">
                <span className="timeline__date">{job.date}</span>
                {job.isCurrent && <span className="timeline__badge">Current</span>}
              </div>

              <h3 className="timeline__role">
                {job.title} <span className="timeline__at">@ {job.company}</span>
              </h3>

              <p className="timeline__location">
                <FaMapMarkerAlt aria-hidden="true" /> {job.location}
              </p>

              <ul className="timeline__points">
                {job.achievements.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
