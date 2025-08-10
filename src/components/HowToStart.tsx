"use client";

import { useRouter } from "next/navigation";
import {
  MagnifyingGlassIcon,
  CreditCardIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

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

const IconMap = {
  search: MagnifyingGlassIcon,
  pay: CreditCardIcon,
  access: LockClosedIcon,
};

export default function HowToStart() {
  const { locale } = useRouter();
  const t = (locale === "en" ? en : ru) as LocaleBlock;

  return (
    <section id="how-to-start" className="py-24 px-4 md:px-6 lg:px-8">
      <div className="mx-auto max-w-screen-2xl px-0">
        {/* Header */}
        <div className="flex flex-col items-center">
          {t.badge ? (
            <span className="inline-block mb-2 text-center text-base font-bold">
              {t.badge}
            </span>
          ) : null}

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-center">
            {t.title}
          </h2>

          {t.subtitle ? (
            <p className="mt-4 text-center text-black max-w-2xl mx-auto text-lg">
              {t.subtitle}
            </p>
          ) : null}
        </div>

        {/* Steps */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {t.steps.map((s, i) => {
            const Icon = IconMap[s.icon];
            let bgColor = "";
            if (i === 0) {
              bgColor = "bg-[#F2F2F3]";
            } else if (i === 1) {
              bgColor = "bg-[#FDFFFF]";
            } else if (i === 2) {
              bgColor = "bg-[#EFF4F9]";
            }

            return (
              <article
                key={`${s.title}-${i}`}
                className={`rounded-xl p-10 h-full min-h-[280px] ${bgColor}`}
              >
                <div className="flex flex-col items-start text-left">
                  <Icon className="h-16 w-16 text-black" />
                  <h3 className="mt-6 text-2xl leading-snug">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-lg line-clamp-2">{s.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}