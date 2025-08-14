import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaSchool, FaChevronUp, FaChevronDown, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import "../Home/animation.css";
import "./expnew.css"

const ExperienceTimeline = () => {
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
      location: "",
      date: "",
      isCurrent: true,
      achievements: [
        {
          title: "Software Development",
          description: "Developed and maintained software applications using modern technologies"
        },
        {
          title: "Code Quality",
          description: "Ensured high code quality through testing and code reviews"
        },
        {
          title: "Team Collaboration",
          description: "Worked closely with cross-functional teams to deliver quality products"
        }
      ]
    },
    {
      id: 2,
      title: "Full-Stack Developer (MERN)",
      company: "Rajasthan Police Headquarters, Jaipur",
      location: "Contract-based",
      date: "",
      isCurrent: false,
      achievements: [
        {
          title: "MERN Stack Development",
          description: "Built full-stack applications using MongoDB, Express.js, React.js, and Node.js"
        },
        {
          title: "Database Management",
          description: "Designed and implemented database schemas and API endpoints"
        },
        {
          title: "Frontend Development",
          description: "Created responsive user interfaces with React.js and modern CSS"
        }
      ]
    },
    {
      id: 3,
      title: "React Js Developer",
      company: "Vastu Housing Finance Corporation Pvt Ltd",
      location: "Nashik Maharashtra",
      date: "",
      isCurrent: false,
      achievements: [
        {
          title: "React Development",
          description: "Developed React.js applications with modern hooks and functional components"
        },
        {
          title: "State Management",
          description: "Implemented state management solutions using Redux or Context API"
        },
        {
          title: "Component Architecture",
          description: "Built reusable components and maintained component libraries"
        }
      ]
    },
    {
      id: 4,
      title: "Full Stack Web Development (Trainee)",
      company: "Masai School",
      location: "Bengaluru, India (Remote)",
      date: "",
      isCurrent: false,
      achievements: [
        {
          title: "Full Stack Learning",
          description: "Comprehensive training in full-stack web development technologies"
        },
        {
          title: "Project Development",
          description: "Built multiple projects applying theoretical knowledge to practical scenarios"
        },
        {
          title: "Problem Solving",
          description: "Enhanced problem-solving skills through coding challenges and projects"
        }
      ]
    }
  ];

  return (
         <div style={{ 
       overflow: "hidden",
       background: "radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)",
     
     }}>
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
                     <VerticalTimelineElement
             key={experience.id}
             className="vertical-timeline-element--work"
             date={experience.date}
             iconStyle={{ background: "#fff", color: "#1a1a1a" }}
             icon={<FaBriefcase />}
             contentStyle={{ 
               background: "transparent", 
               border: "1px solid rgba(255,255,255,0.3)",
               borderRadius: "8px",
               boxShadow: "none"
             }}
             contentArrowStyle={{ borderRight: "7px solid rgba(255,255,255,0.3)" }}
           >
            <div 
              style={{ cursor: "pointer" }}
              onClick={() => toggleExpand(index)}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                                 <div style={{ flex: 1 }}>
                   <h3 className="vertical-timeline-element-title" style={{ fontWeight: "bold", marginBottom: "8px", fontSize: "16px", color: "#fff" }}>
                     {experience.company}
                   </h3>
                   <h4 className="vertical-timeline-element-subtitle" style={{ color: "#ccc", margin: 0, fontSize: "14px" }}>
                     {experience.title}
                   </h4>
                   {experience.location && (
                     <div style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "5px" }}>
                       <FaMapMarkerAlt style={{ color: "#999", fontSize: "12px" }} />
                       <span style={{ color: "#999", fontSize: "12px" }}>
                         {experience.location}
                       </span>
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
                        fontSize: "12px",
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

                                            {/* Expandable Achievements Section */}
                {(expandedIndex === index || (isClosing && expandedIndex === null)) && (
                                     <div style={{ 
                     marginTop: "20px", 
                     paddingTop: "15px", 
                     borderTop: "1px solid rgba(255,255,255,0.2)",
                     animation: isClosing ? "slideUp 0.8s ease-in-out" : "slideDown 0.8s ease-in-out"
                   }}>
                   <div style={{ 
                     display: "flex", 
                     alignItems: "center", 
                     gap: "8px", 
                     marginBottom: "15px",
                     color: "#fff",
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
                             fontSize: "14px",
                             marginBottom: "4px"
                           }}>
                             {achievement.title}
                           </div>
                           <div style={{ 
                             color: "#ccc", 
                             fontSize: "13px", 
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

export default ExperienceTimeline;
