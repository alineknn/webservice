"use client";
import React from "react";
import { useRouter } from "next/navigation";
import FeatureCard from "./FeatureCard";
import ru from "@/locales/ru/advantages.json";
import en from "@/locales/en/advantages.json";
import Image from "next/image";
import dbImage from "@/assets/images/db-image.png";
import mapOfKg from "@/assets/images/map of kg.png";
import cavisLogo from "@/assets/images/cavis logo.png";
import mapPin from "@/assets/images/advantages/map pin.svg";
import chartIcon from "@/assets/images/advantages/Data.svg";
import speedometer from "@/assets/images/advantages/Speed.svg";
import gear from "@/assets/images/advantages/Management.svg";
import kgIcon from "@/assets/images/advantages/KG.svg";
import globalIcon from "@/assets/images/advantages/tdesign_internet-filled.svg";
import cavisPattern from "@/assets/images/advantages/cavis pattern.svg";

export default function AdvantagesAndAudience() {
  const { locale } = useRouter();
  const t = locale === "en" ? (en as any) : (ru as any);

  // ---- Carousel state ----
  const images: { name: string; src: any }[] = [
    { name: "Database", src: dbImage },
    { name: "Map of KG", src: mapOfKg },
    { name: "Cavis Logo", src: cavisLogo },
  ];
  const featureIcons = [mapPin, chartIcon, speedometer, gear, kgIcon, globalIcon];
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const totalImages = images.length || 1;

  const goToIndex = (next: number) => {
    const total = images.length || 1;
    const idx = ((next % total) + total) % total;
    setCurrentIndex(idx);
    if (images[idx]?.name) console.log("Carousel image:", images[idx].name);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    goToIndex(currentIndex - 1);
  };
  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    goToIndex(currentIndex + 1);
  };

  // Track geometry for percentage-based sliding (responsive)
  const slidesCount = images.length || 1;
  const trackWidth = `${slidesCount * 100}%`;
  const offsetPct = `-${(currentIndex * 100) / slidesCount}%`;
  const slideWidthPct = `${100 / slidesCount}%`;

  return (
    <section id="Advantages" className="relative py-24 px-4 md:px-6 lg:px-8">
      {/* Outer frame capped at 1440px for desktop while remaining responsive */}
      <div className="relative mx-auto max-w-[1440px]">
        {/* Background pattern — overlaps content, shifted 444px to the right */}
        <Image
          src={cavisPattern}
          alt="cavis pattern"
          className="pointer-events-none select-none absolute left-[444px] -top-[113px] w-auto h-auto z-0 hidden md:block"
          priority
        />
        {/* Optional inner content cap (keeps your existing margin logic) */}
        <div className="relative z-10 mx-auto max-w-[1280px]">
          {/* Badge, Title & Description */}
          <div className="text-left">
            {/* Badge 131×40 with 16px text */}
            <span
              className="inline-flex items-center justify-center mb-4 rounded-full bg-[#746FAE] text-white"
              style={{ width: 131, height: 40, fontSize: 16, fontFamily: "Helvetica" }}
            >
              {t.badge}
            </span>

            {/* Heading 52px */}
            <h2
              className="mb-3 font-normal"
              style={{ fontSize: 52, lineHeight: 1.1, fontFamily: "Helvetica" }}
            >
              {t.title}
            </h2>

            {/* Paragraph 18px */}
            <p
              className="text-black/70"
              style={{ fontSize: 18, lineHeight: 1.5, fontFamily: "Avenir Next" }}
            >
              {t.description}
            </p>
          </div>

          {/* 3×2 Grid (cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {Array.isArray(t.items) && t.items.map((item: any, idx: number) => (
              <FeatureCard
                key={`${idx}-${item.title}`}
                className="border-0 border-l border-gray-200"
                title={
                  <div className="flex flex-col items-start gap-3">
                    <Image
                      src={featureIcons[idx] || mapPin}
                      alt={item.title || `feature-${idx + 1}`}
                      className="object-contain"
                      priority={idx < 3}
                    />
                    <div className="text-left">
                      <div
                        className="text-[22px] leading-snug"
                        style={{ fontFamily: "Avenir Next" }}
                      >
                        {item.title}
                      </div>
                    </div>
                  </div>
                }
              >
                {item.description && (
                  <p
                    className="mt-3 text-[22px] text-black/60"
                    style={{ fontFamily: "Avenir Next" }}
                  >
                    {item.description}
                  </p>
                )}
              </FeatureCard>
            ))}
          </div>

          {/* Image Carousel — responsive, no previews, keeps animation */}
          {images.length > 0 && (
            <div className="mt-16">
              {/* Responsive 16:9 frame that shrinks with the container */}
              <div className="relative w-full max-w-[1280px] mx-auto aspect-[1280/530] overflow-hidden rounded-lg">
                <div
                  className="flex h-full transition-transform duration-500 ease-in-out will-change-transform"
                  style={{
                    width: trackWidth,
                    transform: `translateX(${offsetPct})`,
                  }}
                >
                  {images.map((img, i) => (
                    <div
                      key={img.name + i}
                      className="relative h-full flex-shrink-0 overflow-hidden rounded-lg bg-black/5"
                      style={{ width: slideWidthPct }}
                    >
                      <Image
                        src={img.src || dbImage}
                        alt={img.name || "carousel"}
                        fill  
                        className="object-contain"
                        sizes="(min-width: 1440px) 1280px, (min-width: 1024px) calc(100vw - 160px), calc(100vw - 40px)"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Controls (48px below the photo), responsive width */}
              <div className="mt-12 flex items-center justify-between w-full">
                {/* Dots */}
                <div className="flex items-center gap-2">
                  {images.map((img, i) => (
                    <button
                      key={img.name + i}
                      type="button"
                      onClick={() => goToIndex(i)}
                      aria-label={`Go to ${img.name}`}
                      className={`h-2 w-2 rounded-full transition ${i === currentIndex ? 'bg-black' : 'bg-black/30'}`}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div className="flex gap-2">
                  <button
                    onClick={handlePrev}
                    className="w-12 h-12 inline-flex items-center justify-center rounded-md bg-[#F2F2F2] hover:bg-[#e9e9e9] text-black transition"
                    aria-label="Previous image"
                    type="button"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-12 h-12 inline-flex items-center justify-center rounded-md bg-[#F2F2F2] hover:bg-[#e9e9e9] text-black transition"
                    aria-label="Next image"
                    type="button"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}