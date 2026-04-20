import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Quote, Star } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { business, metadataByPage, reviewHighlights, reviews } from "@/lib/site-data";

export const metadata: Metadata = metadataByPage.reviews;

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Customer Reviews"
        title="Professional. On time. Attention to detail. Those are the words customers keep using."
        description="These testimonials are presented with a premium layout, but the substance is what matters: real feedback about the finish, the service, and the trust Apex builds on-site."
        primaryCta={{ href: "/contact", label: "Book a Detail" }}
        secondaryCta={{ href: business.phoneHref, label: "Call Now" }}
        highlights={reviewHighlights.slice(0, 4)}
        aside={
          <div className="panel p-6">
            <div className="flex items-center gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="mt-5 font-display text-4xl uppercase tracking-[0.08em] text-white">
              Luxury vehicle friendly.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Kia Optima, Tesla, and Range Rover owners all call out the same themes:
              professionalism, care, and a finish worth recommending.
            </p>
          </div>
        }
      />

      <section className="section-space">
        <div className="site-container">
          <div className="flex flex-wrap gap-3">
            {reviewHighlights.map((item) => (
              <Reveal key={item}>
                <span className="pill">{item}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-6">
        <div className="site-container">
          <SectionHeading
            eyebrow="Testimonials"
            title="Feedback that reinforces trust before a customer ever makes the call."
            description="The cards below keep the meaning of each review intact while polishing the presentation for the site."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {reviews.map((review, index) => (
              <Reveal key={review.name} delay={index * 0.06}>
                <article className="panel h-full p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-center gap-1 text-accent">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star key={starIndex} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="h-7 w-7 text-slate-500" />
                  </div>
                  <p className="mt-5 text-base leading-8 text-slate-200">{review.quote}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="pill">{review.vehicle}</span>
                    <span className="pill">{review.highlight}</span>
                  </div>
                  <div className="mt-6 border-t border-white/10 pt-5">
                    <p className="font-display text-2xl uppercase tracking-[0.08em] text-white">
                      {review.name}
                    </p>
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
            eyebrow="What customers notice most"
            title="A consistent trust pattern across the feedback."
            description="Instead of inflated claims, the site leans on the real points customers repeat."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "On-time arrival and respectful service",
              "Attention to cracks, crevices, trim, and finish work",
              "Pet hair removal that makes a visible difference",
              "Showroom-style results on luxury and daily-driven vehicles",
            ].map((item, index) => (
              <Reveal key={item} delay={index * 0.06}>
                <article className="panel h-full p-6">
                  <p className="font-display text-2xl uppercase tracking-[0.08em] text-white">
                    0{index + 1}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item}</p>
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
                <div className="eyebrow">Book with confidence</div>
                <p className="mt-6 max-w-3xl font-display text-5xl uppercase tracking-[0.08em] text-white sm:text-6xl">
                  The reviews already answer the biggest question: can you trust the result?
                </p>
                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                  If the standard you want is professional, honest, and detail-focused, the
                  next step is simple.
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
