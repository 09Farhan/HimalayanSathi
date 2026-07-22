'use client';

import { useEffect, useRef, useState } from 'react';
import { Award, ShieldCheck, Map as MapIcon, Users } from 'lucide-react';

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: Award, title: '20+ Years Expertise', desc: 'Deep local knowledge and years of creating unforgettable memories.' },
    { icon: Users, title: 'Local Guides', desc: 'Passionate regional experts who bring destinations to life.' },
    { icon: ShieldCheck, title: 'Safe Rides', desc: 'Well-maintained vehicles and experienced drivers for mountain roads.' },
    { icon: MapIcon, title: 'Tailor-Made Tours', desc: 'Custom itineraries crafted specifically for your preferences.' },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Why Choose Himalayan Sathi?</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">We don't just organize trips; we craft experiences that resonate for a lifetime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-md">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-text-secondary text-sm">{feature.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="gradient-primary rounded-2xl p-8 text-white shadow-card">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">{isVisible ? '50+' : '0'}</div>
              <div className="text-sm opacity-80 uppercase tracking-wider">Packages</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">{isVisible ? '5000+' : '0'}</div>
              <div className="text-sm opacity-80 uppercase tracking-wider">Travellers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">{isVisible ? '30+' : '0'}</div>
              <div className="text-sm opacity-80 uppercase tracking-wider">Destinations</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">{isVisible ? '100+' : '0'}</div>
              <div className="text-sm opacity-80 uppercase tracking-wider">Vehicles</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
