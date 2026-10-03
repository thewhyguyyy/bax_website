import { Trophy, GraduationCap, Clapperboard, PartyPopper, Cpu, ShoppingBag, Check } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PillarCard from "@/components/PillarCard";
import EventCard from "@/components/EventCard";
import RoadmapTimeline from "@/components/RoadmapTimeline";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import { whatWeDo, events } from "@/content/site";

export const metadata = {
  title: "What We Do",
  description:
    "One platform, multiple engines — the six pillars of the Beyond Ability X inclusive sports ecosystem, plus our two flagship IPs.",
};

const ICONS = {
  Trophy,
  GraduationCap,
  Clapperboard,
  PartyPopper,
  Cpu,
  ShoppingBag,
};

export default function WhatWeDoPage() {
  return (
    <>
      <section className="overflow-hidden bg-white py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <h1 className="font-display text-4xl font-bold uppercase tracking-tight text-indigo-900 sm:text-5xl">
              {whatWeDo.intro.heading}
            </h1>
            <p className="mt-6 font-body text-base text-indigo-900/70 sm:text-lg">
              {whatWeDo.intro.subhead}
            </p>
          </Reveal>
          <Reveal delay={0.15} className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              poster={whatWeDo.intro.video.poster}
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src={whatWeDo.intro.video.src} type="video/mp4" />
            </video>
          </Reveal>
        </div>
      </section>

      {/* 4.2 Six ecosystem pillars */}
      <section className="bg-lavender-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whatWeDo.pillars.map((pillar, i) => (
              <Reveal key={pillar.slug} delay={i * 0.08}>
                <PillarCard
                  title={pillar.title}
                  body={pillar.body}
                  tag={pillar.tag}
                  Icon={ICONS[pillar.icon]}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What We've Done */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="The Track Record" heading="What We've Done" />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {events.map((event, i) => (
              <Reveal key={event.slug} delay={i * 0.1}>
                <EventCard event={event} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Road Ahead */}
      <section className="bg-lavender-50 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow={whatWeDo.roadmap.eyebrow}
              heading={whatWeDo.roadmap.heading}
              intro={whatWeDo.roadmap.subhead}
            />
          </Reveal>
          <div className="mt-16">
            <RoadmapTimeline items={whatWeDo.roadmap.items} />
          </div>
        </div>
      </section>

      {/* 4.3 Flagship IPs */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading heading={whatWeDo.flagshipIPs.heading} />
          </Reveal>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {whatWeDo.flagshipIPs.items.map((ip, i) => (
              <Reveal key={ip.slug} delay={i * 0.12}>
                <article className="h-full rounded-2xl border border-indigo-900/10 bg-lavender-50 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <p className="font-display text-xs font-bold uppercase tracking-widest text-gold-500">
                    {ip.term}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight text-indigo-900">
                    {ip.title}
                  </h3>
                  <p className="mt-4 font-body text-sm leading-relaxed text-indigo-900/70">
                    {ip.body}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {ip.facts.map((fact) => (
                      <li
                        key={fact}
                        className="flex items-start gap-2 font-body text-sm text-indigo-900/80"
                      >
                        <Check size={16} className="mt-0.5 shrink-0 text-purple-600" aria-hidden="true" />
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
