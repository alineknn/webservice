import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/Contact";
import PricingTable from "@/components/Pricing";
import Faq from "@/components/Faqs";
import en from "@/locales/en/vps_hosting.json";
import ru from "@/locales/ru/vps_hosting.json";

import vpsImage from "@/assets/images/vps/vps hero image.svg";

import ssdIcon from "@/assets/images/vps/SSD.svg";
import uptimeIcon from "@/assets/images/vps/uptime.svg";
import checkIcon from "@/assets/images/vps/check.svg"; 
import lockIcon from "@/assets/images/vps/Lock.svg";
import scaleIcon from "@/assets/images/vps/scale.svg";
import tariffIcon from "@/assets/images/vps/tariff.svg";

import solCrm from "@/assets/images/vps/crm.svg"; 
import solDev from "@/assets/images/vps/development.svg";
import solStorage from "@/assets/images/vps/storage-vps.svg";
import solAI from "@/assets/images/vps/AI.svg";
import solEcommerce from "@/assets/images/vps/e-commerce-vps.svg";
import solProxy from "@/assets/images/vps/proxy.svg";
import solApi from "@/assets/images/vps/api.svg";
import HowToTrial from "@/components/HowToTrial";
import Faqs from "@/components/Faqs";

export const metadata: Metadata = {
  title: "VPS Hosting | WEBSERVICE",
  description:
    "VPS hosting with dedicated CPU/RAM/SSD, OS choice, and easy monitoring. Reliable infrastructure in Kyrgyzstan.",
};

