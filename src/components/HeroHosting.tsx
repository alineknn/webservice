"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/hooks/useT";
import ru from "@/locales/ru/hosting_hero.json";
import en from "@/locales/en/hosting_hero.json";
import heroImg from "@/assets/images/hosting/hero image.svg";

/**
 * Hosting page hero section
 * Desktop spec
 *  - Heading: Helvetica 52px, centered
 *  - Subheading: Avenir Next 18px, 24px below heading
 *  - CTAs: 32px below subheading, gap 12px, 310x64, Inter 18px
 *  - Image: 80px below CTAs, side paddings 64px, 1280x648
 * Mobile: falls back to fluid width with sane paddings
 */
export default function HeroHosting() {
  const { t } = useT({ en, ru });
  // Expect these keys to exist in locales/ru|en/hero.json (append if missing)
  const h = (t as any).hostingHero ?? {};

  // Prefer a *public* path from JSON when provided via `publicImage`; otherwise use bundled SVG.
  // This avoids accidentally pointing to a non-existent path and breaking the hero.
  const publicImage =
    typeof h.publicImage === "string" &&
    h.publicImage.startsWith("/") &&
    !h.publicImage.startsWith("/assets/")
      ? encodeURI(h.publicImage)
      : null;

  const imageSrc = publicImage || heroImg;

  return (
    <section id="hosting-hero" className="pt-0 pb-[80px]">
      {/* container: side padding 64 on >=1440, tighter on smaller screens */}
      <div className="mx-auto w-full max-w-[1440px] px-[20px] min-[1440px]:px-[64px] text-center">
        {/* Heading */}
        <div className="mx-auto min-[1440px]:max-w-[calc(100%-406px)]">
          <h1 className="mt-[112px] font-['Helvetica'] font-normal text-[36px] md:text-[44px] lg:text-[52px] leading-tight">
            {h.title}
          </h1>
        </div>

        {/* Subheading – 24px below */}
        <div className="mx-auto min-[1440px]:max-w-[calc(100%-762px)]">
          <p className="mt-6 text-[16px] md:text-[18px] font-normal font-['Avenir Next'] text-black/80">
            {h.subtitle}
          </p>
        </div>

        {/* CTAs – 32px below subheading */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-[12px]">
          <Link
            href={h.primaryHref || "#"}
            className="inline-flex items-center justify-center w-[260px] h-[56px] sm:w-[310px] sm:h-[64px] rounded-md bg-[#74C2CD] text-black font-['Inter'] text-[16px] sm:text-[18px] mx-auto sm:mx-0"
          >
            {h.primaryCta}
          </Link>
          <Link
            href={h.secondaryHref || "#"}
            className="inline-flex items-center justify-center w-[260px] h-[56px] sm:w-[310px] sm:h-[64px] rounded-md bg-[#746FAE] text-white font-['Inter'] text-[16px] sm:text-[18px] mx-auto sm:mx-0"
          >
            {h.secondaryCta}
          </Link>
        </div>

        {/* Image – 80px below CTAs */}
        <div className="mt-20 flex justify-center">
          {/* Keep visual width strictly 1280x648 on desktop; fluid on smaller */}
          <div className="relative w-full max-w-[1280px] h-[300px] sm:h-[420px] lg:h-[648px] overflow-hidden rounded-xl">
            <Image
              src={imageSrc}
              alt={h.title || "Hosting hero"}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1280px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
