import React from "react";
import { FiExternalLink } from "react-icons/fi";
import {
  HiOutlineAcademicCap,
  HiOutlineBadgeCheck,
  HiOutlineHeart,
  HiOutlineLightningBolt,
  HiOutlineTrendingUp,
  HiOutlineUserGroup,
} from "react-icons/hi";
import award from "../images/best-developer-award.jpg";
import sureProEdAward from "../images/sure-proed-award.jpg";
import style from "./Awards.module.css";

/**
 * `image` and `link` are optional: a card without an image renders as a
 * single text column instead of leaving an empty frame.
 */
const AWARDS = [
  {
    tag: "Award",
    title: "Best Developer of the Year",
    issuer: "Quintype Technologies · ListenFirst Media — Jaipur, 2026",
    image: award,
    imageAlt: "Certificate of appreciation and trophy awarded to Suhail Khan by ListenFirst",
    points: [
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
    ],
  },
  {
    tag: "Award",
    title: "Rapid Innovation & Contribution Award",
    issuer: "SURE ProEd (SURE TRUST), 2026",
    image: sureProEdAward,
    imageAlt: "Rapid Innovation & Contribution Award presented to Suhail Khan by SURE ProEd",
    link: "https://www.linkedin.com/posts/suhail-khan-dev_grateful-givingback-mentorship-ugcPost-7414177902264676354-K9mP/",
    points: [
      {
        icon: HiOutlineLightningBolt,
        text: "Single-handedly designed and built a fully functional Quizzes Platform in two days, valued at over ₹6 lakh.",
      },
      {
        icon: HiOutlineAcademicCap,
        text: "The platform now runs SURE ProEd's large-scale admission assessments, improving operational efficiency and the learning experience.",
      },
      {
        icon: HiOutlineHeart,
        text: "Delivered pro bono, supporting their mission of free training and internships for students, and recognised for mentorship.",
      },
    ],
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

        <div className={style.list}>
          {AWARDS.map((item) => (
            <article
              className={`card ${style.award}${item.image ? "" : " " + style.textOnly} reveal`}
              key={item.title}
            >
              {item.image && (
                <figure className={style.shot}>
                  <img src={item.image} alt={item.imageAlt} loading="lazy" />
                </figure>
              )}

              <div className={style.body}>
                <span className={style.tag}>
                  <HiOutlineBadgeCheck aria-hidden="true" />
                  {item.tag}
                </span>

                <h3>{item.title}</h3>
                <p className={style.issuer}>{item.issuer}</p>

                <ul className={style.points}>
                  {item.points.map(({ icon: Icon, text }) => (
                    <li key={text}>
                      <Icon aria-hidden="true" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>

                {item.link && (
                  <a
                    href={item.link}
                    className={`btn btn-sm ${style.link}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiExternalLink /> View on LinkedIn
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
