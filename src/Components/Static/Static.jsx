import React from "react";
import style from "./Static.module.css";

/* "1200+ Hrs Coding" and "200+ Hrs Soft Skills" were removed: hours-logged
   metrics read as bootcamp-junior next to a senior engineer's experience.
   The remaining numbers are the ones that show output. */
const STATS = [
  { value: "4+", label: "Years of experience" },
  { value: "30+", label: "Projects built" },
  { value: "5+", label: "Major projects shipped" },
  { value: "300+", label: "DSA problems solved" },
];

export default function Static() {
  return (
    <section id="coding" className={`section ${style.stats}`}>
      <div className="container">
        <ul className={style.row}>
          {STATS.map((stat) => (
            <li className={`${style.stat} reveal`} key={stat.label}>
              <span className={style.value}>{stat.value}</span>
              <span className={style.label}>{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
