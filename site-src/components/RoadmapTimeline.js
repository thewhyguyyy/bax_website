import Image from "next/image";
import Reveal from "./Reveal";

export default function RoadmapTimeline({ items }) {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute left-6 top-2 bottom-2 w-px bg-indigo-900/15"
      />
      <ol className="space-y-8">
        {items.map((item, i) => (
          <li key={item.slug} className="relative pl-[4.5rem]">
            <Reveal delay={i * 0.05}>
              <div
                aria-hidden="true"
                className="absolute left-6 top-2 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-coral-500 ring-4 ring-white"
              />

              <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex shrink-0 gap-1.5">
                  <div className="relative h-16 w-16 overflow-hidden rounded-xl sm:h-20 sm:w-20">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  {item.secondaryImage && (
                    <div className="relative hidden h-16 w-16 overflow-hidden rounded-xl sm:block sm:h-20 sm:w-20">
                      <Image
                        src={item.secondaryImage}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                  )}
                </div>

                <div className="min-w-0">
                  <p className="font-display text-[11px] font-bold uppercase tracking-widest text-indigo-900/50">
                    {item.window}
                  </p>
                  <h3 className="mt-0.5 font-display text-base font-bold uppercase tracking-wide text-indigo-900 sm:text-lg">
                    {item.title}
                  </h3>
                  {item.body && (
                    <p className="mt-1 font-body text-sm text-indigo-900/70">{item.body}</p>
                  )}
                  <p className="mt-2 inline-block rounded-full bg-coral-500/10 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-widest text-coral-500">
                    BAX Role: {item.role}
                  </p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}
