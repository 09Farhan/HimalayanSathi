'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { GalleryImage } from '@/lib/types';
import { Trash2, ArrowUp, ArrowDown, UploadCloud, ImageIcon } from 'lucide-react';

export default function AdminGalleryTab() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [altText, setAltText] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const res = await fetch('/api/admin/gallery');
      const data = await res.json();
      if (Array.isArray(data)) {
        setImages(data);
      }
    } catch (e) {
      console.error('Failed to fetch gallery', e);
    } finally {
      setLoading(false);
    }
  };

  const handlePublish = async () => {
    setIsPublishing(true);
    try {
      const res = await fetch('/api/admin/revalidate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path: '/' })
      });
      if (res.ok) {
        alert('Successfully published! The homepage gallery has been updated.');
      } else {
        alert('Failed to publish changes.');
      }
    } catch (e) {
      alert('Network error while publishing.');
    } finally {
      setIsPublishing(false);
    }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check size (< 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('File is too large. Maximum size is 5MB.');
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('alt', altText);

    try {
      const res = await fetch('/api/admin/gallery', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setAltText('');
        if (fileInputRef.current) fileInputRef.current.value = '';
        fetchImages();
      } else {
        alert('Failed to upload image. Please check your Cloudinary credentials in Vercel Environment Variables.');
      }
    } catch (error) {
      console.error(error);
      alert('Network error during upload');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this image?')) return;
    
    try {
      setImages(images.filter(img => img.id !== id));
      await fetch('/api/admin/gallery', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });
    } catch (error) {
      console.error(error);
      fetchImages(); // revert on failure
    }
  };

  const moveImage = async (index: number, direction: 'up' | 'down') => {
    if (direction === 'up' && index === 0) return;
    if (direction === 'down' && index === images.length - 1) return;

    const newImages = [...images];
    const swapIndex = direction === 'up' ? index - 1 : index + 1;
    
    // Swap
    [newImages[index], newImages[swapIndex]] = [newImages[swapIndex], newImages[index]];
    setImages(newImages);

    // Save new order to DB
    try {
      const orderedIds = newImages.map(img => img.id!);
      await fetch('/api/admin/gallery', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderedIds })
      });
    } catch (error) {
      console.error('Failed to update order', error);
      fetchImages(); // revert on failure
    }
  };

  if (loading) return <div className="p-8 text-center animate-pulse">Loading gallery...</div>;

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Header and Publish */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div>
          <h2 className="text-lg font-bold text-primary flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-accent" />
            Home Gallery Management
          </h2>
          <p className="text-sm text-text-secondary mt-1">Upload, delete, and reorder images for the homepage carousel.</p>
        </div>
        <Button 
          onClick={handlePublish} 
          disabled={isPublishing}
          className="w-full sm:w-auto shadow-md shadow-accent/20 bg-accent hover:bg-accent/90"
        >
          {isPublishing ? 'Publishing...' : 'Save & Publish to Live Site'}
        </Button>
      </div>

      {/* Upload Section */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="text-md font-bold text-primary mb-4 flex items-center gap-2">
          Add New Image
        </h3>
        
        <div className="flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1 w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">Image Caption (Alt text)</label>
            <input 
              type="text" 
              value={altText}
              onChange={e => setAltText(e.target.value)}
              placeholder="e.g. Beautiful view of Kanchenjunga"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent outline-none"
            />
          </div>
          <div className="flex-1 w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">Upload Photo (Max 5MB)</label>
            <div className="relative">
              <input 
                type="file"
                ref={fileInputRef}
                accept="image/jpeg, image/png, image/webp"
                onChange={handleUpload}
                disabled={uploading}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
              />
              <div className={`w-full px-4 py-2 border border-dashed rounded-lg flex items-center justify-center gap-2 transition-colors ${uploading ? 'bg-gray-50 border-gray-300' : 'bg-accent/5 border-accent text-accent hover:bg-accent/10'}`}>
                {uploading ? (
                  <span className="text-gray-500 font-medium">Uploading to Cloudinary...</span>
                ) : (
                  <>
                    <UploadCloud className="w-5 h-5" />
                    <span className="font-medium">Click to select file</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <p className="text-xs text-text-muted mt-3">Images will automatically resize and crop to fit the carousel. Landscape orientation is recommended.</p>
      </div>

      {/* Gallery Grid */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-primary mb-4">Manage Carousel Order</h3>
        
        {images.length === 0 ? (
          <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-xl">
            <ImageIcon className="w-12 h-12 text-gray-300 mx-auto mb-2" />
            <p className="text-gray-500">No images in the carousel yet.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {images.map((img, index) => (
              <div key={img.id} className="flex items-center gap-4 p-3 bg-surface-muted rounded-xl border border-gray-100 hover:border-accent/30 transition-colors group">
                <div className="relative w-24 h-16 rounded-lg overflow-hidden shrink-0 bg-gray-200">
                  <Image src={img.url} alt={img.alt || 'Gallery image'} fill className="object-cover" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-primary truncate">{img.alt || 'Untitled Image'}</p>
                  <p className="text-xs text-text-muted">Order: {index + 1}</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <div className="flex flex-col gap-1">
                    <button 
                      onClick={() => moveImage(index, 'up')}
                      disabled={index === 0}
                      className="p-1 rounded bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      title="Move Up"
                    >
                      <ArrowUp className="w-4 h-4 text-gray-600" />
                    </button>
                    <button 
                      onClick={() => moveImage(index, 'down')}
                      disabled={index === images.length - 1}
                      className="p-1 rounded bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      title="Move Down"
                    >
                      <ArrowDown className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  
                  <div className="w-px h-8 bg-gray-200 mx-2"></div>
                  
                  <button 
                    onClick={() => handleDelete(img.id!)}
                    className="p-2 rounded-lg bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                    title="Delete Image"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
