'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/Button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Packages', href: '/packages' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-primary-dark text-white/90 text-sm py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+917679948664" className="flex items-center gap-2 hover:text-accent transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 76799 48664
            </a>
            <a href="mailto:info@himalayansathi.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.53 4.389a2 2 0 001.94 0L20 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@himalayansathi.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-semibold text-accent">Govt. Registered Tour Operator</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'top-0 glass-dark py-3 shadow-[var(--shadow-nav)]' : 'top-0 md:top-[34px] bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className={`text-3xl transition-transform group-hover:scale-110 ${scrolled ? 'text-accent' : 'text-accent'}`}>
                🏔️
              </div>
              <div className="flex flex-col">
                <span className={`font-heading font-bold text-xl leading-tight ${scrolled ? 'text-white' : 'text-white drop-shadow-md'}`}>
                  Himalayan Sathi
                </span>
                <span className={`text-[0.65rem] tracking-[0.2em] uppercase font-semibold ${scrolled ? 'text-accent' : 'text-white drop-shadow-md'}`}>
                  Tours & Travels
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors hover:text-accent ${
                    pathname === link.href 
                      ? 'text-accent' 
                      : scrolled ? 'text-white/90' : 'text-white drop-shadow-sm'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button href="/contact" variant="accent" size="sm" className="ml-2">
                Book Now
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-white hover:bg-white/10' : 'text-white hover:bg-black/20'}`}
              aria-label="Open Menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className="absolute inset-0 bg-primary-dark/80 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        
        <div 
          className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-surface-dark shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 flex justify-between items-center border-b border-white/10">
            <span className="font-heading font-bold text-xl text-white">Menu</span>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white/70 hover:text-white rounded-full hover:bg-white/10"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <nav className="flex-1 px-6 py-8 flex flex-col gap-6 overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-lg font-semibold transition-colors ${
                  pathname === link.href ? 'text-accent' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="p-6 border-t border-white/10 space-y-4">
            <a href="tel:+917679948664" className="flex items-center gap-3 text-white/80">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 76799 48664
            </a>
            <Button href="/contact" variant="accent" className="w-full">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
