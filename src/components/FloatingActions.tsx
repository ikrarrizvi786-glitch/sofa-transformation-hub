import { BUSINESS } from "@/lib/business";
import { PhoneIcon, WhatsAppIcon } from "./icons";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-center gap-3 sm:bottom-7 sm:right-6">
      <a
        href={BUSINESS.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Jeevan Foam"
        className="grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-secondary shadow-float transition-smooth hover:-translate-y-1 hover:shadow-lift"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
      <a
        href={BUSINESS.telHref}
        aria-label="Call Jeevan Foam"
        className="grid h-14 w-14 place-items-center rounded-full bg-gradient-warm text-primary-foreground shadow-float transition-smooth hover:-translate-y-1 hover:shadow-lift"
      >
        <PhoneIcon className="h-6 w-6" />
      </a>
    </div>
  );
}
