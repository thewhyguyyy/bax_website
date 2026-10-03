import AthleteCard from "./AthleteCard";

function MarqueeRow({ athletes, direction }) {
  const animClass = direction === "right" ? "animate-marquee-right" : "animate-marquee-left";
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className={`flex w-max gap-8 ${animClass}`}>
        {[athletes, athletes].map((group, groupIndex) => (
          <div key={groupIndex} className="flex shrink-0 gap-8" aria-hidden={groupIndex === 1}>
            {group.map((athlete) => (
              <div key={athlete.slug} className="w-28 shrink-0 sm:w-32">
                <AthleteCard athlete={athlete} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AthleteMarquee({ athletes }) {
  const mid = Math.ceil(athletes.length / 2);
  const rowOne = athletes.slice(0, mid);
  const rowTwo = athletes.slice(mid);

  return (
    <div className="space-y-8">
      <MarqueeRow athletes={rowOne} direction="left" />
      <MarqueeRow athletes={rowTwo} direction="right" />
    </div>
  );
}
