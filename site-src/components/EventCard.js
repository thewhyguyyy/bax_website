import Image from "next/image";

export default function EventCard({ event }) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-lavender-50 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-indigo-900/10">
        {event.image ? (
          <Image
            src={event.image}
            alt={event.imageAlt ?? event.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center font-body text-xs text-indigo-900/40"
            aria-hidden="true"
          >
            [PLACEHOLDER: event image]
          </div>
        )}
        {event.year && (
          <span className="absolute right-3 top-3 rounded-full bg-indigo-900 px-3 py-1 font-display text-xs font-bold text-white">
            {event.year}
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display text-base font-bold uppercase tracking-wide text-indigo-900">
          {event.title}
        </h3>
        <p className="mt-2 font-body text-sm text-indigo-900/60">
          {event.blurb ?? "[PLACEHOLDER: event description]"}
        </p>
      </div>
    </article>
  );
}
