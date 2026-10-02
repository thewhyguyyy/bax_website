import Image from "next/image";

export default function LogoStrip({ items }) {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
      {items.map((item) => {
        const img = (
          <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-white p-4 shadow-md ring-1 ring-indigo-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:h-32 sm:w-32">
            <Image
              src={item.logo}
              alt={item.name}
              width={112}
              height={112}
              className="h-full w-full object-contain"
            />
          </div>
        );
        return (
          <li key={item.slug}>
            {item.url ? (
              <a href={item.url} target="_blank" rel="noopener noreferrer" aria-label={item.name}>
                {img}
              </a>
            ) : (
              img
            )}
          </li>
        );
      })}
    </ul>
  );
}
