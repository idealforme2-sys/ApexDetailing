import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { business, pricing } from "@/lib/site-data";

export function HomeHero() {
  return (
    <section className="relative -mt-28 flex min-h-[95vh] items-start overflow-hidden pb-16 pt-[8.15rem] md:-mt-32 md:pt-[8.7rem]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/premium_hero_bg_backup.png"
          alt="Premium luxury detailing"
          fill
          priority
          className="animate-image-zoom object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,4,6,0.95)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,4,6,0.95)_0%,transparent_20%,transparent_80%,rgba(2,4,6,1)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,4,6,0.9)_0%,transparent_50%,rgba(2,4,6,0.3)_100%)]" />
      </div>

      <div className="site-container relative z-10 w-full">
        <div className="grid items-start gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 xl:grid-cols-[1.3fr_0.7fr]">
          <Reveal className="flex flex-col justify-start py-4 lg:py-8">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-accent backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(42,168,255,0.8)]" />
              Franklin mobile detailing
            </div>

            <h1 className="mt-8 max-w-4xl font-display text-5xl uppercase leading-[0.95] tracking-[0.06em] text-white sm:text-7xl lg:text-[4.5rem] xl:text-8xl">
              Premium mobile detailing with a finish that feels{" "}
              <span className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
                showroom fresh.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Apex brings refined interior and exterior detailing to your driveway, so
              your vehicle looks sharper without taking time out of your day.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={business.phoneHref}
                className="btn-primary group px-8 py-4 text-sm shadow-[0_0_30px_-5px_rgba(42,168,255,0.4)]"
              >
                Call Now
                <Phone className="h-4 w-4 transition-transform group-hover:scale-110" />
              </Link>
              <Link
                href="/contact"
                className="btn-secondary group border-white/10 bg-white/5 px-8 py-4 text-sm backdrop-blur-md hover:bg-white/10"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              {[business.serviceArea, ...business.highlights].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.7rem] uppercase tracking-[0.2em] text-slate-200 backdrop-blur-md transition-colors hover:bg-white/10"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="flex flex-col justify-start pt-4 lg:pt-12">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 p-6 shadow-2xl backdrop-blur-xl transition-colors hover:border-white/20 sm:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(42,168,255,0.15),transparent_60%)] opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10">
                  <p className="text-[0.65rem] uppercase tracking-[0.28em] text-accent">
                    From the feed
                  </p>
                  <p className="mt-3 font-display text-2xl uppercase tracking-[0.08em] text-white">
                    Franklin driveways. Finished right.
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Recent gloss shots, interior cleanups, and hand-backs from the kind of
                    work people are actually booking Apex for.
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[1.1rem] border border-white/10 shadow-glow">
                      <Image
                        src="/APEX_Detailing.jpg"
                        alt="APEX Mobile Detailing logo"
                        fill
                        sizes="64px"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <Link
                        href={business.instagramHref}
                        target="_blank"
                        rel="noreferrer"
                        className="group/link inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-accent"
                      >
                        @apexmobiledetailing26
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                      </Link>
                      <p className="mt-1 text-xs text-slate-400">Check us out</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_60%)]" />
                <div className="relative z-10 flex h-full flex-col justify-between gap-6">
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.28em] text-slate-400">
                      Full detail special
                    </p>
                    <p className="mt-3 font-display text-4xl uppercase tracking-[0.08em] text-white">
                      {pricing.featured.startingAt}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Interior deep clean, exterior hand wash, tire shine, and streak-free
                      windows.
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-5">
                    <p className="text-[0.65rem] uppercase tracking-[0.28em] text-accent">
                      {business.offer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
