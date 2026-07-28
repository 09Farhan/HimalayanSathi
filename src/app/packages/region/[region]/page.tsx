import { notFound } from 'next/navigation';
import { db } from '@/lib/db';
import PackageCard from '@/components/packages/PackageCard';
import SectionContainer from '@/components/ui/SectionContainer';
import Link from 'next/link';

// Simple mapping for region names
const regionNames: Record<string, string> = {
  darjeeling: 'Darjeeling',
  sikkim: 'Sikkim',
  bhutan: 'Bhutan',
  northeast: 'North East India'
};

export async function generateMetadata({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params;
  const regionName = regionNames[region.toLowerCase()];
  
  if (!regionName) return { title: 'Packages Not Found' };

  return {
    title: `${regionName} Tour Packages & Trips | Himalayan Sathi`,
    description: `Explore the best ${regionName} tour packages with Himalayan Sathi. Handpicked itineraries, best prices, and expert guides for your perfect mountain vacation.`,
    openGraph: {
      title: `${regionName} Tour Packages`,
      description: `Explore the best ${regionName} tour packages with Himalayan Sathi.`,
    }
  };
}

export default async function RegionalPackagesPage({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params;
  const regionName = regionNames[region.toLowerCase()];

  if (!regionName) {
    notFound();
  }

  const packages = await db.getPackages({ region: region.toLowerCase() });

  return (
    <main className="min-h-screen bg-surface">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-primary to-primary-light py-20 mt-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <Link href="/packages" className="inline-block text-primary-light hover:text-white font-medium mb-4 transition-colors">
            &larr; Back to All Packages
          </Link>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            {regionName} Tour Packages
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Discover our handpicked itineraries for {regionName}. We offer the best experiences tailored to your travel style.
          </p>
        </div>
      </section>

      <SectionContainer className="py-12 md:py-20">
        <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
          <h2 className="text-2xl font-bold text-primary-dark">Showing {packages.length} Packages</h2>
        </div>

        {packages.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-primary-dark mb-2">No Packages Available</h3>
            <p className="text-gray-500 mb-6">We are currently updating our itineraries for {regionName}. Please check back later.</p>
            <Link href="/packages" className="text-accent font-bold hover:underline">
              Explore other destinations
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        )}
      </SectionContainer>
    </main>
  );
}
