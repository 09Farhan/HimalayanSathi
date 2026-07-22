"use client";

import { useEffect, useRef, useState } from "react";
import {
  Award,
  Shield,
  Map,
  HeartHandshake,
  Mountain,
  Car,
  Compass,
  Users,
} from "lucide-react";

/** Animated counter hook */
function useCounter(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return { count, start: () => setStarted(true) };
}

const features = [
  {
    icon: Award,
    title: "20+ Years Expertise",
    description:
      "Two decades of crafting perfect Himalayan journeys with unmatched local knowledge and trusted partnerships.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Map,
    title: "Experienced Local Guides",
    description:
      "Our certified guides are born and raised in the mountains — they know every trail, temple, and hidden gem.",
    color: "text-primary-light",
    bg: "bg-primary-light/10",
  },
  {
    icon: Shield,
    title: "Safe & Comfortable Rides",
    description:
      "Well-maintained vehicles, professional drivers, and 24/7 roadside support for worry-free travel.",
    color: "text-secondary-light",
    bg: "bg-secondary-light/10",
  },
  {
    icon: HeartHandshake,
    title: "Tailor-Made Tours",
    description:
      "No two travellers are the same. We design custom itineraries around your pace, interests, and budget.",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
];

const stats = [
  { icon: Mountain, value: 50, suffix: "+", label: "Tour Packages" },
  { icon: Users, value: 5000, suffix: "+", label: "Happy Travellers" },
  { icon: Compass, value: 30, suffix: "+", label: "Destinations Covered" },
  { icon: Car, value: 100, suffix: "+", label: "Vehicles in Fleet" },
];

/**
 * WhyChooseUs – Feature cards + animated stats counters
 */
export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  // Intersection observer to trigger counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Why Travel With Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Why Choose <span className="text-primary-light">Himalayan Sathi</span>?
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            We go beyond just booking tours — we craft unforgettable Himalayan
            experiences backed by trust, safety, and passion.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group p-6 rounded-2xl bg-surface border border-surface-muted hover:border-primary-light/30 transition-all duration-500 hover:-translate-y-2 ${
                inView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{
                animationDelay: `${index * 0.15}s`,
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div
                className={`w-14 h-14 ${feature.bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="font-heading text-lg font-bold text-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats counters */}
        <div className="gradient-primary rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatCounter
                key={stat.label}
                icon={stat.icon}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                animate={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCounter({
  icon: Icon,
  value,
  suffix,
  label,
  animate,
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  suffix: string;
  label: string;
  animate: boolean;
}) {
  const { count, start } = useCounter(value);

  useEffect(() => {
    if (animate) start();
  }, [animate, start]);

  return (
    <div className="text-center">
      <Icon className="w-8 h-8 text-accent mx-auto mb-3" />
      <p className="text-3xl sm:text-4xl font-bold text-white">
        {count.toLocaleString("en-IN")}
        {suffix}
      </p>
      <p className="text-white/70 text-sm mt-1">{label}</p>
    </div>
  );
}
