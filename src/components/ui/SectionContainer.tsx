import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
<<<<<<< HEAD
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
=======
  className?: string;
  title?: string;
  subtitle?: string;
  id?: string;
  dark?: boolean;
}

export default function SectionContainer({
  children,
  className = '',
  title,
  subtitle,
  id,
  dark = false,
}: SectionContainerProps) {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 ${dark ? 'bg-[var(--color-surface-dark)] text-[var(--color-text-inverse)]' : ''} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12 animate-fade-in-up">
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
                {title}
              </h2>
            )}
            {title && (
              <div className="w-24 h-1 bg-[var(--color-accent)] mx-auto rounded-full mb-6" />
            )}
            {subtitle && (
              <p className={`text-lg max-w-2xl mx-auto ${dark ? 'text-[var(--color-text-light)]' : 'text-[var(--color-text-secondary)]'}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e
      </div>
    </section>
  );
}
