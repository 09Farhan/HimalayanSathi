'use client';

import React, { useState } from 'react';
<<<<<<< HEAD
import { Button } from './Button';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      (e.target as HTMLFormElement).reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="bg-surface-card p-6 md:p-8 rounded-2xl shadow-[var(--shadow-card)]">
      <h3 className="text-2xl font-heading font-bold text-primary mb-6">Send us a Message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              className="w-full px-4 py-2 rounded-lg border border-surface-muted focus:border-primary-light focus-ring bg-surface transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-1">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              required 
              className="w-full px-4 py-2 rounded-lg border border-surface-muted focus:border-primary-light focus-ring bg-surface transition-colors"
              placeholder="+91 98765 43210"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              className="w-full px-4 py-2 rounded-lg border border-surface-muted focus:border-primary-light focus-ring bg-surface transition-colors"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label htmlFor="destination" className="block text-sm font-medium text-text-secondary mb-1">Destination</label>
            <select 
              id="destination" 
              name="destination" 
              className="w-full px-4 py-2 rounded-lg border border-surface-muted focus:border-primary-light focus-ring bg-surface transition-colors"
            >
              <option value="">Select Destination</option>
              <option value="darjeeling">Darjeeling</option>
              <option value="sikkim">Sikkim</option>
              <option value="bhutan">Bhutan</option>
              <option value="northeast">North East India</option>
              <option value="other">Not sure yet</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="travelDates" className="block text-sm font-medium text-text-secondary mb-1">Expected Travel Dates</label>
            <input 
              type="text" 
              id="travelDates" 
              name="travelDates" 
              className="w-full px-4 py-2 rounded-lg border border-surface-muted focus:border-primary-light focus-ring bg-surface transition-colors"
              placeholder="e.g. October 2024"
            />
          </div>
          <div>
            <label htmlFor="travellers" className="block text-sm font-medium text-text-secondary mb-1">Number of Travellers</label>
            <input 
              type="number" 
              id="travellers" 
              name="travellers" 
              min="1"
              className="w-full px-4 py-2 rounded-lg border border-surface-muted focus:border-primary-light focus-ring bg-surface transition-colors"
              placeholder="2"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1">Your Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows={4} 
            required
            className="w-full px-4 py-2 rounded-lg border border-surface-muted focus:border-primary-light focus-ring bg-surface transition-colors resize-none"
            placeholder="Tell us about your dream trip..."
          ></textarea>
        </div>
        
        <Button 
          type="submit" 
          disabled={status === 'loading'}
          className="w-full"
        >
          {status === 'loading' ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : 'Send Message'}
        </Button>

        {status === 'success' && (
          <div className="p-3 bg-green-50 text-green-700 rounded-lg text-sm border border-green-200 animate-fade-in-up">
            Thank you! Your message has been sent successfully. We will get back to you soon.
          </div>
        )}
        
        {status === 'error' && (
          <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm border border-red-200 animate-fade-in-up">
            Something went wrong. Please try again or contact us directly.
          </div>
        )}
      </form>
    </div>
=======
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import Button from './Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: 'Darjeeling',
    travelDates: '',
    travellers: '2',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, you would fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
      
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        destination: 'Darjeeling',
        travelDates: '',
        travellers: '2',
        message: ''
      });
      
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-2xl shadow-card">
      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-50 text-green-800 rounded-xl flex items-center gap-3 animate-fade-in-up">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <p>Thank you! Your enquiry has been sent. We'll get back to you shortly.</p>
        </div>
      )}
      
      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 text-red-800 rounded-xl flex items-center gap-3 animate-fade-in-up">
          <AlertCircle className="w-5 h-5 text-red-500" />
          <p>Something went wrong. Please try again later or contact us directly.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)] focus:border-transparent transition-all"
            placeholder="John Doe"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)] focus:border-transparent transition-all"
            placeholder="john@example.com"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)] focus:border-transparent transition-all"
            placeholder="+91 98765 43210"
          />
        </div>
        
        <div>
          <label htmlFor="destination" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Preferred Destination</label>
          <select
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)] focus:border-transparent transition-all bg-white"
          >
            <option value="Darjeeling">Darjeeling</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Northeast India">Northeast India</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="travelDates" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Estimated Travel Dates</label>
          <input
            type="text"
            id="travelDates"
            name="travelDates"
            value={formData.travelDates}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)] focus:border-transparent transition-all"
            placeholder="e.g. October 2024"
          />
        </div>
        
        <div>
          <label htmlFor="travellers" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Number of Travellers</label>
          <input
            type="number"
            id="travellers"
            name="travellers"
            min="1"
            value={formData.travellers}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)] focus:border-transparent transition-all"
          />
        </div>
      </div>
      
      <div className="mb-8">
        <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Special Requirements / Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)] focus:border-transparent transition-all resize-none"
          placeholder="Tell us about your dream trip..."
        ></textarea>
      </div>
      
      <Button 
        type="submit" 
        variant="primary" 
        size="lg" 
        className="w-full"
        disabled={status === 'loading'}
        icon={status === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
      >
        {status === 'loading' ? 'Sending Enquiry...' : 'Send Enquiry'}
      </Button>
    </form>
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e
  );
}
