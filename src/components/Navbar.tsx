"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import Button from '@/components/Button';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import ru from '@/locales/ru/nav.json';
import en from '@/locales/en/nav.json';
import logoImage from '@/assets/images/webservice_logo1.png';

export default function Navbar() {
  const { locale } = useRouter();
  const t = locale === 'en' ? en : ru;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="py-4 px-2 lg:py-8 fixed w-full top-0 z-50">
        <div className="px-4 md:px-8 lg:px-16">
          <div className="border border-gray/15 bg-[#f5f4f4]-950/70 backdrop-blur">
            <div className="relative flex items-center justify-between p-2 md:p-4">
              {/* Logo */}
              <Link href="/">
                <Image
                  src={logoImage}
                  alt={t.logoAlt}
                  className="h-9 md:h-12 w-auto cursor-pointer"
                />
              </Link>

              {/* Desktop Nav Links */}
              <div className="hidden md:flex items-center gap-6">
                {/* Service links */}
                {t.servicesItems.map((item, idx) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="whitespace-nowrap hover:text-blue-400 flex items-center"
                  >
                    {item.label}
                    {/* Down arrow on the last service */}
                    {idx === t.servicesItems.length - 1 && (
                      <ChevronDownIcon className="ml-1 h-4 w-4" />
                    )}
                  </Link>
                ))}
                {/* Blog & About */}
                {t.links.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="whitespace-nowrap hover:text-blue-400"
                  >
                    {link.label}
                  </Link>
                ))}
                {/* Contact button */}
                <Link href={t.contact.href}>
                  <Button variant="teal">{t.contact.label}</Button>
                </Link>
              </div>

              {/* Mobile Burger & CTA */}
              <div className="flex items-center gap-4 md:hidden">
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
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  className="overflow-hidden md:hidden"
                >
                  <div className="flex flex-col items-center gap-4 py-4">
                    <Link href="/vps-hosting" className="py-2">
                      {t.servicesItems[0].label}
                    </Link>
                    <Link href="/vps-1c-bitrix" className="py-2">
                      {t.servicesItems[1].label}
                    </Link>
                    <Link href="/game-hosting" className="py-2">
                      {t.servicesItems[2].label}
                    </Link>
                    <Link href="/web-hosting" className="py-2">
                      {t.servicesItems[3].label}
                    </Link>
                    <Link href="/ssl-certificates" className="py-2">
                      {t.servicesItems[4].label}
                    </Link>
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
        </div>
      </header>
      {/* Spacer */}
      <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]" />
    </>
  );
}
