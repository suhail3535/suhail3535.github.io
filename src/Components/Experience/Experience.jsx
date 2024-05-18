import React from 'react'
import "./Exp.css"
import { Box, Heading, Image, useDisclosure } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Experience = ({ colorMode }) => {
    return (
        <div id="experience" className='exp_container'
            data-aos-mirror="true"
            data-aos="fade-right"
            data-aos-duration="3000" >

            <Heading
                size={["xl", "xl", "xl", "xl"]}
                textAlign="center"
                fontFamily="Bree Serif, serif"
                color={colorMode === "light" ? "black" : "#BFACE0"}
            >
                Professional Experience
            </Heading>
            <div className='main_container_div'>

                <div className='card_exp' data-aos-mirror="true" data-aos="fade-right"
                    data-aos-duration="3000" >
                    <div className='heading_cont_first'>
                        <div>
                            <h2 className='title_pos'>Rajasthan police headquarters Jaipur(contract-based)
                            </h2>
                            <h4>Full-Stack Developer(MERN)</h4>
                        </div>
                        <div>
                            <h2 className='title_pos'>Jaipur,Rajasthan,India
                            </h2>
                            <h4> December 2023 -Present</h4>
                        </div>
                    </div>
                    <div className='roles_div'>
                        <ul>
                            <li>Developed and maintained a modern and responsive website for Rajasthan Police using React.js, Bootstrap 5, Sass, Tailwind CSS, and React Icons, focusing on delivering an intuitive user experience.</li>
                            <li>Ensured that the website is user-friendly, accessible, and optimized for performance across various devices and browsers, adhering to web standards and best practices.</li>
                            <li>Facilitated collaboration among team members by setting up branches, pull requests, and managing code reviews on GitLab, promoting efficient code development and review processes.</li>
                            <li>Optimized user experience through responsive design, accessibility features, and usability testing, ensuring seamless interaction and accessibility for all users.</li>
                            <li>Debugged and optimized application performance, identifying and resolving issues to enhance the website's speed, reliability, and overall performance.</li>
                        </ul>

                    </div>
                </div>
                <div className='card_exp' data-aos="fade-left"
                    data-aos-duration="3000" data-aos-mirror="true"  >

                    <div className='heading_cont_first'>
                        <div>
                            <h2 className='title_pos1'>Vastu Housing Finance Corporation pvt ltd </h2>
                            <h4>React Js Developer</h4>
                        </div>
                        <div>
                            <h2 className='title_pos1'>Nashik,Maharashtra,India
                            </h2>
                            <h4>July 2023-November 2023</h4>
                        </div>
                    </div>
                    <div className='roles_div'>
                        <ul>
                            <li>Developed and deployed the administrative interface for the Loan Origination System (LOS) using React, Redux, and Ant Design, enhancing efficiency in loan processing.</li>
                            <li>Integrated user management functionalities, including roles and permissions, to ensure secure access and maintain data integrity.</li>
                            <li>Translated Figma designs into responsive web pages using React, Ant Design, Bootstrap, and SASS, ensuring a seamless user experience across devices.</li>
                            <li>Contributed to the full software development lifecycle, collaborating with cross-functional teams and honing problem-solving and critical thinking skills.</li>
                            <li>Established efficient version control workflows, including branch management, pull requests, and code reviews on GitLab, fostering team collaboration and code quality assurance.</li>
                            <li>Demonstrated proficiency in writing clean, efficient code adhering to industry best practices, resulting in maintainable and scalable software solutions.</li>
                        </ul>


                    </div>

                </div>
                <div className='card_exp' data-aos="fade-right"
                    data-aos-duration="3000" data-aos-mirror="true">
                    <div className='heading_cont_first'>
                        <div>
                            <h2 className='title_pos'>Masai School (Trainee)</h2>
                            <h4>Full Stack Web Development</h4>
                        </div>
                        <div>
                            <h2 className='title_pos'>Bengaluru, Karnataka, India (Remote)</h2>
                            <h4>Jul 2022 - Jun 2023</h4>
                        </div>
                    </div>
                    <div className='roles_div'>
                        <ul>
                            <li>Engaged in an intensive learning phase, focusing on Full Stack Web Development with the MERN stack (MongoDB, Express.js, React.js, Node.js).</li>
                            <li>Developed multiple projects, applying theoretical knowledge to practical scenarios, and enhancing proficiency in HTML, CSS, JavaScript, React, Node.js, and MongoDB.</li>
                            <li>Solved numerous Data Structures and Algorithms (DSA) problems, strengthening problem-solving skills and understanding of core computer science principles.</li>
                            <li>Collaborated with peers in an agile environment, participating in code reviews, pair programming, and daily stand-ups to improve teamwork and communication skills.</li>
                            <li>Implemented responsive and user-friendly designs, ensuring web applications function seamlessly across various devices and screen sizes.</li>
                            <li>Committed to continuous learning and staying updated with the latest trends and best practices in web development.</li>
                        </ul>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Experience