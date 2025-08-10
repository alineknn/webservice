"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import en from "@/locales/en/blog.json";
import ru from "@/locales/ru/blog.json";

type Post = {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  image: string; // public/ path or import
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

  return (
    <section id="blog" className="py-24 px-4 md:px-8 lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block mb-3 rounded-full px-3 py-1 text-sm font-semibold bg-black/5">
            {t.badge}
          </span>
          <h2 className="text-6xl md:text-7xl tracking-tight">
            {t.title}
          </h2>
          <p className="mt-4 text-xl md:text-[22px] text-black/70 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.posts.slice(0, 3).map((post) => (
            <article
              key={post.slug}
              className="group rounded-2xl ring-1 ring-black/5 bg-white/90 overflow-hidden hover:shadow-md transition"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    priority={false}
                  />
                </div>

                <div className="p-6">
                  <span className="inline-flex items-center rounded-full bg-black/5 px-2.5 py-1 text-xs font-medium">
                    {post.tag}
                  </span>

                  <h3 className="mt-3 text-2xl font-semibold leading-snug group-hover:opacity-90">
                    {post.title}
                  </h3>

                  <p className="mt-2 text-black/60">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 inline-flex items-center gap-1 text-[#746FAE] font-medium">
                    <span className="group-hover:translate-x-0.5 transition">
                      {locale === "en" ? "Read more" : "Читать далее"}
                    </span>
                    <svg
                      className="h-4 w-4 group-hover:translate-x-0.5 transition"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* View all */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/blog"
            className="rounded-full border border-black/10 px-5 py-2.5 hover:bg-black/5 transition"
          >
            {t.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}