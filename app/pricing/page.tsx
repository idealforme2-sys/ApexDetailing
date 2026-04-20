import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, Sparkles } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { business, metadataByPage, pricing } from "@/lib/site-data";

export const metadata: Metadata = metadataByPage.pricing;

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Clean pricing presented with the same premium feel as the service itself."
        description="The pricing layout stays clear and trust-building, with a featured offer, core services, add-ons, and a visible first-time customer incentive."
        primaryCta={{ href: "/contact", label: "Get a Quote" }}
        secondaryCta={{ href: business.phoneHref, label: "Call Now" }}
        highlights={["Full Detail Special", "$20 first-time offer", "Cars and SUVs", "Premium add-ons"]}
        aside={
          <div className="panel overflow-hidden">
            <div className="relative p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(42,168,255,0.18),transparent_38%)]" />
              <div className="relative">
                <p className="text-xs uppercase tracking-widest text-accent">Featured offer</p>
                <p className="mt-3 font-display text-3xl uppercase tracking-[0.08em] text-white">
                  {pricing.featured.title}
                </p>
                <p className="mt-4 font-display text-7xl uppercase leading-none tracking-[0.08em] text-white">
                  {pricing.featured.startingAt}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {pricing.featured.includes.map((item) => (
                    <span key={item} className="pill">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-6 overflow-hidden rounded-[1.4rem] border border-white/10 bg-black/25 p-3">
                  <Image
                    src="/APEX_Detailing.jpg"
                    alt="APEX Mobile Detailing logo"
                    width={768}
                    height={768}
                    className="h-auto w-full rounded-[1rem] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        }
      />

      <section className="section-space">
        <div className="site-container">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div className="hero-panel h-full p-8 sm:p-10">
                <div className="eyebrow">Full Detail Special</div>
                <p className="mt-6 font-display text-6xl uppercase tracking-[0.08em] text-white sm:text-7xl">
                  {pricing.featured.startingAt}
                </p>
                <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
                  A polished all-around service that covers the interior and exterior in one
                  premium visit.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {pricing.featured.includes.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.3rem] border border-white/10 bg-black/25 px-4 py-3 text-sm text-slate-100"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <div className="grid gap-6">
              <Reveal delay={0.08}>
                <div className="panel p-6">
                  <p className="text-xs uppercase tracking-widest text-accent">
                    First-time customer
                  </p>
                  <p className="mt-4 font-display text-5xl uppercase tracking-[0.08em] text-white">
                    $20 Off
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    A visible incentive for new customers who want to book with confidence.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.14}>
                <div className="panel p-6">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-7 w-7 text-accent" />
                    <p className="font-display text-2xl uppercase tracking-[0.08em] text-white">
                      Premium pricing notes
                    </p>
                  </div>
                  <ul className="mt-5 grid gap-3">
                    {[
                      "Listed pricing keeps the page easy to scan and easy to trust.",
                      "Cars and trucks or SUVs are clearly separated where applicable.",
                      "Add-ons let customers tailor the visit without cluttering the core packages.",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-300">
                        <CheckCircle2 className="mt-1 h-4 w-4 text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-6">
        <div className="site-container">
          <SectionHeading
            eyebrow="Services & Pricing"
            title="Clear, elevated pricing for the most-booked services."
            description="The structure stays simple: premium layout, straightforward pricing, and no menu-board feeling."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {pricing.services.map((service, index) => (
              <Reveal key={service.name} delay={index * 0.08}>
                <article className="panel h-full p-6 sm:p-8">
                  <p className="text-xs uppercase tracking-widest text-accent">
                    {service.name}
                  </p>
                  <div className="mt-6 grid gap-4">
                    {service.prices.map((tier) => (
                      <div
                        key={tier.label}
                        className="flex items-center justify-between rounded-[1.3rem] border border-white/10 bg-black/25 px-5 py-4"
                      >
                        <span className="text-sm uppercase tracking-wider text-slate-300">
                          {tier.label}
                        </span>
                        <span className="font-display text-4xl uppercase tracking-[0.08em] text-white">
                          {tier.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <SectionHeading
            eyebrow="Add-ons"
            title="High-value upgrades for the finishing details."
            description="These extras help customers solve specific problems or elevate the final look without overcomplicating the base pricing."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pricing.addons.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.06}>
                <article className="panel h-full p-6">
                  <p className="text-xs uppercase tracking-widest text-slate-400">Add-on</p>
                  <p className="mt-4 font-display text-3xl uppercase tracking-[0.08em] text-white">
                    {item.name}
                  </p>
                  <p className="mt-4 font-display text-5xl uppercase tracking-[0.08em] text-accent">
                    {item.value}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-4">
        <div className="site-container">
          <Reveal className="hero-panel overflow-hidden">
            <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-14">
              <div>
                <div className="eyebrow">Ready to price your appointment?</div>
                <p className="mt-6 max-w-3xl font-display text-5xl uppercase tracking-[0.08em] text-white sm:text-6xl">
                  Call for the fastest answer or send a booking request with your vehicle details.
                </p>
                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                  The pricing page is intentionally clean so customers can move from interest
                  to action without second-guessing what comes next.
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
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
