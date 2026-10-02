"use client";

import Carousel from "./Carousel";
import PersonCard from "./PersonCard";

export default function TeamCarousel({ people }) {
  return (
    <Carousel
      items={people}
      ariaLabel="Team members"
      renderItem={(person) => <PersonCard person={person} compact />}
    />
  );
}
