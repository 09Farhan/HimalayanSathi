'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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
          <Link href="/" className="flex items-center gap-2 z-50 group">
            <div className="bg-accent text-primary p-2 rounded-lg group-hover:bg-white transition-colors duration-300">
              <Mountain size={24} className="stroke-[2.5px]" />
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

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-surface-dark/95 backdrop-blur-md z-40 lg:hidden transition-transform duration-500 ease-in-out flex flex-col items-center justify-center ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col items-center gap-6 w-full px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-2xl font-heading font-bold transition-colors ${
                pathname === link.href
                  ? 'text-accent'
                  : 'text-white hover:text-accent'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="w-full max-w-xs h-px bg-white/20 my-4" />
          <Link
            href="/contact"
            className="w-full max-w-xs text-center py-3 text-lg font-bold text-primary bg-accent rounded-full hover:bg-accent-light transition-colors"
          >
            Book Now
          </Link>
          <a
            href="tel:+917679948664"
            className="flex items-center gap-2 mt-4 text-white/80"
          >
            <Phone size={18} className="text-accent" />
            <span>+91 76799 48664</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
