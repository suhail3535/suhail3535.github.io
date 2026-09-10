import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { site, whatsapp } from "../../data/site";
import style from "./Footer.module.css";

/* The Instagram and Facebook icons were removed: both pointed at
   instagram.com / facebook.com rather than any profile. */

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={`container ${style.inner}`}>
        <p className={style.copy}>
          © {new Date().getFullYear()} {site.name}.
        </p>

        <div className={style.links}>
          <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href={`mailto:${site.email}`} aria-label="Email">
            <HiOutlineMail />
          </a>
        </div>
      </div>
    </footer>
  );
}
