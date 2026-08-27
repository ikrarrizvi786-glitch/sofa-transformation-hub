import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { PhoneIcon, SofaIcon } from "./icons";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#our-work", label: "Our Work" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-smooth ${
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md shadow-soft"
          : "border-b border-transparent bg-background/40 backdrop-blur-sm"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
      >
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-warm text-primary-foreground">
            <SofaIcon className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold text-foreground">
              Jeevan Foam
            </span>
            <span className="block text-[0.65rem] tracking-[0.18em] text-muted-foreground uppercase">
              Sofa Repair &amp; Upholstery
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-foreground/80 transition-smooth hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={BUSINESS.telHref}
            className="hidden items-center gap-2 rounded-full bg-gradient-warm px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-smooth hover:-translate-y-0.5 hover:shadow-lift sm:inline-flex"
          >
            <PhoneIcon className="h-4 w-4" />
            Call Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-card text-foreground transition-smooth hover:bg-muted lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-border bg-background transition-smooth lg:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="space-y-1 px-4 py-4 sm:px-6">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-base font-medium text-foreground transition-smooth hover:bg-muted"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={BUSINESS.telHref}
              className="flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-5 py-3 text-base font-semibold text-primary-foreground"
            >
              <PhoneIcon className="h-4 w-4" />
              Call {BUSINESS.phoneDisplay}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
