import Image from "next/image";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import PillarCard from "@/components/PillarCard";
import EventCard from "@/components/EventCard";
import LogoStrip from "@/components/LogoStrip";
import TeamCarousel from "@/components/TeamCarousel";
import WhatWeDoCarousel from "@/components/WhatWeDoCarousel";
import Gallery from "@/components/Gallery";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { Play } from "lucide-react";
import { home, events, partners, mission, team, homeTeamSlugs, whatWeDo } from "@/content/site";

export const metadata = {
  title: "Beyond Ability X — Every Athlete Has a Story",
};

export default function HomePage() {
  const homeTeam = homeTeamSlugs
    .map((slug) => team.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <>
      <Hero />

      {/* 3.2 Why We Exist */}
      <section className="overflow-hidden bg-white py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.2em] text-coral-500">
              {home.who.eyebrow}
            </p>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-indigo-900 sm:text-4xl">
              {home.who.heading}
            </h2>
            <p className="mt-6 font-body text-base leading-relaxed text-indigo-900/70 sm:text-lg">
              {home.who.body}
            </p>
            <p className="mt-6 font-body text-base italic text-coral-500">{home.who.kicker}</p>
          </Reveal>
          <Reveal delay={0.15} className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src={home.who.image.src}
              alt={home.who.image.alt}
              fill
              priority
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* What We Do teaser carousel */}
      <section className="bg-lavender-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="One Platform" heading="What We Do" />
          </Reveal>
          <Reveal delay={0.1} className="mt-12">
            <WhatWeDoCarousel pillars={whatWeDo.pillars} />
          </Reveal>
          <p className="mt-4 text-center">
            <Link
              href="/what-we-do"
              className="font-display text-sm font-bold uppercase tracking-widest text-purple-600 underline-offset-4 transition-colors hover:text-coral-500 hover:underline"
            >
              See the full ecosystem →
            </Link>
          </p>
        </div>
      </section>

      {/* 3.3 In Action */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow={home.inAction.eyebrow} heading={home.inAction.heading} />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event, i) => (
              <Reveal key={event.slug} delay={i * 0.1}>
                <EventCard event={event} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3.4 Credibility / Associations */}
      <section className="bg-lavender-50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="mb-10 text-center font-display text-xs font-bold uppercase tracking-[0.2em] text-indigo-900/50">
              {home.associations.heading}
            </p>
            <LogoStrip items={partners} />
          </Reveal>
        </div>
      </section>

      {/* 3.5 Our Mission */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow={mission.eyebrow}
              heading="We are"
              highlight={mission.headingHighlight}
              intro={mission.intro}
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {mission.pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <PillarCard title={pillar.title} body={pillar.body} highlight={pillar.highlight} />
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center font-display text-lg font-bold uppercase text-indigo-900">
            {mission.closing}
          </p>
        </div>
      </section>

      {/* 3.6 Team slider */}
      <section className="bg-lavender-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="The Team" heading="The People Behind BAX" />
          </Reveal>
          <Reveal delay={0.1} className="mt-12">
            <TeamCarousel people={homeTeam} />
          </Reveal>
          <p className="mt-6 text-center">
            <Link
              href="/about#team"
              className="font-display text-sm font-bold uppercase tracking-widest text-purple-600 underline-offset-4 transition-colors hover:text-coral-500 hover:underline"
            >
              Meet the full team →
            </Link>
          </p>
        </div>
      </section>

      {/* Player Stories */}
      <section className="relative overflow-hidden bg-indigo-900 py-24 text-white">
        <Image
          src={home.playerStories.image.src}
          alt={home.playerStories.image.alt}
          fill
          className="object-cover opacity-25"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, rgba(35,17,82,0.95) 0%, rgba(35,17,82,0.7) 100%)",
          }}
        />
        <Reveal className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-coral-500">
            {home.playerStories.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            {home.playerStories.heading}
          </h2>
          <p className="mt-4 font-body text-base text-white/70 sm:text-lg">
            {home.playerStories.body}
          </p>
          <a
            href={home.playerStories.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-coral-500 px-8 py-4 font-display text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,107,122,0.45)]"
          >
            <Play size={18} className="transition-transform duration-300 group-hover:scale-110" fill="currentColor" />
            {home.playerStories.cta.label}
          </a>
        </Reveal>
      </section>

      {/* 3.7 Gallery */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow={home.gallery.eyebrow} heading={home.gallery.heading} />
          </Reveal>
          <Reveal delay={0.1} className="mt-12">
            <Gallery images={home.gallery.images} />
          </Reveal>
        </div>
      </section>

      {/* 3.8 Closing CTA */}
      <CTABand />
    </>
  );
}
