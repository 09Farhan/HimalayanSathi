'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
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
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
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
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
