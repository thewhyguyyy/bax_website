import Image from "next/image";

export default function LogoStrip({ items }) {
  return (
    <ul className="grid grid-cols-3 justify-items-center gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-8">
      {items.map((item) => {
        const content = (
          <div className="flex w-24 flex-col items-center gap-2 sm:w-36">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white p-2.5 shadow-md ring-1 ring-indigo-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:h-32 sm:w-32 sm:p-4">
              <Image
                src={item.logo}
                alt={item.name}
                width={112}
                height={112}
                className="h-full w-full object-contain"
              />
            </div>
            <p className="text-center font-body text-[11px] font-medium leading-tight text-indigo-900/70 sm:text-xs">
              {item.name}
            </p>
          </div>
        );
        return (
          <li key={item.slug}>
            {item.url ? (
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {content}
              </a>
            ) : (
              content
            )}
          </li>
        );
      })}
    </ul>
  );
}
