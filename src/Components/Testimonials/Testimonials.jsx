import React from "react";
import style from "./Testimonials.module.css";

/**
 * ─────────────────────────────────────────────────────────────────────
 *  ADD YOUR REAL TESTIMONIALS HERE.
 *
 *  This array is deliberately empty, and the section renders nothing
 *  while it stays empty — so the site never shows invented praise.
 *  Do not fill it with placeholder quotes: a client who recognises a
 *  fake testimonial stops trusting everything else on the page, and
 *  made-up endorsements attributed to real people are worse than none.
 *
 *  Two real ones are enough. Ask:
 *    - the Zakat Foundation client you freelanced for
 *    - your lead at Quintype, Rajasthan Police or Vastu
 *
 *  Ask them for one specific sentence, not general praise. "He cut our
 *  page load in half" beats "great developer to work with".
 *
 *  Shape:
 *    { quote: "...", name: "...", title: "Role, Company" }
 * ─────────────────────────────────────────────────────────────────────
 */
const TESTIMONIALS = [];

export default function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="section-head">
          <h2>What people say</h2>
          <span className="section-rule" />
        </div>

        <div className={style.grid}>
          {TESTIMONIALS.map((item) => (
            <figure className={`card ${style.quote} reveal`} key={item.name}>
              <blockquote>{item.quote}</blockquote>
              <figcaption>
                <span className={style.name}>{item.name}</span>
                <span className={style.title}>{item.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
