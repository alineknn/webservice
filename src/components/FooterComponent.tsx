"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import webserviceLogo from '@/assets/images/webservice logo.png';

import mailIcon from "@/assets/images/footer/mail.svg";
import callIcon from "@/assets/images/footer/call.svg";
import mapIcon from "@/assets/images/footer/map.svg";
import telegramIcon from "@/assets/images/footer/Telegram.svg";
import whatsappIcon from "@/assets/images/footer/whatsapp.svg";

import en from "@/locales/en/footer.json";
import ru from "@/locales/ru/footer.json";

type NavItem = { label: string; href: string };
type SocialItem = { label: string; href: string };
type LegalItem = { label: string; href: string };

type ContactItem = {
  type: "email" | "phone" | "address" | "whatsapp" | "telegram";
  label: string;
  href?: string;
};

type LinksGroup = { title: string; items: NavItem[] };

type FooterLocale = {
  brand?: { logoAlt?: string };
  company: { title: string; addressLines: string[] };
  contacts: { title: string; items: ContactItem[] };
  linksGroups?: LinksGroup[];
  subscribe?: { title: string; text?: string; placeholder: string; buttonLabel: string; consent?: string };
  social: { items: SocialItem[] };
  legal: { items: LegalItem[]; copyrightPrefix: string };
  partner?: string;
  partnerLinkLabel?: string;
  partnerLinkHref?: string;
};

const contactIconFor = (type: ContactItem["type"]) => {
  const common = "w-6 h-6"; // 24x24
  switch (type) {
    case "email":
      return <Image src={mailIcon} alt="mail" width={24} height={24} className={common} />;
    case "phone":
      return <Image src={callIcon} alt="call" width={24} height={24} className={common} />;
    case "address":
      return <Image src={mapIcon} alt="map" width={24} height={24} className={common} />;
    case "telegram":
      return <Image src={telegramIcon} alt="telegram" width={24} height={24} className={common} />;
    case "whatsapp":
      return <Image src={whatsappIcon} alt="whatsapp" width={24} height={24} className={common} />;
    default:
      return <Image src={mailIcon} alt="mail" width={24} height={24} className={common} />;
  }
};

export default function Footer() {
  const { locale } = useRouter();
  const t: FooterLocale = (locale === "en" ? (en as any) : (ru as any));
  const year = new Date().getFullYear();

  return (
    <section className="py-[80px] font-['Inter']">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 min-[1440px]:px-[80px]">
        {/* Top area: Logo + three columns */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-start gap-10 lg:gap-0">
          {/* Column 1: Logo, Address, Contacts */}
          <div className="w-full lg:w-[585px] lg:h-[393px]">
            <Image src={webserviceLogo} alt={t.brand?.logoAlt || "Webservice"} width={272} height={42} className="w-[272px] h-[42px] -ml-[15px]" />

            {/* Address */}
            <div className="mt-8">
              <h4 className="text-[14px] font-semibold font-['Inter']">{t.company.title}</h4>
              <div className="mt-2 space-y-1 text-[14px] font-['Inter']">
                {t.company.addressLines.map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </div>
            </div>

            {/* Contacts */}
            <div className="mt-6">
              <h4 className="text-[14px] font-['Inter'] font-semibold">{t.contacts.title} </h4>
              <ul className="mt-3 space-y-3">
                {t.contacts.items?.map((c, i) => (
                  <li key={i} className="flex items-center gap-4 text-[16px] font-['Avenir Next'] ">
                    <span className="shrink-0">{contactIconFor(c.type)}</span>
                    {c.href ? (
                      <a
                        href={c.href}
                        className={`hover:underline ${c.type === 'email' || c.type === 'phone' ? 'underline' : ''}`}
                      >
                        {c.label}
                      </a>
                    ) : (
                      <span className={`${c.type === 'email' || c.type === 'phone' ? 'underline' : ''}`}>{c.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="w-full lg:w-[303px] lg:ml-[64px]">
            {t.linksGroups && t.linksGroups[0] ? (
              <div>
                <h4 className="text-[22px] font-semibold">{t.linksGroups[0].title}</h4>
                <ul className="mt-4 space-y-2">
                  {t.linksGroups[0].items.map((item) => (
                    <li key={item.href} className="text-[14px] ">
                      <Link href={item.href} className="hover:text-[#746FAE] transition">{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          {/* Column 3: Company links + Social icons below */}
          <div className="w-full lg:w-[303px] lg:ml-[24px]">
            {t.linksGroups && t.linksGroups[1] ? (
              <>
                <ul className="mt-[22px] space-y-2">
                  {t.linksGroups[1].items.map((item) => (
                    <li key={item.href} className="text-[14px] font-semibold">
                      <Link href={item.href} className="hover:text-[#746FAE] transition">{item.label}</Link>
                    </li>
                  ))}
                </ul>

                {t.social?.items?.length ? (
                  <div className="mt-6 w-full">
                    <div className="flex items-center gap-4">
                      {t.social.items.map((s) => (
                        <a
                          key={s.href}
                          href={s.href}
                          target="_blank"
                          aria-label={s.label}
                          className="inline-flex items-center justify-center w-6 h-6"
                        >
                          {/* 24x24 placeholder icon */}
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <circle cx="12" cy="12" r="10" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                ) : null}
              </>
            ) : null}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-black/10 pt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between font-['Avenir Next']">
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
          {/* Partner (social icons moved under column 3) */}
          {t.partner ? (
            <div className="text-sm text-black/60">
              {t.partner}{" "}
              {t.partnerLinkHref ? (
                <a href={t.partnerLinkHref} target="_blank" className="underline">{t.partnerLinkLabel || t.partnerLinkHref}</a>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}