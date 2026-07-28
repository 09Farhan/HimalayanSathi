'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Button from '@/components/ui/Button';
import { CldUploadWidget } from 'next-cloudinary';
import { Trash2, Image as ImageIcon, X, Plus } from 'lucide-react';
import Editor from 'react-simple-wysiwyg';

const EditorWrapper = dynamic(() => Promise.resolve(Editor), {
  ssr: false,
  loading: () => <div className="h-64 flex items-center justify-center bg-gray-50 border border-gray-300 rounded-lg">Loading Editor...</div>
});

interface AdminDestinationFormProps {
  initialData?: any;
  onSubmit: (data: any) => Promise<void>;
  onCancel: () => void;
}

class FormErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean, error: any}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return <div className="p-10 bg-red-100 text-red-900 border border-red-500 rounded">
        <h2 className="font-bold text-lg mb-2">Form Crashed!</h2>
        <pre className="text-xs whitespace-pre-wrap">{this.state.error?.toString()}</pre>
        <Button onClick={() => this.setState({hasError: false})} className="mt-4">Try Again</Button>
      </div>;
    }
    return this.props.children;
  }
}

export default function AdminDestinationFormWrapper(props: AdminDestinationFormProps) {
  return <FormErrorBoundary><AdminDestinationForm {...props} /></FormErrorBoundary>;
}

