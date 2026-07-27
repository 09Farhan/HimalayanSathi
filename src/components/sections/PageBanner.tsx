import React from 'react';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  icon?: string;
}

export default function PageBanner({ title, subtitle, icon }: PageBannerProps) {
  return (
    <section className="relative py-20 bg-primary overflow-hidden">
      <div className="absolute inset-0 pattern-bg opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {icon && <div className="text-4xl mb-4 animate-float">{icon}</div>}
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
