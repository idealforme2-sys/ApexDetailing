"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Quote, Star } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { business, trustShowcaseSlides } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function TrustCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % trustShowcaseSlides.length);
    }, prefersReducedMotion ? 5600 : 4800);

    return () => window.clearInterval(timer);
  }, [prefersReducedMotion]);

  const activeSlide = trustShowcaseSlides[activeIndex];

  return (
    <section className="py-10 md:py-14">
      <div className="site-container">
        <Reveal className="hero-panel overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(42,168,255,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_22%)]" />
          <div className="relative grid gap-8 p-5 sm:p-6 lg:grid-cols-[0.66fr_1.34fr] lg:items-start lg:p-7">
            <div className="flex flex-col gap-8">
              <div>
                <div className="eyebrow">What customers notice</div>
                <h2 className="mt-4 max-w-md font-display text-[2rem] uppercase tracking-[0.08em] text-white sm:text-[2.55rem]">
                  What gets mentioned after the hand-back.
                </h2>
                <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">
                  Punctual, careful with the vehicle, and noticeably sharper once the work
                  is done.
                </p>
              </div>

              <div className="grid gap-2">
                {trustShowcaseSlides.map((slide, index) => (
                  <button
                    key={slide.source}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "group rounded-[1.1rem] border px-3.5 py-3 text-left transition duration-300",
                      index === activeIndex
                        ? "border-accent/40 bg-accent/10 shadow-glow"
                        : "border-white/10 bg-black/20 hover:border-white/20 hover:bg-white/[0.04]",
                    )}
                    aria-label={`Show trust story ${index + 1}`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs uppercase tracking-[0.28em] text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">
                        {slide.source}
                      </span>
                    </div>
                    <p className="mt-2 font-display text-lg uppercase tracking-[0.08em] text-white sm:text-[1.25rem]">
                      {slide.title}
                    </p>
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/reviews" className="btn-secondary">
                  Read Reviews
                </Link>
                <Link href={business.phoneHref} className="btn-primary">
                  Call Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative h-[26rem] w-full lg:h-[32rem]">
              <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_bottom_left,rgba(42,168,255,0.16),transparent_38%)] blur-2xl" />
              <div className="relative flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 shadow-soft sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-accent">
                      Review spotlight
                    </p>
                    <p className="mt-2 flex items-center gap-1 text-accent">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} className="h-4 w-4 fill-current" />
                      ))}
                    </p>
                  </div>
                  <Quote className="h-8 w-8 text-slate-500" />
                </div>

                <div className="relative mt-4 flex-1 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSlide.source}
                      initial={{ opacity: 0, y: 24, scale: 0.985 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -16, scale: 0.985 }}
                      transition={{
                        duration: prefersReducedMotion ? 0.2 : 0.45,
                        ease: "easeOut",
                      }}
                      className="absolute inset-0 flex h-full flex-col"
                    >
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                        {activeSlide.source}
                      </p>

                      <div className="mt-3 rounded-[1.45rem] border border-accent/20 bg-[linear-gradient(135deg,rgba(42,168,255,0.16),rgba(255,255,255,0.04))] p-4 sm:p-5">
                        <p className="font-display text-[2rem] uppercase leading-tight tracking-[0.08em] text-white sm:text-[2.6rem]">
                          &ldquo;{activeSlide.quote}&rdquo;
                        </p>
                      </div>

                      <p className="mt-4 max-w-2xl text-[0.68rem] uppercase tracking-[0.24em] text-slate-400">
                        {activeSlide.title}
                      </p>

                      <div className="mt-4 grid gap-2.5 sm:grid-cols-3">
                        {activeSlide.chips.map((chip) => (
                          <div
                            key={chip}
                            className="rounded-[1rem] border border-white/10 bg-black/20 px-3.5 py-2.5 text-[0.64rem] uppercase tracking-[0.24em] text-slate-200"
                          >
                            {chip}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  {trustShowcaseSlides.map((slide, index) => (
                    <button
                      key={slide.source}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={cn(
                        "h-2.5 rounded-full transition-all duration-300",
                        index === activeIndex
                          ? "w-14 bg-gradient-to-r from-accent to-accent-strong"
                          : "w-8 bg-white/12 hover:bg-white/25",
                      )}
                      aria-label={`Show trust slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
