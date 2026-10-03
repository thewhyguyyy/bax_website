import Image from "next/image";

export default function AthleteCard({ athlete }) {
  return (
    <div className="group flex flex-col items-center text-center">
      <div className="overflow-hidden rounded-full ring-4 ring-transparent transition-all duration-300 group-hover:ring-coral-500/30">
        <Image
          src={athlete.photo}
          alt={athlete.name}
          width={112}
          height={112}
          className="h-24 w-24 object-cover transition-transform duration-500 group-hover:scale-110 sm:h-28 sm:w-28"
        />
      </div>
      <h3 className="mt-4 font-display text-sm font-bold uppercase tracking-wide text-indigo-900">
        {athlete.name}
      </h3>
    </div>
  );
}
