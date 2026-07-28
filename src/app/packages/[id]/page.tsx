import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { db } from '@/lib/db';
import { Check, X, Clock, IndianRupee, MapPin, Users } from 'lucide-react';
import ContactForm from '@/components/ui/ContactForm';
import ExpandableFAQ from '@/components/ui/ExpandableFAQ';

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const pkg = await db.getPackageBySlug(id);
  
  if (!pkg) {
    return {
      title: 'Package Not Found | Himalayan Sathi',
    };
  }

  return {
    title: pkg.seoTitle || `${pkg.title} | Himalayan Sathi Tours`,
    description: pkg.seoDescription || pkg.shortDescription,
    openGraph: {
      title: pkg.seoTitle || pkg.title,
      description: pkg.seoDescription || pkg.shortDescription,
      images: [pkg.image],
    }
  };
}

export default async function PackageDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const pkg = await db.getPackageBySlug(id);
  
  if (!pkg) {
    notFound();
  }

  // Generate JSON-LD Schema for Tour/Product
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    'name': pkg.title,
    'description': pkg.shortDescription,
    'touristType': pkg.type,
    'offers': {
      '@type': 'Offer',
      'price': pkg.startingPrice,
      'priceCurrency': 'INR'
    },
    'image': pkg.image
  };

  return (
    <div className="bg-surface min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src={pkg.image}
            alt={pkg.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
        </div>
        
        <div className="absolute inset-0 z-10 flex flex-col justify-end pb-12 px-4 md:px-8 max-w-7xl mx-auto w-full">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-primary px-3 py-1 text-white text-xs font-bold uppercase tracking-wider rounded-full">
              {pkg.region}
            </span>
            <span className="bg-white/20 backdrop-blur-md px-3 py-1 text-white text-sm rounded-full">
              {pkg.type.charAt(0).toUpperCase() + pkg.type.slice(1)} Tour
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
            {pkg.title}
          </h1>
          <p className="text-white/90 text-lg max-w-2xl">
            {pkg.shortDescription}
          </p>
        </div>
      </section>

      {/* Quick Info Bar */}
      <div className="bg-surface-card shadow-lg shadow-black/5 relative z-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 divide-x-0 md:divide-x divide-surface-muted">
            <div className="flex items-center gap-4 pl-0">
              <div className="bg-primary-light/10 p-3 rounded-2xl text-primary-light shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-text-muted font-bold tracking-wider uppercase mb-1">Duration</p>
                <p className="font-bold text-primary-dark">{pkg.duration}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 md:pl-6">
              <div className="bg-accent/15 p-3 rounded-2xl text-accent shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-text-muted font-bold tracking-wider uppercase mb-1">Destination</p>
                <p className="font-bold text-primary-dark truncate">{pkg.destination}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 pl-0 md:pl-6">
              <div className="bg-secondary-light/15 p-3 rounded-2xl text-secondary-light shrink-0">
                <IndianRupee className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-text-muted font-bold tracking-wider uppercase mb-1">Starting Price</p>
                <p className="font-bold text-primary-dark">₹{pkg.startingPrice.toLocaleString('en-IN')}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 md:pl-6">
              <div className="bg-primary/10 p-3 rounded-2xl text-primary shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-text-muted font-bold tracking-wider uppercase mb-1">Tour Type</p>
                <p className="font-bold text-primary-dark capitalize">{pkg.type}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Left Content (Itinerary & Details) */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Itinerary Section */}
            <section>
              <h2 className="text-3xl font-heading font-bold text-primary-dark mb-10 border-b border-surface-muted pb-4">
                Tour Itinerary
              </h2>
              <div className="space-y-0 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-surface-muted before:to-transparent">
                {pkg.itinerary.map((day: any, index: number) => (
                  <div key={day.day || index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active py-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border-[3px] border-white bg-accent text-primary-dark font-bold shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110">
                      D{day.day}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-4rem)] bg-surface-card p-8 rounded-3xl shadow-sm border border-surface-muted transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                      <h3 className="font-bold text-lg text-primary-dark mb-3">{day.title}</h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{day.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Inclusions / Exclusions */}
            <section className="bg-surface-card p-8 md:p-10 rounded-3xl shadow-sm border border-surface-muted">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" /> Inclusions
                  </h3>
                  <ul className="space-y-3">
                    {pkg.inclusions.map((item: any, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                        <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <X className="w-5 h-5 text-red-500" /> Exclusions
                  </h3>
                  <ul className="space-y-3">
                    {pkg.exclusions.map((item: any, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                        <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Gallery Section */}
            {pkg.gallery && pkg.gallery.length > 0 && (
              <section className="mt-12">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 border-b pb-4">
                  Tour Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {pkg.gallery.map((imgUrl: string, index: number) => (
                    <div key={index} className="relative h-48 md:h-64 rounded-xl overflow-hidden group shadow-sm hover:shadow-md transition-all">
                      <Image
                        src={imgUrl}
                        alt={`${pkg.title} Gallery Image ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* FAQs Section */}
            {pkg.faqs && pkg.faqs.length > 0 && (
              <section className="mt-12">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 border-b pb-4">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {pkg.faqs.map((faq: any, index: number) => (
                    <ExpandableFAQ key={index} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Sidebar (Enquiry Form) */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <div className="bg-primary-dark text-white p-8 rounded-t-3xl shadow-lg shadow-black/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-12 blur-2xl"></div>
                <h3 className="text-xl font-heading font-bold mb-3 relative z-10">Enquire About This Package</h3>
                <p className="text-white/70 text-sm leading-relaxed relative z-10">
                  Fill out the form below and our travel experts will get in touch with you shortly.
                </p>
              </div>
              <div className="-mt-6 relative z-20">
                <ContactForm />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
