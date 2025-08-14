import { Box, Heading, Link, Toast, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import style from "./Contact.module.css";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Home/animation.css"
AOS.init();

export default function Contact({ colorMode }) {
    const toast = useToast();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const SendMail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_x9ycsef",
                "template_z8igh3g",
                e.target,
                "E2IYLHqQiR80FBqk5"
            )
            .then((res) => {
                console.log(res);
                toast({
                    title: "Email has been send.",
                    description: "",
                    status: "success",
                    position: "top",
                    color: "black",
                    duration: 500,

                    isClosable: true,
                });
            })
            .catch((err) => {
                console.log(err,"error");
            });
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    };

    return (
        <Box
            id="contact"
            data-aos-mirror="true"
            data-aos="fade-up"
            data-aos-duration="3000"
            className="background"

        >

            <div id={"stars"} />
            <div id={"stars2"} />
            <div id={"stars3"} />
            <Heading
                size={["2xl", "2xl", "2xl", "3xl"]}
                textAlign="center"
                fontFamily="Bree Serif, serif"
                color={colorMode === "light" ? "white" : "white"}
                mb="30px">
              <span className={style.name}>Contact Me </span>  
            </Heading>
            <Box
                id={style.contact_mainDiv}
                backgroundColor={colorMode === "light" ? "black" : ""}
            >
                <Box id={style.contact_leftDiv}>
                    <Box>
                        <form action="" onSubmit={SendMail}>
                            <Heading
                                fontFamily="Bree Serif, serif"
                                id={style.contact_head}>
                                YOUR NAME (required)
                            </Heading>
                            <input
                                className={style.input}
                                placeholder="Enter your Name"
                                name="name"
                                value={name}
                                required
                                onChange={(e) => setName(e.target.value)}
                            />

                            <Heading
                                fontFamily="Bree Serif, serif"
                                id={style.contact_head}>
                                YOUR EMAIL (required)
                            </Heading>
                            <input
                                className={style.input}
                                placeholder="Enter your Email"
                                name="email"
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <Heading
                                fontFamily="Bree Serif, serif"
                                id={style.contact_head}>
                                SUBJECT
                            </Heading>
                            <input
                                className={style.input}
                                placeholder="Enter your Subject"
                                name="subject"
                                value={subject}
                                required
                                onChange={(e) => setSubject(e.target.value)}
                            />

                            <Heading
                                fontFamily="Bree Serif, serif"
                                id={style.contact_head}>
                                YOUR MESSAGE
                            </Heading>
                            <input
                                className={style.input1}
                                placeholder="Enter you Message"
                                name="message"
                                value={message}
                                required
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <br />
                            <button id={style.btn}>Send</button>
                            {/* <button id={style.btn}> */}
                        </form>
                    </Box>
                </Box>
                <Box id={style.contact_rightDiv}>
                    <Box>
                        <Heading
                            fontFamily="Bree Serif, serif"
                            id={style.contact_head1}>
                            E-Mail
                        </Heading>
                        <div id="contact-email" className={style.contact}>
                            khansohail015@gmail.com
                        </div>
                        <div className={style.line}></div>
                        <Heading
                            fontFamily="Bree Serif, serif"
                            id={style.contact_head1}>
                            Phone
                        </Heading>
                        <p
                            id="contact-phone"
                            fontFamily="Bree Serif, serif"
                            className={style.contact}>
                            9598125005
                        </p>
                        <div className={style.line}></div>
                        <Heading
                            fontFamily="Bree Serif, serif"
                            id={style.contact_head1}>
                            On The Web
                        </Heading>
                        <Box className={style.linkedin}>
                            <Box id="contact-linkedin">
                                <Link
                                    style={{
                                        color: "white",
                                        textDecoration: "none",
                                    }}
                                    href="https://www.linkedin.com/feed/"
                                    isExternal>
                                    LinkedIn
                                </Link>
                            </Box>
                            <span style={{color:"white",margin:"0px 10px"}}>||</span>
                            <Box id="contact-github">
                                <Link
                                    style={{
                                        color: "white",
                                        textDecoration: "none",
                                    }}
                                    href="https://github.com/suhail3535"
                                    isExternal>
                                    Github
                                </Link>
                            </Box>
                        </Box>
                        <div className={style.line}></div>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
