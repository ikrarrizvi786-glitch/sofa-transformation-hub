import { MapPin, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { ContactForm } from "./ContactForm";
import { Reveal } from "./Reveal";
import { PhoneIcon, WhatsAppIcon } from "./icons";

export function ContactCTA() {
  return (
    <section id="contact" className="bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <p className="eyebrow text-primary">Get in touch</p>
          <h2 className="mt-4 font-display text-3xl text-foreground sm:text-4xl lg:text-[2.75rem]">
            Give Your Sofa a Fresh New Look
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Need sofa repair, new upholstery, foam replacement or renovation? Contact Jeevan
            Foam today.
          </p>

          <dl className="mt-9 space-y-4">
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-muted px-5 py-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <dt className="text-sm font-semibold text-foreground">{BUSINESS.name}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">
                  {BUSINESS.address}
                  <br />
                  {BUSINESS.areas}
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-muted px-5 py-4">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <dt className="text-sm font-semibold text-foreground">Phone / WhatsApp</dt>
                <dd className="mt-1 text-sm text-muted-foreground">
                  <a href={BUSINESS.telHref} className="hover:text-primary">
                    {BUSINESS.phoneDisplay}
                  </a>
                </dd>
              </div>
            </div>
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={BUSINESS.telHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-7 py-4 text-base font-semibold text-primary-foreground shadow-soft transition-smooth hover:-translate-y-0.5 hover:shadow-lift"
            >
              <PhoneIcon className="h-5 w-5" />
              Call Now
            </a>
            <a
              href={BUSINESS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-card px-7 py-4 text-base font-semibold text-primary transition-smooth hover:-translate-y-0.5 hover:bg-muted"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
