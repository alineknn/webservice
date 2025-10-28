"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import en from "@/locales/en/latest_blog.json";
import ru from "@/locales/ru/latest_blog.json";

import blogImg1 from "@/assets/images/blog image 1.svg";
import blogImg2 from "@/assets/images/blog image 2.svg";
import blogImg3 from "@/assets/images/blog image 3.svg";

type Post = {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  image?: string;             // optional public path if you ever want it
  objectPosition?: string;     // focal point like "50% 40%"
};

type LatestBlogLocale = {
  badge: string;
  title: string;
  posts: Post[];
  viewAll: string;
};

export default function LatestBlog() {
  const { locale } = useRouter();
  const t = (locale === "en" ? (en as LatestBlogLocale) : (ru as LatestBlogLocale));

  // Local placeholders to match the three cards
  const localImages = [blogImg1, blogImg2, blogImg3] as const;

  // Optional focal points if you want to tweak the visible crop
  const focalPositions = [
    "50% 50%",
    "50% 50%",
    "50% 50%",
  ] as const;

  return (
    <section id="latest-blog" className="pt-[112px] pb-[80px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 min-[1440px]:px-[80px]">
        {/* Header (left-aligned) */}
        <div className="text-left">
          <span className="inline-block text-[16px] font-bold font-['Helvetica']">
            {t.badge}
          </span>

          {/* 16px below the badge */}
          <h2 className="mt-4 text-[52px] leading-tight font-normal font-['Helvetica']">
            {t.title}
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-[48px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.posts.slice(0, 3).map((post, idx) => (
            <article
              key={post.slug}
              className="group rounded-2xl bg-white overflow-hidden hover:shadow-md transition"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                {/* Image area (fills 405x270 at lg) */}
                <div className="relative w-full h-[200px] md:h-[240px] lg:w-[405px] lg:h-[270px] mx-auto overflow-hidden">
                  <Image
                    src={localImages[idx] ?? post.image!}
                    alt={post.title}
                    fill
                    className="object-cover object-center"
                    style={{ objectPosition: post.objectPosition ?? focalPositions[idx] ?? "50% 50%" }}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    priority={false}
                  />
                </div>

                <div className="p-6">
                  {/* Tag */}
                  <span className="mt-6 inline-flex items-center justify-center min-w-[102px] h-[30px] px-3 whitespace-nowrap bg-[rgba(0,13,13,0.05)] border border-[rgba(0,13,13,0.15)] rounded-md text-[14px] font-semibold font-['Avenir Next']">
                    {post.tag}
                  </span>

                  {/* Title */}
                  <div className="mt-4 mx-auto w-[405px] min-h-[78px]">
                    <h3 className="text-[28px] font-normal font-['Helvetica'] leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                  </div>

                  {/* Excerpt */}
                  <p className="mt-2 mx-auto w-[405px] h-[48px] text-[16px] font-normal font-['Avenir Next'] text-black/70 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Per-card read more (unchanged) */}
                  <div className="mt-4 text-[16px] font-['Avenir Next'] py-4">
                    {locale === "en" ? "Read more >" : "Читать далее >"}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Bottom-right “View all” */}
        <div className="mt-[116px] flex justify-end">
          <Link
            href="/blog"
            className="border border-black/10 rounded-md px-5 py-2.5 text-[16px] font-['Avenir Next'] hover:bg-black/5 transition"
          >
            {t.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}