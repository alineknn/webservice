"use client";

import Image from "next/image";
import { useT } from "@/hooks/useT";
import ru from "@/locales/ru/hosting_who.json";
import en from "@/locales/en/hosting_who.json";

// Illustration for the tall card (522x348).
// Put your actual image here. If you already have the one from the mock,
// save it as /src/assets/images/hosting/who_freelancer.svg and keep this import.
import whoBig from "@/assets/images/hosting/who_freelancer.svg";

export default function WhoHosting() {
  const { t } = useT({ en, ru });
  const data = (t as any).whoHosting;

  const SmallCard = ({ c }: { c: any }) => (
    <article className="bg-[#F2F2F2] rounded-xl w-full h-[247px] p-[24px]">
      <h3 className="font-['Helvetica'] text-[24px] leading-snug max-w-[544px]">{c.title}</h3>
      <p className="mt-2 font-['Avenir Next'] text-[18px] text-black/80 max-w-[319px]">{c.body}</p>
    </article>
  );

  return (
    <section id="who-hosting" className="py-[80px]">
      <div className="mx-auto w-full max-w-[1440px] px-[20px] lg:px-[114px]">
        {/* Title */}
        <h2 className="font-['Helvetica'] font-normal text-[36px] md:text-[44px] lg:text-[52px] leading-tight">
          {data.title}
        </h2>

        {/* Cards – 60px below the title */}
        <div className="mt-[60px] grid mx-auto grid-cols-1 md:grid-cols-2 min-[1440px]:grid-cols-[384px_384px_384px] gap-[32px] min-[1440px]:gap-[30px] min-[1440px]:w-[1212px]">
          {/* Row 1: small, small, BIG (row-span-2) */}
          <SmallCard c={data.small[0]} />
          <SmallCard c={data.small[1]} />

          <article className="relative rounded-xl w-full h-[526px] bg-[#74C2CD] p-[24px] overflow-hidden lg:row-span-2">
            <h3 className="font-['Helvetica'] text-[24px] leading-snug max-w-[544px] text-black">{data.big.title}</h3>
            <p className="mt-2 font-['Avenir Next'] text-[18px] text-black/90 max-w-[319px]">{data.big.body}</p>
            <Image
              src={whoBig}
              alt=""
              width={522}
              height={348}
              className="pointer-events-none select-none absolute right-[2px] bottom-[1px] object-contain"
              priority={false}
            />
          </article>

          {/* Row 2: small, small */}
          <SmallCard c={data.small[2]} />
          <SmallCard c={data.small[3]} />
        </div>
      </div>
    </section>
  );
}