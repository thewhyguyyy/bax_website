"use client";

import { Trophy, GraduationCap, Clapperboard, PartyPopper, Cpu, ShoppingBag } from "lucide-react";
import Carousel from "./Carousel";
import PillarCard from "./PillarCard";

const ICONS = { Trophy, GraduationCap, Clapperboard, PartyPopper, Cpu, ShoppingBag };

export default function WhatWeDoCarousel({ pillars }) {
  return (
    <Carousel
      items={pillars}
      ariaLabel="What we do"
      itemClassName="w-[80vw] shrink-0 snap-center sm:w-[320px]"
      renderItem={(pillar) => (
        <PillarCard
          title={pillar.title}
          body={pillar.body}
          tag={pillar.tag}
          Icon={ICONS[pillar.icon]}
        />
      )}
    />
  );
}
