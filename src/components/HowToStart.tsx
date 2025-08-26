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
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 min-[1440px]:px-[80px]">
        {/* Header */}
        <div className="flex flex-col items-center">
          {t.badge ? (
            <span className="inline-block mb-2 text-center text-[16px] font-normal font-['Helvetica']">
              {t.badge}
            </span>
          ) : null}

          <div className="w-[758px] h-[124px] mx-auto flex items-center justify-center">
            <h2 className="text-[52px] font-normal font-['Helvetica'] leading-tight text-center">
              {t.title}
            </h2>
          </div>

          {t.subtitle ? (
            <div className="mt-4 w-[562px] h-[52px] mx-auto flex items-center justify-center">
              <p className="text-[18px] font-normal font-['Avenir Next'] text-center text-black">
                {t.subtitle}
              </p>
            </div>
          ) : null}
        </div>

        {/* Steps */}
        <div className="mt-[80px] grid grid-cols-1 gap-8 md:grid-cols-3">
          {t.steps.map((s, i) => {  
            const bg = i === 0 ? 'bg-[#F2F2F3]' : i === 1 ? 'bg-[#FDFFFF]' : 'bg-[#EFF4F9]';
            const size = i === 1 ? 48 : 42;
            const sizeClass = i === 1 ? "w-[48px] h-[48px]" : "w-[42px] h-[42px]";
            return (
              <article
                className={`rounded-lg border border-[rgba(0,13,13,0.15)] ${bg} h-full min-h-[280px] pl-[32px] pt-[44px] pr-[32px] pb-[32px]`}
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
                  <div className="mt-6 w-[342px] h-[78px]">
                    <h3 className="text-[28px] font-normal font-['Helvetica'] leading-snug">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-[16px] font-normal font-['Avenir Next']">{s.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}