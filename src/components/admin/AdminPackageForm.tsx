'use client';

import { useState, useEffect } from 'react';
import { Package } from '@/lib/types';
import Button from '@/components/ui/Button';
import { CldUploadWidget } from 'next-cloudinary';
import { Trash2, Plus, Image as ImageIcon, X } from 'lucide-react';

interface AdminPackageFormProps {
  initialData?: any;
  onSubmit: (data: any) => Promise<void>;
  onCancel: () => void;
}

export default function AdminPackageForm({ initialData, onSubmit, onCancel }: AdminPackageFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<any>({
    title: '',
    slug: '',
    destination: '',
    region: 'darjeeling',
    duration: '',
    durationCategory: 'weekend',
    type: 'family',
    priceRange: '',
    startingPrice: 0,
    shortDescription: '',
    image: '',
    gallery: [],
    featured: false,
    itinerary: [{ day: 1, title: '', description: '' }],
    destinationsArray: [{ name: '', dayNumber: 1, description: '' }], // New from requirements
    inclusions: [''],
    exclusions: [''],
    ...initialData
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : 
                type === 'number' ? Number(value) : value;
    
    setFormData((prev: any) => ({ ...prev, [name]: val }));
  };

  // Dynamic Array Handlers
  const handleArrayChange = (field: string, index: number, value: any, subfield?: string) => {
    setFormData((prev: any) => {
      const newArray = [...prev[field]];
      if (subfield) {
        newArray[index] = { ...newArray[index], [subfield]: value };
      } else {
        newArray[index] = value;
      }
      return { ...prev, [field]: newArray };
    });
  };

  const addArrayItem = (field: string, defaultItem: any) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: [...prev[field], defaultItem]
    }));
  };

  const removeArrayItem = (field: string, index: number) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: prev[field].filter((_: any, i: number) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Clean empty rows
    const cleanedData = {
      ...formData,
      itinerary: formData.itinerary.filter((i: any) => i.title || i.description),
      destinationsArray: formData.destinationsArray?.filter((d: any) => d.name) || [],
      inclusions: formData.inclusions.filter((i: string) => i.trim() !== ''),
      exclusions: formData.exclusions.filter((e: string) => e.trim() !== ''),
    };

    await onSubmit(cleanedData);
    setIsSubmitting(false);
  };

  // Cloudinary signature generator function
  const getSignature = async (signData: any) => {
    const response = await fetch('/api/cloudinary/sign', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ paramsToSign: signData }),
    });
    const data = await response.json();
    return data.signature;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center border-b pb-4">
        <h2 className="text-2xl font-bold text-primary-dark">{initialData ? 'Edit Package' : 'Create New Package'}</h2>
        <div className="flex gap-2">
          <Button variant="outline" onClick={onCancel} type="button">Cancel</Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Saving...' : 'Save Package'}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Info */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg text-primary-dark border-b pb-2">Basic Information</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Package Title *</label>
            <input required type="text" name="title" value={formData.title} onChange={handleChange} 
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Slug (URL friendly) *</label>
            <input required type="text" name="slug" value={formData.slug} onChange={handleChange} 
              placeholder="e.g. darjeeling-delight-3n4d"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Region *</label>
              <select name="region" value={formData.region} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300">
                <option value="darjeeling">Darjeeling</option>
                <option value="sikkim">Sikkim</option>
                <option value="bhutan">Bhutan</option>
                <option value="northeast">North East</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type *</label>
              <select name="type" value={formData.type} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300">
                <option value="family">Family</option>
                <option value="couple">Couple/Honeymoon</option>
                <option value="group">Group</option>
                <option value="adventure">Adventure</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Primary Destination Display Name *</label>
            <input required type="text" name="destination" value={formData.destination} onChange={handleChange} 
              placeholder="e.g. Darjeeling & Kalimpong" className="w-full px-4 py-2 rounded-lg border border-gray-300" />
          </div>
        </div>

        {/* Pricing & Duration */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg text-primary-dark border-b pb-2">Pricing & Duration</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Duration String *</label>
              <input required type="text" name="duration" value={formData.duration} onChange={handleChange} 
                placeholder="e.g. 3 Nights / 4 Days" className="w-full px-4 py-2 rounded-lg border border-gray-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Duration Category</label>
              <select name="durationCategory" value={formData.durationCategory} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300">
                <option value="weekend">Weekend (1-3 Days)</option>
                <option value="4-6 days">4-6 Days</option>
                <option value="1-week">1 Week+</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price Range String *</label>
              <input required type="text" name="priceRange" value={formData.priceRange} onChange={handleChange} 
                placeholder="e.g. ₹12,999 - ₹16,999" className="w-full px-4 py-2 rounded-lg border border-gray-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Starting Price (Number) *</label>
              <input required type="number" name="startingPrice" value={formData.startingPrice} onChange={handleChange} 
                placeholder="12999" className="w-full px-4 py-2 rounded-lg border border-gray-300" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Short Description *</label>
            <textarea required name="shortDescription" value={formData.shortDescription} onChange={handleChange} rows={3}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent"></textarea>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <input type="checkbox" id="featured" name="featured" checked={formData.featured} onChange={handleChange} className="w-5 h-5 text-accent rounded" />
            <label htmlFor="featured" className="font-medium text-gray-700">Feature this package on the homepage</label>
          </div>
        </div>
      </div>

      {/* Images Section using next-cloudinary */}
      <div className="space-y-4 pt-6 border-t">
        <h3 className="font-semibold text-lg text-primary-dark border-b pb-2">Images</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Cover Image *</label>
            <div className="flex flex-col gap-4">
              {formData.image && (
                <div className="relative w-full h-48 rounded-lg overflow-hidden border border-gray-200">
                  <img src={formData.image} alt="Cover" className="w-full h-full object-cover" />
                  <button type="button" onClick={() => setFormData({...formData, image: ''})} className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
              <CldUploadWidget 
                signatureEndpoint="/api/cloudinary/sign"
                onSuccess={(result) => {
                  if (typeof result.info === 'object' && 'secure_url' in result.info) {
                    setFormData({...formData, image: result.info.secure_url});
                  }
                }}
              >
                {({ open }) => (
                  <button type="button" onClick={() => open()} className="flex items-center justify-center gap-2 w-full py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-accent hover:bg-surface-muted transition-colors">
                    <ImageIcon className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-600 font-medium">{formData.image ? 'Replace Cover Image' : 'Upload Cover Image'}</span>
                  </button>
                )}
              </CldUploadWidget>
              <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Or paste image URL here" className="w-full px-4 py-2 rounded-lg border border-gray-300 text-sm" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Gallery Images</label>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {formData.gallery.map((img: string, i: number) => (
                <div key={i} className="relative aspect-square rounded-lg overflow-hidden border border-gray-200">
                  <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
                  <button type="button" onClick={() => removeArrayItem('gallery', i)} className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 scale-75">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            
            <CldUploadWidget 
              signatureEndpoint="/api/cloudinary/sign"
              options={{ multiple: true }}
              onSuccess={(result) => {
                if (typeof result.info === 'object' && 'secure_url' in result.info) {
                  addArrayItem('gallery', result.info.secure_url);
                }
              }}
            >
              {({ open }) => (
                <button type="button" onClick={() => open()} className="flex items-center justify-center gap-2 w-full py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-accent hover:bg-surface-muted transition-colors">
                  <ImageIcon className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600 font-medium">Add Gallery Images</span>
                </button>
              )}
            </CldUploadWidget>
          </div>
        </div>
      </div>

      {/* Dynamic Itinerary */}
      <div className="space-y-4 pt-6 border-t">
        <div className="flex justify-between items-center border-b pb-2">
          <h3 className="font-semibold text-lg text-primary-dark">Day-wise Itinerary</h3>
          <Button type="button" variant="outline" onClick={() => addArrayItem('itinerary', { day: formData.itinerary.length + 1, title: '', description: '' })} className="flex items-center gap-1 text-sm py-1 px-3">
            <Plus className="w-4 h-4" /> Add Day
          </Button>
        </div>
        
        <div className="space-y-4">
          {formData.itinerary.map((item: any, index: number) => (
            <div key={index} className="flex gap-4 items-start bg-surface-muted p-4 rounded-lg relative group">
              <div className="w-16 flex-shrink-0">
                <label className="block text-xs font-medium text-gray-500 mb-1">Day</label>
                <input type="number" value={item.day} onChange={(e) => handleArrayChange('itinerary', index, Number(e.target.value), 'day')} className="w-full px-2 py-2 rounded border border-gray-300 text-center" />
              </div>
              <div className="flex-grow space-y-2">
                <input type="text" value={item.title} onChange={(e) => handleArrayChange('itinerary', index, e.target.value, 'title')} placeholder="Day Title (e.g. Arrival at Darjeeling)" className="w-full px-3 py-2 rounded border border-gray-300 font-medium" />
                <textarea value={item.description} onChange={(e) => handleArrayChange('itinerary', index, e.target.value, 'description')} placeholder="Day Description..." rows={2} className="w-full px-3 py-2 rounded border border-gray-300 text-sm"></textarea>
              </div>
              <button type="button" onClick={() => removeArrayItem('itinerary', index)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity absolute right-2 top-2">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Destinations (Optional Requirement) */}
      <div className="space-y-4 pt-6 border-t">
        <div className="flex justify-between items-center border-b pb-2">
          <h3 className="font-semibold text-lg text-primary-dark">Dynamic Destinations (Optional)</h3>
          <Button type="button" variant="outline" onClick={() => addArrayItem('destinationsArray', { name: '', dayNumber: 1, description: '' })} className="flex items-center gap-1 text-sm py-1 px-3">
            <Plus className="w-4 h-4" /> Add Destination Row
          </Button>
        </div>
        <p className="text-xs text-gray-500 mb-4">Add specific destination details if required by the new design.</p>
        
        <div className="space-y-3">
          {formData.destinationsArray?.map((item: any, index: number) => (
            <div key={index} className="flex gap-3 items-center">
              <input type="text" value={item.name} onChange={(e) => handleArrayChange('destinationsArray', index, e.target.value, 'name')} placeholder="Destination Name" className="flex-1 px-3 py-2 rounded border border-gray-300 text-sm" />
              <input type="number" value={item.dayNumber} onChange={(e) => handleArrayChange('destinationsArray', index, Number(e.target.value), 'dayNumber')} placeholder="Day #" className="w-20 px-3 py-2 rounded border border-gray-300 text-sm text-center" />
              <input type="text" value={item.description} onChange={(e) => handleArrayChange('destinationsArray', index, e.target.value, 'description')} placeholder="Short Note/Description" className="flex-1 px-3 py-2 rounded border border-gray-300 text-sm" />
              <button type="button" onClick={() => removeArrayItem('destinationsArray', index)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Inclusions & Exclusions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t">
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <h3 className="font-semibold text-lg text-primary-dark">What's Included</h3>
            <Button type="button" variant="outline" onClick={() => addArrayItem('inclusions', '')} className="flex items-center gap-1 text-sm py-1 px-2">
              <Plus className="w-4 h-4" /> Add
            </Button>
          </div>
          <div className="space-y-2">
            {formData.inclusions.map((item: string, index: number) => (
              <div key={index} className="flex gap-2">
                <input type="text" value={item} onChange={(e) => handleArrayChange('inclusions', index, e.target.value)} placeholder="e.g. Breakfast on all days" className="flex-1 px-3 py-2 rounded border border-gray-300 text-sm" />
                <button type="button" onClick={() => removeArrayItem('inclusions', index)} className="p-2 text-red-500 hover:bg-red-50 rounded"><Trash2 className="w-4 h-4" /></button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <h3 className="font-semibold text-lg text-primary-dark">What's NOT Included</h3>
            <Button type="button" variant="outline" onClick={() => addArrayItem('exclusions', '')} className="flex items-center gap-1 text-sm py-1 px-2">
              <Plus className="w-4 h-4" /> Add
            </Button>
          </div>
          <div className="space-y-2">
            {formData.exclusions.map((item: string, index: number) => (
              <div key={index} className="flex gap-2">
                <input type="text" value={item} onChange={(e) => handleArrayChange('exclusions', index, e.target.value)} placeholder="e.g. Airfare/Train fare" className="flex-1 px-3 py-2 rounded border border-gray-300 text-sm" />
                <button type="button" onClick={() => removeArrayItem('exclusions', index)} className="p-2 text-red-500 hover:bg-red-50 rounded"><Trash2 className="w-4 h-4" /></button>
              </div>
            ))}
          </div>
        </div>
      </div>

    </form>
  );
}
