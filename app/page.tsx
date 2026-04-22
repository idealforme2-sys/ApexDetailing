import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MapPin,
  Phone,
} from "lucide-react";
import { AutoImageGallery } from "@/components/auto-image-gallery";
import { FAQList } from "@/components/faq-list";
import { HomeHero } from "@/components/home-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TrustCarousel } from "@/components/trust-carousel";
import {
  beforeAfterGallery,
  business,
  faqs,
  featuredServices,
  howItWorks,
  metadataByPage,
  pricing,
  whyChooseApex,
} from "@/lib/site-data";

export const metadata: Metadata = metadataByPage.home;

export default function HomePage() {
  const [finishStandard, convenienceStandard, trustStandard, problemAreas] =
    whyChooseApex;
  const processTags = ["Select", "Confirm", "Hand-back"];

  return (
    <>
      <HomeHero />

      <TrustCarousel />

      <section className="section-space pt-8">
        <div className="site-container">
          <SectionHeading
            eyebrow="Featured Services"
            title="Premium care for the parts of your vehicle people actually notice."
            description="Built around cleaner interiors, sharper exteriors, and finishing details that noticeably lift the whole vehicle."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredServices.map((service, index) => (
              <Reveal key={service.name} delay={index * 0.08}>
                <article className="panel h-full p-6">
                  <p className="text-xs uppercase tracking-widest text-accent">
                    {service.name}
                  </p>
                  <p className="mt-4 text-base leading-7 text-slate-200">
                    {service.description}
                  </p>
                  <ul className="mt-6 grid gap-3">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-white transition hover:text-accent"
                  >
                    View Service
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <article className="hero-panel overflow-hidden p-8 sm:p-10">
                <div className="eyebrow">Why Choose Apex</div>
                <div className="mt-6 grid gap-8 items-start">
                  <div>
                    <h2 className="font-display text-4xl uppercase tracking-[0.08em] text-white sm:text-5xl">
                      Why drivers book Apex instead of settling for good enough.
                    </h2>
                    <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
                      Mobile service is easy to promise. The harder part is making the
                      vehicle feel carefully finished when the appointment is over.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <span className="pill">{finishStandard.label}</span>
                      <span className="pill">{business.serviceArea}</span>
                      <span className="pill">Luxury vehicle friendly</span>
                    </div>

                    <article className="mt-8 rounded-[2rem] border border-white/10 bg-black/30 p-6">
                      <p className="text-[0.68rem] uppercase tracking-widest text-accent">
                        {finishStandard.label}
                      </p>
                      <p className="mt-4 font-display text-4xl uppercase tracking-[0.08em] text-white">
                        {finishStandard.title}
                      </p>
                      <p className="mt-5 max-w-lg text-base leading-8 text-slate-300">
                        {finishStandard.description}
                      </p>
                    </article>
                  </div>
                </div>
              </article>
            </Reveal>
            <div className="grid gap-6">
              <Reveal delay={0.06}>
                <article className="panel overflow-hidden p-6 sm:p-7">
                  <p className="text-xs uppercase tracking-widest text-accent">
                    {convenienceStandard.label}
                  </p>
                  <p className="mt-4 font-display text-3xl uppercase tracking-[0.08em] text-white">
                    {convenienceStandard.title}
                  </p>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                    {convenienceStandard.description}
                  </p>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {[
                      {
                        label: trustStandard.label,
                        value: trustStandard.description,
                      },
                      {
                        label: problemAreas.label,
                        value: problemAreas.description,
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-[1.45rem] border border-white/10 bg-black/25 p-5"
                      >
                        <p className="text-[0.68rem] uppercase tracking-widest text-slate-500">
                          {item.label}
                        </p>
                        <p className="mt-3 text-sm leading-7 text-slate-200">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    "Home appointments",
                    "Interior and exterior",
                    "Tesla and Range Rover friendly",
                    "$20 off for first-time customers",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className={
                        index === 3
                          ? "rounded-[1.55rem] border border-accent/35 bg-accent/10 px-5 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-white"
                          : "rounded-[1.55rem] border border-white/10 bg-white/[0.04] px-5 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-slate-200"
                      }
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Pricing Preview"
              title="Clear pricing, strong value, no bloated package board."
              description="One featured full detail, straightforward starting prices, and useful upgrades if your vehicle needs more attention."
            />
            <Link href="/pricing" className="btn-secondary hidden lg:inline-flex">
              View Full Pricing
            </Link>
          </div>

          <div className="mt-12 grid gap-6 xl:grid-cols-[1.18fr_0.82fr]">
            <Reveal>
              <article className="hero-panel overflow-hidden p-0">
                <div className="grid gap-px bg-white/10 lg:grid-cols-[0.8fr_1.2fr]">
                  <div className="bg-[radial-gradient(circle_at_top_left,rgba(42,168,255,0.2),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-8 sm:p-10">
                    <p className="text-xs uppercase tracking-widest text-accent">
                      {pricing.featured.title}
                    </p>
                    <p className="mt-5 font-display text-7xl uppercase leading-none tracking-[0.08em] text-white">
                      {pricing.featured.startingAt}
                    </p>
                    <p className="mt-5 max-w-md text-base leading-7 text-slate-300">
                      A strong single visit when you want the cabin refreshed and the
                      exterior handled properly.
                    </p>
                    <div className="mt-6 inline-flex rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-[0.68rem] uppercase tracking-widest text-white">
                      {business.offer}
                    </div>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link href="/contact" className="btn-primary">
                        Book a Detail
                      </Link>
                      <Link href={business.phoneHref} className="btn-secondary">
                        <Phone className="h-4 w-4" />
                        Call Now
                      </Link>
                    </div>
                  </div>

                  <div className="bg-[#060a0e] p-8 sm:p-10">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-xs uppercase tracking-widest text-slate-400">
                        What that visit covers
                      </p>
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-slate-300">
                        Interior + exterior
                      </span>
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {pricing.featured.includes.map((item, index) => (
                        <div
                          key={item}
                          className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] px-4 py-4"
                        >
                          <p className="text-[0.68rem] uppercase tracking-widest text-slate-500">
                            {String(index + 1).padStart(2, "0")}
                          </p>
                          <p className="mt-3 text-sm uppercase tracking-widest text-white">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 overflow-hidden rounded-[1.7rem] border border-white/10">
                      <div className="grid gap-px bg-white/10">
                        {pricing.services.map((service) => (
                          <div
                            key={service.name}
                            className="grid gap-4 bg-black/25 p-5 sm:grid-cols-[1fr_auto_auto] sm:items-center"
                          >
                            <p className="font-display text-2xl uppercase tracking-[0.08em] text-white">
                              {service.name}
                            </p>
                            {service.prices.map((price) => (
                              <div key={price.label} className="sm:text-right">
                                <p className="text-[0.68rem] uppercase tracking-wider text-slate-500">
                                  {price.label}
                                </p>
                                <p className="mt-1 text-lg text-slate-100">{price.value}</p>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>

            <div className="grid gap-6">
              <Reveal delay={0.08}>
                <article className="panel overflow-hidden p-6">
                  <p className="text-xs uppercase tracking-widest text-accent">
                    First visit advantage
                  </p>
                  <p className="mt-4 font-display text-5xl uppercase tracking-[0.08em] text-white">
                    $20 Off
                  </p>
                  <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
                    A clean first-booking incentive for drivers who want to try Apex
                    without committing to a bigger jump in price.
                  </p>
                  <div className="mt-6 rounded-[1.3rem] border border-white/10 bg-black/25 px-4 py-4 text-[0.7rem] uppercase tracking-widest text-slate-300">
                    Mention it when you call or request a quote
                  </div>
                </article>
              </Reveal>
              <Reveal delay={0.14}>
                <article className="panel overflow-hidden p-0">
                  <div className="border-b border-white/10 px-6 py-5">
                    <p className="text-xs uppercase tracking-widest text-slate-400">
                      Popular add-ons
                    </p>
                  </div>
                  <div className="grid gap-px bg-white/10">
                    {pricing.addons.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between bg-black/25 px-6 py-4 text-sm text-slate-100"
                      >
                        <span>{item.name}</span>
                        <span className="font-semibold text-accent">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            </div>
          </div>

          <div className="mt-6 lg:hidden">
            <Link href="/pricing" className="btn-secondary">
              View Full Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Before / After Preview"
              title="A clearer look at the condition going in and the finish coming out."
              description="The full photo set rotates through on its own, so people can see real results without the page turning into a cluttered gallery wall."
            />
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-stretch">
            <Reveal className="lg:h-full min-w-0">
              <AutoImageGallery
                eyebrow="Before"
                title="What the vehicle can look like before Apex gets to work."
                description="Road film, neglect, dull surfaces, messy trim, and the kind of tired presentation that drags the whole vehicle down."
                detail="Full set of uploaded before photos"
                images={beforeAfterGallery.before}
              />
            </Reveal>

            <Reveal delay={0.08} className="lg:h-full min-w-0">
              <AutoImageGallery
                eyebrow="After"
                title="What the finish looks like after the detail is complete."
                description="Sharper reflections, cleaner lines, fresher presentation, and the kind of reset that makes the vehicle feel worth stepping back into."
                detail="Full set of uploaded finished-result photos"
                images={beforeAfterGallery.after}
                accent="after"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="site-container">
          <Reveal className="hero-panel overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.018)_1px,transparent_1px),radial-gradient(circle_at_top_left,rgba(42,168,255,0.16),transparent_38%)] bg-[size:68px_68px,68px_68px,auto] opacity-35" />
            <div className="relative grid gap-8 p-6 sm:p-8 xl:grid-cols-[0.96fr_1.04fr] xl:items-start xl:p-10">
              <div>
                <div className="eyebrow">Service Area / Process</div>
                <h2 className="mt-6 max-w-2xl font-display text-[2.65rem] uppercase tracking-[0.08em] text-white sm:text-[3.4rem]">
                  Franklin bookings that land where the car already is.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
                  Book the work, send the location, and let Apex handle the detail without
                  turning the day into a shop drop-off.
                </p>

                <div className="mt-7 grid gap-4 lg:grid-cols-[1.12fr_0.88fr]">
                  <div className="rounded-[2rem] border border-accent/20 bg-[radial-gradient(circle_at_top_left,rgba(42,168,255,0.2),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-6">
                    <p className="text-[0.68rem] uppercase tracking-widest text-accent">
                      Primary coverage
                    </p>
                    <div className="mt-4 inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-3 text-slate-100">
                      <MapPin className="h-4.5 w-4.5 text-accent" />
                      <span className="text-xs uppercase tracking-wider">
                        {business.serviceArea}
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      Home driveways, garage-front appointments, and nearby local stops
                      where the vehicle can stay parked while the detail gets handled.
                    </p>
                    <div className="mt-6 grid gap-3 lg:grid-cols-2">
                      <div className="rounded-[1.25rem] border border-white/10 bg-black/25 p-4">
                        <p className="text-[0.63rem] uppercase tracking-widest text-slate-500">
                          Built for
                        </p>
                        <p className="mt-2 font-sans text-[0.7rem] uppercase tracking-tighter text-white sm:text-sm sm:tracking-tight">
                          Home appointments
                        </p>
                      </div>
                      <div className="rounded-[1.25rem] border border-white/10 bg-black/25 p-4">
                        <p className="text-[0.63rem] uppercase tracking-widest text-slate-500">
                          Works well at
                        </p>
                        <p className="mt-2 font-sans text-[0.7rem] uppercase tracking-tighter text-white sm:text-sm sm:tracking-tight">
                          Driveways and local stops
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-white/10 bg-black/30 p-6">
                    <p className="text-[0.68rem] uppercase tracking-widest text-slate-500">
                      Mobile appointment value
                    </p>
                    <p className="mt-4 font-display text-3xl uppercase tracking-[0.08em] text-white">
                      Keep the vehicle close.
                    </p>
                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      No extra drive across town, no waiting around for pickup, and no
                      adding a shop run just to get a premium detail.
                    </p>
                    <div className="mt-6 grid gap-3">
                      {[
                        "No shop drop-off",
                        "No pickup loop later",
                        "Still a polished hand-back",
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-[0.72rem] uppercase tracking-wider text-slate-200"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary">
                    Book a Detail
                  </Link>
                  <Link href={business.phoneHref} className="btn-secondary">
                    <Phone className="h-4 w-4" />
                    Call Now
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 xl:pt-1">
                <div className="flex items-center justify-between rounded-[1.65rem] border border-white/10 bg-black/25 px-5 py-4">
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-widest text-accent">
                      Appointment route
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Three short beats from quote request to finished hand-back.
                    </p>
                  </div>
                  <div className="hidden items-center gap-2 sm:flex">
                    {[0, 1, 2].map((item) => (
                      <span
                        key={item}
                        className={
                          item === 1
                            ? "h-2 w-10 rounded-full bg-gradient-to-r from-accent to-accent-strong"
                            : "h-2 w-2 rounded-full bg-white/15"
                        }
                      />
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="grid gap-4">
                    {howItWorks.map((step, index) => (
                      <article
                        key={step.title}
                        className={
                          index === 1
                            ? "relative overflow-hidden rounded-[1.85rem] border border-accent/20 bg-[radial-gradient(circle_at_top_right,rgba(42,168,255,0.2),transparent_46%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5 sm:p-6"
                            : "relative overflow-hidden rounded-[1.85rem] border border-white/10 bg-white/[0.04] p-5 sm:p-6"
                        }
                      >
                        <div className="flex items-start gap-4">
                          <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/35 font-display text-lg uppercase tracking-[0.08em] text-white shadow-soft">
                            {String(index + 1).padStart(2, "0")}
                          </div>
                          <div>
                            <p className="text-[0.68rem] uppercase tracking-widest text-accent">
                              {processTags[index]}
                            </p>
                            <p className="mt-2 font-display text-[1.7rem] uppercase tracking-[0.08em] text-white sm:text-[1.95rem]">
                              {step.title}
                            </p>
                            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.6rem] border border-white/10 bg-black/25 p-5">
                    <p className="text-[0.68rem] uppercase tracking-widest text-accent">
                      Best fit for
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      Driveways, home garages, residential lots, and daytime local stops
                      where the vehicle can stay put while Apex handles the detail.
                    </p>
                  </div>
                  <div className="rounded-[1.6rem] border border-white/10 bg-black/25 p-5">
                    <p className="text-[0.68rem] uppercase tracking-widest text-accent">
                      Quickest way in
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      Call when you want the fastest lock-in. Use the form when you want to
                      send the vehicle size, service choice, and preferred day in one shot.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions customers ask before they book."
            description="The essentials are answered here so booking feels straightforward and low-friction."
          />
          <div className="mt-12">
            <FAQList items={faqs} />
          </div>
        </div>
      </section>

      <section className="section-space pt-6">
        <div className="site-container">
          <Reveal className="hero-panel overflow-hidden">
            <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-14">
              <div>
                <div className="eyebrow">Ready to book?</div>
                <p className="mt-6 max-w-3xl font-display text-5xl uppercase tracking-[0.08em] text-white sm:text-6xl">
                  Premium mobile detailing, at your convenience.
                </p>
                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                  If you want a cleaner, sharper, better-finished vehicle without leaving
                  home, Apex is ready when you are.
                </p>
              </div>
              <div className="grid gap-3">
                <Link href={business.phoneHref} className="btn-primary justify-center">
                  <Phone className="h-4 w-4" />
                  Call Now
                </Link>
                <Link href="/contact" className="btn-secondary justify-center">
                  Get a Quote
                </Link>
                <div className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-xs uppercase tracking-wider text-slate-300">
                  <Clock3 className="h-4 w-4 text-accent" />
                  {business.offer}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
