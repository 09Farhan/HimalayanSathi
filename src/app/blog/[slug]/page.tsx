import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { db } from '@/lib/db';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import ContactForm from '@/components/ui/ContactForm';
// We need to render raw HTML for the blog content

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await db.getBlogBySlug(slug);
  
  if (!blog || blog.status !== 'published') {
    return {
      title: 'Blog Not Found | Himalayan Sathi',
    };
  }

  return {
    title: blog.seoTitle || `${blog.title} | Himalayan Sathi Tours`,
    description: blog.seoDescription || blog.excerpt,
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await db.getBlogBySlug(slug);
  
  if (!blog || blog.status !== 'published') {
    notFound();
  }

  return (
    <div className="bg-surface min-h-screen">
      {/* Blog Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src={blog.coverImage || '/images/placeholder.jpg'}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
        </div>
        
        <div className="absolute inset-0 z-10 flex flex-col justify-end pb-12 px-4 md:px-8 max-w-4xl mx-auto w-full text-center">
          {blog.category && (
            <div className="mb-4">
              <span className="bg-primary px-4 py-1 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                {blog.category}
              </span>
            </div>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            {blog.title}
          </h1>
          
          <div className="flex items-center justify-center gap-6 text-white/90 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-accent" />
              {new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-accent" />
              {blog.author}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-accent font-medium mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to all posts
            </Link>

            <article className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
              {/* Quill outputs html, so we use dangerouslySetInnerHTML */}
              <div 
                className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-primary-dark prose-a:text-primary hover:prose-a:text-accent"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {/* Tags */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="mt-12 pt-6 border-t border-gray-100 flex items-center flex-wrap gap-2">
                  <Tag className="w-5 h-5 text-gray-400 mr-2" />
                  {blog.tags.map((tag: string, index: number) => (
                    <span key={index} className="bg-surface-muted px-3 py-1 rounded-md text-sm text-gray-600 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>

            {/* Gallery Section */}
            {blog.gallery && blog.gallery.length > 0 && (
              <section className="mt-12">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6 border-b pb-4">
                  Photo Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {blog.gallery.map((imgUrl: string, index: number) => (
                    <div key={index} className="relative h-64 rounded-xl overflow-hidden group shadow-sm hover:shadow-md transition-all">
                      <Image
                        src={imgUrl}
                        alt={`${blog.title} Gallery Image ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-primary text-white p-6 rounded-t-2xl">
                <h3 className="text-xl font-heading font-bold mb-2">Plan Your Trip</h3>
                <p className="text-primary-light text-sm opacity-90">
                  Inspired by this story? Fill out the form below to start planning your own Himalayan adventure.
                </p>
              </div>
              <div className="-mt-4">
                <ContactForm />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
