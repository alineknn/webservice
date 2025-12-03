"use client";

import Image from "next/image";
import { useT } from "@/hooks/useT";
import ru from "@/locales/ru/hosting_advantages.json";
import en from "@/locales/en/hosting_advantages.json";

// images (same folder as the hosting hero)
import imgAuto from "@/assets/images/hosting/auto_backup.svg";
import imgReady from "@/assets/images/hosting/ready_to_work.svg";
import imgCMS from "@/assets/images/hosting/cms.svg";
import imgISP from "@/assets/images/hosting/isp.svg";
import imgStorage from "@/assets/images/hosting/local_storage.svg"

export default function AdvantagesHosting() {
  const { t } = useT({ en, ru });
  const a = (t as any).advantagesHosting;

  return (
    <section id="hosting-advantages" className="pb-[80px]">
      <div className="mx-auto w-full max-w-[1280px] px-[20px] min-[1440px]:px-[80px]">
        {/* Heading */}
        <h2 className="text-center font-['Helvetica'] font-normal text-[36px] md:text-[44px] lg:text-[52px] leading-tight">
          {a.title}
        </h2>

        {/* ───────────────────────────────── Top row: 2 grey cards ───────────────────────────────── */}
        <div className="mt-[32px] grid grid-cols-1 md:grid-cols-2 min-[1440px]:grid-cols-[592px_592px] gap-x-[32px] gap-y-[32px] justify-center">
          {/* Card 1 – 592 x 280 */}
          <article className="relative bg-[#F2F2F2] rounded-xl shadow-sm w-full h-[331px] lg:h-[280px] overflow-hidden">
            <div className="p-6 lg:p-[24px] pr-[160px] lg:pr-[210px]">
              <h3 className="font-['Helvetica'] text-[24px] md:text-[26px] lg:text-[28px] leading-snug lg:max-w-[544px]">
                {a.top[0].title}
              </h3>
              <p className="mt-2 font-['Avenir Next'] text-[18px] md:text-[20px] text-black/80 lg:max-w-[360px]">
                {a.top[0].body}
              </p>
            </div>
            {/* image right corner: 186x192 */}
            <Image
              src={imgStorage}
              alt=""
              width={186}
              height={192}
              className="pointer-events-none select-none absolute right-[11px] bottom-[11px] lg:right-[19px] lg:bottom-[19px] translate-x-[15px] translate-y-[15px] object-contain"
              priority={false}
            />
          </article>

          {/* Card 2 – 592 x 280 */}
          <article className="relative bg-[#F2F2F2] rounded-xl shadow-sm w-full h-[379px] lg:h-[280px] overflow-hidden">
            <div className="p-6 lg:p-[24px] pr-[160px] lg:pr-[210px]">
              <h3 className="font-['Helvetica'] text-[24px] md:text-[26px] lg:text-[28px] leading-snug lg:max-w-[544px]">
                {a.top[1].title}
              </h3>
              <p className="mt-2 font-['Avenir Next'] text-[18px] md:text-[20px] text-black/80 lg:max-w-[360px]">
                {a.top[1].body}
              </p>
            </div>
            {/* image right corner: 187x187 */}
            <Image
              src={imgReady}
              alt=""
              width={187}
              height={187}
              className="pointer-events-none select-none absolute right-[11px] bottom-[11px] lg:right-[19px] lg:bottom-[19px] translate-x-[15px] translate-y-[15px] object-contain"
              priority={false}
            />
          </article>
        </div>

        {/* ───────────────────────────── Middle row: 640x365 + 256x365 + 256x365 ───────────────────────────── */}
        <div className="mt-[32px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[640px_256px_256px] gap-x-[32px] gap-y-[32px] justify-center">
          {/* 640 x 365 grey card with big image bottom-left */}
          <article className="relative bg-[#F2F2F2] rounded-xl shadow-sm w-full h-[349px] lg:h-[365px] overflow-hidden">
            <div className="p-6 lg:p-[24px] pr-[24px] lg:pr-[320px]">
              <h3 className="font-['Helvetica'] text-[24px] md:text-[26px] lg:text-[28px] leading-snug lg:max-w-[544px]">
                {a.middle.left.title}
              </h3>
              <p className="mt-2 font-['Avenir Next'] text-[18px] md:text-[20px] text-black/80 lg:max-w-[319px]">
                {a.middle.left.body}
              </p>
            </div>
            {/* image ~ bottom-right: 406x271 */}
            <Image
              src={imgCMS}
              alt=""
              width={406}
              height={271}
              className="pointer-events-none select-none absolute right-[3px] bottom-[3px] lg:right-[7px] lg:bottom-[7px] translate-x-[15px] translate-y-[15px] object-contain w-[290px] h-[193px] lg:w-[406px] lg:h-[271px]"
              priority={false}
            />
          </article>

          {/* 256 x 365 teal card */}
          <article className="relative rounded-xl shadow-sm w-full lg:h-[365px] overflow-hidden bg-[#74C2CD]">
            <div className="pt-6 pb-6 pr-3 pl-6 lg:pt-[24px] lg:pb-[24px] lg:pr-[12px] lg:pl-[24px]">
              <h3 className="font-['Helvetica'] font-normal text-black text-[24px] md:text-[26px] lg:text-[28px] leading-snug">
                {a.middle.mid.title}
              </h3>
              <p className="mt-2 font-['Avenir Next'] font-normal text-black/90 text-[18px] md:text-[20px]">
                {a.middle.mid.body}
              </p>
            </div>
          </article>

          {/* 256 x 365 purple card */}
          <article className="relative rounded-xl shadow-sm w-full lg:h-[365px] overflow-hidden bg-[#746FAE]">
            <div className="pt-6 pb-6 pr-3 pl-6 lg:pt-[24px] lg:pb-[24px] lg:pr-[12px] lg:pl-[24px]">
              <h3 className="font-['Helvetica'] font-normal text-white text-[24px] md:text-[26px] lg:text-[28px] leading-snug">
                {a.middle.right.title}
              </h3>
              <p className="mt-2 font-['Avenir Next'] font-normal text-white/90 text-[18px] md:text-[20px]">
                {a.middle.right.body}
              </p>
            </div>
          </article>
        </div>

        {/* ───────────────────────────────── Bottom row: 2 grey cards ───────────────────────────────── */}
        <div className="mt-[32px] grid grid-cols-1 md:grid-cols-2 min-[1440px]:grid-cols-[592px_592px] gap-x-[32px] gap-y-[32px] justify-center">
          {/* 592 x 280 */}
          <article className="relative bg-[#F2F2F2] rounded-xl shadow-sm w-full h-[339px] lg:h-[280px] overflow-hidden">
            <div className="p-6 lg:p-[24px] pr-[24px] lg:pr-[240px]">
              <h3 className="font-['Helvetica'] text-[24px] md:text-[26px] lg:text-[28px] leading-snug lg:max-w-[420px]">
                {a.bottom[0].title}
              </h3>
              <p className="mt-2 font-['Avenir Next'] text-[18px] md:text-[20px] text-black/80 lg:max-w-[360px]">
                {a.bottom[0].body}
              </p>
            </div>
            {/* image bottom, centered on mobile; bottom-right on desktop */}
            <Image
              src={imgAuto}
              alt=""
              width={226}
              height={226}
              className="pointer-events-none select-none absolute left-1/2 bottom-[8px] -translate-x-1/2 translate-y-[15px] lg:left-auto lg:right-[12px] lg:bottom-[12px] lg:translate-x-[15px] lg:translate-y-[15px] object-contain w-[198px] h-[171px] lg:w-[226px] lg:h-[226px]"
              priority={false}
            />
          </article>

          {/* 592 x 280 */}
          <article className="relative bg-[#F2F2F2] rounded-xl shadow-sm w-full h-[413px] lg:h-[280px] overflow-hidden">
            <div className="p-6 lg:p-[24px] pr-[24px] lg:pr-[240px]">
              <h3 className="font-['Helvetica'] text-[24px] md:text-[26px] lg:text-[28px] leading-snug lg:max-w-[420px]">
                {a.bottom[1].title}
              </h3>
              <p className="mt-2 font-['Avenir Next'] text-[18px] md:text-[20px] text-black/80 lg:max-w-[360px]">
                {a.bottom[1].body}
              </p>
            </div>
            {/* image bottom, centered on mobile; bottom-right on desktop */}
            <Image
              src={imgISP}
              alt=""
              width={184}
              height={184}
              className="pointer-events-none select-none absolute left-1/2 bottom-[18px] -translate-x-1/2 translate-y-[15px] lg:left-auto lg:right-[22px] lg:bottom-[22px] lg:translate-x-[15px] lg:translate-y-[15px] object-contain"
              priority={false}
            />
          </article>
        </div>
      </div>
    </section>
  );
}