'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Lead } from '@/lib/db';
import Button from '@/components/ui/Button';

export default function AdminDashboardClient({ initialLeads }: { initialLeads: Lead[] }) {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const router = useRouter();

  // Sync state if server sends fresh data
  useEffect(() => {
    setLeads(initialLeads);
  }, [initialLeads]);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/');
    router.refresh();
  };

  const handleStatusChange = async (id: string, newStatus: 'new' | 'contacted') => {
    // Optimistic update
    setLeads(leads.map(l => l.id === id ? { ...l, status: newStatus } : l));
    
    // In a real app, you'd have an API route to update this in the DB:
    // await fetch(`/api/admin/leads/${id}`, { method: 'PATCH', body: JSON.stringify({ status: newStatus }) });
    // But since we are directly reading the file via Server Components, we'd need an API route for updates.
    // For this simple template, we will just call a quick API route to do it.
    await fetch('/api/admin/leads', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status: newStatus })
    });
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this lead?')) return;
    
    setLeads(leads.filter(l => l.id !== id));
    
    await fetch('/api/admin/leads', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    });
  };

  return (
    <div className="min-h-screen bg-surface-muted p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl shadow-sm">
          <div>
            <h1 className="text-2xl font-bold text-primary">Lead Dashboard</h1>
            <p className="text-text-secondary mt-1">Manage your incoming customer inquiries</p>
          </div>
          <Button variant="outline" size="sm" onClick={handleLogout}>
            Sign Out
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-blue-500">
            <p className="text-sm text-text-secondary font-medium">Total Leads</p>
            <p className="text-3xl font-bold text-primary mt-2">{leads.length}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-green-500">
            <p className="text-sm text-text-secondary font-medium">New Enquiries</p>
            <p className="text-3xl font-bold text-primary mt-2">{leads.filter(l => l.status === 'new').length}</p>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface border-b border-gray-100">
                  <th className="p-4 font-semibold text-text-secondary text-sm">Date</th>
                  <th className="p-4 font-semibold text-text-secondary text-sm">Customer</th>
                  <th className="p-4 font-semibold text-text-secondary text-sm">Destination</th>
                  <th className="p-4 font-semibold text-text-secondary text-sm">Message</th>
                  <th className="p-4 font-semibold text-text-secondary text-sm">Source</th>
                  <th className="p-4 font-semibold text-text-secondary text-sm">Status</th>
                  <th className="p-4 font-semibold text-text-secondary text-sm">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {leads.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="p-8 text-center text-text-muted">
                      No leads yet. They will appear here when customers submit forms!
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
                          onChange={(e) => handleStatusChange(lead.id!, e.target.value as 'new' | 'contacted')}
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
                          onClick={() => handleDelete(lead.id!)}
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
    </div>
  );
}
