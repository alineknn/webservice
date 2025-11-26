"use client";

import Link from "next/link";
import Image from "next/image";
import { useT } from "@/hooks/useT";
import ru from "@/locales/ru/hosting_tariff.json";
import en from "@/locales/en/hosting_tariff.json";
import CHECK from "@/assets/images/hosting/check.svg";

function ArrowRight({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h12" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export default function HostingTariff() {
  const { t } = useT({ en, ru }) as any;

  const cols = t.columns as string[];
  const rows = t.rows as Array<{
    name: string;
    domains: string | number;
    ssd: string;
    traffic: string;
    price: string;
    href?: string;
  }>;

  const featuresLeft = t.featuresLeft as string[];
  const featuresRight = t.featuresRight as string[];

  return (
    <section id="hosting-tariff" className="pt-[112px] pb-[80px]">
      <div className="mx-auto w-full max-w-[1280px] px-[20px] min-[1440px]:px-[80px]">
        {/* Heading */}
        <h2 className="font-['Helvetica'] font-normal text-[36px] md:text-[44px] lg:text-[52px] leading-tight text-center">
          {t.title}
        </h2>

        {/* Desktop Table */}
        <div className="mt-10 hidden md:block">
          <div className="grid grid-cols-[minmax(220px,2fr)_1fr_1fr_1fr_1fr_92px] items-center text-left text-[16px] font-['Avenir Next'] font-semibold text-black/80 pb-4 border-b border-black/10">
            <div>{cols[0]}</div>
            <div>{cols[1]}</div>
            <div>{cols[2]}</div>
            <div>{cols[3]}</div>
            <div>{cols[4]}</div>
            <div />
          </div>

          {rows.map((r, i) => (
            <div
              key={r.name + i}
              className="grid grid-cols-[minmax(220px,2fr)_1fr_1fr_1fr_1fr_92px] items-center text-left py-6 border-b border-black/10"
            >
              <div className="font-['Avenir Next'] text-[18px] font-semibold tracking-wide uppercase">
                {r.name}
              </div>
              <div className="font-['Avenir Next'] text-[18px] text-black/80">{r.domains}</div>
              <div className="font-['Avenir Next'] text-[18px] text-black/80">{r.ssd}</div>
              <div className="font-['Avenir Next'] text-[18px] text-[#4D5B7C]">{r.traffic}</div>
              <div className="font-['Avenir Next'] text-[18px]">{r.price}</div>
              <div className="flex justify-end">
                <Link
                  href={r.href || "#"}
                  className="inline-flex items-center justify-center w-[92px] h-[40px] rounded-full bg-[#746FAE] text-white"
                  aria-label={t.rowCtaAria || "Подробнее"}
                >
                  <ArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="mt-8 md:hidden space-y-4">
          {rows.map((r, i) => (
            <div key={r.name + i} className="rounded-xl border border-black/10 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="font-['Avenir Next'] text-[18px] font-semibold tracking-wide uppercase">
                    {r.name}
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-3 text-[16px] font-['Avenir Next'] text-black/80">
                    <div>
                      <div className="text-black/60">{cols[1]}</div>
                      <div>{r.domains}</div>
                    </div>
                    <div>
                      <div className="text-black/60">{cols[2]}</div>
                      <div>{r.ssd}</div>
                    </div>
                    <div>
                      <div className="text-black/60">{cols[3]}</div>
                      <div className="text-[#4D5B7C]">{r.traffic}</div>
                    </div>
                    <div>
                      <div className="text-black/60">{cols[4]}</div>
                      <div>{r.price}</div>
                    </div>
                  </div>
                </div>
                <Link
                  href={r.href || "#"}
                  className="shrink-0 inline-flex items-center justify-center w-[44px] h-[36px] rounded-full bg-[#746FAE] text-white mt-1"
                  aria-label={t.rowCtaAria || "Подробнее"}
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mt-12">
          <div className="font-['Avenir Next'] font-semibold text-[20px] md:text-[22px]">
            {t.includedTitle}
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-[max-content_max-content] md:justify-start gap-x-[48px] gap-y-[2px]">
            <ul className="list-none p-0 m-0 w-full md:w-auto grid grid-cols-1 auto-rows-[36px] gap-y-0">
              {featuresLeft.map((f: string, i: number) => (
                <li key={i} className="h-[36px] grid grid-cols-[24px_max-content] items-center gap-3 font-['Avenir Next'] text-[18px]">
                  <Image src={CHECK} alt="" width={24} height={24} className="mt-[2px]" />
                  <span className="whitespace-nowrap" title={f}>{f}</span>
                </li>
              ))}
            </ul>
            <ul className="list-none p-0 m-0 w-full md:w-auto grid grid-cols-1 auto-rows-[36px] gap-y-0">
              {featuresRight.map((f: string, i: number) => (
                <li key={i} className="h-[36px] grid grid-cols-[24px_max-content] items-center gap-3 font-['Avenir Next'] text-[18px]">
                  <Image src={CHECK} alt="" width={24} height={24} className="mt-[2px]" />
                  <span className="whitespace-nowrap" title={f}>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href={t.buildHref || "#"}
            className="inline-flex items-center justify-center w-[320px] h-[64px] rounded-md bg-[#74C2CD] text-black font-['Inter'] text-[18px]"
          >
            {t.buildCta}
          </Link>
        </div>
      </div>
    </section>
  );
}