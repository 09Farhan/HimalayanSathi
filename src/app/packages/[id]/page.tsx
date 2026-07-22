import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { packages } from "@/data/packages";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const pkg = packages.find((p) => p.id === id);
  if (!pkg) return { title: "Package Not Found" };

  return {
    title: `${pkg.title} | Himalayan Sathi`,
    description: pkg.shortDescription,
  };
}

export default async function PackageDetailPage({ params }: Props) {
  const { id } = await params;
  const pkg = packages.find((p) => p.id === id);

  if (!pkg) {
    notFound();
  }

  return (
    <main className="min-h-screen pb-20 bg-surface">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] w-full">
        <Image
          src={pkg.image || "/images/darjeeling-pkg.jpg"}
          alt={pkg.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
              {pkg.duration}
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">{pkg.title}</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">{pkg.destination}</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          {/* Overview */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-heading font-bold mb-4 text-primary">Overview</h2>
            <p className="text-gray-700 leading-relaxed">{pkg.shortDescription}</p>
          </section>

          {/* Itinerary */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-heading font-bold mb-8 text-primary">Itinerary</h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
              {pkg.itinerary.map((day) => (
                <div key={day.day} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-secondary text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                    {day.day}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-gray-100 bg-gray-50 shadow-sm">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-gray-900 text-lg">{day.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{day.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Inclusions/Exclusions */}
          <div className="grid md:grid-cols-2 gap-8">
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-heading font-bold mb-4 text-green-600 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Inclusions
              </h2>
              <ul className="space-y-2">
                {pkg.inclusions.map((inc, i) => (
                  <li key={i} className="text-gray-700 flex items-start">
                    <span className="text-green-500 mr-2">•</span> {inc}
                  </li>
                ))}
              </ul>
            </section>
            
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-heading font-bold mb-4 text-red-600 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                Exclusions
              </h2>
              <ul className="space-y-2">
                {pkg.exclusions.map((exc, i) => (
                  <li key={i} className="text-gray-700 flex items-start">
                    <span className="text-red-400 mr-2">•</span> {exc}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 sticky top-24">
            <div className="mb-6 pb-6 border-b border-gray-100">
              <p className="text-gray-500 text-sm mb-1 uppercase tracking-wider">Starting Price</p>
              <div className="text-3xl font-bold text-secondary">₹{pkg.startingPrice} <span className="text-sm text-gray-500 font-normal">/ person</span></div>
            </div>
            
            <h3 className="font-heading font-bold text-xl mb-4 text-gray-900">Book this package</h3>
            <form className="space-y-4">
              <div>
                <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" required />
              </div>
              <div>
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" required />
              </div>
              <div>
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" required />
              </div>
              <div>
                <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" required />
              </div>
              <div>
                <textarea placeholder="Any special requests?" rows={3} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"></textarea>
              </div>
              <button type="button" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg transition-colors">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
