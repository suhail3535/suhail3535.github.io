import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { whatsapp } from "../../data/site";
import style from "./Float.module.css";

// The old version wrapped this link in a container whose onClick scrolled the
// page, so tapping WhatsApp also jumped you to the top or bottom of the site.
export default function WhatsApp() {
  return (
    <a
      href={whatsapp}
      className={`${style.float} ${style.whatsapp} ${style.shown}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}
