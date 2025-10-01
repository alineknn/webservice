"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ru from "@/locales/ru/statistics.json";
import en from "@/locales/en/statistics.json";
import STAT_PLACEHOLDER from '@/assets/images/about/Placeholder Image About.svg';
type Stat = { value: string; label: string };
type Copy = {
    badge: string;
    title: string;
    lede: string;
    stats: Stat[];
    primaryCta: string;
    primaryHref?: string;
    secondaryCta: string;
    secondaryHref?: string;
};

export default function Statistics() {
    const { locale } = useRouter();
    const t: Copy = (locale === "en" ? (en as Copy) : (ru as Copy));

    return (
        <section className="py-[112px]">
            <div className="mx-auto w-full max-w-[1280px] px-[20px] min-[1440px]:px-[80px]">
                <div className="grid md:grid-cols-2 gap-y-8 md:gap-y-0 md:gap-x-[80px] items-start">
                    {/* Left: badge + title */}
                    <div>
                        <p className="font-['Helvetica'] font-bold text-[16px]">
                            {t.badge}
                        </p>
                        <h2 className="mt-3 md:mt-4 font-['Helvetica'] text-[36px] md:text-[52px] leading-tight">
                            {t.title}
                        </h2>
                    </div>

                    {/* Right: lede, stats, CTAs */}
                    <div>
                        {/* Lede */}
                        <p className="font-['Avenir Next'] text-[16px] md:text-[18px] leading-relaxed">
                            {t.lede}
                        </p>

                        {/* Stats */}
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {t.stats.slice(0, 2).map((s, i) => (
                                <div key={`${s.value}-${i}`} className="max-w-[380px]">
                                    <div className="font-['Helvetica'] text-[40px] md:text-[52px] leading-none">
                                        {s.value}
                                    </div>
                                    <p className="mt-2 font-['Avenir Next'] text-[14px] md:text-[16px] leading-relaxed text-black/80">
                                        {s.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="mt-6 md:mt-8 flex items-center gap-4">
                            <Link
                                href={t.primaryHref || "#"}
                                className="inline-flex items-center justify-center text-center
               w-[110px] md:w-[139px] h-[30px] md:h-[36px]
               rounded-md bg-[#2563EB] text-white font-['Inter'] text-[14px] md:text-[16px]"
                            >
                                {t.primaryCta}
                            </Link>
                            <Link
                                href={t.secondaryHref || "#"}
                                className="inline-flex items-center justify-center text-center
               w-[82px] md:w-[102px] h-[30px] md:h-[36px]
               rounded-md bg-white border border-[#000D0D26]
               text-black font-['Inter'] text-[14px] md:text-[16px]"
                            >
                                {t.secondaryCta}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Image 80px below CTAs; centered; desktop 1280×738; responsive */}
                <div className="mt-[80px]">
                    <Image
                        src={STAT_PLACEHOLDER}
                        alt=""
                        width={1280}
                        height={738}
                        className="w-full h-auto rounded-xl mx-auto"
                        priority
                        sizes="(min-width: 1440px) 1280px, calc(100vw - 40px)"
                    />
                </div>
            </div>
        </section>
    );
}