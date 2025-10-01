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
        <div className="flex items-center gap-8 md:gap-16">
          {/* Left heading */}
          <p className="shrink-0 font-['Avenir Next'] font-bold text-[18px] leading-snug w-[280px]">
            {t.heading}
          </p>

          {/* Logos row */}
          <div className="flex-1 flex justify-center gap-8 md:gap-12 flex-wrap">
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