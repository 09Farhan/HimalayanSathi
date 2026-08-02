'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    
    // Initial check in case of page reload halfway down
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-accent text-primary-dark shadow-[0_4px_14px_0_rgba(214,158,46,0.39)] hover:shadow-[0_6px_20px_rgba(214,158,46,0.23)] hover:-translate-y-1 hover:bg-accent-light transition-all duration-300 outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}
