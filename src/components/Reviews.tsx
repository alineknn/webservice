"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

import en from "@/locales/en/reviews.json";
import ru from "@/locales/ru/reviews.json";

type Review = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

type ReviewsLocale = {
  title: string;
  autoplayMs?: number;
  reviews: Review[];
};

function useIsDesktop(breakpoint = 1024) {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    // guard for SSR
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(`(min-width:${breakpoint}px)`);
    const onChange = () => setIsDesktop(mql.matches);
    onChange();
    mql.addEventListener?.("change", onChange);
    return () => mql.removeEventListener?.("change", onChange);
  }, [breakpoint]);
  return isDesktop;
}

function chunk<T>(arr: T[], size: number) {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function Reviews() {
  const { locale } = useRouter();
  const dict = (locale === "en" ? en : ru) as ReviewsLocale;

  const isDesktop = useIsDesktop(1024);
  const pageSize = isDesktop ? 2 : 1;

  const pages = useMemo(
    () => chunk(dict.reviews, pageSize),
    [dict.reviews, pageSize]
  );
  const [index, setIndex] = useState(0);

  const goNext = () => setIndex((i) => (i + 1) % pages.length);
  const goPrev = () => setIndex((i) => (i - 1 + pages.length) % pages.length);

  // Autoplay (defaults to 7000ms if not provided)
  const timerRef = useRef<number | null>(null);
  const start = () => {
    stop();
    const ms = dict.autoplayMs ?? 7000;
    timerRef.current = window.setInterval(goNext, ms);
  };
  const stop = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };
  useEffect(() => {
    start();
    return stop;
    // restart autoplay when layout or locale chunking changes
  }, [pageSize, pages.length]);

  return (
    <section
      id="reviews"
      className="py-24 px-0"
      onMouseEnter={stop}
      onMouseLeave={start}
    >
      <div className="mx-auto w-full max-w-[1280px] min-[1440px]:max-w-[1440px] px-[20px] sm:px-6 min-[1440px]:px-[80px]">
        <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">
          {dict.title}
        </h2>

        <div className="mt-10 relative">
          {/* Viewport */}
          <div className="overflow-hidden">
            {/* Track */}
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {pages.map((page, pIdx) => (
                <div key={pIdx} className="min-w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {page.map((r, rIdx) => (
                      <ReviewCard key={`${r.name}-${rIdx}`} review={r} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls row */}
          <div className="mt-6 flex items-center justify-between">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {pages.map((_, dIdx) => (
                <button
                  key={dIdx}
                  aria-label={`Go to slide ${dIdx + 1}`}
                  className={`h-2 w-2 rounded-full transition ${
                    dIdx === index ? "bg-black" : "bg-black/30"
                  }`}
                  onClick={() => setIndex(dIdx)}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={goPrev}
                aria-label="Previous"
                className="rounded-md border border-black/10 p-2 hover:bg-black/5"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <button
                onClick={goNext}
                aria-label="Next"
                className="rounded-md border border-black/10 p-2 hover:bg-black/5"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="rounded-xl border border-black/10 p-7 md:p-9">
      <p className="text-xl md:text-2xl leading-relaxed">{review.quote}</p>

      <div className="mt-6 flex items-center justify-between gap-6 pt-6 border-t border-black/10">
        {/* Avatar + meta */}
        <div className="flex items-center gap-3">
          {/* Placeholder avatar circle */}
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-black/20 to-black/10" />
          <div className="text-sm">
            <div className="font-medium">{review.name}</div>
            <div className="text-black/60">
              {review.role} — {review.company}
            </div>
          </div>
        </div>

        {/* Company name as placeholder logo */}
        <div className="shrink-0 text-sm font-semibold text-black/70">
          {review.company}
        </div>
      </div>
    </article>
  );
}