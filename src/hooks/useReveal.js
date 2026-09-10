import { useEffect } from "react";

/**
 * Reveals elements marked with .reveal as they scroll into view.
 *
 * Replaces AOS, which was being re-initialised at module scope in seven
 * separate files. One observer, mounted once from App.
 */
export default function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");

    // No observer support, or the user prefers reduced motion: show everything.
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
}
