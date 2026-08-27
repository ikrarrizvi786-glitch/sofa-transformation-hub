import { Armchair, Hammer, Layers, MapPin, Ruler, Scissors } from "lucide-react";
import { Reveal } from "./Reveal";

const REASONS = [
  {
    icon: Hammer,
    title: "Professional Sofa Repair",
    description: "Frames, structures and worn components repaired with care.",
  },
  {
    icon: Layers,
    title: "Quality Foam Replacement",
    description: "Compressed and sagging foam replaced for proper support.",
  },
  {
    icon: Scissors,
    title: "Fresh Upholstery & Fabric",
    description: "New fabric and upholstery work for a clean, tailored finish.",
  },
  {
    icon: Armchair,
    title: "Sofa Transformation",
    description: "Renovation that gives tired sofas a refreshed appearance.",
  },
  {
    icon: Ruler,
    title: "Custom Work",
    description: "Sofa solutions built around your requirements.",
  },
  {
    icon: MapPin,
    title: "Serving Noida & Greater Noida",
    description: "Sofa services for homes and businesses across both cities.",
  },
];

export function WhyChoose() {
  return (
    <section className="bg-secondary py-20 text-secondary-foreground sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-accent">The Jeevan Foam way</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[2.75rem]">
            Why Choose Jeevan Foam?
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, i) => (
            <Reveal key={reason.title} delay={(i % 3) * 90}>
              <article className="h-full rounded-3xl border border-primary-foreground/12 bg-primary-foreground/6 p-7 backdrop-blur-sm transition-smooth hover:-translate-y-1.5 hover:border-accent/60 hover:bg-primary-foreground/10">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/20 text-accent">
                  <reason.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-xl">{reason.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-secondary-foreground/70">
                  {reason.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
