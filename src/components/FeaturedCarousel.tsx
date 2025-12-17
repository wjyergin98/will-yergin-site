"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
  const n = slides.length;

  // We keep the rendered slide index separate so we can fade-out BEFORE swapping.
  const [displayIdx, setDisplayIdx] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const idxRef = useRef(0);
  const timerRef = useRef<number | null>(null);
  const fadeRef = useRef<number | null>(null);

  const FADE_MS = 260; // slightly slower, feels more premium and avoids “flash”

  const wrap = useCallback(
    (i: number) => {
      if (n === 0) return 0;
      return ((i % n) + n) % n;
    },
    [n]
  );

  const clearAutoplay = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const clearFade = useCallback(() => {
    if (fadeRef.current !== null) {
      window.clearTimeout(fadeRef.current);
      fadeRef.current = null;
    }
  }, []);

  const scheduleAutoplay = useCallback(() => {
    clearAutoplay();
    if (n <= 1) return;

    timerRef.current = window.setTimeout(() => {
      // Advance using ref to avoid stale closures
      const next = wrap(idxRef.current + 1);
      // Do the same transition used for manual navigation
      setOpacity(0);
      clearFade();
      fadeRef.current = window.setTimeout(() => {
        idxRef.current = next;
        setDisplayIdx(next);
        setOpacity(1);
        // Critical: re-schedule after an auto-advance
        scheduleAutoplay();
      }, FADE_MS);
    }, intervalMs);
  }, [FADE_MS, clearAutoplay, clearFade, intervalMs, n, wrap]);

  const transitionTo = useCallback(
    (nextRaw: number) => {
      if (n <= 1) return;

      const next = wrap(nextRaw);
      if (next === idxRef.current) return;

      // Reset autoplay so user always gets a full interval after interacting
      scheduleAutoplay();

      // Fade out current, then swap, then fade in new
      setOpacity(0);
      clearFade();
      fadeRef.current = window.setTimeout(() => {
        idxRef.current = next;
        setDisplayIdx(next);
        setOpacity(1);
      }, FADE_MS);
    },
    [FADE_MS, clearFade, n, scheduleAutoplay, wrap]
  );

  const goPrev = useCallback(() => transitionTo(idxRef.current - 1), [transitionTo]);
  const goNext = useCallback(() => transitionTo(idxRef.current + 1), [transitionTo]);
  const goTo = useCallback((i: number) => transitionTo(i), [transitionTo]);

  // Start autoplay on mount; cleanup timers on unmount
  useEffect(() => {
    idxRef.current = wrap(displayIdx);
    scheduleAutoplay();
    return () => {
      clearAutoplay();
      clearFade();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const active = slides[wrap(displayIdx)] ?? null;

  const accentClass = useMemo(() => {
    if (!active) return "from-marina/35 via-transparent to-transparent";
    return active.accent === "lava"
      ? "from-lava/35 via-transparent to-transparent"
      : "from-marina/35 via-transparent to-transparent";
  }, [active]);

  if (!active) return null;

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
            onClick={goPrev}
            className="rounded-lg border border-neutral-300 px-3 py-2 text-sm transition hover:border-marina"
            aria-label="Previous slide"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={goNext}
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
              style={{
                opacity,
                transition: `opacity ${FADE_MS}ms ease-in-out`,
              }}
            />
          </div>

          <div className="flex items-center justify-between px-5 py-4">
            <div className="font-medium">{active.title}</div>
            <div className="text-sm text-neutral-600 transition-colors group-hover:text-marina">
              View project →
            </div>
          </div>
        </Link>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 pb-4">
          {slides.map((s, i) => {
            const isActive = i === wrap(displayIdx);
            return (
              <button
                key={s.href}
                type="button"
                onClick={() => goTo(i)}
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
