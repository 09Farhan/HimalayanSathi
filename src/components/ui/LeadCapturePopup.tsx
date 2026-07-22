'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './Button';

export function LeadCapturePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  useEffect(() => {
    const isDismissed = localStorage.getItem('hs_popup_dismissed');
    
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        document.body.style.overflow = 'hidden'; // Lock scroll
      }, 5000); // 5 seconds delay
      
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
    
    // Set expiry for 24 hours
    const expiry = new Date().getTime() + 24 * 60 * 60 * 1000;
    localStorage.setItem('hs_popup_dismissed', expiry.toString());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        closePopup();
      }, 2000);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary-dark/60 backdrop-blur-sm animate-fade-in-up"
        onClick={closePopup}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md bg-surface-card rounded-2xl shadow-2xl overflow-hidden animate-scale-in flex flex-col max-h-[90vh]">
        
        {/* Header with decorative background */}
        <div className="relative pt-10 pb-6 px-6 sm:px-8 text-center gradient-primary text-white">
          <button 
            onClick={closePopup}
            className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-full transition-colors focus-ring"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="text-4xl mb-3 animate-float">🏔️</div>
          <h2 className="text-2xl font-heading font-bold mb-2">Plan Your Dream Himalayan Trip!</h2>
          <p className="text-sm text-white/90">Get exclusive offers and personalized itineraries.</p>
        </div>

        {/* Form */}
        <div className="p-6 sm:px-8 sm:py-8 overflow-y-auto">
          {status === 'success' ? (
             <div className="text-center py-8 animate-fade-in-up">
               <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                 <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                 </svg>
               </div>
               <h3 className="text-xl font-bold text-primary mb-2">Quote Requested!</h3>
               <p className="text-text-secondary">Our travel experts will contact you shortly.</p>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="popup-name" className="sr-only">Full Name</label>
                <input 
                  type="text" 
                  id="popup-name" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-surface-muted bg-surface focus:border-primary-light focus-ring transition-colors"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="popup-phone" className="sr-only">Phone Number</label>
                <input 
                  type="tel" 
                  id="popup-phone" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-surface-muted bg-surface focus:border-primary-light focus-ring transition-colors"
                  placeholder="Phone Number"
                />
              </div>
              
              <div>
                <label htmlFor="popup-email" className="sr-only">Email Address</label>
                <input 
                  type="email" 
                  id="popup-email" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-surface-muted bg-surface focus:border-primary-light focus-ring transition-colors"
                  placeholder="Email Address"
                />
              </div>

              <div>
                <label htmlFor="popup-dest" className="sr-only">Preferred Destination</label>
                <select 
                  id="popup-dest" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-surface-muted bg-surface focus:border-primary-light focus-ring transition-colors text-text-primary"
                >
                  <option value="">Preferred Destination</option>
                  <option value="darjeeling">Darjeeling</option>
                  <option value="sikkim">Sikkim</option>
                  <option value="bhutan">Bhutan</option>
                  <option value="northeast">Northeast India</option>
                  <option value="not_sure">Not Sure Yet</option>
                </select>
              </div>

              <Button 
                type="submit" 
                variant="accent" 
                className="w-full py-4 text-lg mt-2"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Submitting...' : 'Get Free Quote'}
              </Button>
              
              <p className="text-xs text-center text-text-muted mt-4">
                We respect your privacy. No spam.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
