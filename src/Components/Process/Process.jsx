import React from "react";
import style from "./Process.module.css";

/**
 * A client hiring a stranger is mostly worried about risk: vague scope,
 * silence mid-project, being left with code nobody can run. Each step below
 * answers one of those worries.
 *
 * NOTE: these are promises made on your behalf — a free intro call, a fixed
 * price before work starts, weekly demos, 30 days of post-launch support.
 * Change any you are not willing to honour; a broken promise here costs more
 * than the reassurance is worth.
 */
const STEPS = [
  {
    title: "Discovery call",
    body: "A short call to understand the problem, the deadline and the constraints. Free, and with no obligation to continue.",
  },
  {
    title: "Fixed-scope proposal",
    body: "You get the scope, timeline and price in writing before any code is written — so there are no surprises on the invoice.",
  },
  {
    title: "Weekly demos",
    body: "You see working software every week, not a status report. If something is heading the wrong way, we catch it early.",
  },
  {
    title: "Handover & support",
    body: "Documented code, a walkthrough of how it works, and 30 days of support after launch so you are never left stranded.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-num">03.</span>
          <h2>How working together goes</h2>
          <span className="section-rule" />
        </div>

        {/* reveal sits on the container, not each step: animating the cells
            individually composited them and hid the 1px dividers between. */}
        <ol className={`${style.steps} reveal`}>
          {STEPS.map((step, i) => (
            <li className={style.step} key={step.title}>
              <span className={style.num} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
