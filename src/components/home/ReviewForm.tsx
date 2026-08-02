'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import { Star, MapPin } from 'lucide-react';

export default function ReviewForm({ destinations = [] }: { destinations?: { slug: string, name: string }[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    location: '',
    quote: '',
    destinationSlug: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const destinationName = destinations.find(d => d.slug === formData.destinationSlug)?.name || '';

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          destinationName
        })
      });

      if (res.ok) {
        setIsSuccess(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return (
      <div className="mt-12 text-center">
        <Button onClick={() => setIsOpen(true)} variant="outline">
          Write a Review
        </Button>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="mt-12 max-w-2xl mx-auto bg-green-50 text-green-800 p-8 rounded-2xl text-center shadow-sm border border-green-100 animate-fade-in-up">
        <h3 className="text-xl font-bold mb-2">Thank you for your feedback!</h3>
        <p>Your review has been submitted successfully and is pending approval.</p>
        <Button onClick={() => { 
          setIsSuccess(false); 
          setIsOpen(false); 
          setFormData({name:'', rating:5, location:'', quote:'', destinationSlug:''}); 
        }} className="mt-6" variant="outline" size="sm">
          Close
        </Button>
      </div>
    );
  }

  return (
    <div className="mt-12 max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 animate-fade-in-up">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold font-heading text-primary">Write a Review</h3>
        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 font-bold p-2">✕</button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
            <input 
              type="text" 
              required
              value={formData.name} 
              onChange={e => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 bg-surface-muted border border-transparent rounded-xl focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location (Optional)</label>
            <input 
              type="text" 
              value={formData.location} 
              onChange={e => setFormData({...formData, location: e.target.value})}
              className="w-full px-4 py-3 bg-surface-muted border border-transparent rounded-xl focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
              placeholder="London, UK"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Rating *</label>
            <div className="flex gap-2 pt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFormData({...formData, rating: star})}
                  className="focus:outline-none transition-transform hover:scale-110"
                >
                  <Star 
                    className={`w-8 h-8 ${star <= formData.rating ? 'fill-accent text-accent' : 'text-gray-300'}`} 
                  />
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Where did you go? (Optional)</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={formData.destinationSlug}
                onChange={e => setFormData({...formData, destinationSlug: e.target.value})}
                className="w-full pl-11 pr-4 py-3 bg-surface-muted border border-transparent rounded-xl focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all appearance-none cursor-pointer"
              >
                <option value="">Select a destination...</option>
                {destinations.map(dest => (
                  <option key={dest.slug} value={dest.slug}>
                    {dest.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Review *</label>
          <textarea 
            required
            value={formData.quote} 
            onChange={e => setFormData({...formData, quote: e.target.value})}
            className="w-full px-4 py-3 bg-surface-muted border border-transparent rounded-xl focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
            rows={4}
            placeholder="Tell us about your experience..."
          />
        </div>

        <div className="pt-2">
          <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
            {isSubmitting ? 'Submitting...' : 'Submit Review'}
          </Button>
        </div>
      </form>
    </div>
  );
}
