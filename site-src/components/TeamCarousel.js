"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PersonCard from "./PersonCard";

export default function TeamCarousel({ people }) {
  const trackRef = useRef(null);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-card]");
    const amount = card ? card.offsetWidth + 24 : 280;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        role="group"
        aria-label="Team members"
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {people.map((person) => (
          <div
            key={person.slug}
            data-card
            className="w-[70vw] shrink-0 snap-center sm:w-[260px]"
          >
            <PersonCard person={person} compact />
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous team member"
          className="rounded-full bg-lavender-50 p-3 text-indigo-900 hover:bg-indigo-900 hover:text-white"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Next team member"
          className="rounded-full bg-lavender-50 p-3 text-indigo-900 hover:bg-indigo-900 hover:text-white"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
