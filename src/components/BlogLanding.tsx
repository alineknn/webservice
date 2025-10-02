"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import ru from "@/locales/ru/blog_landing.json";
import en from "@/locales/en/blog_landing.json";

type Author = {
  name: string;
  role: string;
  avatar: string; // path to image
};

type Post = {
  id: string;
  slug: string;
  image: string; // path to image 405x270 on desktop
  badge: string;
  date: string;
  author: Author;
  title: string;
  excerpt: string;
};

type LocaleBlock = {
  kicker: string;
  title: string;
  subtitle: string;
  readMore: string;
  posts: Post[];
};

export default function BlogLanding() {
  const { locale } = useRouter();
  const t = (locale === "en" ? (en as LocaleBlock) : (ru as LocaleBlock));

  return (
    <section id="blog-landing" className="pt-[112px] pb-[112px]">
      <div className="mx-auto w-full max-w-[1280px] px-[20px] min-[1440px]:px-[80px]">
        {/* Header */}
        <p className="font-['Avenir Next'] font-semibold text-[16px] text-center">
          {t.kicker}
        </p>

        <h1 className="mt-[16px] font-['Helvetica'] font-normal leading-[1.1] text-[44px] md:text-[72px] text-center">
          {t.title}
        </h1>

        <p className="mt-[24px] font-['Avenir Next'] text-[18px] text-black/70 max-w-[880px] text-center mx-auto">
          {t.subtitle}
        </p>

        {/* Grid */}
        <div className="mt-[40px] md:mt-[64px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[64px] gap-x-[32px]">
          {t.posts.map((p) => (
            <article
              key={p.id}
              className="w-full lg:h-[577px] rounded-xl border border-[rgba(0,13,13,0.12)] bg-white hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-shadow overflow-hidden flex flex-col"
            >
              {/* Cover */}
              <div className="relative w-full h-[200px] md:h-[270px]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 405px, 100vw"
                  // remove unoptimized if you host images locally in /public
                  unoptimized
                />
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                {/* Badge + Date */}
                <div className="mt-[24px] flex items-center justify-between gap-3">
                  <span className="inline-flex h-[29px] min-w-[102px] justify-center items-center rounded-full border border-[rgba(0,13,13,0.15)] bg-[rgba(0,13,13,0.05)] font-['Avenir Next'] font-semibold text-[14px] px-3">
                    {p.badge}
                  </span>
                  {/* place date approx 220px to right of badge per spec */}
                  <span className="font-['Avenir Next'] text-[14px] text-black/60">
                    {p.date}
                  </span>
                </div>

                {/* Author */}
                <div className="mt-[16px] flex items-center gap-3">
                  <Image
                    src={p.author.avatar}
                    alt={p.author.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                    unoptimized
                  />
                  <div>
                    <div className="font-['Avenir Next'] font-semibold text-[14px]">
                      {p.author.name}
                    </div>
                    <div className="font-['Avenir Next'] text-[14px] text-black/60">
                      {p.author.role}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-[8px] font-['Helvetica'] font-normal text-[22px] md:text-[28px] leading-snug line-clamp-2" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {p.title}
                </h3>

                {/* Excerpt */}
                <p className="mt-[8px] font-['Avenir Next'] text-[16px] text-black/70 line-clamp-3" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {p.excerpt}
                </p>

                {/* Read more */}
                <div className="mt-auto pt-[16px] flex items-center gap-2">
                  <Link
                    href={`/blog/${p.slug}`}
                    className="inline-flex items-center justify-center w-[98px] h-[24px] rounded-full border border-[rgba(0,13,13,0.15)] font-['Avenir Next'] text-[14px]"
                  >
                    {t.readMore}
                  </Link>
                  {/* Arrow 24x24 */}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M13 5l7 7-7 7M20 12H4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}