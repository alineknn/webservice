"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import ru from "@/locales/ru/testimonial.json";
import en from "@/locales/en/testimonial.json";

// Static import (replace with your real asset when ready)
import reviewerImage from "@/assets/images/db-image.png";
// ^ if your file has spaces, static import handles it safely

type TCopy = {
  title?: string;            // optional section title
  quote: string;             // main review text
  name: string;              // reviewer
  role?: string;             // reviewer role (optional)
  company?: string;          // reviewer company (optional)
  rating?: number;           // 1..5
  imageAlt?: string;         // alt text
};

export default function Testimonial() {
  const { locale } = useRouter();
  const t: TCopy = (locale === "en" ? (en as TCopy) : (ru as TCopy));

  const stars = Math.max(0, Math.min(5, t.rating ?? 5));
  return (
    <section className="py-[112px]">
      <div className="mx-auto w-full max-w-[1280px] px-[20px] min-[1440px]:px-[80px]">
        {/* Optional title */}
        {t.title ? (
          <h2 className="mb-8 font-['Helvetica'] text-[36px] md:text-[44px] leading-tight">
            {t.title}
          </h2>
        ) : null}

        <div className="grid md:grid-cols-2 items-center gap-y-8 md:gap-y-0 md:gap-x-[60px]">
          {/* Left Image ~600x640 on desktop */}
          <div className="w-full">
            <Image
              src={reviewerImage}
              alt={t.imageAlt || ""}
              width={600}
              height={640}
              priority
              className="w-full h-auto rounded-xl object-cover"
              sizes="(min-width: 1440px) 600px, 100vw"
            />
          </div>

          {/* Right content */}
          <div className="w-full">
            {/* Stars */}
            <div className="flex items-center gap-1 mb-8" aria-hidden="true">
              {Array.from({ length: stars }).map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-black"
                >
                  <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-['Helvetica'] text-[22px] md:text-[28px] leading-[1.45] text-black">
              “{t.quote}”
            </blockquote>

            {/* Name / role / company + logo */}
            <div className="mt-8">
              <div className="flex items-center">
                {/* Left: reviewer identity */}
                <div className="min-w-0">
                  <div className="font-['Helvetica'] text-[14px] md:text-[16px] font-bold">
                    {t.name}
                  </div>
                  {(t.role || t.company) && (
                    <div className="mt-1 font-['Avenir Next'] text-[14px] md:text-[16px] text-black/80">
                      {[t.role, t.company].filter(Boolean).join(", ")}
                    </div>
                  )}
                </div>

                {/* Right: logo with a vertical separator. We use border-left as the separator and 20px padding/margin for centering. */}
                <div className="ml-[20px] pl-[20px] border-l border-[#000D0D26] h-[61px] flex items-center">
                  {/* Placeholder logo; replace with your static import when ready */}
                  <div className="h-[24px] w-[100px] rounded-md bg-black/10 text-black/60 text-[12px] font-['Inter'] flex items-center justify-center select-none">
                    Logo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}