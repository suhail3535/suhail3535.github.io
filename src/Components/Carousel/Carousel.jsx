import React, { useCallback, useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./Carousel.css";

// Must match the .carousel__track padding in Carousel.css.
const TRACK_PADDING_Y = 10;

/**
 * Native scroll-snap carousel: swipe/trackpad scrolling works for free, and
 * the arrows and dots just drive scrollLeft. The reveal animation sits on the
 * wrapper rather than each card, because cards scrolled out of the track are
 * clipped and would never intersect the viewport-rooted observer — so items
 * must render without their own `reveal` class.
 *
 * `slides` overrides the responsive default inline, for content too wide to
 * sit three across. `fitHeight` stops slides stretching to the tallest card
 * and sizes the track to the active one instead — for a one-up carousel
 * whose cards differ in height, where stretching leaves dead space inside
 * the shorter card.
 */
export default function Carousel({
  items,
  renderItem,
  getKey,
  getLabel,
  noun = "item",
  autoplayMs = 2000,
  slides,
  fitHeight = false,
}) {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [paused, setPaused] = useState(false);

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.children);
    if (!cards.length) return;
    const left = track.scrollLeft;
    let nearest = 0;
    cards.forEach((card, i) => {
      if (
        Math.abs(card.offsetLeft - left) <
        Math.abs(cards[nearest].offsetLeft - left)
      ) {
        nearest = i;
      }
    });
    setActive(nearest);
    setAtStart(left <= 2);
    setAtEnd(left + track.clientWidth >= track.scrollWidth - 2);

    if (fitHeight) {
      // border-box, so the track's own vertical padding is included.
      const pad = TRACK_PADDING_Y;
      track.style.height = `${cards[nearest].getBoundingClientRect().height + pad}px`;
    }
  }, [fitHeight]);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  // Cards are lazy-loading images, so their height lands after first paint.
  useEffect(() => {
    if (!fitHeight || typeof ResizeObserver === "undefined") return undefined;
    const track = trackRef.current;
    if (!track) return undefined;
    const ro = new ResizeObserver(update);
    Array.from(track.children).forEach((card) => ro.observe(card));
    return () => ro.disconnect();
  }, [fitHeight, update, items.length]);

  const goTo = (index) => {
    const track = trackRef.current;
    const card = track?.children[index];
    if (card) track.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  };

  // One step is one card, clamped so the last press lands on the end.
  const step = (dir) => goTo(Math.max(0, Math.min(items.length - 1, active + dir)));

  // Autoplay: advance every autoplayMs, wrapping to the first card once the
  // end is visible. Paused while the pointer or keyboard focus is inside, so
  // nobody has a card slide away mid-read. Re-arms after every slide change,
  // so a manual click also restarts the full interval.
  useEffect(() => {
    if (paused || !autoplayMs || items.length < 2) return undefined;
    const id = setTimeout(() => goTo(atEnd ? 0 : active + 1), autoplayMs);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, atEnd, paused, autoplayMs, items.length]);

  return (
    <div
      className={`carousel reveal${fitHeight ? " carousel--fit" : ""}`}
      style={slides ? { "--slides": slides } : undefined}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="carousel__viewport">
        <div className="carousel__track" ref={trackRef} onScroll={update}>
          {items.map((item) => (
            <div className="carousel__slide" key={getKey(item)}>
              {renderItem(item)}
            </div>
          ))}
        </div>

        <button
          type="button"
          className="carousel__arrow carousel__arrow--prev"
          onClick={() => step(-1)}
          disabled={atStart}
          aria-label={`Previous ${noun}`}
        >
          <FiChevronLeft />
        </button>
        <button
          type="button"
          className="carousel__arrow carousel__arrow--next"
          onClick={() => step(1)}
          disabled={atEnd}
          aria-label={`Next ${noun}`}
        >
          <FiChevronRight />
        </button>
      </div>

      <div className="carousel__dots">
        {items.map((item, i) => (
          <button
            type="button"
            key={getKey(item)}
            className={`carousel__dot${i === active ? " is-active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to ${getLabel ? getLabel(item) : getKey(item)}`}
            aria-current={i === active}
          />
        ))}
      </div>
    </div>
  );
}
