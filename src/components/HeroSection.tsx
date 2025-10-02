"use client";
import React from "react";
import Link from "next/link";
import Button from "./Button";
import { useRouter } from "next/navigation";
import ru from "@/locales/ru/hero.json";
import en from "@/locales/en/hero.json";
import Image from 'next/image';
import heroImage from '@/assets/images/map of kg.png';
import heroBackground from '@/assets/images/hero background.png';

export default function Hero() {
  const router = useRouter();
  const locale = router.locale ?? "ru";
  const t = locale === "en" ? en : ru;

  return (
    <section
      id="Home"
      className="pt-[calc(var(--nav-h,64px)+48px)] pb-4 md:pb-8 min-h-screen relative overflow-hidden"
    >
      <Image
        src={heroBackground}
        alt="Background grid"
        width={1440}
        height={474}
        className="absolute left-1/2 top-0 -translate-x-1/2 object-contain z-0 w-full max-w-[1440px]"
        priority
      />
      <div className="relative z-10 mx-auto w-full max-w-[1312px] min-[1440px]:max-w-[calc(100vw-128px)] min-[1920px]:max-w-[1748px] px-[8px] sm:px-6 min-[1440px]:px-[64px] min-[1920px]:px-[86px]">
        <div className="mx-auto text-center">
        {/* Main headline */}
        <h1 className="text-[32px] md:text-[52px] font-bold leading-tight font-['Helvetica']">
          {Array.isArray(t.headlineParts)
            ? t.headlineParts.map((part, idx) => (
                <span key={idx} className={
                  idx === 0 ? "text-[#74C2CD]" : idx === 2 ? "text-[#746FAE]" : ""
                }>
                  {part}
                </span>
              ))
            : t.headline}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-[12px] md:text-[22px] text-blue/50 font-medium max-w-[694px] mx-auto text-center">
          {t.subtitle}
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <Link href="/vps-hosting">
            <Button variant="teal" size="md" className="!w-[335px] !h-[47px] md:!w-[310px] md:!h-[64px] text-[14px] md:text-[18px] px-8">
              {t.cta.vps}
            </Button>
          </Link>
          <Link href="/web-hosting">
            <Button variant="purple" size="md" className="!w-[335px] !h-[47px] md:!w-[310px] md:!h-[64px] text-[14px] md:text-[18px] px-8">
              {t.cta.web}
            </Button>
          </Link>
          <Link href="/ssl-certificates">
            <Button variant="black" size="md" className="!w-[335px] !h-[47px] md:!w-[310px] md:!h-[64px] text-[14px] md:text-[18px] px-8">
              {t.cta.ssl}
            </Button>
          </Link>
        </div>
        {/* Hero illustration */}
        <div className="mt-[48px]">
          <div className="relative mx-auto w-[335px] md:w-full max-w-[1312px] overflow-hidden aspect-square md:aspect-[1312/474]">
            <Image
              src={heroImage}
              alt="Hero illustration"
              fill
              className="rounded-xl object-contain"
              priority
              sizes="(max-width: 767px) 335px, (min-width: 1440px) 1312px, calc(100vw - 128px)"
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
