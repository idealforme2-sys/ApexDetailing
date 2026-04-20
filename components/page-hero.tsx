import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { business } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  highlights: string[];
  primaryCta?: {
    href: string;
    label: string;
  };
  secondaryCta?: {
    href: string;
    label: string;
  };
  aside?: React.ReactNode;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  highlights,
  primaryCta,
  secondaryCta,
  aside,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden pt-[9.25rem] sm:pt-[10rem] md:pt-40",
        className,
      )}
    >
      <div className="site-container">
        <div className="hero-panel overflow-hidden">
          <div className="absolute inset-0 bg-hero-radial opacity-90" />
          <div className="absolute -right-24 top-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -left-10 bottom-0 h-44 w-44 rounded-full bg-white/5 blur-3xl" />

          <div
            className={cn(
              "relative z-10 grid gap-12 p-7 sm:p-10 lg:p-14",
              aside ? "lg:grid-cols-[minmax(0,1.18fr)_minmax(320px,0.82fr)]" : "",
            )}
          >
            <Reveal>
              <div className="max-w-3xl">
                <div className="eyebrow">{eyebrow}</div>
                <h1 className="mt-6 max-w-4xl font-display text-5xl uppercase leading-[0.9] tracking-[0.08em] text-white sm:text-6xl lg:text-7xl">
                  {title}
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                  {description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {primaryCta ? (
                    <Link href={primaryCta.href} className="btn-primary">
                      {primaryCta.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : null}
                  {secondaryCta ? (
                    <Link href={secondaryCta.href} className="btn-secondary">
                      {secondaryCta.label}
                    </Link>
                  ) : null}
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  {highlights.map((item) => (
                    <span key={item} className="pill">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-4 rounded-[1.6rem] border border-white/10 bg-black/30 px-5 py-4 text-sm text-slate-200 backdrop-blur">
                  <Phone className="h-4 w-4 text-accent" />
                  <span>{business.phoneDisplay}</span>
                  <span className="hidden text-slate-500 sm:inline">/</span>
                  <span>{business.serviceArea}</span>
                </div>
              </div>
            </Reveal>

            {aside ? <Reveal delay={0.1}>{aside}</Reveal> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
