"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Button from "@/components/Button";
import Image from "next/image";
import contactBg from "@/assets/images/contact background.jpg";
import whatsappIcon from "@/assets/images/Whatsapp.png";
import telegramIcon from "@/assets/images/Telegram.png";

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
    <section id="contact" className="pt-[112px] pb-[80px] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={contactBg}
          alt="Contact background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-6 min-[1440px]:px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column: static info */}
          <div className="space-y-6">
            {/* Moved header into left column */}
            <div>
              <span className="inline-block mb-4 text-[16px] font-bold font-['Helvetica']">{t.badge}</span>
              <div className="max-w-[600px]">
                <h2 className="text-[52px] font-normal font-['Helvetica'] tracking-tight leading-[1.2]">{t.title}</h2>
              </div>
              <div className="mt-6 max-w-[437px]">
                <p className="text-[18px] font-normal font-['Avenir Next'] text-black">{t.intro}</p>
              </div>
            </div>

            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-3">
                <EnvelopeIcon className="h-6 w-6 text-black/60" />
                <div>
                  <Link
                    href={`mailto:${t.company.email}`}
                    className="hover:underline font-['Avenir Next'] text-[16px]"
                  >
                    {t.company.email}
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <PhoneIcon className="h-6 w-6 text-black/60" />
                <div>
                  <a href={`tel:${t.company.phone}`} className="hover:underline font-['Avenir Next'] text-[16px]">
                    {t.company.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPinIcon className="h-6 w-6 text-black/60" />
                <div className="font-['Avenir Next'] text-[16px]">{t.company.address}</div>
              </div>
            </div>

            {/* Messengers */}
            <div className="mt-4 flex flex-col space-y-2">
              <Link
                href={t.company.whatsappUrl}
                target="_blank"
                className="inline-flex items-center gap-3"
              >
                <Image src={whatsappIcon} alt="WhatsApp" width={57} height={57} className="w-[57px] h-[57px] object-contain" />
                <span className="font-normal underline font-['Avenir Next'] text-[16px]">{t.links.whatsapp}</span>
              </Link>

              <Link
                href={t.company.telegramUrl}
                target="_blank"
                className="inline-flex items-center gap-3"
              >
                <Image src={telegramIcon} alt="Telegram" width={57} height={57} className="w-[57px] h-[57px] object-contain" />
                <span className="font-normal underline font-['Avenir Next'] text-[16px]">{t.links.telegram}</span>
              </Link>
            </div>
          </div>

          {/* Right column: form */}
          <form
            onSubmit={handleSubmit}
            className="bg-transparent p-0"
          >
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm text-black/60 mb-1">
                  {t.form.name}
                </label>
                <input
                  name="name"
                  required
                  className="w-full rounded-none bg-transparent border-0 border-b-2 border-[rgba(0,13,13,0.26)] focus:border-[#74C2CD] px-0 py-2 outline-none focus:ring-0 text-[16px] leading-[24px] font-normal font-['Avenir Next'] placeholder:text-black/40 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm text-black/60 mb-1">
                  {t.form.phone}
                </label>
                <input
                  name="phone"
                  className="w-full rounded-none bg-transparent border-0 border-b-2 border-[rgba(0,13,13,0.26)] focus:border-[#74C2CD] px-0 py-2 outline-none focus:ring-0 text-[16px] leading-[24px] font-normal font-['Avenir Next'] placeholder:text-black/40 transition-colors"
                  placeholder="+996 555 000 000"
                />
              </div>

              <div>
                <label className="block text-sm text-black/60 mb-1">
                  {t.form.email}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-none bg-transparent border-0 border-b-2 border-[rgba(0,13,13,0.26)] focus:border-[#74C2CD] px-0 py-2 outline-none focus:ring-0 text-[16px] leading-[24px] font-normal font-['Avenir Next'] placeholder:text-black/40 transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm text-black/60 mb-1">
                  {t.form.message}
                </label>
                <textarea
                  name="message"
                  rows={6}
                  className="w-full rounded-none bg-transparent border-0 border-b-2 border-[rgba(0,13,13,0.26)] focus:border-[#74C2CD] px-0 py-2 outline-none focus:ring-0 text-[16px] leading-[24px] font-normal font-['Avenir Next'] placeholder:text-black/40 transition-colors"
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
              <Button type="submit" className="bg-[#74C2CD] text-white !w-[108px] !h-[36px] text-[16px] font-['Avenir Next'] inline-flex items-center justify-center">
                {t.form.submit}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}