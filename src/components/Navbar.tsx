"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import Button from '@/components/Button';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { PhoneIcon } from '@heroicons/react/24/outline';
import callIcon from '@/assets/images/call.png';
import ru from '@/locales/ru/nav.json';
import en from '@/locales/en/nav.json';
import logoImage from '@/assets/images/webservice logo.png';

export default function Navbar() {
  const { locale } = useRouter();
  const t = locale === 'en' ? en : ru;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 w-full max-w-full overflow-x-hidden">
        <div className="mx-auto max-w-[1440px] w-full">
          <div className="w-full bg-white rounded-[27px] md:rounded-full">
            <div className="relative flex items-center justify-between h-[72px] px-[20px] md:px-[64px]">
              {/* Logo */}
              <Link href="/">
                <Image
                  src={logoImage}
                  alt={t.logoAlt}
                  width={275}
                  height={42}
                  className="cursor-pointer h-[28px] w-auto md:h-[42px] max-w-[275px]"
                />
              </Link>

              {/* Mobile Burger & CTA */}
              <div className="md:hidden flex items-center ml-auto text-black shrink-0">
                <button onClick={() => setIsOpen(!isOpen)} className="p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={twMerge("feather-menu cursor-pointer", isOpen && 'text-blue-400')}
                  >
                    <line x1={3} y1={6} x2={21} y2={6} className={twMerge("origin-left transition", isOpen && 'rotate-45 -translate-y-1')} />
                    <line x1={3} y1={12} x2={21} y2={12} className={twMerge("transition", isOpen && "opacity-0")} />
                    <line x1={3} y1={18} x2={21} y2={18} className={twMerge("origin-left transition", isOpen && '-rotate-45 translate-y-1')} />
                  </svg>
                </button>
              </div>

              {/* Desktop Nav Links */}
              <div className="hidden md:flex flex-1 items-center justify-center gap-[32px]">
                {t.servicesItems.map((item, idx) =>
                  idx === t.servicesItems.length - 1 ? (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="whitespace-nowrap hover:text-blue-400 flex items-center gap-1 justify-center"
                    >
                      {item.label}
                      <ChevronDownIcon className="w-4 h-4" />
                    </Link>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="whitespace-nowrap hover:text-blue-400 flex items-center"
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </div>

              {/* Right-aligned contact CTA button */}
              <Link href={t.contact.href} className="hidden md:flex items-center">
                <Button
                  className="!w-[238px] !h-[44px] !rounded-[10px] !bg-[#74C2CD] !text-black !text-[16px] whitespace-nowrap flex items-center justify-center gap-[10px] p-[10px] border-none"
                >
                  <Image
                    src={callIcon}
                    alt="Call"
                    width={24}
                    height={24}
                    className="w-[24px] h-[24px]"
                  />
                  {t.contact.label}
                </Button>
              </Link>

            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                className="absolute left-0 right-0 top-[72px] z-40 overflow-hidden md:hidden bg-white border-t border-black/10"
              >
                <div className="flex flex-col gap-4 px-[20px] py-4 text-black">
                  {t.servicesItems.map((item) => (
                    <Link key={item.href} href={item.href} className="py-2">
                      {item.label}
                    </Link>
                  ))}
                  {t.links.map(link => (
                    <Link key={link.href} href={link.href} className="py-2">
                      {link.label}
                    </Link>
                  ))}
                  <Link href={t.contact.href} className="py-2">
                    {t.contact.label}
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
}
