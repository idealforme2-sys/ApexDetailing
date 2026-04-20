import type { Metadata } from "next";
import Link from "next/link";
import { Clock3, MapPin, MessageSquareQuote, Phone, Star } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { business, metadataByPage, reviewHighlights } from "@/lib/site-data";

export const metadata: Metadata = metadataByPage.contact;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact / Booking"
        title="High-converting booking flow with a premium, polished feel."
        description="The contact experience makes the next step obvious: call now for the fastest response or send a request with the vehicle, service, and preferred date."
        primaryCta={{ href: business.phoneHref, label: "Call Now" }}
        secondaryCta={{ href: "#booking-form", label: "Book a Detail" }}
        highlights={[business.serviceArea, ...reviewHighlights.slice(0, 3)]}
        aside={
          <div className="grid gap-4">
            <div className="panel p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-accent">Fastest response</p>
              <p className="mt-4 font-display text-4xl uppercase tracking-[0.08em] text-white">
                {business.phoneDisplay}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Call or text for quick scheduling, then use the form if you want to send more
                detail about the vehicle and the service you need.
              </p>
            </div>
            <div className="panel-soft p-5">
              <div className="flex items-center gap-2 text-accent">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Reviews consistently mention professionalism, attention to detail, and
                showroom-level results.
              </p>
            </div>
          </div>
        }
      />

      <section id="booking-form" className="section-space scroll-mt-32">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <ContactForm />
            </Reveal>

            <div className="grid gap-5">
              <Reveal delay={0.08}>
                <div className="panel p-6">
                  <div className="flex items-center gap-3">
                    <Phone className="h-6 w-6 text-accent" />
                    <div>
                      <p className="font-display text-2xl uppercase tracking-[0.08em] text-white">
                        Call directly
                      </p>
                      <p className="text-sm text-slate-400">Fastest way to reach Apex</p>
                    </div>
                  </div>
                  <Link href={business.phoneHref} className="mt-6 inline-flex text-2xl font-semibold text-white transition hover:text-accent">
                    {business.phoneDisplay}
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="panel p-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-accent" />
                    <div>
                      <p className="font-display text-2xl uppercase tracking-[0.08em] text-white">
                        Service area
                      </p>
                      <p className="text-sm text-slate-400">Mobile and convenient</p>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-slate-300">{business.serviceArea}</p>
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="panel p-6">
                  <div className="flex items-center gap-3">
                    <Clock3 className="h-6 w-6 text-accent" />
                    <div>
                      <p className="font-display text-2xl uppercase tracking-[0.08em] text-white">
                        Best info to include
                      </p>
                      <p className="text-sm text-slate-400">Makes quoting easier</p>
                    </div>
                  </div>
                  <ul className="mt-5 grid gap-3 text-sm leading-7 text-slate-300">
                    <li>Requested service</li>
                    <li>Vehicle type</li>
                    <li>Preferred date</li>
                    <li>Any pet hair, stains, or special concerns</li>
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="hero-panel p-6">
                  <div className="flex items-center gap-3">
                    <MessageSquareQuote className="h-6 w-6 text-accent" />
                    <div>
                      <p className="font-display text-2xl uppercase tracking-[0.08em] text-white">
                        Review encouragement
                      </p>
                      <p className="text-sm text-slate-400">A trust-building loop</p>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-slate-300">
                    After the detail is complete, a quick review helps other local drivers book
                    with confidence and reinforces the premium standard of the brand.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-4">
        <div className="site-container">
          <SectionHeading
            eyebrow="Next Step"
            title="Call now or submit the form while the appointment is top of mind."
            description="The page is intentionally direct because the conversion goal is clear: get the customer from interest to booked inquiry with as little friction as possible."
            align="center"
          />
          <Reveal className="mt-10 flex justify-center">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href={business.phoneHref} className="btn-primary justify-center">
                <Phone className="h-4 w-4" />
                Call Now
              </Link>
              <Link href="#booking-form" className="btn-secondary justify-center">
                Book a Detail
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
