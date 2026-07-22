import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  dark?: boolean;
  className?: string;
  id?: string;
}

export function SectionContainer({
  children,
  title,
  subtitle,
  dark = false,
  className = '',
  id
}: SectionContainerProps) {
  return (
    <section 
      id={id}
      className={`py-16 md:py-24 ${dark ? 'bg-surface-dark text-text-inverse' : 'bg-surface text-text-primary'} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {subtitle && (
              <span className={`text-sm md:text-base font-semibold tracking-wider uppercase mb-2 block ${dark ? 'text-accent' : 'text-primary'}`}>
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-4">
                {title}
              </h2>
            )}
            <div className={`h-1 w-24 mx-auto rounded-full ${dark ? 'gradient-accent' : 'gradient-primary'}`} />
          </div>
        )}
        <div className="stagger-children">
          {children}
        </div>
      </div>
    </section>
  );
}
