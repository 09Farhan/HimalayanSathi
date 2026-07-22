import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cab Services | Himalayan Sathi Tours & Travels",
  description: "Reliable and comfortable cab services for your Himalayan journey. Sedan, SUV, and Tempo Traveller options available.",
};

export default function CabServicesPage() {
  const vehicles = [
    {
      name: "Sedan (Swift Dzire / Etios)",
      type: "4 Seater",
      description: "Perfect for couples or small families travelling light. Comfortable for long journeys across the hills.",
      features: ["AC / Heater", "Experienced Hill Driver", "Clean Interiors", "Luggage carrier (on request)"],
      image: "/images/darjeeling-pkg.jpg", // Using placeholder image since we don't have explicit cab images
    },
    {
      name: "SUV (Innova / Xylo)",
      type: "6-7 Seater",
      description: "Ideal for families and groups. Spacious, comfortable and powerful for steep mountain roads.",
      features: ["AC / Heater", "Experienced Hill Driver", "Extra Legroom", "Spacious boot"],
      image: "/images/darjeeling-pkg.jpg",
    },
    {
      name: "Tempo Traveller",
      type: "12-14 Seater",
      description: "Best for large groups. Journey together with ample space and comfort.",
      features: ["Pushback seats", "Experienced Hill Driver", "Music System", "Ample luggage space"],
      image: "/images/darjeeling-pkg.jpg",
    }
  ];

  const popularRoutes = [
    { route: "NJP/Bagdogra to Darjeeling", time: "3 hours", type: "Point-to-Point" },
    { route: "NJP/Bagdogra to Gangtok", time: "4-5 hours", type: "Point-to-Point" },
    { route: "Darjeeling to Gangtok", time: "4 hours", type: "Point-to-Point" },
    { route: "Gangtok Local Sightseeing", time: "Full Day", type: "Sightseeing" },
    { route: "Darjeeling Local Sightseeing", time: "Half/Full Day", type: "Sightseeing" },
  ];

  return (
    <main className="min-h-screen pb-20 bg-surface">
      {/* Hero */}
      <section className="relative py-24 bg-[url('/images/hero-banner.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Premium Cab Services</h1>
          <p className="text-xl text-gray-200">Safe, comfortable, and reliable transportation across the Himalayas.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Vehicles */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">Our Fleet</h2>
          <p className="text-gray-600">Choose the perfect vehicle for your journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {vehicles.map((v, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
              <div className="relative h-48">
                <Image src={v.image} alt={v.name} fill className="object-cover" />
                <div className="absolute top-4 right-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {v.type}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{v.name}</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">{v.description}</p>
                <ul className="space-y-2 mb-6">
                  {v.features.map((f, j) => (
                    <li key={j} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="w-full text-center bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors">
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Routes */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Popular Routes</h2>
            <p className="text-gray-600">We cover all major destinations in the region.</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-gray-700">
                  <th className="py-4 px-6 font-semibold">Route / Service</th>
                  <th className="py-4 px-6 font-semibold">Est. Time</th>
                  <th className="py-4 px-6 font-semibold">Type</th>
                </tr>
              </thead>
              <tbody>
                {popularRoutes.map((route, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-900">{route.route}</td>
                    <td className="py-4 px-6 text-gray-600">{route.time}</td>
                    <td className="py-4 px-6">
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                        {route.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-6">Need a custom route or a complete tour package with transportation?</p>
            <Link href="/contact" className="inline-block bg-secondary text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-opacity">
              Contact Us for a Quote
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