function AdminDestinationForm({ initialData, onSubmit, onCancel }: AdminDestinationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<any>({
    name: '',
    slug: '',
    region: 'darjeeling',
    tagline: '',
    description: '',
    content: '',
    highlights: [],
    bestTimeToVisit: '',
    image: '',
    gallery: [],
    seoTitle: '',
    seoDescription: '',
    faqs: [],
    ...initialData
  });

  const hasCloudinary = !!process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContentChange = (content: string) => {
    setFormData({ ...formData, content });
  };

  const getArray = (key: string) => Array.isArray(formData[key]) ? formData[key] : [];

  const handleHighlightsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, highlights: e.target.value.split(',').map(s => s.trim()).filter(Boolean) });
  };

  const addFaq = () => setFormData({ ...formData, faqs: [...getArray('faqs'), { question: '', answer: '', category: 'General' }] });
  
  const updateFaq = (index: number, field: string, value: string) => {
    const newFaqs = [...getArray('faqs')];
    newFaqs[index] = { ...newFaqs[index], [field]: value };
    setFormData({ ...formData, faqs: newFaqs });
  };
  
  const removeFaq = (index: number) => {
    setFormData({ ...formData, faqs: getArray('faqs').filter((_: any, i: number) => i !== index) });
  };

  const removeGalleryItem = (index: number) => {
    const newGallery = [...getArray('gallery')];
    newGallery.splice(index, 1);
    setFormData({ ...formData, gallery: newGallery });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await onSubmit(formData);
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6 pb-4 border-b">
        <h2 className="text-xl font-bold text-primary-dark">{initialData ? 'Edit Destination' : 'Create New Destination'}</h2>
        <div className="flex gap-2">
          <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
          <Button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Saving...' : 'Save Destination'}</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <h3 className="font-semibold text-lg text-primary-dark border-b pb-2">Basic Info</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Destination Name *</label>
              <input required type="text" name="name" value={formData.name} onChange={handleChange} 
                className="w-full px-4 py-2 rounded-lg border border-gray-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Slug (URL) *</label>
              <input required type="text" name="slug" value={formData.slug} onChange={handleChange} 
                placeholder="e.g. darjeeling"
                className="w-full px-4 py-2 rounded-lg border border-gray-300" />
            </div>
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Best Time to Visit</label>
              <input type="text" name="bestTimeToVisit" value={formData.bestTimeToVisit} onChange={handleChange} 
                className="w-full px-4 py-2 rounded-lg border border-gray-300" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tagline</label>
            <input type="text" name="tagline" value={formData.tagline} onChange={handleChange} 
              className="w-full px-4 py-2 rounded-lg border border-gray-300" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Short Description (For cards) *</label>
            <textarea required name="description" value={formData.description} onChange={handleChange} rows={2}
              className="w-full px-4 py-2 rounded-lg border border-gray-300"></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Highlights (Comma separated)</label>
            <input type="text" value={getArray('highlights').join(', ')} onChange={handleHighlightsChange} 
              className="w-full px-4 py-2 rounded-lg border border-gray-300" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg text-primary-dark border-b pb-2">SEO Optimization</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">SEO Title</label>
            <input type="text" name="seoTitle" value={formData.seoTitle} onChange={handleChange} 
              className="w-full px-4 py-2 rounded-lg border border-gray-300" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">SEO Description</label>
            <textarea name="seoDescription" value={formData.seoDescription} onChange={handleChange} rows={3}
              className="w-full px-4 py-2 rounded-lg border border-gray-300"></textarea>
          </div>

          <h3 className="font-semibold text-lg text-primary-dark border-b pb-2 pt-4">Main Image</h3>
          <div className="flex flex-col gap-4">
            {formData.image && (
              <div className="relative w-full h-48 rounded-lg overflow-hidden border border-gray-200">
                <img src={formData.image} alt="Main" className="w-full h-full object-cover" />
                <button type="button" onClick={() => setFormData({...formData, image: ''})} className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600">
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
            {hasCloudinary && (
              <CldUploadWidget 
                signatureEndpoint="/api/cloudinary/sign"
                onSuccess={(result: any) => {
                  if (typeof result.info === 'object' && 'secure_url' in result.info) {
                    setFormData({...formData, image: result.info.secure_url});
                  }
                }}
              >
                {({ open }) => (
                  <button type="button" onClick={() => open()} className="flex items-center justify-center gap-2 w-full py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-accent hover:bg-surface-muted transition-colors">
                    <ImageIcon className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-600 font-medium">Upload Image</span>
                  </button>
                )}
              </CldUploadWidget>
            )}
            <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Or paste URL here" className="w-full px-4 py-2 rounded-lg border border-gray-300 text-sm" />
          </div>
        </div>
      </div>

      <div className="space-y-4 pt-6 border-t mt-6">
        <h3 className="font-semibold text-lg text-primary-dark border-b pb-2">Full Content (Rich Text)</h3>
        <div className="bg-white rounded-lg border border-gray-300 overflow-hidden">
          <EditorWrapper 
            value={formData.content} 
            onChange={(e: any) => handleContentChange(e.target.value)} 
            containerProps={{ style: { height: '400px', resize: 'vertical' } }}
          />
        </div>
      </div>

      {/* Gallery Images */}
      <div className="space-y-4 pt-6 border-t mt-6">
        <h3 className="font-semibold text-lg text-primary-dark border-b pb-2">Destination Gallery</h3>
        <div className="grid grid-cols-4 gap-4 mb-4">
          {getArray('gallery').map((img: string, i: number) => (
            <div key={i} className="relative aspect-video rounded-lg overflow-hidden border border-gray-200">
              <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
              <button type="button" onClick={() => removeGalleryItem(i)} className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full hover:bg-red-600">
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
        {hasCloudinary && (
          <CldUploadWidget 
            signatureEndpoint="/api/cloudinary/sign"
            onSuccess={(result: any) => {
              if (typeof result.info === 'object' && 'secure_url' in result.info) {
                setFormData({...formData, gallery: [...getArray('gallery'), result.info.secure_url]});
              }
            }}
          >
            {({ open }) => (
              <Button type="button" variant="outline" onClick={() => open()} className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4" /> Add Gallery Image
              </Button>
            )}
          </CldUploadWidget>
        )}
      </div>

      {/* FAQs */}
      <div className="space-y-4 pt-6 border-t mt-6">
        <div className="flex justify-between items-center border-b pb-2">
          <h3 className="font-semibold text-lg text-primary-dark">Destination FAQs</h3>
          <Button type="button" variant="outline" size="sm" onClick={addFaq} className="flex items-center gap-1">
            <Plus className="w-4 h-4" /> Add FAQ
          </Button>
        </div>
        
        <div className="space-y-4">
          {getArray('faqs').map((faq: any, index: number) => (
            <div key={index} className="flex gap-4 items-start bg-gray-50 p-4 rounded-xl border border-gray-200 relative group">
              <div className="flex-grow space-y-3">
                <input type="text" placeholder="Question" value={faq.question} onChange={(e) => updateFaq(index, 'question', e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 font-medium" />
                <textarea placeholder="Answer" value={faq.answer} onChange={(e) => updateFaq(index, 'answer', e.target.value)} rows={2}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300"></textarea>
              </div>
              <button type="button" onClick={() => removeFaq(index)} className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
          {getArray('faqs').length === 0 && (
            <p className="text-gray-500 italic text-sm text-center py-4">No FAQs added yet.</p>
          )}
        </div>
      </div>
    </form>
  );
}
