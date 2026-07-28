'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ExpandableFAQ({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:border-primary/30 transition-colors">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="font-bold text-gray-900 pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div 
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-600 leading-relaxed text-sm">{answer}</p>
      </div>
    </div>
  );
}
