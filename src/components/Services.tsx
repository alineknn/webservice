"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import en from "@/locales/en/services.json";
import ru from "@/locales/ru/services.json";

import ecommerceImg from "@/assets/images/e-commerce.png";
import chartImg from "@/assets/images/chart.png";
import storageImg from "@/assets/images/storage.png";
import devImg from "@/assets/images/Dev Image.png";


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
    "md:!h-[743px]",
    "md:!h-[885px]",
    "md:!h-[632px]",
    "md:!h-[666px]",
    "md:!h-[411px]",
    "md:!h-[239px]",
  ];

  // Mobile-only explicit tile sizes (do not affect desktop)
  const sizeClassesSm: string[] = [
    "w-[335px] h-[484px] md:w-auto md:h-auto", // 1
    "w-[335px] h-[571px] md:w-auto md:h-auto", // 2
    "w-[328px] h-[555px] md:w-auto md:h-auto", // 3
    "w-[335px] h-[600px] md:w-auto md:h-auto", // 4
    "w-[335px] h-[411px] md:w-auto md:h-auto", // 5
    "w-[335px] h-[319px] md:w-auto md:h-auto", // 6
  ];

  // Mobile image positions/sizes for tiles with images
  const imagePosSm: Record<number, string> = {
    0: "left-[78px] top-[244px] w-[257px] h-[257px]",
    1: "left-[79px] top-[315px] w-[256px] h-[256px]",
    2: "left-[120px] top-[345px] w-[206px] h-[206px]",
    3: "right-[67px] top-[343px] w-[268px] h-[268px]",
  };

  const imageSizeSm: Record<number, { w: number; h: number }> = {
    0: { w: 257, h: 257 },
    1: { w: 256, h: 256 },
    2: { w: 206, h: 206 },
    3: { w: 268, h: 268 },
  };

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
    2: devImg,
    3: storageImg,
  };

  const imageSpec: Record<number, { w: number; h: number; left?: number; top?: number; right?: number; bottom?: number }> = {
    0: { w: 458, h: 458, left: 140, top: 284 },
    1: { w: 550, h: 550, left: 80, top: 335 },
    2: { w: 324, h: 324, left: 174, top: 290 },
    3: { w: 377, h: 377, right: 215, top: 289 },
  };

  // Image alignment per tile: br = bottom-right, bl = bottom-left, bc = bottom-center
  const imageAlign: Record<number, "br" | "bl" | "bc"> = {
    0: "br", // first image → bottom-right
    1: "br", // second image → bottom-right
    3: "bl", // third image (tile index 3) → bottom-left
  };

  // Base tiles + colored variants
  const tileBase = "relative rounded-xl border border-black/10 flex flex-col overflow-hidden";

  return (
    <section id="services" className="py-24 px-0">
      <div className="mx-auto max-w-[1440px] px-[20px] md:px-[112px]">
        {/* Header */}
        {t.badge ? (
          <div
            className="text-center"
            style={{ fontFamily: "Helvetica", fontSize: 16, fontWeight: 700 }}
          >
            {t.badge}
          </div>
        ) : null}

        <h2
          className="mt-2 text-center text-[36px] md:text-[52px]"
          style={{ fontFamily: "Helvetica", fontWeight: 400, lineHeight: 1.1 }}
        >
          {t.title}
        </h2>
        {t.subtitle ? (
          <p
            className="mt-3 text-center max-w-4xl mx-auto"
            style={{ fontFamily: "Avenir Next", fontSize: 18, fontWeight: 400, lineHeight: 1.5 }}
          >
            {t.subtitle}
          </p>
        ) : null}

        {/* Mobile-only: ordered tiles 1..6 with exact sizes/positions */}
        <div className="md:hidden mt-10 flex flex-col items-center gap-6">
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const card = t.items[i];
            if (!card) return null;
            const bgClass = indexBg[i] ?? "bg-white";
            const paraClass = bgClass.includes("#746FAE") ? "text-white/90" : "text-black/70";
            const hClass = heightClassesMd[i] ?? ""; // md-only; harmless on mobile

            return (
              <article key={`m-${card.title}-${i}`} className={`${tileBase} ${bgClass} ${sizeClassesSm[i]} ${i === 5 ? "text-white" : ""}`}> 
                <div
                  className={`relative z-10 ${
                    i === 4 ? "pt-[18px] pl-[20px] pr-[20px]" : "pt-[24px] pl-[20px] pr-[20px]"
                  }`}
                >
                  {i === 4 && card.eyebrow ? (
                    <div
                      className="w-[173px] h-[32px] rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: "#FAF8F5",
                        fontFamily: "Helvetica Neue",
                        fontSize: 13,
                        fontWeight: 400,
                      }}
                    >
                      {card.eyebrow}
                    </div>
                  ) : null}

                  <h3
                    className={`text-[28px] ${i === 5 ? "text-white" : "text-black"}`}
                    style={{
                      fontFamily: "Helvetica",
                      fontWeight: 400,
                      lineHeight: 1.2,
                      marginTop: i === 4 && card.eyebrow ? 16 : 0,
                    }}
                  >
                    {card.title}
                  </h3>

                  {card.description ? (
                    <p
                      style={{
                        fontFamily: "Avenir Next",
                        fontWeight: 400,
                        fontSize: 16,
                        lineHeight: 1.5,
                        marginTop: i === 5 ? 12 : 16,
                      }}
                      className={i === 5 ? "text-white" : paraClass}
                    >
                      {card.description}
                    </p>
                  ) : null}
                </div>

                {imageMap[i] ? (
                  <div className={`absolute pointer-events-none z-0 ${imagePosSm[i] || ""}`}>
                    {imageSizeSm[i] ? (
                      <Image
                        src={imageMap[i]}
                        alt={card.title}
                        width={imageSizeSm[i].w}
                        height={imageSizeSm[i].h}
                        className="object-contain"
                        priority={i < 2}
                      />
                    ) : null}
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>

        {/* Two explicit columns so each tile can have an exact md height */}
        <div className="hidden md:grid mt-10 grid-cols-1 md:[grid-template-columns:592px_592px] md:gap-[32px] md:justify-center">
          {/* Left column: 0,2,4 */}
          <div className="flex flex-col gap-6">
            {[0, 2, 4].map((i) => {
              const card = t.items[i];
              if (!card) return null;
              const bgClass = indexBg[i] ?? "bg-white";
              const paraClass = bgClass.includes("#746FAE") ? "text-white/90" : "text-black/70";
              const hClass = heightClassesMd[i] ?? "";
              const origin = i === 3 ? "bottom left" : "bottom right";

              return (
                <article key={`${card.title}-${i}`} className={`${tileBase} ${bgClass} ${sizeClassesSm[i]} ${hClass} ${i === 5 ? "text-white" : ""}`}>
                  <div
                    className={`relative z-10 ${
                      i === 4 ? "pt-[18px] pl-[20px] pr-[20px]" : "pt-[24px] pl-[20px] pr-[20px]"
                    } ${i === 5 ? "md:pt-[40px] md:pl-[51px] md:pr-[13px]" : "md:pt-[51px] md:pl-[51px] md:pr-[51px]"}`}
                  >
                    {i === 4 && card.eyebrow ? (
                      <div
                        className="w-[173px] h-[32px] rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: "#FAF8F5",
                          fontFamily: "Helvetica Neue",
                          fontSize: 13,
                          fontWeight: 400,
                        }}
                      >
                        {card.eyebrow}
                      </div>
                    ) : null}

                    <h3
                      className={`text-[28px] md:text-[36px] ${i === 5 ? "text-white" : "text-black"}`}
                      style={{
                        fontFamily: "Helvetica",
                        fontWeight: 400, // not bold
                        lineHeight: 1.2,
                        marginTop: i === 4 && card.eyebrow ? 16 : 0, // 16px below badge on tile 5, else stick to 51px top padding
                        ...(i === 1 ? { marginRight: 46 } : {}),
                      }}
                    >
                      {card.title}
                    </h3>

                    {card.description ? (
                      <p
                        style={{
                          fontFamily: "Avenir Next",
                          fontWeight: 400,
                          fontSize: 16,
                          lineHeight: 1.5,
                          marginTop: i === 5 ? 12 : 16, // body is 16px under heading for all tiles except tile 6 which is 12px
                        }}
                        className={i === 5 ? "text-white" : paraClass}
                      >
                        {card.description}
                      </p>
                    ) : null}
                  </div>

                  {imageMap[i] ? (
                    <>
                      {/* Mobile image (explicit size; no fill) */}
                      <div className={`absolute pointer-events-none z-0 block md:hidden ${imagePosSm[i] || ""}`}>
                        {imageSizeSm[i] ? (
                          <Image
                            src={imageMap[i]}
                            alt={card.title}
                            width={imageSizeSm[i].w}
                            height={imageSizeSm[i].h}
                            className="object-contain"
                            priority={i < 2}
                          />
                        ) : null}
                      </div>

                      {/* Desktop image (explicit wrapper + fill) */}
                      <div
                        className="absolute pointer-events-none z-0 hidden md:block"
                        style={{
                          left: imageSpec[i]?.left,
                          top: imageSpec[i]?.top,
                          right: imageSpec[i]?.right,
                          bottom: imageSpec[i]?.bottom,
                        }}
                      >
                        {imageSpec[i] ? (
                          <div className="relative" style={{ width: imageSpec[i].w, height: imageSpec[i].h }}>
                            <Image
                              src={imageMap[i]}
                              alt={card.title}
                              fill
                              className="object-contain"
                              sizes="(min-width: 768px) 377px"
                              priority={i < 2}
                            />
                          </div>
                        ) : null}
                      </div>
                    </>
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
              const bgClass = indexBg[i] ?? "bg-white";
              const paraClass = bgClass.includes("#746FAE") ? "text-white/90" : "text-black/70";
              const hClass = heightClassesMd[i] ?? "";
              const origin = i === 3 ? "bottom left" : "bottom right";

              return (
                <article key={`${card.title}-${i}`} className={`${tileBase} ${bgClass} ${sizeClassesSm[i]} ${hClass} ${i === 5 ? "text-white" : ""}`}>
                  <div
                    className={`relative z-10 ${
                      i === 4 ? "pt-[18px] pl-[20px] pr-[20px]" : "pt-[24px] pl-[20px] pr-[20px]"
                    } ${i === 5 ? "md:pt-[40px] md:pl-[51px] md:pr-[13px]" : "md:pt-[51px] md:pl-[51px] md:pr-[51px]"}`}
                  >
                    {i === 4 && card.eyebrow ? (
                      <div
                        className="w-[173px] h-[32px] rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: "#FAF8F5",
                          fontFamily: "Helvetica Neue",
                          fontSize: 13,
                          fontWeight: 400,
                        }}
                      >
                        {card.eyebrow}
                      </div>
                    ) : null}

                    <h3
                      className={`text-[28px] md:text-[36px] ${i === 5 ? "text-white" : "text-black"}`}
                      style={{
                        fontFamily: "Helvetica",
                        fontWeight: 400, // not bold
                        lineHeight: 1.2,
                        marginTop: i === 4 && card.eyebrow ? 16 : 0, // 16px below badge on tile 5, else stick to 51px top padding
                        marginRight: i === 1 ? 46 : 0,
                      }}
                    >
                      {card.title}
                    </h3>

                    {card.description ? (
                      <p
                        style={{
                          fontFamily: "Avenir Next",
                          fontWeight: 400,
                          fontSize: 16,
                          lineHeight: 1.5,
                          marginTop: i === 5 ? 12 : 16, // body is 16px under heading for all tiles except tile 6 which is 12px
                        }}
                        className={i === 5 ? "text-white" : paraClass}
                      >
                        {card.description}
                      </p>
                    ) : null}
                  </div>

                  {imageMap[i] ? (
                    <>
                      {/* Mobile image (explicit size; no fill) */}
                      <div className={`absolute pointer-events-none z-0 block md:hidden ${imagePosSm[i] || ""}`}>
                        {imageSizeSm[i] ? (
                          <Image
                            src={imageMap[i]}
                            alt={card.title}
                            width={imageSizeSm[i].w}
                            height={imageSizeSm[i].h}
                            className="object-contain"
                            priority={i < 2}
                          />
                        ) : null}
                      </div>

                      {/* Desktop image (explicit wrapper + fill) */}
                      <div
                        className="absolute pointer-events-none z-0 hidden md:block"
                        style={{
                          left: imageSpec[i]?.left,
                          top: imageSpec[i]?.top,
                          right: imageSpec[i]?.right,
                          bottom: imageSpec[i]?.bottom,
                        }}
                      >
                        {imageSpec[i] ? (
                          <div className="relative" style={{ width: imageSpec[i].w, height: imageSpec[i].h }}>
                            <Image
                              src={imageMap[i]}
                              alt={card.title}
                              fill
                              className="object-contain"
                              sizes="(min-width: 768px) 377px"
                              priority={i < 2}
                            />
                          </div>
                        ) : null}
                      </div>
                    </>
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