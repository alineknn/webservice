"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/Button";
import Image from "next/image";
import contactBg from "@/assets/images/contact background.jpg";

import mailIcon from "@/assets/images/footer/mail.svg";
import callIcon from "@/assets/images/footer/call.svg";
import mapIcon from "@/assets/images/footer/map.svg";
import telegramIcon from "@/assets/images/footer/telegram.svg";
import whatsappIcon from "@/assets/images/footer/whatsapp.svg";

import approveIcon from "@/assets/images/Approve.svg";
import errorIcon from "@/assets/images/Error.svg";

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

  const sectionRef = useRef<HTMLElement | null>(null);

  const [modal, setModal] = useState<{ open: boolean; kind: "success" | "error" }>({ open: false, kind: "success" });

  const successHeading = locale === "en" ? "Thank you!" : "Спасибо!";
  const successText = locale === "en" ? "We’ll be in touch shortly." : "Мы свяжемся с вами в ближайшее время.";
  const errorHeading = locale === "en" ? "Error" : "Ошибка";
  const errorText = locale === "en" ? "Could not submit the form. Please try again." : "Не удалось отправить форму. Попробуйте ещё раз.";

  useEffect(() => {
    if (!modal.open) return;
    const t = setTimeout(() => setModal((m) => ({ ...m, open: false })), 5000);
    return () => clearTimeout(t);
  }, [modal.open]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobile = () => window.innerWidth < 768;

    const handleFocus = (e: Event) => {
      if (!isMobile()) return;
      const target = e.target as HTMLElement;

      // Ensure there's space below for the keyboard; push content up.
      const vv = (window as any).visualViewport;
      let extra = 220; // fallback extra padding in px
      if (vv && sectionRef.current) {
        const kb = window.innerHeight - vv.height; // keyboard height approximation
        extra = kb > 0 ? kb + 24 : 220; // add a little extra
        sectionRef.current.style.paddingBottom = `${80 + extra}px`; // preserve original 80px
      } else if (sectionRef.current) {
        sectionRef.current.style.paddingBottom = `${80 + extra}px`;
      }

      // Help the browser center the focused control
      (target.style as any).scrollMarginBottom = "120px";
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
      }, 100);
    };

    const handleBlur = () => {
      if (sectionRef.current) {
        sectionRef.current.style.paddingBottom = ""; // reset to Tailwind value
      }
    };

    const inputs = Array.from(document.querySelectorAll("#contact input, #contact textarea"));
    inputs.forEach((el) => {
      el.addEventListener("focus", handleFocus, { passive: true } as any);
      el.addEventListener("blur", handleBlur, { passive: true } as any);
    });

    // Keep padding synced with keyboard height on iOS/Android Chrome
    let vvHandler: any = null;
    if ((window as any).visualViewport) {
      vvHandler = () => {
        if (!isMobile() || !sectionRef.current) return;
        const vv = (window as any).visualViewport;
        const kb = window.innerHeight - vv.height;
        if (kb > 0) {
          sectionRef.current.style.paddingBottom = `${80 + kb + 24}px`;
        }
      };
      (window as any).visualViewport.addEventListener("resize", vvHandler);
    }

    return () => {
      inputs.forEach((el) => {
        el.removeEventListener("focus", handleFocus as any);
        el.removeEventListener("blur", handleBlur as any);
      });
      if ((window as any).visualViewport && vvHandler) {
        (window as any).visualViewport.removeEventListener("resize", vvHandler);
      }
    };
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email);
    const phoneOk = /^\+\d{10,15}$/.test(phone);

    if (!emailOk || !phoneOk) {
      setModal({ open: true, kind: "error" });
      return;
    }

    try {
      await new Promise((r) => setTimeout(r, 300));
      setModal({ open: true, kind: "success" });
    } catch (err) {
      setModal({ open: true, kind: "error" });
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="pt-[112px] pb-[80px] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={contactBg}
          alt="Contact background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-[20px] lg:px-[80px]">
        <div className="mx-auto w-full max-w-[1280px]">
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
              <div className="flex items-start gap-4">
                <Image src={mailIcon} alt="Email" width={24} height={24} className="w-6 h-6" />
                <div>
                  <a
                    href={`mailto:${t.company.email}`}
                    className="underline font-['Avenir Next'] text-[16px]"
                  >
                    {t.company.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Image src={callIcon} alt="Phone" width={24} height={24} className="w-6 h-6" />
                <div>
                  <a href={`tel:${t.company.phone}`} className="underline font-['Avenir Next'] text-[16px]">
                    {t.company.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Image src={mapIcon} alt="Address" width={24} height={24} className="w-6 h-6" />
                <div className="font-['Avenir Next'] text-[16px]">{t.company.address}</div>
              </div>
            </div>

            {/* Messengers */}
            <div className="mt-4 flex flex-col space-y-4">
              <Link
                href={t.company.whatsappUrl}
                target="_blank"
                className="inline-flex items-center gap-4"
              >
                <Image src={whatsappIcon} alt="WhatsApp" width={35} height={35} className="w-[35px] h-[35px] object-contain" />
                <span className="font-normal font-['Avenir Next'] text-[16px]">{t.links.whatsapp}</span>
              </Link>

              <Link
                href={t.company.telegramUrl}
                target="_blank"
                className="inline-flex items-center gap-4"
              >
                <Image src={telegramIcon} alt="Telegram" width={35} height={35} className="w-[35px] h-[35px] object-contain" />
                <span className="font-normal font-['Avenir Next'] text-[16px]">{t.links.telegram}</span>
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
                  type="tel"
                  name="phone"
                  required
                  inputMode="tel"
                  pattern="^\+\d{10,15}$"
                  title={locale === "en" ? "Use international format, e.g. +996700997779" : "Введите номер в международном формате, например +996700997779"}
                  className="w-full rounded-none bg-transparent border-0 border-b-2 border-[rgba(0,13,13,0.26)] focus:border-[#74C2CD] px-0 py-2 outline-none focus:ring-0 text-[16px] leading-[24px] font-normal font-['Avenir Next'] placeholder:text-black/40 transition-colors"
                  placeholder="+996700997779"
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
                  pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
                  title={locale === "en" ? "Enter a valid email (e.g., name@example.com)" : "Введите корректный email (например, name@example.com)"}
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
      </div>
      {modal.open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setModal((m) => ({ ...m, open: false }))}
        >
          <div
            className={`relative w-[458px] h-[213px] bg-white rounded-xl border-2 shadow-xl ${
              modal.kind === "success" ? "border-[#4EBC00]" : "border-[#E85869]"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top-left status icon */}
            <Image
              src={modal.kind === "success" ? approveIcon : errorIcon}
              alt={modal.kind === "success" ? "Success" : "Error"}
              width={85}
              height={85}
              className="absolute top-0 left-0 w-[85px] h-[85px] -translate-x-1/2 -translate-y-1/2 object-contain"
              priority
            />

            {/* Content */}
            <button
              onClick={() => setModal((m) => ({ ...m, open: false }))}
              className="absolute top-2 right-2 px-2 py-1 text-sm text-black/60 hover:text-black"
              aria-label={locale === "en" ? "Close" : "Закрыть"}
            >
              ×
            </button>

            <div className="h-full flex flex-col items-center justify-center px-8 text-center">
              <h3 className="font-['Helvetica'] font-bold text-[32px] leading-tight">
                {modal.kind === "success" ? successHeading : errorHeading}
              </h3>
              <p className="mt-2 font-['Helvetica'] text-[24px]">
                {modal.kind === "success" ? successText : errorText}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}