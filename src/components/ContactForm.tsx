import { useState, type FormEvent } from "react";
import { BUSINESS, whatsappMessageHref } from "@/lib/business";
import { WhatsAppIcon } from "./icons";

const SERVICES = [
  "Sofa Repair",
  "Sofa Upholstery",
  "Foam Replacement",
  "Sofa Renovation",
  "Cushioning",
  "Recliner Repair",
  "Custom Sofa Work",
  "Fabric Replacement",
];

const fieldClass =
  "w-full rounded-2xl border border-input bg-background px-4 py-3.5 text-sm text-foreground transition-smooth placeholder:text-muted-foreground focus:border-primary focus:outline-none";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  // No backend is connected: the enquiry is handed off to WhatsApp so the
  // customer can send it directly to Jeevan Foam.
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text = [
      `Enquiry for ${BUSINESS.name}`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      service ? `Service required: ${service}` : null,
      message ? `Message: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappMessageHref(text), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-border bg-card p-7 shadow-lift sm:p-9"
    >
      <h3 className="font-display text-2xl text-card-foreground">Send an enquiry</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Fill in your details and your enquiry opens in WhatsApp, ready to send.
      </p>

      <div className="mt-7 space-y-4">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="10-digit mobile number"
            className={fieldClass}
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Service Required
          </label>
          <select
            id="service"
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={fieldClass}
          >
            <option value="">Select a service</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us about your sofa"
            className={`${fieldClass} resize-y`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-warm px-6 py-4 text-base font-semibold text-primary-foreground shadow-soft transition-smooth hover:-translate-y-0.5 hover:shadow-lift"
      >
        <WhatsAppIcon className="h-5 w-5" />
        Send Enquiry
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Enquiries are sent through WhatsApp — nothing is stored on this website.
      </p>
    </form>
  );
}
