import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import "./Exp.css"
import "../Home/animation.css"
import { Box, Heading, Image, useDisclosure } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Experience = ({ colorMode }) => {
    return (
        <div id="experience" className='background'
            data-aos-mirror="true"
            data-aos="fade-right"
            data-aos-duration="3000"

        >
            <div id={"stars"} />
            <div id={"stars2"} />
            <div id={"stars3"} />
            <Heading
                style={{ marginBottom: "50px" }}
                size={["xl", "xl", "xl", "xl"]}
                textAlign="center"
                fontFamily="Bree Serif, serif"
                color={colorMode === "light" ? "white" : "white"}
            >
                Professional Experience
            </Heading>
            <div className='main_container_div'>
                <Accordion allowToggle className='Accordian'>
                    <AccordionItem>
                        <h4>
                            <AccordionButton id='box' _expanded={{ bg: 'black', color: 'white' }}>
                                <Box as='span' flex='1' textAlign='left'>
                                    <h4>Quintype Services India Pvt Ltd </h4>
                                    <h4>Software Engineer</h4>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h4>
                        <AccordionPanel pb={4}>
                            <div className='card_exp' data-aos-mirror="true" data-aos="fade-right" data-aos-duration="3000">
                                <div className='heading_cont_first'>
                                    <div>
                                        <h2 className='title_pos'>Quintype Technologies</h2>
                                        <h4>Software Engineer (Full-Stack)</h4>
                                    </div>
                                    <div>
                                        <h2 className='title_pos'>Jaipur, Rajasthan, India</h2>
                                        <h4>August 2024 - Present</h4>
                                    </div>
                                </div>
                                <div className='roles_div'>
                                    <ul>
                                        <li>Built scalable and responsive front-end solutions for media clients like Fortune India, ListenFirst Media, Khaleej Times, and Gulf News.</li>
                                        <li>Independently developed a backend solution to automate print integration for Khaleej Times, converting JSON to XML and handling secure FTP uploads.</li>
                                        <li>Integrated CircleCI for CI/CD automation, ensuring consistent deployment and testing workflows.</li>
                                        <li>Collaborated with cross-functional teams, including U.S.-based stakeholders, ensuring project goals and timelines were met.</li>
                                        <li>Focused on optimizing performance, accessibility, and cross-browser compatibility, while debugging critical production issues.</li>
                                    </ul>
                                </div>
                            </div>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h4>
                            <AccordionButton id='box' _expanded={{ bg: 'black', color: 'white' }}>
                                <Box as='span' flex='1' textAlign='left'>
                                    <h4>Rajasthan Police Headquarters, Jaipur (contract-based)</h4>
                                    <h4>Full-Stack Developer (MERN)</h4>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h4>
                        <AccordionPanel pb={4}>
                            <div className='card_exp' data-aos-mirror="true" data-aos="fade-right" data-aos-duration="3000">
                                <div className='heading_cont_first'>
                                    <div>
                                        <h2 className='title_pos'>Rajasthan Police Headquarters, Jaipur (contract-based)</h2>
                                        <h4>Full-Stack Developer (MERN)</h4>
                                    </div>
                                    <div>
                                        <h2 className='title_pos'>Jaipur, Rajasthan, India</h2>
                                        <h4>December 2023 - July 2024</h4>
                                    </div>
                                </div>
                                <div className='roles_div'>
                                    <ul>
                                        <li>Developed and maintained a responsive web application using React.js, focused on delivering an intuitive and accessible user experience.</li>
                                        <li>Ensured cross-device and cross-browser compatibility, adhering to web standards and performance best practices.</li>
                                        <li>Debugged and optimized application performance by identifying and resolving issues to improve speed, reliability, and efficiency.</li>
                                    </ul>
                                </div>
                            </div>
                        </AccordionPanel>
                    </AccordionItem>


                    <AccordionItem style={{ marginTop: "10px" }}>
                        <h2>
                            <AccordionButton _expanded={{ bg: 'black', color: 'white' }}>
                                <Box as='span' flex='1' textAlign='left'>
                                    <h4>Vastu Housing Finance Corporation Pvt Ltd Nashik Maharashtra</h4>
                                    <h4>React Js Developer</h4>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
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
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem style={{ marginTop: "10px" }}>
                        <h4>
                            <AccordionButton _expanded={{ bg: 'black', color: 'white' }}>
                                <Box as='span' flex='1' textAlign='left'>
                                    {/* Rajasthan police headquarters Jaipur(contract-based) */}
                                    <h4>Full Stack Web Development(Trainee)</h4>
                                    <h4>Masai School Bengaluru, India (Remote)</h4>

                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h4>
                        <AccordionPanel pb={4}>
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
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}

export default Experience