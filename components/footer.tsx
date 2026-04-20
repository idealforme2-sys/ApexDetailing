import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPinned, Phone } from "lucide-react";
import { business, featuredServices, navigation } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="site-container py-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr_0.8fr]">
          <div>
            <div className="flex items-center gap-4">
              <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/5 p-1.5">
                <Image
                  src="/APEX_Detailing.jpg"
                  alt="APEX Mobile Detailing logo"
                  width={120}
                  height={120}
                  className="h-14 w-14 rounded-[1rem] object-cover"
                />
              </div>
              <div>
                <p className="font-display text-2xl uppercase tracking-[0.14em] text-white">
                  Apex
                </p>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                  Mobile Detailing
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-7 text-slate-300">
              Premium mobile detailing for drivers who want a cleaner, sharper, more
              refined vehicle without leaving home.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={business.phoneHref} className="btn-primary">
                <Phone className="h-4 w-4" />
                {business.phoneDisplay}
              </Link>
              <Link href="/contact" className="btn-secondary">
                Book a Detail
              </Link>
            </div>
          </div>

          <div>
            <p className="font-display text-lg uppercase tracking-[0.18em] text-white">
              Explore
            </p>
            <div className="mt-5 grid gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between rounded-[1.1rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300 transition hover:border-accent/35 hover:text-white"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display text-lg uppercase tracking-[0.18em] text-white">
              Signature Services
            </p>
            <div className="mt-5 grid gap-3">
              {featuredServices.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="rounded-[1.1rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300 transition hover:border-accent/35 hover:bg-white/[0.05] hover:text-white"
                >
                  {service.name}
                </Link>
              ))}
            </div>

            <div className="mt-6 rounded-[1.6rem] border border-accent/25 bg-accent/10 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-accent">Service Area</p>
              <p className="mt-2 text-sm leading-7 text-slate-200">{business.serviceArea}</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">{business.offer}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 shadow-soft sm:p-5">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-accent">Google listing</p>
              <p className="mt-2 font-display text-3xl uppercase tracking-[0.08em] text-white">
                Find Apex
              </p>
            </div>
            <Link
              href={business.googleMapsHref}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <MapPinned className="h-4 w-4" />
              Open in Maps
            </Link>
          </div>

          <div className="overflow-hidden rounded-[1.6rem] border border-white/10">
            <iframe
              title="Apex Mobile Detailing Google Map"
              src={business.googleMapsEmbedHref}
              className="h-[320px] w-full bg-black"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={business.instagramHref}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Apex Mobile Detailing on Instagram"
              className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-accent/35 hover:bg-accent/10 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4.25" />
                <circle cx="17.4" cy="6.6" r="0.8" fill="currentColor" stroke="none" />
              </svg>
            </Link>

            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[0.68rem] uppercase tracking-[0.22em] text-slate-400">
              Franklin and surrounding areas
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[0.68rem] uppercase tracking-[0.22em] text-slate-400">
              Premium mobile auto detailing
            </span>
          </div>

          <Link
            href={business.creatorHref}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-[0.72rem] uppercase tracking-[0.22em] whitespace-nowrap"
          >
            <span className="text-slate-500 transition-colors duration-150 group-hover:text-slate-400">
              Created by
            </span>
            <span className="text-white transition-colors duration-150 group-hover:text-accent">
              Creative
            </span>
            <span className="text-accent transition-colors duration-150 group-hover:text-white">
              Webflow Co.
            </span>
            <ArrowUpRight className="h-3.5 w-3.5 text-slate-500 transition-colors duration-150 group-hover:text-white" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
