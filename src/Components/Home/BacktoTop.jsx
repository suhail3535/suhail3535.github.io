import React, { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";
import style from "./Float.module.css";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setIsVisible(window.scrollY > 500);
    toggle();
    window.addEventListener("scroll", toggle, { passive: true });
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  // Previously this button flipped to "scroll to bottom" when near the top,
  // so the same control did two different things depending on scroll position.
  // Now it simply hides until there is somewhere to scroll back to.
  return (
    <button
      type="button"
      className={`${style.float} ${style.top}${isVisible ? " " + style.shown : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      tabIndex={isVisible ? 0 : -1}
    >
      <HiArrowUp />
    </button>
  );
}
