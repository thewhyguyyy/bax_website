export default function SectionHeading({
  eyebrow,
  heading,
  highlight,
  headingAs: HeadingTag = "h2",
  align = "center",
  intro,
  light = false,
}) {
  return (
    <div className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <p
          className={`mb-3 font-display text-xs font-bold uppercase tracking-[0.2em] ${
            light ? "text-coral-500" : "text-coral-500"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <HeadingTag
        className={`font-display text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-indigo-900"
        }`}
      >
        {heading}
        {highlight && <span className="text-coral-500"> {highlight}</span>}
      </HeadingTag>
      {intro && (
        <p
          className={`mt-4 font-body text-base sm:text-lg ${
            light ? "text-white/70" : "text-indigo-900/70"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
