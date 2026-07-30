import { db } from '@/lib/db';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowRight } from 'lucide-react';

import PageBanner from '@/components/sections/PageBanner';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata = {
  title: 'Travel Blog & Guides | Himalayan Sathi Tours',
  description: 'Read our latest travel guides, tips, and stories about Darjeeling, Sikkim, Bhutan, and North East India.',
};

export default async function BlogListingPage() {
  const blogs = await db.getBlogs({ status: 'published' });

  return (
    <div className="bg-surface min-h-screen pb-20">
      <PageBanner 
        title="Travel Blog & Guides" 
        subtitle="Discover travel tips, destination guides, and beautiful stories from the Himalayas." 
      />
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12">

        {blogs.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-medium text-gray-900 mb-2">No posts yet</h3>
            <p className="text-gray-500">Check back later for exciting travel stories!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article key={blog.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full group">
                <Link href={`/blog/${blog.slug}`} className="block relative h-64 overflow-hidden">
                  <Image
                    src={blog.coverImage || '/images/placeholder.jpg'}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {blog.category && (
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      {blog.category}
                    </div>
                  )}
                </Link>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {blog.author}
                    </div>
                  </div>
                  
                  <Link href={`/blog/${blog.slug}`} className="block mb-3">
                    <h2 className="text-xl font-heading font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                      {blog.title}
                    </h2>
                  </Link>
                  
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
                    {blog.excerpt}
                  </p>
                  
                  <Link href={`/blog/${blog.slug}`} className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-accent transition-colors mt-auto">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
