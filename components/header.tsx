"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Menu, Phone, Sparkles, Star, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { announcementItems, business, navigation } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="relative overflow-hidden border-b border-white/10 bg-[#020407]/90 backdrop-blur-2xl">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(42,168,255,0.12),transparent_28%,transparent_72%,rgba(255,255,255,0.08))]" />
          <div className="absolute inset-y-0 left-[-18%] w-40 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer-x" />
          <div className="site-container relative flex min-h-12 items-center overflow-hidden">
            <div className="marquee-track flex min-w-max items-center gap-0 py-2.5">
              {[...announcementItems, ...announcementItems].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="inline-flex items-center gap-3 pr-8 text-[0.68rem] uppercase tracking-[0.28em] text-slate-200 sm:text-[0.72rem]"
                >
                  {index % 3 === 0 ? (
                    <Sparkles className="h-3.5 w-3.5 text-accent" />
                  ) : index % 3 === 1 ? (
                    <MapPin className="h-3.5 w-3.5 text-accent" />
                  ) : (
                    <Star className="h-3.5 w-3.5 fill-current text-accent" />
                  )}
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          className={cn(
            "transition-all duration-300",
            scrolled
              ? "border-b border-white/10 bg-[#05080c]/85 backdrop-blur-2xl"
              : "border-b border-white/10 bg-[#05080c]/94 backdrop-blur-2xl lg:border-transparent lg:bg-transparent lg:backdrop-blur-0",
          )}
        >
          <div className="site-container relative flex items-center justify-between gap-4 py-3.5 sm:gap-6 sm:py-4">
            <Link href="/" className="group flex min-w-0 items-center gap-4">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1 shadow-soft">
                <Image
                  src="/APEX_Detailing.jpg"
                  alt="APEX Mobile Detailing logo"
                  width={120}
                  height={120}
                  priority
                  className="h-11 w-11 rounded-xl object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="truncate font-display text-xl uppercase tracking-[0.16em] text-white">
                  Apex
                </p>
                <p className="truncate text-xs uppercase tracking-[0.28em] text-slate-400">
                  Mobile Detailing
                </p>
              </div>
            </Link>

            <div className="hidden flex-1 items-center justify-end gap-4 lg:flex">
              <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2 py-2 backdrop-blur-xl">
                {navigation.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === item.href
                      : pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "rounded-full px-4 py-2 text-sm uppercase tracking-[0.18em] text-slate-300 transition-all duration-300 hover:bg-white/5 hover:text-white",
                        active &&
                          "bg-white/8 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="flex items-center gap-3 rounded-full border border-white/10 bg-black/25 px-3 py-2 backdrop-blur-xl">
                <Link href="/contact" className="btn-secondary">
                  Get a Quote
                </Link>
                <Link href={business.phoneHref} className="btn-primary">
                  <Phone className="h-4 w-4" />
                  Call Now
                </Link>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-accent/50 hover:bg-white/10 lg:hidden"
              aria-expanded={open}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-4 top-[7rem] z-40 max-h-[calc(100vh-8rem)] overflow-y-auto rounded-[1.8rem] border border-white/10 bg-[#070b10]/95 p-5 shadow-glow backdrop-blur-xl sm:top-[7.3rem] lg:hidden"
          >
            <nav className="grid gap-2">
              {navigation.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === item.href
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-[1.1rem] px-4 py-3 font-display text-lg uppercase tracking-[0.08em] text-slate-200 transition hover:bg-white/5 hover:text-white",
                      active && "bg-white/8 text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-4 grid gap-3">
              <Link href="/contact" className="btn-secondary justify-center">
                Get a Quote
              </Link>
              <Link href={business.phoneHref} className="btn-primary justify-center">
                <Phone className="h-4 w-4" />
                Call Now
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
