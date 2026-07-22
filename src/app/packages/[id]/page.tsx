<<<<<<< HEAD
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
=======
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { packages } from '@/data/packages';
import { Check, X, Clock, IndianRupee, MapPin, Users } from 'lucide-react';
import ContactForm from '@/components/ui/ContactForm';

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const pkg = packages.find(p => p.id === id);
  
  if (!pkg) {
    return {
      title: 'Package Not Found | Himalayan Sathi',
    };
  }

  return {
    title: `${pkg.title} | Himalayan Sathi Tours`,
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e
    description: pkg.shortDescription,
  };
}

<<<<<<< HEAD
export default async function PackageDetailPage({ params }: Props) {
  const { id } = await params;
  const pkg = packages.find((p) => p.id === id);

=======
export default async function PackageDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const pkg = packages.find(p => p.id === id);
  
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e
  if (!pkg) {
    notFound();
  }

  return (
<<<<<<< HEAD
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
=======
    <div className="bg-surface min-h-screen">
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
      <div className="bg-white shadow-md relative z-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-gray-100">
            <div className="flex items-center gap-3 pl-0">
              <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase">Duration</p>
                <p className="font-semibold text-gray-900">{pkg.duration}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 pl-6">
              <div className="bg-accent/10 p-3 rounded-full text-accent shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase">Destination</p>
                <p className="font-semibold text-gray-900 truncate">{pkg.destination}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 pl-6">
              <div className="bg-green-100 p-3 rounded-full text-green-600 shrink-0">
                <IndianRupee className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase">Starting Price</p>
                <p className="font-semibold text-gray-900">₹{pkg.startingPrice.toLocaleString('en-IN')}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 pl-6">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600 shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase">Tour Type</p>
                <p className="font-semibold text-gray-900 capitalize">{pkg.type}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Content (Itinerary & Details) */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Itinerary Section */}
            <section>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 border-b pb-4">
                Tour Itinerary
              </h2>
              <div className="space-y-0 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
                {pkg.itinerary.map((day, index) => (
                  <div key={day.day} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active py-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-accent text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      D{day.day}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{day.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{day.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Inclusions / Exclusions */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" /> Inclusions
                  </h3>
                  <ul className="space-y-3">
                    {pkg.inclusions.map((item, i) => (
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
                    {pkg.exclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                        <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Right Sidebar (Enquiry Form) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-primary text-white p-6 rounded-t-2xl">
                <h3 className="text-xl font-heading font-bold mb-2">Enquire About This Package</h3>
                <p className="text-primary-light text-sm opacity-90">
                  Fill out the form below and our travel experts will get in touch with you shortly.
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
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e
  );
}
