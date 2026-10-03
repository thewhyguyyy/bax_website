"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { home } from "@/content/site";

export default function Hero() {
  const { hero } = home;
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: "easeOut" },
        };

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
        className="absolute inset-0 h-full w-full scale-105 object-cover object-center"
      >
        <source src="/videos/hero-promo-mobile.mp4" type="video/mp4" media="(max-width: 640px)" />
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
          <motion.p
            {...fadeUp(0)}
            className="font-display text-xs font-bold uppercase tracking-[0.3em] text-coral-500"
          >
            {hero.tagline}
          </motion.p>

          <motion.h1
            {...fadeUp(0.1)}
            className="mt-6 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {hero.headingPrefix}
            <span className="text-coral-500">{hero.headingHighlight}</span>
            {hero.headingSuffix}
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-6 max-w-xl font-body text-base text-white/80 sm:text-lg"
          >
            {hero.subhead}
          </motion.p>

          <motion.ul
            {...fadeUp(0.3)}
            className="mt-8 flex flex-wrap gap-x-4 gap-y-2"
            aria-label="What we cover"
          >
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
          </motion.ul>

          <motion.div {...fadeUp(0.4)} className="mt-10 flex flex-wrap gap-4">
            <Link
              href={hero.primaryCta.href}
              className="rounded-full bg-coral-500 px-8 py-4 font-display text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,107,122,0.45)]"
            >
              {hero.primaryCta.label}
            </Link>
            {hero.secondaryCta.external ? (
              <a
                href={hero.secondaryCta.href}
                className="rounded-full bg-gold-500 px-8 py-4 font-display text-sm font-bold uppercase tracking-widest text-indigo-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(217,165,38,0.45)]"
              >
                {hero.secondaryCta.label}
              </a>
            ) : (
              <Link
                href={hero.secondaryCta.href}
                className="rounded-full bg-gold-500 px-8 py-4 font-display text-sm font-bold uppercase tracking-widest text-indigo-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(217,165,38,0.45)]"
              >
                {hero.secondaryCta.label}
              </Link>
            )}
          </motion.div>
        </div>
      </div>

      {!shouldReduceMotion && (
        <motion.div
          aria-hidden="true"
          className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 sm:block"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="h-10 w-6 rounded-full border-2 border-white/40">
            <div className="mx-auto mt-2 h-2 w-1 rounded-full bg-white/60" />
          </div>
        </motion.div>
      )}
    </section>
  );
}
