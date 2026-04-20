"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type GalleryImage = {
  src: string;
  alt: string;
};

type AutoImageGalleryProps = {
  eyebrow: string;
  title: string;
  description: string;
  detail: string;
  images: GalleryImage[];
  accent?: "before" | "after";
  intervalMs?: number;
};

export function AutoImageGallery({
  eyebrow,
  title,
  description,
  detail,
  images,
  accent = "before",
  intervalMs = 3200,
}: AutoImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const activeImage = images[activeIndex];

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, prefersReducedMotion ? intervalMs * 2 : intervalMs);

    return () => window.clearInterval(timer);
  }, [images.length, intervalMs, prefersReducedMotion]);

  return (
    <article className="hero-panel overflow-hidden lg:h-full flex flex-col min-w-0">
      <div className="flex flex-col lg:h-full bg-white/10 gap-px">
        <div
          className={cn(
            "p-6 sm:p-7 lg:flex-1",
            accent === "after"
              ? "bg-[radial-gradient(circle_at_top_left,rgba(42,168,255,0.24),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]"
              : "bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03)),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_28%)]",
          )}
        >
          <p
            className={cn(
              "text-[0.65rem] uppercase tracking-widest",
              accent === "after" ? "text-accent" : "text-slate-300",
            )}
          >
            {eyebrow}
          </p>
          <p className="mt-3 font-display text-3xl uppercase tracking-[0.08em] text-white sm:text-4xl">
            {title}
          </p>
          <p className="mt-4 max-w-md text-xs leading-6 text-slate-400">{description}</p>
        </div>

        <div className="bg-[#05080c] p-4 sm:p-5 shrink-0">
          <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 bg-black/40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(42,168,255,0.14),transparent_42%),linear-gradient(180deg,transparent_40%,rgba(2,4,6,0.82)_100%)]" />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImage.src}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.985 }}
                transition={{
                  duration: prefersReducedMotion ? 0.2 : 0.45,
                  ease: "easeOut",
                }}
                className="absolute inset-0"
              >
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  sizes="(max-width: 1279px) 100vw, 42vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(2,4,6,0.95)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between gap-4 border-t border-white/10 bg-black/40 px-5 py-4 backdrop-blur-md">
              <span className="text-[0.68rem] uppercase tracking-widest text-slate-100">
                {accent === "after" ? "Finish result" : "Starting condition"}
              </span>
            </div>
          </div>

          <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "group relative aspect-[4/5] w-[4.9rem] shrink-0 overflow-hidden rounded-[1.2rem] border transition duration-300 sm:w-[5.4rem]",
                  index === activeIndex
                    ? "border-accent/50 shadow-glow"
                    : "border-white/10 opacity-65 hover:border-white/20 hover:opacity-100",
                )}
                aria-label={`Show ${eyebrow.toLowerCase()} image ${index + 1}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="90px"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(2,4,6,0.9)_100%)]" />
                <span className="absolute bottom-2 left-2 text-[0.6rem] uppercase tracking-widest text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
