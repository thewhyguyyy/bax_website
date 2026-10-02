import Image from "next/image";

export default function PersonCard({ person, compact = false }) {
  return (
    <div className="flex flex-col items-center text-center">
      <Image
        src={person.photo}
        alt={person.name}
        width={112}
        height={112}
        className="h-24 w-24 rounded-full object-cover sm:h-28 sm:w-28"
      />
      <h3 className="mt-4 font-display text-sm font-bold uppercase tracking-wide text-indigo-900">
        {person.name}
        {person.advisor && <span aria-hidden="true">*</span>}
      </h3>
      <p className="mt-1 font-body text-xs font-semibold text-purple-600">{person.role}</p>
      {!compact && person.category && (
        <p className="mt-2 font-display text-[10px] font-bold uppercase tracking-widest text-coral-500">
          {person.category}
        </p>
      )}
      {!compact && (
        <p className="mt-2 font-body text-xs leading-relaxed text-indigo-900/60">
          {person.descriptor}
        </p>
      )}
    </div>
  );
}
