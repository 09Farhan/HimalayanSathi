import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { db } from '@/lib/db';
import { MapPin, Calendar, Check, ArrowRight, ChevronDown } from 'lucide-react';
import ContactForm from '@/components/ui/ContactForm';
import ExpandableFAQ from '@/components/ui/ExpandableFAQ';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = await db.getDestinationBySlug(slug);

  if (!destination) return { title: 'Destination Not Found' };

  return {
    title: destination.seoTitle || `${destination.name} Tour Packages | Himalayan Sathi`,
    description: destination.seoDescription || destination.description,
    openGraph: {
      title: destination.seoTitle || `${destination.name} Tour Packages`,
      description: destination.seoDescription || destination.description,
      images: [destination.image],
    }
  };
}

export default async function DestinationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = await db.getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  // Fetch packages related to this destination's region
  // In a more complex setup, you might filter by the specific destination name, 
  // but filtering by region guarantees we show all relevant regional packages.
  const regionPackages = await db.getPackages({ region: destination.region });

  return (
    <main className="min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src={destination.image} 
            alt={destination.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            <span className="capitalize">{destination.region}</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            {destination.name}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium drop-shadow-md">
            {destination.tagline}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-surface to-transparent z-10" />
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Overview & Highlights */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-primary-dark mb-6">Overview</h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                {destination.description}
              </p>

              {destination.bestTimeToVisit && (
                <div className="flex items-start gap-4 p-6 bg-surface-muted rounded-2xl mb-8">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm text-accent">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-dark mb-1">Best Time to Visit</h4>
                    <p className="text-text-secondary">{destination.bestTimeToVisit}</p>
                  </div>
                </div>
              )}

              {destination.highlights && destination.highlights.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-primary-dark mb-4">Places to Visit</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {destination.highlights.map((highlight: string, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-text-secondary font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Rich Text Content */}
            {destination.content && (
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                <div 
                  className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-primary-dark prose-a:text-primary hover:prose-a:text-accent"
                  dangerouslySetInnerHTML={{ __html: destination.content }}
                />
              </div>
            )}

            {/* Photo Gallery */}
            {destination.gallery && destination.gallery.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold text-primary-dark mb-8">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {destination.gallery.map((img: string, i: number) => (
                    <div key={i} className="relative aspect-square rounded-2xl overflow-hidden group">
                      <Image src={img} alt={`Gallery ${i}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQs */}
            {destination.faqs && destination.faqs.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold text-primary-dark mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {destination.faqs.map((faq: any, index: number) => (
                    <ExpandableFAQ key={index} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="sticky top-28 space-y-8">
              
              {/* Packages Sidebar Widget */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-primary-dark mb-6 border-b pb-4">
                  Tour Packages for {destination.name}
                </h3>
                <div className="space-y-4">
                  {regionPackages.slice(0, 5).map((pkg) => (
                    <Link href={`/packages/${pkg.id}`} key={pkg.id} className="group block">
                      <div className="flex gap-4 items-center p-3 rounded-2xl hover:bg-surface-muted transition-colors">
                        <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                          <Image src={pkg.image} alt={pkg.title} fill className="object-cover" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 mb-1 text-sm">{pkg.title}</h4>
                          <p className="text-xs text-text-secondary font-medium">{pkg.duration}</p>
                          <p className="text-accent font-bold text-sm mt-1">₹{pkg.startingPrice.toLocaleString('en-IN')}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                  {regionPackages.length === 0 && (
                    <p className="text-sm text-gray-500 text-center py-4">No packages currently available.</p>
                  )}
                  {regionPackages.length > 5 && (
                    <Link href={`/packages/region/${destination.region}`} className="block text-center w-full py-3 mt-4 text-sm font-bold text-primary hover:text-primary-dark bg-primary/5 hover:bg-primary/10 rounded-xl transition-colors">
                      View All Packages
                    </Link>
                  )}
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="bg-primary p-8 rounded-3xl shadow-lg text-white">
                <h3 className="text-2xl font-bold mb-2">Plan Your Trip</h3>
                <p className="text-primary-light mb-6 text-sm">Get a free quote for your {destination.name} tour.</p>
                <ContactForm source={`${destination.name} Destination Page`} />
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
