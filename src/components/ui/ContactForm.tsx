'use client';

import React, { useState } from 'react';
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
  );
}
