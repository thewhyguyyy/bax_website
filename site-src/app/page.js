import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import PillarCard from "@/components/PillarCard";
import EventCard from "@/components/EventCard";
import LogoStrip from "@/components/LogoStrip";
import TeamCarousel from "@/components/TeamCarousel";
import Gallery from "@/components/Gallery";
import CTABand from "@/components/CTABand";
import Link from "next/link";
import { home, events, partners, mission, team, homeTeamSlugs } from "@/content/site";

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

      {/* 3.2 Who is BAX */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-indigo-900 sm:text-4xl">
            {home.who.heading}
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-indigo-900/70 sm:text-lg">
            {home.who.body}
          </p>
          <p className="mt-6 font-body text-base italic text-coral-500">{home.who.kicker}</p>
        </div>
      </section>

      {/* 3.3 In Action */}
      <section className="bg-lavender-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading heading={home.inAction.heading} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* 3.4 Credibility / Associations */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="mb-10 text-center font-display text-xs font-bold uppercase tracking-[0.2em] text-indigo-900/50">
            {home.associations.heading}
          </p>
          <LogoStrip items={partners} />
        </div>
      </section>

      {/* 3.5 Our Mission */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={mission.eyebrow}
            heading="We are"
            highlight={mission.headingHighlight}
            intro={mission.intro}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {mission.pillars.map((pillar) => (
              <PillarCard
                key={pillar.title}
                title={pillar.title}
                body={pillar.body}
                highlight={pillar.highlight}
              />
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
          <SectionHeading heading="The People Behind BAX" />
          <div className="mt-12">
            <TeamCarousel people={homeTeam} />
          </div>
          <p className="mt-8 text-center">
            <Link
              href="/about#team"
              className="font-display text-sm font-bold uppercase tracking-widest text-purple-600 hover:text-indigo-900"
            >
              Meet the full team →
            </Link>
          </p>
        </div>
      </section>

      {/* 3.7 Gallery */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading heading={home.gallery.heading} />
          <div className="mt-12">
            <Gallery images={home.gallery.images} />
          </div>
        </div>
      </section>

      {/* 3.8 Closing CTA */}
      <CTABand />
    </>
  );
}
