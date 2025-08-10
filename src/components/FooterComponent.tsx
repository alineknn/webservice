"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import en from "@/locales/en/footer.json";
import ru from "@/locales/ru/footer.json";

// Optional: replace with your real logo import
// import logo from "@/assets/images/webservice_logo1.png";

type NavItem = { label: string; href: string };
type SocialItem = { label: string; href: string };
type LegalItem = { label: string; href: string };

type FooterLocale = {
  badge?: string;
  about: {
    title: string;
    text: string;
    partnershipNote?: string;
    datacenterNote?: string;
  };
  nav: {
    title: string;
    items: NavItem[];
  };
  services: {
    title: string;
    items: NavItem[];
  };
  contact: {
    title: string;
    email: string;
    phone: string;
    address: string;
    telegram: string;
    whatsapp: string;
  };
  social: {
    title: string;
    items: SocialItem[];
  };
  legal: {
    items: LegalItem[];
    copyrightPrefix: string; // e.g., "©"
  };
};

export default function Footer() {
  const { locale } = useRouter();
  const t: FooterLocale = (locale === "en" ? (en as any) : (ru as any));
  const year = new Date().getFullYear();

  return (
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-screen-2xl">
          {/* Top: 4 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* About */}
            <div>
              {/* <Image src={logo} alt="Webservice" className="h-8 w-auto mb-4" /> */}
              <div className="text-2xl font-medium mb-3">WEBSERVICE</div>
              {t.about?.text ? (
                <p className="text-black/70">{t.about.text}</p>
              ) : null}
              {t.about?.partnershipNote ? (
                <p className="mt-3 text-sm text-black/60">
                  {t.about.partnershipNote}
                </p>
              ) : null}
              {t.about?.datacenterNote ? (
                <p className="mt-1 text-sm text-black/60">
                  {t.about.datacenterNote}
                </p>
              ) : null}
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-sm uppercase tracking-wide text-black/60">
                {t.nav.title}
              </h4>
              <ul className="mt-3 space-y-2">
                {t.nav.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-[#746FAE] transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm uppercase tracking-wide text-black/60">
                {t.services.title}
              </h4>
              <ul className="mt-3 space-y-2">
                {t.services.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-[#746FAE] transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacts + Social */}
            <div>
              <h4 className="text-sm uppercase tracking-wide text-black/60">
                {t.contact.title}
              </h4>
              <div className="mt-3 space-y-2">
                <a href={`mailto:${t.contact.email}`} className="block hover:underline">
                  {t.contact.email}
                </a>
                <a href={`tel:${t.contact.phone}`} className="block hover:underline">
                  {t.contact.phone}
                </a>
                <div className="text-black/70">{t.contact.address}</div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={t.contact.telegram}
                    target="_blank"
                    className="rounded-lg bg-[#24A1DE]/10 px-2.5 py-1 text-sm hover:bg-[#24A1DE]/20 transition"
                  >
                    Telegram
                  </a>
                  <a
                    href={t.contact.whatsapp}
                    target="_blank"
                    className="rounded-lg bg-[#25D366]/10 px-2.5 py-1 text-sm hover:bg-[#25D366]/20 transition"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              {t.social?.items?.length ? (
                <>
                  <h4 className="mt-6 text-sm uppercase tracking-wide text-black/60">
                    {t.social.title}
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {t.social.items.map((s) => (
                      <a
                        key={s.href}
                        href={s.href}
                        target="_blank"
                        className="rounded-lg bg-black/5 px-2.5 py-1 text-sm hover:bg-black/10 transition"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </>
              ) : null}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="text-sm text-black/60">
              {t.legal.copyrightPrefix} {year} WEBSERVICE
            </div>
            <div className="flex items-center gap-4 text-sm">
              {t.legal.items.map((link) => (
                <Link key={link.href} href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

  );
}