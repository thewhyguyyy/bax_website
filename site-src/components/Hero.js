import Link from "next/link";
import { home } from "@/content/site";

export default function Hero() {
  const { hero } = home;

  return (
    <section
      aria-label="Hero"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-indigo-900"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-video-poster.jpg"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        <source src="/videos/hero-promo.mp4" type="video/mp4" />
      </video>

      <div
        aria-hidden="true"
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(105deg, rgba(35,17,82,0.92) 0%, rgba(35,17,82,0.75) 45%, rgba(91,46,229,0.35) 100%)",
        }}
      />

      <div className="relative z-20 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-coral-500">
            {hero.tagline}
          </p>

          <h1 className="mt-6 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {hero.headingPrefix}
            <span className="text-coral-500">{hero.headingHighlight}</span>
            {hero.headingSuffix}
          </h1>

          <p className="mt-6 max-w-xl font-body text-base text-white/80 sm:text-lg">
            {hero.subhead}
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-2" aria-label="What we cover">
            {hero.pills.map((pill, i) => (
              <li key={pill} className="flex items-center gap-4">
                <span className="font-display text-xs font-bold uppercase tracking-widest text-white/90 sm:text-sm">
                  {pill}
                </span>
                {i < hero.pills.length - 1 && (
                  <span className="h-1 w-1 rounded-full bg-white/40" aria-hidden="true" />
                )}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={hero.primaryCta.href}
              className="rounded-full bg-coral-500 px-8 py-4 font-display text-sm font-bold uppercase tracking-widest text-white transition-transform hover:-translate-y-0.5"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="rounded-full bg-gold-500 px-8 py-4 font-display text-sm font-bold uppercase tracking-widest text-indigo-900 transition-transform hover:-translate-y-0.5"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
