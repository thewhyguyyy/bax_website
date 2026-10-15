import Reveal from "@/components/Reveal";
import { privacyPolicy, contact } from "@/content/site";

export const metadata = {
  title: "Privacy Policy",
  description: "How Beyond Ability X collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal as="h1" className="font-display text-4xl font-bold uppercase tracking-tight text-indigo-900 sm:text-5xl">
          Privacy Policy
        </Reveal>
        <Reveal delay={0.05} className="mt-3 font-body text-sm text-indigo-900/50">
          Last updated: {privacyPolicy.lastUpdated}
        </Reveal>

        <Reveal delay={0.1} className="mt-10 font-body text-base leading-relaxed text-indigo-900/80">
          {privacyPolicy.intro}
        </Reveal>

        <div className="mt-12 space-y-10">
          {privacyPolicy.sections.map((section, i) => (
            <Reveal key={section.heading} delay={0.05 + i * 0.03}>
              <h2 className="font-display text-lg font-bold uppercase tracking-wide text-indigo-900">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3">
                {section.body.map((paragraph, j) => (
                  <p key={j} className="font-body text-base leading-relaxed text-indigo-900/70">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.1}>
            <h2 className="font-display text-lg font-bold uppercase tracking-wide text-indigo-900">
              Contact Us
            </h2>
            <p className="mt-3 font-body text-base leading-relaxed text-indigo-900/70">
              For any privacy-related questions or requests, write to us at{" "}
              <a href={`mailto:${contact.email}`} className="text-purple-600 underline-offset-4 hover:underline">
                {contact.email}
              </a>
              , or reach us at {contact.location}.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
