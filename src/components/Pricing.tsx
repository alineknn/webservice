

"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import ru from "@/locales/ru/pricing.json";
import en from "@/locales/en/pricing.json";

// Rough draft table-based Pricing component per 1440px spec
// Desktop: 80px side margins inside 1440 frame; header 52px Helvetica centered
// Columns fixed width 203px; header height 53px; row height 68px
// Mobile: keep readable via horizontal scroll (no layout break yet)

type PricingRow = {
  plan: string;
  ram: string;
  vcpu: string;
  ssd: string;
  traffic: string;
  price: string;
  href?: string;
};

type PricingLocale = {
  title: string;
  headers: { plan: string; ram: string; vcpu: string; ssd: string; traffic: string; price: string };
  rows: PricingRow[];
  cta: string;
};

export default function PricingTable() {
  const { locale } = useRouter();
  const t = (locale === "en" ? (en as PricingLocale) : (ru as PricingLocale));

  return (
    <section id="pricing" className="pt-[112px] pb-[112px]">
      <div className="mx-auto w-full max-w-[1440px] px-[20px] lg:px-[80px]">
        <div className="mx-auto w-full max-w-[1280px]">
        {/* Title */}
        <h2 className="text-center text-[52px] font-normal font-['Helvetica'] leading-tight">
          {t.title}
        </h2>

        {/* Table wrapper for mobile scroll */}
        <div className="mt-[40px] overflow-x-auto">
          <table className="min-w-[1220px] w-full border-separate border-spacing-0">
            <thead>
              <tr className="text-left">
                {/* 6 fixed-width columns */}
                {[t.headers.plan, t.headers.ram, t.headers.vcpu, t.headers.ssd, t.headers.traffic, t.headers.price].map(
                  (h, i) => (
                    <th
                      key={i}
                      className="font-['Avenir Next'] font-bold text-[18px] h-[53px] align-middle text-black whitespace-nowrap border-b border-[rgba(0,13,13,0.15)]"
                      style={{ width: 203 }}
                    >
                      {h}
                    </th>
                  )
                )}
                <th className="w-[120px] border-b border-[rgba(0,13,13,0.15)]"></th>
              </tr>
            </thead>
            <tbody>
              {t.rows.map((r, idx) => (
                <tr key={idx}>
                  <td
                    className="font-['Avenir Next'] font-semibold text-[22px] h-[68px] align-middle border-b border-[rgba(0,13,13,0.15)] pr-4"
                    style={{ width: 203 }}
                  >
                    {r.plan}
                  </td>
                  <td
                    className="font-['Avenir Next'] text-[16px] h-[68px] align-middle text-black/80 border-b border-[rgba(0,13,13,0.15)]"
                    style={{ width: 203 }}
                  >
                    {r.ram}
                  </td>
                  <td
                    className="font-['Avenir Next'] text-[16px] h-[68px] align-middle text-black/80 border-b border-[rgba(0,13,13,0.15)]"
                    style={{ width: 203 }}
                  >
                    {r.vcpu}
                  </td>
                  <td
                    className="font-['Avenir Next'] text-[16px] h-[68px] align-middle text-black/80 border-b border-[rgba(0,13,13,0.15)]"
                    style={{ width: 203 }}
                  >
                    {r.ssd}
                  </td>
                  <td
                    className="font-['Avenir Next'] text-[16px] h-[68px] align-middle text-black/80 border-b border-[rgba(0,13,13,0.15)]"
                    style={{ width: 203 }}
                  >
                    {r.traffic}
                  </td>
                  <td
                    className="font-['Avenir Next'] text-[16px] h-[68px] align-middle text-black/80 border-b border-[rgba(0,13,13,0.15)]"
                    style={{ width: 203 }}
                  >
                    {r.price}
                  </td>
                  {/* Arrow */}
                  <td className="h-[68px] align-middle border-b border-[rgba(0,13,13,0.15)]">
                    <div className="flex justify-end pr-2">
                      <a
                        href={r.href || "#"}
                        className="inline-flex items-center justify-center w-[92px] h-[40px] rounded-full bg-[#746FAE]"
                        aria-label={`Go to ${r.plan}`}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 5l7 7-7 7" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="mt-[40px] flex justify-center">
          <a
            href="#configure"
            className="inline-flex items-center justify-center text-center bg-[#74C2CD] font-['Inter'] text-[18px] w-[320px] h-[64px] rounded-lg"
          >
            {t.cta}
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}