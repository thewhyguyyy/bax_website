"use client";

import { Trophy, GraduationCap, Clapperboard, PartyPopper, Cpu, ShoppingBag } from "lucide-react";
import Carousel from "./Carousel";
import PillarCard from "./PillarCard";

const ICONS = { Trophy, GraduationCap, Clapperboard, PartyPopper, Cpu, ShoppingBag };

export default function WhatWeDoCarousel({ pillars }) {
  // Home leads with Ability Tech; the What We Do page keeps the canonical
  // 1-6 order, so reorder a copy here rather than touching the source array.
  const ordered = [...pillars].sort((a, b) => {
    if (a.slug === "ability-tech") return -1;
    if (b.slug === "ability-tech") return 1;
    return 0;
  });

  return (
    <Carousel
      items={ordered}
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
