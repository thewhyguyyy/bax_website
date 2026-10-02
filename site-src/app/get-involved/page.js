import SectionHeading from "@/components/SectionHeading";
import InquiryForm from "@/components/InquiryForm";
import { getInvolved } from "@/content/site";

export const metadata = {
  title: "Get Involved",
  description:
    "Invest, sponsor, hire, coach, or collaborate — ways to back India's first inclusive sports ecosystem.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <section className="bg-indigo-900 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl">
            {getInvolved.hero.heading}
          </h1>
          <p className="mt-6 font-body text-base text-white/70 sm:text-lg">
            {getInvolved.hero.subhead}
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading heading="Ways to get involved" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {getInvolved.ways.map((way) => (
              <div key={way.slug} className="rounded-2xl bg-lavender-50 p-7">
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-indigo-900">
                  {way.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-indigo-900/70">
                  {way.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-lavender-50 py-20">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <SectionHeading heading="Tell us more" />
          <div className="mt-10">
            <InquiryForm
              formName="Get Involved"
              fields={getInvolved.formFields}
              submitLabel="Send Inquiry"
            />
          </div>
        </div>
      </section>
    </>
  );
}
