"use client";
import ru from "@/locales/ru/contact_page.json";
import en from "@/locales/en/contact_page.json";
import { useRouter } from "next/navigation";
import Contact from "@/components/Contact";

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
function ChatIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M21 12a7 7 0 0 1-7 7H8l-5 3V12a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7Z" />
    </svg>
  );
}
function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.09 4.2 2 2 0 0 1 4.07 2h2a2 2 0 0 1 2 1.72c.12.9.32 1.78.59 2.63a2 2 0 0 1-.45 2.11L7.91 9.09a16 16 0 0 0 6 6l.63-.31a2 2 0 0 1 2.11-.45c.85.27 1.73.47 2.63.59A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}
function PinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M12 22s-7-5.33-7-12a7 7 0 1 1 14 0c0 6.67-7 12-7 12Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

const iconMap: Record<string, (p: any) => JSX.Element> = {
  email: (p: any) => <MailIcon {...p} />,
  chat: (p: any) => <ChatIcon {...p} />,
  phone: (p: any) => <PhoneIcon {...p} />,
  office: (p: any) => <PinIcon {...p} />,
};

export default function ContactPage() {
  const router = useRouter();
  const locale = (router as any)?.locale === "en" ? "en" : "ru";
  const t: any = locale === "en" ? en : ru;

  return (
    
    <section className="pt-[112px] pb-[112px]">
        <Contact></Contact>
      <div className="mx-auto w-full max-w-[1440px] px-[20px] min-[1440px]:px-[80px]">
        {/* Page Title */}
        <h1 className="font-['Helvetica'] text-[36px] font-normal leading-tight">{t.title}</h1>
        {t.intro ? (
          <p className="mt-3 font-['Avenir Next'] text-[16px] text-black/70 max-w-[820px]">{t.intro}</p>
        ) : null}

        {/* Contact info grid (box) */}
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[rgba(0,13,13,0.08)]">
            {t.cards.map((c: any, idx: number) => {
              const Icon = iconMap[c.icon] || MailIcon;
              return (
                <div key={idx} className="px-8 py-10 text-center">
                  <div className="flex justify-center">
                    <Icon className="w-9 h-9 text-black" />
                  </div>
                  <h3 className="mt-4 font-['Helvetica'] text-[28px] font-normal">{c.title}</h3>
                  <p className="mt-3 font-['Avenir Next'] text-[16px] text-black/70">{c.text}</p>
                  {c.linkLabel && c.href ? (
                    <div className="mt-5">
                      <a href={c.href} className="font-['Avenir Next'] text-[16px] underline">{c.linkLabel}</a>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
