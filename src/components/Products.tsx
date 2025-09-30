"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/Button"; // uses your existing Button variants

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
      {/* side margins: 8 on mobile, standard elsewhere */}
      <div className="mx-auto w-full max-w-[1280px] px-[8px] sm:px-6 min-[1440px]:px-[80px]">
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
              <p className="mt-3 max-w-2xl text-[18px] font-normal font-['Avenir Next'] text-black">
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
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.items.map((p, idx) => {
            const fallbackImg = imageMap[idx];
            return (
              <article
                key={`${p.title}-${idx}`}
                className="group rounded-2xl border border-black/10 bg-white overflow-hidden transition-shadow duration-200 hover:shadow-lg flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full aspect-[410/250]">
                  <Image
                    src={fallbackImg}
                    alt={p.title}
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                    priority={idx === 0}
                  />
                </div>

                {/* Body (flex-1 so CTA sticks to card bottom) */}
                <div className="flex-1 px-5 pt-5">{/* 20px side padding */}
                  <h3 className="text-[26px] font-normal font-['Helvetica']">{p.title}</h3>
                  {p.description ? (
                    <p className="mt-2 text-[16px] font-normal font-['Avenir Next'] text-black/60 leading-relaxed">
                      {p.description}
                    </p>
                  ) : null}

                  {/* Price & meta (same line) */}
                  <div className="mt-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-[32px] font-normal font-['Helvetica']">{p.priceLabel}</span>
                      <span className="text-[16px] font-semibold font-['Avenir Next'] text-black">{p.perMonth}</span>
                    </div>
                  </div>
                </div>

                {/* CTA – 20px below price, 20px left/right/bottom, height 44; fills card width (370px on 410px card) */}
                <div className="px-5 pb-5 mt-[20px]">
                  {p.slug ? (
                    <Link href={p.slug} className="block">
                      <Button
                        variant="teal"
                        size="sm"
                        className="bg-[#74C2CD] text-white font-['Avenir Next'] text-[16px] leading-none flex items-center justify-center text-center whitespace-nowrap px-0 w-full h-[44px]"
                      >
                        {p.ctaLabel}
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      variant="teal"
                      size="sm"
                      className="bg-[#74C2CD] text-white font-['Avenir Next'] text-[16px] leading-none flex items-center justify-center text-center whitespace-nowrap px-0 w-full h-[44px]"
                    >
                      {p.ctaLabel}
                    </Button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
