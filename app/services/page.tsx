import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, Sparkles } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { business, detailedServices, metadataByPage } from "@/lib/site-data";

export const metadata: Metadata = metadataByPage.services;

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Interior and exterior detailing designed to look premium, not rushed."
        description="Choose a full reset or target the areas your vehicle needs most. Apex Mobile Detailing is built around clean execution, convenient scheduling, and the kind of finishing detail people remember."
        primaryCta={{ href: "/contact", label: "Book a Detail" }}
        secondaryCta={{ href: business.phoneHref, label: "Call Now" }}
        highlights={["Full Detail", "Interior Care", "Exterior Wash", "Add-on upgrades"]}
        aside={
          <div className="panel p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-accent">
                  Service lineup
                </p>
                <p className="mt-3 font-display text-5xl uppercase tracking-[0.08em] text-white">
                  {detailedServices.length}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Core detailing and upgrade services for daily drivers, family vehicles,
                  and luxury interiors alike.
                </p>
              </div>
              <Sparkles className="h-10 w-10 text-accent" />
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {business.highlights.map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>
          </div>
        }
      />

      <section className="section-space">
        <div className="site-container">
          <SectionHeading
            eyebrow="Service Menu"
            title="Every service is built around results your vehicle can actually wear well."
            description="The descriptions below are written to help a customer self-select quickly without making the page feel like a list of generic packages."
          />
          <div className="mt-12 grid gap-6">
            {detailedServices.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.04}>
                <article id={service.slug} className="panel scroll-mt-32 p-6 sm:p-8">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-3xl">
                      <p className="text-xs uppercase tracking-[0.28em] text-accent">
                        Service 0{index + 1}
                      </p>
                      <h2 className="mt-4 font-display text-4xl uppercase tracking-[0.08em] text-white">
                        {service.name}
                      </h2>
                      <p className="mt-4 text-base leading-7 text-slate-200">
                        {service.description}
                      </p>
                    </div>

                  </div>

                  <div className="mt-8 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                        Benefits
                      </p>
                      <ul className="mt-5 grid gap-3">
                        {service.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex items-start gap-3 text-sm leading-7 text-slate-200"
                          >
                            <CheckCircle2 className="mt-1 h-4 w-4 text-accent" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-[1.6rem] border border-white/10 bg-black/20 p-5">
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                        Suggested add-ons
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {service.addons.map((addon) => (
                          <span key={addon} className="pill">
                            {addon}
                          </span>
                        ))}
                      </div>
                      <div className="mt-8 flex flex-wrap gap-3">
                        <Link href={business.phoneHref} className="btn-primary">
                          <Phone className="h-4 w-4" />
                          Call Now
                        </Link>
                        <Link href="/contact" className="btn-secondary">
                          Request Booking
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
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
                <div className="eyebrow">Need help choosing?</div>
                <p className="mt-6 max-w-3xl font-display text-5xl uppercase tracking-[0.08em] text-white sm:text-6xl">
                  Tell Apex what the vehicle needs and get pointed to the right service.
                </p>
                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                  If you are deciding between a full detail, interior-only work, or targeted
                  add-ons, a quick call makes the next step simple.
                </p>
              </div>
              <div className="grid gap-3">
                <Link href={business.phoneHref} className="btn-primary justify-center">
                  <Phone className="h-4 w-4" />
                  Call Now
                </Link>
                <Link href="/pricing" className="btn-secondary justify-center">
                  View Pricing
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
