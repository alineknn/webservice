"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import Button from "@/components/Button";

import en from "@/locales/en/contact.json";
import ru from "@/locales/ru/contact.json";

type ContactLocale = {
  badge: string;
  title: string;
  intro: string;

  emailLabel: string;
  phoneLabel: string;
  addressLabel: string;

  form: {
    name: string;
    phone: string;
    email: string;
    message: string;
    messagePlaceholder: string;
    whatsappOpt: string;
    telegramOpt: string;
    submit: string;
  };

  links: {
    whatsapp: string;
    telegram: string;
  };

  company: {
    email: string;
    phone: string;
    address: string;
    whatsappUrl: string;
    telegramUrl: string;
  };
};

export default function Contact() {
  const { locale } = useRouter();
  const t: ContactLocale = (locale === "en" ? (en as any) : (ru as any));

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log("CONTACT FORM:", Object.fromEntries(data.entries()));
    // TODO: POST to /api/contact or external service
  }

  return (
    <section id="contact" className="py-24 px-4 md:px-6 lg:px-8">
      <div className="mx-auto max-w-screen-2xl">
        {/* Header */}
        <div className="mb-10">
          <span className="inline-block mb-3 rounded-full px-3 py-1 text-base font-bold">
            {t.badge}
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl tracking-tight">
            {t.title}
          </h2>
          <p className="mt-4 text-lg md:text-xl text-black/70 max-w-lg">
            {t.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column: static info */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <EnvelopeIcon className="h-6 w-6 text-black/60" />
                <div>
                  <div className="text-sm text-black/60">{t.emailLabel}</div>
                  <Link
                    href={`mailto:${t.company.email}`}
                    className="hover:underline"
                  >
                    {t.company.email}
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <PhoneIcon className="h-6 w-6 text-black/60" />
                <div>
                  <div className="text-sm text-black/60">{t.phoneLabel}</div>
                  <a href={`tel:${t.company.phone}`} className="hover:underline">
                    {t.company.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPinIcon className="h-6 w-6 text-black/60" />
                <div>
                  <div className="text-sm text-black/60">{t.addressLabel}</div>
                  <div>{t.company.address}</div>
                </div>
              </div>
            </div>

            {/* Messengers */}
            <div className="space-y-3 pt-6">
              <Link
                href={t.company.whatsappUrl}
                target="_blank"
                className="inline-flex items-center gap-3 rounded-lg bg-[#25D366]/10 px-3 py-2 hover:bg-[#25D366]/20 transition"
              >
                <ChatBubbleLeftRightIcon className="h-6 w-6 text-[#25D366]" />
                <span className="font-medium">{t.links.whatsapp}</span>
              </Link>

              <Link
                href={t.company.telegramUrl}
                target="_blank"
                className="inline-flex items-center gap-3 rounded-lg bg-[#24A1DE]/10 px-3 py-2 hover:bg-[#24A1DE]/20 transition"
              >
                <ChatBubbleLeftRightIcon className="h-6 w-6 text-[#24A1DE]" />
                <span className="font-medium">{t.links.telegram}</span>
              </Link>
            </div>
          </div>

          {/* Right column: form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white/90 ring-1 ring-black/5 shadow-sm p-6 md:p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-black/60 mb-1">
                  {t.form.name}
                </label>
                <input
                  name="name"
                  required
                  className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#746FAE]/40"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm text-black/60 mb-1">
                  {t.form.phone}
                </label>
                <input
                  name="phone"
                  className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#746FAE]/40"
                  placeholder="+996 555 000 000"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm text-black/60 mb-1">
                  {t.form.email}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#746FAE]/40"
                  placeholder="you@example.com"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm text-black/60 mb-1">
                  {t.form.message}
                </label>
                <textarea
                  name="message"
                  rows={6}
                  className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#746FAE]/40"
                  placeholder={t.form.messagePlaceholder}
                />
              </div>
            </div>

            <div className="flex items-center gap-6 mt-6">
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" name="byWhatsApp" className="h-4 w-4" />
                <span className="text-sm">{t.form.whatsappOpt}</span>
              </label>
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" name="byTelegram" className="h-4 w-4" />
                <span className="text-sm">{t.form.telegramOpt}</span>
              </label>
            </div>

            <div className="mt-8">
              <Button variant="teal" size="sm" type="submit" className="px-6">
                {t.form.submit}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}