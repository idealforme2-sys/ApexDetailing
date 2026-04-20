"use client";

import { useMemo, useState } from "react";
import { CalendarDays, CheckCircle2, Phone } from "lucide-react";
import { business, detailedServices } from "@/lib/site-data";

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  vehicleType: string;
  preferredDate: string;
  notes: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  vehicleType: "",
  preferredDate: "",
  notes: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);

  const handleChange =
    (field: keyof FormState) =>
    (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
      if (submitted) {
        setSubmitted(false);
      }
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    await new Promise((resolve) => window.setTimeout(resolve, 850));
    setSubmitting(false);
    setSubmitted(true);
    setForm(initialState);
  };

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-soft backdrop-blur-xl sm:p-8">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/30 bg-accent/12">
          <CalendarDays className="h-5 w-5 text-accent" />
        </span>
        <div>
          <p className="font-display text-2xl uppercase tracking-[0.08em] text-white">
            Request a Booking
          </p>
          <p className="text-sm text-slate-400">
            Share the basics and Apex can confirm the right service.
          </p>
        </div>
      </div>

      {submitted ? (
        <div
          className="mt-6 rounded-[1.6rem] border border-accent/30 bg-accent/10 p-5"
          aria-live="polite"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 text-accent" />
            <div>
              <p className="font-display text-xl uppercase tracking-[0.08em] text-white">
                Request received
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-200">
                Thanks for reaching out. For the fastest response, call or text{" "}
                {business.phoneDisplay} while your request details are being reviewed.
              </p>
            </div>
          </div>
        </div>
      ) : null}

      <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm text-slate-200">
            Name
            <input
              required
              type="text"
              value={form.name}
              onChange={handleChange("name")}
              className="input-field"
              placeholder="Your name"
            />
          </label>

          <label className="grid gap-2 text-sm text-slate-200">
            Phone
            <input
              required
              type="tel"
              value={form.phone}
              onChange={handleChange("phone")}
              className="input-field"
              placeholder="Best number to reach you"
            />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm text-slate-200">
            Email
            <input
              type="email"
              value={form.email}
              onChange={handleChange("email")}
              className="input-field"
              placeholder="Optional email address"
            />
          </label>

          <label className="grid gap-2 text-sm text-slate-200">
            Preferred date
            <input
              type="date"
              min={minDate}
              value={form.preferredDate}
              onChange={handleChange("preferredDate")}
              className="input-field"
            />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm text-slate-200">
            Service
            <select
              required
              value={form.service}
              onChange={handleChange("service")}
              className="input-field"
            >
              <option value="" className="bg-[#030507]">Select a service</option>
              {detailedServices.map((service) => (
                <option key={service.slug} value={service.name} className="bg-[#030507]">
                  {service.name}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 text-sm text-slate-200">
            Vehicle type
            <select
              required
              value={form.vehicleType}
              onChange={handleChange("vehicleType")}
              className="input-field"
            >
              <option value="" className="bg-[#030507]">Select vehicle type</option>
              <option value="Car" className="bg-[#030507]">Car</option>
              <option value="Truck" className="bg-[#030507]">Truck</option>
              <option value="SUV" className="bg-[#030507]">SUV</option>
              <option value="Other" className="bg-[#030507]">Other</option>
            </select>
          </label>
        </div>

        <label className="grid gap-2 text-sm text-slate-200">
          Notes
          <textarea
            rows={5}
            value={form.notes}
            onChange={handleChange("notes")}
            className="input-field resize-none"
            placeholder="Tell Apex about pet hair, stains, add-ons, or anything else worth knowing."
          />
        </label>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <button type="submit" className="btn-primary justify-center" disabled={submitting}>
            {submitting ? "Sending request..." : "Book a Detail"}
          </button>
          <a href={business.phoneHref} className="btn-secondary justify-center">
            <Phone className="h-4 w-4" />
            Call Instead
          </a>
        </div>
      </form>
    </div>
  );
}
