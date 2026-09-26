import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { site, whatsapp } from "../../data/site";
import style from "./Float.module.css";

// The floating social stack, top to bottom: Instagram, WhatsApp, LinkedIn,
// GitHub.
// Back to top (BacktoTop.jsx) sits beneath these.
//
// The old version wrapped this link in a container whose onClick scrolled the
// page, so tapping WhatsApp also jumped you to the top or bottom of the site.
export default function WhatsApp() {
  return (
    <>
      <a
        href={site.instagram}
        className={`${style.float} ${style.instagram} ${style.shown}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
      <a
        href={whatsapp}
        className={`${style.float} ${style.whatsapp} ${style.shown}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
      <a
        href={site.linkedin}
        className={`${style.float} ${style.linkedin} ${style.shown}`}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn />
      </a>
      <a
        href={site.github}
        className={`${style.float} ${style.github} ${style.shown}`}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
    </>
  );
}
