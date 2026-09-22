import React from "react";
import { HiOutlineBadgeCheck, HiOutlineTrendingUp, HiOutlineUserGroup } from "react-icons/hi";
import award from "../images/best-developer-award.jpg";
import style from "./Awards.module.css";

const POINTS = [
  {
    icon: HiOutlineBadgeCheck,
    text: "Recognised for outstanding contributions to frontend development and team delivery.",
  },
  {
    icon: HiOutlineTrendingUp,
    text: "Promoted to Senior Software Engineer on the back of consistent delivery.",
  },
  {
    icon: HiOutlineUserGroup,
    text: "Awarded while working across the React front end and Rails services with a U.S.-based team.",
  },
];

export default function Awards() {
  return (
    <section id="awards" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-num">05.</span>
          <h2>Recognition</h2>
          <span className="section-rule" />
        </div>

        <article className={`card ${style.award} reveal`}>
          <figure className={style.shot}>
            <img
              src={award}
              alt="Certificate of appreciation and trophy awarded to Suhail Khan by ListenFirst"
              loading="lazy"
            />
          </figure>

          <div className={style.body}>
            <span className={style.tag}>
              <HiOutlineBadgeCheck aria-hidden="true" />
              Award
            </span>

            <h3>Best Developer of the Year</h3>
            <p className={style.issuer}>
              Quintype Technologies · ListenFirst Media — Jaipur, 2026
            </p>

            <ul className={style.points}>
              {POINTS.map(({ icon: Icon, text }) => (
                <li key={text}>
                  <Icon aria-hidden="true" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
