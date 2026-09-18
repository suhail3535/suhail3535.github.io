import React from "react";
import style from "./Static.module.css";

/* Rewritten for a client audience.
   "300+ DSA problems solved" was removed outright: it signals interview
   preparation, which tells a paying client nothing and reads junior next to
   Gulf News and Fortune India. "Industries shipped in" is drawn from real
   history — media (Quintype/ListenFirst), finance (Vastu Housing Finance)
   and public sector (Rajasthan Police).

   TODO: the strongest version of this strip uses outcomes, not counts.
   If you can stand behind numbers like "2M monthly readers served" or
   "page load cut from 4.1s to 1.3s", replace these with those. */
const STATS = [
  { value: "4+", label: "Years shipping production code" },
  { value: "30+", label: "Projects delivered" },
  { value: "5+", label: "Large platforms shipped" },
  { value: "3", label: "Industries: media, finance, public sector" },
];

export default function Static() {
  return (
    <section id="coding" className={`section ${style.stats}`}>
      <div className="container">
        {/* Same as the process strip: reveal on the container so the 1px
            dividers between cells are not swallowed by per-cell layers. */}
        <ul className={`${style.row} reveal`}>
          {STATS.map((stat) => (
            <li className={style.stat} key={stat.label}>
              <span className={style.value}>{stat.value}</span>
              <span className={style.label}>{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
