'use client';

import React, { useState } from 'react';
<<<<<<< HEAD

interface AccordionItem {
  title: string;
  content: React.ReactNode;
=======
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  question: string;
  answer: string;
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e
}

interface AccordionProps {
  items: AccordionItem[];
<<<<<<< HEAD
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
=======
  allowMultiple?: boolean;
}

export default function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenIndices(prev => 
        prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndices(prev => prev.includes(index) ? [] : [index]);
    }
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
<<<<<<< HEAD
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className={`border border-surface-muted rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-l-4 border-l-accent shadow-md' : 'border-l-4 border-l-transparent'}`}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between p-4 md:p-6 bg-surface-card hover:bg-surface-muted/50 transition-colors text-left focus-ring"
            >
              <span className={`font-semibold text-lg ${isOpen ? 'text-primary' : 'text-text-primary'}`}>
                {item.title}
              </span>
              <svg 
                className={`w-5 h-5 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out bg-surface-card ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="p-4 md:p-6 pt-0 text-text-secondary border-t border-surface-muted">
                {item.content}
=======
        const isOpen = openIndices.includes(index);
        
        return (
          <div 
            key={index} 
            className={`border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-[var(--color-surface-muted)] border-l-4 border-l-[var(--color-accent)]' : 'bg-white'}`}
          >
            <button
              className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none focus-ring"
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-[var(--color-text-primary)] pr-8">{item.question}</span>
              <ChevronDown 
                className={`w-5 h-5 text-[var(--color-primary-light)] transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} 
              />
            </button>
            
            <div 
              className="grid transition-all duration-300 ease-in-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-5 text-[var(--color-text-secondary)]">
                  {item.answer}
                </div>
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
