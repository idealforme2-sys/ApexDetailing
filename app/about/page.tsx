import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { business, metadataByPage, reviews } from "@/lib/site-data";

export const metadata: Metadata = metadataByPage.about;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Apex"
        title="A premium mobile detailing service built around convenience, quality, and trust."
        description="Apex Mobile Detailing is positioned for customers who want their vehicle to feel cared for again, without sacrificing time or settling for a rushed-looking finish."
        primaryCta={{ href: "/contact", label: "Book a Detail" }}
        secondaryCta={{ href: business.phoneHref, label: "Call Now" }}
        highlights={["Detail-focused", "Professional", "Mobile and convenient", "Trusted locally"]}
        aside={
          <div className="panel overflow-hidden">
            <div className="p-5">
              <p className="text-xs uppercase tracking-widest text-accent">Brand presence</p>
              <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/25 p-3">
                <Image
                  src="/APEX_Detailing.jpg"
                  alt="APEX Mobile Detailing logo"
                  width={768}
                  height={768}
                  className="h-auto w-full rounded-[1.1rem] object-cover"
                />
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-300">
                The business is framed around making vehicles feel clean, polished, and ready
                to enjoy again, right where the customer is.
              </p>
            </div>
          </div>
        }
      />

      <section className="section-space">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <Reveal>
              <SectionHeading
                eyebrow="Positioning"
                title="Personal enough to feel local. Refined enough to feel premium."
                description="The About page stays concise and credible. It avoids inflated backstory and instead focuses on the actual promise of the business."
              />
            </Reveal>
            <Reveal delay={0.08}>
              <div className="panel p-6 sm:p-8">
                <p className="text-base leading-8 text-slate-200">
                  Apex Mobile Detailing is built around a simple idea: high-quality vehicle
                  care should not require customers to rearrange their day. The service comes
                  to the customer, the work is detail-focused, and the end result is a vehicle
                  that feels cleaner, sharper, and more enjoyable to drive again.
                </p>
                <p className="mt-5 text-base leading-8 text-slate-300">
                  The brand is positioned for trust. That means polished communication, clear
                  pricing, strong attention to detail, and a finish that feels worth the
                  booking whether the vehicle is a daily driver, a family SUV, or a luxury
                  interior.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-space pt-6">
        <div className="site-container">
          <SectionHeading
            eyebrow="What Apex stands for"
            title="The values customers should feel throughout the experience."
            description="These sections reinforce the kind of service the brand is promising without inventing unsupported history or claims."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Attention to detail",
                description:
                  "The goal is not just a surface-level clean. Apex is positioned around the finishing touches that make a vehicle feel properly cared for.",
                icon: Sparkles,
              },
              {
                title: "Professional mobile service",
                description:
                  "Convenience should not come at the expense of quality. The mobile model is part of the premium offering, not a compromise.",
                icon: ShieldCheck,
              },
              {
                title: "Trusted local experience",
                description:
                  "Customer feedback points to professionalism, honest service, and care with the vehicle itself.",
                icon: CheckCircle2,
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="panel h-full p-6">
                  <item.icon className="h-8 w-8 text-accent" />
                  <p className="mt-5 font-display text-3xl uppercase tracking-[0.08em] text-white">
                    {item.title}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
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
                <div className="eyebrow">Ready to experience it?</div>
                <p className="mt-6 max-w-3xl font-display text-5xl uppercase tracking-[0.08em] text-white sm:text-6xl">
                  Book Apex when the goal is a cleaner vehicle and a more premium feeling finish.
                </p>
                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                  The brand promise is simple: convenient mobile service, careful detail work,
                  and results that feel worth paying for.
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
