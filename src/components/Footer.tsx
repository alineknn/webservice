import logoImage from '@/assets/images/webservice_logo1.png'
import Image from 'next/image';
const footerLinks = [
  { href: '#contact',        label: 'Contact' },
  { href: '#privacy-policy', label: 'Privacy Policy' },
  { href: '#terms',          label: 'Terms & Conditions' },
];


export default function Footer() {
    return (
        <section className='py-16'>
            <div className="px-4 md:px-8 lg:px-16">
                <div className='flex flex-col md:flex-row items-center md:justify-between gap-6'>
                    <div>
                        <Image
                            src={logoImage}
                            alt='Cavis Logo'></Image>
                    </div>

                    <div>
                        <nav className="flex gap-6">
                            {footerLinks.map(link => (
                                <a
                                    key={link.href}            
                                    href={link.href}
                                    className="text-white/50 text-m"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}   