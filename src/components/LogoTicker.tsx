"use client"

import cavisLogo from '@/assets/images/cavis logo.png'
import cavisLogo2 from '@/assets/images/cavis logo2.png'
import cavisLogo3 from '@/assets/images/cavis logo3.png'
import cavisLogo4 from '@/assets/images/cavis logo.png'
import cavisLogo5 from '@/assets/images/cavis logo2.png'
import cavisLogo6 from '@/assets/images/cavis logo3.png'
import Image from 'next/image';
import { Fragment } from 'react'
import { motion, animate } from 'framer-motion'

const logos = [
    { name: "Cavis", image: cavisLogo },
    { name: "Cavis2", image: cavisLogo2 },
    { name: "Cavis3", image: cavisLogo3 },
    { name: "Cavis4", image: cavisLogo4 },
    { name: "Cavis5", image: cavisLogo5 },
    { name: "Cavis6", image: cavisLogo6 }
];


export default function LogoTicker() {
    return (
        <section className='py-24 overflow-x-clip'>
            <div className=''>
                <h3 className='text-center text-white/50 text-xl'>Already chosen by these firms</h3>
                <div className='overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]'>
                    <motion.div 
                        animate={{
                            x: "-50%",
                        }}
                        transition={{
                            duration: 10,
                            ease: "linear",
                            repear: Infinity,
                        }}
                        className='flex  flex-non gap-24 pr-24 '
                        >
                            {Array.from({ length: 2 }).map((_, i) => (
                                <Fragment key={i}>
                                    {logos.map((logo) => (
                                        <Image
                                          key={logo.name}
                                          src={logo.image}
                                          alt={logo.name}
                                          className="h-10 w-auto object-contain"
                                      />
                                  ))}
                            </Fragment>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>

    );
}