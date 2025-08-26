"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import webserviceLogo from '@/assets/images/webservice logo.png';

import en from "@/locales/en/footer.json";
import ru from "@/locales/ru/footer.json";

type NavItem = { label: string; href: string };
type SocialItem = { label: string; href: string };
type LegalItem = { label: string; href: string };

type FooterLocale = {
  brand?: { logoAlt?: string };
  company: { title: string; addressLines: string[]; email: string; phone: string };
  contacts: { title: string; email: string; phone: string; messengers?: { label: string; href: string }[] };
  links?: { title: string; items: NavItem[] };
  subscribe: { title: string; text?: string; placeholder: string; buttonLabel: string; consent?: string };
  social: { items: SocialItem[] };
  legal: { items: LegalItem[]; copyrightPrefix: string };
};

export default function Footer() {
  const { locale } = useRouter();
  const t: FooterLocale = (locale === "en" ? (en as any) : (ru as any));
  const year = new Date().getFullYear();

  return (
      <section className="py-[80px] font-['Avenir Next']">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 min-[1440px]:px-[80px]">
          {/* Top area: Logo + columns + subscribe */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            {/* Left: Logo */}
            <div className="shrink-0">
              <Image src={webserviceLogo} alt={t.brand?.logoAlt || "Webservice"} className="h-8 w-auto" />
            </div>

            {/* Middle: Columns */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {/* Company address */}
              <div>
                <h4 className="text-sm uppercase tracking-wide text-black/60">{t.company.title}</h4>
                <div className="mt-3 space-y-1">
                  {t.company.addressLines.map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </div>
              </div>

              {/* Contacts duplicate */}
              <div>
                <h4 className="text-sm uppercase tracking-wide text-black/60">{t.contacts.title}</h4>
                <div className="mt-3 space-y-2">
                  <a href={`mailto:${t.contacts.email}`} className="block hover:underline">{t.contacts.email}</a>
                  <a href={`tel:${t.contacts.phone}`} className="block hover:underline">{t.contacts.phone}</a>
                  {t.contacts.messengers?.length ? (
                    <div className="flex flex-wrap gap-3 pt-1">
                      {t.contacts.messengers.map((m) => (
                        <a key={m.href} href={m.href} target="_blank" className="underline">{m.label}</a>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>

              {/* Links column (optional) */}
              {t.links?.items?.length ? (
                <div>
                  <h4 className="text-sm uppercase tracking-wide text-black/60">{t.links.title}</h4>
                  <ul className="mt-3 space-y-2">
                    {t.links.items.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="hover:text-[#746FAE] transition">{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            {/* Right: Subscribe */}
            <div className="w-full max-w-sm">
              <h4 className="text-sm uppercase tracking-wide text-black/60">{t.subscribe.title}</h4>
              {t.subscribe.text ? (
                <p className="mt-3 text-black/70">{t.subscribe.text}</p>
              ) : null}
              <form className="mt-3 flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  required
                  placeholder={t.subscribe.placeholder}
                  className="flex-1 h-[36px] rounded-md border border-black/15 bg-white/0 px-3 text-[16px] outline-none focus:ring-0"
                />
                <button
                  type="submit"
                  className="h-[36px] w-[108px] rounded-md bg-[#74C2CD] text-white text-[16px]"
                >
                  {t.subscribe.buttonLabel}
                </button>
              </form>
              {t.subscribe.consent ? (
                <p className="mt-2 text-xs text-black/60">{t.subscribe.consent}</p>
              ) : null}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 border-t border-black/10 pt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="text-sm text-black/60">
              {t.legal.copyrightPrefix} {year} WEBSERVICE
            </div>
            <div className="flex items-center gap-4">
              {t.legal.items.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm hover:underline">
                  {link.label}
                </Link>
              ))}
            </div>
            {/* Social icons */}
            <div className="flex items-center gap-4 text-black/70">
              {t.social.items.map((s) => (
                <a key={s.href} href={s.href} target="_blank" aria-label={s.label} className="hover:text-black">
                  {s.label === 'Facebook' ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-2.9h2v-2.2c0-2 1.2-3.2 3-3.2.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.9h2.4L14 14.9h-2v7A10 10 0 0 0 22 12Z"/></svg>
                  ) : s.label === 'X' ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 3H21l-6.5 7.4L22 21h-5.5l-4.3-5.1L7 21H3l7.1-8-6.6-7.9h5.6l3.8 4.7L18.9 3Z"/></svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.4.6.2 1 .4 1.5.9.5.5.7.9.9 1.5.2.5.4 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.4-.2.6-.4 1-.9 1.5-.5.5-.9.7-1.5.9-.5.2-1.2.4-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.4a3.6 3.6 0 0 1-1.5-.9 3.6 3.6 0 0 1-.9-1.5c-.2-.5-.4-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.4.2-.6.4-1 .9-1.5.5-.5.9-.7 1.5-.9.5-.2 1.2-.4 2.4-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.8.1-1 .1-1.5.2-1.9.3-.5.2-.8.3-1.1.6-.3.3-.5.6-.6 1.1-.1.4-.3.9-.3 1.9-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1 .2 1.5.3 1.9.1.5.3.8.6 1.1.3.3.6.5 1.1.6.4.1.9.3 1.9.3 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1-.1 1.5-.2 1.9-.3.5-.1.8-.3 1.1-.6.3-.3.5-.6.6-1.1.1-.4.3-.9.3-1.9.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1-.2-1.5-.3-1.9-.1-.5-.3-.8-.6-1.1-.3-.3-.6-.5-1.1-.6-.4-.1-.9-.3-1.9-.3-1.3-.1-1.7-.1-4.8-.1Zm0 3.2a6.6 6.6 0 1 1 0 13.2 6.6 6.6 0 0 1 0-13.2Zm0 2.2a4.4 4.4 0 1 0 0 8.8 4.4 4.4 0 0 0 0-8.8Z"/></svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

  );
}