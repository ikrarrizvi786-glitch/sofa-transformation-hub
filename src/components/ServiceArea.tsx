import { MapPin, Navigation } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { Reveal } from "./Reveal";

const AREAS = ["Noida", "Greater Noida"];

export function ServiceArea() {
  return (
    <section className="relative overflow-hidden bg-muted py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(circle at 70% 50%, black, transparent 72%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <p className="eyebrow text-primary">Service area</p>
          <h2 className="mt-4 font-display text-3xl text-foreground sm:text-4xl lg:text-[2.75rem]">
            Serving Noida &amp; Greater Noida
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Jeevan Foam serves customers across Noida and Greater Noida for sofa repair,
            upholstery, renovation and related sofa services.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {AREAS.map((area) => (
              <li
                key={area}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-card-foreground shadow-soft"
              >
                <Navigation className="h-4 w-4 text-primary" aria-hidden="true" />
                {area}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-[2rem] border border-border bg-card p-8 shadow-lift">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-warm text-primary-foreground">
              <MapPin className="h-7 w-7" aria-hidden="true" />
            </span>
            <h3 className="mt-6 font-display text-2xl text-card-foreground">
              Visit our shop
            </h3>
            <address className="mt-3 not-italic text-base leading-relaxed text-muted-foreground">
              {BUSINESS.name}
              <br />
              {BUSINESS.address}
              <br />
              {BUSINESS.areas}
            </address>
            <a
              href={BUSINESS.telHref}
              className="mt-7 inline-flex items-center justify-center rounded-full bg-gradient-warm px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-smooth hover:-translate-y-0.5 hover:shadow-lift"
            >
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
