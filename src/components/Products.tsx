"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

import en from "@/locales/en/products.json";
import ru from "@/locales/ru/products.json";

// Placeholder images (swap to your assets later)
import imgVps from "@/assets/images/vps hosting.png";
import imgWeb from "@/assets/images/web hosting.png";
import imgSsl from "@/assets/images/ssl cert.png";

type ProductCard = {
  slug?: string;
  title: string;
  description?: string;         // supports extra text
  image?: string;               // from JSON (optional)
  priceLabel: string;           // "от 500 сом"
  perMonth: string;             // "в месяц"
  ctaLabel: string;             // "Подробнее"
};

type ProductsLocale = {
  badge?: string;         // "Услуги"
  title: string;          // "Наши продукты"
  subtitle?: string;
  usp?: string;           // pill on the right
  items: ProductCard[];
  footerSelect?: string;
  footerMore?: string;
};

const imageMap: Record<number, any> = {
  0: imgVps,
  1: imgWeb,
  2: imgSsl,
};

export default function Products() {
  const { locale } = useRouter();
  const t: ProductsLocale = (locale === "en" ? en : ru) as any;

  return (
    <section id="products" className="pt-[112px] pb-[80px]">
      {/* side margins: 20px on mobile, 80px at ≥1440px */}
      <div className="mx-auto w-full max-w-[1440px] px-[20px] lg:px-[80px]">  
        <div className="mx-auto w-full max-w-[1280px]">
        {/* Top row: badge/title/subtitle + USP pill */}
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            {t.badge ? (
              <span className="inline-block mb-2 text-[16px] font-normal font-['Helvetica']">
                {t.badge}
              </span>
            ) : null}

            <h2 className="mt-4 text-[36px] md:text-[52px] font-normal font-['Helvetica'] tracking-tight">
              {t.title}
            </h2>

            {t.subtitle ? (
              <p className="mt-3 w-full md:max-w-[448px] text-[18px] font-normal font-['Avenir Next'] text-black">
                {t.subtitle}
              </p>
            ) : null}
          </div>

          {t.usp ? (
            <div className="mt-[25px] md:mt-0">
              <span className="max-w-[425px] w-full h-[102px] bg-[#746FAE] text-[#f2f2f2] text-[18px] md:text-[22px] font-normal font-['Helvetica'] px-[30px] py-[20px] flex items-center justify-center rounded-lg shadow-sm">
                {t.usp}
              </span>
            </div>
          ) : null}
        </div>

        {/* Cards */}
        {/* gap-6 = 24px on both mobile and desktop */}
        <div className="mt-[80px] grid grid-cols-1 md:[grid-template-columns:repeat(3,410px)] md:w-[1280px] mx-auto justify-center gap-y-6 md:gap-y-0 md:gap-x-[25px]">
          {t.items.map((p, idx) => {
            const fallbackImg = imageMap[idx];
            return (
              <article
                key={`${p.title}-${idx}`}
                className="group rounded-2xl border border-black/10 bg-white overflow-hidden shadow-sm transition-shadow duration-200 hover:shadow-lg flex flex-col w-full md:w-[410px] md:h-[540px]"
              >
                {/* Image */}
                <div className="relative w-full aspect-[410/249]">
                  <Image
                    src={fallbackImg}
                    alt={p.title}
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                    priority={idx === 0}
                  />
                </div>

                {/* Body scroll area: title + full description; keeps exact spacing above price */}
                <div className="flex-1 px-5 pt-3 overflow-y-auto">
                  <h3 className="text-[26px] font-normal font-['Helvetica']">{p.title}</h3>
                  {p.description ? (
                    <p className="mt-6 text-[16px] font-normal font-['Avenir Next'] text-black/60 leading-relaxed">
                      {p.description}
                    </p>
                  ) : null}
                  {/* Spacer to enforce 39px between body and price */}
                  <div className="h-[39px] shrink-0" />
                </div>

                {/* Footer: price + CTA; maintains 20px gap and 20px bottom padding */}
                <div className="px-5 pb-5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[32px] font-normal font-['Helvetica']">{p.priceLabel}</span>
                    {idx !== 2 && p.perMonth ? (
                      <span className="text-[16px] font-semibold font-['Avenir Next'] text-black">{p.perMonth}</span>
                    ) : null}
                  </div>
                  <div className="mt-[20px] flex justify-center">
                    {p.slug ? (
                      <Link href={p.slug} className="inline-flex items-center justify-center gap-2 w-full md:w-[370px] h-[44px] bg-[#74C2CD] text-black font-['Avenir Next'] text-[16px] rounded-md">
                        <span>{p.ctaLabel}</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    ) : (
                      <div className="inline-flex items-center justify-center gap-2 w-full md:w-[370px] h-[44px] bg-[#74C2CD] text-black font-['Avenir Next'] text-[16px] rounded-md">
                        <span>{p.ctaLabel}</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}
