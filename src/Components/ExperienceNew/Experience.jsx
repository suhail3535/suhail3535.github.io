import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaChevronDown, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

import { CiCalendarDate } from "react-icons/ci";
import "../Home/animation.css";
import "./expnew.css"

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null); // Start with all cards closed
  const [isClosing, setIsClosing] = useState(false);

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      // Closing animation
      setIsClosing(true);
      setTimeout(() => {
        setExpandedIndex(null);
        setIsClosing(false);
      }, 800); // Match the animation duration
    } else {
      // Opening animation
      setExpandedIndex(index);
      setIsClosing(false);
    }
  };


  const experienceData = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Quintype Services India Pvt Ltd",
      location: "Jaipur, Rajasthan",
      date: "",
      isCurrent: true,
      achievements: [
        {
          title: "Software Development",
          description: "Contributed to the development of a media analytics platform using React and Ruby on Rails, implementing new features and resolving production-level bugs to enhance user experience and functionality."
        },
        {
          title: "Code Quality",
          description: "Maintained code quality and scalability while working within a large-scale React-based codebase."
        },
        {
          title: "Team Collaboration",
          description: "Collaborated with a U.S.-based cross-functional team, working in sync with U.S. time zones to meet client expectations."
        }
      ]

    },
    {
      id: 2,
      title: "Full-Stack Developer (MERN)",
      company: "Rajasthan Police Headquarters, Jaipur",
      location: "Jaipur, India",
      date: "Dec 2023 - July 2024",
      isCurrent: false,
      achievements: [
        {
          title: "Frontend Development",
          description: "Developed and maintained a responsive web application for Rajasthan Police using React.js, ensuring an intuitive and accessible user experience across devices and browsers."
        },
        {
          title: "Performance Optimization",
          description: "Debugged and optimized application performance by identifying and resolving critical issues, improving speed, reliability, and efficiency."
        },
        {
          title: "Best Practices",
          description: "Ensured cross-device and cross-browser compatibility while adhering to web standards and performance best practices."
        }
      ]
    },
    {
      id: 3,
      title: "React.js Developer",
      company: "Vastu Housing Finance Corporation Pvt. Ltd.",
      location: "Nashik, India",
      date: "July 2023 - Dec 2023",
      isCurrent: false,
      achievements: [
        {
          title: "Loan Origination System (LOS)",
          description: "Developed and implemented the admin interface of the Loan Origination System (LOS) to streamline loan process management."
        },
        {
          title: "UI Development",
          description: "Converted Figma designs into responsive web pages using React.js and Ant Design for consistent UI/UX."
        },
        {
          title: "User Management",
          description: "Integrated secure role-based access control to ensure proper user management and data integrity."
        }
      ]
    },
    {
      id: 4,
      title: "Full-Stack Web Development Trainee",
      company: "Masai School",
      location: "Bengaluru, India (Remote)",
      date: "July 2022 - June 2023",
      isCurrent: false,
      achievements: [
        {
          title: "Full-Stack Training",
          description: "Gained proficiency in HTML, CSS, JavaScript, React, Node.js, and MongoDB through hands-on learning."
        },
        {
          title: "Responsive Web Applications",
          description: "Built responsive and user-friendly web applications applying theoretical knowledge to practical projects."
        },
        {
          title: "Team Collaboration",
          description: "Strengthened problem-solving and collaboration skills by working on team-based projects and coding challenges."
        }
      ]
    }

  ];

  return (
    <div id="experience" style={{
      overflow: "hidden",
      background: "radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)",

    }}
    >
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      {/* Heading */}
      <h1 className="name">
        Professional Experience
      </h1>

      {/* Timeline */}
      <VerticalTimeline lineColor="rgba(255,255,255,0.3)">
        {experienceData.map((experience, index) => (
          console.log(experience.date),
          <VerticalTimelineElement
            key={experience.id}
            className="vertical-timeline-element--work"
            date={experience.date}
            iconStyle={{ background: "#fa2d2da1", color: "#1a1a1a" }}
            icon={<FaBriefcase style={{ color: "white" }} />}
            contentStyle={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: "8px",
              boxShadow: "none"
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(86, 212, 8, 1)" }}
          >
            <div
              style={{ cursor: "pointer" }}
              onClick={() => toggleExpand(index)}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ flex: 1 }}>
                  <h3 className="vertical-timeline-element-title">
                    {experience.company}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle" style={{ color: "#ccc", margin: 0, fontSize: "14px" }}>
                    {experience.title}
                  </h4>
                  {experience.location && (
                    <div style={{ display: "flex", alignItems: "center", gap: "15px", marginTop: "5px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <FaMapMarkerAlt style={{ color: "#eb0c0cff", fontSize: "12px" }} />
                        <span style={{ color: "#999999ff", fontSize: "12px" }}>
                          {experience.location}
                        </span>
                      </div>

                      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <CiCalendarDate style={{ color: "#6cdb38ff", fontSize: "16px" }} />
                        <span style={{ color: "#999999ff", fontSize: "12px" }}>
                          {experience.date || "Present"}
                        </span>
                      </div>
                    </div>
                  )}


                  {experience.isCurrent && (
                    <span
                      style={{
                        display: "inline-block",
                        backgroundColor: "#d4f8d4",
                        color: "#28a745",
                        padding: "3px 8px",
                        borderRadius: "5px",
                        fontSize: "14px",
                        fontWeight: "bold",
                        marginTop: "5px",
                      }}
                    >
                      Current Role
                    </span>
                  )}
                </div>
                <div style={{ marginLeft: "10px" }}>
                  <div style={{
                    transform: expandedIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.8s ease-in-out"
                  }}>
                    <FaChevronDown style={{ color: "#fff", fontSize: "16px" }} />
                  </div>
                </div>
              </div>


              {(expandedIndex === index || (isClosing && expandedIndex === null)) && (
                <div style={{
                  marginTop: "20px",
                  paddingTop: "15px",
                  borderTop: "1px solid rgba(255,255,255,0.2)",
                  animation: isClosing ? "slideUp 0.8s ease-in-out" : "slideDown 0.8s ease-in-out"
                }}>
                  <div className="key" style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "15px",

                    fontWeight: "600",
                    fontSize: "14px"
                  }}>
                    <FaBriefcase style={{ color: "#fff" }} />
                    Key Achievements & Responsibilities
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        marginBottom: "12px",
                        padding: "8px 0"
                      }}>
                        <FaCheckCircle style={{
                          color: "#fff",
                          fontSize: "16px",
                          marginTop: "2px",
                          flexShrink: 0
                        }} />
                        <div>
                          <div style={{
                            fontWeight: "500",
                            color: "#fff",
                            fontSize: "16px",
                            marginBottom: "4px"
                          }}>
                            {achievement.title}
                          </div>
                          <div style={{
                            color: "#ccc",
                            fontSize: "15px",
                            lineHeight: "1.4"
                          }}>
                            {achievement.description}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      <style jsx>{`
          @keyframes slideDown {
            0% {
              opacity: 0;
              transform: translateY(-20px);
              max-height: 0;
            }
            50% {
              opacity: 0.5;
              transform: translateY(-10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
              max-height: 500px;
            }
          }
          
          @keyframes slideUp {
            0% {
              opacity: 1;
              transform: translateY(0);
              max-height: 500px;
            }
            50% {
              opacity: 0.5;
              transform: translateY(-10px);
            }
            100% {
              opacity: 0;
              transform: translateY(-20px);
              max-height: 0;
            }
          }
          
          .vertical-timeline-element-content {
            transition: all 0.8s ease-in-out;
          }
          
          .vertical-timeline-element {
            transition: margin-bottom 0.8s ease-in-out;
          }
        `}</style>
    </div>
  );
};

export default Experience;
