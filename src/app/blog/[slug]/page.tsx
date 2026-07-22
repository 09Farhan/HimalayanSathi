<<<<<<< HEAD
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";

type Props = {
  params: Promise<{ slug: string }>;
};
=======
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, User, ArrowRight, ChevronRight } from 'lucide-react';
import { blogPosts } from '@/data/blog';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
<<<<<<< HEAD
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Travel Blog`,
=======
  
  if (!post) {
    return {
      title: 'Post Not Found | Himalayan Sathi',
    };
  }
  
  return {
    title: `${post.title} | Himalayan Sathi Tours & Travels`,
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
<<<<<<< HEAD

=======
  
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e
  if (!post) {
    notFound();
  }

<<<<<<< HEAD
  // Related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-surface pb-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] w-full">
        <Image
          src={post.coverImage || "/images/darjeeling-pkg.jpg"}
=======
  // Get 3 other posts for the sidebar/bottom
  const otherPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);
  
  // Split content by double newlines for paragraphs
  const paragraphs = post.content.split('\n\n');

  return (
    <main className="min-h-screen pb-20 bg-surface">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full">
        <Image
          src={post.coverImage}
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
<<<<<<< HEAD
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-300 text-sm">
              <span className="font-medium text-white">{post.author}</span>
              <span className="mx-3">•</span>
              <span>{post.date}</span>
=======
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <span className="inline-block px-4 py-1.5 bg-accent text-white text-sm font-bold rounded-full mb-6">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 max-w-4xl mx-auto leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base opacity-90">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                {post.author}
              </div>
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        {/* Content */}
        <article className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 prose prose-lg prose-headings:font-heading prose-headings:text-primary max-w-none mb-16">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 md:p-12 text-center text-white shadow-lg mb-16">
          <h2 className="text-3xl font-heading font-bold mb-4">Inspired to travel?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Let us help you plan the perfect trip to the Himalayas based on this article.
          </p>
          <Link href="/contact" className="inline-block bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
            Start Planning
          </Link>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div>
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link href={`/blog/${related.slug}`} key={related.id} className="group block bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all">
                  <div className="relative h-40">
                    <Image src={related.coverImage || "/images/darjeeling-pkg.jpg"} alt={related.title} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 mb-2">{related.title}</h4>
                    <p className="text-xs text-gray-500">{related.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
=======
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-primary font-medium truncate">{post.title}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <article className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-primary prose-a:text-primary-light hover:prose-a:text-primary">
              {paragraphs.map((para, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
                  {para}
                </p>
              ))}
            </article>
            
            {/* CTA Banner */}
            <div className="mt-12 bg-primary-light/10 border border-primary-light/20 rounded-2xl p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
              <div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">Ready to plan your trip?</h3>
                <p className="text-gray-600 mb-6 sm:mb-0">Explore our curated tour packages tailored for you.</p>
              </div>
              <Link 
                href="/packages" 
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors flex-shrink-0"
              >
                View Packages <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-10">
            <div>
              <h3 className="text-xl font-heading font-bold text-primary mb-6 flex items-center">
                <span className="w-8 h-1 bg-accent mr-3"></span>
                Other Posts
              </h3>
              <div className="space-y-6">
                {otherPosts.map((otherPost) => (
                  <Link key={otherPost.id} href={`/blog/${otherPost.slug}`} className="group flex gap-4 items-start">
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={otherPost.coverImage}
                        alt={otherPost.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 mb-1">
                        {otherPost.title}
                      </h4>
                      <div className="text-xs text-gray-500 mb-2">
                        {new Date(otherPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                      </div>
                      <span className="text-xs font-medium text-accent">Read more</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="bg-surface-dark text-white p-8 rounded-2xl shadow-card">
              <h3 className="text-xl font-heading font-bold mb-4">Need Help Planning?</h3>
              <p className="text-gray-300 mb-6 text-sm">
                Our travel experts are ready to help you customize the perfect itinerary for your Himalayan adventure.
              </p>
              <Link 
                href="/contact" 
                className="block w-full py-3 px-4 bg-accent text-white text-center rounded-xl font-medium hover:bg-opacity-90 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e
    </main>
  );
}
