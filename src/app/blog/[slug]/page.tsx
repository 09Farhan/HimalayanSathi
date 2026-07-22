import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Travel Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

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
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
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
            </div>
          </div>
        </div>
      </section>

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
    </main>
  );
}
