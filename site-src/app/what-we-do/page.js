import { Trophy, GraduationCap, Clapperboard, PartyPopper, Cpu, ShoppingBag, Check } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PillarCard from "@/components/PillarCard";
import CTABand from "@/components/CTABand";
import { whatWeDo } from "@/content/site";

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
      <section className="bg-white pb-16 pt-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold uppercase tracking-tight text-indigo-900 sm:text-5xl">
            {whatWeDo.intro.heading}
          </h1>
          <p className="mt-6 font-body text-base text-indigo-900/70 sm:text-lg">
            {whatWeDo.intro.subhead}
          </p>
        </div>
      </section>

      {/* 4.2 Six ecosystem pillars */}
      <section className="bg-lavender-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whatWeDo.pillars.map((pillar) => (
              <PillarCard
                key={pillar.slug}
                title={pillar.title}
                body={pillar.body}
                tag={pillar.tag}
                Icon={ICONS[pillar.icon]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4.3 Flagship IPs */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading heading={whatWeDo.flagshipIPs.heading} />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {whatWeDo.flagshipIPs.items.map((ip) => (
              <article
                key={ip.slug}
                className="rounded-2xl border border-indigo-900/10 bg-lavender-50 p-8"
              >
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
                    <li key={fact} className="flex items-start gap-2 font-body text-sm text-indigo-900/80">
                      <Check size={16} className="mt-0.5 shrink-0 text-purple-600" aria-hidden="true" />
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
