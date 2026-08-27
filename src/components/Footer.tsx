import { BUSINESS } from "@/lib/business";
import { PhoneIcon, SofaIcon, WhatsAppIcon } from "./icons";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#our-work", label: "Our Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/20 text-accent">
              <SofaIcon className="h-5 w-5" />
            </span>
            <span className="font-display text-xl">{BUSINESS.name}</span>
          </div>
          <p className="mt-4 text-sm text-secondary-foreground/70">{BUSINESS.tagline}</p>
          <div className="mt-6 flex gap-3">
            <a
              href={BUSINESS.telHref}
              aria-label="Call Jeevan Foam"
              className="grid h-11 w-11 place-items-center rounded-full border border-primary-foreground/20 text-secondary-foreground transition-smooth hover:border-accent hover:text-accent"
            >
              <PhoneIcon className="h-5 w-5" />
            </a>
            <a
              href={BUSINESS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Jeevan Foam"
              className="grid h-11 w-11 place-items-center rounded-full border border-primary-foreground/20 text-secondary-foreground transition-smooth hover:border-whatsapp hover:text-whatsapp"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-display text-lg">Quick links</h2>
          <ul className="mt-4 space-y-2.5">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-secondary-foreground/70 transition-smooth hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg">Contact</h2>
          <address className="mt-4 space-y-2 not-italic text-sm text-secondary-foreground/70">
            <p>{BUSINESS.address}</p>
            <p>Service areas: {BUSINESS.areas}</p>
            <p>
              <a href={BUSINESS.telHref} className="transition-smooth hover:text-accent">
                {BUSINESS.phoneDisplay}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-secondary-foreground/60 sm:px-6 lg:px-8">
          &copy; 2026 {BUSINESS.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
