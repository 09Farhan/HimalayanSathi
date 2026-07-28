'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  href,
  icon,
  disabled,
  fullWidth = false,
  type = 'button',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-full transition-all duration-300 font-semibold focus-ring';
  
  const variants = {
    primary: 'gradient-primary text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-md',
    secondary: 'bg-[var(--color-secondary)] text-white shadow-sm hover:shadow-md hover:bg-[var(--color-secondary-light)] disabled:opacity-70',
    outline: 'border border-[var(--color-primary-light)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white disabled:opacity-70',
    accent: 'gradient-accent text-primary-dark shadow-[0_4px_14px_0_rgba(214,158,46,0.39)] hover:shadow-[0_6px_20px_rgba(214,158,46,0.23)] hover:-translate-y-0.5 disabled:opacity-70'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;

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
