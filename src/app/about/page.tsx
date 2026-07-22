import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Himalayan Sathi Tours & Travels",
  description: "Learn about Himalayan Sathi Tours & Travels, our mission, vision, and the team dedicated to making your Himalayan journey unforgettable.",
};

export default function AboutPage() {
  const team = [
    { name: "Rahul Sharma", role: "Founder & CEO" },
    { name: "Priya Singh", role: "Travel Consultant" },
    { name: "Amit Patel", role: "Operations Manager" },
    { name: "Sneha Gupta", role: "Customer Support" },
  ];

  return (
    <main className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20 px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">About Himalayan Sathi</h1>
          <p className="text-lg md:text-xl opacity-90">
            Your trusted companion for authentic Himalayan experiences since 2010.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary">Our Story</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Himalayan Sathi was born out of a deep love for the mountains and a desire to share the 
              unparalleled beauty of the Himalayas with the world. What started as a small group of local 
              guides has grown into a premier travel agency.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe in sustainable tourism that respects local cultures and preserves the natural 
              environment for future generations. Our tours are carefully crafted to provide authentic 
              experiences that go beyond standard sightseeing.
            </p>
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
            <Image 
              src="/images/darjeeling-pkg.jpg" 
              alt="Himalayan Mountains" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* MVV Section */}
      <section className="bg-surface py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-heading font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-gray-600">
                To provide safe, reliable, and deeply engaging travel experiences that connect people with 
                the majestic Himalayas and its diverse cultures.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-heading font-bold mb-4 text-primary">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted and preferred travel partner for Himalayan destinations, known for 
                our local expertise and commitment to sustainability.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-heading font-bold mb-4 text-primary">Our Values</h3>
              <p className="text-gray-600">
                Integrity, Customer-Centricity, Respect for Local Cultures, Environmental Responsibility, 
                and Continuous Innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-heading font-bold mb-12 text-center text-primary">Our Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Family Tours", "Honeymoon Packages", "Group Adventures", "Corporate Retreats"].map((service, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-800">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-surface py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center text-primary">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-semibold text-lg text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
