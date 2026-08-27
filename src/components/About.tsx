import { MapPin } from "lucide-react";
import aboutWorkshop from "@/assets/about-workshop.jpg";
import { BUSINESS } from "@/lib/business";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <div className="relative">
            <img
              src={aboutWorkshop}
              alt="Upholsterer fitting new fabric over a sofa frame in the workshop"
              loading="lazy"
              width={1200}
              height={1000}
              className="w-full rounded-[2rem] object-cover shadow-lift"
            />
            <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-border bg-card p-5 shadow-soft sm:left-8 sm:right-auto sm:max-w-xs">
              <p className="eyebrow text-primary">Workshop</p>
              <p className="mt-2 text-sm leading-relaxed text-card-foreground">
                {BUSINESS.address}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="eyebrow text-primary">About us</p>
          <h2 className="mt-4 font-display text-3xl text-foreground sm:text-4xl lg:text-[2.75rem]">
            About Jeevan Foam
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Jeevan Foam provides sofa repair, sofa upholstery, foam replacement, sofa
            renovation, cushioning, recliner repair and custom sofa work for customers in
            Noida and Greater Noida.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From restoring a damaged frame to fitting fresh fabric and new foam, every job
            is handled as a complete sofa transformation — so your existing furniture feels
            comfortable and looks new again.
          </p>
          <p className="mt-8 inline-flex items-start gap-3 rounded-2xl border border-border bg-muted px-5 py-4 text-sm text-foreground">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <span>
              {BUSINESS.address}
              <br />
              Serving {BUSINESS.areas}
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
