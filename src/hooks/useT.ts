"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { noOrphans } from "@/lib/typography";

// Orphan control across array boundaries (e.g., headlineParts)
const EN_ORPHANS = [
  "a","an","the",
  "and","or","but","nor","so","yet",
  "of","for","to","in","on","at","by","as","via","from","with","into","onto","per",
];
const RU_ORPHANS = [
  "и","а","но","ли","же","не","ни",
  "в","во","к","ко","с","со","у","о","об","от","по","за","на","из","для","при","без","над","под","про","до","через",
];

function glueArrayOrphans(parts: string[], locale: string) {
  if (!Array.isArray(parts) || parts.length === 0) return parts;

  // First pass: per-string orphan control inside each chunk
  const out = parts.map((p) => (typeof p === "string" ? noOrphans(p, locale) : p)) as string[];

  // Build a set for quick membership checks
  const orphanSet = new Set<string>([...EN_ORPHANS, ...RU_ORPHANS].map((w) => w.toLowerCase()));

  for (let i = 0; i < out.length - 1; i++) {
    const cur = out[i] ?? "";
    const next = out[i + 1] ?? "";

    // Case A: previous chunk ends with an orphan word (Unicode letters/digits), regardless of trailing space
    const endMatch = cur.match(/[\p{L}\p{N}]+\s*$/u);
    if (endMatch) {
      const lastWord = endMatch[0].replace(/\s+$/u, "").toLowerCase();
      if (orphanSet.has(lastWord)) {
        // Append a NBSP (replace any trailing whitespace or append if none), trim leading in next
        out[i] = cur.replace(/\s*$/u, "\u00A0");
        out[i + 1] = next.replace(/^\s+/u, "");
        continue;
      }
    }

    // Case B: next chunk starts with an orphan word followed by a space — glue that space to NBSP
    const startMatch = next.match(/^\s*([\p{L}\p{N}]+)\s+/u);
    if (startMatch) {
      const firstWord = startMatch[1].toLowerCase();
      if (orphanSet.has(firstWord)) {
        out[i + 1] = next.replace(/^\s*([\p{L}\p{N}]+)\s+/u, (_m, w) => `${w}\u00A0`);
      }
    }
  }

  return out;
}

type LocaleSources = Record<string, any>; // e.g. { en, ru }
type AnyObj = Record<string, any>;

function makeProxy<T extends AnyObj>(value: T, locale: string, cache = new WeakMap()): T {
  if (!value || typeof value !== "object") return value;

  // Avoid re-wrapping
  if (cache.has(value)) return cache.get(value) as T;

  const proxied = new Proxy(value, {
    get(target, prop, receiver) {
      const v = Reflect.get(target, prop, receiver);

      if (typeof v === "string") {
        return noOrphans(v, locale);
      }
      if (Array.isArray(v)) {
        if (v.every((x) => typeof x === "string")) {
          return glueArrayOrphans(v as string[], locale) as any;
        }
        return v.map((item) =>
          typeof item === "string" ? noOrphans(item, locale)
          : (item && typeof item === "object" ? makeProxy(item as any, locale, cache) : item)
        ) as any;
      }
      if (v && typeof v === "object") {
        return makeProxy(v, locale, cache);
      }
      return v;
    }
  });

  cache.set(value, proxied);
  return proxied;
}

/**
 * useT — returns { locale, t } where t is your locale JSON with non-breaking-space typography applied.
 *
 * Usage:
 *   const { locale, t } = useT({ en, ru });
 */
export function useT<S extends LocaleSources>(
  sources: S,
  localeOverride?: keyof S
): { locale: keyof S; t: S[keyof S] } {
  const router = useRouter();
  const locale = (localeOverride ?? (router.locale as keyof S) ?? ("ru" as keyof S));

  const raw = sources[locale];
  const t = useMemo(() => makeProxy(raw, String(locale)), [raw, locale]);

  return { locale, t };
}