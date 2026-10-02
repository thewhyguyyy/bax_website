import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import InquiryForm from "@/components/InquiryForm";
import Reveal from "@/components/Reveal";
import { getInvolved } from "@/content/site";

export const metadata = {
  title: "Get Involved",
  description:
    "Invest, sponsor, hire, coach, or collaborate — ways to back India's first inclusive sports ecosystem.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-indigo-900 py-24 text-center text-white">
        <Image
          src={getInvolved.hero.image.src}
          alt={getInvolved.hero.image.alt}
          fill
          priority
          className="object-cover opacity-30"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(35,17,82,0.9) 0%, rgba(35,17,82,0.75) 60%, rgba(35,17,82,0.95) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal as="h1" className="font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl">
            {getInvolved.hero.heading}
          </Reveal>
          <Reveal as="p" delay={0.1} className="mt-6 font-body text-base text-white/70 sm:text-lg">
            {getInvolved.hero.subhead}
          </Reveal>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <SectionHeading heading="Ways to get involved" align="left" />
            </Reveal>
            <Reveal delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src={getInvolved.waysImage.src}
                alt={getInvolved.waysImage.alt}
                fill
                className="object-cover"
              />
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {getInvolved.ways.map((way, i) => (
              <Reveal key={way.slug} delay={i * 0.08}>
                <div className="group h-full rounded-2xl bg-lavender-50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide text-indigo-900">
                    {way.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-indigo-900/70">
                    {way.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-lavender-50 py-20">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading heading="Tell us more" />
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <InquiryForm
              formName="Get Involved"
              fields={getInvolved.formFields}
              submitLabel="Send Inquiry"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
