import Image from "next/image";

export default function LogoStrip({ items }) {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-10 sm:gap-14">
      {items.map((item) => {
        const img = (
          <Image
            src={item.logo}
            alt={item.name}
            width={88}
            height={88}
            className="h-16 w-16 object-contain grayscale transition-all duration-300 hover:scale-110 hover:grayscale-0 sm:h-20 sm:w-20"
          />
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
