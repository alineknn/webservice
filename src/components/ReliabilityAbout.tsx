"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import ru from "@/locales/ru/reliability_about.json";
import en from "@/locales/en/reliability_about.json";

type TCopy = {
  badge: string;
  title: string;
  body: string;
  primaryCta: string;
  primaryHref?: string;
  secondaryCta: string;
  secondaryHref?: string;
};

export default function ReliabilityAbout() {
  const { locale } = useRouter();
  const t: TCopy = (locale === "en" ? (en as any) : (ru as any)) as TCopy;

  return (
    <section className="pt-[112px] pb-0">
      <div className="mx-auto w-full max-w-[1280px] px-[8px] min-[1440px]:px-[80px]">
        <div className="grid md:grid-cols-[1fr,1fr] md:gap-x-[80px] items-start">
          {/* Left: subtitle + title */}
          <div>
            <p className="font-['Helvetica'] text-[16px] font-bold">{t.badge}</p>
            <h2 className="mt-[12px] md:mt-[16px] font-['Helvetica'] text-[44px] md:text-[52px] leading-tight">
              {t.title}
            </h2>
          </div>

          {/* Right: body + CTAs */}
          <div className="mt-[20px] md:mt-0">
            <p className="font-['Avenir Next'] text-[12px] md:text-[18px] leading-relaxed">
              {t.body}
            </p>

            <div className="mt-[24px] md:mt-[38px] flex items-center gap-[24px]">
              <Link
                href={t.primaryHref || "#"}
                className="inline-flex items-center justify-center text-center w-[63px] md:w-[76px] h-[30px] md:h-[36px] rounded-md bg-white border border-[#000D0D26] text-black font-['Avenir Next'] text-[14px]"
              >
                {t.primaryCta}
              </Link>

              <span className="flex items-center gap-2">
                <Link
                  href={t.secondaryHref || "#"}
                  className="inline-flex items-center justify-center text-center w-[90px] md:w-[110px] h-[24px] md:h-[24px] rounded-md bg-white text-black font-['Avenir Next'] text-[14px]"
                >
                  {t.secondaryCta}
                </Link>
                {/* 24x24 icon to the right of the second CTA */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-black"
                  aria-hidden="true"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