export default function VPSHostingPage() {
  const t = ru as any;

  const hasSolutions = Array.isArray(t?.solutions?.items) && t.solutions.items.length > 0;
  const solutionsItems = (t?.solutions?.items ?? []) as any[];
  const leftSolutions = solutionsItems.slice(0, 4);
  const rightSolutions = solutionsItems.slice(4);

  const solutionImages = [
    solCrm,
    solDev,
    solStorage,
    solAI,
    solEcommerce,
    solProxy,
    solApi,
  ];

  // Precise image sizes for Solutions (desktop)
  const leftSizes = [
    { w: 140, h: 140 }, // 1st row
    { w: 140, h: 140 }, // 2nd row
    { w: 150, h: 150 }, // 3rd row
    { w: 140, h: 140 }, // 4th row
  ] as const;
  const rightSizes = [
    { w: 140, h: 140 }, // 1st row (right col)
    { w: 140,  h: 140 }, // 2nd row
    { w: 155, h: 132 }, // 3rd row
  ] as const;

  return (
    <main id="vps-hosting">
      {/* Hero / Header */}
      <section className="pt-[112px] pb-[112px]">
        <div className="mx-auto w-full max-w-[1440px] px-[20px] lg:px-[80px]">
          <div className="mx-auto w-full max-w-[1280px]">
          {/* Heading */}
          <div className="text-left md:text-center">
            <div className="mx-auto max-w-[1016px]">
              <h1 className="text-[40px] md:text-[52px] font-normal font-['Helvetica'] leading-[1.2]">
                {t.hero.title}
              </h1>
            </div>
            <div className="mt-6 mx-auto max-w-[768px]">
              <p className="text-[12px] md:text-[18px] font-normal font-['Avenir Next'] text-black/70 text-left md:text-center">
                {t.hero.subtitle}
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="#plans"
                className="inline-flex items-center justify-center text-center whitespace-nowrap bg-[#74C2CD] font-['Avenir Next'] text-[14px] md:text-[18px] !w-[335px] !h-[47px] md:!w-[310px] md:!h-[64px] rounded-lg font-light"
              >
                {t.hero.ctaPrimary}
              </Link>
              <Link
                href="#plans"
                className="inline-flex items-center justify-center text-center whitespace-nowrap bg-[#746FAE] text-white font-['Avenir Next'] text-[14px] md:text-[18px] !w-[335px] !h-[47px] md:!w-[310px] md:!h-[64px] rounded-lg"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>

            {/* Illustration */}
            <div className="mt-[80px]">
              <Image
                src={vpsImage}
                alt={t.hero.imageAlt}
                width={1280}
                height={650}
                className="mx-auto w-full max-w-[1280px] h-auto rounded-xl"
                priority
                sizes="(min-width: 1440px) 1280px, (min-width: 1024px) calc(100vw - 160px), calc(100vw - 40px)"
              />
            </div>
          </div>
        </div>

        </div>
      </section>

      {/* Advantages */}
      <section id="advantages" className="pt-[112px] pb-[112px]">
        <div className="mx-auto w-full max-w-[1440px] px-[20px] lg:px-[80px]">
          <div className="mx-auto w-full max-w-[1280px]">
          <h2 className="text-left md:text-center text-[40px] md:text-[52px] font-normal font-['Helvetica'] leading-[1.2]">
            {t.advantages.heading}
          </h2>

          {/* Top row: exact 1x3 (640/288/288) */}
          <div className="mt-[48px] grid grid-cols-1 min-[1280px]:grid-cols-[640px_288px_288px] gap-[32px]">
            {/* Big left card */}
            <article className="rounded-xl bg-[#746FAE] text-white min-[1280px]:h-[392px] pl-[48px] pr-[48px] pt-[87px] pb-[87px] min-[1280px]:pt-[48px] min-[1280px]:pb-[48px]">
              <Image src={ssdIcon} alt="SSD" width={99} height={69} className="w-[99px] h-[69px] object-contain" />
              <h3 className="mt-[24px] text-[24px] md:text-[44px] font-normal font-['Helvetica'] leading-tight">
                {t.advantages.top.big.title}
              </h3>
              <p className="mt-[24px] text-[12px] md:text-[16px] font-normal font-['Avenir Next']">
                {t.advantages.top.big.text}
              </p>
            </article>

            {/* Small middle card */}
            <article className="rounded-xl border border-[rgba(0,13,13,0.15)] bg-white min-[1280px]:h-[392px] pt-[24px] px-[24px] pb-[72px]">
              <Image src={uptimeIcon} alt="Uptime" width={78} height={82} className="w-[78px] h-[82px] object-contain" />
              <h3 className="mt-[8px] text-[24px] md:text-[28px] font-normal font-['Helvetica'] leading-snug">{t.advantages.top.mid.title}</h3>
              <p className="mt-[8px] text-[12px] md:text-[18px] font-normal font-['Avenir Next'] text-black/70">{t.advantages.top.mid.text}</p>
            </article>

            {/* Small right card */}
            <article className="rounded-xl border border-[rgba(0,13,13,0.15)] bg-white min-[1280px]:h-[392px] pt-[24px] px-[24px] pb-[72px]">
              <Image src={checkIcon} alt="Check" width={80} height={60} className="w-[80px] h-[60px] object-contain" />
              <h3 className="mt-[8px] text-[24px] md:text-[28px] font-normal font-['Helvetica'] leading-snug">{t.advantages.top.right.title}</h3>
              <p className="mt-[8px] text-[12px] md:text-[18px] font-normal font-['Avenir Next'] text-black/70">{t.advantages.top.right.text}</p>
            </article>
          </div>

          {/* Bottom row: exact 1x3 (288/288/640) with 80px top gap */}
          <div className="mt-[32px] min-[1280px]:mt-[80px] grid grid-cols-1 min-[1280px]:grid-cols-[288px_288px_640px] gap-[32px]">
            {/* Small left */}
            <article className="rounded-xl border border-[rgba(0,13,13,0.15)] bg-white min-[1280px]:h-[392px] pt-[24px] px-[24px] pb-[72px]">
              <Image src={lockIcon} alt="Secure" width={49} height={60} className="w-[49px] h-[60px] object-contain" />
              <h3 className="mt-[8px] text-[24px] md:text-[28px] font-normal font-['Helvetica'] leading-snug">{t.advantages.bottom.left.title}</h3>
              <p className="mt-[8px] text-[12px] md:text-[18px] font-normal font-['Avenir Next'] text-black/70">{t.advantages.bottom.left.text}</p>
            </article>

            {/* Small middle */}
            <article className="rounded-xl border border-[rgba(0,13,13,0.15)] bg-white min-[1280px]:h-[392px] pt-[24px] px-[24px] pb-[72px]">
              <Image src={scaleIcon} alt="Scale" width={52} height={52} className="w-[52px] h-[52px] object-contain" />
              <h3 className="mt-[8px] text-[24px] md:text-[28px] font-normal font-['Helvetica'] leading-snug">{t.advantages.bottom.mid.title}</h3>
              <p className="mt-[8px] text-[12px] md:text-[18px] font-normal font-['Avenir Next'] text-black/70">{t.advantages.bottom.mid.text}</p>
            </article>

            {/* Big right */}
            <article className="rounded-xl bg-[#74C2CD] min-[1280px]:h-[392px] pl-[23px] pr-[19px] pt-[38px] pb-[58px] min-[1280px]:pl-[48px] min-[1280px]:pr-[48px] min-[1280px]:pt-[48px] min-[1280px]:pb-[48px]">
              <Image src={tariffIcon} alt="Pricing" width={59} height={59} className="w-[59px] h-[59px] object-contain" />
              <h3 className="mt-[24px] text-[24px] md:text-[44px] font-normal font-['Helvetica'] leading-tight">
                {t.advantages.bottom.big.title}
              </h3>
              <p className="mt-[24px] text-[12px] md:text-[16px] font-normal font-['Avenir Next']">
                {t.advantages.bottom.big.text}
              </p>
            </article>
          </div>
        </div>
      </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="pt-[112px] pb-0">
        <div className="mx-auto w-full max-w-[1440px] px-[20px] lg:px-[80px]">
          <div className="mx-auto w-full max-w-[1280px]">
          <h2 className="text-[36px] md:text-[52px] font-normal font-['Helvetica'] leading-tight text-center md:text-left">
            {t.solutions?.title}
          </h2>

          <div className="mt-8 grid grid-cols-1 min-[1280px]:grid-cols-[625px_625px] gap-y-0 min-[1280px]:gap-x-[30px]">
            {/* Left column: 4 items */}
            <div className="flex flex-col">
              {leftSolutions.map((s: any, idx: number) => (
                <div
                  key={`solution-left-${idx}`}
                  className={`flex items-center justify-between gap-6 md:gap-10 h-[185px] overflow-hidden border-[rgba(0,13,13,0.12)] ${idx === 0 ? 'border-t' : ''} ${idx === leftSolutions.length - 1 ? 'border-b-0' : 'border-b'} py-[16px] px-[10px]`}
                >
                  <div className="pr-4 min-w-0">
                    <h3 className="text-[28px] font-normal font-['Helvetica'] leading-snug">{s.title}</h3>
                    <p className="mt-2 text-[16px] font-normal font-['Avenir Next'] text-black/70 whitespace-nowrap overflow-hidden text-ellipsis">{s.text}</p>
                  </div>
                  <Image
                    src={solutionImages[idx]}
                    alt={`${s.title} illustration`}
                    width={leftSizes[idx].w}
                    height={leftSizes[idx].h}
                    className="hidden md:block object-contain flex-none shrink-0 transform translate-y-1 max-h-[185px]"
                    style={{ width: leftSizes[idx].w }}
                  />
                </div>
              ))}
            </div>
            {/* Right column: remaining 3 items */}
            <div className="flex flex-col">
              {rightSolutions.map((s: any, idx: number) => (
                <div
                  key={`solution-right-${idx}`}
                  className={`flex items-center justify-between gap-6 md:gap-10 h-[185px] overflow-hidden border-[rgba(0,13,13,0.12)] ${idx === 0 ? 'border-t' : ''} border-b py-[16px] px-[10px]`}
                >
                  <div className="pr-4 min-w-0">
                    <h3 className="text-[28px] font-normal font-['Helvetica'] leading-snug">{s.title}</h3>
                    <p className="mt-2 text-[16px] font-normal font-['Avenir Next'] text-black/70 whitespace-nowrap overflow-hidden text-ellipsis">{s.text}</p>
                  </div>
                  <Image
                    src={solutionImages[idx + leftSolutions.length]}
                    alt={`${s.title} illustration`}
                    width={rightSizes[idx].w}
                    height={rightSizes[idx].h}
                    className="hidden md:block object-contain flex-none shrink-0 transform translate-y-1 max-h-[185px]"
                    style={{ width: rightSizes[idx].w }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      </section>
      <PricingTable />

      <div className="-mt-[112px]">
        <HowToTrial />
      </div>
      <div className="-mt-[112px]">
        <Faqs />
      </div>
      <div className="-mt-[112px]">
        <Contact />
      </div>
    </main>
  );
}