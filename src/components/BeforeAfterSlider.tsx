import { useCallback, useEffect, useRef, useState } from "react";

type BeforeAfterSliderProps = {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  title?: string;
};

/**
 * Reusable draggable before/after comparison slider.
 * Supports mouse, touch and keyboard (arrow keys) interaction.
 */
export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  title,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const [position, setPosition] = useState(50);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      e.preventDefault();
      updateFromClientX(e.clientX);
    };
    const stop = () => {
      draggingRef.current = false;
    };
    window.addEventListener("pointermove", onMove, { passive: false });
    window.addEventListener("pointerup", stop);
    window.addEventListener("pointercancel", stop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", stop);
      window.removeEventListener("pointercancel", stop);
    };
  }, [updateFromClientX]);

  return (
    <figure className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-smooth hover:shadow-lift">
      <div
        ref={containerRef}
        className="relative aspect-4/3 w-full cursor-ew-resize touch-none select-none overflow-hidden"
        onPointerDown={(e) => {
          draggingRef.current = true;
          updateFromClientX(e.clientX);
        }}
      >
        <img
          src={afterImage}
          alt={afterAlt}
          loading="lazy"
          width={1200}
          height={900}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt={beforeAlt}
            loading="lazy"
            width={1200}
            height={900}
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>

        <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-secondary/85 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.18em] text-secondary-foreground">
          BEFORE
        </span>
        <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.18em] text-primary-foreground">
          AFTER
        </span>

        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-background/90"
          style={{ left: `${position}%` }}
        />

        <div
          role="slider"
          tabIndex={0}
          aria-label={`Drag to compare before and after${title ? ` — ${title}` : ""}`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          aria-valuetext={`${Math.round(position)}% before image shown`}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 4));
            if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 4));
          }}
          className="absolute top-1/2 z-10 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-border bg-background text-primary shadow-float transition-smooth hover:scale-105"
          style={{ left: `${position}%` }}
          onPointerDown={(e) => {
            e.stopPropagation();
            draggingRef.current = true;
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="m9 6-5 6 5 6M15 6l5 6-5 6" />
          </svg>
        </div>
      </div>
      {title ? (
        <figcaption className="flex items-center justify-between gap-3 px-5 py-4">
          <span className="font-display text-lg text-foreground">{title}</span>
          <span className="text-xs text-muted-foreground">Drag to compare</span>
        </figcaption>
      ) : null}
    </figure>
  );
}
