'use client';

import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import { Package } from '@/lib/types';
import AdminPackageForm from './AdminPackageForm';
import { Edit2, Trash2, Plus, ExternalLink, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';

export default function AdminPackagesTab() {
  const [packages, setPackages] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingPackage, setEditingPackage] = useState<any | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const res = await fetch('/api/admin/packages');
      if (res.ok) {
        const data = await res.json();
        setPackages(data);
      }
    } catch (error) {
      console.error('Failed to fetch packages', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleFeatured = async (id: string, currentStatus: boolean) => {
    try {
      const res = await fetch('/api/admin/packages', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, featured: !currentStatus })
      });

      if (res.ok) {
        setPackages(packages.map(p => p.id === id ? { ...p, featured: !currentStatus } : p));
      } else {
        alert('Failed to update featured status');
      }
    } catch (error) {
      console.error(error);
      alert('An unexpected error occurred');
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete the package "${title}"? This cannot be undone.`)) return;

    try {
      const res = await fetch('/api/admin/packages', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });

      if (res.ok) {
        setPackages(packages.filter(p => p.id !== id));
      } else {
        alert('Failed to delete package');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSave = async (formData: any) => {
    const isUpdate = !!formData.id;
    const url = '/api/admin/packages';
    const method = isUpdate ? 'PATCH' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        await fetchPackages(); // Refresh list
        setIsCreating(false);
        setEditingPackage(null);
      } else {
        const err = await res.json();
        alert(`Error: ${err.error || 'Failed to save package'}`);
      }
    } catch (error) {
      console.error(error);
      alert('An unexpected error occurred');
    }
  };

  if (isLoading) {
    return <div className="text-center py-12 text-gray-500">Loading packages...</div>;
  }

  if (isCreating || editingPackage) {
    return (
      <AdminPackageForm 
        initialData={editingPackage} 
        onSubmit={handleSave} 
        onCancel={() => {
          setIsCreating(false);
          setEditingPackage(null);
        }} 
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-primary-dark">Manage Tour Packages</h2>
        <Button onClick={() => setIsCreating(true)} className="flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add New Package
        </Button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-muted border-b border-gray-200">
                <th className="p-4 font-semibold text-gray-700">Image</th>
                <th className="p-4 font-semibold text-gray-700">Package Details</th>
                <th className="p-4 font-semibold text-gray-700">Duration & Price</th>
                <th className="p-4 font-semibold text-gray-700 text-center">Status</th>
                <th className="p-4 font-semibold text-gray-700 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {packages.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-gray-500">
                    No packages found. Click "Add New Package" to get started.
                  </td>
                </tr>
              ) : (
                packages.map((pkg) => (
                  <tr key={pkg.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 w-24">
                      {pkg.image ? (
                        <img src={pkg.image} alt={pkg.title} className="w-16 h-16 object-cover rounded-lg shadow-sm" />
                      ) : (
                        <div className="w-16 h-16 bg-gray-100 flex items-center justify-center rounded-lg text-gray-400">
                          <ImageIcon className="w-6 h-6" />
                        </div>
                      )}
                    </td>
                    <td className="p-4">
                      <div className="font-semibold text-primary-dark text-lg mb-1">{pkg.title}</div>
                      <div className="text-sm text-gray-500 flex items-center gap-2">
                        <span className="capitalize">{pkg.region}</span> • <span className="capitalize">{Array.isArray(pkg.type) ? pkg.type.join(', ') : pkg.type}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="font-medium text-gray-900">{pkg.priceRange}</div>
                      <div className="text-sm text-gray-500">{pkg.duration}</div>
                    </td>
                    <td className="p-4 text-center">
                      <button 
                        onClick={() => handleToggleFeatured(pkg.id, pkg.featured)}
                        className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                          pkg.featured 
                            ? 'bg-accent/20 text-accent-dark hover:bg-accent/30 shadow-sm' 
                            : 'bg-gray-100 text-gray-500 hover:bg-gray-200 border border-transparent'
                        }`}
                        title={pkg.featured ? "Remove from home page" : "Show on home page"}
                      >
                        {pkg.featured ? '★ Featured' : '☆ Set Featured'}
                      </button>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-3">
                        <Link 
                          href={`/packages/${pkg.slug}`} 
                          target="_blank"
                          title="View on public site"
                          className="p-2 text-gray-400 hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </Link>
                        <button 
                          onClick={() => setEditingPackage(pkg)}
                          title="Edit Package"
                          className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          <Edit2 className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => handleDelete(pkg.id, pkg.title)}
                          title="Delete Package"
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
