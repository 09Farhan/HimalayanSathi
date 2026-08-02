'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Lead, Review } from '@/lib/db';
import Button from '@/components/ui/Button';
import { Star, Map, Users, Plane, BookOpen, ImageIcon } from 'lucide-react';
import AdminPackagesTab from '@/components/admin/AdminPackagesTab';
import AdminBlogsTab from '@/components/admin/AdminBlogsTab';
import AdminDestinationsTab from '@/components/admin/AdminDestinationsTab';
import AdminGalleryTab from '@/components/admin/AdminGalleryTab';

export default function AdminDashboardClient({ 
  initialLeads, 
  initialReviews 
}: { 
  initialLeads: Lead[],
  initialReviews: Review[]
}) {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [reviews, setReviews] = useState<Review[]>(initialReviews || []);
  const [activeTab, setActiveTab] = useState<'leads' | 'reviews' | 'packages' | 'blogs' | 'destinations' | 'gallery'>('leads');
  const [isAddingReview, setIsAddingReview] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', rating: 5, quote: '' });
  
  const router = useRouter();

  // Sync state if server sends fresh data
  useEffect(() => {
    setLeads(initialLeads);
    setReviews(initialReviews || []);
  }, [initialLeads, initialReviews]);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/');
    router.refresh();
  };

  const handleLeadStatusChange = async (id: string, newStatus: 'new' | 'contacted') => {
    setLeads(leads.map(l => l.id === id ? { ...l, status: newStatus } : l));
    await fetch('/api/admin/leads', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status: newStatus })
    });
  };

  const handleDeleteLead = async (id: string) => {
    if (!confirm('Are you sure you want to delete this lead?')) return;
    setLeads(leads.filter(l => l.id !== id));
    await fetch('/api/admin/leads', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    });
  };

  // --- REVIEWS METHODS ---
  const handleReviewStatusChange = async (id: string, newStatus: 'pending' | 'approved' | 'hidden') => {
    setReviews(reviews.map(r => r.id === id ? { ...r, status: newStatus } : r));
    await fetch('/api/admin/reviews', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status: newStatus })
    });
  };

  const handleDeleteReview = async (id: string) => {
    if (!confirm('Are you sure you want to delete this review?')) return;
    setReviews(reviews.filter(r => r.id !== id));
    await fetch('/api/admin/reviews', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    });
  };

  const handleAddReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.quote) return alert('Name and Quote are required.');

    const res = await fetch('/api/admin/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...newReview, status: 'approved' })
    });

    if (res.ok) {
      const data = await res.json();
      setReviews([{ ...newReview, id: data.id, status: 'approved', createdAt: new Date().toISOString() } as Review, ...reviews]);
      setNewReview({ name: '', rating: 5, quote: '' });
      setIsAddingReview(false);
    } else {
      alert('Failed to add review');
    }
  };

  return (
    <div className="min-h-screen bg-surface-muted p-4 md:p-8 pt-28 md:pt-36">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl shadow-sm">
          <div>
            <h1 className="text-2xl font-bold text-primary">Admin Dashboard</h1>
            <p className="text-text-secondary mt-1">Manage your business inquiries, reviews, packages, destinations, and blogs</p>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Button variant="outline" size="sm" onClick={handleLogout}>
              Sign Out
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 sm:gap-4 border-b border-gray-200 pb-0 overflow-x-auto hide-scrollbar">
          <button 
            onClick={() => setActiveTab('leads')}
            className={`px-4 py-3 font-medium text-base whitespace-nowrap transition-colors relative ${activeTab === 'leads' ? 'text-primary' : 'text-text-secondary hover:text-text-primary'}`}
          >
            Leads
            {activeTab === 'leads' && <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full"></span>}
          </button>
          <button 
            onClick={() => setActiveTab('packages')}
            className={`px-4 py-3 font-medium text-base whitespace-nowrap transition-colors relative ${activeTab === 'packages' ? 'text-primary' : 'text-text-secondary hover:text-text-primary'}`}
          >
            Tour Packages
            {activeTab === 'packages' && <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full"></span>}
          </button>
          <button 
            onClick={() => setActiveTab('destinations')}
            className={`px-4 py-3 font-medium text-base whitespace-nowrap transition-colors relative ${activeTab === 'destinations' ? 'text-primary' : 'text-text-secondary hover:text-text-primary'}`}
          >
            SEO Destinations
            {activeTab === 'destinations' && <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full"></span>}
          </button>
          <button 
            onClick={() => setActiveTab('blogs')}
            className={`px-4 py-3 font-medium text-base whitespace-nowrap transition-colors relative ${activeTab === 'blogs' ? 'text-primary' : 'text-text-secondary hover:text-text-primary'}`}
          >
            Blogs
            {activeTab === 'blogs' && <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full"></span>}
          </button>
          <button 
            onClick={() => setActiveTab('reviews')}
            className={`px-4 py-3 font-medium text-base whitespace-nowrap transition-colors relative ${activeTab === 'reviews' ? 'text-primary' : 'text-text-secondary hover:text-text-primary'}`}
          >
            Reviews CMS
            {activeTab === 'reviews' && <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full"></span>}
          </button>
          <button 
            onClick={() => setActiveTab('gallery')}
            className={`flex items-center gap-2 px-4 py-3 font-medium text-base whitespace-nowrap transition-colors relative ${activeTab === 'gallery' ? 'text-primary' : 'text-text-secondary hover:text-text-primary'}`}
          >
            <ImageIcon className="w-4 h-4" /> Home Gallery
            {activeTab === 'gallery' && <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full"></span>}
          </button>
        </div>

        {/* Tab Content: PACKAGES */}
        {activeTab === 'packages' && (
          <div className="animate-fade-in-up">
            <AdminPackagesTab />
          </div>
        )}

        {/* Tab Content: GALLERY */}
        {activeTab === 'gallery' && (
          <div className="animate-fade-in-up">
            <AdminGalleryTab />
          </div>
        )}

        {/* Tab Content: DESTINATIONS */}
        {activeTab === 'destinations' && (
          <div className="animate-fade-in-up">
            <AdminDestinationsTab />
          </div>
        )}

        {/* Tab Content: BLOGS */}
        {activeTab === 'blogs' && (
          <div className="animate-fade-in-up">
            <AdminBlogsTab />
          </div>
        )}

        {/* Tab Content: LEADS */}
        {activeTab === 'leads' && (
          <div className="space-y-6 animate-fade-in-up">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border-l-4 border-blue-500">
                <p className="text-xs sm:text-sm text-text-secondary font-medium">Total Leads</p>
                <p className="text-2xl sm:text-3xl font-bold text-primary mt-1 sm:mt-2">{leads.length}</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border-l-4 border-green-500">
                <p className="text-xs sm:text-sm text-text-secondary font-medium">New Enquiries</p>
                <p className="text-2xl sm:text-3xl font-bold text-primary mt-1 sm:mt-2">{leads.filter(l => l.status === 'new').length}</p>
              </div>
            </div>

            {/* Leads Table */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="bg-surface border-b border-gray-100">
                      <th className="p-4 font-semibold text-text-secondary text-sm whitespace-nowrap">Date</th>
                      <th className="p-4 font-semibold text-text-secondary text-sm whitespace-nowrap">Customer</th>
                      <th className="p-4 font-semibold text-text-secondary text-sm whitespace-nowrap">Destination</th>
                      <th className="p-4 font-semibold text-text-secondary text-sm min-w-[200px]">Message</th>
                      <th className="p-4 font-semibold text-text-secondary text-sm whitespace-nowrap">Source</th>
                      <th className="p-4 font-semibold text-text-secondary text-sm whitespace-nowrap">Status</th>
                      <th className="p-4 font-semibold text-text-secondary text-sm whitespace-nowrap">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {leads.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="p-8 text-center text-text-muted">
                          No leads yet.
                        </td>
                      </tr>
                    ) : (
                      leads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-surface-muted/50 transition-colors">
                          <td className="p-4 text-sm text-text-secondary whitespace-nowrap">
                            {new Date(lead.createdAt).toLocaleDateString()}
                          </td>
                          <td className="p-4">
                            <div className="font-medium text-primary">{lead.name}</div>
                            <div className="text-sm text-text-secondary">{lead.phone}</div>
                            <div className="text-sm text-text-secondary">{lead.email}</div>
                          </td>
                          <td className="p-4 text-sm">
                            {lead.destination || <span className="text-gray-400">-</span>}
                            {lead.travelDates && <div className="text-xs text-text-muted mt-1">{lead.travelDates}</div>}
                            {lead.travellers && <div className="text-xs text-text-muted">{lead.travellers}</div>}
                          </td>
                          <td className="p-4 text-sm max-w-xs">
                            <p className="truncate" title={lead.message}>{lead.message || '-'}</p>
                          </td>
                          <td className="p-4 text-sm">
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">
                              {lead.source}
                            </span>
                          </td>
                          <td className="p-4">
                            <select 
                              value={lead.status}
                              onChange={(e) => handleLeadStatusChange(lead.id!, e.target.value as 'new' | 'contacted')}
                              className={`text-xs font-medium px-3 py-1.5 rounded-full border-0 cursor-pointer focus:ring-2 focus:ring-primary ${
                                lead.status === 'new' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                              }`}
                            >
                              <option value="new">New</option>
                              <option value="contacted">Contacted</option>
                            </select>
                          </td>
                          <td className="p-4">
                            <button 
                              onClick={() => handleDeleteLead(lead.id!)}
                              className="text-red-500 hover:text-red-700 text-sm font-medium"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: REVIEWS */}
        {activeTab === 'reviews' && (
          <div className="space-y-6 animate-fade-in-up">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-lg font-bold text-primary">Website Testimonials</h2>
              <Button onClick={() => setIsAddingReview(!isAddingReview)} size="sm" className="w-full sm:w-auto">
                {isAddingReview ? 'Cancel' : '+ Add New Review'}
              </Button>
            </div>

            {/* Add Review Form */}
            {isAddingReview && (
              <form onSubmit={handleAddReview} className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100 animate-fade-in-up">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Reviewer Name</label>
                    <input 
                      type="text" 
                      required
                      value={newReview.name} 
                      onChange={e => setNewReview({...newReview, name: e.target.value})}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent outline-none"
                      placeholder="e.g. Rahul Sharma"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Star Rating (1-5)</label>
                    <input 
                      type="number" 
                      min="1" max="5" 
                      required
                      value={newReview.rating} 
                      onChange={e => setNewReview({...newReview, rating: Number(e.target.value)})}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent outline-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Review Text</label>
                    <textarea 
                      required
                      value={newReview.quote} 
                      onChange={e => setNewReview({...newReview, quote: e.target.value})}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent outline-none"
                      rows={3}
                      placeholder="An amazing trip to Sikkim..."
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full md:w-auto">Save & Publish Review</Button>
              </form>
            )}

            {/* Reviews Table */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="bg-surface border-b border-gray-100">
                      <th className="p-4 font-semibold text-text-secondary text-sm whitespace-nowrap">Date</th>
                      <th className="p-4 font-semibold text-text-secondary text-sm whitespace-nowrap">Reviewer</th>
                      <th className="p-4 font-semibold text-text-secondary text-sm min-w-[300px]">Quote</th>
                      <th className="p-4 font-semibold text-text-secondary text-sm whitespace-nowrap">Visibility</th>
                      <th className="p-4 font-semibold text-text-secondary text-sm whitespace-nowrap">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {reviews.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="p-8 text-center text-text-muted">
                          No reviews found. Click "Add New Review" to create one.
                        </td>
                      </tr>
                    ) : (
                      reviews.map((review) => (
                        <tr key={review.id} className={`hover:bg-surface-muted/50 transition-colors ${review.status === 'hidden' ? 'opacity-60' : ''}`}>
                          <td className="p-4 text-sm text-text-secondary whitespace-nowrap">
                            {new Date(review.createdAt).toLocaleDateString()}
                          </td>
                          <td className="p-4">
                            <div className="font-medium text-primary whitespace-nowrap">{review.name}</div>
                            <div className="flex items-center gap-1 mt-1 text-accent">
                              <Star className="w-3 h-3 fill-current" />
                              <span className="text-xs font-bold">{review.rating}/5</span>
                            </div>
                          </td>
                          <td className="p-4 text-sm text-gray-600">
                            <p className="line-clamp-2 italic">"{review.quote}"</p>
                          </td>
                          <td className="p-4">
                            <select 
                              value={review.status}
                              onChange={(e) => handleReviewStatusChange(review.id!, e.target.value as 'approved' | 'hidden' | 'pending')}
                              className={`text-xs font-medium px-3 py-1.5 rounded-full border-0 cursor-pointer focus:ring-2 focus:ring-primary w-[140px] ${
                                review.status === 'approved' ? 'bg-green-100 text-green-700' : 
                                review.status === 'hidden' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                              }`}
                            >
                              <option value="approved">Approved (Live)</option>
                              <option value="hidden">Hidden</option>
                              <option value="pending">Pending</option>
                            </select>
                          </td>
                          <td className="p-4">
                            <button 
                              onClick={() => handleDeleteReview(review.id!)}
                              className="text-red-500 hover:text-red-700 text-sm font-medium"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
