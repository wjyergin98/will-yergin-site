"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { FeaturedSlide } from "@/content/featuredSlides";

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function FeaturedCarousel({
  slides,
  intervalMs = 4500,
}: {
  slides: FeaturedSlide[];
  intervalMs?: number;
}) {
  const [idx, setIdx] = useState(0);
  const n = slides.length;

  const safeIdx = ((idx % n) + n) % n;
  const active = slides[safeIdx];

  const accentClass = useMemo(() => {
    if (active.accent === "lava") return "from-lava/35 via-transparent to-transparent";
    return "from-marina/35 via-transparent to-transparent";
  }, [active.accent]);

  useEffect(() => {
    if (n <= 1) return;
    const t = setInterval(() => setIdx((v) => v + 1), intervalMs);
    return () => clearInterval(t);
  }, [n, intervalMs]);

  return (
    <section className="mt-14">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">Featured builds</h2>
          <div className={cx("mt-3 h-px w-full bg-gradient-to-r", accentClass)} />
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIdx((v) => v - 1)}
            className="rounded-lg border border-neutral-300 px-3 py-2 text-sm transition hover:border-marina"
            aria-label="Previous slide"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={() => setIdx((v) => v + 1)}
            className="rounded-lg border border-neutral-300 px-3 py-2 text-sm transition hover:border-marina"
            aria-label="Next slide"
          >
            Next
          </button>
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-2xl border border-neutral-200 bg-white">
        <Link href={active.href} className="group block">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={active.src}
              alt={active.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-contain transition-transform duration-300 group-hover:scale-[1.01]"
            />
          </div>

          <div className="flex items-center justify-between px-5 py-4">
            <div className="font-medium">{active.title}</div>
            <div className="text-sm text-neutral-600 group-hover:text-marina transition-colors">
              View project →
            </div>
          </div>
        </Link>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 pb-4">
          {slides.map((s, i) => {
            const isActive = i === safeIdx;
            return (
              <button
                key={s.href}
                type="button"
                onClick={() => setIdx(i)}
                className={cx(
                  "h-2.5 w-2.5 rounded-full border transition",
                  isActive ? "bg-black border-black" : "bg-transparent border-neutral-300 hover:border-marina"
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
