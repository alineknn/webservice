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
  description?: string;
  image?: string;         // from JSON (optional)
  priceLabel: string;     // "от 500 сом"
  perMonth: string;       // "в месяц"
  fitNote?: string;       // "Подходит для стартапов"
  ctaLabel: string;       // "Подробнее"
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
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 min-[1440px]:px-[80px]">
        {/* Top row: badge/title/subtitle + USP pill */}
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            {t.badge ? (
              <span className="inline-block mb-2 text-[16px] font-bold font-['Helvetica']">
                {t.badge}
              </span>
            ) : null}

            <h2 className="text-[52px] font-normal font-['Helvetica'] tracking-tight">
              {t.title}
            </h2>

            {t.subtitle ? (
              <p className="mt-3 max-w-2xl text-[18px] font-normal font-['Avenir Next'] text-black">
                {t.subtitle}
              </p>
            ) : null}
          </div>

          {t.usp ? (
            <div className="mt-2 md:mt-0">
              <span className="max-w-[425px] w-full h-[102px] bg-[#746FAE] text-[#f2f2f2] text-[22px] font-normal font-['Helvetica'] px-[30px] py-[20px] flex items-center justify-center rounded-lg shadow-sm">
                {t.usp}
              </span>
            </div>
          ) : null}
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {t.items.map((p, idx) => {
            const fallbackImg = imageMap[idx];
            return (
              <article
                key={`${p.title}-${idx}`}
                className="flex flex-col"
              >
                {/* Image */}
                <div className="rounded-xl bg-white shadow-sm ring-1 ring-black/5 overflow-hidden">
                  <div className="relative w-full max-w-[395px] aspect-[395/240]">
                    <Image
                      src={fallbackImg}
                      alt={p.title}
                      fill
                      className="object-cover object-center"
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                      priority={idx === 0}
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="mt-6">
                  <h3 className="text-[28px] font-normal font-['Helvetica']">{p.title}</h3>
                  {p.description ? (
                    <p className="mt-2 text-[16px] font-normal font-['Avenir Next'] text-black/60 leading-relaxed">
                      {p.description}
                    </p>
                  ) : null}
                </div>

                {/* Price + CTA grid */}
                <div className="mt-[87px] grid grid-rows-[auto_93px_auto]">
                  {/* Row 1: Price label */}
                  <div className="text-[52px] font-normal font-['Helvetica']">
                    {p.priceLabel}
                  </div>

                  {/* Row 2: Fixed 93px for meta (per month + fit note) */}
                  <div>
                    <div className="mt-1 text-[16px] font-bold font-['Avenir Next'] uppercase tracking-wide text-black/60">
                      {p.perMonth}
                    </div>
                    {p.fitNote ? (
                      <div className="mt-2 text-[16px] font-normal font-['Avenir Next'] text-black/60">
                        {p.fitNote}
                      </div>
                    ) : null}
                  </div>

                  {/* Row 3: CTA – starts exactly 93px under the price label */}
                  <div>
                    {p.slug ? (
                      <Link href={p.slug}>
                        <Button variant="teal" size="sm" className="bg-[#74C2CD] text-white font-['Avenir Next'] text-[16px] h-[36px] w-[149px] justify-center text-center !w-[149px] !h-[36px] !min-w-[149px] !min-h-[36px] px-0">
                          {p.ctaLabel}
                        </Button>
                      </Link>
                    ) : (
                      <Button variant="teal" size="sm" className="bg-[#74C2CD] text-white font-['Avenir Next'] text-[16px] h-[36px] w-[149px] justify-center text-center !w-[149px] !h-[36px] !min-w-[149px] !min-h-[36px] px-0">
                        {p.ctaLabel}
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Section footer actions (not repeated) */}
        <div className="mt-[80px] flex gap-4 items-center">
          <button
            className="w-[90px] h-[36px] text-[16px] font-normal font-['Avenir Next'] bg-transparent border border-[rgba(0,13,13,0.15)] text-black rounded-md inline-flex items-center justify-center text-center leading-none"
          >
            {t.footerSelect ?? (locale === "en" ? "Choose" : "Выбрать")}
          </button>
          <button
            className="w-[121px] h-[24px] text-[16px] font-normal font-['Avenir Next'] text-black inline-flex items-center justify-center text-center leading-none"
          >
            {t.footerMore ?? (locale === "en" ? "Learn more" : "Подробнее")}
          </button>
        </div>
      </div>
    </section>
  );
}
