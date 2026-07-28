'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Button from '@/components/ui/Button';
import { CldUploadWidget } from 'next-cloudinary';
import { Trash2, Image as ImageIcon, X } from 'lucide-react';
import Editor from 'react-simple-wysiwyg';

// We don't need dynamic imports for react-simple-wysiwyg if we use it normally, but just in case for Next.js SSR:
const EditorWrapper = dynamic(() => Promise.resolve(Editor), {
  ssr: false,
  loading: () => <div className="h-64 flex items-center justify-center bg-gray-50 border border-gray-300 rounded-lg">Loading Editor...</div>
});

interface AdminBlogFormProps {
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
        <pre className="text-xs whitespace-pre-wrap mt-2">{this.state.error?.stack}</pre>
        <Button onClick={() => this.setState({hasError: false})} className="mt-4">Try Again</Button>
      </div>;
    }
    return this.props.children;
  }
}

export default function AdminBlogFormWrapper(props: AdminBlogFormProps) {
  return <FormErrorBoundary><AdminBlogForm {...props} /></FormErrorBoundary>;
}

function AdminBlogForm({ initialData, onSubmit, onCancel }: AdminBlogFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<any>({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    author: '',
    category: '',
    tags: [],
    coverImage: '',
    gallery: [],
    status: 'draft',
    seoTitle: '',
    seoDescription: '',
    ...initialData
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleContentChange = (content: string) => {
    setFormData((prev: any) => ({ ...prev, content }));
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tagsArray = e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag !== '');
    setFormData((prev: any) => ({ ...prev, tags: tagsArray }));
  };

  const getArray = (field: string) => {
    const val = formData[field];
    return Array.isArray(val) ? val : [];
  };

  const addGalleryItem = (url: string) => {
    setFormData((prev: any) => ({
      ...prev,
      gallery: [...getArray('gallery'), url]
    }));
  };

  const removeGalleryItem = (index: number) => {
    setFormData((prev: any) => ({
      ...prev,
      gallery: getArray('gallery').filter((_: any, i: number) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await onSubmit(formData);
    setIsSubmitting(false);
  };

  const hasCloudinary = !!(process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME && process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);

  return (
    <form onSubmit={handleSubmit} className="space-y-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center border-b pb-4">
        <h2 className="text-2xl font-bold text-primary-dark">{initialData ? 'Edit Blog Post' : 'Create New Blog Post'}</h2>
        <div className="flex gap-2">
          <Button variant="outline" onClick={onCancel} type="button">Cancel</Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Saving...' : 'Save Blog Post'}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg text-primary-dark border-b pb-2">Basic Info</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Blog Title *</label>
            <input required type="text" name="title" value={formData.title} onChange={handleChange} 
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Slug (URL friendly) *</label>
            <input required type="text" name="slug" value={formData.slug} onChange={handleChange} 
              placeholder="e.g. my-first-trip"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Author *</label>
              <input required type="text" name="author" value={formData.author} onChange={handleChange} 
                className="w-full px-4 py-2 rounded-lg border border-gray-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <input type="text" name="category" value={formData.category} onChange={handleChange} 
                placeholder="e.g. Travel Guide"
                className="w-full px-4 py-2 rounded-lg border border-gray-300" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tags (Comma separated)</label>
            <input type="text" value={getArray('tags').join(', ')} onChange={handleTagsChange} 
              placeholder="e.g. darjeeling, mountains, honeymoon"
              className="w-full px-4 py-2 rounded-lg border border-gray-300" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select name="status" value={formData.status} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300">
              <option value="draft">Draft (Hidden)</option>
              <option value="published">Published</option>
            </select>
          </div>
        </div>

        {/* Right Column: SEO & Images */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg text-primary-dark border-b pb-2">SEO Optimization</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">SEO Title</label>
            <input type="text" name="seoTitle" value={formData.seoTitle} onChange={handleChange} 
              placeholder="Defaults to Blog Title"
              className="w-full px-4 py-2 rounded-lg border border-gray-300" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">SEO Description</label>
            <textarea name="seoDescription" value={formData.seoDescription} onChange={handleChange} rows={2}
              placeholder="Defaults to Excerpt"
              className="w-full px-4 py-2 rounded-lg border border-gray-300"></textarea>
          </div>

          <h3 className="font-semibold text-lg text-primary-dark border-b pb-2 pt-4">Cover Image</h3>
          
          <div className="flex flex-col gap-4">
            {formData.coverImage && (
              <div className="relative w-full h-48 rounded-lg overflow-hidden border border-gray-200">
                <img src={formData.coverImage} alt="Cover" className="w-full h-full object-cover" />
                <button type="button" onClick={() => setFormData({...formData, coverImage: ''})} className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600">
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
            {hasCloudinary && (
              <CldUploadWidget 
                signatureEndpoint="/api/cloudinary/sign"
                onSuccess={(result: any) => {
                  if (typeof result.info === 'object' && 'secure_url' in result.info) {
                    setFormData({...formData, coverImage: result.info.secure_url});
                  }
                }}
              >
                {({ open }) => (
                  <button type="button" onClick={() => open()} className="flex items-center justify-center gap-2 w-full py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-accent hover:bg-surface-muted transition-colors">
                    <ImageIcon className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-600 font-medium">{formData.coverImage ? 'Replace Cover Image' : 'Upload Cover Image'}</span>
                  </button>
                )}
              </CldUploadWidget>
            )}
            <input type="text" name="coverImage" value={formData.coverImage} onChange={handleChange} placeholder="Or paste image URL here" className="w-full px-4 py-2 rounded-lg border border-gray-300 text-sm" />
          </div>
        </div>
      </div>

      <div className="space-y-4 pt-6 border-t">
        <h3 className="font-semibold text-lg text-primary-dark border-b pb-2">Content</h3>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Short Excerpt (Shown on listing pages) *</label>
          <textarea required name="excerpt" value={formData.excerpt} onChange={handleChange} rows={3}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent"></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Blog Content *</label>
          <div className="bg-white rounded-lg border border-gray-300 overflow-hidden">
            <EditorWrapper 
              value={formData.content} 
              onChange={(e: any) => handleContentChange(e.target.value)} 
              containerProps={{ style: { height: '400px', resize: 'vertical' } }}
            />
          </div>
        </div>
      </div>

      {/* Gallery Images */}
      <div className="space-y-4 pt-6 border-t">
        <h3 className="font-semibold text-lg text-primary-dark border-b pb-2">Additional Gallery Images</h3>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {getArray('gallery').map((img: string, i: number) => (
            <div key={i} className="relative aspect-square rounded-lg overflow-hidden border border-gray-200">
              <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
              <button type="button" onClick={() => removeGalleryItem(i)} className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 scale-75">
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
        
        {hasCloudinary && (
          <CldUploadWidget 
            signatureEndpoint="/api/cloudinary/sign"
            options={{ multiple: true }}
            onSuccess={(result: any) => {
              if (typeof result.info === 'object' && 'secure_url' in result.info) {
                addGalleryItem(result.info.secure_url);
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
        )}
      </div>

    </form>
  );
}
