import Image, { StaticImageData } from "next/image";
import { notFound } from "next/navigation";
import path from "node:path";
import fs from "node:fs/promises";
import { loadPost } from "@/lib/posts";
import { MDX } from "@/components/MDX";

// Optional: fallback covers by slug (so you can keep assets under /src/assets as imports)
import cover1 from "@/assets/images/blog image 1.svg";
import cover2 from "@/assets/images/blog image 2.svg";
import cover3 from "@/assets/images/blog image 3.svg";

const COVER_BY_SLUG: Record<string, StaticImageData> = {
  "vybrat-hosting": cover3,
  // add more when you add posts
};

// Pre-generate routes for every MDX slug in /content/{ru|en}/blog
export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "content");
  const locales = ["ru", "en"] as const;
  const slugs = new Set<string>();
  for (const loc of locales) {
    try {
      const dir = path.join(contentDir, loc, "blog");
      const files = await fs.readdir(dir);
      files
        .filter((f) => f.endsWith(".mdx"))
        .forEach((f) => slugs.add(f.replace(/\.mdx$/i, "")));
    } catch {
      // locale folder might not exist yet
    }
  }
  return Array.from(slugs).map((slug) => ({ slug }));
}

function fmtDate(dateStr: string, locale: "ru" | "en") {
  try {
    return new Date(dateStr).toLocaleDateString(
      locale === "ru" ? "ru-RU" : "en-US",
      { day: "2-digit", month: "short", year: "numeric" }
    );
  } catch {
    return dateStr;
  }
}

export default async function BlogPostPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { slug } = await params;
  const sp = searchParams ? await searchParams : undefined;

  // Default to RU; allow explicit override via ?lang=en
  const langParam = typeof sp?.lang === "string" ? sp.lang : undefined;
  const locale: "ru" | "en" = langParam === "en" ? "en" : "ru";

  let post: { frontmatter: any; content: string } | undefined;
  try {
    post = await loadPost(locale, slug);
  } catch {
    // fallback order: ru -> en
    try {
      post = await loadPost("ru", slug);
    } catch {
      try {
        post = await loadPost("en", slug);
      } catch {
        return notFound();
      }
    }
  }

  const { frontmatter: fm, content } = post!;
  const date = fmtDate(fm.date, locale);

  // Safe author fallback (prevents crashes if author missing in frontmatter)
  const author = {
    name: fm?.author?.name ?? (locale === "ru" ? "Без автора" : "Unknown author"),
    role: fm?.author?.role ?? "",
    avatar:
      (typeof fm?.author?.avatar === "string" && fm.author.avatar) ||
      "/authors/placeholder.png", // ensure this exists under /public/authors/
  };

  // Resolve cover image:
  // - Public path (under /public) → use string (spaces encoded)
  // - Non-public '/assets/...' frontmatter → ignore and fall back
  // - Slug mapping → use imported static asset
  // - Default placeholder import
  let cover: string | StaticImageData;
  const fmImage = typeof fm.image === "string" ? fm.image : undefined;

  const isPublicPath =
    !!fmImage &&
    fmImage.startsWith("/") &&
    // treat '/assets/...' as non-public (those live in src/)
    !fmImage.startsWith("/assets/");

if (isPublicPath) {
  // Use as-is if already percent-encoded; otherwise only replace plain spaces.
  const alreadyEncoded = /%[0-9A-Fa-f]{2}/.test(fmImage!);
  cover = alreadyEncoded ? fmImage! : fmImage!.replace(/ /g, "%20");
} else if (COVER_BY_SLUG[slug]) {
    cover = COVER_BY_SLUG[slug];
  } else {
    // final fallback to any bundled placeholder (use one of the blog covers)
    cover = cover1;
  }

  const category = (fm.category as string) || (locale === "ru" ? "Категория" : "Category");

  return (
    <section className="pt-[112px] pb-[80px]">
      <div className="mx-auto w-full max-w-[1280px] px-[20px] min-[1440px]:px-[80px]">
        {/* Two-column layout on desktop: text left, image right with 80px gap */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_780px] items-start lg:gap-x-[80px]">
          {/* Left: breadcrumb + title + meta + author */}
          <div>
            {/* Breadcrumb: 32px above heading */}
            <div className="mb-8 text-[18px] font-['Avenir Next'] text-black/80">
              <span>{locale === "ru" ? "Блог" : "Blog"}</span>
              <span className="mx-2">&gt;</span>
              <span>{category}</span>
            </div>

            <h1 className="font-['Helvetica'] font-normal text-[52px] leading-tight mt-0">{fm.title}</h1>

            {/* Meta: 12px under title */}
            <div className="mt-3 flex items-center gap-2 text-[14px] font-['Avenir Next'] text-black/70">
              <span>{date}</span>
              <span>•</span>
              <span>{locale === "ru" ? `${fm.readingMinutes} мин чтения` : `${fm.readingMinutes} min read`}</span>
            </div>

            {/* Author: 12px under meta */}
            <div className="mt-3 flex items-center gap-3">
              <Image
                src={author.avatar}
                alt={author.name}
                width={66}
                height={66}
                className="rounded-full object-cover"
              />
              <div className="leading-tight">
                <div className="font-['Avenir Next'] font-semibold text-[14px]">{author.name}</div>
                {author.role && (
                  <div className="font-['Avenir Next'] text-[14px] text-black/70">{author.role}</div>
                )}
              </div>
            </div>
          </div>

          {/* Right: top image (780x450 on desktop) */}
          <div className="justify-self-end mt-6 lg:mt-0">
            <div className="relative lg:w-[780px] lg:h-[450px] w-full h-[300px] rounded-xl overflow-hidden shadow-sm">
              <Image
                src={cover}
                alt={fm.title}
                fill
                sizes="(min-width:1024px) 780px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Body */}
        <article className="mt-6 lg:mt-[224px] max-w-[900px] mx-auto">
          <MDX source={content} />
        </article>
      </div>
    </section>
  );
}