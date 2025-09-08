"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

import en from "@/locales/en/faq.json";
import ru from "@/locales/ru/faq.json";

type FaqItem = { q: string; a: string };

export default function Faqs() {
  const { locale } = useRouter();
  const t = (locale === "en" ? (en as any) : (ru as any)) as { title: string; items: FaqItem[] };

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="pt-[112px] pb-[112px]">
      <div className="mx-auto w-full max-w-[1440px] px-[20px] min-[1440px]:px-[80px]">
        {/* Title */}
        <h2 className="font-['Helvetica'] font-normal text-[40px] md:text-[52px] leading-tight text-left">
          {t.title}
        </h2>

        {/* List */}
        <div className="mt-[40px] divide-y divide-[rgba(0,13,13,0.12)]">
          {t.items.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-5 md:py-6">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  className="w-full flex items-start justify-between gap-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <h3 className="font-['Avenir Next'] font-semibold text-[12px] md:text-[18px] leading-snug">
                    {faq.q}
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={twMerge(
                      "flex-shrink-0 transition-transform duration-300 text-black",
                      isOpen && "rotate-45"
                    )}
                    aria-hidden="true"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, marginTop: 0, opacity: 0 }}
                      animate={{ height: "auto", marginTop: 12, opacity: 1 }}
                      exit={{ height: 0, marginTop: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="font-['Avenir Next'] text-[12px] md:text-[16px] text-black/70">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
