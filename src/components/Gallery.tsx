import after1 from "@/assets/after-1.jpg";
import after2 from "@/assets/after-2.jpg";
import after3 from "@/assets/after-3.jpg";
import before1 from "@/assets/before-1.jpg";
import before2 from "@/assets/before-2.jpg";
import before3 from "@/assets/before-3.jpg";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { Reveal } from "./Reveal";

/**
 * Transformation pairs. Replace these placeholder images with real
 * Jeevan Foam project photos by swapping the imported files, or add a new
 * object to this array to publish another before/after comparison.
 */
export const TRANSFORMATIONS = [
  {
    title: "Three seater fabric sofa",
    beforeImage: before1,
    afterImage: after1,
    beforeAlt: "Worn three seater sofa with faded fabric and sagging cushions before repair",
    afterAlt: "Three seater sofa after upholstery and foam replacement",
  },
  {
    title: "Recliner armchair",
    beforeImage: before2,
    afterImage: after2,
    beforeAlt: "Damaged recliner armchair with cracked leather before restoration",
    afterAlt: "Recliner armchair after repair with new leather upholstery",
  },
  {
    title: "L-shaped corner sofa",
    beforeImage: before3,
    afterImage: after3,
    beforeAlt: "Old L-shaped corner sofa with collapsed foam cushions before renovation",
    afterAlt: "L-shaped corner sofa after renovation with new fabric and cushioning",
  },
];

export function Gallery() {
  return (
    <section id="our-work" className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-primary">Our work</p>
          <h2 className="mt-4 font-display text-3xl text-foreground sm:text-4xl lg:text-[2.75rem]">
            See the Transformation
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Compare the difference before and after professional sofa renovation.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {TRANSFORMATIONS.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 90}>
              <BeforeAfterSlider {...item} />
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          Images shown are illustrative examples of sofa repair and renovation work, not
          photographs of specific customer projects.
        </p>
      </div>
    </section>
  );
}
