import { MapPin } from "lucide-react";
import heroSofa from "@/assets/hero-sofa.jpg";
import { BUSINESS } from "@/lib/business";
import { PhoneIcon, WhatsAppIcon } from "./icons";

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[92vh] overflow-hidden">
      <img
        src={heroSofa}
        alt="Newly upholstered camel brown sofa in a warm living room"
        width={1600}
        height={1200}
        fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />

      <div className="mx-auto flex min-h-[92vh] max-w-7xl items-center px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow animate-rise text-accent">
            Sofa Repair &middot; Upholstery &middot; Renovation
          </p>
          <h1
            className="animate-rise mt-5 font-display text-4xl leading-[1.08] text-primary-foreground sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "100ms" }}
          >
            Expert Sofa Repair &amp; Renovation in Noida &amp; Greater Noida
          </h1>
          <p
            className="animate-rise mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg"
            style={{ animationDelay: "200ms" }}
          >
            Revive your old sofa with professional repair, premium upholstery, foam
            replacement and custom sofa work by Jeevan Foam.
          </p>

          <div
            className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "300ms" }}
          >
            <a
              href={BUSINESS.telHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-7 py-4 text-base font-semibold text-primary-foreground shadow-float transition-smooth hover:-translate-y-0.5 hover:shadow-lift"
            >
              <PhoneIcon className="h-5 w-5" />
              Call Now
            </a>
            <a
              href={BUSINESS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/40 bg-background/10 px-7 py-4 text-base font-semibold text-primary-foreground backdrop-blur-sm transition-smooth hover:-translate-y-0.5 hover:bg-background/20"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>

          <p
            className="animate-rise mt-8 inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-secondary/40 px-4 py-2 text-sm text-primary-foreground/90 backdrop-blur-sm"
            style={{ animationDelay: "400ms" }}
          >
            <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
            {BUSINESS.address}
          </p>
        </div>
      </div>
    </section>
  );
}
