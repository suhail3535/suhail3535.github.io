import React from "react";
import {
  HiOutlineCode,
  HiOutlineGlobeAlt,
  HiOutlineServer,
  HiOutlineLightningBolt,
  HiOutlineChartBar,
  HiOutlineRefresh,
} from "react-icons/hi";
import style from "./Services.module.css";

/**
 * What a client can actually buy. This sits above the work section because
 * a visitor deciding whether to hire needs to recognise their own problem
 * before they care about anyone's portfolio.
 *
 * Every item here maps to work already done at Quintype, Rajasthan Police
 * or Vastu — nothing aspirational.
 */
const SERVICES = [
  {
    icon: HiOutlineCode,
    title: "Web app development",
    body: "Dashboards, admin panels and customer-facing apps in React and Next.js — built to stay maintainable once the first release is out.",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "High-traffic front ends",
    body: "News portals, media sites and landing pages that stay fast and accessible under real traffic. The kind of work I do daily for publishers.",
  },
  {
    icon: HiOutlineServer,
    title: "APIs & backend services",
    body: "Node.js, Express and Rails services, third-party API integrations, scheduled jobs and file-transfer automation.",
  },
  {
    icon: HiOutlineLightningBolt,
    title: "Performance & accessibility audits",
    body: "A clear report of what is making your site slow or unusable, ordered by impact — then the fixes, if you want them done.",
  },
  {
    icon: HiOutlineChartBar,
    title: "Dashboards & data visualisation",
    body: "D3.js charts and analytics views that stay readable with messy, real-world data instead of only with demo numbers.",
  },
  {
    icon: HiOutlineRefresh,
    title: "Legacy React rescue",
    body: "Inherited a large React codebase nobody wants to touch? Untangling, upgrading and stabilising those is most of my working week.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-num">01.</span>
          <h2>How I can help</h2>
          <span className="section-rule" />
        </div>

        <div className={style.grid}>
          {SERVICES.map(({ icon: Icon, title, body }) => (
            <article className={`card ${style.service} reveal`} key={title}>
              <span className={style.icon} aria-hidden="true">
                <Icon />
              </span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
