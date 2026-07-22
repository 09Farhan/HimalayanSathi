'use client';

import React, { useState } from 'react';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
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
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
