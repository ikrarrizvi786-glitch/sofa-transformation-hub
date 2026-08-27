import {
  Armchair,
  Hammer,
  Layers,
  Palette,
  Ruler,
  Scissors,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Reveal } from "./Reveal";

const SERVICES = [
  {
    icon: Wrench,
    title: "Sofa Repair",
    description: "Repair damaged sofa structures, frames and other worn components.",
  },
  {
    icon: Scissors,
    title: "Sofa Upholstery",
    description: "Give your sofa a fresh appearance with professional upholstery work.",
  },
  {
    icon: Layers,
    title: "Foam Replacement",
    description: "Replace old, compressed or uncomfortable foam to restore cushioning.",
  },
  {
    icon: Sparkles,
    title: "Sofa Renovation",
    description: "Transform old sofas and give them a refreshed, modern appearance.",
  },
  {
    icon: Armchair,
    title: "Cushioning",
    description: "Improve comfort with suitable cushioning and foam replacement.",
  },
  {
    icon: Hammer,
    title: "Recliner Repair",
    description: "Repair and restore recliner seating and upholstery.",
  },
  {
    icon: Ruler,
    title: "Custom Sofa Work",
    description: "Custom sofa solutions according to customer requirements.",
  },
  {
    icon: Palette,
    title: "Fabric Replacement",
    description: "Refresh the look of your sofa with new upholstery fabric.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-primary">What we do</p>
          <h2 className="mt-4 font-display text-3xl text-foreground sm:text-4xl lg:text-[2.75rem]">
            Our Sofa Services
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Complete sofa repair, renovation and upholstery solutions for homes and
            businesses.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 4) * 80}>
              <article className="group h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition-smooth hover:-translate-y-1.5 hover:border-accent hover:shadow-lift">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-muted text-primary transition-smooth group-hover:bg-gradient-warm group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-xl text-card-foreground">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
