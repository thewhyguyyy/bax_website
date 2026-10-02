"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";

/**
 * Horizontally scrollable, snap-aligned carousel that auto-advances on a
 * timer and pauses on hover/focus/touch. Falls back to manual-only when
 * prefers-reduced-motion is set, since continuous auto-motion is exactly
 * what that preference asks us to avoid.
 */
export default function Carousel({ items, renderItem, ariaLabel, itemClassName, intervalMs = 2000 }) {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-card]");
    const amount = card ? card.offsetWidth + 24 : 280;

    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
    if (direction > 0 && atEnd) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      track.scrollBy({ left: direction * amount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (shouldReduceMotion || paused) return;
    const id = setInterval(() => scrollByCard(1), intervalMs);
    return () => clearInterval(id);
  }, [paused, shouldReduceMotion, intervalMs]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      <div
        ref={trackRef}
        role="group"
        aria-label={ariaLabel}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, i) => (
          <div key={item.slug ?? i} data-card className={itemClassName ?? "w-[70vw] shrink-0 snap-center sm:w-[260px]"}>
            {renderItem(item, i)}
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous"
          className="rounded-full bg-lavender-50 p-3 text-indigo-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-900 hover:text-white"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Next"
          className="rounded-full bg-lavender-50 p-3 text-indigo-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-900 hover:text-white"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
