"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    category: "Booking & Payments",
    questions: [
      { q: "How do I book a tour?", a: "You can book directly through our website by selecting a package and filling out the inquiry form, or you can call our support team. We'll send you a detailed itinerary and payment link." },
      { q: "What is your cancellation policy?", a: "Cancellations made 30 days before departure get a full refund minus processing fees. Cancellations within 15-30 days incur a 50% fee. No refunds for cancellations within 14 days." },
      { q: "Do you offer installment payments?", a: "Yes, you can secure your booking with a 30% advance payment. The remaining balance must be cleared 15 days before the travel date." }
    ]
  },
  {
    category: "Travel & Accommodations",
    questions: [
      { q: "What type of hotels do you provide?", a: "We partner with 3-star, 4-star, and premium boutique properties depending on your package. All accommodations are vetted for cleanliness, safety, and hospitality." },
      { q: "Are meals included?", a: "Most packages include breakfast. Some remote packages (like North Sikkim) include all meals. Please check the 'Inclusions' section of your specific package." },
      { q: "Is travel insurance included?", a: "Basic travel insurance is not included in our standard packages but can be added at an additional cost during booking." }
    ]
  },
  {
    category: "Health & Safety",
    questions: [
      { q: "Is it safe to travel to high altitudes?", a: "Yes, but acclimatization is key. We design our itineraries to ensure gradual ascent. If you have underlying health conditions, consult your doctor before booking." },
      { q: "What should I pack?", a: "Layered clothing is essential. A detailed packing list will be provided once your booking is confirmed, tailored to your specific destination and season." }
    ]
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (catIdx: number, qIdx: number) => {
    const key = `${catIdx}-${qIdx}`;
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <main className="min-h-screen py-16 px-4 md:px-8 max-w-4xl mx-auto bg-surface">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600">
          Find answers to common questions about travelling with Himalayan Sathi.
        </p>
      </div>

      <div className="space-y-12">
        {faqs.map((group, catIdx) => (
          <div key={catIdx} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">
              {group.category}
            </h2>
            <div className="space-y-4">
              {group.questions.map((faq, qIdx) => {
                const isOpen = openItems[`${catIdx}-${qIdx}`];
                return (
                  <div key={qIdx} className="border border-gray-100 rounded-xl overflow-hidden transition-all duration-200 hover:border-gray-200">
                    <button 
                      onClick={() => toggleItem(catIdx, qIdx)}
                      className="w-full flex items-center justify-between p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <span className="font-semibold text-gray-900">{faq.q}</span>
                      <svg 
                        className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="p-4 bg-white text-gray-600 leading-relaxed border-t border-gray-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 md:p-12 text-center text-white shadow-lg">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Still have questions?</h2>
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
          We're here to help! Contact our support team for personalized assistance.
        </p>
        <Link href="/contact" className="inline-block bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
          Contact Support
        </Link>
      </div>
    </main>
  );
}
