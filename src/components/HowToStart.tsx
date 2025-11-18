"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import searchIcon from "@/assets/images/Search.png";
import cardIcon from "@/assets/images/Card.png";
import lockIcon from "@/assets/images/Lock.png";

import en from "@/locales/en/how_to_start.json";
import ru from "@/locales/ru/how_to_start.json";

type Step = {
  title: string;
  text: string;
  // "search" | "pay" | "access" (we map these to heroicons below)
  icon: "search" | "pay" | "access";
  // optional soft background: "none" | "blue"
  tone?: "none" | "blue";
};

type LocaleBlock = {
  badge?: string;
  title: string;
  subtitle?: string;
  steps: Step[];
  cta?: string;
  ctaNote?: string;
};

const iconMap: Record<Step["icon"], any> = {
  search: searchIcon,
  pay: cardIcon,
  access: lockIcon,
};

export default function HowToStart() {
  const { locale } = useRouter();
  const t = (locale === "en" ? en : ru) as LocaleBlock;

  return (
    <section id="how-to-start" className="pt-[112px] pb-[80px]">
      <div className="mx-auto w-full max-w-[1280px] min-[1440px]:max-w-[1440px] px-[20px] min-[1440px]:px-[80px]">
        {/* Header */}
        <div className="flex flex-col items-center">
          {t.badge ? (
            <span className="inline-flex items-center justify-center mb-2 w-[47px] h-[24px] text-center text-[16px] font-normal font-['Helvetica']">
              {t.badge}
            </span>
          ) : null}

          <div className="mx-auto flex items-center justify-center mt-4 w-full md:w-[758px] md:h-[124px]">
            <h2 className="text-[36px] md:text-[52px] font-normal font-['Helvetica'] leading-tight text-center">
              {t.title}
            </h2>
          </div>

          {t.subtitle ? (
            <div className="mt-4 mx-auto flex items-center justify-center w-full md:w-[562px] md:h-[52px]">
              <p className="text-[18px] font-normal font-['Avenir Next'] text-center text-black">
                {t.subtitle}
              </p>
            </div>
          ) : null}
        </div>

        {/* Steps */}
        <div className="mt-[80px] grid grid-cols-1 gap-8 justify-center md:grid-cols-2 md:gap-[24px] md:justify-center min-[1280px]:[grid-template-columns:repeat(3,405px)] min-[1280px]:gap-[32px] min-[1280px]:justify-start">
          {t.steps.map((s, i) => {  
            const bg = i === 0 ? 'bg-[#F2F2F3]' : i === 1 ? 'bg-[#FDFFFF]' : 'bg-[#EFF4F9]';
            const size = i === 1 ? 48 : 42;
            const sizeClass = i === 1 ? "w-[48px] h-[48px]" : "w-[42px] h-[42px]";
            return (
              <article
                className={`rounded-lg border border-[rgba(0,13,13,0.15)] ${bg} w-[335px] h-auto md:h-[296px] md:w-full min-[1280px]:w-[405px] pl-[32px] pt-[44px] pr-[32px] pb-[32px]`}
                key={`${s.title}-${i}`}
              >
                <div className="flex flex-col items-start text-left">
                  <Image
                    src={iconMap[s.icon]}
                    alt={s.title}
                    width={size}
                    height={size}
                    className={`${sizeClass} object-contain`}
                    priority={i === 0}
                  />
                  <div className="mt-6 w-full md:w-[341px] md:h-[78px]">
                    <h3 className="text-[28px] font-normal font-['Helvetica'] leading-snug">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-[16px] font-normal font-['Avenir Next']">{s.text}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA below cards (80px), centered */}
        {t.cta ? (
          <div className="mt-[80px] flex justify-center">
            <button
              className="w-[310px] h-[64px] bg-[#74C2CD] text-black text-[18px] font-['Inter'] rounded-md flex items-center justify-center text-center"
            >
              {t.cta}
            </button>
          </div>
        ) : null}

        {/* Subtitle 20px below CTA, desktop only */}
        {t.ctaNote ? (
          <div className="hidden md:flex mt-[20px] justify-center">
            <p className="w-[366px] h-[44px] text-[18px] font-['Inter'] text-black text-center leading-snug">
              {t.ctaNote}
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}