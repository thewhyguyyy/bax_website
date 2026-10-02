import Link from "next/link";
import { ctaBand } from "@/content/site";

export default function CTABand({
  heading = ctaBand.heading,
  body = ctaBand.body,
  cta = ctaBand.cta,
}) {
  return (
    <section className="bg-indigo-900 py-20 text-center text-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 font-body text-base text-white/70 sm:text-lg">{body}</p>
        <Link
          href={cta.href}
          className="mt-8 inline-block rounded-full bg-coral-500 px-8 py-4 font-display text-sm font-bold uppercase tracking-widest text-white transition-transform hover:-translate-y-0.5"
        >
          {cta.label}
        </Link>
      </div>
    </section>
  );
}
