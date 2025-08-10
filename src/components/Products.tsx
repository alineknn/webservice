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
    <section id="products" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-screen-2xl">
        {/* Top row: badge/title/subtitle + USP pill */}
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            {t.badge ? (
              <span className="inline-block mb-2 rounded-full bg-black/10 px-3 py-1 text-sm">
                {t.badge}
              </span>
            ) : null}

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              {t.title}
            </h2>

            {t.subtitle ? (
              <p className="mt-3 max-w-2xl text-black/60">{t.subtitle}</p>
            ) : null}
          </div>

          {t.usp ? (
            <div className="mt-2 md:mt-0">
              <span className="inline-block rounded-lg bg-[#746FAE] text-white/95 px-5 py-3 text-sm shadow-sm">
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
                  <div className="relative w-full aspect-[16/9]">
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
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  {p.description ? (
                    <p className="mt-2 text-sm text-black/60 leading-relaxed">
                      {p.description}
                    </p>
                  ) : null}
                </div>

                {/* Price */}
                <div className="mt-6">
                  <div className="text-3xl md:text-4xl font-semibold">
                    {p.priceLabel}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wide text-black/60">
                    {p.perMonth}
                  </div>
                  {p.fitNote ? (
                    <div className="mt-2 text-sm text-black/60">{p.fitNote}</div>
                  ) : null}
                </div>

                {/* CTA */}
                <div className="mt-6">
                  {p.slug ? (
                    <Link href={p.slug}>
                      <Button variant="teal" size="sm" className="px-4">
                        {p.ctaLabel}
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="teal" size="sm" className="px-4">
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
