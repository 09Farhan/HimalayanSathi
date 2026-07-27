import React from 'react';

type FaqItem = {
  question: string;
  answer: string;
};

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  // Uses native HTML details/summary to eliminate React state and JS bundle size
  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, i) => (
        <details key={i} className="group bg-white rounded-xl shadow-sm border border-gray-100 p-6 cursor-pointer hover:shadow-md transition-shadow">
          <summary className="font-semibold text-primary list-none flex justify-between items-center outline-none">
            {item.question}
            <span className="transition-transform duration-300 group-open:rotate-180 text-primary-light">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </summary>
          <div className="mt-4 text-text-secondary text-sm leading-relaxed border-t border-gray-50 pt-4">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
