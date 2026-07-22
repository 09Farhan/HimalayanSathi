import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Car, Truck, Bus, CheckCircle2, ShieldCheck, Clock, Navigation, MapPin, Phone, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cab & Transport Services | Himalayan Sathi',
  description: 'Safe, comfortable, and reliable cab services in Darjeeling, Sikkim, and Bhutan. Book Sedans, SUVs, and Tempo Travellers.',
};

export default function CabServicesPage() {
  const vehicles = [
    {
      id: 'sedan',
      name: 'Sedan (Swift Dzire / Etios)',
      icon: <Car className="w-12 h-12 text-primary" />,
      capacity: '4 Passengers',
      price: '₹2,500 - ₹3,500 / day',
      bestFor: 'City transfers & short trips',
      features: ['Air Conditioned', 'Comfortable seating', 'Sufficient boot space', 'Perfect for small families']
    },
    {
      id: 'suv',
      name: 'SUV (Innova / Xylo / Scorpio)',
      icon: <Truck className="w-12 h-12 text-primary" />, // Using Truck as generic SUV/large vehicle icon for now, or use Car with diff style
      capacity: '6-7 Passengers',
      price: '₹3,500 - ₹5,000 / day',
      bestFor: 'Mountain roads & group travel',
      features: ['High ground clearance', 'Spacious interiors', 'Excellent for steep terrains', 'Carrier for extra luggage']
    },
    {
      id: 'tempo',
      name: 'Tempo Traveller',
      icon: <Bus className="w-12 h-12 text-primary" />,
      capacity: '10-15 Passengers',
      price: '₹5,000 - ₹8,000 / day',
      bestFor: 'Large groups & pilgrimages',
      features: ['Pushback seats', 'Ample legroom', 'Music system', 'Ideal for long journeys']
    }
  ];

  const routes = [
    { route: 'Siliguri to Darjeeling', price: '₹2,500 - ₹3,000' },
    { route: 'Siliguri to Gangtok', price: '₹3,000 - ₹3,500' },
    { route: 'Gangtok to Lachung', price: '₹4,000 - ₹5,000' },
    { route: 'Siliguri to Phuentsholing (Bhutan border)', price: '₹3,500 - ₹4,000' },
    { route: 'NJP / Bagdogra Airport to Darjeeling', price: '₹2,500 - ₹3,000' },
    { route: 'NJP / Bagdogra Airport to Gangtok', price: '₹3,000 - ₹3,500' },
  ];

  const reasons = [
    {
      icon: <Navigation className="w-8 h-8 text-accent" />,
      title: 'GPS Tracked',
      desc: 'All our vehicles are equipped with GPS for your safety and peace of mind.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-accent" />,
      title: 'Verified Drivers',
      desc: 'Professional, experienced local drivers who know the mountain terrains well.'
    },
    {
      icon: <Clock className="w-8 h-8 text-accent" />,
      title: '24/7 Support',
      desc: 'Round-the-clock customer support to assist you during your journey.'
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-accent" />,
      title: 'Clean & Sanitized',
      desc: 'Vehicles are thoroughly cleaned and sanitized before every trip.'
    }
  ];

  return (
    <div className="bg-surface min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/60 z-10"></div>
        <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('/images/hero-banner.jpg')] bg-cover bg-center"></div>
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
            Cab & Transport Services
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            Safe, comfortable, and reliable travel across Darjeeling, Sikkim, and Bhutan.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Your Journey, Our Responsibility</h2>
          <p className="text-gray-600 text-lg">
            Navigating the winding roads of the Himalayas requires skill and dependable vehicles. 
            We provide top-condition fleets with experienced local drivers who ensure your journey is as beautiful as the destination itself.
          </p>
        </div>

        {/* Vehicle Fleet */}
        <div>
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-10 text-center">Our Fleet</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col hover:shadow-xl transition-shadow">
                <div className="bg-primary/5 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  {vehicle.icon}
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">{vehicle.name}</h3>
                
                <div className="flex flex-col gap-2 mb-6 mt-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-50">
                    <span className="text-gray-500">Capacity</span>
                    <span className="font-semibold text-gray-900">{vehicle.capacity}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-50">
                    <span className="text-gray-500">Est. Price</span>
                    <span className="font-semibold text-primary">{vehicle.price}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-500">Best For</span>
                    <span className="font-medium text-gray-900 text-right">{vehicle.bestFor}</span>
                  </div>
                </div>

                <div className="mb-8 flex-grow">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {vehicle.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href="/contact"
                  className="w-full block text-center bg-primary text-white py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors mt-auto"
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Routes Table */}
        <div>
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">Popular Routes & Estimated Fares</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="py-4 px-6 font-semibold">Route</th>
                    <th className="py-4 px-6 font-semibold text-right">Estimated Fare (Sedan/Small Car)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {routes.map((route, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}>
                      <td className="py-4 px-6 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="font-medium text-gray-800">{route.route}</span>
                      </td>
                      <td className="py-4 px-6 text-right font-semibold text-gray-700">
                        {route.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-yellow-50 p-4 text-sm text-yellow-800 border-t border-yellow-100">
              * Note: Fares are approximate and may vary based on season, vehicle type, and fuel prices. Please contact us for exact quotes.
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-10 text-center">Why Choose Our Cabs?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-3xl p-8 md:p-12 text-center text-white shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
          
          <h2 className="text-3xl font-heading font-bold mb-4 relative z-10">Ready to Book Your Ride?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto relative z-10">
            Get in touch with us instantly via phone or WhatsApp to secure your vehicle for the trip.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <a 
              href="tel:+919876543210" 
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-colors shadow-md"
            >
              <Phone className="w-5 h-5" />
              Call +91 98765 43210
            </a>
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-3 rounded-full font-bold hover:bg-[#128C7E] transition-colors shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>

      </section>
    </div>
  );
}
