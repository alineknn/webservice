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
          {/* Left — Heading (aim ~600x212, ~4 lines on desktop) */}
          <h2
            className="font-['Helvetica'] md:text-[44px] md:leading-[53px] md:max-w-[600px]
                       text-[32px] leading-[38px] max-w-full"
          >
            {t.title}
          </h2>

          {/* Right — Body (aim ~600x162, ~6 lines on desktop) */}
          <p
            className="font-['Avenir Next'] md:text-[18px] md:leading-[27px] md:max-w-[600px]
                       text-[16px] leading-[24px] max-w-full"
          >
            {t.body}
          </p>
        </div>
      </div>
    </section>
  );
}