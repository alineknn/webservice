import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/Contact";
import en from "@/locales/en/vps_hosting.json";
import ru from "@/locales/ru/vps_hosting.json";

import vpsImage from "@/assets/images/vps image map.png";

export const metadata: Metadata = {
  title: "VPS Hosting | WEBSERVICE",
  description:
    "VPS hosting with dedicated CPU/RAM/SSD, OS choice, and easy monitoring. Reliable infrastructure in Kyrgyzstan.",
};

export default function VPSHostingPage() {
  const t = ru as any;

  return (
    <main id="vps-hosting">
      {/* Hero / Header */}
      <section className="pt-[112px] pb-[112px]">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 min-[1440px]:px-[80px]">
          {/* Heading */}
          <div className="text-center">
            <div className="mx-auto max-w-[1016px]">
              <h1 className="text-[52px] font-normal font-['Helvetica'] leading-[1.2]">
                {t.hero.title}
              </h1>
            </div>
            <div className="mt-6 mx-auto max-w-[768px]">
              <p className="text-[18px] font-normal font-['Avenir Next'] text-black/70">
                {t.hero.subtitle}
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="#plans"
                className="inline-flex items-center justify-center text-center bg-[#74C2CD] text-white font-['Avenir Next'] text-[20px] !w-[310px] !h-[64px] rounded-lg font-light"
              >
                {t.hero.ctaPrimary}
              </Link>
              <Link
                href="#plans"
                className="inline-flex items-center justify-center text-center bg-[#746FAE] text-white font-['Avenir Next'] text-[18px] !w-[310px] !h-[64px] rounded-lg"
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
                sizes="(min-width: 1440px) 1280px, calc(100vw - 160px)"
              />
            </div>
          </div>


        </div>
      </section>

      {/* Advantages */}
      <section id="advantages" className="pt-[112px] pb-[112px]">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 min-[1440px]:px-[80px]">
          <h2 className="text-center text-[52px] font-normal font-['Helvetica'] leading-[1.2]">
            {t.advantages.heading}
          </h2>

          {/* Top row: exact 1x3 (640/288/288) */}
          <div className="mt-[48px] grid grid-cols-1 min-[1280px]:grid-cols-[640px_288px_288px] gap-[32px]">
            {/* Big left card */}
            <article className="rounded-xl bg-[#746FAE] text-white min-[1280px]:h-[392px] pl-[48px] pr-[48px] pt-[48px] pb-[48px]">
              <Image src={t.advantages.top.big.icon} alt="SSD" width={100} height={70} className="w-[100px] h-[70px] object-contain" />
              <h3 className="mt-[24px] text-[44px] font-normal font-['Helvetica'] leading-tight">
                {t.advantages.top.big.title}
              </h3>
              <p className="mt-[24px] text-[16px] font-normal font-['Avenir Next']">
                {t.advantages.top.big.text}
              </p>
            </article>

            {/* Small middle card */}
            <article className="rounded-xl border border-[rgba(0,13,13,0.15)] bg-white min-[1280px]:h-[392px] pt-[24px] px-[24px] pb-[72px]">
              <Image src={t.advantages.top.mid.icon} alt="UPTIME" width={78} height={82} className="w-[78px] h-[82px] object-contain" />
              <h3 className="mt-[8px] text-[28px] font-normal font-['Helvetica'] leading-snug">{t.advantages.top.mid.title}</h3>
              <p className="mt-[8px] text-[18px] font-normal font-['Avenir Next'] text-black/70">{t.advantages.top.mid.text}</p>
            </article>

            {/* Small right card */}
            <article className="rounded-xl border border-[rgba(0,13,13,0.15)] bg-white min-[1280px]:h-[392px] pt-[24px] px-[24px] pb-[72px]">
              <Image src={t.advantages.top.right.icon} alt="ISPsystem" width={78} height={82} className="w-[78px] h-[82px] object-contain" />
              <h3 className="mt-[8px] text-[28px] font-normal font-['Helvetica'] leading-snug">{t.advantages.top.right.title}</h3>
              <p className="mt-[8px] text-[18px] font-normal font-['Avenir Next'] text-black/70">{t.advantages.top.right.text}</p>
            </article>
          </div>

          {/* Bottom row: exact 1x3 (288/288/640) with 80px top gap */}
          <div className="mt-[80px] grid grid-cols-1 min-[1280px]:grid-cols-[288px_288px_640px] gap-[32px]">
            {/* Small left */}
            <article className="rounded-xl border border-[rgba(0,13,13,0.15)] bg-white min-[1280px]:h-[392px] pt-[24px] px-[24px] pb-[72px]">
              <Image src={t.advantages.bottom.left.icon} alt="Secure" width={78} height={82} className="w-[78px] h-[82px] object-contain" />
              <h3 className="mt-[8px] text-[28px] font-normal font-['Helvetica'] leading-snug">{t.advantages.bottom.left.title}</h3>
              <p className="mt-[8px] text-[18px] font-normal font-['Avenir Next'] text-black/70">{t.advantages.bottom.left.text}</p>
            </article>

            {/* Small middle */}
            <article className="rounded-xl border border-[rgba(0,13,13,0.15)] bg-white min-[1280px]:h-[392px] pt-[24px] px-[24px] pb-[72px]">
              <Image src={t.advantages.bottom.mid.icon} alt="Scale" width={78} height={82} className="w-[78px] h-[82px] object-contain" />
              <h3 className="mt-[8px] text-[28px] font-normal font-['Helvetica'] leading-snug">{t.advantages.bottom.mid.title}</h3>
              <p className="mt-[8px] text-[18px] font-normal font-['Avenir Next'] text-black/70">{t.advantages.bottom.mid.text}</p>
            </article>

            {/* Big right */}
            <article className="rounded-xl bg-[#74C2CD] min-[1280px]:h-[392px] pl-[48px] pr-[48px] pt-[48px] pb-[48px]">
              <Image src={t.advantages.bottom.big.icon} alt="Pricing" width={100} height={70} className="w-[100px] h-[70px] object-contain" />
              <h3 className="mt-[24px] text-[44px] font-normal font-['Helvetica'] leading-tight">
                {t.advantages.bottom.big.title}
              </h3>
              <p className="mt-[24px] text-[16px] font-normal font-['Avenir Next']">
                {t.advantages.bottom.big.text}
              </p>
            </article>
          </div>
        </div>
      </section>
      <Contact></Contact>
    </main>
  );
}