import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { site, whatsapp } from "../../data/site";
import style from "./Contact.module.css";

const SERVICE_ID = "service_x9ycsef";
const TEMPLATE_ID = "template_z8igh3g";
const PUBLIC_KEY = "E2IYLHqQiR80FBqk5";

const EMPTY = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState(null); // "sending" | "sent" | "error"

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const sendMail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        setStatus("sent");
        setForm(EMPTY);
      })
      // The previous version only logged failures, so a failed send looked
      // identical to doing nothing at all.
      .catch(() => setStatus("error"));
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-num">06.</span>
          <h2>Get in touch</h2>
          <span className="section-rule" />
        </div>

        <div className={`${style.grid} reveal`}>
          <form className={style.form} onSubmit={sendMail}>
            <div className={style.field}>
              <label htmlFor="c-name">Your name</label>
              <input
                id="c-name"
                name="name"
                value={form.name}
                onChange={update("name")}
                placeholder="Jane Doe"
                required
              />
            </div>

            <div className={style.field}>
              <label htmlFor="c-email">Your email</label>
              <input
                id="c-email"
                name="email"
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="jane@company.com"
                required
              />
            </div>

            <div className={style.field}>
              <label htmlFor="c-subject">Subject</label>
              <input
                id="c-subject"
                name="subject"
                value={form.subject}
                onChange={update("subject")}
                placeholder="What's this about?"
                required
              />
            </div>

            <div className={style.field}>
              <label htmlFor="c-message">Message</label>
              {/* This was a single-line <input>, so long messages scrolled sideways. */}
              <textarea
                id="c-message"
                name="message"
                rows={5}
                value={form.message}
                onChange={update("message")}
                placeholder="Tell me a bit about the role or project…"
                required
              />
            </div>

            <div className={style.submitRow}>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>

              {status === "sent" && (
                <p className={style.ok} role="status">
                  Thanks — your message is on its way.
                </p>
              )}
              {status === "error" && (
                <p className={style.err} role="alert">
                  Something went wrong. Email me directly at {site.email}.
                </p>
              )}
            </div>
          </form>

          <aside className={style.aside}>
            <ul className={style.details}>
              <li>
                <HiOutlineMail aria-hidden="true" />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <HiOutlinePhone aria-hidden="true" />
                <a href={`tel:+${site.phoneRaw}`}>{site.phone}</a>
              </li>
              <li>
                <HiOutlineLocationMarker aria-hidden="true" />
                <span>{site.location}</span>
              </li>
            </ul>

            <div className={style.socials}>
              <a
                href={site.github}
                className="icon-btn"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={site.linkedin}
                className="icon-btn"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href={whatsapp}
                className="icon-btn"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
