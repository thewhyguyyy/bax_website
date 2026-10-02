"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function Gallery({ images }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);

  const open = (index, event) => {
    triggerRef.current = event.currentTarget;
    setActiveIndex(index);
  };

  const close = () => {
    setActiveIndex(null);
    triggerRef.current?.focus();
  };

  useEffect(() => {
    if (activeIndex === null) return;
    closeButtonRef.current?.focus();

    function onKeyDown(e) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  return (
    <>
      <div className="columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={(e) => open(i, e)}
            className="block w-full overflow-hidden rounded-xl"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={480}
              height={600}
              loading="lazy"
              className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={images[activeIndex].alt}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-indigo-900/95 p-4"
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={close}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
          >
            <X size={24} />
          </button>
          <Image
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            width={1200}
            height={900}
            className="max-h-[85vh] w-auto max-w-full rounded-xl object-contain"
          />
        </div>
      )}
    </>
  );
}
