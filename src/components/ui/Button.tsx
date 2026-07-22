'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
<<<<<<< HEAD
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 focus-ring';
  
  const variants = {
    primary: 'gradient-primary text-white shadow-md hover:shadow-lg',
    secondary: 'bg-secondary text-white shadow-md hover:shadow-lg hover:bg-secondary-light',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    accent: 'gradient-accent text-primary-dark shadow-md hover:shadow-lg'
=======
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
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

<<<<<<< HEAD
  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
=======
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {icon && <span className="mr-2">{icon}</span>}
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e
        {children}
      </Link>
    );
  }

  return (
<<<<<<< HEAD
    <button className={combinedStyles} {...props}>
=======
    <button type={type} className={classes} disabled={disabled} {...props}>
      {icon && <span className="mr-2">{icon}</span>}
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e
      {children}
    </button>
  );
}
