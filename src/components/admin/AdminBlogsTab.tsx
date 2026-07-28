'use client';

import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import { BlogPost } from '@/lib/types';
import AdminBlogForm from './AdminBlogForm';
import { Edit2, Trash2, Plus, ExternalLink, Globe, Lock } from 'lucide-react';
import Link from 'next/link';

export default function AdminBlogsTab() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch('/api/admin/blogs');
      if (res.ok) {
        const data = await res.json();
        setBlogs(data);
      }
    } catch (error) {
      console.error('Failed to fetch blogs', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete the blog post "${title}"? This cannot be undone.`)) return;

    try {
      const res = await fetch('/api/admin/blogs', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });

      if (res.ok) {
        setBlogs(blogs.filter(b => b.id !== id));
      } else {
        alert('Failed to delete blog');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSave = async (formData: any) => {
    const isUpdate = !!formData.id;
    const url = '/api/admin/blogs';
    const method = isUpdate ? 'PATCH' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        await fetchBlogs(); // Refresh list
        setIsCreating(false);
        setEditingBlog(null);
      } else {
        const err = await res.json();
        alert(`Error: ${err.error || 'Failed to save blog'}`);
      }
    } catch (error) {
      console.error(error);
      alert('An unexpected error occurred');
    }
  };

  if (isLoading) {
    return <div className="text-center py-12 text-gray-500">Loading blogs...</div>;
  }

  if (isCreating || editingBlog) {
    return (
      <AdminBlogForm 
        initialData={editingBlog} 
        onSubmit={handleSave} 
        onCancel={() => {
          setIsCreating(false);
          setEditingBlog(null);
        }} 
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-primary-dark">Manage Blog Posts</h2>
        <Button onClick={() => setIsCreating(true)} className="flex items-center gap-2">
          <Plus className="w-5 h-5" /> Add New Blog Post
        </Button>
      </div>

      {blogs.length === 0 ? (
        <div className="bg-white p-12 text-center rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-medium text-gray-900 mb-2">No blogs found</h3>
          <p className="text-gray-500 mb-6">Create your first blog post to share updates and travel guides.</p>
          <Button onClick={() => setIsCreating(true)}>Create Blog Post</Button>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="p-4 font-semibold text-sm text-gray-700">Blog Title</th>
                  <th className="p-4 font-semibold text-sm text-gray-700">Status</th>
                  <th className="p-4 font-semibold text-sm text-gray-700">Author</th>
                  <th className="p-4 font-semibold text-sm text-gray-700">Date</th>
                  <th className="p-4 font-semibold text-sm text-gray-700 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {blogs.map((blog) => (
                  <tr key={blog.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4">
                      <div className="font-medium text-gray-900">{blog.title}</div>
                      <div className="text-sm text-gray-500 mt-1 truncate max-w-xs">{blog.slug}</div>
                    </td>
                    <td className="p-4">
                      {blog.status === 'published' ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <Globe className="w-3 h-3" /> Published
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          <Lock className="w-3 h-3" /> Draft
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-sm text-gray-600">
                      {blog.author}
                    </td>
                    <td className="p-4 text-sm text-gray-600">
                      {new Date(blog.date).toLocaleDateString()}
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {blog.status === 'published' && (
                          <Link href={`/blog/${blog.slug}`} target="_blank" className="p-2 text-gray-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="View on site">
                            <ExternalLink className="w-5 h-5" />
                          </Link>
                        )}
                        <button onClick={() => setEditingBlog(blog)} className="p-2 text-gray-400 hover:text-accent hover:bg-accent/10 rounded-lg transition-colors" title="Edit">
                          <Edit2 className="w-5 h-5" />
                        </button>
                        <button onClick={() => handleDelete(blog.id, blog.title)} className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
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
