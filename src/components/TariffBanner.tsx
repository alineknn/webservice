"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import ru from "@/locales/ru/tariff_banner.json";
import en from "@/locales/en/tariff_banner.json";

// Background: make sure the file name matches exactly (with space)
import BANNER_BG from "@/assets/images/banner/banner background.png";

type LocaleBlock = {
  title: string;
  subtitle: string;
  primaryCta: string;
  primaryHref?: string;
  secondaryCta: string;
  secondaryHref?: string;
};

export default function TariffBanner() {
  const { locale } = useRouter();
  const t = (locale?.startsWith("en") ? (en as LocaleBlock) : (ru as LocaleBlock));

  return (
    <section id="tariff-banner" className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={BANNER_BG}
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Container: sides 80 (≥1440), else 20; vertical 112 */}
      <div className="mx-auto w-full max-w-[1280px] px-[20px] min-[1440px]:px-[80px] py-[112px]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Text block: 845x131 (constrained by max-width) */}
          <div className="max-w-[845px]">
            <h2 className="font-['Helvetica'] font-normal text-[44px] leading-tight text-black">
              {t.title}
            </h2>
            <p className="mt-[24px] font-['Avenir Next'] text-[18px] text-black/80">
              {t.subtitle}
            </p>
          </div>

          {/* Buttons: 32px to the right on desktop -> achieved by spacing + layout */}
          <div className="flex items-center gap-4 lg:ml-[32px]">
            <Link
              href={t.primaryHref || "#"}
              className="inline-flex items-center justify-center w-[230px] h-[44px] rounded-md bg-[#746FAE] text-white font-['Avenir Next'] text-[16px]"
            >
              {t.primaryCta}
            </Link>
            <Link
              href={t.secondaryHref || "#"}
              className="inline-flex items-center justify-center w-[157px] h-[44px] rounded-md bg-white border border-[#000D0D26] text-black font-['Avenir Next'] text-[16px]"
            >
              {t.secondaryCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}