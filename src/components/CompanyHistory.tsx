"use client";

import { useRouter } from "next/navigation";
import ru from "@/locales/ru/company_history.json";
import en from "@/locales/en/company_history.json";

type Copy = {
  title: string;
  body: string;
};

export default function CompanyHistory() {
  const { locale } = useRouter();
  const t: Copy = (locale === "en" ? (en as Copy) : (ru as Copy));

  return (
    <section className="py-[112px]">
      <div className="relative mx-auto w-full max-w-[1280px] px-[20px] min-[1440px]:px-[80px]">
        <div className="grid md:grid-cols-2 items-start gap-y-6 md:gap-y-0 md:gap-x-[80px]">
          {/* Left — Heading */}
          <h2 className="font-['Helvetica'] text-[44px] leading-tight">
            {t.title}
          </h2>

          {/* Right — Body */}
          <p className="font-['Avenir Next'] text-[18px] leading-relaxed">
            {t.body}
          </p>
        </div>
      </div>
    </section>
  );
}