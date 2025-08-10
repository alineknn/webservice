"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import en from "@/locales/en/services.json";
import ru from "@/locales/ru/services.json";

import ecommerceImg from "@/assets/images/e-commerce.png";
import chartImg from "@/assets/images/chart.png";
import storageImg from "@/assets/images/storage.png";

/**
 * JSON shape
 * {
 *   "badge": "Services",   // optional
 *   "title": "Who our solutions fit",
 *   "subtitle": "Short paragraph…",
 *   "items": [{
 *      "title": "...",
 *      "description": "...",
 *      "image": "/assets/images/services/ecommerce.png", // optional
 *      "variant": "plain" | "teal" | "purple",           // optional accent bg
 *      "eyebrow": "Always on",                           // optional tiny label
 *   }, ...]
 * }
 */

type LocaleBlock = {
  badge?: string;
  title: string;
  subtitle?: string;
  items: {
    title: string;
    description?: string;
    image?: string;
    variant?: "plain" | "teal" | "purple";
    eyebrow?: string;
  }[];
};

export default function Services() {
  const { locale } = useRouter();
  const t: LocaleBlock = (locale === "en" ? en : ru) as any;

  // Explicit md heights per tile (to match 592xH specs). Mobile stacks naturally.
  const heightClassesMd: string[] = [
    "md:h-[743px]",
    "md:h-[885px]",
    "md:h-[632px]",
    "md:h-[666px]",
    "md:h-[411px]",
    "md:h-[239px]",
  ];
  // Image heights (inside the card) – keep your current values
  const imgHeightsMd: number[] = [315, 420, 270, 285, 165, 105];

  // Optional per-tile scale (1 = full size). Set to 0.8 to render at 80% of intrinsic size.
  const imgScaleMd: number[] = [1, 1, 1, 1, 1, 1];

  // Background color per tile (left->right, top->bottom)
  const indexBg: string[] = [
    "bg-[#F2F0EC]",
    "bg-[#EFF3F7]",
    "bg-[#E8EBEC]",
    "bg-[#F4F4F2]",
    "bg-[#74C2CD] text-neutral-900",
    "bg-[#746FAE] text-white",
  ];
  // Only specific tiles have images (0, 1, 3) – left to right order
  const imageMap: Record<number, any> = {
    0: ecommerceImg,
    1: chartImg,
    3: storageImg,
  };

  // Image alignment per tile: br = bottom-right, bl = bottom-left, bc = bottom-center
  type Align = "br" | "bl" | "bc";
  const imageAlign: Record<number, Align> = {
    0: "br", // first image → bottom-right
    1: "br", // second image → bottom-right
    3: "bl", // third image (tile index 3) → bottom-left
  };
  const alignToClasses = (a: Align) =>
    a === "br" ? "justify-end items-end" : a === "bl" ? "justify-start items-end" : "justify-center items-end";
  const alignToObjectPos = (a: Align) =>
    a === "br" ? "right bottom" : a === "bl" ? "left bottom" : "center bottom";

  // Per-tile image scale so art is smaller but still anchored to the edge
  const imgScale: Record<number, number> = {
    0: 0.72,
    1: 0.72,
    3: 0.72,
  };

  // Per-tile image max width so art scales well relative to each card
  const imageMaxWidthClass: Record<number, string> = {
    0: "max-w-[92%]",
    1: "max-w-[92%]",
    3: "max-w-[88%]",
  };

  // Base tiles + colored variants
  const tileBase = "relative rounded-xl border border-black/10 p-6 flex h-full flex-col gap-4 overflow-hidden";

  return (
    <section id="services" className="py-24 px-4 md:px-6 lg:px-8">
      <div className="mx-auto max-w-screen-2xl">
        {/* Header */}
        {t.badge ? (
          <span className="inline-block mb-4 px-3 py-1 rounded-full text-sm bg-black/10">
            {t.badge}
          </span>
        ) : null}

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold">{t.title}</h2>
        {t.subtitle ? (
          <p className="mt-3 text-xl md:text-2xl text-black/60 max-w-4xl">{t.subtitle}</p>
        ) : null}

        {/* Two explicit columns so each tile can have an exact md height */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column: 0,2,4 */}
          <div className="flex flex-col gap-6">
            {[0, 2, 4].map((i) => {
              const card = t.items[i];
              if (!card) return null;
              const a = imageAlign[i] ?? "bc";
              const alignBox = alignToClasses(a);
              const objectPos = alignToObjectPos(a);
              const titleClass = i <= 1
                ? "text-[28px] md:text-4xl font-semibold leading-tight"
                : "text-2xl md:text-3xl font-semibold leading-snug";
              const effectiveImage = imageMap[i];
              const bgClass = indexBg[i] ?? "bg-white";
              const paraClass = bgClass.includes("#746FAE") ? "text-white/90" : "text-black/70";
              const containerWidthClass = (i === 0 || i === 1) ? "w-full" : "w-full md:max-w-[520px]";
              const hClass = heightClassesMd[i] ?? "";

              return (
                <article key={`${card.title}-${i}`} className={`${tileBase} ${hClass} ${bgClass}`}>
                  <div className="relative z-10">
                    {card.eyebrow ? (
                      <span className={`text-xs uppercase tracking-wide ${bgClass.includes("#746FAE") ? "text-white/90" : "text-black/70"}`}>
                        {card.eyebrow}
                      </span>
                    ) : null}
                    <h3 className={titleClass}>{card.title}</h3>
                    {card.description ? (
                      <p className={`text-lg md:text-xl ${paraClass}`}>{card.description}</p>
                    ) : null}
                  </div>

                  {effectiveImage ? (
                    <div
                      className={
                        i === 0
                          ? "absolute right-[4px] bottom-[4px] pointer-events-none z-0"
                          : `absolute ${i === 3 ? "left-[-25px]" : a === "bl" ? "left-[-20px]" : a === "br" ? "right-[-20px]" : "left-1/2 -translate-x-1/2"} bottom-[-20px] pointer-events-none z-0`
                      }
                    >
                      <Image
                        src={effectiveImage}
                        alt={card.title}
                        className="w-auto h-auto"
                        style={{
                          objectFit: 'contain',
                          objectPosition: objectPos,
                          transform: `scale(${imgScale[i] ?? 0.85})`,
                          transformOrigin: objectPos,
                        }}
                        priority={i < 2}
                      />
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>

          {/* Right column: 1,3,5 */}
          <div className="flex flex-col gap-6">
            {[1, 3, 5].map((i) => {
              const card = t.items[i];
              if (!card) return null;
              const a = imageAlign[i] ?? "bc";
              const alignBox = alignToClasses(a);
              const objectPos = alignToObjectPos(a);
              const titleClass = i <= 1
                ? "text-[28px] md:text-4xl font-semibold leading-tight"
                : "text-2xl md:text-3xl font-semibold leading-snug";
              const effectiveImage = imageMap[i];
              const bgClass = indexBg[i] ?? "bg-white";
              const paraClass = bgClass.includes("#746FAE") ? "text-white/90" : "text-black/70";
              const containerWidthClass = (i === 0 || i === 1) ? "w-full" : "w-full md:max-w-[520px]";
              const hClass = heightClassesMd[i] ?? "";

              return (
                <article key={`${card.title}-${i}`} className={`${tileBase} ${hClass} ${bgClass}`}>
                  <div className="relative z-10">
                    {card.eyebrow ? (
                      <span className={`text-xs uppercase tracking-wide ${bgClass.includes("#746FAE") ? "text-white/90" : "text-black/70"}`}>
                        {card.eyebrow}
                      </span>
                    ) : null}
                    <h3 className={titleClass}>{card.title}</h3>
                    {card.description ? (
                      <p className={`text-lg md:text-xl ${paraClass}`}>{card.description}</p>
                    ) : null}
                  </div>

                  {effectiveImage ? (
                    <div
                      className={
                        i === 1
                          ? "absolute right-[4px] bottom-[4px] pointer-events-none z-0"
                          : `absolute ${a === "bl" ? "left-[-25px]" : a === "br" ? "right-[-25px]" : "left-1/2 -translate-x-1/2"} bottom-[-20px] pointer-events-none z-0`
                      }
                    >
                      <Image
                        src={effectiveImage}
                        alt={card.title}
                        className="w-auto h-auto"
                        style={{
                          objectFit: 'contain',
                          objectPosition: objectPos,
                          transform: `scale(${imgScale[i] ?? 0.85})`,
                          transformOrigin: objectPos,
                        }}
                        priority={i < 2}
                      />
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}