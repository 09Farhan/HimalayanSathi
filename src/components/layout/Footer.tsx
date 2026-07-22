<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-surface-dark text-text-light pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="text-3xl">🏔️</div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl leading-tight text-white">
                  Himalayan Sathi
                </span>
                <span className="text-[0.65rem] tracking-[0.2em] uppercase font-semibold text-accent">
                  Tours & Travels
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-text-light">
              Your trusted companion for exploring the mystical Himalayas. Govt. registered tour operator offering customized packages for Darjeeling, Sikkim, Bhutan, and North East India.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-accent rounded-full"></span>
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-accent transition-colors flex items-center gap-2"><span className="text-accent">›</span> About Us</Link></li>
              <li><Link href="/destinations" className="hover:text-accent transition-colors flex items-center gap-2"><span className="text-accent">›</span> All Destinations</Link></li>
              <li><Link href="/packages" className="hover:text-accent transition-colors flex items-center gap-2"><span className="text-accent">›</span> Tour Packages</Link></li>
              <li><Link href="/cab-services" className="hover:text-accent transition-colors flex items-center gap-2"><span className="text-accent">›</span> Cab Services</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors flex items-center gap-2"><span className="text-accent">›</span> Contact Us</Link></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-6 relative inline-block">
              Top Destinations
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-accent rounded-full"></span>
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/destinations/darjeeling" className="hover:text-accent transition-colors flex items-center gap-2"><span className="text-accent">›</span> Darjeeling Tours</Link></li>
              <li><Link href="/destinations/sikkim" className="hover:text-accent transition-colors flex items-center gap-2"><span className="text-accent">›</span> Sikkim Adventures</Link></li>
              <li><Link href="/destinations/bhutan" className="hover:text-accent transition-colors flex items-center gap-2"><span className="text-accent">›</span> Bhutan Escapes</Link></li>
              <li><Link href="/destinations/northeast" className="hover:text-accent transition-colors flex items-center gap-2"><span className="text-accent">›</span> North East India</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-accent rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Himalayan Sathi Tours & Travels, Near Railway Station, Siliguri, West Bengal 734001</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
=======
import Link from 'next/link';
import { Mountain, Phone, Mail, MapPin } from 'lucide-react';

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
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-accent text-primary p-2 rounded-lg group-hover:bg-white transition-colors duration-300">
                <Mountain size={24} className="stroke-[2.5px]" />
              </div>
              <span className="font-heading text-xl md:text-2xl font-bold tracking-wide">
                Himalayan Sathi
              </span>
            </Link>
            <h4 className="font-medium text-accent">Your Trusted Himalayan Travel Companion</h4>
            <p className="text-white/70 text-sm leading-relaxed mt-2">
              Discover the breathtaking beauty of the Himalayas with expertly crafted tours to Sikkim, Darjeeling, Bhutan, and Northeast India. We provide memorable experiences tailored to your desires.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4 lg:pl-8">
            <h3 className="font-heading text-xl font-bold mb-2">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {['Home', 'Destinations', 'Packages', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <Link 
                    href={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-white/70 hover:text-accent transition-colors text-sm flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/50 hover:before:bg-accent"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Destinations */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-xl font-bold mb-2">Destinations</h3>
            <ul className="flex flex-col gap-3">
              {['Darjeeling', 'Sikkim', 'Bhutan', 'Northeast India'].map((dest) => (
                <li key={dest}>
                  <Link 
                    href={`/destinations/${dest.toLowerCase().replace(' ', '-')}`}
                    className="text-white/70 hover:text-accent transition-colors text-sm flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/50 hover:before:bg-accent"
                  >
                    {dest}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-xl font-bold mb-2">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <Phone size={18} className="text-accent shrink-0 mt-0.5" />
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e
                <div className="flex flex-col gap-1">
                  <a href="tel:+917679948664" className="hover:text-accent transition-colors">+91 76799 48664</a>
                  <a href="tel:+918766807543" className="hover:text-accent transition-colors">+91 87668 07543</a>
                </div>
              </li>
<<<<<<< HEAD
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.53 4.389a2 2 0 001.94 0L20 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@himalayansathi.com" className="hover:text-accent transition-colors">info@himalayansathi.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Himalayan Sathi Tours & Travels. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-accent transition-colors">Terms & Conditions</Link>
          </div>
=======
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Mail size={18} className="text-accent shrink-0" />
                <a href="mailto:info@himalayansathi.com" className="hover:text-accent transition-colors">info@himalayansathi.com</a>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                <span>Siliguri, West Bengal, India</span>
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
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e
        </div>
      </div>
    </footer>
  );
}
