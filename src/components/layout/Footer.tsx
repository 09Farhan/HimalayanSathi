import Link from 'next/link';
import Image from 'next/image';
import { Mountain, Phone, Mail, MapPin } from 'lucide-react';
import { FOOTER_LINKS, SITE_INFO } from '@/data/constants';

/** Inline SVG brand icons (lucide-react no longer exports brand icons) */
function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-dark text-white relative pt-20 pb-8 mt-auto border-t border-white/10">
      {/* Decorative Mountain Silhouette */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 opacity-5">
        <svg
          className="relative block w-full h-[50px] md:h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="group inline-block w-fit">
              <div className="relative w-48 h-32 md:w-56 md:h-36 bg-[#faf8f5] rounded-2xl p-2 shadow-sm transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="Himalayan Sathi Logo"
                  fill
                  className="object-contain p-2"
                />
              </div>
            </Link>
            <h4 className="font-medium text-accent">Your Trusted Himalayan Travel Companion</h4>
            <p className="text-white/70 text-sm leading-relaxed mt-2">
              Discover the breathtaking beauty of the Himalayas with expertly crafted tours to Sikkim, Darjeeling, Bhutan, and Northeast India. We provide memorable experiences tailored to your desires.
            </p>
          </div>

          {/* Dynamic Link Columns */}
          {FOOTER_LINKS.slice(0, 2).map((section) => (
            <div key={section.title} className="flex flex-col gap-4 lg:pl-8">
              <h3 className="font-heading text-xl font-bold mb-2">{section.title}</h3>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-white/70 hover:text-accent transition-colors text-sm flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/50 hover:before:bg-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 4: Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-xl font-bold mb-2">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a href={`tel:${SITE_INFO.phone.replace(/[^+0-9]/g, '')}`} className="flex items-start gap-3 text-white/70 hover:text-accent transition-colors group">
                  <Phone size={18} className="mt-0.5 text-accent group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{SITE_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE_INFO.email}`} className="flex items-start gap-3 text-white/70 hover:text-accent transition-colors group">
                  <Mail size={18} className="mt-0.5 text-accent group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{SITE_INFO.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70">
                  <MapPin size={18} className="mt-0.5 text-accent" />
                  <span className="text-sm leading-relaxed">{SITE_INFO.address}</span>
                </div>
              </li>
            </ul>
            
            <div className="flex items-center gap-4 mt-2">
              <a href="#" aria-label="Instagram" className="bg-white/10 p-2.5 rounded-full hover:bg-accent hover:text-primary transition-all duration-300">
                <InstagramIcon size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="bg-white/10 p-2.5 rounded-full hover:bg-accent hover:text-primary transition-all duration-300">
                <FacebookIcon size={18} />
              </a>
              <a href="https://wa.me/917679948664" aria-label="WhatsApp" className="bg-white/10 p-2.5 rounded-full hover:bg-accent hover:text-primary transition-all duration-300">
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50 text-center md:text-left">
          <p>© {currentYear} Himalayan Sathi Tours & Travels. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with <span className="text-red-500 text-sm">❤️</span> in the Himalayas
          </p>
        </div>
      </div>
    </footer>
  );
}
