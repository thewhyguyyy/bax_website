import Link from "next/link";
import Reveal from "./Reveal";
import { ctaBand } from "@/content/site";

export default function CTABand({
  heading = ctaBand.heading,
  body = ctaBand.body,
  cta = ctaBand.cta,
}) {
  return (
    <section className="bg-indigo-900 py-20 text-center text-white">
      <Reveal className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 font-body text-base text-white/70 sm:text-lg">{body}</p>
        <Link
          href={cta.href}
          className="mt-8 inline-block rounded-full bg-coral-500 px-8 py-4 font-display text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,107,122,0.45)]"
        >
          {cta.label}
        </Link>
      </Reveal>
    </section>
  );
}
