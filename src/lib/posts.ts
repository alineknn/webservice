import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type PostFrontmatter = {
  locale: "ru" | "en";
  slug: string;
  title: string;
  date: string;
  image: string;
  readingMinutes?: number;
  author: { name: string; role: string; avatar: string };
};

const CONTENT_DIR = path.join(process.cwd(), "content");

export async function loadPost(locale: string, slug: string) {
  const file = path.join(process.cwd(), "content", locale, "blog", `${slug}.mdx`);
  const raw = await fs.readFile(file, "utf8");

  // Normalize BOM and any leading spaces/newlines so the very first token is '---'
  const normalized = raw.replace(/^\uFEFF/, "").replace(/^\s*(?=---)/, "");
  const { data, content } = matter(normalized, { delimiters: "---" });

  // Build a safe, fully-typed frontmatter object
  const d = (data ?? {}) as Partial<PostFrontmatter> & { date?: string | Date };

  // Normalize date to an ISO-like string (YYYY-MM-DD)
  const dateStr = (() => {
    if (typeof d.date === "string") return d.date;
    if (d.date instanceof Date) return d.date.toISOString().slice(0, 10);
    return new Date().toISOString().slice(0, 10);
  })();

  const author = ((): PostFrontmatter["author"] => {
    const a = (d.author ?? {}) as any;
    return {
      name: a?.name ?? (locale === "ru" ? "Без автора" : "Unknown"),
      role: a?.role ?? "",
      avatar: a?.avatar ?? "/authors/placeholder.svg",
    };
  })();

  const fm: PostFrontmatter = {
    locale: (d.locale as any) ?? (locale as any),
    slug: d.slug ?? slug,
    title: d.title ?? (locale === "ru" ? "Без названия" : "Untitled"),
    date: dateStr,
    image: d.image ?? "",
    readingMinutes:
      typeof d.readingMinutes === "number"
        ? d.readingMinutes
        : Math.max(1, Math.round(readingTime(content).minutes)),
    author,
  };

  return { frontmatter: fm, content };
}