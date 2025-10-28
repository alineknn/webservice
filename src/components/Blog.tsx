"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import en from "@/locales/en/blog.json";
import ru from "@/locales/ru/blog.json";

import blogImg1 from "@/assets/images/blog image 1.svg";
import blogImg2 from "@/assets/images/blog image 2.svg";
import blogImg3 from "@/assets/images/blog image 3.svg";

type Post = {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  image: string; // public/ path or import
  objectPosition?: string; // e.g. "50% 35%" from Figma focal point
};

type BlogLocale = {
  badge: string;
  title: string;
  subtitle: string;
  posts: Post[];
  viewAll: string;
};

export default function Blog() {
  const { locale } = useRouter();
  const t = (locale === "en" ? (en as BlogLocale) : (ru as BlogLocale));

  const localImages = [blogImg1, blogImg2, blogImg3] as const;

  // Optional per-image focal positions (percentages). Tweak to match Figma crop.
  const focalPositions = [
    "50% 45%", // image 1 focus (x y)
    "55% 50%", // image 2 focus
    "50% 40%", // image 3 focus
  ] as const;

  return (
    <section id="blog" className="pt-[112px] pb-[80px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 min-[1440px]:px-[80px]">
        {/* Header */}
        <div className="text-center">
          <span className="inline-block text-[16px] font-bold font-['Helvetica']">{t.badge}</span>
          <div className="mt-4 mx-auto max-w-[768px]">
            <h2 className="text-[52px] font-normal font-['Helvetica'] leading-tight">{t.title}</h2>
          </div>
          <p className="mt-4 text-[18px] font-normal font-['Avenir Next'] text-black/70 mx-auto max-w-[768px]">
            {t.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-[80px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.posts.slice(0, 3).map((post, idx) => (
            <article
              key={post.slug}
              className="group rounded-2xl bg-white/90 overflow-hidden hover:shadow-md transition"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative w-full h-[200px] md:h-[240px] lg:w-[405px] lg:h-[270px] mx-auto overflow-hidden">
                  <Image
                    src={localImages[idx] ?? post.image}
                    alt={post.title}
                    fill
                    className="object-contain object-center"
                    style={{ objectPosition: post.objectPosition ?? focalPositions[idx] ?? "50% 50%" }}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    priority={false}
                  />
                </div>

                <div className="p-6">
                  <span className="mt-6 inline-flex items-center justify-center min-w-[102px] h-[30px] px-3 whitespace-nowrap bg-[rgba(0,13,13,0.05)] border border-[rgba(0,13,13,0.15)] rounded-md text-[14px] font-semibold font-['Avenir Next']">
                    {post.tag}
                  </span>

                  <div className="mt-4 mx-auto w-[405px] min-h-[78px]">
                    <h3 className="text-[28px] font-normal font-['Helvetica'] leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                  </div>

                  <p className="mt-2 mx-auto w-[405px] h-[48px] text-[16px] font-normal font-['Avenir Next'] text-black/60 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 text-[16px] font-['Avenir Next'] py-4 ">
                    {locale === "en" ? "Read more >" : "Читать далее >"}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* View all */}
        <div className="mt-[116px] flex justify-center">
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