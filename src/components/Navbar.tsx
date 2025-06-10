"use client";

import Image from 'next/image'
import logoImage from '@/assets/images/webservice_logo1.png'
import Button from '@/components/Button'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge';
import { AnimatePresence, motion } from "framer-motion"

const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Pricing', href: '#' },
]



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <section className='py-4 px-2 lg:py-8 fixed w-full top-0 z-50'>
                <div className="px-4 md:px-8 lg:px-16">
                    <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
                        <div className="relative flex items-center justify-between p-2 md:p-4">
                            {/* Logo */}
                            <div className="shrink-0">
                                <Image
                                    src={logoImage}
                                    alt="Logo"
                                    className="h-9 md:h-12 w-auto"
                                />
                            </div>

                            {/* Centered Nav Links */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex gap-6">
                                {navLinks.map(link => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        className="whitespace-nowrap"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>

                            {/* Buttons & Burger */}
                            <div className="flex items-center gap-4">
                                {/* Hamburger for small screens */}
                                <svg
                                    xmlns='https://www.w3.org/2000/svg'
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth={2}
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    className='feather feather-menu md:hidden'
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <line x1={3} y1={6} x2={21} y2={6} className={twMerge("origin-left transition", isOpen && 'rotate-45 -translate-y-1')} />
                                    <line x1={3} y1={12} x2={21} y2={12} className={twMerge("transition", isOpen && "opacity-0")} />
                                    <line x1={3} y1={18} x2={21} y2={18} className={twMerge("origin-left transition", isOpen && '-rotate-45 translate-y-1')} />
                                </svg>

                                {/* Desktop Buttons */}
                                <Button variant='secondary' className='hidden md:inline-flex items-center'>Try It</Button>
                                <Button variant='primary' className='hidden md:inline-flex items-center'>Buy It</Button>
                            </div>
                        </div>

                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    className="overflow-hidden">
                                    <div className="flex flex-col items-center gap-4 py-4 ">
                                        {navLinks.map((link) => (
                                            <a href={link.href} key={link.label} className="py-2">
                                                {link.label}
                                            </a>
                                        ))}
                                        <Button variant="secondary">Try It</Button>
                                        <Button variant="primary">Buy It</Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
            <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]"></div>
        </>
    );
}

export default Navbar;