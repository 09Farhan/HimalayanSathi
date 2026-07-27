'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Mountain, Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Destinations', href: '/destinations' },
  { name: 'Packages', href: '/packages' },
  { name: 'Cab Services', href: '/cab-services' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? 'glass-dark shadow-nav' : 'bg-transparent py-2'
        }`}
      >
        {/* Top Bar for Contact Info */}
        <div
          className={`hidden md:block w-full border-b border-white/10 transition-all duration-300 ${
            isScrolled ? 'h-0 opacity-0 overflow-hidden border-transparent' : 'h-8 opacity-100'
          }`}
        >
          <div className="container mx-auto px-4 h-full flex items-center justify-end">
            <a
              href="tel:+917679948664"
              className="flex items-center gap-1.5 text-xs text-white/90 hover:text-accent transition-colors"
            >
              <Phone size={12} />
              <span>+91 76799 48664</span>
            </a>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 z-50 group">
              <div className="relative w-12 h-12 bg-white rounded-lg p-1 shadow-sm transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="Himalayan Sathi Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-heading text-xl md:text-2xl font-bold text-white tracking-wide">
                Himalayan Sathi
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative py-2 ${
                    pathname === link.href
                      ? 'text-accent'
                      : 'text-white/90 hover:text-accent'
                  }`}
                >
                  {link.name}
                  {pathname === link.href && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4 z-50">
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-primary bg-accent hover:bg-accent-light rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Book Now
              </Link>
              
              <button
                className="lg:hidden p-2 text-white hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-surface-dark/95 backdrop-blur-md z-40 lg:hidden transition-transform duration-500 ease-in-out flex flex-col items-center justify-start pt-24 pb-8 overflow-y-auto ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col w-full px-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block w-full py-5 text-center text-xl font-heading font-bold border-b border-white/10 transition-colors active:bg-white/5 ${
                pathname === link.href
                  ? 'text-accent border-accent/30'
                  : 'text-white hover:text-accent'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col items-center w-full mt-6">
            <Link
              href="/contact"
              className="w-full text-center py-4 text-lg font-bold text-primary bg-accent rounded-xl hover:bg-accent-light transition-colors shadow-lg active:scale-95"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </Link>
            <a
              href="tel:+917679948664"
              className="flex items-center gap-2 mt-8 text-white/80 active:text-accent"
            >
              <Phone size={18} className="text-accent" />
              <span>+91 76799 48664</span>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
