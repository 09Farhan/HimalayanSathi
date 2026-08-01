'use client';

import { useState, useRef } from 'react';
import Button from '@/components/ui/Button';
import { Star, Upload, X } from 'lucide-react';
import Image from 'next/image';

export default function ReviewForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    location: '',
    quote: ''
  });
  
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        alert("Image size must be less than 5MB");
        return;
      }
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('rating', formData.rating.toString());
      submitData.append('location', formData.location);
      submitData.append('quote', formData.quote);
      
      if (imageFile) {
        submitData.append('image', imageFile);
      }

      const res = await fetch('/api/reviews', {
        method: 'POST',
        // Note: Do not set Content-Type header when sending FormData, 
        // the browser automatically sets it with the correct boundary
        body: submitData
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
          setFormData({name:'', rating:5, location:'', quote:''});
          removeImage();
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

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Rating *</label>
          <div className="flex gap-2">
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

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Add a Photo (Optional)</label>
          {imagePreview ? (
            <div className="relative w-full max-w-xs h-40 rounded-xl overflow-hidden border border-gray-200">
              <Image src={imagePreview} alt="Preview" fill className="object-cover" />
              <button
                type="button"
                onClick={removeImage}
                className="absolute top-2 right-2 bg-black/60 hover:bg-black text-white rounded-full p-1.5 transition-colors"
                title="Remove photo"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="w-full border-2 border-dashed border-gray-300 hover:border-accent hover:bg-accent/5 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer transition-colors text-gray-500"
            >
              <Upload className="w-8 h-8 mb-2 opacity-50" />
              <p className="text-sm">Click to upload a picture from your trip</p>
              <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 5MB</p>
            </div>
          )}
          <input 
            type="file" 
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageChange}
          />
        </div>

        <div className="pt-4">
          <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
            {isSubmitting ? 'Submitting...' : 'Submit Review'}
          </Button>
        </div>
      </form>
    </div>
  );
}
