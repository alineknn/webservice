"use client";
import Link from "next/link";
import Button from "./Button";
import { useRouter } from "next/navigation";
import ru from "@/locales/ru/hero.json";
import en from "@/locales/en/hero.json";
import Image from 'next/image';
import heroImage from '@/assets/images/map of kg.png';

export default function Hero() {
  const router = useRouter();
  const locale = router.locale ?? "ru";
  const t = locale === "en" ? en : ru;

  return (
    <section
      id="Home"
      className="py-4 lg:py-8 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Main headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tight">
          {Array.isArray(t.headlineParts)
            ? t.headlineParts.map((part, idx) => (
                <span key={idx} className={
                  idx === 0 ? "text-[#74C2CD]" : idx === 2 ? "text-[#746FAE]" : ""
                }>
                  {part}
                </span>
              ))
            : t.headline}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg md:text-xl text-blue/50">
          {t.subtitle}
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/vps-hosting">
            <Button variant="teal" size="md" className="px-8">
              {t.cta.vps}
            </Button>
          </Link>
          <Link href="/web-hosting">
            <Button variant="purple" size="md" className="px-8">
              {t.cta.web}
            </Button>
          </Link>
          <Link href="/ssl-certificates">
            <Button variant="black" size="md" className="px-8">
              {t.cta.ssl}
            </Button>
          </Link>
        </div>
      </div>
      {/* Hero illustration */}
      <div className="mt-12 flex justify-center">
        <Image
          src={heroImage}
          alt="Hero illustration"
          width={1600}
          height={900}
          className="w-full max-w-[1600px] aspect-video object-cover rounded-xl"
        />
      </div>
    </section>
  );
}
