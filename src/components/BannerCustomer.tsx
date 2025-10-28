"use client";

import { useRouter } from "next/navigation";
import en from "@/locales/en/baner_customer.json";
import ru from "@/locales/ru/baner_customer.json";

type Copy = {
  heading: string;
};

export default function BannerCustomer() {
  const { locale } = useRouter();
  const t: Copy = (locale === "en" ? (en as Copy) : (ru as Copy));

  // Show 6 placeholders; replace with your own icons/images when ready
  const items = Array.from({ length: 4 });

  return (
    <section className="py-[103px]">
      <div className="mx-auto w-full max-w-[1280px] px-[20px] min-[1440px]:px-[80px]">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
          {/* Left heading */}
          <p className="w-full md:w-[280px] text-center md:text-left font-['Avenir Next'] font-bold text-[18px] leading-snug mb-8 md:mb-0">
            {t.heading}
          </p>

          {/* Logos row */}
          <div className="w-full md:flex-1 flex justify-center md:justify-start gap-8 md:gap-12 flex-wrap">
            {items.map((_, i) => (
              <div
                key={i}
                className="h-[56px] w-[140px] rounded-md border border-black/10 bg-black/5
                           flex items-center justify-center text-black/40 text-[14px]"
                aria-label="Customer logo placeholder"
              >
                Logo
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}