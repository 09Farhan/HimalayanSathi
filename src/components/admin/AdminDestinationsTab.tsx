'use client';

import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import { Destination } from '@/lib/types';
import AdminDestinationForm from './AdminDestinationForm';
import { Edit2, Trash2, Plus, ExternalLink, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function AdminDestinationsTab() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingDest, setEditingDest] = useState<Destination | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    try {
      const res = await fetch('/api/admin/destinations');
      if (res.ok) {
        const data = await res.json();
        setDestinations(data);
      }
    } catch (error) {
      console.error('Failed to fetch destinations', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete the destination "${name}"? This cannot be undone.`)) return;

    try {
      const res = await fetch('/api/admin/destinations', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });

      if (res.ok) {
        setDestinations(destinations.filter(d => d.id !== id));
      } else {
        alert('Failed to delete destination');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSave = async (formData: any) => {
    const isUpdate = !!formData.id;
    const url = '/api/admin/destinations';
    const method = isUpdate ? 'PATCH' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        await fetchDestinations(); // Refresh list
        setIsCreating(false);
        setEditingDest(null);
      } else {
        const err = await res.json();
        alert(`Error: ${err.error || 'Failed to save destination'}`);
      }
    } catch (error) {
      console.error(error);
      alert('An unexpected error occurred');
    }
  };

  if (isLoading) {
    return <div className="text-center py-12 text-gray-500">Loading destinations...</div>;
  }

  if (isCreating || editingDest) {
    return (
      <AdminDestinationForm 
        initialData={editingDest} 
        onSubmit={handleSave} 
        onCancel={() => {
          setIsCreating(false);
          setEditingDest(null);
        }} 
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-primary-dark">Manage SEO Destinations</h2>
        <Button onClick={() => setIsCreating(true)} className="flex items-center gap-2">
          <Plus className="w-5 h-5" /> Add New Destination
        </Button>
      </div>

      {destinations.length === 0 ? (
        <div className="bg-white p-12 text-center rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-medium text-gray-900 mb-2">No destinations found</h3>
          <p className="text-gray-500 mb-6">Create dedicated SEO landing pages for each of your travel regions.</p>
          <Button onClick={() => setIsCreating(true)}>Create Destination Page</Button>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="p-4 font-semibold text-sm text-gray-700">Destination</th>
                  <th className="p-4 font-semibold text-sm text-gray-700">Region</th>
                  <th className="p-4 font-semibold text-sm text-gray-700">Slug</th>
                  <th className="p-4 font-semibold text-sm text-gray-700 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {destinations.map((dest) => (
                  <tr key={dest.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200">
                          {dest.image ? (
                            <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                              <MapPin className="w-5 h-5 text-gray-400" />
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{dest.name}</div>
                          <div className="text-xs text-gray-500">{dest.tagline}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-gray-600 capitalize">
                      {dest.region}
                    </td>
                    <td className="p-4 text-sm text-gray-500 font-mono">
                      /{dest.slug}
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {dest.slug && (
                          <Link href={`/destinations/${dest.slug}`} target="_blank" className="p-2 text-gray-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="View on site">
                            <ExternalLink className="w-5 h-5" />
                          </Link>
                        )}
                        <button onClick={() => setEditingDest(dest)} className="p-2 text-gray-400 hover:text-accent hover:bg-accent/10 rounded-lg transition-colors" title="Edit">
                          <Edit2 className="w-5 h-5" />
                        </button>
                        <button onClick={() => handleDelete(dest.id, dest.name)} className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
