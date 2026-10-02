import Image from "next/image";
import { Check, X as XIcon } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import StatCard from "@/components/StatCard";
import PersonCard from "@/components/PersonCard";
import LogoStrip from "@/components/LogoStrip";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import { about, team, teamFootnote, partners } from "@/content/site";

export const metadata = {
  title: "About Us",
  description:
    "The reality for differently-abled athletes in India, the problem Beyond Ability X exists to solve, and the people building it.",
};

export default function AboutPage() {
  const { reality, problem } = about;

  return (
    <>
      {/* Banner image */}
      <div className="relative h-[40vh] min-h-[280px] w-full overflow-hidden bg-indigo-900">
        <Image
          src={about.heroImage.src}
          alt={about.heroImage.alt}
          fill
          priority
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: "linear-gradient(0deg, rgba(35,17,82,0.85) 0%, rgba(35,17,82,0.35) 100%)" }}
        />
        <div className="relative z-10 flex h-full items-end">
          <h1 className="mx-auto w-full max-w-6xl px-4 pb-10 font-display text-3xl font-bold uppercase tracking-tight text-white sm:px-6 sm:text-4xl lg:px-8">
            About Beyond Ability X
          </h1>
        </div>
      </div>

      {/* 5.1 The Reality */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow={reality.eyebrow}
              heading={reality.headingPrefix}
              highlight={reality.headingHighlight}
            />
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            <Reveal delay={0.1} className="rounded-2xl bg-lavender-50 p-8 transition-shadow duration-300 hover:shadow-lg">
              <h3 className="font-display text-xs font-bold uppercase tracking-widest text-indigo-900/50">
                {reality.onGround.label}
              </h3>
              <ul className="mt-5 space-y-4">
                {reality.onGround.items.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <Check size={20} className="mt-0.5 shrink-0 text-purple-600" aria-hidden="true" />
                    <div>
                      <p className="font-display text-sm font-bold uppercase tracking-wide text-indigo-900">
                        {item.title}
                      </p>
                      <p className="font-body text-sm text-indigo-900/60">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2} className="rounded-2xl bg-indigo-900/5 p-8 transition-shadow duration-300 hover:shadow-lg">
              <h3 className="font-display text-xs font-bold uppercase tracking-widest text-coral-500">
                {reality.offGround.label}
              </h3>
              <ul className="mt-5 space-y-4">
                {reality.offGround.items.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <XIcon size={20} className="mt-0.5 shrink-0 text-coral-500" aria-hidden="true" />
                    <div>
                      <p className="font-display text-sm font-bold uppercase tracking-wide text-indigo-900">
                        {item.title}
                      </p>
                      <p className="font-body text-sm text-indigo-900/60">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <p className="mt-12 text-center font-display text-xl font-bold uppercase text-indigo-900">
            {reality.closing}
          </p>
        </div>
      </section>

      {/* 5.2 The Problem */}
      <section className="bg-lavender-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.2em] text-coral-500">
                {problem.eyebrow}
              </p>
              <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-indigo-900 sm:text-4xl">
                {problem.headingPrefix}
                <span className="text-coral-500">{problem.headingHighlight}</span>
                {problem.headingSuffix}
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {problem.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.1}>
                <StatCard {...stat} />
              </Reveal>
            ))}
          </div>

          <p className="mt-10 text-center font-body text-lg italic text-indigo-900">
            {problem.closing}
          </p>
        </div>
      </section>

      {/* 5.3 Team */}
      <section id="team" className="scroll-mt-20 bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow={about.team.eyebrow} heading={about.team.heading} />
          </Reveal>
          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((person, i) => (
              <Reveal key={person.slug} delay={(i % 4) * 0.08}>
                <PersonCard person={person} />
              </Reveal>
            ))}
          </div>
          <p className="mt-12 text-center font-body text-xs text-indigo-900/70">
            <span className="font-bold text-coral-500">*</span> {teamFootnote.replace(/^\*/, "")}
          </p>
        </div>
      </section>

      {/* 5.4 Partnerships */}
      <section className="bg-lavender-50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="mb-10 text-center font-display text-xs font-bold uppercase tracking-[0.2em] text-indigo-900/50">
            {about.partnerships.heading}
          </p>
          <LogoStrip items={partners} />
          {/* PLACEHOLDER: InnovHER logo — PDF only contained the icon mark on a
              black box, not a usable wordmark. Add a real logo file here. */}
        </div>
      </section>

      <CTABand />
    </>
  );
}
