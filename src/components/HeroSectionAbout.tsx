"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import heroImage from '@/assets/images/about/hero-orb.svg';
import en from "@/locales/en/about_hero.json";
import ru from "@/locales/ru/about_hero.json";

type AboutHeroT = {
  badge: string;
  title: string;
  body: string;
  primaryCta: string;
  primaryHref?: string;
  secondaryCta: string;
  secondaryHref?: string;
  image?: string; // optional public path, hidden on mobile
};

export default function HeroSectionAbout() {
  const { locale } = useRouter();
  const t = (locale === "en" ? (en as AboutHeroT) : (ru as AboutHeroT));

  return (
    <section id="about-hero" className="relative md:py-0  overflow-hidden">
      <div className="relative mx-auto w-full max-w-[1280px] px-[20px] min-[1440px]:px-[80px] py-[64px]">
        {/* Decorative image (desktop only) with margins: L=851, T=112 */}
        <div className="hidden md:block pointer-events-none absolute top-[112px] left-[851px] z-0">
          <Image
            src={heroImage}
            alt="About hero"
            width={509}
            height={509}
            priority
            className="w-auto h-auto"
          />
        </div>

        {/* Text block */}
        <div className="pt-0 md:pt-[187px] relative z-10 max-w-[720px]">
          {/* Subheading */}
          <p className="font-['Helvetica'] font-bold text-[16px]">{t.badge}</p>

          {/* Heading */}
          <h1 className="mt-3 md:mt-4 text-[44px] md:text-[72px] font-['Helvetica'] leading-tight">
            {t.title}
          </h1>

          {/* Body */}
          <p className="mt-5 md:mt-6 text-[12px] md:text-[18px] font-['Avenir Next'] leading-relaxed">
            {t.body}
          </p>

          {/* CTAs */}
          <div className="mt-6 md:mt-8 flex items-center gap-4">
            <Link href={t.primaryHref || "#"} className="inline-flex items-center justify-center text-center w-[110px] md:w-[139px] h-[30px] md:h-[36px] rounded-md bg-[#2563EB] text-white font-['Inter'] text-[14px] md:text-[16px]">
              {t.primaryCta}
            </Link>
            <Link
              href={t.secondaryHref || "#"}
              className="inline-flex items-center justify-center text-center w-[82px] md:w-[102px] h-[30px] md:h-[36px] rounded-md bg-white border border-[#000D0D26] text-black font-['Inter'] text-[14px] md:text-[16px]"
            >
              {t.secondaryCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
