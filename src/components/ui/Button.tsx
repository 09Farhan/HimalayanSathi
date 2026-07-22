'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  href,
  icon,
  disabled,
  type = 'button',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-xl transition-all font-medium focus-ring';
  
  const variants = {
    primary: 'gradient-primary text-white hover:scale-105 hover:shadow-card disabled:opacity-70 disabled:hover:scale-100 disabled:hover:shadow-none',
    secondary: 'bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary-light)] disabled:opacity-70',
    outline: 'border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white disabled:opacity-70',
    accent: 'gradient-accent text-[var(--color-text-primary)] hover:pulse-glow disabled:opacity-70'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}
